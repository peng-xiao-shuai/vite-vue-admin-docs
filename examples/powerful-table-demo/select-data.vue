<template>
  <PowerfulTable
    ref="PowerfulTable"
    :list="lists"
    isSelect
    :selectData="[{ ID: 1 }, { ID: 2 }]"
    :selectCompare="['ID', 'id']"
    :isPagination="false"
    :header="headers"
  >
  </PowerfulTable>
</template>

<script lang="ts" setup>
import { useBasicTableData } from './index';

const { headers, lists } = useBasicTableData();
</script>
