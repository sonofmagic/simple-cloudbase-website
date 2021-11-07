# 配置

## 环境

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，可以加入 .gitignore 忽略
.env.[mode]         # 只在指定的模式中被载入
```

## 配置文件

每个函数的`src`源码文件夹下，都可以放入一个 `simple.json`

```ts
interface ISimpleConfig {
  // 打包时是否忽略此函数，通常一些外置的公共包需要设置为 true,比如函数A和B依赖 lib C, 但是C不是一个函数，也在 src，目录下
  ignore?: boolean
  //当前函数打包时跳过的 npm 包
  externals?: string[]
}
```

## 别名

可以在项目根目录里，添加 `jsconfig.json` 或者 `tsconfig.json`

然后设置

```js
  "compilerOptions": {
    //...
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
    //...
  }
```

这样在打包时，既可以使用 alias，也可以顺便添加 `vscode` 智能提示，也是一举两得。

## Cloudbase配置

[Cloudbase cli 相关文档](https://docs.cloudbase.net/cli-v1/config)
