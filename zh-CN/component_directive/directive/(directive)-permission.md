---
title: Key
lang: zh-CN
outline: [1, 4]
---

# Key Directive

:::details 源码
::: code-group
``` ts [main.ts]
/**
 * @param {string|string[]} bind.value 权限值
 * @param {} all 参数传递给指令 例如 v-permission:all
 */
app
  .mount('#app')
  .directive('permission', (el, bind) => {
    // 是否需要全部满足
    const all = bind.arg

    // 获取当前用户权限
    const roles = ['admin', 'ordinary', 'test']

    if (!roles || !bind.value) {
      throw new Error(`roles 或 bind.value 不能为空`)
    }

    // 对字符串的兼容
    const value = bind.value instanceof Array ? bind.value : [bind.value]

    const hasPermission = value.filter((role: string) => roles.includes(role))

    if (all ? value.length !== hasPermission.length : !hasPermission.length) {
      el.parentNode && el.parentNode.removeChild(el)
    }
  })

```
:::

:::warning 注意
源码中 `roles` 变量是固定的，实际使用中需要从后端获取
:::

:::demo

directive/permission

:::