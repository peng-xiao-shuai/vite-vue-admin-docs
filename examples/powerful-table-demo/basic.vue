<template>
  <!-- <PowerfulTable ref="PowerfulTable" :list="lists" isSelect :header="headers"> -->
  <!-- </PowerfulTable> -->
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from 'vue';
import type { PowerfulTableHeader } from 'el-plus-powerful-table-ts';
// import { lists, header } from './index';
// import type { Lists } from './index';

// const list = ref<Lists[]>(lists);
// const headers: PowerfulTableHeader<Lists[0]>[] = reactive(header);
const listQuery = reactive({
  pageNum: 1,
  pageSize: 2,
});

const getList = (query = {}) => {
  Object.assign(listQuery, query);

  // setTimeout(() => {
  //   list.value = lists.filter(
  //     (item, index) =>
  //       index >= (listQuery.pageNum - 1) * listQuery.pageSize &&
  //       index < listQuery.pageNum * listQuery.pageSize
  //   );
  // });
};

onMounted(() => {
  getList();
});
</script>
