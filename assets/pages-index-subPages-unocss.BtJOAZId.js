import{_ as c}from"./CodeBlock.C3t72IAG.js";import{s as l,a as f,w as n,b as a,f as p,g as t,i as d,j as m,k as e}from"./index-Bt5U6C3y.js";const _={};function g(h,b){const o=m,u=c,s=d,r=a("layout-default-uni"),i=a("global-ku-root");return p(),f(i,null,{default:n(()=>[t(r,null,{default:n(()=>[t(s,{class:"unocss-page"},{default:n(()=>[t(s,{class:"theme-default-content content__default"},{default:n(()=>[t(o,{id:"安装unocss"},{default:n(()=>[t(o,{href:"unocss.html#安装unocss",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 安装unocss ")]),_:1}),t(o,{id:"使用"},{default:n(()=>[t(o,{href:"unocss.html#使用",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 使用 ")]),_:1}),t(u,{code:`# 使用Vue3/Vite版

npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

# 安装unocss
pnpm add -D unocss unocss-preset-weapp`,language:"bash",title:"安装"}),t(s,null,{default:n(()=>[t(s,null,{default:n(()=>[e("unocss 0.59.* 之后版本 vite.config.ts")]),_:1})]),_:1}),t(s,{class:"custom-block warning"},{default:n(()=>[t(o,null,{default:n(()=>[e("Error [ERR_REQUIRE_ESM]: require() of ES Module, "),t(o,{href:"https://github.com/dcloudio/uni-app/issues/4815",target:"_blank"},{default:n(()=>[e("https://github.com/dcloudio/uni-app/issues/4815")]),_:1}),e(),t(o,{href:"https://github.com/unocss/unocss/issues/3776",target:"_blank"},{default:n(()=>[e("https://github.com/unocss/unocss/issues/3776")]),_:1})]),_:1})]),_:1}),t(u,{code:`import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),

      // https://github.com/unocss/unocss
      UnoCss(),
    ],
  }
})`,language:"ts",title:"vite.config.ts (unocss 0.59.* 之后版本)"}),t(s,null,{default:n(()=>[t(s,null,{default:n(()=>[e("unocss 0.59.* 之前版本 vite.config.ts")]),_:1})]),_:1}),t(u,{code:`import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})`,language:"ts",title:"vite.config.ts (unocss 0.59.* 之前版本)"}),t(s,null,{default:n(()=>[t(s,null,{default:n(()=>[e("unocss.config.ts")]),_:1})]),_:1}),t(s,{class:"custom-block tip"},{default:n(()=>[t(o,{class:"custom-block-title"},{default:n(()=>[e("提示")]),_:1}),t(o,null,{default:n(()=>[e("添加unocss.config.ts文件，搭配 "),t(o,{href:"https://marketplace.visualstudio.com/items?itemName=antfu.unocss",target:"_blank"},{default:n(()=>[e("unocss vscode 插件")]),_:1}),e("，智能提示")]),_:1})]),_:1}),t(u,{code:`import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ]
}`,language:"ts",title:"unocss.config.ts"}),t(s,null,{default:n(()=>[t(s,null,{default:n(()=>[e("main.ts")]),_:1})]),_:1}),t(u,{code:"import 'uno.css'",language:"ts",title:"main.ts"})]),_:1})]),_:1})]),_:1})]),_:1})}const C=l(_,[["render",g],["__scopeId","data-v-abc2c28e"]]);export{C as default};
