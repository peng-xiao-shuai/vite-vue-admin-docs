<template>
  <div style="padding-left: 20px; margin-bottom: 20px">
    <el-switch active-text="禁用" v-model="switchVal" />
  </div>

  <PowerfulForm
    :formItems="formItems"
    :property="{
      labelWidth: '80px',
    }"
    :formDataDefault="defaultData"
    :disabled="switchVal"
  >
  </PowerfulForm>
</template>

<script lang="ts" setup>
import { FormTypeEnum } from 'el-plus-powerful-form';
import type { FormItem } from 'el-plus-powerful-form';
import { reactive, ref } from 'vue';
const switchVal = ref(false);
const defaultData = reactive({
  manufacturer: '奥迪',
  brand: '奥迪',
  switchVal: '1',
  price: 100,
  rate: 5,
  color: 'red',
});

const formItems = ref<FormItem[]>([
  {
    text: '制造商:',
    prop: 'manufacturer',
    type: FormTypeEnum.Input,
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
    defaultData: 'white',
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
    defaultData: '2024-11-18',
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
    defaultData: ['2024-11-18', '2024-11-20'],
    data: {
      property: {
        valueFormat: 'YYYY-MM-DD',
      },
    },
  },
  {
    text: '简介',
    prop: 'content',
    defaultData: 'formItem.dataDefault 默认内容',
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
