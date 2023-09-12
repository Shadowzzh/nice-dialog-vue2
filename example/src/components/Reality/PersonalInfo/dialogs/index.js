import Vue from 'vue';

import NiceDialog from 'nice-dialog-vue2';

import Company from './Company.vue';
import Project from './Project.vue';
import Region from './Region.vue';

export const [CompanyDialog, ProjectDialog, RegionDialog] = NiceDialog.create([
  Company,
  Project,
  Region
]);
