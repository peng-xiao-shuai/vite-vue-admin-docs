<template>
  <PowerfulForm
    ref="powerfulFormRef"
    :formItems="formItems"
    :property="{
      labelWidth: '100px',
    }"
    :apis="{
      update,
    }"
    :show-type="'update'"
  >
  </PowerfulForm>

  <div style="display: flex; justify-content: flex-end">
    <el-button type="primary" @click="powerfulFormRef?.submitForm()">
      仅校验
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { FormTypeEnum, LangKey } from 'el-plus-powerful-form';
import type { FormItem, PowerfulFormExpose } from 'el-plus-powerful-form';
import { ref } from 'vue';

const powerfulFormRef = ref<PowerfulFormExpose | null>(null);
const formItems = ref<FormItem[]>([
  {
    text: '邮箱校验:',
    prop: 'manufacturer',
    rule: 'email',
  },
  {
    prop: 'brand',
    text: '手机号校验：',
    rule: 'phone',
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
  },
  {
    text: '自定义校验：',
    prop: 'data',
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
    data: {
      property: {
        valueFormat: 'YYYY-MM-DD',
      },
    },
  },
  {
    text: '简介',
    prop: 'content',
    rule: true,
  },
]);
const update = (params: object) => {
  return Promise.resolve('修改成功');
};
// const langPackages = {
//   en: {
//     [LangKey.VerifyPhone]: 'Phone format is incorrect',
//     [LangKey.VerifyEmail]: 'Email address format is incorrect',
//     [LangKey.VerifyCode]: 'ID card format is incorrect',
//     [LangKey.VerifyHttps]: 'Website format is incorrect',
//     [LangKey.VerifyIp]: 'IP address format is incorrect',
//     [LangKey.VerifyNumber]: 'Only numbers can be entered',
//     [LangKey.VerifyEnglish]: 'Only English characters can be entered',
//     [LangKey.VerifyChinese]: 'Only Chinese characters can be entered',
//     [LangKey.VerifyLength]: `Character length limit is `,
//     [LangKey.VerifyEmpty]: `Can't be empty`,
//   },
//   'zh-cn': {
//     [LangKey.VerifyPhone]: '手机号格式不正确',
//     [LangKey.VerifyEmail]: '邮箱地址格式不正确',
//     [LangKey.VerifyCode]: '身份证格式不正确',
//     [LangKey.VerifyHttps]: '网址格式不正确',
//     [LangKey.VerifyIp]: 'IP地址格式不正确',
//     [LangKey.VerifyNumber]: '只能输入数字',
//     [LangKey.VerifyEnglish]: '只能输入英文字符',
//     [LangKey.VerifyChinese]: '只能输入中文字符',
//     [LangKey.VerifyLength]: `字符长度限制为 `,
//     [LangKey.VerifyEmpty]: `不能为空`,
//   },
// } as const;
</script>
