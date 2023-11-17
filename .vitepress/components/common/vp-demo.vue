<template>
  <ClientOnly>
    <p text="sm" v-html="decodeURIComponent(description!)" />

    <div class="code-operate">
      <!-- 效果 -->
      <div class="code-operate-demo">
        <component :is="demoDefault[path]" v-if="demoDefault[path]"></component>
      </div>
      <!-- 操作 -->
      <div class="code-operate-btn">
        <el-tooltip
          v-for="item in operateList"
          :key="item.label"
          effect="dark"
          :content="item.label"
          placement="bottom-start"
        >
          <i :class="item.icon" @click="handleBtnClick(item)"></i>
        </el-tooltip>
      </div>

      <!-- 源码 -->
      <ElCollapseTransition>
        <div
          v-show="show"
          class="code-box"
          v-html="decodeURIComponent(source)"
        />
      </ElCollapseTransition>

      <Transition name="el-fade-in-linear">
        <div v-show="show" class="hidden-code" @click="show = false">
          <ElIcon :size="16">
            <CaretTop />
          </ElIcon>
          <span>隐藏源代码</span>
        </div>
      </Transition>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { reactive, ref, getCurrentInstance, watch } from 'vue';
import { CaretTop } from '@element-plus/icons-vue';
import { useData } from 'vitepress';
import { useClipboard } from '@vueuse/core';

const vm = getCurrentInstance()!;

const props = defineProps<{
  demos: object;
  source: string;
  path: string;
  rawSource: string;
  description?: string;
}>();

const demoDefault = reactive({});

watch(
  props.demos,
  () => {
    Object.keys(props.demos).forEach((key) => {
      setTimeout(async () => {
        props.demos[key]().then((module) => {
          Object.assign(demoDefault, {
            [key.replace('../../examples/', '').replace('.vue', '')]:
              module.default,
          });
        });
      });
    });
  },
  {
    immediate: true,
  }
);

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
});

const copyCode = async () => {
  const { $message } = vm.appContext.config.globalProperties;
  if (!isSupported) {
    $message.error('复制失败！');
  }
  try {
    await copy();
    $message.success('复制成功！');
  } catch (e: any) {
    $message.error(e.message);
  }
};
// 控制源代码是否显示
const show = ref(false);
const operateList = reactive([
  {
    icon: 'icon-github',
    label: '在 github 编辑',
    type: 'edit',
  },
  {
    icon: 'icon-fuzhi',
    label: '复制代码',
    type: 'copy',
  },
  {
    icon: 'icon-code',
    label: '查看源代码',
    type: 'code',
  },
]);

const { site } = useData();
const handleBtnClick = (e: (typeof operateList)[0]) => {
  switch (e.type) {
    case 'edit':
      window.open(
        'https://github.com/peng-xiao-shuai' +
          site.value.base +
          'edit/main/examples/' +
          props.path +
          '.vue'
      );
      break;
    case 'copy':
      copyCode();
      break;
    case 'code':
      show.value = !show.value;
      break;
  }
};
</script>

<style scoped lang="scss">
.code-operate {
  border: 1px solid var(--vp-c-divider);
  border-radius: 2px;
  &-demo {
    padding: 20px;
  }
  &-btn {
    border-top: 1px solid var(--vp-c-divider);
    padding: 10px;
    display: flex;
    justify-content: end;

    i {
      display: inline-block;
      margin: 0 8px;
      &:hover {
        color: var(--text-color);
      }
    }

    i:last-of-type {
      margin-right: 0;
    }
  }

  .code-box {
    background: var(--el-fill-color-light);
    padding: 10px;
    position: relative;

    &::before {
      content: 'vue';
      position: absolute;
      top: 5px;
      right: 10px;
      z-index: 2;
      font-size: var(--prism-marker-font-size);
      color: var(--vp-c-text-3);
    }

    :deep(pre) {
      margin: 0;
      overflow-x: auto;
      padding: 5px;

      & code {
        padding: 0;
      }
    }
  }

  .hidden-code {
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--border-color);
    height: 44px;
    font-size: 14px;
    box-sizing: border-box;
    background-color: var(--el-bg-color);
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    margin-top: -1px;
    color: var(--el-text-color-secondary);
    cursor: pointer;
    position: sticky;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }
}
</style>
