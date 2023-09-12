<template>
  <el-dialog :title="title" :visible.sync="visible" @close="onClose">
    {{ content }}
    <template #footer>
      <el-button @click="onClose">取 消</el-button>
      <el-button type="primary" @click="onClose">确 定</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      visible: false
    };
  },

  methods: {
    onClose() {
      this.visible = false;
    }
  }
};
</script>
