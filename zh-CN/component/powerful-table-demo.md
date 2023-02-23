---
title: PowerfulTableDemo
lang: zh-CN
outline: [1, 4]
---

# PowerfulTable 组件
由于是使用 `ssr` 模式，示例组件源码中为了能成功构建，使用了 `import('XXX')`，复制源码时自行修改为 `import xxx from 'xxx'`

## 基础用法

:::demo 传递 `list` 和 `header` 参数渲染表格， `list` 参数为 `el-table` 表格中的 `data` 属性。`isSelect` 控制是否多选，仅只展示了部分 `date` 的 `type` 类型用法

powerful-table-demo/basic

:::

## 回显选中
:::demo `selectData` 回显选中数据，使用 `selectCompare` 控制根据 `data` 中哪个属性相比较。`selectCompare=['ID', 'id']`。 将 `selectData` 的数据中对象的 `ID` 属性和 `list` 中对象 `id` 属性相比较。**所有页选中的数据将会在 `size-change` 事件中返回。**

powerful-table-demo/select-data

:::

## 分页配置
:::demo `pagination-property` 参数可传递所有 `el-pagination` 上的属性。需要注意的是，`total` 或者 `page-count` 必须传递一个否则会导致组件显示失败。

powerful-table-demo/pagination

:::

## 批量操作/顶部按钮配置
:::demo `isShowOrFilterColumn`属性控制列操作，`false` 将不会显示，`filter` 只能控制过滤，`show` 只能控制显示。可以通过 `defaultShow` 属性设置默认显示还是隐藏

powerful-table-demo/btn-config

:::

## 表格头筛选
:::tip 筛选的类型
**下拉框**: `filters` 属性类型为 `array` 或者 `type` 属性类型为 `switch`。<br/>
**时间段选择**: `filtersType` 属性为 `date`。<br/>
**输入框**: `filtersType` 属性为 `input`。

**过滤规则**
多个过滤时数据与其中一条匹配则显示
:::
:::warning 注意
不支持树形结构表格时，联合过滤（以下表格举例，假设下表格时树形表格，对`发动机名称`表头进行过滤的时候，不能在对`名称`表头进行过滤）
:::


:::demo 筛选功能只需要开启 `defaultFilter` 为 `true`, 或者 `isShowOrFilterColumn` 为 `filter` 时 `defaultFilter` 默认为 `true`。`filtersType` 不传递是默认为 `input`。`props` 为数组的情况下，默认是以第`0`下标进行过滤，也可以使用 `filterItem` 属性指定过滤项

powerful-table-demo/filters

:::

## 替换组件默认语言
:::demo 这里只展示了组件中语言可配置的属性，语言跟随 `element-plus` 改变，使用方法在文档中说明

powerful-table-demo/lang

:::
