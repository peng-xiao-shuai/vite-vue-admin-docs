<template>
  <div class="grid grid-c-3">
    <div>
      <div class="tipBox">q 按键 input 类型 （局部触发）</div>
      <el-input
        v-model="inputs.q"
        v-press-key:q="() => msg('按键 q 触发 input')"
      >
        <template #append> v-press-key:q </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">q 按键 携带id（局部触发）</div>
      <el-input
        v-model="inputs.q"
        v-press-key:q.100="() => msg('按键 q 触发 input,携带 id 为 100')"
      >
        <template #append> v-press-key:q.100 </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">q 按键 携带id（局部触发）</div>
      <el-input
        v-model="inputs.q"
        v-press-key:q.200="() => msg('按键 q 触发 input,携带 id 为 200')"
      >
        <template #append> v-press-key:q.200 </template>
      </el-input>
    </div>
  </div>

  <div class="grid grid-c-3">
    <div>
      <div class="tipBox">q 按键 textarea 类型 （局部触发）</div>
      <el-input
        type="textarea"
        v-model="inputs.q"
        v-press-key:q="() => msg('按键 q 触发 textarea')"
      >
        <template #append> v-press-key:q </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">q 按键 携带id（局部触发）</div>
      <el-input
        type="textarea"
        v-model="inputs.q"
        v-press-key:q.100="() => msg('按键 q 触发 textarea,携带 id 为 100')"
      >
        <template #append> v-press-key:q.100 </template>
      </el-input>
    </div>

    <div>
      <div class="tipBox">q 按键 携带id（局部触发）</div>
      <el-input
        type="textarea"
        v-model="inputs.q"
        v-press-key:q.200="() => msg('按键 q 触发 textarea,携带 id 为 200')"
      >
        <template #append> v-press-key:q.200 </template>
      </el-input>
    </div>
  </div>

  <div class="grid grid-c-4">
    <div>
      <div
        class="tipBox"
        v-press-key:a="() => msg('按键 a 触发，全局', 'success')"
      >
        a 按键（全局触发） v-press-key:a
      </div>
    </div>

    <div>
      <div
        class="tipBox"
        v-press-key:d="() => msg('按键 d 触发，全局', 'success')"
      >
        d 按键（全局触发） v-press-key:d
      </div>
    </div>

    <div>
      <div
        class="tipBox"
        v-press-key:d.100="() => msg('按键 d 触发 携带id，全局', 'success')"
      >
        d 按键，携带id（不会触发，没有绑定在 input 或者 textarea 上）
        v-press-key:d.100
      </div>
    </div>

    <div>
      <div
        class="tipBox"
        v-press-key:q="() => msg('按键 q 触发，全局', 'success')"
      >
        q 按键（全局也触发） v-press-key:q
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, reactive, Directive } from 'vue';
const { proxy } = getCurrentInstance() as any;
const msg = (str: string, type = 'success') => {
  proxy.$message[type](str);
  console.log(str);
};

const inputs = reactive({
  q: '',
});

/**
 * @param {string} arg 键码
 * @param {Function} funVal 执行的函数
 */
interface obj {
  arg: string;
  funVal: Function;
  id: string | number;
}

interface keys {
  [s: string]: obj;
}
const keys: keys = {};

/**
 * 判断类型
 * @param {Element} el
 */
type InputElement = HTMLInputElement | HTMLTextAreaElement;
const ifType = (el: Element | null): InputElement | undefined => {
  if (!el) return undefined;

  if (el.tagName == 'INPUT' || el.tagName == 'TEXTAREA')
    return el as InputElement;

  const isElComponent =
    el.classList.contains('el-input') || el.classList.contains('el-textarea');

  const inner = isElComponent
    ? ((el.getElementsByClassName('el-input__inner')[0] ||
        el.getElementsByClassName('el-textarea__inner')[0]) as
        | InputElement
        | undefined)
    : undefined;
  return inner;
};

const vPressKey: Directive = {
  mounted(el, bind) {
    // 判断是否是 input 或者 textarea 需要注意的是 el-input是一个div元素
    const inputNode = ifType(el);

    if (!bind.arg) {
      console.error('请绑定需要触发的键，例如v-press-key:s');
      return;
    }

    // 获取id
    const id = Object.keys(bind.modifiers).length
      ? Object.keys(bind.modifiers)[0]
      : '';

    // 获取对象键值
    const k =
      inputNode == undefined
        ? bind.arg + (id ? '-' + id : '')
        : bind.arg + '-' + inputNode.tagName + (id ? '-' + id : '');

    if (Object.keys(keys).filter((item) => item == k).length) {
      console.error('绑定的按键 ' + bind.arg + ' 与已有的重名');
      return;
    }
    // 储存数据
    keys[k] = {
      arg: bind.arg,
      funVal: bind.value,
      id,
    };

    // 绑定在input上时
    if (inputNode !== undefined) {
      inputNode.onkeydown = function keydown(event: KeyboardEvent) {
        // 获取匹配项
        const match = Object.keys(keys).filter((item) => {
          const key = item.split('-')[0];
          return (
            event.key.toUpperCase() == key ||
            event.key.toLowerCase() == key ||
            event.key == key
          );
        });

        console.log(match);

        match.length &&
          keys[
            match[0].split('-')[0] +
              '-' +
              inputNode.tagName +
              (id ? '-' + id : '')
          ].funVal();
      };

      return;
    }

    window.onkeydown = function keydown(event: KeyboardEvent) {
      if (ifType(document.activeElement)) {
        return;
      }
      // 获取匹配项
      const match = Object.keys(keys).filter(
        (item) =>
          event.key.toUpperCase() == item ||
          event.key.toLowerCase() == item ||
          event.key == item
      );

      match.length && keys[match[0]].funVal();
    };
  },
};
</script>
