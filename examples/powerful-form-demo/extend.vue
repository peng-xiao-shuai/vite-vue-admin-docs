<template>
  <div style="margin-bottom: 20px">
    <PowerfulForm
      ref="PForm"
      extend-table
      :property="{
        inline: true,
      }"
    />

    <el-button
      type="primary"
      @click="PTable?.resetList(PForm?.powerfulFormData.formData || {})"
    >
      查询
    </el-button>
    <el-button @click="PForm?.resetForm">重置</el-button>
  </div>

  <PowerfulTable
    ref="PTable"
    :header="headers"
    :pagination-property="{
      pageSizes: [2, 5, 7],
    }"
    :list-request="{
      listApi,
      listQuery,
      pageSizeKey: 'pageSize',
      pageNoKey: 'pageNum',
      responseKey: 'data.result',
      listsKey: 'rows',
      totalKey: 'total',
    }"
  />
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useBasicTableData } from './index';
import { PowerfulTableExpose } from 'el-plus-powerful-table-ts';
import { PowerfulFormExpose } from 'el-plus-powerful-form';
const { headers, lists } = useBasicTableData();
const listQuery = reactive({
  pageNum: 1,
  pageSize: 2,
});
const PTable = ref<PowerfulTableExpose | null>(null);
const PForm = ref<PowerfulFormExpose | null>(null);

const listApi = (formData: Record<string, any> = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      delete formData.pageNum;
      delete formData.pageSize;
      console.log(formData, 'formData');

      const rows = (
        Object.keys(formData).length === 0
          ? lists
          : lists.filter((item) => {
              return Object.keys(formData).every((key) => {
                if (!formData[key] && typeof formData[key] !== 'number')
                  return true;
                return item[key] === formData[key];
              });
            })
      ).filter((item, index) => {
        return (
          index >= (listQuery.pageNum - 1) * listQuery.pageSize &&
          index < listQuery.pageNum * listQuery.pageSize
        );
      });

      console.log(rows, 'rows');

      resolve({
        data: {
          result: {
            rows,
            total: lists.length,
          },
          message: '成功',
          code: '200',
        },
      });
    });
  });
};
</script>
