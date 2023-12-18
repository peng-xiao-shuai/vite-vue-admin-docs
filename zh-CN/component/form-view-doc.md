---
title: FormViewDoc
lang: zh-CN
outline: [1, 4]
---

# FormView
> **文档中大写开头的表示类型** 例如：`PowerfulTableHeaderProps.type` 表示 `PowerfulTableHeaderProps` 类型下的 `type` 属性

## 继承关系
**表单配置**可以和**表格配置**重合，可以说配置一个表格的 `headers` 再加上一两行数据即可配置一个表单

::: tip
下面 `index.vue` 中演示了基础的继承关系， `extend-table` 传递 `true` 时，`form-view` 组件内部自动回去 `powerful-table` 获取 `header` 配置（请保证 `powerful-table ref` 为 `PTable` 。当然如果你 `powerful-table ref` 为其他值时，请保证 `extend-table` 与 `powerful-table ref` 一致）
:::

::: details
::: code-group
``` ts [index-data.ts]
// powerful-table props columns
export const columns: PowerfulTableHeader<Lists>[] = [
  {
    label: '制造商',
    width: 200,
    overflowTooltip: true,
    isShowOrFilterColumn: 'filter',
    defaultFilter: true,
    headerAlign: 'left',
    props: [
      {
        type: 'href',
        prop: 'manufacturerHref',
        text: '厂商：',
        data: setData<'href', Lists>({
          text: (row: any) => row.manufacturer,
          property: {
            underline: true,
          },
        }),
      },
      {
        prop: 'icon',
        type: 'iconfont',
        text: '车标：',
        data: setData<'iconfont', Lists>({
          class: 'viteIcon',
          style: {
            height: '40px',
            lineHeight: '40px',
            fontSize: '40px',
          },
        }),
      },
    ],
  }
]
```

  ``` tsx [index-data.tsx]
// form-view props formItems
export const formItems: FormViewPTHeaders[] = [
  {
    label: '制作厂',
    props: {
      formItem: {
        type: FormTypeEnum.Select, // 默认 input
        data: formViewSetData<FormTypeEnum.Select>({
          options: [
            {
              label: 'a1',
              value: '1',
              options: [
                {
                  label: 'a3',
                  value: '3',
                },
                {
                  label: 'a3',
                  value: '3',
                },
              ],
            },
            {
              label: 'a2',
              value: '2',
              options: [
                {
                  label: 'a3',
                  value: '3',
                },
                {
                  label: 'a3',
                  value: '3',
                },
              ],
            },
          ],
          slots: {
            default: (h) => <C />,
          },
        }),
      },
    },
  },
]
```

``` tsx [index-data.tsx]
// columns And formItems
export const columns: FormViewPTHeaders[] = [
  {
    label: '制作厂', //显示的名称
    headerAlign: 'left',
    props: [
      {
        type: 'href',
        prop: 'manufacturerHref',
        text: '厂商：',
        data: setData<'href', Lists>({
          text: (row: any) => row.manufacturer,
          property: {
            underline: true,
          },
        }),
        formItem: {
          type: FormTypeEnum.Select,
          data: formViewSetData<FormTypeEnum.Select>({
            options: [
              {
                label: 'a1',
                value: '1',
                options: [
                  {
                    label: 'a3',
                    value: '3',
                  },
                  {
                    label: 'a3',
                    value: '3',
                  },
                ],
              },
              {
                label: 'a2',
                value: '2',
                options: [
                  {
                    label: 'a3',
                    value: '3',
                  },
                  {
                    label: 'a3',
                    value: '3',
                  },
                ],
              },
            ],
            slots: {
              default: (h) => <C />,
            },
          }),
        },
      },
      {
        prop: 'icon',
        type: 'iconfont',
        text: '车标：',
        data: setData<'iconfont', Lists>({
          class: 'viteIcon',
          style: {
            height: '40px',
            lineHeight: '40px',
            fontSize: '40px',
          },
        }),
        formItem: {},
      },
    ],
  }
]
```
``` html [index.vue]
<template>
  <powerful-table
    ref="PTable"
    :list-request="{
      listApi,
    }"
    :header="header"
  />

  <FormView ref="FView" :extend-table="true"/>
<template>

<script>
  // ...
</script>
```
:::

