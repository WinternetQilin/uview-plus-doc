## 平台兼容性

| H5/PC  | IOS | 安卓 | 微信小程序 | 字节小程序 | 快手小程序 | 支付宝小程序 | 钉钉小程序 | 百度小程序 |
| --- | --- | ---- | ---------- | ---------- | ---------- | ------------ | ---------- | ---------- |
| √   | x   | x    | x          | x          | x          | x            | x          | x          |

## ⚙️ 环境

- node>=18
- pnpm>=7.30
- Vue Official>=2.1.10
- TypeScript>=5.0

## 🪾 分支 

- main - 代码分支
- release - 发布分支

## &#x1F4C2; 快速开始

执行 `pnpm i` 安装依赖
执行 `pnpm dev` 运行 `H5`

## 📦 运行（支持热更新）

- web平台： `pnpm dev:h5` 或 `pnpm dev`, 然后打开 [http://localhost:9000/](http://localhost:9000/)。

## 🔗 发布

- web平台： `pnpm build:h5`，打包后的文件在 `dist/build/h5`，可以放到web服务器，如nginx运行。如果最终不是放在根目录，可以在 `manifest.config.ts` 文件的 `h5.router.base` 属性进行修改。

## 📄 License

[MIT](https://opensource.org/license/mit/)

## 🧠 提示词

修复页面：修复这个页面的bug，并且将展示的代码部分改为使用组件 CodeBlock.vue 进行展示.顺便把没用的样式也清除掉，使用frontend-design.skill优化一下这个界面的样式，优先用样式md中已有的定义，没有的按照相似进行设计并补充到样式md中

补充参数列表：在最后更新api表单：<复制粘贴的api表单>