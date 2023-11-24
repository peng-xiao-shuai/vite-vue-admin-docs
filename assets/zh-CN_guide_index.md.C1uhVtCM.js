import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.k1417hkB.js";const F=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/index.md","filePath":"zh-CN/guide/index.md","lastUpdated":1700796499000}'),p={name:"zh-CN/guide/index.md"},o=l(`<h1 id="getting-started" tabindex="-1">介绍 <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;介绍 {#getting-started}&quot;">​</a></h1><p><a href="https://peng-xiao-shuai.github.io/vite-vue-admin/" target="_blank" rel="noreferrer">Vite-Vue-Admin</a> 是一个前端后台管理模板，它基于 <code>Vite2.x、Vue3.x、Vue-router4.x、Vuex4.x、Element-plus、TypeScript</code> 实现。它使用了最新的前端技术栈，内置了 <code>vue-i18n</code> 国际化解决方案，动态路由，二开表格组件，antd-x6，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。也可以作为一个示例，用于学习 <code>Vue3、Vite、Ts</code> 等主流技术。</p><div class="tip custom-block"><p class="custom-block-title">建议</p><p>如果你是刚学习 <code>vue</code> 的小伙伴，本项目可能不适合你。本项目的定位是后台集成方案，不太适合当基础模板来进行二次开发。因为本项目集成了很多你可能用不到的功能，会造成不少的代码冗余。如果你的项目不关注这方面的问题，也可以直接基于它进行二次开发。</p></div><h2 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code-dark"><code><span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">登录</span><span style="color:#D4D4D4;"> / </span><span style="color:#9CDCFE;">注销</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">拼图验证</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">路由</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">动态路由</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">嵌套路由</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">外链</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">iframe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">Layout</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">搜索菜单</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">语言切换</span><span style="color:#D4D4D4;">（</span><span style="color:#9CDCFE;">中简</span><span style="color:#D4D4D4;">|</span><span style="color:#9CDCFE;">中繁</span><span style="color:#D4D4D4;">|</span><span style="color:#9CDCFE;">英文</span><span style="color:#D4D4D4;">）</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">全局错误日志捕获</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">全局</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">element</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">plus</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">组件大小切换</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">Screenfull</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">全屏</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">动态面包屑</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">tags</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">view</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">快捷导航</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">全局配置</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">主题颜色</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">菜单颜色</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">Layout部分组件控制</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">全局水印</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">组件</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">二开表格</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">antv</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">x6</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">可视化编辑</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">二开上传文件</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">图标下拉选择</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">富文本编辑器</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">markdown</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">编辑器</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">canvas</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">签名</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">地图获取经纬度</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">eCharts</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">图表</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">折线图</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">柱状图</span></span>
<span class="line"><span style="color:#D4D4D4;">    - </span><span style="color:#9CDCFE;">饼图</span></span>
<span class="line"><span style="color:#D4D4D4;">  </span></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">指令</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">按键指令</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">数字指令</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">防抖节流</span><span style="color:#D4D4D4;">（</span><span style="color:#9CDCFE;">指令版和函数版</span><span style="color:#D4D4D4;">）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">工具类</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">时间格式化</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">kebab</span><span style="color:#D4D4D4;">-</span><span style="color:#C586C0;">case</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">和</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">kebabCase</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">相互转换</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">rgb</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">和</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">hex</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">相互转换</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D4D4D4;">- </span><span style="color:#9CDCFE;">其他</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">mock</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">数据</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">首屏</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">loading</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">加载</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">宫格样式</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">grid</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">grid</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">$</span><span style="color:#D4D4D4;">{</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">}（</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">2</span><span style="color:#D4D4D4;"> ~ </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">）</span></span>
<span class="line"><span style="color:#D4D4D4;">  - </span><span style="color:#9CDCFE;">超出隐藏</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">line</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">$</span><span style="color:#D4D4D4;">{</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;">}（</span><span style="color:#9CDCFE;">i</span><span style="color:#D4D4D4;"> = </span><span style="color:#B5CEA8;">1</span><span style="color:#D4D4D4;"> ~ </span><span style="color:#B5CEA8;">5</span><span style="color:#D4D4D4;">）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 登录 </span><span style="color:#D73A49;">/</span><span style="color:#24292E;"> 注销</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 拼图验证</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 路由</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 动态路由</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 嵌套路由</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 外链</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> iframe</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> Layout</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 搜索菜单</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 语言切换（中简</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">中繁</span><span style="color:#D73A49;">|</span><span style="color:#24292E;">英文）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 全局错误日志捕获</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 全局 element</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">plus 组件大小切换</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> Screenfull 全屏</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 动态面包屑</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> tags</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">view 快捷导航</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 全局配置</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 主题颜色</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 菜单颜色</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> Layout部分组件控制</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 全局水印</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 组件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 二开表格</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> antv</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">x6 可视化编辑</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 二开上传文件</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 图标下拉选择</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 富文本编辑器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> markdown 编辑器</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> canvas 签名</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 地图获取经纬度</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> eCharts 图表</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 折线图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 柱状图</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 饼图</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 指令</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 按键指令</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 数字指令</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 防抖节流（指令版和函数版）</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 工具类</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 时间格式化</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> kebab</span><span style="color:#D73A49;">-case</span><span style="color:#24292E;"> 和 kebabCase 相互转换</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> rgb 和 hex 相互转换</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 其他</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> mock 数据</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 首屏 loading 加载</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 宫格样式 grid grid</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">\${i}（i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">）</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">-</span><span style="color:#24292E;"> 超出隐藏 line</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">\${i}（i </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">~</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">5</span><span style="color:#24292E;">）</span></span></code></pre></div><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki dark-plus vp-code-dark"><code><span class="line"><span style="color:#D4D4D4;">├─.</span><span style="color:#9CDCFE;">github</span><span style="color:#D4D4D4;">                    # </span><span style="color:#9CDCFE;">git配置</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">dist</span><span style="color:#D4D4D4;">                       # </span><span style="color:#9CDCFE;">打包后文件</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">mock</span></span>
<span class="line"><span style="color:#D4D4D4;">│  ├─</span><span style="color:#9CDCFE;">api</span><span style="color:#D4D4D4;">                     # </span><span style="color:#9CDCFE;">mock</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">接口</span></span>
<span class="line"><span style="color:#D4D4D4;">│  └─</span><span style="color:#9CDCFE;">data</span><span style="color:#D4D4D4;">                    # </span><span style="color:#9CDCFE;">mock</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">数据源</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">public</span><span style="color:#D4D4D4;">                     # </span><span style="color:#9CDCFE;">静态资源</span></span>
<span class="line"><span style="color:#D4D4D4;">└─</span><span style="color:#9CDCFE;">src</span><span style="color:#D4D4D4;">                        # </span><span style="color:#9CDCFE;">源代码</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">api</span><span style="color:#D4D4D4;">                    # </span><span style="color:#9CDCFE;">接口请求</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">assets</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">图片等静态资源</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">components</span><span style="color:#D4D4D4;">             # </span><span style="color:#9CDCFE;">公共组件</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">config</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">全局配置</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">directives</span><span style="color:#D4D4D4;">             # </span><span style="color:#9CDCFE;">全局指令</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">hooks</span><span style="color:#D4D4D4;">                  # </span><span style="color:#9CDCFE;">hooks</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">language</span><span style="color:#D4D4D4;">               # </span><span style="color:#9CDCFE;">国际化语言文件</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">layout</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">全局</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">layout</span><span style="color:#D4D4D4;"> （</span><span style="color:#9CDCFE;">可以理解为</span><span style="color:#D4D4D4;"> “</span><span style="color:#9CDCFE;">壳</span><span style="color:#D4D4D4;">”）</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">router</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">路由</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">store</span><span style="color:#D4D4D4;">                  # </span><span style="color:#9CDCFE;">全局</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">store管理</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">styles</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">全局样式</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">utils</span><span style="color:#D4D4D4;">                  # </span><span style="color:#9CDCFE;">全局公用方法</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">views</span><span style="color:#D4D4D4;">                  # </span><span style="color:#9CDCFE;">views</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">所有页面</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">App</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">vue</span><span style="color:#D4D4D4;">                # </span><span style="color:#9CDCFE;">入口页面</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">main</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">                # </span><span style="color:#9CDCFE;">入口文件</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">加载组件</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">初始化等</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">permission</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">          # </span><span style="color:#9CDCFE;">路由守卫</span></span>
<span class="line"><span style="color:#D4D4D4;">│   ├─</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">-</span><span style="color:#9CDCFE;">editor</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">           # </span><span style="color:#9CDCFE;">markdown</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">引入包文件</span></span>
<span class="line"><span style="color:#D4D4D4;">│   └─</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">             # </span><span style="color:#9CDCFE;">依赖声明文件</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">html</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">项目首页</span></span>
<span class="line"><span style="color:#D4D4D4;">├─.</span><span style="color:#9CDCFE;">env</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">xxx</span><span style="color:#D4D4D4;">                   # </span><span style="color:#9CDCFE;">环境变量配置</span></span>
<span class="line"><span style="color:#D4D4D4;">├─.</span><span style="color:#9CDCFE;">eslintrc</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">js</span><span style="color:#D4D4D4;">               # </span><span style="color:#9CDCFE;">eslint</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">配置项</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">babel</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">config</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">js</span><span style="color:#D4D4D4;">            # </span><span style="color:#9CDCFE;">babel</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">配置</span></span>
<span class="line"><span style="color:#D4D4D4;">├─.</span><span style="color:#9CDCFE;">gitignore</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">提交忽略文件配置</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">vite</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">config</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">             # </span><span style="color:#9CDCFE;">vite</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">打包配置</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">index</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">d</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">ts</span><span style="color:#D4D4D4;">                 # </span><span style="color:#9CDCFE;">声明文件</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#4FC1FF;">README</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">md</span><span style="color:#D4D4D4;">                  # </span><span style="color:#9CDCFE;">自述文件</span></span>
<span class="line"><span style="color:#D4D4D4;">├─</span><span style="color:#9CDCFE;">tsconfig</span><span style="color:#D4D4D4;">                   # </span><span style="color:#9CDCFE;">typescript</span><span style="color:#D4D4D4;"> </span><span style="color:#9CDCFE;">配置</span></span>
<span class="line"><span style="color:#D4D4D4;">└─</span><span style="color:#9CDCFE;">package</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">json</span><span style="color:#D4D4D4;">               # </span><span style="color:#9CDCFE;">package</span><span style="color:#D4D4D4;">.</span><span style="color:#9CDCFE;">json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">├─.github                    # git配置</span></span>
<span class="line"><span style="color:#24292E;">├─dist                       # 打包后文件</span></span>
<span class="line"><span style="color:#24292E;">├─mock</span></span>
<span class="line"><span style="color:#24292E;">│  ├─api                     # mock 接口</span></span>
<span class="line"><span style="color:#24292E;">│  └─data                    # mock 数据源</span></span>
<span class="line"><span style="color:#24292E;">├─public                     # 静态资源</span></span>
<span class="line"><span style="color:#24292E;">└─src                        # 源代码</span></span>
<span class="line"><span style="color:#24292E;">│   ├─api                    # 接口请求</span></span>
<span class="line"><span style="color:#24292E;">│   ├─assets                 # 图片等静态资源</span></span>
<span class="line"><span style="color:#24292E;">│   ├─components             # 公共组件</span></span>
<span class="line"><span style="color:#24292E;">│   ├─config                 # 全局配置</span></span>
<span class="line"><span style="color:#24292E;">│   ├─directives             # 全局指令</span></span>
<span class="line"><span style="color:#24292E;">│   ├─hooks                  # hooks</span></span>
<span class="line"><span style="color:#24292E;">│   ├─language               # 国际化语言文件</span></span>
<span class="line"><span style="color:#24292E;">│   ├─layout                 # 全局 layout （可以理解为 “壳”）</span></span>
<span class="line"><span style="color:#24292E;">│   ├─router                 # 路由</span></span>
<span class="line"><span style="color:#24292E;">│   ├─store                  # 全局 store管理</span></span>
<span class="line"><span style="color:#24292E;">│   ├─styles                 # 全局样式</span></span>
<span class="line"><span style="color:#24292E;">│   ├─utils                  # 全局公用方法</span></span>
<span class="line"><span style="color:#24292E;">│   ├─views                  # views 所有页面</span></span>
<span class="line"><span style="color:#24292E;">│   ├─App.vue                # 入口页面</span></span>
<span class="line"><span style="color:#24292E;">│   ├─main.ts                # 入口文件 加载组件 初始化等</span></span>
<span class="line"><span style="color:#24292E;">│   ├─permission.ts          # 路由守卫</span></span>
<span class="line"><span style="color:#24292E;">│   ├─md</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">editor.ts           # markdown 引入包文件</span></span>
<span class="line"><span style="color:#24292E;">│   └─index.d.ts             # 依赖声明文件</span></span>
<span class="line"><span style="color:#24292E;">├─index.html                 # 项目首页</span></span>
<span class="line"><span style="color:#24292E;">├─.env.xxx                   # 环境变量配置</span></span>
<span class="line"><span style="color:#24292E;">├─.eslintrc.js               # eslint 配置项</span></span>
<span class="line"><span style="color:#24292E;">├─babel.config.js            # babel 配置</span></span>
<span class="line"><span style="color:#24292E;">├─.gitignore                 # git 提交忽略文件配置</span></span>
<span class="line"><span style="color:#24292E;">├─vite.config.ts             # vite 打包配置</span></span>
<span class="line"><span style="color:#24292E;">├─index.d.ts                 # 声明文件</span></span>
<span class="line"><span style="color:#24292E;">├─</span><span style="color:#005CC5;">README</span><span style="color:#24292E;">.md                  # 自述文件</span></span>
<span class="line"><span style="color:#24292E;">├─tsconfig                   # typescript 配置</span></span>
<span class="line"><span style="color:#24292E;">└─package.json               # package.json</span></span></code></pre></div><h2 id="前序准备" tabindex="-1">前序准备 <a class="header-anchor" href="#前序准备" aria-label="Permalink to &quot;前序准备&quot;">​</a></h2><p>本项目需要一定前端基础知识，请确保掌握 Vue 的基础知识，以便能处理一些常见的问题。 建议在开发前先学一下以下内容，提前了解和学习这些知识，会对项目理解非常有帮助:</p><ul><li><a href="https://v3.cn.vuejs.org/guide/migration/introduction.html" target="_blank" rel="noreferrer">Vue2 迁移到 3</a></li><li><a href="https://v3.cn.vuejs.org/" target="_blank" rel="noreferrer">Vue3中文文档</a></li><li><a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">TypeScript</a> OR <a href="https://www.tslang.cn/" target="_blank" rel="noreferrer">TypeScript中文文档</a></li><li><a href="https://next.router.vuejs.org/zh/index.html" target="_blank" rel="noreferrer">Vue-router</a></li><li><a href="https://element-plus.gitee.io/zh-CN/guide/design.html" target="_blank" rel="noreferrer">Element-plus</a></li><li><a href="https://es6.ruanyifeng.com/#README" target="_blank" rel="noreferrer">ECMAScript 6 入门</a></li><li><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vitejs</a></li><li><a href="http://mockjs.com/" target="_blank" rel="noreferrer">Mockjs</a></li></ul><h2 id="如何加入我们" tabindex="-1">如何加入我们 <a class="header-anchor" href="#如何加入我们" aria-label="Permalink to &quot;如何加入我们&quot;">​</a></h2><p>本文档项目地址 <a href="https://github.com/peng-xiao-shuai/vite-vue-admin-dosc" target="_blank" rel="noreferrer">Vite-Vue-Admin-Docs</a> 基于 <a href="https://vitejs.cn/vitepress/#motivation" target="_blank" rel="noreferrer">Vitepress</a> 开发。</p><p>有任何修改和建议都可以该项目 <code>pr</code> 和 <code>issue</code></p><p><code>Vite-Vue-Admin</code> 还在持续迭代中，逐步沉淀和总结出更多功能和相应的实现代码，总结中后台产品模板/组件/业务场景的最佳实践。同时整个项目本着一切免费的原则，原则上不会收取任何费用及版权，可以放心使用。本项目也十分期待你的参与和反馈。</p>`,14),e=[o];function c(t,D,r,y,C,i){return n(),a("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};