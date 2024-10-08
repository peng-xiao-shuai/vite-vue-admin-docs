<template>
  <h4 style="margin-bottom: 0">节流</h4>

  <div class="grid grid-c-3">
    <div>
      <div class="tipBox">
        基础节流（指令）
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-throttle="[msg]"
        </div>
      </div>
      <el-button type="primary" v-throttle="[msg]">点击触发</el-button>
    </div>

    <div>
      <div class="tipBox">
        立即执行（指令）
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-throttle="[msg, 2000, [], true]"
        </div>
      </div>
      <el-button type="primary" v-throttle="[msg, 2000, [], true]"
        >点击触发</el-button
      >
    </div>

    <div>
      <div class="tipBox">
        带参（指令）
        <div style="font-size: 13px; color: var(--vp-code-color)">
          v-throttle="[msg, 2000, ['风和自由']]"
        </div>
      </div>
      <el-button type="primary" v-throttle="[msg, 2000, ['风和自由']]"
        >点击触发</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Directive, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance() as any;

const msg = (str = '触发', type = 'success') => {
  proxy.$message[type](str);
};
const vThrottle: Directive = {
  mounted(el, binding) {
    const [callback, time = 300, arg = [], immediate = false]: [
      Function,
      number,
      any[],
      boolean
    ] = binding.value;

    let bol = true;
    // 只执行一次
    let only = true;
    el.addEventListener('click', () => {
      // 是否立即执行
      if (immediate && only) {
        only = false;
        callback(...arg);
      }

      if (bol) {
        bol = false;
        setTimeout(() => {
          bol = true;
          callback(...arg);
        }, time);
      }
    });
  },
};
</script>
