# 项目目录结构

```bash
cloudfunctions         # 云开发项目目录
  - dist               # 编译打包后的函数
  - src                # 函数源代码
    - fn1              # 函数目录
      - config.json    # 函数的 openapi config
      - index.[js/ts]  # 函数源代码
    - fn2              # 另一个函数
      - ...
    - common
      - index.[js/ts]  # 公共的 lib
      - simple.json    # stcb的函数内配置文件
      - ...
  - package.json       # package.json
  - [ts/js]config.json # 设置编译配置和别名
  - .env               # 部署环境变量文件
  - .env.dev           # ENV_ID=[你的dev环境] tcb fn deploy --mode dev
  - .env.prod          # ENV_ID=[你的prod环境] tcb fn deploy --mode prod
  - cloudbaserc.json   # 由stcb根据 dist中的函数 stcb gen自动生成
```