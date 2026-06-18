import{d,a as r,w as l,b as u,f as _,g as t,i as g,u as e,j as b,k as s,h as f,s as m}from"./index-Bt5U6C3y.js";import{_ as c}from"./CodeBlock.C3t72IAG.js";const h=`<template>
	<view class="u-page">
		<up-list
			@scrolltolower="scrolltolower">
			<up-list-item>
				<up-cell title="标题文字" value="内容"></up-cell>
			</up-list-item>
		</up-list>
	</view>
</template>

<script setup lang="ts">
const scrolltolower = () => {
	console.log('滚动到底部');
}
<\/script>`,v=`<template>
	<view class="u-page">
		<up-list
			@scrolltolower="scrolltolower">
			<up-list-item>
				<up-cell title="标题文字" value="内容"></up-cell>
			</up-list-item>
		</up-list>
	</view>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		scrolltolower() {
			console.log('滚动到底部');
		}
	}
}
<\/script>`,w=d({__name:"list",setup(x){return(y,k)=>{const o=b,a=g,n=f,i=u("layout-default-uni"),p=u("global-ku-root");return _(),r(p,null,{default:l(()=>[t(i,null,{default:l(()=>[t(a,{class:"list-page"},{default:l(()=>[t(a,{class:"theme-default-content content__default"},{default:l(()=>[t(o,{id:"list-列表"},{default:l(()=>[s("List 列表")]),_:1}),t(o,null,{default:l(()=>[s(" 该组件为通用列表组件，在nvue使用list高性能组件实现，在非nvue使用普通scorll-view实现。 ")]),_:1}),t(o,{id:"平台差异说明"},{default:l(()=>[s("平台差异说明")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App（vue） "),e("th",{style:{"text-align":"center"}}," App（nvue） "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),t(o,{id:"基本使用"},{default:l(()=>[s("基本使用")]),_:1}),t(a,null,{default:l(()=>[t(a,null,{default:l(()=>[s("配合组件"),e("code",null,"up-list-item"),s("嵌套使用")]),_:1}),t(a,null,{default:l(()=>[s("参数"),e("code",null,"show-scrollbar"),s("是否出现滚动条仅在nvue中有效")]),_:1}),t(a,null,{default:l(()=>[s("事件"),e("code",null,"@scroll-to-lower"),s("滚动到底部触发事件")]),_:1})]),_:1}),t(c,{title:"基本使用 (Composition API)",language:"html",code:h}),t(c,{title:"基本使用 (Options API)",language:"html",code:v}),t(o,{id:"右侧演示页面源代码地址"},{default:l(()=>[s("右侧演示页面源代码地址")]),_:1}),t(a,{class:"custom-block tip"},{default:l(()=>[t(o,{class:"custom-block-title"},{default:l(()=>[s("点击以下链接以查看右侧演示页面的源码")]),_:1}),e("br"),t(o,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/list/list.nvue",target:"_blank",class:"github-link"},{default:l(()=>[t(n,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),s(" github ")]),_:1}),e("br"),t(o,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/list/list.nvue",target:"_blank",class:"github-link"},{default:l(()=>[t(n,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"gitee",width:"30"}),s(" gitee ")]),_:1}),e("br")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),U=m(w,[["__scopeId","data-v-edeb8171"]]);export{U as default};
