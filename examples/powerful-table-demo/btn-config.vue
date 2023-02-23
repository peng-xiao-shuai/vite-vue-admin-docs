<template>
  <PowerfulTable
    ref="PowerfulTable"
    :list="lists"
    :btnConfig="btnConfig"
    :isPagination="false"
    isSelect
    :header="headers"
    @btn-plus-change="btnChange"
  >
  </PowerfulTable>
</template>

<script lang="ts" setup>
import { BtnConfig } from 'el-plus-powerful-table-ts';
import { markRaw, reactive } from 'vue';
// import { ElMessageBox, ElMessage } from 'element-plus/es';
import { Delete, Edit, Grid, Plus, Refresh } from '@element-plus/icons-vue';
import { useBasicTableData } from './index';

const btnConfig: BtnConfig.Config = reactive({
  btnSlot: 'all',
  btnRightList: [
    {
      effect: 'refresh',
      tip: '刷新',
      property: {
        icon: markRaw(Refresh),
        type: 'primary',
      },
    },
    {
      effect: 'columns',
      property: {
        icon: markRaw(Grid),
      },
    },
  ],
  btnList: [
    {
      text: '新增',
      effect: 'add',
      showBtn: true,
      property: {
        icon: markRaw(Plus),
        type: 'primary',
      },
    },
    {
      text: '修改',
      operateType: 'single',
      effect: 'edit',
      // showBtn: () => false,
      property: {
        icon: markRaw(Edit),
        type: 'primary',
      },
    },
    {
      text: '批量删除',
      operateType: 'batch',
      effect: 'remove',
      beforeClick({ btnItem }, resolve) {
        // ElMessageBox.confirm('是否确认批量删除', '提示', {
        //   confirmButtonText: '确认',
        //   cancelButtonText: '取消',
        //   type: 'warning',
        // }).then(() => {
        resolve(true);
        // });
      },
      property: {
        icon: markRaw(Delete),
        type: 'danger',
      },
      // tipContent: '立即执行批量删除'
    },
  ],
});

const btnChange = (e) => {
  if (e.effect === 'add') {
    // ElMessage.success('新增操作，参数详情，查看控制台');
    console.log('新增操作', e);
  } else if (e.effect === 'edit') {
    // ElMessage.success('修改操作，参数详情，查看控制台');
    console.log('修改操作', e);
  } else if (e.effect === 'remove') {
    // ElMessage.success('批量删除操作，参数详情，查看控制台');
    console.log('批量删除操作', e);
  }
};

const { headers, lists } = useBasicTableData();
</script>
