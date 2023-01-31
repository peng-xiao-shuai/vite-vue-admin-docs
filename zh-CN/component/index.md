## powerful-table Attributes 表格组件
| 参数 | 说明 | TS类型 | 可选值 | 默认值 |
| ---- | --- | ---- | ----- | ------ |
| `size` | 组件大小 | ^[enum]`medium \| small \| mini` |  | `small` |
| `list` | 当前数据 | `array` | - | - |
| `header` | 表格头部数据 | `PowerfulTableHeader<Row = any>` | - | - |
| `selectData` | 选中的数据 | `array` | -  | - |
| `selectCompare` | 选中数据和列表数据相比较的参数`[0]选中数据参数，[1]列表数据参数` | `string[]` | - | `['id','id']` |
| `isSelect` | 是否显示多选 | `boolean` | `false / true` | `false` |
| `selectable` | 当前行是否可以选中 | `(row: Row, index: number) => boolean` | - | - |
| `isPagination` | 是否显示分页器 | `boolean` | `false / true` | `false` |
| `operateData` | 批量操作 | `PowerfulTableOperateData` | - | - |
| `btnConfig` | 表格顶部按钮配置 | `PowerfulTableOperateData` | - | - |
| `tree` | 树形表格配置 | `PowerfulTableTree` | - | - |
| `paginationProperty` | 分页器组件扩展字段 | `Partial<PaginationProps>` | - | - |
| `property` | 表格组件扩展字段 | `Partial<TableProps<Row>>` | - | - |
