<template>
  <el-button type="primary" @click="onOpen">基本功能</el-button>
</template>

<script>
import Vue from 'vue';
import NiceDialog from '@@/niceDialog.js';
import BasicDialog from './dialog.vue';

const BasicDialogInstance = NiceDialog.create(BasicDialog, undefined, Vue);

export default {
  name: 'Basic',

  components: {},

  methods: {
    onOpen() {
      BasicDialogInstance.open(undefined, this);
    }
  }
};
</script>
