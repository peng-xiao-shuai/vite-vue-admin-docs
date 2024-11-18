# 开始
## 环境准备

本地环境需要安装 [pnpm](https://pnpm.io/)、[Node.js](http://nodejs.org/) 和 [Git](https://git-scm.com/)

::: warning 注意

- 推荐使用 [pnpm](https://pnpm.io/)。
- [Node.js](http://nodejs.org/) 这里推荐 `18.x` 及以上。

:::

## 安装
### 安装 Node.js

如果您电脑未安装[Node.js](https://nodejs.org/en/)，请安装它。

**验证**

```bash
# 出现相应npm版本即可
npm -v
# 出现相应node版本即可
node -v

```
如果你需要同时存在多个 `node` 版本，可以使用 [Nvm](https://github.com/nvm-sh/nvm) 或者其他工具进行 Node.js 进行版本管理。

::: tip 避坑
如果你已经安装过 `node` 了，在安装 `nvm` 的话可能会造成 `node` 版本切换不生效问题。
需完全删除 `node` 重新安装
:::

## 获取代码
```bash
# 克隆项目
git clone https://github.com/peng-xiao-shuai/vite-vue-admin.git

# 进入项目目录
cd vite-vue-admin

# 安装依赖 强烈推荐使用 Yarn
pnpm install

# 本地开发 启动项目
pnpm dev
```

::: tip TIP

`Windows` 用户若安装不成功，很大概率是 `node-sass` 安装失败，可以尝试使用 `npm rebuild node-sass`。

另外因为 `node-sass` 是依赖 `python` 环境的，如果你之前没有安装和配置过的话，需要自行查看一下相关安装教程。
:::
