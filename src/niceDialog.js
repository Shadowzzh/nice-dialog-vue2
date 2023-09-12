import Vue from 'vue';

/** 创建Promise */
const createPromise = () => {
  let resolve, reject;
  const promise = new Promise((r, j) => ((resolve = r), (reject = j)));

  return [promise, resolve, reject];
};

export default class NiceDialog {
  /** 缓存已经创建的Dialog标识 */
  static cache = new Set();

  params = {
    /** el-dialog的动画时长，默认是200ms */
    duration: 200,
    /** el-dialog的唯一标识 */
    _tag: 'dialog',
    /** 挂载到的父节点 */
    parentDom: document.body,
    /** 关闭弹窗时是否销毁组件 */
    destroy: true
  };

  /** Dialog实例 */
  instance = null;
  /** Dialog实例挂载到的DOM的Parent */
  container = null;
  /** Dialog实例的唯一标识 */
  unique = null;

  constructor(component, params = {}, _Vue) {
    const mergeParams = { ...this.params, ...params };

    this.component = component;
    this.params = mergeParams;
    this._VUE = _Vue ?? Vue;

    if (!_Vue) {
      throw new Error('NiceDialog组件，未找到vue对象。', _Vue);
    }

    this.unique = `${mergeParams._tag}-${Date.now()}`;
  }

  /** 创建NiceDialog */
  static create(component, params = {}, Vue) {
    // 支持数组创建多个Dialog
    if (Array.isArray(component)) {
      return component.map((item) => new NiceDialog(item, params, Vue));
    }

    return new NiceDialog(component, params, Vue);
  }

  /** 打开Dialog */
  async open(propsData = {}, parent = undefined) {
    const [promise, resolve, reject] = createPromise();

    // 实例已经存在时，就不需要再次创建。通常是在destroy为false时
    if (this.instance) {
      const isOpen = await this.instance.onOpenBefore?.(); // 打开之前调用onOpenBefore
      // 如果返回false，就不打开Dialog
      if (isOpen === false) {
        reject('cancel-open');
        return promise;
      }

      this.instance.visible = true;
      resolve();
      return promise;
    }

    // el挂载到 -> container挂载到 -> parentDom(默认是body)
    this.container = document.createElement('div');
    const el = document.createElement('div');

    this.container.appendChild(el);
    this.params.parentDom.appendChild(this.container);

    // 创建组件实例, DOM挂载到VUE实例上
    const ComponentConstructor = this._VUE.extend(this.component);
    this.instance = new ComponentConstructor({
      propsData,
      parent
    }).$mount(el);

    if (typeof this.instance.visible !== 'boolean') {
      resolve();
      return promise;
    }

    const isOpen = await this.instance.onOpenBefore?.();

    if (isOpen === false) {
      reject('cancel-open');
      return promise;
    }

    // 监听visible变化，如果为false，就关闭Dialog
    this.instance.$watch('visible', async (visible) => {
      if (visible === false) this.close();
    });

    this.instance.$nextTick(() => (this.instance.visible = true));

    await this.instance.onOpenAfter?.();
    resolve();
    return promise;
  }

  /** 关闭时Dialog */
  async close() {
    const [promise, resolve, reject] = createPromise();

    if (!this.instance) {
      resolve();
      return promise;
    }

    // 如果已经销毁了，就不需要再次销毁
    if (NiceDialog.cache.has(this.unique) || !this.instance) {
      resolve();
      return promise;
    }

    NiceDialog.cache.add(this.unique);

    this.instance.visible = false;

    // 如果设置了销毁组件，就卸载组件
    if (this.params.destroy) {
      const [durationPromise, durationResolve] = createPromise();

      // 因为关闭Dialog时有动画时间，所以需要等待动画结束后再卸载组件
      setTimeout(async () => {
        this.instance.onCloseAfter?.();
        this.instance.$destroy();
        this.instance = null;
        this.params.parentDom.removeChild(this.container);
        durationResolve();
      }, this.params.duration);

      // 这里等待的时间是【el-dialog的动画时长】+ onCloseAfter的执行时间】
      await durationPromise;
    } else {
      this.instance.onCloseAfter?.();
    }

    NiceDialog.cache.delete(this.unique);

    resolve();
    return promise;
  }
}
