<template>
  <div id="app">
    <Basic />
    <Props />
    <NoDestroy />
  </div>
</template>

<script>
import Basic from './components/Basic';
import Props from './components/Props';
import NoDestroy from './components/NoDestroy';

export default {
  name: 'App',
  components: {
    Basic,
    Props,
    NoDestroy
  }
};
</script>

<style></style>
