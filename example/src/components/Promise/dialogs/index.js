import Vue from 'vue';

import NiceDialog from '@@/index';
import Promise from './Promise.vue';

export const [PromiseDialog] = NiceDialog.create([Promise], undefined, Vue);
