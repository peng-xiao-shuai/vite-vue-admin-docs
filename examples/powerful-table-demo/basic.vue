<template>
  <PowerfulTable :list="lists" :header="headers"> </PowerfulTable>
</template>

<script lang="ts" setup>
import { useBasicTableData } from './index';

const { headers, lists } = useBasicTableData();
</script>
