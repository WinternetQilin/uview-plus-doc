import{d as g,a as c,w as l,b as o,f as p,g as e,i as f,u as t,j as x,k as n,h as _,s as y}from"./index-CRHsRVm2.js";import{_ as i}from"./CodeBlock.BlRjy5Lx.js";const h=`<template>
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>`,m=`<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>`,b=`<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>`,v=`<template>
	<up-line-progress :percentage="30">
		<text class="u-percentage-slot">{{30}}%</text>
	</up-line-progress>
</template>

<style lang="scss" scoped>
.u-percentage-slot {
	padding: 1px 5px;
	background-color: $u-warning;
	color: #fff;
	border-radius: 100px;
	font-size: 10px;
	margin-right: -5px;
}
</style>`,k=`<template>
	<view style="margin-top: 50px;">
		<up-line-progress :percentage="percentage" />
		<view style="display: flex; margin-top: 100px;">
			<button @click="computedWidth('minus')">减少</button>
			<button @click="computedWidth('plus')">增加</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const percentage = ref(30);

const computedWidth = (type) => {
	if (type === 'plus') {
		percentage.value += 10;
	} else {
		percentage.value -= 10;
	}
}
<\/script>`,w=g({__name:"lineProgress",setup(C){return(B,P)=>{const a=x,s=f,u=_,d=o("layout-default-uni"),r=o("global-ku-root");return p(),c(r,null,{default:l(()=>[e(d,null,{default:l(()=>[e(s,{class:"lineProgress-page"},{default:l(()=>[e(s,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"lineprogress-线形进度条"},{default:l(()=>[n("LineProgress 线形进度条")]),_:1}),e(a,null,{default:l(()=>[n(" 展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。 ")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[n("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:l(()=>[n("基本使用")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[t("code",null,"percentage"),n("设置当前的进度值，该值区间为0-100. ")]),_:1}),e(s,null,{default:l(()=>[t("code",null,"activeColor"),n("设置进度条的颜色 ")]),_:1})]),_:1}),e(i,{title:"基本使用",language:"html",code:h}),e(a,{id:"不显示百分比"},{default:l(()=>[n("不显示百分比")]),_:1}),e(a,null,{default:l(()=>[n("不显示百分比值信息")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[t("code",null,"show-text"),n("参数配置是否显示进度条内百分值")]),_:1})]),_:1}),e(i,{title:"不显示百分比",language:"html",code:m}),e(a,{id:"自定义高度"},{default:l(()=>[n("自定义高度")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[t("code",null,"height"),n("进度条高度")]),_:1})]),_:1}),e(i,{title:"自定义高度",language:"html",code:b}),e(a,{id:"自定义样式-不支持安卓环境的nvue"},{default:l(()=>[n("自定义样式(不支持安卓环境的nvue)")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("自定义的数值样式嵌套在默认插槽里")]),_:1})]),_:1}),e(i,{title:"自定义样式",language:"html",code:v}),e(a,{id:"手动加减"},{default:l(()=>[n("手动加减")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("通过控制"),t("code",null,"percentage"),n("参数数值达到增减")]),_:1})]),_:1}),e(i,{title:"手动加减",language:"typescript",code:k}),e(a,{id:"右侧演示页面源代码地址"},{default:l(()=>[n("右侧演示页面源代码地址")]),_:1}),e(s,{class:"custom-block tip"},{default:l(()=>[e(a,{class:"custom-block-title"},{default:l(()=>[n("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/progress/progress.nvue",target:"_blank",class:"github-link"},{default:l(()=>[e(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),n(" github ")]),_:1}),t("br"),e(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/progress/progress.nvue",target:"_blank",class:"github-link"},{default:l(()=>[e(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"gitee",width:"30"}),n(" gitee ")]),_:1}),t("br")]),_:1}),e(a,{id:"api"},{default:l(()=>[n("API")]),_:1}),e(a,{id:"props"},{default:l(()=>[n("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," activeColor "),t("td",{style:{"text-align":"left"}}," 进度条激活部分的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #19be6b "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," inactiveColor "),t("td",{style:{"text-align":"left"}}," 进度条的底色，默认为灰色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #ececec "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," percentage "),t("td",{style:{"text-align":"left"}}," 进度百分比，数值 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 0 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," showText "),t("td",{style:{"text-align":"left"}}," 是否在进度条内部显示百分比的值 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," height "),t("td",{style:{"text-align":"left"}}," 进度条的高度，默认单位px "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 12 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," fromRight "),t("td",{style:{"text-align":"left"}}," 是否从右往左 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")])])]),e(a,{id:"slots"},{default:l(()=>[n("Slots")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," default "),t("td",{style:{"text-align":"left"}}," 传入自定义的显示内容，将会覆盖默认显示的百分比值 ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),U=y(w,[["__scopeId","data-v-5820fd4b"]]);export{U as default};
