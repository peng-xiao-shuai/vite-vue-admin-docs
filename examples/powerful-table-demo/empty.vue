<template>
  <PowerfulTable :list="[]" :header="headers">
    <template #empty>
      <div>暂无车型数据!!!!!</div>
    </template>
  </PowerfulTable>
</template>

<script lang="ts" setup>
import { useBasicTableData } from './index';

const { headers, lists } = useBasicTableData();
</script>
