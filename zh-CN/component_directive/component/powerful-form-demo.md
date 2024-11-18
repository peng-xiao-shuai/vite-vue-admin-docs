---
title: PowerfulFormDemo
lang: zh-CN
outline: [1, 4]
---


# PowerfulForm 组件


## 基础用法

:::demo 传递 `formItems` 参数渲染表单

powerful-form-demo/basic

:::

## 传递默认值

:::tip
`formDataDefault` 参数权重高于 `formItems` 中的 `defaultData` 属性
:::

:::demo 传递 `formDataDefault` 参数渲染表单，或者在 `formItems` 中使用 `defaultData` 属性

powerful-form-demo/default-value

:::

## 控制表单项宽度比例

:::tip
`basis` 参数使用 `flex-basis` 属性控制表单项宽度比例
:::

:::demo 传递 `basis` 参数控制表单项宽度比例

powerful-form-demo/flex-basis

:::

## 显示内容控制

:::demo 传递 `showType` 参数控制表单项显示内容

powerful-form-demo/show-type

:::

## 校验数据/提交数据

:::tip
`rule` 存在时都开启必填校验，只有 `rule` 为 `object[]` 类型时开启自定义校验（此时不会开启必填校验需要手动添加），格式参考 [el-form-item](https://element-plus.org/zh-CN/component/form.html#formitem-attributes)

`submitForm` 方法调用成功后，并且调用 `apis` 中方法返回 `Promise.resolve` 后会触发提示, 可以通过 `options` 参数传递 `successMessage` 和 `errorMessage` 属性覆盖默认提示，`options` 参数隐性值为 `false` 时不提示。
:::

:::demo

powerful-form-demo/basic-api

:::


## 替换组件默认语言
:::demo 这里只展示了组件中语言可配置的属性，语言跟随 `element-plus` 改变，使用方法在文档中说明
powerful-form-demo/lang
:::

## 继承表格头部数据

:::demo

powerful-form-demo/extend

:::

## 数据展示
<<< @/examples/powerful-form-demo/index.ts
