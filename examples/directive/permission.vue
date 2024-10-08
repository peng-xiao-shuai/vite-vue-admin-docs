<template>
  <span
    >当前用户权限：<span style="color: var(--color-primary)">{{
      userRoles
    }}</span></span
  >
  <el-button-group style="float: right">
    <el-button
      :type="userRoles.includes('admin') ? 'primary' : 'default'"
      @click="switchUser('admin')"
      >admin</el-button
    >
    <el-button
      :type="userRoles.includes('ordinary') ? 'primary' : 'default'"
      @click="switchUser('ordinary')"
      >ordinary</el-button
    >
    <el-button
      :type="userRoles.includes('test') ? 'primary' : 'default'"
      @click="switchUser('test')"
      >test</el-button
    >
  </el-button-group>

  <div class="grid grid-c-3" :key="key">
    <div>
      <div class="tipBox">
        单个验证（指令）
        <div style="font-size: 13px; color: var(--el-color-info)">
          v-permission="['admin']"
        </div>
      </div>
      <el-button type="primary" v-permission="['admin']">['admin']</el-button>
      <el-button type="success" v-permission="['ordinary']"
        >['ordinary']</el-button
      >
      <el-button type="warning" v-permission="'test'">"'test'"</el-button>
    </div>

    <div>
      <div class="tipBox">
        多个验证（指令，满足一个显示）
        <div style="font-size: 13px; color: var(--el-color-info)">
          v-permission="['admin','ordinary']"
        </div>
      </div>
      <el-button type="primary" v-permission="['admin', 'ordinary']"
        >['admin','ordinary']</el-button
      >
      <el-button type="success" v-permission="['ordinary', 'test']"
        >['ordinary','test']</el-button
      >
      <el-button type="warning" v-permission="['admin', 'test']"
        >['admin','test']</el-button
      >
    </div>

    <div>
      <div class="tipBox">
        多个验证（指令，满足全部显示）
        <div style="font-size: 13px; color: var(--el-color-info)">
          v-permission:all="['admin','ordinary']"
        </div>
      </div>
      <el-button type="primary" v-permission:all="['admin', 'ordinary']"
        >['admin','ordinary']</el-button
      >
      <el-button type="success" v-permission:all="['ordinary', 'test']"
        >['ordinary','test']</el-button
      >
      <el-button type="warning" v-permission:all="['admin', 'test']"
        >['admin','test']</el-button
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Directive, ref } from 'vue';
const userRoles = ref<string | string[]>(['admin']);
// key 值 用于刷新页面
const key = ref(0);
const switchUser = (val: string) => {
  if (val === 'test') {
    userRoles.value = ['admin', 'ordinary'];
  } else userRoles.value = [val];
  key.value++;
};

const vPermission: Directive = (el, bind) => {
  // 是否需要全部满足
  const all = bind.arg;

  // 获取当前用户权限
  const roles = userRoles.value;

  if (!roles || !bind.value) {
    throw new Error(`roles 或 bind.value 不能为空`);
  }

  // 对字符串的兼容
  const value = bind.value instanceof Array ? bind.value : [bind.value];

  const hasPermission = value.filter((role: string) => roles.includes(role));

  if (all ? value.length !== hasPermission.length : !hasPermission.length) {
    el.parentNode && el.parentNode.removeChild(el);
  }
};
</script>
