import Vue from 'vue';

import NiceDialog from 'nice-dialog-vue2';
import Promise from './Promise.vue';

export const [PromiseDialog] = NiceDialog.create([Promise]);
