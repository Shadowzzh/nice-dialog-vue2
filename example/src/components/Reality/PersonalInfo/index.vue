<template>
  <div>
    <p>实际应用</p>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="日期"> </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column prop="province" label="省份"> </el-table-column>
      <el-table-column prop="city" label="市区"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column prop="zip" label="邮编"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="onOpenCompany"> 公司信息 </el-button>
          <el-button type="text" size="small" @click="onOpenProject"> 项目信息 </el-button>
          <el-button type="text" size="small" @click="onOpenRegionDialog"> 地址信息 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { CompanyDialog, ProjectDialog, RegionDialog } from './dialogs';

export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }
      ]
    };
  },

  methods: {
    onOpenCompany() {
      CompanyDialog.open({ title: '公司信息' }, this);
    },
    onOpenProject() {
      ProjectDialog.open({ title: '项目信息' }, this);
    },
    onOpenRegionDialog() {
      RegionDialog.open({ title: '地址信息' }, this);
    }
  }
};
</script>
