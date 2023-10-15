<script setup lang="ts">
import type { PropType } from 'vue';
defineProps({
  type: String as PropType<'' | 'success' | 'warning' | 'info' | 'danger'>,
  content: String,
});
</script>

<template>
  <ClientOnly>
    <ElTag size="small" :type="type" class="mx-1" effect="light" round>{{
      content
    }}</ElTag>
  </ClientOnly>
</template>
