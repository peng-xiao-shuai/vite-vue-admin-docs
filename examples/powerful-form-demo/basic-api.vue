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
    ref="powerfulFormRef"
    :formItems="formItems"
    :property="{
      labelWidth: '100px',
    }"
    :apis="apis"
    :show-type="showType"
  >
  </PowerfulForm>

  <div style="display: flex; justify-content: flex-end">
    <el-button type="primary" @click="checkOnly">仅校验</el-button>
    <el-button type="primary" @click="submit" :disabled="showType === ''">
      校验提交
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { FormTypeEnum } from 'el-plus-powerful-form';
import type { FormItem, PowerfulFormExpose } from 'el-plus-powerful-form';
import { ElMessage } from 'element-plus';
import { nextTick, reactive, ref } from 'vue';

const showType = ref<(typeof showTypeOptions)[number]['value'] | ''>('');
const showTypeOptions = [
  { label: '修改', value: 'update' },
  { label: '添加', value: 'added' },
] as const;
const powerfulFormRef = ref<PowerfulFormExpose | null>(null);
const formItems = ref<FormItem[]>([
  {
    text: '邮箱校验:',
    prop: 'manufacturer',
    rule: 'email',
    defaultData: '123@123.com',
  },
  {
    prop: 'brand',
    text: '手机号校验：',
    rule: 'phone',
    defaultData: '13800138000',
  },
  {
    text: '收藏：',
    prop: 'switchVal',
    type: FormTypeEnum.Switch,
  },
  {
    prop: 'code',
    text: '身份证校验：',
    type: FormTypeEnum.Input,
    rule: 'code',
    defaultData: '430321199003077417',
  },
  {
    text: '自定义校验：',
    prop: 'data',
    defaultData: 'custom',
    rule: [
      {
        trigger: 'blur',
        required: true,
        message: '自定义必填校验',
      },
      {
        trigger: 'blur',
        validator: (rule, value, callback) => {
          if (value === 'custom') {
            callback();
          } else {
            callback('自定义规则校验验证失败，输入 custom 通过验证');
          }
        },
      },
    ],
  },
  {
    type: FormTypeEnum.DatePicker,
    text: '日期区间：',
    prop: 'dateRange',
    rule: true,
    defaultData: ['2024-01-01', '2024-01-02'],
    data: {
      property: {
        valueFormat: 'YYYY-MM-DD',
      },
    },
  },
  {
    text: '简介',
    prop: 'content',
    defaultData: '简介',
    rule: true,
  },
]);
const apis = {
  update: (params: object) => {
    return Promise.resolve('修改成功');
  },
  added: (params: object) => {
    return Promise.resolve('添加成功');
  },
};

const checkOnly = async () => {
  showType.value = '';

  const bol = await powerfulFormRef.value!.submitForm();
  if (bol) {
    ElMessage.success('校验通过');
  } else {
    ElMessage.error('校验失败');
  }
};

const submit = async () => {
  const a = await powerfulFormRef.value!.submitForm({
    a: 1,
    b: 2,
  });
};
</script>
