<template>
  <PowerfulTable
    :list="list"
    :header="headers"
    :pagination-property="{
      total: lists.length,
      pageSizes: [2, 5, 7],
    }"
    @size-change="getList"
  >
  </PowerfulTable>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from 'vue';
import { Lists, useBasicTableData } from './index';
const { headers, lists } = useBasicTableData();
const listQuery = reactive({
  pageNum: 1,
  pageSize: 2,
});
const list = ref<Lists[]>([]);
const getList = (e?: { params: any; select: any }) => {
  Object.assign(listQuery, e?.params);

  if (e?.params) {
    console.log('page', listQuery, '选中数组', e.select);
  }

  setTimeout(() => {
    list.value = lists.filter((item, index) => {
      return (
        index >= (listQuery.pageNum - 1) * listQuery.pageSize &&
        index < listQuery.pageNum * listQuery.pageSize
      );
    });
  }, 200);
};

onMounted(() => {
  getList();
});
</script>
