# 迁移

## 微信云开发

你的原先的项目结构可能是这样的:

```bash
cloudfunctions
  - fn1
    - config.json
    - index.js
    - package.json
    - ...
  - fn2
    - ...
  - fn3
```

现在你需要的改动为:

在 `cloudfunctions` 中创建一个总的 `package.json`

把分散在各个 `fn1`,`fn2`... 中的 `devDependencies` ,`dependencies` 抽离到根目录 `cloudfunctions` 下的 `package.json`,

这样相当于用 这个 `package.json` 来作为所有云函数的公共部分。

同时，把 `fn1`,`fn2`... 这些 `nodejs` 项目，都剪切到 `cloudfunctions/src` 目录下，`src` 为默认的源码打包目录

打包后的结果默认会在 `dist` 下

改造后的目录结构是这样的:


```bash
cloudfunctions
  - dist
  - src
    - fn1
      - config.json
      - index.js
    - fn2
      - ...
    - fn3
  - package.json
```

同时您也可以在 `fn2` 下添加一个 `simple.json` ,设置 `ignore:true` 告诉 `simple-cloudbase` 这个函数不需要打包，通常这个函数就作为公共的 `lib` 来使用了。

`src` 下的 `fns` 也不受限，这种情况, 原先的 `commonjs`,`esm`,`ts` 都可以顺利的打包，不过为了工程化，建议都使用 `typescript`
