import{s as d,a as i,w as e,b as a,f as p,g as l,i as r,u as t,j as f,k as s}from"./index-Bt5U6C3y.js";const _={};function m(h,v){const n=f,u=r,o=a("layout-default-uni"),c=a("global-ku-root");return p(),i(c,null,{default:e(()=>[l(o,null,{default:e(()=>[l(u,{class:"downloadSetting-page"},{default:e(()=>[l(u,{class:"theme-default-content content__default"},{default:e(()=>[l(n,{id:"下载安装方式配置"},{default:e(()=>[l(n,{href:"downloadSetting.html#下载安装方式配置",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 下载安装方式配置 ")]),_:1}),l(n,{id:"关于scss"},{default:e(()=>[l(n,{href:"downloadSetting.html#关于scss",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 关于SCSS ")]),_:1}),l(n,null,{default:e(()=>[s("uview-plus依赖SCSS，您必须要安装此插件，否则无法正常运行。")]),_:1}),l(u,null,{default:e(()=>[l(u,null,{default:e(()=>[s("如果您的项目是由"),t("code",null,"HBuilder X"),s('创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具->插件安装中找到"scss/sass编译"插件进行安装，如不生效，重启HX即可')]),_:1}),l(u,null,{default:e(()=>[s("如果您的项目是由"),t("code",null,"vue-cli"),s("创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。")]),_:1})]),_:1}),t("pre",null,[t("code",null,`// 安装sass
npm i sass@1.63.2 -D

// 安装sass-loader
npm i sass-loader@10.4.1 -D`)]),l(n,{id:"准备工作"},{default:e(()=>[l(n,{href:"downloadSetting.html#准备工作",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 准备工作 ")]),_:1}),l(n,null,{default:e(()=>[s("在进行配置之前，请确保您已经根据"),l(n,{href:"install.html"},{default:e(()=>[s("安装")]),_:1}),s("中的步骤对uview-plus进行了下载安装，如果没有，请先下载安装。")]),_:1}),l(n,{id:"配置步骤"},{default:e(()=>[l(n,{href:"downloadSetting.html#配置步骤",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 配置步骤 ")]),_:1}),l(n,{id:"引入uview-plus主js库"},{default:e(()=>[l(n,{href:"downloadSetting.html#引入uview-plus主js库",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 引入uview-plus主JS库 ")]),_:1}),l(n,null,{default:e(()=>[s("在项目根目录中的"),t("code",null,"main.js"),s("中，引入并使用uview-plus的JS库，注意这两行要放在"),t("code",null,"const app = createSSRApp(App)"),s("之后。")]),_:1}),t("pre",null,[t("code",null,`// main.js
import uviewPlus from '@/uni_modules/uview-plus'


import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
`)]),l(n,{id:"在引入uview-plus的全局scss主题文件"},{default:e(()=>[l(n,{href:"downloadSetting.html#在引入uview-plus的全局scss主题文件",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 在引入uview-plus的全局SCSS主题文件 ")]),_:1}),l(n,null,{default:e(()=>[s("在项目根目录的"),t("code",null,"/uni.scss"),s("中引入此文件, 如果不存在uni.scss自己创建一个空白文件。")]),_:1}),l(u,{class:"custom-block danger"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("注意！")]),_:1}),l(n,null,{default:e(()=>[s("请注意uni-app官方规范中uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，否则会造成打包后包超大。")]),_:1})]),_:1}),t("pre",null,[t("code",null,`/* uni.scss */
@import '@/uni_modules/uview-plus/theme.scss';`)]),l(n,{id:"引入uview-plus基础样式"},{default:e(()=>[l(n,{href:"downloadSetting.html#引入uview-plus基础样式",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 引入uview-plus基础样式 ")]),_:1}),l(u,{class:"custom-block danger"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("注意！")]),_:1}),l(n,null,{default:e(()=>[s("在"),t("code",null,"App.vue"),s("中"),t("strong",null,"首行"),s('的位置引入，注意给style标签加入lang="scss"属性。')]),_:1})]),_:1}),l(u,{class:"custom-block danger"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("注意！")]),_:1}),l(n,null,{default:e(()=>[s("请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。")]),_:1})]),_:1}),l(u,{class:"custom-block danger"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("注意！")]),_:1}),l(n,null,{default:e(()=>[s("请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。")]),_:1})]),_:1}),l(u,{class:"custom-block danger"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("注意！")]),_:1}),l(n,null,{default:e(()=>[s("请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。")]),_:1})]),_:1}),t("pre",null,[t("code",null,`<style lang="scss">
	/* 注意要写在第一行，注意不能引入至uni.scss，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
</style>`)]),l(n,{id:"配置manifest"},{default:e(()=>[l(n,{href:"downloadSetting.html#配置manifest",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 配置manifest ")]),_:1}),l(n,null,{default:e(()=>[s("在项目的manifest.json中增加mergeVirtualHostAttributes配置")]),_:1}),t("pre",null,[t("code",null,`"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}`)]),l(n,{id:"安装依赖库"},{default:e(()=>[l(n,{href:"downloadSetting.html#安装依赖库",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 安装依赖库 ")]),_:1}),t("pre",null,[t("code",null,`npm i dayjs
npm i clipboard`)]),l(n,{id:"配置取消saas报警"},{default:e(()=>[l(n,{href:"downloadSetting.html#配置取消saas报警",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 配置取消Saas报警 ")]),_:1}),l(n,null,{default:e(()=>[s(' 取消"The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0."类似的报警。 在根目录vite.config.js（没有则新建）中增加如下代码中的silenceDeprecations字段: ')]),_:1}),t("pre",null,[t("code",null,`import { defineConfig } from "vite";
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
})`)]),l(n,{id:"配置easycom组件模式"},{default:e(()=>[l(n,{href:"downloadSetting.html#配置easycom组件模式",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" 配置easycom组件模式 ")]),_:1}),l(n,null,{default:e(()=>[s("此配置需要在项目根目录的"),t("code",null,"pages.json"),s("中进行。")]),_:1}),l(u,{class:"custom-block tip"},{default:e(()=>[l(n,{class:"custom-block-title"},{default:e(()=>[s("温馨提示")]),_:1}),l(u,null,{default:e(()=>[l(u,null,{default:e(()=>[s("uni-app为了调试性能的原因，修改"),t("code",null,"easycom"),s("规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。")]),_:1}),l(u,null,{default:e(()=>[s("请确保您的"),t("code",null,"pages.json"),s("中只有一个"),t("code",null,"easycom"),s("字段，否则请自行合并多个引入规则。")]),_:1})]),_:1})]),_:1}),l(n,null,{default:e(()=>[s("uview-plus3.x配置")]),_:1}),t("pre",null,[t("code",null,`// pages.json
{
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^u--(.*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue",
			"^up-(.*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue",
	    "^u-([^-].*)": "@/uni_modules/uview-plus/components/u-$1/u-$1.vue"
		}
	},

	// 此为本身已有的内容
	"pages": [
		// ......
	]
}`)]),l(n,null,{default:e(()=>[s("uview-plus4.x配置（尚未发布）")]),_:1}),t("pre",null,[t("code",null,`// pages.json
{
	"easycom": {
		"autoscan": true,
		// 注意一定要放在custom里，否则无效，https://ask.dcloud.net.cn/question/131175
		"custom": {
			"^up-(.*)": "@/uni_modules/uview-plus/components/up-$1/up-$1.vue",
	    "^u-().*)": "@/uni_modules/uview-plus/components/up-$1/up-$1.vue"
		}
	},

	// 此为本身已有的内容
	"pages": [
		// ......
	]
}`)]),l(n,{id:"typescript支持"},{default:e(()=>[l(n,{href:"downloadSetting.html#typescript支持",class:"header-anchor"},{default:e(()=>[s("#")]),_:1}),s(" typescript支持 ")]),_:1}),l(n,null,{default:e(()=>[s('在tsconfig.json中参考如下配置增加"uni_modules/uview-plus/types"')]),_:1}),t("pre",null,[t("code",null,`{
	"compilerOptions": {
    "sourceMap": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "lib": ["esnext", "dom"],
    "types": [
        "@dcloudio/types",
        "uni_modules/uview-plus/types"
    ]
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"]
}`)])]),_:1})]),_:1})]),_:1})]),_:1})}const g=d(_,[["render",m],["__scopeId","data-v-8f15c801"]]);export{g as default};
