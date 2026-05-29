<template>
  <view class="npm-setting-page">
    <view class="theme-default-content content__default">
      <text id="npm安装方式配置">NPM安装方式配置</text>
      <text id="关于scss">关于SCSS</text>
      <text>uview-plus依赖SCSS，您必须要安装此插件，否则无法正常运行。</text>
      <view>
        <view>
          如果您的项目是由<code>HBuilder X</code>创建的，相信已经安装scss插件，如果没有，请在HX菜单的
          工具-&gt;插件安装中找到"scss/sass编译"插件进行安装，如不生效，重启HX即可
        </view>
        <view>
          如果您的项目是由vue-cli创建的，请通过以下命令安装对sass(scss)的支持，如果已安装，请略过。
        </view>
      </view>
      <CodeBlock
        title="安装sass"
        language="javascript"
        :code="installSassCode"
      />
      <text id="准备工作">准备工作</text>
      <text>
        在进行配置之前，请确保您已经根据<text href="install.html">安装</text>中的步骤对uview-plus进行了npm安装，如果没有，请先执行安装：
      </text>
      <CodeBlock title="安装" language="javascript" :code="installCode" />
      <text id="配置步骤">配置步骤</text>
      <text id="引入uview-plus主js库">引入uview-plus主JS库</text>
      <text>
        在项目<code>src</code>目录中的<code>main.js</code>中，引入并使用uview-plus的JS库，注意这两行要放在<code>const app = createSSRApp(App)</code>之后。
      </text>
      <CodeBlock title="main.js" language="javascript" :code="mainJsCode" />
      <text id="在引入uview-plus的全局scss主题文件">
        在引入uview-plus的全局SCSS主题文件
      </text>
      <text>
        在项目根目录的<code>/src/uni.scss</code>中引入此文件,
        如果不存在/src/uni.scss自己创建一个空白文件。
      </text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>
          请注意uni-app官方规范中uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，否则会造成打包后包超大。
        </text>
      </view>
      <CodeBlock title="uni.scss" language="scss" :code="uniScssCode" />
      <text id="引入uview-plus基础样式">引入uview-plus基础样式</text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>
          在<code>App.vue</code>中<strong>首行</strong>的位置引入，注意给style标签加入lang="scss"属性
        </text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意！</text>
        <text>
          请注意uni.scss是一个特殊文件，万万不可将其它样式比如uview-plus/index.scss引入至uni.scss中，严格按照文档指示在App.vue中引入。
        </text>
      </view>
      <CodeBlock title="App.vue" language="scss" :code="appVueCode" />
      <text id="配置manifest">配置manifest</text>
      <text>在项目的manifest.json中增加mergeVirtualHostAttributes配置</text>
      <CodeBlock
        title="manifest.json"
        language="javascript"
        :code="manifestCode"
      />
      <text id="配置取消saas报警">配置取消Saas报警</text>
      <text>
        取消"The legacy JS API is deprecated and will be removed in Dart Sass
        2.0.0."类似的报警。
        在根目录vite.config.js（没有则新建）中增加如下代码中的silenceDeprecations字段:
      </text>
      <CodeBlock
        title="vite.config.js"
        language="javascript"
        :code="viteConfigCode"
      />
      <text id="配置easycom组件模式">配置easycom组件模式</text>
      <text>
        此配置需要在项目<code>src</code>目录的<code>pages.json</code>中进行。
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">温馨提示</text>
        <view>
          <view>
            uni-app为了调试性能的原因，修改<code>easycom</code>规则不会实时生效，配置完后，您需要重启HX或者重新编译项目才能正常使用uview-plus的功能。
          </view>
          <view>
            请确保您的<code>pages.json</code>中只有一个<code>easycom</code>字段，否则请自行合并多个引入规则。
          </view>
        </view>
      </view>
      <text>uview-plus3.x配置</text>
      <CodeBlock
        title="pages.json (3.x)"
        language="javascript"
        :code="pagesJson3Code"
      />
      <text>uview-plus4.x配置（尚未发布）</text>
      <CodeBlock
        title="pages.json (4.x)"
        language="javascript"
        :code="pagesJson4Code"
      />
      <text id="typescript支持">typescript支持</text>
      <text>在tsconfig.json中参考如下配置增加"uview-plus/types"</text>
      <CodeBlock
        title="tsconfig.json"
        language="javascript"
        :code="tsconfigCode"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const installSassCode = `// 安装sass
npm i sass@1.63.2 -D

// 安装sass-loader，注意需要版本10，否则可能会导致vue与sass的兼容问题而报错
npm i sass-loader@10.4.1 -D`

const installCode = `// 如果您的项目是HX创建的，根目录又没有package.json文件的话，请先执行如下命令：
// npm init -y

// 安装
npm install uview-plus
npm install dayjs
npm install clipboard`

const mainJsCode = `// main.js
import uviewPlus from 'uview-plus'

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus)
  return {
    app
  }
}
// #endif`

const uniScssCode = `/* uni.scss */
@import 'uview-plus/theme.scss';`

const appVueCode = `<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-plus/index.scss";
</style>`

const manifestCode = `"mp-weixin" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
	"appid" : "",
	...
	"mergeVirtualHostAttributes" : true
}`

const viteConfigCode = `import { defineConfig } from "vite";
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
})`

const pagesJson3Code = `// pages.json
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
}`

const pagesJson4Code = `// pages.json
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
}`

const tsconfigCode = `{
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
}`
</script>

<style lang="scss" scoped>
.npm-setting-page {
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
  background: #f6f8fa;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.danger {
  border-left: 4px solid #f56c6c;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
text {
  color: #3eaf7c;
}
</style>
