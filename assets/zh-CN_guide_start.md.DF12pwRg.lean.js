import{_ as a,c as n,O as e,o as l}from"./chunks/framework.CmyazEwt.js";const y=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/guide/start.md","filePath":"zh-CN/guide/start.md","lastUpdated":1728380874000}'),o={name:"zh-CN/guide/start.md"};function p(t,s,c,r,i,d){return l(),n("div",null,s[0]||(s[0]=[e(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><p>本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn1.x</a>、<a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn1.x</a>，否则依赖可能安装不上。</li><li><a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 版本要求<code>12.x</code>以上，且不能为<code>13.x</code>版本，这里推荐 <code>14.x</code> 及以上。</li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><h3 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-label="Permalink to &quot;安装 Node.js&quot;">​</a></h3><p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>，请安装它。</p><p><strong>验证</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dark-plus vp-code-dark"><code><span class="line"><span style="color:#6A9955;"># 出现相应npm版本即可</span></span>
<span class="line"><span style="color:#DCDCAA;">npm</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-v</span></span>
<span class="line"><span style="color:#6A9955;"># 出现相应node版本即可</span></span>
<span class="line"><span style="color:#DCDCAA;">node</span><span style="color:#D4D4D4;"> </span><span style="color:#569CD6;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 出现相应npm版本即可</span></span>
<span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span>
<span class="line"><span style="color:#6A737D;"># 出现相应node版本即可</span></span>
<span class="line"><span style="color:#6F42C1;">node</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre></div><p>如果你需要同时存在多个 <code>node</code> 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</p><div class="tip custom-block"><p class="custom-block-title">避坑</p><p>如果你已经安装过 <code>node</code> 了，在安装 <code>nvm</code> 的话可能会造成 <code>node</code> 版本切换不生效问题。 需完全删除 <code>node</code> 重新安装</p></div><h2 id="获取代码" tabindex="-1">获取代码 <a class="header-anchor" href="#获取代码" aria-label="Permalink to &quot;获取代码&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dark-plus vp-code-dark"><code><span class="line"><span style="color:#6A9955;"># 克隆项目</span></span>
<span class="line"><span style="color:#DCDCAA;">git</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">clone</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://github.com/peng-xiao-shuai/vite-vue-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 进入项目目录</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vite-vue-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 安装依赖 强烈推荐使用 Yarn</span></span>
<span class="line"><span style="color:#DCDCAA;">yarn</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 本地开发 启动项目</span></span>
<span class="line"><span style="color:#DCDCAA;">yarn</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 克隆项目</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/peng-xiao-shuai/vite-vue-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 进入项目目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vite-vue-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 安装依赖 强烈推荐使用 Yarn</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 本地开发 启动项目</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>Windows</code> 用户若安装不成功，很大概率是 <code>node-sass</code> 安装失败，可以尝试使用 <code>npm rebuild node-sass</code>。</p><p>另外因为 <code>node-sass</code> 是依赖 <code>python</code> 环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。</p></div>`,14)]))}const u=a(o,[["render",p]]);export{y as __pageData,u as default};
