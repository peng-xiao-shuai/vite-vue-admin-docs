---
title: PowerfulTable
lang: zh-CN
outline: [1, 5]
---

# ElPlusPowerfulTableTs
:::tip
`element-plus` 二次开发表格组件。此插件已 `el-plus-powerful-table` 作为基础，进行重构。部分功能将领先 `el-plus-powerful-table` 基础版本。
`el-plus-powerful-table` 的 `ts` 版本。[DEMO](https://peng-xiao-shuai.github.io/el-plus-powerful-table/)
:::

###### 标签

> <tag type='danger' content=[版本号] /> 表示功能`废弃` <br/>
> <tag type='success' content=[版本号] /> 表示功能`新增` <br/>

###### 语言
对于语言方面组件是默认使用 `英语` 因为 `element-plus` 默认是使用`英语`，不引用中文包的主要原因是避免增大体积。
组件内部语言跟随 `element-plus`。 部分 提示文字 语言，组件内部也支持 `中、英` 文，如果你需要支持更多语言或者更改组件内部
的语言，可以在 `use(PowerfulTable, { local: 您的语言变量 })` 替换。也可以参考我们提供的 `demo` 实现。

### 使用方法

::: code-group

```sh [npm]
npm i el-plus-powerful-table-ts
```

```sh [yarn]
yarn add el-plus-powerful-table-ts
```

```sh [pnpm]
pnpm add el-plus-powerful-table-ts
```

:::

::: code-group


```ts [main.ts]
import powerfulTable from "el-plus-powerful-table-ts/es";
import { LangKey } from "el-plus-powerful-table-ts/es/locale/packages";

const app = createApp(App);
app.use(powerfulTable, {
  // 更改组件默认语言
  locale: {
    en: {
      [LangKey.NoData]: '空',
      [LangKey.PackUp]: '收起',
      [LangKey.ReadFullText]: '展开阅读全文',
      // ...
    },
    'zh-cn': {
      [LangKey.NoData]: '空',
      [LangKey.PackUp]: '收起',
      [LangKey.ReadFullText]: '展开阅读全文',
      // ...
    },
  },
});
app.mount("#app");
```

```vue [app.vue]
<powerful-table :list="list" :header="header" />
```

:::

## Config Attributes
> 通过 `app.use` 注入 (优先级小于局部配置)

| 属性名 | 说明 | TS类型 | 默认值 |
| --- | ---- | ----- | ------ |
| `locale` | 内部部分文字语言 [**查看可选值**](https://github.com/peng-xiao-shuai/el-plus-powerful-table/blob/master-ts/packages/locale/packages.ts) | `LangPackages` | - |
| `listRequest`<tag type='success' content='2.2.0' /> | 列表请求，具体属性查看下方详情 | ^[object]`InjectProps['listRequest']` | - |
| `emptyElement`<tag type='success' content='2.2.0' />  | 列表数据为空时渲染的组件 | `Component` | - |

## Attributes
| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ---- | ------ |
| `size` | 组件大小（默认跟随 `element-plus`） | ^[string]`'medium' \| 'small' \| 'mini'` | `small` |
| `list` | 数据 | `array` | - |
| `header` | 表格头部配置 | ^[array]`PowerfulTableHeader<Row = any>` | - |
| `selectData` | 选中的数据 | `array` | - |
| `selectCompare` | 选中数据和列表数据相比较的参数`[0]选中数据属性名，[1]列表数据属性名` | ^[array]`string[]` | `['id', 'id']` |
| `isSelect` | 是否显示多选 | `boolean` | `false` |
| `listRequest`<tag type='success' content='2.2.0' /> | 列表请求 | ^[object]`InjectProps['listRequest'] & { listApi: (params: object) => Promise; listQuery?: object }` | - |
| `selectable` | 当前行是否可以选中 | ^[function]`(row: Row, index: number) => boolean` | - |
| `isPagination` | 是否显示分页器 | `boolean` | `false` |
| `operateData` | 批量操作 | ^[object]`PowerfulTableOperateData` | - |
| `btnConfig` | 表格顶部按钮配置 | ^[object]`BtnConfig` | - |
| `tree` | 树形表格配置 | ^[object]`PowerfulTableTree` | - |
| `paginationProperty` | 分页器组件扩展字段 | ^[object]`Partial<PaginationProps>` | - |
| `property` | 表格组件扩展字段 | ^[object]`Partial<TableProps<Row>>` | - |

### ListRequest <tag type='success' content='2.2.0' />
::: tip
[**使用方式**](https://peng-xiao-shuai.github.io/vite-vue-admin-docs/zh-CN/component/powerful-table-demo.html#传递-api-用法)
:::

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `pageNoKey` | 页数 `key` | `string` | `'pageNo'` |
| `pageSizeKey` | 条数 `key` | `string` | `'pageSize'` |
| `responseKey` | 返回值 `key`，多层数据结构使用 `.` 连接 | `string` | `'data.result'` |
| `totalKey` | 总条数 `key` | `string` | `'total'` |
| `listsKey` | 数据 `key` | `string` | `'rows'` |

**当使用组件传递 `ListRequest` 时（非全局注入），格外新增 `2` 个属性**
| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `listQuery` | 请求格外参数 | `object` | `{}` |
| `listApi` | 请求接口 | ^[function]`(params: object) => any)` | - |

### OperateData

:::tip
如果表格有 `header.props.type` 为 `input` 的则需要先填写该行数据，在选中该行，否则会出现获取不到 `input` 的值
:::

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `value` | 下拉选中值 | `string` | - |
| `style` | 按钮样式 | `CSSProperties` | - |
| `prop` | 批量操作后 `batchOperate` 返回的 `ids` 中的数据是根据指定 `prop` 返回数组 | `string` | `id` |
| `btnProperty` | `el-button` 组件扩展字段 (支持 `el-button` 组件所有属性名) | ^[object]`InstanceType<typeof import('element-plus')['ElSelect']>['$props']` | - |
| `selectProperty` | `el-select` 组件扩展字段 (支持 `el-select` 组件所有属性名) | ^[object]`Partial<ButtonProps>` | - |
| `operates` | 批量操作下拉框数据 | ^[array]`PowerfulTableLabelValue[]` | - |

###### OperateData Operates

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| `label` | 批量操作下拉框显示文字 | `string` | - |
| `value` | 批量操作下拉框值 | `string` | - |

### BtnConfig

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | --- | ------ |
| `btnRightList`| 右侧按钮配置 | ^[array]`BtnList[]` | - |
| `btnList` | 左侧按钮配置 | ^[array]`BtnList[]` | - | - |

###### BtnConfig BtnList

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | --- | ----- |
| `style` | 样式 | `CSSProperties` | - |
| `disabled` | 是否禁用 如果为 `true` 那么 `operateType` 的属性名将会失效 | `boolean` | - |
| `operateType` | 操作类型：`none 默认` (不需要选择数据)，`single` (只能操作一条数据)，`batch` (批量操作数据(至少选择一条数据以上)) | ^[object]`'none' \| 'single' \| 'batch'` | - |
| `text` | 按钮文字 | `string` | - |
| `effect` | 自定义数据将会在自定义事件 `btn-plus-change` 抛出 | `string` | - |
| `showBtn` | 控制按钮显示隐藏 | ^[function / boolean]`(row: Row, index: number) => boolean \| boolean` | - |

### Header

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ------ |
| `overflowTooltip` | 当内容过长被隐藏时显示 | `boolean` | `false` |
| `label` | 显示的标题 | `string` | - |
| `minWidth` | 对应列的最小宽度 | `string / number` | `140` |
| `width` | 对应列的宽度 | `string / number` | - |
| `sortable` | 排序 | ^[string / boolean]`'custom' \| boolean` | `false` |
| `fixed` | 固定列 | ^[string / boolean]`'left' \| 'right' \| boolean` | `false`  |
| `headerAlign` | 表头对齐方式 | ^[enum]`left \| 'center' \| 'right'` | `'center'` |
| `headerSlotName` | 列头插槽 | `string` | - |
| `defaultShow` | 当前列默认显示或隐藏 | `boolean` | `true` |
| `defaultFilter` | 当前列默认是否过滤 `(isShowOrFilterColumn == 'filter' 时默认 true)` | `boolean` | `false` |
| `isShowOrFilterColumn` | 右侧按钮选择列时是否显示（隐藏和筛选开关组件） | ^[string / boolean]`'show' \| 'filter' \| false` | - |
| `props` | 单元格数据 | ^[object]`PowerfulTableHeaderProps<null, Row>[] \| PowerfulTableHeaderProps<null, Row>` | - |
| `property` | `el-table-column` 组件扩展字段 (支持 `el-table-column` 组件所有属性名) | ^[object]`Partial<TableColumnCtx<Row>>` | - |

#### Props

| 属性名 | 说 明 | TS类型 | 默认值 |
| ---- | ----- | ----- | ---- |
| `prop` | 数据 `key` 值 | `string` | - |
| `type` | 数据类型 | ^[enum]`'image' \| 'text' \| 'switch' \| 'btn' \| 'video' \| 'input' \| 'iconfont' \| 'tag' \| 'rate' \| 'href' \| 'slot'`| `'text'` |
| `data` | 每个类型不一样 `data` 里值也不一样 | `_TYPE['xxx']` | - |
| `filters` | 过滤，只支持 `type` 为 `text、tag`| ^[array / function]`PowerfulTableFilter[] \| (row: Row, index: number) => string` | `number` |
| `filtersType` | 过滤类型用于表格顶部右侧列按钮点击时，是否过滤，如果是则自定义表头将根据类型所弹出相应的操作元素（如果指定了 `headerSlotName` 和 `isShowOrFilterColumn` 为 `show` 或者 `false` 将会无效。如果是 `filtersType: select` 需要指定 `filters` 为数组类型） | ^[string]`'select' \| 'date' \| 'input'` | `'input'` |
| `filterItem`  | 指定过滤项 (当 `props` 是数组且长度大于 `1` 时有用) 如果多个 `prop` 的情况下没有指定 `filterItem` 过滤项 那么将使用第一个作进行过滤 | `boolean`  | - |
| `customFilter` | 自定义过滤数据 `v(参数为值)，column(参数为header配置项)，resolve(回调函数传递数组)` | ^[function]`(v, column, resolve) => void` | - |
| `text` | 数据左侧显示的文字 | `string` | - |
| `reserve` | 当 `prop` 值渲染数据为空时可用 `reserve` 代替空数据 可传 `HTML` 标签  | `HTMLElement / string` | `'no Data'` |
| `render` | [渲染函数](https://v3.cn.vuejs.org/guide/render-function.html#h-%E5%8F%82%E6%95%B0)  | ^[function]`(h: h, row: Row, index: number) => VNode / string / number` | -  |
| `style` | 样式  | `CSSProperties` | -  |
| `slotName` | 插槽名称 | `string` | `'default'` |

##### Filters

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ------ |
| `key` | 单元格里的数据 | `string` | - |
| `value` | 需要替换的值 | `string` | - |

##### Data
``` js
// ...
data: setData<'image', any>({
  style: {
    borderRadius: '10px',
  },
  property: ({ row, index, props }) => {
    // console.log(row, index, props)
    return {
      // src: 'https://t7.baidu.com/it/u=1819248061,230866778&fm=193&f=GIF',
    }
  },
})
// ...
```
:::tip
内部组件中的 `Emit` 事件将会抛出在 `component-emit` 上。具体内部组件中有哪些事件返回什么参数，将会在下面文档详细介绍。
:::
##### Type is Text（default）

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ------ |
| `line` | 超出多少的行数使用 `...` 代替 | `number` | `3` |
| `develop` | 是否显示 `“展开 / 收起”` 操作按钮 | `boolean` | `false` |
| `formatting` | 自定义当前单元格数据文本。`props` 为 `header` 配置的当前 `props` 值 | ^[function]`({row: Row, index: number, props: PowerfulTableHeaderProps<'text'>}) => (string \| number) `| - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{click: ({row: Row, index: number, props: PowerfulTableHeaderProps<'text'>}, event: Event) => void}` | - |

###### Text Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `click` | 点击触发 | ^[function]`{row: Row, index: number, prop: string, event: Event}` |


##### Type is Image

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ----- | ------ |
| `style` | 图片自定义样式 | `CSSProperties`  | - |
| `property` | 属性扩展字段 (支持 `el-image` 组件所有属性名) | ^[object / function]`Partial<ImageProp> \| (row: Row, index: number, props: PowerfulTableHeaderProps<'image', Row>) => Partial<ImageProp>` | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{[Image Emit 方法名]: ({row: Row, index: number, props: PowerfulTableHeaderProps<'image'>}, event: Event) => void}` | - |

``` ts
// ...
{
    label: '图片', //显示的标题
    props: [
      {
        type: 'image',
        prop: 'imageUrl',
        data: setData<'image', Lists>({
          on: {
            load: ({row, index, props}, evt) => {},
            error: ({row, index, props}, evt) => {}
          }
        }),
      },
    ],
  },
// ...
```

###### Image Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `load` | 图片加载成功触发 | `e: Event` |
| `error` | 图片加载成功触发 | `e: Error` |
| `switch` | 图片加载成功触发 | `index: number` |
| `close` | 图片加载成功触发 | - |

##### Type is Btn

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ----- | ---- |
| `tip` | 提示文字 | `string` | - |
| `text` | 按钮文字 | `string` | - |
| `style` | 按钮样式 | `CSSProperties` | - |
| `showBtn` | 控制按钮显示隐藏 | ^[function]`(row: Row, index: number) => void / boolean` | - |
| `beforeClick` | 点击前事件, `props(当前配置的props) btnIndex(按钮下标) resolve(回调函数，传递boolean)` | ^[function]`({row, index, props, btnIndex, params}, resolve) => void`| - |
| `click`<tag type='success' content='2.2.0' /> | 点击事件, 传入 `click` 时 `beforeClick` 失效 | ^[function]`({props: PowerfulTableHeaderProps<'btn'>; params: any; row: Row; index: number}) => void`| - |
| `params` | 自定义数据 | `any` | - |
| `isMore` | 是否更多 当 `data` 是二维数组时有效 | `boolean` | `false` |
| `property` | 属性扩展字段 (支持 `el-button` 组件所有属性名) | ^[object / function]`Partial<ButtonProp> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'btn', Row> }) => Partial<ButtonProp>` | - |
| `tipProperty` | 属性扩展字段 | ^[object]`Partial<ElTooltipProps>` | - |

##### Type is Switch

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ----- |
| `style` | 开关自定义样式 | `CSSProperties` | - |
| `property` | 属性扩展字段 (支持 `el-switch` 组件所有属性名) | ^[object / function]`Partial<SwitchProp> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'switch', Row> }) => Partial<SwitchProp>` | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{[Switch Emit 方法名]: ({row: Row, index: number, props: PowerfulTableHeaderProps<'switch'>}, event: Event) => void}` | - |

###### Switch Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | `switch` 状态发生变化时的回调函数 | `val` 新状态的值 |

##### Type is Input or Textarea

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ------ |
| `style` | 输入框样式 | `CSSProperties` | - |
| `slot` | 输入框前置或后置 | ^[enum]`'prepend' \| 'append' \| 'prefix' \| 'suffix'` | - |
| `symbol` | 文字或者符号在插槽中显示 | `string` | - |
| `property` | 属性扩展字段 (支持 `el-input` 组件所有属性名) | ^[object / function]`Partial<InputProp> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'input', Row> }) => Partial<InputProp>` | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{[Input Emit 方法名]: ({row: Row, index: number, props: PowerfulTableHeaderProps<'input'>}, event: Event) => void}` | - |

###### Input Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `blur` | 输入框失去焦点时触发 | `event: FocusEvent` |
| `focus` | 输入框获得焦点时触发 | `event: FocusEvent` |
| `change` | 数据改变时，当输入框失去焦点或用户按 Enter 时触发 | `value: string \| number` |
| `input` | 在 `Input` 值改变时触发 | `value: string \| number` |
| `clear` | 点击由 `clearable` 属性生成的清空按钮时触发 | - |

##### Type is Video

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| `style`  | 样式 | `CSSProperties` | - |
| `property` | 属性扩展字段 (支持 `video` 标签所有属性名) | ^[object / function]`Partial<VideoHTMLAttributes> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'video', Row> }) => Partial<VideoHTMLAttributes>` | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{[Video Emit 方法名]: ({row: Row, index: number, props: PowerfulTableHeaderProps<'video'>}, event: Event) => void}` | - |

###### Video Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `play` | 点击触发 | ^[object]`{row: Row, index: number, prop: string, event: Event}` |
| `pause` | 点击触发 | ^[object]`{row: Row, index: number, prop: string, event: Event}` |

##### Type is Iconfont

| 属性名  | 说明           | TS类型           | 默认值 |
| ----- | -------------- | -------------- | ------ |
| `class` | 样式类 | `string \| string[]` | - |
| `style` | 图标自定义样式 | `CSSProperties` | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{click: ({row: Row, index: number, props: PowerfulTableHeaderProps<'iconfont'>}, event: Event) => void}` | - |

###### Iconfont Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `click` | 点击触发 | ^[object]`{row: Row, index: number, prop: string, event: Event}` |

##### Type is Rate

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ------ |
| `style` | 样式 | `CSSProperties` | - | - |
| `property` | 属性扩展字段 (支持 `el-rate` 组件所有属性名) | ^[object / function]`Partial<RateProps> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'rate', Row> }) => Partial<RateProps>`  | - | - |
| `on`<tag type='success' content=2.2.4 /> | 事件对象，接收下面 `Emit` 相应方法名称 | ^[object]`{change: ({row: Row, index: number, props: PowerfulTableHeaderProps<'rate'>}, event: Event) => void}` | - |

###### Rate Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 值改变触发 | `val` 改变后的值 |

##### Type is Href

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ---- | ----- |
| `style` | 自定义样式 | `CSSProperties` | - |
| `target` | 跳转类型 | ^[enum]`'_self' \| '_blank' \| '_parent' \| '_top'` | `'\_blank'` |
| `text` | 所显示的文本 | ^[string / function]`(row: Row) => string` | - |
| `property` | 属性扩展字段 (支持 `el-link` 组件所有属性名) | ^[object / function]`Partial<LinkProps> \| ({ row: Row, index: number, props: PowerfulTableHeaderProps<'href', Row> }) => Partial<LinkProps>`  | - |

##### Type is Slot
::: code-group


``` ts [index-data.ts]
import type { PowerfulTableHeader } from 'el-powerful-table-ts/es/typings'

interface Lists {
  id: 1
}
export const header: PowerfulTableHeader<Lists>[] = [
  {
    label: "slot（插槽）", //显示的标题
    props: [
      {
        type: "slot",
        slotName: "A",
      },
    ],
  }
]
```

``` vue [app.vue]
<powerful-table>
  <template #A="{ row,index }">
    <div>
      <el-image
        style="width: 100px; border-radius: 10px"
        :src="row.imageUrl"
      ></el-image>
    </div>
  </template>
</powerful-table>
```

:::

##### Type is Tag

| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | ---- | ----- | ----- |
| `color` | 背景颜色，返回颜色值 | ^[function]`(row,tag) => string` | - |
| `number` | 需要显示前多少个 | `number` | `3` |
| `property` | 属性扩展字段 (支持 `el-tag` 组件所有属性名) | ^[object / function]`Partial<TagProps> \| ({ row, index, props }) => Partial<TagProps>` | - |

###### Tag Emit<tag type='danger' content=3.0.0 />/Event<tag type='success' content=2.2.4 />

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `click` | 点击触发 | ^[object]`{row: Row, index: number, prop: string, event: Event}` |
| `close` | 关闭 Tag 时触发的事件 | - |

## Emits

| 事件名 | 说明 | 类型 |
| ------ | --- | ---- |
| `size-change` | 分页器切换, `select` 所有页中选中的数据 | ^[function]`({ pageNum: number; pageSize: number }, select: Row[])` |
| `sort-custom` | 远程排序 | ^[function]`({ column: any, prop: string, order: string })` |
| `batch-operate` | 批量操作 | ^[function]`({ ids: (string \| number)[], item: PowerfulTableLabelValue, rows: Row[]})` |
| `btn-click` | 表格操作按钮 | ^[function]`({params: BtnDataType['params'], row: Row, index: number})` |
| `btn-plus-change` | 表格顶部左侧操作按钮，`rows` 返回所有选中的行 | ^[function]`({ effect: BtnConfig.BtnList['effect'], rows: Row[] })` |
| `btn-plus-refresh` | 表格顶部刷新按钮 | - |
| `row-click` | 行点击事件 | ^[function]`({row: Row, column: any, event: Event})` |
| `component-event` | 内部组件事件 | ^[function]`({componentName: keyof _TYPE \| 'filter', eventType: string}, ...arg: any)` |

## Slots
| 插槽名 | 说明 |
| ----- | ----- |
| `btn-left` | 表格顶部左侧按钮 |
| `btn-right` | 表格顶部右侧按钮 |
| `empty` | 表格内数据为空时内容 |
| `refresh` | 刷新 |
| `[slotName]` | 表格内自定义的插槽名称 |
| `[headerSlotName]` | 表格列头内自定义的插槽名称 |

## Utils<tag type='success' content=2.2.4 />
| 函数名 | 说明 | TS类型 |
| ----- | ----- | ----- |
| `getType` | 获取变量类型 | ^[function]`getType: <T>(target: T) => string` |
| `deepClone` | 深度克隆 | ^[function]`deepClone: <T>(target: T) => T` |
| `isTypeProtect` | [类型保护](https://www.tslang.cn/docs/handbook/advanced-types.html) 搜索 "用户自定义的类型保护" | ^[function]`isTypeProtect: <T, P extends T>(obj: T, cb: (obj: T) => boolean) => obj is P` |
| `setData` | 设置 `PowerfulTableHeaderProps` 类型下 `data` 数据，可以获得更好的类型提示 | ^[function]`setData: <T extends keyof _TYPE<L>, L = any>(data: _TYPE<L>[T]) => _TYPE<L>[T]` |

::: code-group

``` ts [index.ts]
import { getType, deepClone,isTypeProtect, setData } from 'el-plus-powerful-table/es'
import { log } from 'console'

log(getType('1')) // 'String'
log(getType(1)) // 'Number'
log(getType({})) // 'Object'
// ...

const a = {a: 1, b: {a: 2, c: {a: 3}}}
const b = deepClone(a)
log(a === b) // false

let c: number | []
c += 1 // ts 报错
if (isTypeProtect<typeof c, number>(c, (data) => typeof data === 'number')) {
  c += 1 // 正常
}

const headers: PowerfulTableHeader<Lists>[] = [{
  label: '图片',
  props: [
    {
      type: 'image',
      prop: 'imageUrl',
      data: setData<'image', Lists>({
        // 在这里输入的时候 idea 会提示有哪些属性
      }),
    },
  ],
}]

```

:::

## Expose
| 属性名 | 说明 | 类型 |
| ----- | ----- | ----- |
| `$slots` | 所传递的插槽名称 | ^[object]`PowerfulTableExpose['$slots']` |
| `$attrs` | 所传递的属性并且非 `props` 定义的属性名. [文档](https://cn.vuejs.org/guide/components/attrs.html#attribute-inheritance) | ^[object]`PowerfulTableExpose['$attrs']` |
| `$refs` | 表格 `Ref` 实例 | ^[object]`PowerfulTableExpose['$refs']` |
| `props`<tag type='success' content=2.2.4 /> | 表格 `props` 属性 | ^[object]`PowerfulTableExpose['props']` |
| `injectProps`<tag type='success' content=2.2.4 /> | 使用 `app.use` 时注入的数据 | ^[object]`PowerfulTableExpose['injectProps']` |
| `headerLists` | 过滤隐藏后的列 | ^[array]`PowerfulTableExpose['headerLists']` |
| `powerfulTableData` | 内置数据也就是 vue2 中的 data | ^[object]`PowerfulTableExpose['powerfulTableData']` |
| `stateData` | 状态数据 | ^[object]`PowerfulTableExpose['stateData']` |
| `resetList` | 重置数据发送请求 | ^[function]`PowerfulTableExpose['resetList']` |
| `getListData` | 重新发送请求 | ^[function]`PowerfulTableExpose['getListData']` |
| `handleSelectionChange` | 添加选中行 | ^[function]`PowerfulTableExpose['handleSelectionChange']` |
| `anewRender` | 重新计算表格布局位置 | ^[function]`PowerfulTableExpose['anewRender']` |
