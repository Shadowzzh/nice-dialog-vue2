import Vue from 'vue';

import NiceDialog from 'nice-dialog-vue2';
import External from './External.vue';
import Internal from './Internal.vue';

export const [InternalDialog, ExternalDialog] = NiceDialog.create([Internal, External]);
