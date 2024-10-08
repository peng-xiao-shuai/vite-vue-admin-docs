---
title: Copy
lang: zh-CN
outline: [1, 4]
---

# Copy Directive

:::details 源码
::: code-group
``` ts [main.ts]
app
  .mount('#app')
  .directive('copy', {
    mounted(el, bind) {
      if (
        !(bind.value instanceof Array) &&
        typeof bind.value != 'string' &&
        typeof bind.value != 'number'
      ) {
        throw new Error(`value 类型错误，只能为 String、Array 以及 Number`)
      }

      val = bind.value instanceof Array ? bind.value[0] : bind.value

      el.style.cursor = 'pointer'
      el.addEventListener('click', () => {
        // 获取需要复制的值
        const callback =
          Array.isArray(bind.value) && bind.value.length > 1
            ? bind.value[1]
            : () => ElMessage.success('复制成功！')

        if (!val) {
          throw new Error(`value 不能为空`)
        }

        // 兼容低版本不存在 navigator.clipboard 情况
        if (navigator.clipboard && navigator.permissions) {
          navigator.clipboard
            .writeText(val)
            .then(() => {
              callback()
            })
            .catch((err) => {
              console.error('Unable to copy text to clipboard', err)
            })
        } else {
          // 创建dom
          const input = document.createElement('input')
          input.setAttribute('value', val)
          input.style.position = 'fixed'
          input.style.left = '999px'
          input.style.top = '10px'
          // 选中文本
          document.body.appendChild(input)
          input.select()
          document.execCommand('copy')
          //  删除dom
          document.body.removeChild(input)

          callback()
        }
      })
    },
    updated(el, bind) {
      if (!(bind.value instanceof Array) && typeof bind.value != 'string') {
        throw new Error(`value 类型错误，只能为 String 或者 Array`)
      }

      val = bind.value instanceof Array ? bind.value[0] : bind.value
    },
  })
```
:::

:::warning 注意
复制成功后所执行的函数，为指令初始化时所绑定的函数 例如：`v-copy="[ inputs.text1, bol ? callback : callback1 ]` 假设 `bol` 为 `true` 那么只会执行 `callback`， 就算 `bol` 在之后变为 `false` 也只会执行 `callback`
:::

:::demo

directive/copy

:::