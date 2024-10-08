<template>
  <div class="grid grid-c-3">
    <div>
      <div class="tipBox">
        基础 &nbsp;
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-copy="inputs.text"
        </div>
      </div>
      <el-input v-model="inputs.text" placeholder="">
        <template #append>
          <span v-copy="inputs.text">复制</span>
        </template>
      </el-input>
    </div>
    <div>
      <div class="tipBox">
        数组式 &nbsp;
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-copy="[inputs.text]"
        </div>
      </div>
      <el-input v-model="inputs.text" placeholder="">
        <template #append>
          <span v-copy="[inputs.text]">复制</span>
        </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">
        数组式（自定义复制成功后执行的函数）
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-copy="[inputs.text1, callback]"
        </div>
      </div>
      <el-input v-model="inputs.text1" placeholder="">
        <template #append>
          <span
            v-copy="[
              inputs.text1,
              inputs.text1 == '诗和远方' ? callback : callback1,
            ]"
            >复制</span
          >
        </template>
      </el-input>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Directive, reactive } from 'vue';
import { ElMessage } from 'element-plus';

const inputs = reactive({
  text: '风和自由',
  text1: '诗和远方',
});
const callback = () => {
  ElMessage.warning('复制成功！' + inputs.text1);
};

const callback1 = () => {
  ElMessage.warning('复制成功！callback1');
};

let val: string;
const vCopy: Directive = {
  mounted(el, bind) {
    if (
      !(bind.value instanceof Array) &&
      typeof bind.value != 'string' &&
      typeof bind.value != 'number'
    ) {
      throw new Error(`value 类型错误，只能为 String、Array 以及 Number`);
    }

    val = bind.value instanceof Array ? bind.value[0] : bind.value;

    el.style.cursor = 'pointer';
    el.addEventListener('click', () => {
      // 获取需要复制的值
      const callback =
        Array.isArray(bind.value) && bind.value.length > 1
          ? bind.value[1]
          : () => ElMessage.success('复制成功！');

      if (!val) {
        throw new Error(`value 不能为空`);
      }

      // 兼容低版本不存在 navigator.clipboard 情况
      if (navigator.clipboard && navigator.permissions) {
        navigator.clipboard
          .writeText(val)
          .then(() => {
            callback();
          })
          .catch((err) => {
            console.error('Unable to copy text to clipboard', err);
          });
      } else {
        // 创建dom
        const input = document.createElement('input');
        input.setAttribute('value', val);
        input.style.position = 'fixed';
        input.style.left = '999px';
        input.style.top = '10px';
        // 选中文本
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        //  删除dom
        document.body.removeChild(input);

        callback();
      }
    });
  },
  updated(el, bind) {
    if (!(bind.value instanceof Array) && typeof bind.value != 'string') {
      throw new Error(`value 类型错误，只能为 String 或者 Array`);
    }

    val = bind.value instanceof Array ? bind.value[0] : bind.value;
  },
};
</script>
