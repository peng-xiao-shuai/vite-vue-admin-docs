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
 * @param {string} arg 键码
 * @param {Function} funVal 执行的函数
 */
interface obj {
  arg: string
  funVal: Function
  id: string | number
}

interface keys {
  [s: string]: obj
}
const keys: keys = {}

/**
 * 判断类型
 * @param {Element} el
 */
type InputElement = HTMLInputElement | HTMLTextAreaElement
const ifType = (el: Element | null): InputElement | undefined => {
  if (!el) return undefined

  if (el.tagName == 'INPUT' || el.tagName == 'TEXTAREA')
    return el as InputElement

  const isElComponent =
    el.classList.contains('el-input') || el.classList.contains('el-textarea')

  const inner = isElComponent
    ? ((el.getElementsByClassName('el-input__inner')[0] ||
        el.getElementsByClassName('el-textarea__inner')[0]) as
        | InputElement
        | undefined)
    : undefined
  return inner
}

app
  .mount('#app')
  .directive('press-key', {
    mounted(el, bind) {
      // 判断是否是 input 或者 textarea 需要注意的是 el-input是一个div元素
      const inputNode = ifType(el)

      if (!bind.arg) {
        console.error('请绑定需要触发的键，例如v-press-key:s')
        return
      }

      // 获取id
      const id = Object.keys(bind.modifiers).length
        ? Object.keys(bind.modifiers)[0]
        : ''

      // 获取对象键值
      const k =
        inputNode == undefined
          ? bind.arg + (id ? '-' + id : '')
          : bind.arg + '-' + inputNode.tagName + (id ? '-' + id : '')

      console.log(keys, k)
      if (Object.keys(keys).filter((item) => item == k).length) {
        console.error('绑定的按键 ' + bind.arg + ' 与已有的重名')
        return
      }
      // 储存数据
      keys[k] = {
        arg: bind.arg,
        funVal: bind.value,
        id,
      }

      // 绑定在input上时
      if (inputNode !== undefined) {
        inputNode.onkeydown = function keydown(event: KeyboardEvent) {
          // 获取匹配项
          const match = Object.keys(keys).filter((item) => {
            const key = item.split('-')[0]
            return (
              event.key.toUpperCase() == key ||
              event.key.toLowerCase() == key ||
              event.key == key
            )
          })

          console.log(match)

          match.length &&
            keys[
              match[0].split('-')[0] +
                '-' +
                inputNode.tagName +
                (id ? '-' + id : '')
            ].funVal()
        }

        return
      }

      window.onkeydown = function keydown(event: KeyboardEvent) {
        if (ifType(document.activeElement)) {
          return
        }
        // 获取匹配项
      const match = Object.keys(keys).filter(
        (item) =>
          event.key.toUpperCase() == item ||
          event.key.toLowerCase() == item ||
          event.key == item
      );

        match.length && keys[match[0]].funVal();
      }
    },
  })

```
:::

:::warning 注意
当指令绑定在 `input` 或者 `textarea` 或者 `el-input`
上时将为局部触发，否则将为全局触发.

函数如果需要携带参数，请使用箭头函数包裹。例如:
`v-press-key:q="() => msg('q')}"`
如果不包裹的话，该函数会立即执行一次. `id` 为局部触发特有，全局使用将会无效。全局触发有多个按键相同时
将会优先触发第一个绑定的函数，并且会在控制台提示
:::

:::demo

directive/key

:::