# Function as Application

这个包的设计思路，主要就是 `Function as Application`，即把一个函数当做一个应用来使用的。

**为什么？**

主要还是受限于目前的技术发展，每个函数的冷启动时间偏长。

假设一个非高频应用，使用多函数构建业务。

业务方部署了`50`个函数来进行服务, 在没有设置保留函数实例的情况下，每个函数都需要进行冷启动。

假设每一个函数冷启动时间为，`200ms`。这意味着，用户跑一遍业务流程，就需要额外消耗`200*50=10s`的时间，这会导致流畅性降低，大大破坏用户体验。

假如单函数来部署，情况就不一样了，由于用户都请求的同一个函数，即使冷启动，也只会额外消耗一次的时间。

显然 `Function as Application` 是目前阶段比较好的选择，虽然这似乎背离了 `faas` 的思想，但是毕竟 `时势造英雄` ，最佳实践也要依托技术的发展，目前技术做不到毫秒级的冷启动，那就索性使用一个 `"臃肿"`的函数吧。

## 设计思路

说起 `serverless cloud function` ，笔者就立马想到了它的入参，`event` 和 `context`。`function` 作为 `event` 的消费者。

通常写这种框架主要有几种思路:

1. 适配 `event` 创建路由标志进行分发
1. 创建 `proxy` 做 `request` 和 `response` 的转换，把 `event` 转化为 `request` 来兼容许多旧有的框架如 `express`,`koa` 等等。
1. `http` 场景直接透传(直接使用现有框架)

当然此 `simple-cloudbase-router` 使用的是方案 1。这最主要的原因，是因为小程序云开发场景的特殊性。

特殊在哪呢？ 主要体现在 `index.main` 函数的入参和返回值上。

例如普通的 `scf` 入参和返回值字段：

```js
isBase64Encoded: ctx.isBase64Encoded,
statusCode: ctx.status,
headers: ctx.headers,
body: contextType === JSON_TYPE ? JSON.stringify(ctx.body) : ctx.body,
```

相比于普通的 `scf` ，微信云开发看上去很 `raw`，
入参和返回值都没有被再次包裹。函数中返回什么样，小程序这里就拿到什么样。

所以为了附加对单函数的请求的路由标识字段，我们也通常会对 `wx.cloud,callFunction` 进行二次封装。

从而把 `name`,`url`,`params`这样的配置项植入进去，并跑到不同的代码分支逻辑执行。

所以在这种情况下，复刻一套`event` 定制版的 `koa` 和 `koa-router` 就很有必要了。

这就是 `Router` 的设计思路。
