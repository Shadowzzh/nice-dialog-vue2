import Vue from 'vue';

import NiceDialog from 'nice-dialog-vue2';
import Test from './test.vue';

export const [Test1, Test2, Test3, Test4] = NiceDialog.create([Test, Test, Test, Test], {
  destroy: false
});
