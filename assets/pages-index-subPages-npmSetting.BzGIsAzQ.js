import{d as p,a as d,w as t,b as o,f as r,g as s,i as f,j as m,k as e,u as a,s as _}from"./index-Bt5U6C3y.js";import{_ as n}from"./CodeBlock.C3t72IAG.js";const g=`// 安装sass
npm i sass@1.63.2 -D

// 安装sass-loader，注意需要版本10，否则可能会导致vue与sass的兼容问题而报错
npm i sass-loader@10.4.1 -D`,v=`// 如果您的项目是HX创建的，根目录又没有package.json文件的话，请先执行如下命令：
// npm init -y

// 安装
npm install uview-plus
npm install dayjs
npm install clipboard`,w=`// main.js
import uviewPlus from 'uview-plus'


import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
`,j=`/* uni.scss */
@import 'uview-plus/theme.scss';`,S=`<style lang="scss" scoped>
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
</style>`,y=`"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}`,b=`import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
	visualizer()
  ],
  css: {  
	preprocessorOptions: {  
	  scss: {  
		// 取消sass废弃API的报警
		silenceDeprecations: ['legacy-js-api', 'color-functions', 'import'],  
	  },  
	},  
  },  
  server: {
    port: 5100,
    fs: {
        // Allow serving files from one level up to the project root
        allow: ['..']
    }
  },
})`,x=`// pages.json
{
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^u--(.*)": "uview-plus/components/u-$1/u-$1.vue",
			"^up-(.*)": "uview-plus/components/u-$1/u-$1.vue",
	        "^u-([^-].*)": "uview-plus/components/u-$1/u-$1.vue"
		}
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}`,C=`// pages.json
{
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^up-(.*)": "uview-plus/components/up-$1/up-$1.vue",
		}
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}`,k=`{
	"compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "types": [
      "uview-plus/types"
    ]
  },
  "exclude": [
    "node_modules",
    "dist"
  ]
}`,A=p({__name:"npmSetting",setup(h){return($,H)=>{const l=m,u=f,i=o("layout-default-uni"),c=o("global-ku-root");return r(),d(c,null,{default:t(()=>[s(i,null,{default:t(()=>[s(u,{class:"npm-setting-page"},{default:t(()=>[s(u,{class:"theme-default-content content__default"},{default:t(()=>[s(l,{id:"npm安装方式配置"},{default:t(()=>[e("NPM安装方式配置")]),_:1}),s(l,{id:"关于scss"},{default:t(()=>[e("关于SCSS")]),_:1}),s(l,null,{default:t(()=>[e("uview-plus依赖SCSS，您必须要安装此插件，否则无法正常运行。")]),_:1}),s(u,null,{default:t(()=>[s(u,null,{default:t(()=>[e(" 如果您的项目是由"),a("code",null,"HBuilder X"),e('创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，如不生效，重启HX即可 ')]),_:1}),s(u,null,{default:t(()=>[e(" 如果您的项目是由vue-cli创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。 ")]),_:1})]),_:1}),s(n,{title:"安装sass",language:"javascript",code:g}),s(l,{id:"准备工作"},{default:t(()=>[e("准备工作")]),_:1}),s(l,null,{default:t(()=>[e(" 在进行配置之前，请确保您已经根据"),s(l,{href:"install.html"},{default:t(()=>[e("安装")]),_:1}),e("中的步骤对uview-plus进行了npm安装，如果没有，请先执行安装： ")]),_:1}),s(n,{title:"安装",language:"javascript",code:v}),s(l,{id:"配置步骤"},{default:t(()=>[e("配置步骤")]),_:1}),s(l,{id:"引入uview-plus主js库"},{default:t(()=>[e("引入uview-plus主JS库")]),_:1}),s(l,null,{default:t(()=>[e(" 在项目"),a("code",null,"src"),e("目录中的"),a("code",null,"main.js"),e("中，引入并使用uview-plus的JS库，注意这两行要放在"),a("code",null,"const app = createSSRApp(App)"),e("之后。 ")]),_:1}),s(n,{title:"main.js",language:"javascript",code:w}),s(l,{id:"在引入uview-plus的全局scss主题文件"},{default:t(()=>[e(" 在引入uview-plus的全局SCSS主题文件 ")]),_:1}),s(l,null,{default:t(()=>[e(" 在项目根目录的"),a("code",null,"/src/uni.scss"),e("中引入此文件, 如果不存在/src/uni.scss自己创建一个空白文件。 ")]),_:1}),s(u,{class:"custom-block danger"},{default:t(()=>[s(l,{class:"custom-block-title"},{default:t(()=>[e("注意！")]),_:1}),s(l,null,{default:t(()=>[e(" 请注意uni-app官方规范中uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，否则会造成打包后包超大。 ")]),_:1})]),_:1}),s(n,{title:"uni.scss",language:"scss",code:j}),s(l,{id:"引入uview-plus基础样式"},{default:t(()=>[e("引入uview-plus基础样式")]),_:1}),s(u,{class:"custom-block danger"},{default:t(()=>[s(l,{class:"custom-block-title"},{default:t(()=>[e("注意！")]),_:1}),s(l,null,{default:t(()=>[e(" 在"),a("code",null,"App.vue"),e("中"),a("strong",null,"首行"),e('的位置引入，注意给style标签加入lang="scss"属性 ')]),_:1})]),_:1}),s(u,{class:"custom-block danger"},{default:t(()=>[s(l,{class:"custom-block-title"},{default:t(()=>[e("注意！")]),_:1}),s(l,null,{default:t(()=>[e(" 请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。 ")]),_:1})]),_:1}),s(n,{title:"App.vue",language:"scss",code:S}),s(l,{id:"配置manifest"},{default:t(()=>[e("配置manifest")]),_:1}),s(l,null,{default:t(()=>[e("在项目的manifest.json中增加mergeVirtualHostAttributes配置")]),_:1}),s(n,{title:"manifest.json",language:"javascript",code:y}),s(l,{id:"配置取消saas报警"},{default:t(()=>[e("配置取消Saas报警")]),_:1}),s(l,null,{default:t(()=>[e(' 取消"The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0."类似的报警。 在根目录vite.config.js（没有则新建）中增加如下代码中的silenceDeprecations字段: ')]),_:1}),s(n,{title:"vite.config.js",language:"javascript",code:b}),s(l,{id:"配置easycom组件模式"},{default:t(()=>[e("配置easycom组件模式")]),_:1}),s(l,null,{default:t(()=>[e(" 此配置需要在项目"),a("code",null,"src"),e("目录的"),a("code",null,"pages.json"),e("中进行。 ")]),_:1}),s(u,{class:"custom-block tip"},{default:t(()=>[s(l,{class:"custom-block-title"},{default:t(()=>[e("温馨提示")]),_:1}),s(u,null,{default:t(()=>[s(u,null,{default:t(()=>[e(" uni-app为了调试性能的原因，修改"),a("code",null,"easycom"),e("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。 ")]),_:1}),s(u,null,{default:t(()=>[e(" 请确保您的"),a("code",null,"pages.json"),e("中只有一个"),a("code",null,"easycom"),e("字段，否则请自行合并多个引入规则。 ")]),_:1})]),_:1})]),_:1}),s(l,null,{default:t(()=>[e("uview-plus3.x配置")]),_:1}),s(n,{title:"pages.json (3.x)",language:"javascript",code:x}),s(l,null,{default:t(()=>[e("uview-plus4.x配置（尚未发布）")]),_:1}),s(n,{title:"pages.json (4.x)",language:"javascript",code:C}),s(l,{id:"typescript支持"},{default:t(()=>[e("typescript支持")]),_:1}),s(l,null,{default:t(()=>[e('在tsconfig.json中参考如下配置增加"uview-plus/types"')]),_:1}),s(n,{title:"tsconfig.json",language:"javascript",code:k})]),_:1})]),_:1})]),_:1})]),_:1})}}}),D=_(A,[["__scopeId","data-v-6bb6c54d"]]);export{D as default};
