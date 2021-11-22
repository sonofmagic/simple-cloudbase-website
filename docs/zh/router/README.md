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

完整示例见[examples/modern](https://github.com/sonofmagic/simple-cloudbase-router/tree/main/examples/modern)
### Commonjs(Raw)



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

完整示例见[examples/raw](https://github.com/sonofmagic/simple-cloudbase-router/tree/main/examples/raw)


## 类型增强

不论是 `Application` 还是 `Router` ，它们都可以对 `IBaseContext` 进行扩展。即 `Application<IExtendContext = {}>` 和 `Router<IExtendContext = {}>`。

这在 `use` 中间件时尤为有效，如:

```ts
// wxContext Middleware
app.use((ctx, next) => {
  ctx.cloud = cloud
  ctx.wxContext = cloud.getWXContext()
  next()
})
// 在 ctx 上挂载了 'wx-server-sdk' 实例
// 那么就可以定义
import type { ICloud } from 'wx-server-sdk'
import Cloud from 'wx-server-sdk'

export type ICustomContext = {
  wxContext:ICloud.WXContext
  cloud:typeof Cloud
}

// 然后在 app 实例化时, 扩展泛型
const app = new Application<ICustomContext>()

// 这样就可以生成智能提示了，Router 同理
```

## 上下文字段

和 `http` 场景不同,`Router App`的上下文是经过简化的，主要如下

```ts
ctx.event = event // 函数初始入参 event
ctx.context = context // 函数初始入参 context
// event 中包含 $url 和 data, $url 为路由，data为参数
ctx.url = event.$url // 路由
ctx.data = event.data ?? {} // 函数初始入参 event
ctx.status = 200 // 状态码
ctx.body = {} // 返回值
```
### 小程序 event 入参
```ts
wx.cloud.callFunction({
      name,
      data: {
        $url: url, // 路由
        data, // 参数
      },
    });
```

### 云函数 return 数据

默认返回结构为, 状态码 + 数据 ，可通过中间件调整
```ts
    return {
      status: ctx.status,
      data: ctx.body
    }
```

## 小程序调用封装示例

```ts
export function createCallFunction(name: string) {
  return async (url?: string, data?: Record<string, any>) => {
    const { result } = await wx.cloud.callFunction({
      name,
      data: {
        $url: url,
        data,
      },
    });
    // do sth with result.status
    
    return (result as Record<string, any>).data;
  };
}

export const blogCallFunction = createCallFunction("blog");

export function getOpenId(): Promise<{ openid: string; unionid: string }> {
  return blogCallFunction("common/getOpenId");
}
```