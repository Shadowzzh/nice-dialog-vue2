<template>
  <div>
    <el-button type="primary" :loading="loading" @click="onOpen"> Promise </el-button>
  </div>
</template>

<script>
import { PromiseDialog } from './dialogs';

export default {
  name: 'Promise',

  components: {},

  data() {
    return {
      loading: false
    };
  },

  methods: {
    /**
     * 打开内部拦截的 Dialog
     */
    async onOpen() {
      this.loading = true;

      await PromiseDialog.open({ title: '明天', content: '你好' }, this).finally(() => {
        this.loading = false;
      });

      this.$message.success('打开成功');
    }
  }
};
</script>
