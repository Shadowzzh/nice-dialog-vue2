<template>
  <div id="app">
    <Basic />
    <Props />
    <NoDestroy />
    <Multiple />
    <PersonalInfo />
  </div>
</template>

<script>
import Basic from './components/Basic';
import Props from './components/Props';
import NoDestroy from './components/NoDestroy';
import Multiple from './components/Multiple';
import PersonalInfo from './components/Reality/PersonalInfo';

export default {
  name: 'App',
  components: {
    Basic,
    Props,
    NoDestroy,
    Multiple,
    PersonalInfo
  }
};
</script>

<style></style>
