---
lang: zh-CN
title: Hello SimpleCloudbase
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
    details: 模块之间的复用，js(commonjs,esm),ts 支持与 alias,公共npm包 支持
  - title: 迁移成本低廉
    details: 旧有的云开发项目能够几乎0成本的迁移进来
  - title: 简单至上
    details: '设计上尽可能少的配置，改善小程序云开发的开发体验'
  
footer: MIT Licensed | Copyright © 2021-present ice breaker
---

### Hello SimpleCloudbase
<CodeGroup>
  <CodeGroupItem title="YARN" active>

```bash
yarn global add @cloudbase/cli
# 在你的项目中安装
yarn add -D simple-cloudbase
# 注册了 stcb 指令 ,因为 cloudbase 的 alias 是 tcb,所以 stcb(simple-cloudbase)

# 初始化项目
yarn stcb init
# 打包项目
yarn build
# 生成 cloudbaserc.json 部署文件
yarn gen
# tcb 登录到指定的小程序环境
tcb login
# 部署云函数
tcb fn deploy
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
npm i -g @cloudbase/cli
# 在你的项目中安装
npm i -D simple-cloudbase
# 注册了 stcb 指令 ,因为 cloudbase 的 alias 是 tcb,所以 stcb(simple-cloudbase)

# 初始化项目
npx stcb init
# 打包项目
npm run build
# 生成 cloudbaserc.json 部署文件
npm run gen
# tcb 登录到指定的小程序环境
tcb login
# 部署云函数
tcb fn deploy
```

  </CodeGroupItem>
</CodeGroup>
