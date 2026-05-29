<template>
  <view class="downloadSetting-page">
    <view class="theme-default-content content__default">
      <text id="下载安装方式配置">
        <text href="downloadSetting.html#下载安装方式配置" class="header-anchor">#</text>
        下载安装方式配置
      </text>
      <text id="关于scss">
        <text href="downloadSetting.html#关于scss" class="header-anchor">#</text>
        关于SCSS
      </text>
      <text>uview-plus依赖SCSS，您必须要安装此插件，否则无法正常运行。</text>
      <view>
        <view>如果您的项目是由<code>HBuilder X</code>创建的，相信已经安装scss插件，如果没有，请在HX菜单的 工具-&gt;插件安装中找到"scss/sass编译"插件进行安装，如不生效，重启HX即可</view>
        <view>如果您的项目是由<code>vue-cli</code>创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。</view>
      </view>
      <pre><code>// 安装sass
npm i sass@1.63.2 -D

// 安装sass-loader
npm i sass-loader@10.4.1 -D</code></pre>
      <text id="准备工作">
        <text href="downloadSetting.html#准备工作" class="header-anchor">#</text>
        准备工作
      </text>
      <text>在进行配置之前，请确保您已经根据<text href="install.html">安装</text>中的步骤对uview-plus进行了下载安装，如果没有，请先下载安装。</text>
      <text id="配置步骤">
        <text href="downloadSetting.html#配置步骤" class="header-anchor">#</text>
        配置步骤
      </text>
      <text id="引入uview-plus主js库">
        <text href="downloadSetting.html#引入uview-plus主js库" class="header-anchor">#</text>
        引入uview-plus主JS库
      </text>
      <text>在项目根目录中的<code>main.js</code>中，引入并使用uview-plus的JS库，注意这两行要放在<code>const app = createSSRApp(App)</code>之后。</text>
      <pre><code>// main.js
import uviewPlus from '@/uni_modules/uview-plus'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif</code></pre>
      <text id="在引入uview-plus的全局scss主题文件">
        <text href="downloadSetting.html#在引入uview-plus的全局scss主题文件" class="header-anchor">#</text>
        在引入uview-plus的全局SCSS主题文件
      </text>
      <text>在项目根目录的<code>/uni.scss</code>中引入此文件, 如果不存在uni.scss自己创建一个空白文件。</text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>请注意uni-app官方规范中uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，否则会造成打包后包超大。</text>
      </view>
      <pre><code>/* uni.scss */
@import '@/uni_modules/uview-plus/theme.scss';</code></pre>
      <text id="引入uview-plus基础样式">
        <text href="downloadSetting.html#引入uview-plus基础样式" class="header-anchor">#</text>
        引入uview-plus基础样式
      </text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>在<code>App.vue</code>中<strong>首行</strong>的位置引入，注意给style标签加入lang="scss"属性。</text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。</text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。</text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。</text>
      </view>
      <pre><code>&lt;style lang="scss"&gt;
	/* 注意要写在第一行，注意不能引入至uni.scss，同时给style标签加入lang="scss"属性 */
	@import "@/uni_modules/uview-plus/index.scss";
&lt;/style&gt;</code></pre>
      <text id="配置manifest">
        <text href="downloadSetting.html#配置manifest" class="header-anchor">#</text>
        配置manifest
      </text>
      <text>在项目的manifest.json中增加mergeVirtualHostAttributes配置</text>
      <pre><code>"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}</code></pre>
      <text id="安装依赖库">
        <text href="downloadSetting.html#安装依赖库" class="header-anchor">#</text>
        安装依赖库
      </text>
      <pre><code>npm i dayjs
npm i clipboard</code></pre>
      <text id="配置取消saas报警">
        <text href="downloadSetting.html#配置取消saas报警" class="header-anchor">#</text>
        配置取消Saas报警
      </text>
      <text>
        取消"The legacy JS API is deprecated and will be removed in Dart Sass 2.0.0."类似的报警。
        在根目录vite.config.js（没有则新建）中增加如下代码中的silenceDeprecations字段:
      </text>
      <pre><code>import { defineConfig } from "vite";
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
})</code></pre>
      <text id="配置easycom组件模式">
        <text href="downloadSetting.html#配置easycom组件模式" class="header-anchor">#</text>
        配置easycom组件模式
      </text>
      <text>此配置需要在项目根目录的<code>pages.json</code>中进行。</text>
      <view class="custom-block tip">
        <text class="custom-block-title">温馨提示</text>
        <view>
          <view>uni-app为了调试性能的原因，修改<code>easycom</code>规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。</view>
          <view>请确保您的<code>pages.json</code>中只有一个<code>easycom</code>字段，否则请自行合并多个引入规则。</view>
        </view>
      </view>
      <text>uview-plus3.x配置</text>
      <pre><code>// pages.json
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
}</code></pre>
      <text>uview-plus4.x配置（尚未发布）</text>
      <pre><code>// pages.json
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
}</code></pre>
      <text id="typescript支持">
        <text href="downloadSetting.html#typescript支持" class="header-anchor">#</text>
        typescript支持
      </text>
      <text>在tsconfig.json中参考如下配置增加"uni_modules/uview-plus/types"</text>
      <pre><code>{
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
}</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.downloadSetting-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text,
text {
  margin: 20px 0 10px;
}
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  font-size: 16px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
table th,
table td {
  border: 1px solid #eee;
  padding: 8px;
}
view,
view {
  padding-left: 20px;
  margin: 10px 0;
}
view {
  margin: 5px 0;
}
pre {
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.danger {
  border-left-color: #f56c6c;
  background: #fef0f0;
}
.custom-block.tip {
  border-left-color: #67c23a;
  background: #f0f9ff;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
</style>
