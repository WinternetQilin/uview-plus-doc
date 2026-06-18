import{d as r,a as _,w as a,b as s,f as m,g as t,i as p,u as l,j as f,k as e,h as g,s as b}from"./index-Bt5U6C3y.js";import{_ as n}from"./CodeBlock.C3t72IAG.js";const h=`<template>
	<view class="wrap">
		<view class="item up-border-bottom" v-for="(item, index) in list" :key="index">
			<up-cell title="列表项" :value="index + 1"></up-cell>
		</view>
		<up-loadmore :status="status" />
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const status = ref('loadmore');
const list = ref([1, 2, 3, 4]);
<\/script>`,x=`<template>
	<up-loadmore 
		:status="status" 
		:icon="false"
		:load-text="{loadmore: '上拉或点击加载更多',loading: '正在加载...',nomore: '没有更多了'}"
	></up-loadmore>
</template>`,v=`<template>
	<up-loadmore 
		:status="status" 
		:dashed="true"
		line-color="#909399"
	></up-loadmore>
</template>`,y=r({__name:"loadMore",setup(k){return(w,C)=>{const d=f,o=p,u=g,c=s("layout-default-uni"),i=s("global-ku-root");return m(),_(i,null,{default:a(()=>[t(c,null,{default:a(()=>[t(o,{class:"loadMore-page"},{default:a(()=>[t(o,{class:"theme-default-content content__default"},{default:a(()=>[t(d,{id:"loadmore-加载更多"},{default:a(()=>[e("LoadMore 加载更多")]),_:1}),t(o,{class:"demo-model"},{default:a(()=>[t(o,{class:"model-content"},{default:a(()=>[l("iframe",{id:"demo-modal",scrolling:"auto",frameborder:"0",src:"https://ijry.github.io/uview-plus/text/#/pages/componentsC/loadmore/loadmore",class:"iframe"})]),_:1}),t(d,{target:"_blank",href:"https://ijry.github.io/uview-plus/text/#",class:"open-link"},{default:a(()=>[e(" 打开 ")]),_:1})]),_:1}),t(d,null,{default:a(()=>[e("此组件一般用于标识页面底部加载数据时的状态，共有三种状态：")]),_:1}),t(o,null,{default:a(()=>[t(o,null,{default:a(()=>[e(' 加载前，显示"加载更多"，加入点击可选，是因为数据不够一页时，无法触发页面的'),l("code",null,"onReachBottom"),e("生命周期 ")]),_:1}),t(o,null,{default:a(()=>[e('加载中，显示"正在加载..."，2种动画可选')]),_:1}),t(o,null,{default:a(()=>[e(' 加载后，如果还有数据，回到"加载前"状态，否则加载结束，显示"没有更多了" ')]),_:1})]),_:1}),t(d,{id:"平台差异说明"},{default:a(()=>[e("平台差异说明")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(d,{id:"基本使用"},{default:a(()=>[e("基本使用")]),_:1}),t(o,null,{default:a(()=>[t(o,null,{default:a(()=>[e(" 通过"),l("code",null,"status"),e("设置组件的状态，加载前值为"),l("code",null,"loadmore"),e("，加载中为"),l("code",null,"loading"),e("，没有数据为"),l("code",null,"nomore")]),_:1})]),_:1}),t(d,null,{default:a(()=>[e(" 注意：以下示例仅为模拟效果，实际中请根据自己的逻辑，修改代码的实现 ")]),_:1}),t(n,{title:"基本使用",language:"html",code:h}),t(d,{id:"控制组件的提示以及动画效果"},{default:a(()=>[e("控制组件的提示以及动画效果")]),_:1}),t(o,null,{default:a(()=>[t(o,null,{default:a(()=>[e("如果不需要图标，可以设置"),l("code",null,"icon"),e("为"),l("code",null,"false")]),_:1}),t(o,null,{default:a(()=>[e(" 可以设置"),l("code",null,"is-dot"),e("为"),l("code",null,"true"),e('，在没有数据时，内容显示为一个"●"替代默认的"没有更多了" ')]),_:1}),t(o,null,{default:a(()=>[e(" 可以通过配置"),l("code",null,"loading-text"),e("配置提示的文字，该参数为一个对象值，可以修改默认的文字提示，见如下： ")]),_:1})]),_:1}),t(n,{title:"控制组件的提示以及动画效果",language:"html",code:x}),t(d,{id:"线条自定义颜色和设置为虚线"},{default:a(()=>[e(" 线条自定义颜色和设置为虚线 "),t(d,{class:"badge tip"},{default:a(()=>[e("2.0.32")]),_:1})]),_:1}),t(o,null,{default:a(()=>[t(o,null,{default:a(()=>[e("可以通过配置"),l("code",null,"dashed"),e("和"),l("code",null,"lineColor"),e("实现，见如下：")]),_:1})]),_:1}),t(n,{title:"线条自定义颜色和设置为虚线",language:"html",code:v}),t(d,{id:"手动触发加载更多"},{default:a(()=>[e("手动触发加载更多")]),_:1}),t(d,null,{default:a(()=>[e(" 有时候可能会因为网络，或者数据不满一页的原因，导致无法上拉触发"),l("code",null,"onReachBottom"),e("生命周期，这时候(需"),l("code",null,"status"),e("为"),l("code",null,"loadmore"),e("状态)，用户点击组件，就会触发"),l("code",null,"loadmore"),e("事件，可以在回调中，进行状态的控制和数据的加载，同时也可以修改"),l("code",null,"loadText"),e("的"),l("code",null,"loadmore"),e('为"上拉或点击加载更多"进行更加人性化的提示。 ')]),_:1}),t(d,{id:"右侧演示页面源代码地址"},{default:a(()=>[e("右侧演示页面源代码地址")]),_:1}),t(o,{class:"custom-block tip"},{default:a(()=>[t(d,{class:"custom-block-title"},{default:a(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),l("br"),t(d,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/loadmore/loadmore.nvue",target:"_blank",class:"github-link"},{default:a(()=>[t(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),e(" github ")]),_:1}),l("br"),t(d,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/loadmore/loadmore.nvue",target:"_blank",class:"github-link"},{default:a(()=>[t(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"gitee",width:"30"}),e(" gitee ")]),_:1}),l("br")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),U=b(y,[["__scopeId","data-v-129f504e"]]);export{U as default};
