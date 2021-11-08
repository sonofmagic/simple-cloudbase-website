# cloudbase cli 工具

CloudBase CLI 是云开发（Tencent CloudBase，TCB）开源的命令行界面交互工具，用于帮助用户快速、方便的部署项目，管理云开发资源。

它可以管理 2 个不同的来源的云开发的环境。

1. 在腾讯云上创建的环境
2. 在微信开发者工具上开通云开发创建的环境

我们这里重点管理的是 : 微信开发者工具创建的环境，即:

![cloudbase](/cloudbase.png)

**注意右下角的来源!** ， 腾讯云创建的，右下角为 : 来源 腾讯云!

## 如何使用?

`stcb` 的初始化模板里已经存放的一些命令

这里演示一下，列出当前环境下的函数，批量部署，还有批量删除

### 列出当前环境下的函数

![tcb-list](/images/tcb/tcb-list.png)

对应微信 IDE 里的

![wechat-list](/images/tcb/wechat-list.png)

### 批量部署

![cli-deploy-success](/images/tcb/cli-deploy-success.png)

### 批量删除

![remove-all-fns](/images/tcb/remove-all-fns.png)
