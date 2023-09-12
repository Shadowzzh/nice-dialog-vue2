<template>
  <div>
    <el-button type="primary" :loading="loadingInternal" @click="onOpenInternalDialog">
      Dialog内部使用拦截
    </el-button>

    <el-button type="primary" :loading="loadingExternal" @click="onOpenExternalDialog">
      Dialog外部使用拦截
    </el-button>

    <el-button type="primary" :loading="loadingAsync" @click="onOpenAsyncDialog">
      Dialog同时使用拦截
    </el-button>
  </div>
</template>

<script>
import { InternalDialog, ExternalDialog } from './dialogs';

export default {
  name: 'Intercept',

  components: {},

  data() {
    return {
      loadingInternal: false,
      loadingExternal: false,
      loadingAsync: false
    };
  },

  methods: {
    /**
     * 打开内部拦截的 Dialog
     */
    async onOpenInternalDialog() {
      this.loadingInternal = true;

      await InternalDialog.open(undefined, this).finally(() => {
        this.loadingInternal = false;
      });
    },

    /**
     * 打开外部拦截的 Dialog
     */
    async onOpenExternalDialog() {
      this.loadingExternal = true;

      const verify = () => new Promise((_, j) => setTimeout(j, 2000));

      // 模拟调用接口报错
      try {
        await verify();
      } catch (error) {
        this.$message.error('打开失败');
        return;
      } finally {
        this.loadingExternal = false;
      }

      ExternalDialog.open(undefined, this);
    },

    /**
     * 打开外部拦截的 Dialog
     */
    async onOpenAsyncDialog() {
      this.loadingAsync = true;

      const verify = () => new Promise((r) => setTimeout(r, 2000));

      // 模拟调用接口报错
      await verify();
      this.$message.success('外部拦截通过');

      await InternalDialog.open(undefined, this).finally(() => {
        this.loadingAsync = false;
      });
    }
  }
};
</script>