## Attributes
| 属性名 | 说明 | TS类型 | 默认值 |
| ---- | --- | ------ | ------ |
| `showType` | 显示类型 | `string` | - |
| `extendTable` | 是否继承表格。如果是 `true` 的话自动查找 `table` 组件 `ref` 名称为 `PTable` 的，也可以传递 `table` 的 `Ref` 名称 | `boolean \| string` | `false` |
| `formItems` | 表单配置 | ^[array]`FormItem[]` | - |
| `formDataDefault` | 表单默认值 | `object` | - |
| `disabled` | 表单是否禁用 | `boolean` | - |
| `property` | `el-form` 组件 `props` | ^[object]`Partial<FormProps>` | - |
| `apis` | `apis` 接口合集 | ^[function \| object]`(params: object) => Promise<any> \| { [key: string]: (params: object) => Promise<any> }` | - |

### Apis
::: tip
支持对象格式，也支持函数形式。<br/>
`formView` 暴露了 `submitForm` 函数。调用 `submitForm` 函数时在校验通过后会自动调用 `apis` （`apis` 时函数时直接触发，当 `apis` 时对象的时候会调用 `apis` 属性为 `showType` 的值。也就是 `apis[showType]` ）。`submitForm` 函数返回一个 `promise`

``` html
<FormView ... :apis="() => Promise.resolve({ data: [] })" />
<FormView ... showType="update" :apis="{
 'added': () => Promise.resolve({ data: [] })
 'update': () => Promise.resolve({ data: [] })
}" />

<!-- 请保证您的 apis 中的函数有一个形参，这样的话，组件内部会将 formData 数据传递进去 -->
<FormView ... :apis="requestAdd" />

<script setup>
const requestAdd = (params) => {
  console.log(params) // 这里的 params 为 formData
  return Promise.resolve({ data: [] })
}
// ...
</script>
```
:::

