import{_ as s,o as a,c as n,k as e}from"./app.7199debf.js";const u=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"安装 Node.js","slug":"安装-node-js","link":"#安装-node-js","children":[]}]},{"level":2,"title":"获取代码","slug":"获取代码","link":"#获取代码","children":[]}],"relativePath":"zh-CN/guide/start.md","lastUpdated":1677124335000}'),l={name:"zh-CN/guide/start.md"},p=e(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-hidden="true">#</a></h1><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-hidden="true">#</a></h2><p>本地环境需要安装 <a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn1.x</a>、<a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 和 <a href="https://git-scm.com/" target="_blank" rel="noreferrer">Git</a></p><div class="warning custom-block"><p class="custom-block-title">注意</p><ul><li>必须使用<a href="https://yarnpkg.com/" target="_blank" rel="noreferrer">Yarn1.x</a>，否则依赖可能安装不上。</li><li><a href="http://nodejs.org/" target="_blank" rel="noreferrer">Node.js</a> 版本要求<code>12.x</code>以上，且不能为<code>13.x</code>版本，这里推荐 <code>14.x</code> 及以上。</li></ul></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><h3 id="安装-node-js" tabindex="-1">安装 Node.js <a class="header-anchor" href="#安装-node-js" aria-hidden="true">#</a></h3><p>如果您电脑未安装<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a>，请安装它。</p><p><strong>验证</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dark-plus vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 出现相应npm版本即可</span></span>
<span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">-v</span></span>
<span class="line"><span style="color:#6A9955;"># 出现相应node版本即可</span></span>
<span class="line"><span style="color:#D4D4D4;">node </span><span style="color:#CE9178;">-v</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki dark-plus vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 出现相应npm版本即可</span></span>
<span class="line"><span style="color:#D4D4D4;">npm </span><span style="color:#CE9178;">-v</span></span>
<span class="line"><span style="color:#6A9955;"># 出现相应node版本即可</span></span>
<span class="line"><span style="color:#D4D4D4;">node </span><span style="color:#CE9178;">-v</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>如果你需要同时存在多个 <code>node</code> 版本，可以使用 <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">Nvm</a> 或者其他工具进行 Node.js 进行版本管理。</p><div class="tip custom-block"><p class="custom-block-title">避坑</p><p>如果你已经安装过 <code>node</code> 了，在安装 <code>nvm</code> 的话可能会造成 <code>node</code> 版本切换不生效问题。 需完全删除 <code>node</code> 重新安装</p></div><h2 id="获取代码" tabindex="-1">获取代码 <a class="header-anchor" href="#获取代码" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki dark-plus vp-code-dark" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 克隆项目</span></span>
<span class="line"><span style="color:#D4D4D4;">git </span><span style="color:#CE9178;">clone</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://github.com/peng-xiao-shuai/vite-vue-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 进入项目目录</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vite-vue-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 安装依赖 强烈推荐使用 Yarn</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn </span><span style="color:#CE9178;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 本地开发 启动项目</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span></span>
<span class="line"></span></code></pre><pre class="shiki dark-plus vp-code-light" tabindex="0"><code><span class="line"><span style="color:#6A9955;"># 克隆项目</span></span>
<span class="line"><span style="color:#D4D4D4;">git </span><span style="color:#CE9178;">clone</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">https://github.com/peng-xiao-shuai/vite-vue-admin.git</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 进入项目目录</span></span>
<span class="line"><span style="color:#DCDCAA;">cd</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">vite-vue-admin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 安装依赖 强烈推荐使用 Yarn</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn </span><span style="color:#CE9178;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A9955;"># 本地开发 启动项目</span></span>
<span class="line"><span style="color:#D4D4D4;">yarn </span><span style="color:#CE9178;">run</span><span style="color:#D4D4D4;"> </span><span style="color:#CE9178;">dev</span></span>
<span class="line"></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>Windows</code> 用户若安装不成功，很大概率是 <code>node-sass</code> 安装失败，可以尝试使用 <code>npm rebuild node-sass</code>。</p><p>另外因为 <code>node-sass</code> 是依赖 <code>python</code> 环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。</p></div>`,14),o=[p];function c(t,r,i,d,h,y){return a(),n("div",null,o)}const g=s(l,[["render",c]]);export{u as __pageData,g as default};
