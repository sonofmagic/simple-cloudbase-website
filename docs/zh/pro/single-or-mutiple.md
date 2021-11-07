# 单函数还是多函数？

## 什么是单函数部署，什么是多函数部署?

回到 微信云函数，`SCF` 的本质上来

一个函数的部署，就像一个完整的 `Nodejs App` 一样

它可以只做一件事，也可以根据参数的不同做很多事。

像 `koa` , `express` 这种暴露给 `http server` 一个 `callback`, 他们靠路由的分发，根据参数走入了不同的代码块中。

同样，云函数这样的也可以做成单函数的形式:

```js
const getOpenId = require('./getOpenId/index')
const getMiniProgramCode = require('./getMiniProgramCode/index')
const createCollection = require('./createCollection/index')
const selectRecord = require('./selectRecord/index')
const updateRecord = require('./updateRecord/index')
const sumRecord = require('./sumRecord/index')
// 云函数入口函数
exports.main = async (event, context) => {
  switch (event.type) {
    case 'getOpenId':
      return await getOpenId.main(event, context)
    case 'getMiniProgramCode':
      return await getMiniProgramCode.main(event, context)
    case 'createCollection':
      return await createCollection.main(event, context)
    case 'selectRecord':
      return await selectRecord.main(event, context)
    case 'updateRecord':
      return await updateRecord.main(event, context)
    case 'sumRecord':
      return await sumRecord.main(event, context)
  }
}
```

这就相当于把小程序侧传入的参数 `type` 当做路由，然后分发到各种不同的函数内方法去。

这就有点像，我们在服务端实现了一个endpoint 作为万能接口。(有点graphql的味了)

当然，我们也可能见过这类的代码:

```js
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  const { result } = await cloud.callFunction({
    name: 'getCardStatus',
    data: {
      cardId,
      openid: wxContext.OPENID,
      targetOpenid,
      params: {
        like: true,
        star: true,
        follow: true
      }
    }
  })
  return result
}
```

这种便是，在一个函数内，通过 `sdk` 调用的方式，来调用另一个函数，从而执行另一个函数中的代码块，拿到结果之后在返回出来。

## 各有利弊

### 单函数应用部署的好处

其实现在比较现实还是 `function as application` 的做法，即一个函数，通过参数分发来处理不同的逻辑。

为什么？

就以上述 `cloud.callFunction` 为例， 在函数A里去调用函数B，但是2边的实例情况不同，函数A有可能经常被调用，实例经常保持唤醒，

函数B可能没有空闲的实例，这就意味着，它需要被冷启动，在这段时间里，函数A那个Call 函数B 的实例一直处于 `idle` 状态，在等待函数B唤醒实例来处理。

这样白白损耗了 A的时间，尤其是当前冷启动时间较长的情况下，A的实例有可能要等待 1000ms ,那用户等待的时间就更长了。

而把函数代码写在A内,随着A被唤醒，处理代码块自然就被唤醒了。

这种方式简单好理解，类似于传统单机的思想。

### 多函数部署的好处

这个也是有很多的，比如我们可以把整个系统看做成一个乐高积木。

某块零件，由于更新损坏了，可以立即回滚那块零件而不需要整个应用都会滚。

同时版本控制，流量调度也更加的精细，这点是单函数应用做不到的。

## 那么，应该用哪种思想去构建我们的应用呢?

看技术的发展把，要是有天冷启动时间在100ms以内，那我会选择多函数。

当然这2种思想并不是相悖的，多函数模式中，也可以存在某些强大的单函数呀，笑~

