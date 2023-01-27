<!--
 * @Description: 发包流程
 * @Version: 1.0
 * @Author: ziruiwang
 * @Date: 2023-01-19 10:08:12
 * @LastEditTime: 2023-01-19 11:01:24
-->

# kxxxlcomponentlibrary

通用工具库

# 全局安装 lerna

npm i -g lerna

# 新建包

npm run create
component: vue 组件
package: api

# 安装所有依赖项 并连接任何交叉依赖

lerna bootstrap

# 打包

npm run build

# 变更包之后进行提交，之后发布

lerna publish from-package

# 如果多个包有变更，但只想发布某一个包

lerna publish --force-publish=包名

# 发布测试包

npm run prepublish

# 本地联调

创建全局链接 npm link
项目里使用这个链接 npm link xx

项目里去除链接 npm unlink xx
关闭全局链接 npm unlink
