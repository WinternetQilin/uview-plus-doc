import{d as r,a as p,w as t,b as s,f as _,g as e,i as f,u as n,j as m,k as a,h as g,s as b}from"./index-CRHsRVm2.js";import{_ as o}from"./CodeBlock.BlRjy5Lx.js";const v=`<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar-mini
            @leftClick="leftClick"
            :autoBack="true"
            homeUrl="/pages/index/index"
        ></up-navbar-mini>
	</view>
</template>

<script setup lang="ts">
// 定义方法
const leftClick = () => {  
    console.log('leftClick');
};  
<\/script>`,h=`// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom", // 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]`,x=`<template>
	<view>
        <up-navbar-mini
            :safeAreaInsetTop="false"
        >
            <template #left>
                <up-icon
                    name="arrow-left"
                    size="19"
                ></up-icon>
            </template>
        </up-navbar-mini>
	</view>
</template>

<script setup lang="ts">
<\/script>`,k=`<template>
	<view>
		<up-navbar-mini fixed :bgColor="'bgColor'"></up-navbar-mini>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 创建响应式数据  
const bgColor = ref('#001f3f');  
<\/script>`,y=r({__name:"navbarMini",setup(w){return(C,j)=>{const l=m,i=f,u=g,c=s("layout-default-uni"),d=s("global-ku-root");return _(),p(d,null,{default:t(()=>[e(c,null,{default:t(()=>[e(i,{class:"navbar-mini-page"},{default:t(()=>[e(i,{class:"theme-default-content content__default"},{default:t(()=>[e(l,{id:"navbarmini-迷你导航栏"},{default:t(()=>[a("NavbarMini 迷你导航栏")]),_:1}),e(l,null,{default:t(()=>[a("此组件一般用于在全屏页面中，典型的比如微信小程序左上角。")]),_:1}),e(i,{class:"demo-model"},{default:t(()=>[e(i,{class:"model-content"},{default:t(()=>[n("iframe",{id:"demo-modal",scrolling:"auto",frameborder:"0",src:"https://ijry.github.io/uview-plus/text/#/pages/componentsD/navbarMini/navbarMini",class:"iframe"})]),_:1}),e(l,{target:"_blank",href:"https://ijry.github.io/uview-plus/text/#",class:"open-link"},{default:t(()=>[a(" 打开 ")]),_:1})]),_:1}),e(i,{class:"custom-block tip"},{default:t(()=>[e(l,{class:"custom-block-title"},{default:t(()=>[a("提示")]),_:1}),e(l,null,{default:t(()=>[a(' 右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的"演示"扫码查看实际效果。 ')]),_:1})]),_:1}),e(l,{id:"平台差异说明"},{default:t(()=>[a("平台差异说明")]),_:1}),n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}}," App（vue） "),n("th",{style:{"text-align":"center"}}," App（nvue） "),n("th",{style:{"text-align":"center"}}," H5 "),n("th",{style:{"text-align":"center"}}," 小程序 ")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ ")])])]),e(l,{id:"基本使用"},{default:t(()=>[a("基本使用")]),_:1}),e(l,null,{default:t(()=>[a(" 默认情况下，该组件只有向左的箭头及返回主页的按钮，"),n("strong",null,"点击"),a("向左的箭头可以返回上一页。 ")]),_:1}),e(i,null,{default:t(()=>[e(i,null,{default:t(()=>[a("通过"),n("code",null,"fixed"),a("配置是否将导航栏固定在顶部")]),_:1})]),_:1}),e(i,{class:"custom-block tip"},{default:t(()=>[e(l,{class:"custom-block-title"},{default:t(()=>[a("说明")]),_:1}),e(i,null,{default:t(()=>[e(i,null,{default:t(()=>[a("非常适合在小程序全屏页面中，避开导航栏右侧的胶囊位置。")]),_:1})]),_:1})]),_:1}),e(o,{title:"基本使用",language:"html",code:v}),e(l,{id:"注意事项"},{default:t(()=>[a("注意事项")]),_:1}),e(l,null,{default:t(()=>[a(' 既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。 ')]),_:1}),e(o,{title:"pages.json配置",language:"javascript",code:h}),e(l,{id:"导航栏高度"},{default:t(()=>[a("导航栏高度")]),_:1}),e(l,null,{default:t(()=>[a("组件内部会自动加上状态栏的高度，并填充状态栏的占位区域。")]),_:1}),e(l,{id:"自定义导航栏内容"},{default:t(()=>[a("自定义导航栏内容")]),_:1}),e(l,null,{default:t(()=>[a("通过自定义"),n("code",null,"slot"),a("传入的内容")]),_:1}),e(o,{title:"自定义导航栏内容",language:"html",code:x}),e(l,{id:"自定义导航栏背景颜色"},{default:t(()=>[a("自定义导航栏背景颜色")]),_:1}),e(l,null,{default:t(()=>[a(" uview-plus提供了一个"),n("code",null,"bgColor"),a("参数，可以自定义导航栏的背景颜色： ")]),_:1}),e(o,{title:"自定义导航栏背景颜色",language:"html",code:k}),e(l,{id:"右侧演示页面源代码地址"},{default:t(()=>[a("右侧演示页面源代码地址")]),_:1}),e(i,{class:"custom-block tip"},{default:t(()=>[e(l,{class:"custom-block-title"},{default:t(()=>[a("点击以下链接以查看右侧演示页面的源码")]),_:1}),n("br"),e(l,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/navbarMini/navbarMini.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:t(()=>[e(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),a(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=b(y,[["__scopeId","data-v-1a6e93ce"]]);export{N as default};
