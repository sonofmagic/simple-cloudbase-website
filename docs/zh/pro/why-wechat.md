# 为什么是微信云函数

市面上的 serverless 框架我也用过不少，比如个人就很喜欢 serverless framework

你看到的这个网站，就是用它部署的

但是，微信云开发太特殊了

它的微信上下文机制，openapi机制，使得它的 scf 容器往往是做定制化处理的

所以，这个工具链就是为 微信云开发，还有XX云开发已经构成的生态服务的。

这点在设计之初，就和那些泛用性的 serverless 框架不同