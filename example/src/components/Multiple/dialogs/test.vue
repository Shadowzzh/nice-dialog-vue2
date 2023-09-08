<template>
  <el-dialog :title="title" :visible.sync="visible" width="30%" :before-close="handleClose">
    <div>{{ content }}</div>
    <div><el-input v-model="value" /></div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onClose">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      value: '',
      visible: false
    };
  },

  methods: {
    onClose() {
      this.visible = false;
    },

    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    }
  }
};
</script>