### FormItems
| 属性名 | 说明 | TS类型 | 默认值 |
| --- | --- | --- | --- |
| `prop` |` el-form-item prop` 属性。<br/> 配合表格组件时，默认读取 `PowerfulTableHeaderProps.prop` | `string` | - |
| `text` | `el-form-item label` 属性。<br/> 配合表格组件时，默认读取 `PowerfulTableHeader.label` | `string` |  |
| `slotName` | 插槽名称。<br/> 配合表格组件时，默认读取 `PowerfulTableHeaderProps.slotName` | `string` |  |
| `render` | [渲染函数](https://v3.cn.vuejs.org/guide/render-function.html#h-%E5%8F%82%E6%95%B0)  | ^[function]`(h: h, row: FormData, index: number) => VNode / string / number / JSX.Element` | -  |
| `basis` | `CSS` 中 `flex-basis` 属性，其元素宽度占比，当两个相邻的对象 `basis` 为 `48%` 时，则这个两个元素在一行 | `string` | `'100%'` |
| `type` | 默认 `input` 类型 | ^[enum]`FormTypeEnum` | `FormTypeEnum.input` |
| `data` | `PowerfulTableHeaderProps.type === FormItem.type` 则继承 `PowerfulTableHeaderProps.data`。不同的 `type` `data` 值不一样 | `FormType['xxx']` |
| `showType` | 显示类型，部分数据只在新增表单显示，部分只在修改表单显示。**默认全部显示**。如果传递此值将和表单组件 `props` 中的属性`showType` 进行比较，相等则显示 | `string \| string[]` | - |
| `defaultData` | 表单数据数据默认值，默认寻找 表单组件 `props` 中的属性`formDataDefault` 相应的 `prop` | `any` | - |
| `rule` | 规则校验，可以传递完整的 `rule` 规则，也可以传递部分规则例如：`rule = true` 开启必填校验；`rule = [1, 10]` 开启长度校验；`rule = 'phone'` 开启手机号校验； | ^[string \| boolean \| array]`true \| 'number' \| 'email' \| [number, number] \| FormItemRule[] \| 'phone' \| 'code' \| 'https' \| 'ip' \| 'english' \| 'chinese'` | - |
| `property` | `formItem props` 请参见 `Element Plus` 文档 | `Partial<FormItemProps>` | - |

#### Type is Input（default） or Textarea
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `symbol`   | 插槽的内容 | `string` | - |
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `slot`     | 如果只需要一个插槽的话可以使用 `slot` 参数，配合 `symbol` 实现 | `'prepend' \| 'append' \| 'prefix' \| 'suffix'` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`InputEmit` | - |
| `slots`    | `el-input` 组件 `插槽` | ^[object]`{[key: 'prefix'\|'suffix'\|'prepend'\|'append']: SlotFun}` | - |
| `property` | 属性扩展字段 (支持 `el-input` 组件所有属性名) | ^[object \| function]`Partial<InputProp> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<InputProp>` | - |

#### slots [说明](https://element-plus.gitee.io/zh-CN/component/input.html#slots)

| 插槽名    | 类型 |
|---------|------|
| `prefix`  | `SlotFun` |
| `suffix`  | `SlotFun` |
| `prepend` | `SlotFun` |
| `append`  | `SlotFun` |

#### [Event](https://element-plus.gitee.io/zh-CN/component/input.html#events)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `blur` | 失焦 | ^[function]`InputEmit['blur']` |
| `change` | 数据更改 | ^[function]`InputEmit['change']` |
| `input` | 输入 | ^[function]`InputEmit['input']` |
| `focus` | 聚焦 | ^[function]`InputEmit['focus']` |
| `clear` | 清除 | ^[function]`InputEmit['clear']` |

#### Interface
``` ts
type SlotFun = (
  h: typeof createElement,
  row: FormViewData['formData'],
  index: number
) => string | number | VNode | JSX.Element

type InputEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.Input>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  blur?: (params: T, ...arg: any) => void
  change?: (params: T, ...arg: any) => void
  input?: (params: T, ...arg: any) => void
  focus?: (params: T, ...arg: any) => void
  clear?: (params: T, ...arg: any) => void
}
```

#### Type is Switch
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`SwitchEmit` | - |
| `property` | 属性扩展字段 (支持 `el-switch` 组件所有属性名) | ^[object \| function]`Partial<SwitchProp> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<SwitchProp>` | - |

#### [Event](https://element-plus.gitee.io/zh-CN/component/switch.html#%E4%BA%8B%E4%BB%B6)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 数据更改 | ^[function]`SwitchEmit['change']` |

#### Interface
``` ts
type SwitchEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.Switch>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  change?: (params: T, ...arg: any) => void
}
```

#### Type is Select
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style` | 样式 | ^[object]`CSSProperties` | - |
| `options` | 选项的数据源 [options](https://element-plus.gitee.io/zh-CN/component/select-v2.html#selectv2-%E5%B1%9E%E6%80%A7) | ^[array]`object[]` | - |
| `on` | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`SelectEmit` | - |
| `slots` | `el-selectV2` 组件 [`插槽`](https://element-plus.gitee.io/zh-CN/component/select-v2.html#selectv2-%E6%8F%92%E6%A7%BD) | ^[object]`{[key: 'default'\|'empty'\|'prefix']: SlotFun}` | - |
| `property` | 属性扩展字段 (支持 `el-selectV2` 组件所有属性名) | ^[object \| function]`Partial<SelectV2Context['props']> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<SelectV2Context['props']>` | - |

#### [Event](https://element-plus.gitee.io/zh-CN/component/select-v2.html#selectv2-%E4%BA%8B%E4%BB%B6)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 数据变化 | ^[function]`SwitchEmit['change']` |
| `focus` | 聚焦事件 | ^[function]`SwitchEmit['focus']` |
| `blur` | 失焦事件 | ^[function]`SwitchEmit['blur']` |
| `clear` | 清除事件 | ^[function]`SwitchEmit['clear']` |
| `remove-tag` | 删除标签事件，多选情况下存在 | ^[function]`SwitchEmit['remove-tag']` |
| `visible-change` | 显示隐藏事件 | ^[function]`SwitchEmit['visible-change']` |

#### Interface
``` ts
type SwitchEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.Select>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  change?: (params: T, ...arg: any) => void
  focus?: (params: T, ...arg: any) => void
  blur?: (params: T, ...arg: any) => void
  clear?: (params: T, ...arg: any) => void
  'remove-tag'?: (params: T, ...arg: any) => void
  'visible-change'?: (params: T, ...arg: any) => void
}
```

#### Type is Rate
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style` | 样式 | ^[object]`CSSProperties` | - |
| `on` | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`RateEmit` | - |
| `options` | 单选按钮数据 参考 [`radio props`](https://element-plus.gitee.io/zh-CN/component/radio.html#radio-attributes) | ^[array]`RadioOptions[]` | - |
| `property` | 属性扩展字段 (支持 `el-radio-group` 组件所有属性名) | ^[object \| function]`Partial<RadioGroupProps> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<RadioGroupProps>` | - |

#### [Event](https://element-plus.gitee.io/zh-CN/component/rate.html#events)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 数据更改 | ^[function]`RateEmit['change']` |

#### Interface
``` ts
interface RadioOptions {
  /**
   * Radio 自定义内容，没有则显示 label
   */
  text?: string
  /**
   * Radio label
   */
  label: string
  /**
   * 是否禁用复选框形式的表单
   */
  disabled?: FunBol<FormTypeEnum.Checkbox>
  /**
   * 是否显示边框
   */
  border?: boolean
  /**
   * 表单的名称
   */
  name?: string
}

type RateEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.Rate>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  change?: (params: T, ...arg: any) => void
}
```

#### Type is Checkbox
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `options` | 单选按钮数据 参考 [`radio props`](https://element-plus.gitee.io/zh-CN/component/radio.html#radio-attributes) | ^[array]`RadioOptions[]` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`CheckboxDataEmit` | - |
| `property` | 属性扩展字段 (支持 `el-check-group` 组件所有属性名) | ^[object \| function]`Partial<CheckboxGroupProps> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<CheckboxGroupProps>` | - |

#### [Event](https://element-plus.gitee.io/zh-CN/component/select-v2.html#selectv2-%E4%BA%8B%E4%BB%B6)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 数据变化 | ^[function]`CheckboxDataEmit['change']` |

#### Interface
``` ts
type CheckboxDataEmit = RadioDataEmit<{
  /**
   * 表单配置项数据
   */
  formItem: FormItem<FormTypeEnum.Checkbox>
  /**
   * 索引
   */
  index: number
  /**
   * 表单数据
   */
  formData: FormViewData['formData']
}>
```



#### Type is DatePicker
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`DatePickerEmit` | - |
| `slots`    | `el-date-picker ` 组件 `插槽` | ^[object]`{[key: 'default'\|'range-separator']: SlotFun}` | - |
| `property` | 属性扩展字段 (支持 `el-date-picker` 组件所有属性名) | ^[object \| function]`Partial<DatePickerProps> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<DatePickerProps>` | - |

#### slots [说明](https://element-plus.gitee.io/zh-CN/component/date-picker.html#%E6%8F%92%E6%A7%BD)

| 插槽名    | 类型 |
|---------|------|
| `default`  | `SlotFun` |
| `'range-separator'`  | `SlotFun` |

#### [Event](https://element-plus.gitee.io/zh-CN/component/date-picker.html#%E4%BA%8B%E4%BB%B6)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `change` | 用户确认选定的值时触发 | ^[function]`DatePickerEmit['change']` |
| `blur` | 在组件 Input 失去焦点时触发 | ^[function]`DatePickerEmit['blur']` |
| `focus` | 在组件 Input 获得焦点时触发 | ^[function]`DatePickerEmit['focus']` |
| `calendar-change` | 在日历所选日期更改时触发 | ^[function]`DatePickerEmit['calendar-change']` |
| `panel-change` | 当日期面板改变时触发。 | ^[function]`DatePickerEmit['panel-change']` |
| `visible-change` | 当 DatePicker 的下拉列表出现/消失时触发 | ^[function]`DatePickerEmit['visible-change']` |

#### Interface
``` ts
type DatePickerEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.DatePicker>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  change?: ((parameter: T, ...arg: any) => void) | undefined
  blur?: ((parameter: T, ...arg: any) => void) | undefined
  focus?: ((parameter: T, ...arg: any) => void) | undefined
  'calendar-change'?: ((parameter: T, ...arg: any) => void) | undefined
  'panel-change'?: (parameter: T, ...arg: any) => void
  'visible-change'?: (parameter: T, ...arg: any) => void
}
```

#### Type is Slot
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| - | - | - | - |

#### Type is UploadFile
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`UploadFileEmit` | - |
| `property` | 属性扩展字段 (支持 [`UploadFile`](http://docs.geekclo.com/#/fe/demo-platform/components/upload-file/?id=props) 组件所有属性名) | ^[object \| function]`Partial<UploadFileProp> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<UploadFileProp>` | - |

#### [Event](http://docs.geekclo.com/#/fe/demo-platform/components/upload-file/?id=events)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `upload-file-success` | 文件上传成功回调 | ^[function]`UploadFileEmit['change']` |
| `upload-file-delete` | 文件删除回调 | ^[function]`UploadFileEmit['blur']` |

#### Interface
``` ts
type UploadFileEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.UploadFile>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  'upload-file-success'?: (parameter: T, ...arg: any) => void
  'upload-file-delete'?: (parameter: T, ...arg: any) => void
}
```

#### Type is UploadMedia
| 属性名 | 说明 | TS类型 | 默认值 |
|----------|------|------|------|
| `style`    | 样式 | ^[object]`CSSProperties` | - |
| `on`       | 事件对象，接收下面 `Event` 相应方法名称 | ^[object]`UploadMediaEmit` | - |
| `property` | 属性扩展字段 (支持 [`UploadMedia`](http://docs.geekclo.com/#/fe/demo-platform/components/com-upload-media/?id=props) 组件所有属性名) | ^[object \| function]`Partial<UploadMediaProp> \| ({ formData: FormViewData['formData'], index: number, formItem: FormItem }) => Partial<UploadMediaProp>` | - |

#### [Event](http://docs.geekclo.com/#/fe/demo-platform/components/com-upload-media/?id=events)

| 方法名 | 说明 | 类型 |
| ------ | --- | ---- |
| `files-change` | 上传事件 | ^[function]`UploadMediaEmit['files-change']` |

#### Interface
``` ts
type UploadMediaEmit<T = {
    /**
     * 表单配置项数据
     */
    formItem: FormItem<FormTypeEnum.UploadMedia>
    /**
     * 索引
     */
    index: number
    /**
     * 表单数据
     */
    formData: FormViewData['formData']
  }> = {
  'files-change'?: (parameter: T, ...arg: any) => void
}
```

## Expose
| 属性名 | 说明 | 类型 |
| ----- | ----- | ----- |
| `$slots` | 所传递的插槽名称 | ^[object]`FormViewExpose['$slots']` |
| `$attrs` | 所传递的属性并且非 `props` 定义的属性名. [文档](https://cn.vuejs.org/guide/components/attrs.html#attribute-inheritance) | ^[object]`FormViewExpose['$attrs']` |
| `$refs` | 表单 `Ref` 实例 | ^[object]`FormViewExpose['$refs']` |
| `props` | 组件 `props` | ^[object]`FormViewProps` |
| `formViewData` | 表单数据 | ^[object]`FormViewData` |
| `formItems` | `formItems` 更具 `props.showType` 过滤后的数据 | ^[array]`FormItem<any>[]` |
| `submitForm` | 提交校验函数 | ^[function]`(params?: object) => Promise<any>` |
