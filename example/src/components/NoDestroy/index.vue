<template>
  <el-button type="primary" @click="onOpen">关闭时不销毁组件</el-button>
</template>

<script>
import Vue from 'vue';
import NiceDialog from 'nice-dialog-vue2';
import NoDestroyDialog from './dialog.vue';

const NoDestroyDialogInstance = NiceDialog.create(NoDestroyDialog, {
  destroy: false
});

export default {
  name: 'NoDestroy',

  components: {},

  methods: {
    onOpen() {
      const dialogProps = {
        title: '昨天',
        content: '你好'
      };
      NoDestroyDialogInstance.open(dialogProps, this);
    }
  }
};
</script>
