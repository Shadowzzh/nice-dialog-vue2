<template>
  <div id="app">
    <Basic />
    <Props />
    <NoDestroy />
    <Multiple />
  </div>
</template>

<script>
import Basic from './components/Basic';
import Props from './components/Props';
import NoDestroy from './components/NoDestroy';
import Multiple from './components/Multiple';

export default {
  name: 'App',
  components: {
    Basic,
    Props,
    NoDestroy,
    Multiple
  }
};
</script>

<style></style>
