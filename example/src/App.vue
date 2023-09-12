<template>
  <div id="app">
    <div>
      <p>基本功能</p>
      <Basic />
    </div>
    <div>
      <p>传参数</p>
      <Props />
    </div>
    <div>
      <p>拦截</p>
      <Intercept />
    </div>
    <div>
      <p>使用Promise</p>
      <Promise />
    </div>
    <div>
      <p>关闭时不销毁组件</p>
      <NoDestroy />
    </div>
    <div>
      <p>Multiple</p>
      <Multiple />
    </div>
    <div>
      <p>实际应用</p>
      <PersonalInfo />
    </div>
  </div>
</template>

<script>
import Basic from './components/Basic';
import Props from './components/Props';
import NoDestroy from './components/NoDestroy';
import Multiple from './components/Multiple';
import Intercept from './components/Intercept';
import Promise from './components/Promise';
import PersonalInfo from './components/Reality/PersonalInfo';

export default {
  name: 'App',
  components: {
    Intercept,
    Basic,
    Props,
    NoDestroy,
    Multiple,
    PersonalInfo,
    Promise
  }
};
</script>

<style></style>
