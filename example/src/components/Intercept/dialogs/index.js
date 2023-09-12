import Vue from 'vue';

import NiceDialog from '@@/index';
import External from './External.vue';
import Internal from './Internal.vue';

export const [InternalDialog, ExternalDialog] = NiceDialog.create(
  [Internal, External],
  undefined,
  Vue
);
