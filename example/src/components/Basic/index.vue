<template>
  <el-button type="primary" @click="onOpen">基本功能</el-button>
</template>

<script>
import NiceDialog from 'nice-dialog-vue2';
import BasicDialog from './dialog.vue';

const BasicDialogInstance = NiceDialog.create(BasicDialog);

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
