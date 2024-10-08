---
title: Throttle
lang: zh-CN
outline: [1, 4]
---

# Throttle Directive

:::details 源码
::: code-group
``` ts [main.ts]
app
  .mount('#app')
  .directive('throttle', {
    mounted(el, binding) {
      const [callback, time = 300, arg = [], immediate = false]: [
        Function,
        number,
        any[],
        boolean,
      ] = binding.value

      let bol = true
      // 只执行一次
      let only = true
      el.addEventListener('click', () => {
        // 是否立即执行
        if (immediate && only) {
          only = false
          callback(...arg)
        }

        if (bol) {
          bol = false
          setTimeout(() => {
            bol = true
            callback(...arg)
          }, time)
        }
      })
    },
  })
```
:::

:::demo 第一个参数为 `callback` - 回调事件(必传)，第二个参数为 `time` - 间隔时间，默认 **300**，第三个参数为 `arg` - 参数，第四个参数为 `immediate` - 开始时还是结束时 默认 `false` 结束时, `true` 开始时

directive/throttle

:::