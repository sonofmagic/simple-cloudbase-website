---
lang: zh-CN
title: 让小程序开发者们露出笑容
description: 服务小程序开发者
home: true
heroImage: /logo.png
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 项目简介
    link: /zh/guide/
    type: secondary
features:
  - title: 现代化的Nodejs
    details: 模块之间的复用，js(commonjs,esm),ts 与 alias,公共npm包,代码压缩支持
  - title: 低廉的迁移成本
    details: 旧有的云开发项目能够几乎 0 成本的迁移进来
  - title: 简单至上
    details: '尽可能少的配置，专注于改善小程序云开发的开发体验'

footer: MIT Licensed | Copyright © 2021-present ice breaker
---

### Quickly Start

<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
# 初始化项目
npx simple-cloudbase init my-simple-cloudbase-starter
cd my-simple-cloudbase-starter
# 安装包
yarn
# 开发watch模式
yarn dev
# 打包项目
yarn build
# 生成 cloudbaserc.json 部署文件
yarn gen

# 微信云开发部署:
yarn global add @cloudbase/cli
# tcb 登录到指定的小程序环境
tcb login
# 部署云函数
tcb fn deploy
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 初始化项目
npx simple-cloudbase init my-simple-cloudbase-starter
cd my-simple-cloudbase-starter
# 安装包
npm i
# 开发watch模式
npm run dev
# 打包项目
npm run build
# 生成 cloudbaserc.json 部署文件
npm run gen

# 微信云开发部署:
npm i -g  @cloudbase/cli
# tcb 登录到指定的小程序环境
tcb login
# 部署云函数
tcb fn deploy
```

  </CodeGroupItem>
</CodeGroup>
