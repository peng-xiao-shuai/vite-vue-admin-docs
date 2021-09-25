# 介绍 {#getting-started}

[Vite-Vue-Admin](https://peng-xiao-shuai.github.io/vite-vue-admin/) 是一个前端后台管理模板，它基于 `Vite2.X、vue3.X、vue-router4.X、vuex4.X、element-plus、typeScript` 实现。它使用了最新的前端技术栈，内置了 `vue-i18n` 国际化解决方案，动态路由，二开表格组件，antd-x6，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。

:::tip 建议
如果你是刚学习 `vue` 的小伙伴，本项目可能不适合你。本项目的定位是后台集成方案，不太适合当基础模板来进行二次开发。因为本项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。
:::

## 功能

``` js
- 登录 / 注销
  - 拼图验证

- 路由
  - 动态路由
  - 嵌套路由
  - 外链
  - iframe

- Layout
  - 搜索菜单
  - 语言切换（中简|中繁|英文）
  - 全局错误日志捕获
  - 全局 element-plus 组件大小切换
  - Screenfull 全屏
  - 动态面包屑
  - tags-view 快捷导航
  - 全局配置
    - 主题颜色
    - 菜单颜色
    - Layout部分组件控制
    - 全局水印

- 组件
  - 二开表格
  - antv-x6 可视化编辑
  - 二开上传文件
  - 图标下拉选择
  - 富文本编辑器
  - markdown 编辑器
  - canvas 签名
  - 地图获取经纬度
  - eCharts 图表
    - 折线图
    - 柱状图
    - 饼图
  
- 指令
  - 按键指令
  - 数字指令
  - 防抖节流（指令版和函数版）

- 工具类
  - 时间格式化
  - kebab-case 和 kebabCase 相互转换
  - rgb 和 hex 相互转换

- 其他
  - mock 数据
  - 首屏 loading 加载
  - 宫格样式 grid grid-${i}（i = 2 ~ 5）
  - 超出隐藏 line-${i}（i = 1 ~ 5）
```

## 目录结构

```js
├─.github                    # git配置
├─dist                       # 打包后文件
├─mock
│  ├─api                     # mock 接口
│  └─data                    # mock 数据源
├─public                     # 静态资源
└─src                        # 源代码
│   ├─api                    # 接口请求
│   ├─assets                 # 图片等静态资源
│   ├─components             # 公共组件
│   ├─config                 # 全局配置
│   ├─directives             # 全局指令
│   ├─hooks                  # hooks
│   ├─language               # 国际化语言文件
│   ├─layout                 # 全局 layout （可以理解为 “壳”）
│   ├─router                 # 路由
│   ├─store                  # 全局 store管理
│   ├─styles                 # 全局样式
│   ├─utils                  # 全局公用方法
│   ├─views                  # views 所有页面
│   ├─App.vue                # 入口页面
│   ├─main.ts                # 入口文件 加载组件 初始化等
│   ├─permission.ts          # 路由守卫
│   ├─md-editor.ts           # markdown 引入包文件
│   └─index.d.ts             # 依赖声明文件
├─index.html                 # 项目首页
├─.env.xxx                   # 环境变量配置
├─.eslintrc.js               # eslint 配置项
├─babel.config.js            # babel 配置
├─.gitignore                 # git 提交忽略文件配置
├─vite.config.ts             # vite 打包配置
├─index.d.ts                 # 声明文件
├─README.md                  # 自述文件
├─tsconfig                   # typescript 配置
└─package.json               # package.json
```