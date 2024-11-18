<template>
  <div style="padding-left: 20px; margin-bottom: 20px">
    <el-select v-model="showType" placeholder="选择显示内容">
      <el-option
        v-for="item in showTypeOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>

  <PowerfulForm
    :formItems="formItems"
    :property="{
      labelWidth: '80px',
    }"
    :showType="showType"
    :formDataDefault="defaultData"
    :disabled="showType === 'view'"
  >
  </PowerfulForm>
</template>

<script lang="ts" setup>
import { FormTypeEnum } from 'el-plus-powerful-form';
import type { FormItem } from 'el-plus-powerful-form';
import { reactive, ref } from 'vue';
const showType = ref('');
const showTypeOptions = ref([
  { label: '全部', value: '' },
  { label: '修改', value: 'edit' },
  { label: '添加', value: 'add' },
  { label: '查看', value: 'view' },
]);

const defaultData = reactive({
  manufacturer: '',
  brand: '',
  switchVal: '0',
  price: '',
  rate: 0,
  color: '',
});

const formItems = ref<FormItem[]>([
  {
    text: '制造商:',
    prop: 'manufacturer',
    type: FormTypeEnum.Input,
    defaultData: '奥迪',
    showType: 'view',
  },
  {
    type: FormTypeEnum.Select,
    prop: 'brand',
    text: '品牌：',
    data: {
      options: [
        { label: 'Audi', value: '奥迪' },
        { label: 'BMW', value: '宝马' },
      ],
    },
  },
  {
    text: '收藏：',
    prop: 'switchVal',
    basis: '45%',
    type: FormTypeEnum.Switch,
  },
  {
    prop: 'price',
    text: '售价：',
    type: FormTypeEnum.Input,
    data: {
      slot: 'append',
      symbol: '万',
      property({}) {
        return {
          placeholder: '售价',
        };
      },
    },
  },
  {
    prop: 'rate',
    text: '评 分：',
    type: FormTypeEnum.Rate,
  },
  {
    type: FormTypeEnum.Select,
    prop: 'color',
    text: '漆水：',
    data: {
      options: [
        { value: 'red', label: '红色' },
        { value: 'black', label: '黑色' },
        { value: 'blue', label: '蓝色' },
        { value: 'gray', label: '灰色' },
        { value: 'white', label: '白色' },
      ],
    },
  },
  {
    type: FormTypeEnum.DatePicker,
    text: '发售日期：',
    prop: 'data',
    showType: ['edit', 'add'],
    data: {
      property: {
        type: 'date',
        valueFormat: 'YYYY-MM-DD',
      },
    },
  },
  {
    type: FormTypeEnum.DatePicker,
    text: '日期区间：',
    prop: 'dateRange',
    showType: ['edit', 'add'],
    data: {
      property: {
        valueFormat: 'YYYY-MM-DD',
      },
    },
  },
  {
    text: '简介',
    prop: 'content',
    data: {
      property: {
        showWordLimit: true,
        maxlength: 100,
        type: 'textarea',
      },
    },
  },
]);
</script>
