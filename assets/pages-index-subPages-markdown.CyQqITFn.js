import{d as i,a as c,w as l,b as s,f as m,g as e,i as p,u as t,j as _,k as n,s as g}from"./index-C-vHpWRU.js";import{_ as u}from"./CodeBlock.WuTHDaQt.js";const f=`<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="basicContent"></up-markdown>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const basicContent = ref(\`
# 标题一
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`,h=`<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="codeContent" :show-line-number="true"></up-markdown>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const codeContent = ref(\`
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`,w=`<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="basicContent" theme="dark"></up-markdown>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const basicContent = ref(\`
# 标题一
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`,v=`<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="streamingContent" :show-line-number="true"></up-markdown>
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const streamingContent = ref('')
const timer = setInterval(() => {
	const content = '# 流式输出\\n这是一个模拟AI流式输出的示例'
	if (streamingContent.value.length < content.length) {
		streamingContent.value += content.charAt(streamingContent.value.length)
	} else {
		clearInterval(timer)
	}
}, 100)
<\/script>`,k=i({__name:"markdown",setup(b){return(x,C)=>{const a=_,o=p,d=s("layout-default-uni"),r=s("global-ku-root");return m(),c(r,null,{default:l(()=>[e(d,null,{default:l(()=>[e(o,{class:"markdown-page"},{default:l(()=>[e(o,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"markdown-文本解析"},{default:l(()=>[n(" Markdown 文本解析 "),e(a,{class:"badge tip"},{default:l(()=>[n("3.4.100")]),_:1})]),_:1}),e(o,{class:"demo-model"},{default:l(()=>[e(o,{class:"model-content"},{default:l(()=>[t("iframe",{id:"demo-modal",scrolling:"auto",frameborder:"0",src:"https://ijry.github.io/uview-plus/text/#/pages/componentsD/markdown/markdown",class:"iframe"})]),_:1}),e(a,{target:"_blank",href:"https://ijry.github.io/uview-plus/text/#",class:"open-link"},{default:l(()=>[n(" 打开 ")]),_:1})]),_:1}),e(a,null,{default:l(()=>[n(" 该组件基于 "),t("code",null,"marked"),n("（库大小40KB） 实现，支持将 Markdown 文本解析为富文本内容。 ")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[n("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," x "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基础用法"},{default:l(()=>[n("基础用法")]),_:1}),e(a,null,{default:l(()=>[n("通过 "),t("code",null,"content"),n(" 属性传入 Markdown 文本内容。")]),_:1}),e(u,{title:"基础用法",language:"html",code:f}),e(a,{id:"显示代码块行号"},{default:l(()=>[n("显示代码块行号")]),_:1}),e(a,null,{default:l(()=>[n("通过 "),t("code",null,"show-line-number"),n(" 属性控制是否显示代码块行号。")]),_:1}),e(u,{title:"显示代码块行号",language:"html",code:h}),e(a,{id:"深色主题"},{default:l(()=>[n("深色主题")]),_:1}),e(a,null,{default:l(()=>[n(" 通过 "),t("code",null,"theme"),n(" 属性设置主题样式，可选值为 "),t("code",null,"light"),n("（默认）和 "),t("code",null,"dark"),n("。 ")]),_:1}),e(u,{title:"深色主题",language:"html",code:w}),e(a,{id:"ai流式内容显示"},{default:l(()=>[n("AI流式内容显示")]),_:1}),e(a,null,{default:l(()=>[n("模拟AI逐步输出文字的效果。")]),_:1}),e(u,{title:"AI流式内容显示",language:"html",code:v}),e(a,{id:"props"},{default:l(()=>[n("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"可选值")])]),t("tbody",null,[t("tr",null,[t("td",null,"content"),t("td",null,"markdown内容"),t("td",null,"String"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"previewImg"),t("td",null,"是否启用图片预览"),t("td",null,"Boolean"),t("td",null,"true"),t("td",null,"true / false")]),t("tr",null,[t("td",null,"showLineNumber"),t("td",null,"是否显示代码块行号"),t("td",null,"Boolean"),t("td",null,"false"),t("td",null,"true / false")]),t("tr",null,[t("td",null,"theme"),t("td",null,"主题样式"),t("td",null,"String"),t("td",null,"light"),t("td",null,"light / dark")])])]),e(a,{id:"event"},{default:l(()=>[n("Event")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"-"),t("td",null,"-"),t("td",null,"-")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),A=g(k,[["__scopeId","data-v-0b5e4a61"]]);export{A as default};
