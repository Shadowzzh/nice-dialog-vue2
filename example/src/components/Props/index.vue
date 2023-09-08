<template>
  <el-button type="primary" @click="onOpen">传参数</el-button>
</template>

<script>
import Vue from 'vue';
import { NiceDialog } from '@@/index';
import BasicDialog from './dialog.vue';

const BasicDialogInstance = NiceDialog.create(BasicDialog, undefined, Vue);

export default {
  name: 'Props',

  components: {},

  methods: {
    onOpen() {
      const dialogProps = {
        title: '明天',
        content: '你好'
      };
      BasicDialogInstance.open(dialogProps, this);
    }
  }
};
</script>
