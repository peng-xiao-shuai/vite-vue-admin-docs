<template>
  <PowerfulTable ref="PowerfulTable" :list="lists" :header="header">
  </PowerfulTable>
</template>

<script lang="ts" setup>
import { useBasicTableData, Lists } from './index';
import { ref, onMounted } from 'vue';
import type { PowerfulTableHeader } from 'el-plus-powerful-table';
const header = ref<PowerfulTableHeader<Lists>[]>([]);
const { lists } = useBasicTableData();

onMounted(() => {
  import('el-plus-powerful-table/es').then(({ setData }) => {
    header.value = [
      {
        label: '发动机名称', // 此标题不会显示，因为配置了 自定义表头 headerSlotName
        isShowOrFilterColumn: 'filter',
        props: [
          {
            type: 'text',
            prop: 'engine',
            filtersType: 'input',
            filters: (row) => row.engine!,
          },
        ],
      },
      {
        label: '名称', //显示的名称
        defaultFilter: true,
        props: [
          {
            text: '品牌：',
            prop: 'brand',
            filterItem: true,
            filtersType: 'select',
            filters: [
              { key: 'Audi', value: '奥迪' },
              { key: 'BMW', value: '宝马' },
            ],
            render: (h, row) =>
              h(
                'b',
                `${row.brand || ''}（${
                  { Audi: '奥迪', BMW: '宝马', undefined: '' }[row.brand!]
                })`
              ),
          },
        ],
      },
      {
        label: '外观颜色(只显示两个)', //显示的标题
        width: 200,
        overflowTooltip: false,
        isShowOrFilterColumn: 'filter',
        props: [
          {
            prop: 'tag',
            type: 'tag',
            filtersType: 'select',
            data: setData<'tag', Lists>({
              number: 2,
              style: {
                color: 'white',
              },
              color: (r, tag) => {
                return (
                  { red: '#BD3145', blue: '#008DAF', white: '#eee' }[tag] || tag
                );
              },
            }),
            filters: [
              { key: 'red', value: '红色' },
              { key: 'black', value: '黑色' },
              { key: 'gray', value: '灰色' },
            ],
            reserve: '<i><b>VNode</b></i>',
          },
        ],
      },
      {
        label: '发售日期（插槽）', //显示的标题
        isShowOrFilterColumn: 'filter',
        width: '180px',
        // hidden: true,
        props: [
          {
            prop: 'data',
            filtersType: 'date',
          },
        ],
      },
    ];
  });
});
</script>
