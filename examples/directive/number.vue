<template>
  <div class="grid grid-c-4">
    <div>
      <div class="tipBox">整数</div>
      <el-input v-model="inputs.number" placeholder="" v-num>
        <template #append> v-num </template>
      </el-input>
    </div>
    <div>
      <div class="tipBox">小数（默认2位）</div>
      <el-input v-model="inputs.float" placeholder="" v-num:float>
        <template #append> v-num:float </template>
      </el-input>
    </div>
    <div>
      <div class="tipBox">小数（自定义保留n位）</div>
      <el-input v-model="inputs.floatLength" placeholder="" v-num:float.5>
        <template #append> v-num:float.5 </template>
      </el-input>
    </div>
    <div>
      <div class="tipBox">整数（固定范围）</div>
      <el-input v-model="inputs.numberScope" placeholder="" v-num="[1, 10]">
        <template #append> v-num="[1, 10]" </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">小数（固定范围）</div>
      <el-input
        v-model="inputs.numberFloatScope"
        placeholder=""
        v-num:float.2="[1, 10]"
      >
        <template #append> v-num="[1, 10]" </template>
      </el-input>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Directive, reactive } from 'vue';

const inputs = reactive({
  number: 0,
  float: 0,
  floatLength: 0,
  numberScope: 1,
  numberFloatScope: 1,
});

let inputNode: HTMLElement;

const float = (arg = 'number', modifiers?: {}, vals?: (number | string)[]) => {
  inputNode.addEventListener(vals?.length ? 'change' : 'input', (e: Event) => {
    const keys = Object.keys(modifiers || {});

    let value =
      (e.target as any).value.replace(
        /[a-z]|[\u4e00-\u9fa5]|[^\x00-\xff]/gi,
        ''
      ) || '';

    // 为空说明只输入了 '/[a-z]|[\u4e00-\u9fa5]|[^\x00-\xff]/ig' 可以匹配的字符
    // 第一位不能为小数点
    if (!value || value === '.') {
      (e.target as any).value = '';
      return;
    }

    if (vals) {
      for (const i in vals) {
        if (isNaN(Number(vals[i]))) {
          console.error('value 的下标 ', i, '不能转换为数组');
          return;
        }
      }
      value = value < vals[0] ? vals[0] : value > vals[1] ? vals[1] : value;
    }

    if (arg == 'float') {
      value = String(value);
      // 只能有一位小数点
      // 小数长度 不能 大于 Number(keys[0]
      if (
        value.split('.').length > 2 ||
        value.substr(value.indexOf('.') + 1, value.length).length >
          Number(keys[0] || 2)
      ) {
        // console.log('一位小数点出现2为', value, value.split('.').length);
        (e.target as any).value = value.substr(0, value.length - 1);
        return;
      }

      value =
        value.indexOf('.') == -1
          ? Number(value).toFixed((keys && Number(keys[0])) || 2)
          : value;
    } else {
      value = Number(value);
    }
    (e.target as any).value = value;
  });
};

const vNum: Directive = (el, binding) => {
  // console.log(binding);

  if (binding.arg && ['number', 'float'].indexOf(binding.arg) === -1) {
    console.error('传递给指令的参数只能为 number,float');
    return;
  }

  if (binding.value instanceof Array && binding.value.length !== 2) {
    console.error('传递给指令的 value 值长度不为 2 ');
    console.error('value：', binding.value);
    return;
  }
  // 获取input标签元素。el.children[0]兼容el-input
  inputNode = el.tagName === 'INPUT' ? el : el.children[0];

  // value 为一个数组 [min,max]。input的值不能大于max 并且不能小于 min。可以说是input值必须在min和max之间（或者为min和max）
  float(binding.arg, binding.modifiers, binding.value);
};
</script>
