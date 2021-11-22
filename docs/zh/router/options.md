# 配置项

## Application

应用主体

```ts
const app = new Application();
// do sth ...
export default async function (event, context) {
  return await app.serve(event, context);
}
```

## Router

路由

```ts
const router = new Router({
  prefix: "demo",
});
router.use(async (ctx, next) => {
  // code ...
  await next();
});

router.use("getOpenId", async (ctx, next) => {
  // code ...
  await next();
});

app.use(router.routes());
```

## MP callFunction

`wx.cloud.callFunction` 的简易封装。

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

    return (result as Record<string, any>).data;
  };
}

export const blogCallFunction = createCallFunction("demo");

export function getOpenId(): Promise<{ openid: string; unionid: string }> {
  return blogCallFunction("common/getOpenId");
}
```
