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