# 快速上手

## 依赖环境

- [Node.js LTS](https://nodejs.org/)
- [Yarn v1 classic](https://classic.yarnpkg.com/zh-Hans/) （可选）

## 手动安装

这一章节会帮助你使用 `simple-cloudbase`

- **步骤1**: 创建并进入一个新目录

```bash
mkdir simple-cloudbase-starter
cd simple-cloudbase-starter
```

- **步骤2**: 初始化项目

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
git init
yarn init
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
git init
npm init
```

  </CodeGroupItem>
</CodeGroup>


- **步骤3**: 将 `simple-cloudbase` 安装为本地依赖

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn add -D simple-cloudbase
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm install -D simple-cloudbase
```

  </CodeGroupItem>
</CodeGroup>

- **步骤4**: 在 `package.json` 中添加一些 [scripts](https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts)

```json
{
  "scripts": {
    "dev": "stcb dev",
    "build": "stcb build",
    "gen":"stcb gen"
  }
}
```

- **步骤5**: 将默认的临时目录和缓存目录添加到 `.gitignore` 文件中

```bash
echo 'node_modules' >> .gitignore
# dist 为最终的输出目录
echo 'dist' >> .gitignore
```

- **步骤6**: 创建你的第一个云函数

```bash
# src 默认为所有云函数源码的文件夹
mkdir src
cd src
mkdir getOpenId
# then write some codes into getOpenId/index.ts
```

- **步骤7**: 部署前的准备

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn build # 压缩打包源码
yarn gen # 生成 cloudbase 部署文件
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm run build # 压缩打包源码
npm run gen # 生成 cloudbase 部署文件
```

  </CodeGroupItem>
</CodeGroup>


- **步骤8**: 部署(微信小程序)

在.env.dev .env.prod 声明云开发环境ID后

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn global add @cloudbase/cli
# 微信授权
tcb login 
# dev云环境部署
tcb fn deploy -mode dev
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm i -g @cloudbase/cli
# 微信授权
tcb login 
# dev云环境部署
tcb fn deploy -mode dev
```

  </CodeGroupItem>
</CodeGroup>

现在，你 `dist` 下的所有函数都被部署到了指定云函数的环境中。