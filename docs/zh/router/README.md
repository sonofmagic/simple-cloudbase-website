# simple-cloudbase-router

> 像写 koa 一样来写 微信云函数

## 安装

```bash
yarn add simple-cloudbase-router@latest
# or
npm i simple-cloudbase-router@latest
```

## 快速开始示例

### Ts/ESM (with [`simple-cloudbase`](https://cloudbase.icebreaker.top/))

完整见[examples/modern](https://github.com/sonofmagic/simple-cloudbase-router/tree/main/examples/modern)

```ts
// app.ts
import { cloud } from '~/common/tcb'
import { Application } from 'simple-cloudbase-router'
import type { ICustomContext } from './type'
import { commonRouter } from './routers'
const app = new Application<ICustomContext>()

app.use((ctx, next) => {
  ctx.cloud = cloud
  ctx.wxContext = cloud.getWXContext()
  next()
})

app.use(commonRouter.routes())

app.on('error', (_err, ctx) => {
  console.error(ctx.event)
})

export default app
```

```ts
// index.ts
import app from './app'
export async function main(event: any, content: any) {
  return await app.serve(event, content)
}
```

### Commonjs(Raw)

完整见[examples/raw](https://github.com/sonofmagic/simple-cloudbase-router/tree/main/examples/raw)

```js
// app.js
const cloud = require('wx-server-sdk')
cloud.init({
  env: cloud.DYNAMIC_CURRENT_ENV
})
const { Application } = require('simple-cloudbase-router')
const app = new Application()
const commonRouter = require('./routers/common')

app.use((ctx, next) => {
  ctx.cloud = cloud
  ctx.wxContext = cloud.getWXContext()
  next()
})

app.use(commonRouter.routes())

app.on('error', (_err, ctx) => {
  console.error(ctx.event)
})

module.exports = app
```

```js
// index.js
const app = require('./app')

exports.main = async (event, context) => {
  return await app.serve(event, context)
}
```
