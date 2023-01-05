# 一个命令行翻译工具
## 介绍
一个命令行翻译工具，使用了百度翻译的api
## 使用
- 拉下代码后需要在src目录新建一个 private.ts 用于存放你的百度翻译appId和密钥
```
export const appId = ''
export const appSecret = ''
```
- 可以运行 start ~/.bashrc 修改快捷指令
```
alias fy="ts-node-dev .../rain-translate/src/cli.ts"(替换为你的目录)
```
- 即可在命令行使用 fy apple 进行翻译了