<template>
  <PowerfulTable
    :header="headers"
    :pagination-property="{
      pageSizes: [2, 5, 7],
    }"
    :list-request="{
      listApi,
      listQuery,
    }"
  />
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useBasicTableData } from './index';
const { headers, lists } = useBasicTableData();
const listQuery = reactive({
  name: '',
});
const listApi = (params: any) => {
  /**
   * 模拟 axios 请求
   */
  return new Promise((resolve) => {
    setTimeout(() => {
      const list = lists.filter((item, index) => {
        return (
          index >= (params.pageNo - 1) * params.pageSize &&
          index < params.pageNo * params.pageSize
        );
      });

      resolve({
        data: {
          result: {
            rows: list,
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
