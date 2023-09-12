<template>
  <div>
    <el-button type="primary" @click="onOpenTest1('test1')">打开Test1</el-button>
    <el-button type="primary" @click="onOpenTest2('test2')">打开Test2</el-button>
    <el-button type="primary" @click="onOpenTest3('test3')">打开Test3</el-button>
    <el-button type="primary" @click="onOpenTest4('test4')">打开Test4</el-button>
  </div>
</template>

<script>
import { Test1, Test2, Test3, Test4 } from './dialogs';

export default {
  name: 'Basic',

  components: {},

  methods: {
    onOpenTest1(msg) {
      Test1.open({ title: msg, content: msg }, this);
    },
    onOpenTest2(msg) {
      Test2.open({ title: msg, content: msg }, this);
    },
    onOpenTest3(msg) {
      Test3.open({ title: msg, content: msg }, this);
    },
    onOpenTest4(msg) {
      Test4.open({ title: msg, content: msg }, this);
    }
  }
};
</script>
