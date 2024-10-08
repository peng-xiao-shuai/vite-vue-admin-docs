---
title: Debounce
lang: zh-CN
outline: [1, 4]
---

# Debounce Directive

:::details 源码
::: code-group
``` ts [main.ts]
app
  .mount('#app')
  .directive('debounce', {
    mounted(el, binding) {
      const [callback, time = 300, arg = [], immediate = false]: [
        Function,
        number,
        any[],
        boolean,
      ] = binding.value
      let timer: any
      // 只执行一次
      let debounceOnly = true

      el.addEventListener('click', () => {
        // 是否立即执行
        if (immediate && debounceOnly) {
          debounceOnly = false
          callback(...arg)
        }

        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          if (!debounceOnly) {
            debounceOnly = true
            return
          }
          callback(...arg)
        }, time)
      })
    },
  })
```
:::

:::demo 第一个参数为 `callback` - 回调事件(必传)，第二个参数为 `time` - 间隔时间，默认 **300**，第三个参数为 `arg` - 参数，第四个参数为 `immediate` - 开始时还是结束时 默认 `false` 结束时, `true` 开始时

directive/debounce

:::