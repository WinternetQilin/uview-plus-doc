import{d as p,a as g,w as n,b as d,f as s,g as t,i as _,u as l,j as m,k as e,s as r}from"./index-CRHsRVm2.js";import{_ as i}from"./CodeBlock.BlRjy5Lx.js";const f=`<template>
	<view>
		<up-loading-icon></up-loading-icon>
	</view>
</template>`,v=`<template>
	<view>
		<up-loading-icon text="加载中"></up-loading-icon>
	</view>
</template>`,x=`<template>
	<view>
		<up-loading-icon text="加载中" textSize="18"></up-loading-icon>
	</view>
</template>`,w=`<template>
	<view>
		<up-loading-icon text="花朵形"></up-loading-icon>
		<up-loading-icon mode="semicircle" text="半圆"></up-loading-icon>
		<up-loading-icon mode="circle" text="圆型"></up-loading-icon>
	</view>
</template>`,h=`<template>
	<view>
		<up-loading-icon :vertical="true"></up-loading-icon>
	</view>
</template>`,C=`<template>
	<view>
		<up-loading-icon timing-function="linear"></up-loading-icon>
	</view>
</template>`,y=`<template>
	<view>
		<up-loading-icon duration="2000"></up-loading-icon>
	</view>
</template>`,z=`<template>
	<view>
		<up-loading-icon color="red"></up-loading-icon>
	</view>
</template>`,b=`<template>
	<view>
		<up-loading-icon size="36"></up-loading-icon>
	</view>
</template>`,k=p({__name:"loadingIcon",setup(I){return(B,N)=>{const o=m,a=_,c=d("layout-default-uni"),u=d("global-ku-root");return s(),g(u,null,{default:n(()=>[t(c,null,{default:n(()=>[t(a,{class:"loadingicon-page"},{default:n(()=>[t(a,{class:"theme-default-content content__default"},{default:n(()=>[t(o,{id:"loadingicon-加载动画"},{default:n(()=>[e(" LoadingIcon 加载动画 ")]),_:1}),t(o,null,{default:n(()=>[e(" 此组件为一个小动画，目前用在uview-plus的"),t(o,{href:"/components/loadMore"},{default:n(()=>[e("loadMore加载更多")]),_:1}),e("等组件的正在加载状态场景。 ")]),_:1}),t(o,{id:"平台差异说明"},{default:n(()=>[e("平台差异说明")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(o,{id:"基本使用"},{default:n(()=>[e("基本使用")]),_:1}),t(o,null,{default:n(()=>[e(" 通过"),l("code",null,"mode"),e("设定动画的类型，"),l("code",null,"circle"),e("为圆圈的形状，"),l("code",null,"flower"),e("为经典类似花朵的形状 ")]),_:1}),t(i,{title:"基本使用",language:"html",code:f}),t(o,{id:"动画文字"},{default:n(()=>[e("动画文字")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"text"),e("可以指定文字内容")]),_:1}),t(i,{title:"动画文字",language:"html",code:v}),t(o,null,{default:n(()=>[l("code",null,"textSize"),e("可以指定文字大小")]),_:1}),t(i,{title:"文字大小",language:"html",code:x}),t(o,{id:"模式类型"},{default:n(()=>[e("模式类型")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"mode"),e("可以指定模式")]),_:1}),t(i,{title:"模式类型",language:"html",code:w}),t(o,{id:"排列类型"},{default:n(()=>[e("排列类型")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"vertical"),e("可以指定文字和图标是否垂直排列")]),_:1}),t(i,{title:"排列类型",language:"html",code:h}),t(o,{id:"动画模式"},{default:n(()=>[e("动画模式")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"timing-function"),e("可以指定"),l("code",null,"mode"),e("为"),l("code",null,"semicircle"),e("或"),l("code",null,"circle"),e("时动画里css中"),l("code",null,"animation-timing-function"),e("的属性，默认为"),l("code",null,"ease-in-out")]),_:1}),t(i,{title:"动画模式",language:"html",code:C}),t(o,{id:"动画运行时间"},{default:n(()=>[e("动画运行时间")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"duration"),e("可以指定动画的运行周期时间")]),_:1}),t(i,{title:"动画运行时间",language:"html",code:y}),t(o,{id:"图标颜色"},{default:n(()=>[e("图标颜色")]),_:1}),t(o,null,{default:n(()=>[l("code",null,"color"),e("可以指定动画活动区域的颜色, "),l("code",null,"inactive-color"),e("可以制定"),l("code",null,"mode"),e("为"),l("code",null,"circle"),e("时的暗边颜色 ")]),_:1}),t(i,{title:"图标颜色",language:"html",code:z}),t(o,{id:"图标尺寸"},{default:n(()=>[e("图标尺寸")]),_:1}),t(o,null,{default:n(()=>[e("通过"),l("code",null,"size"),e("设定尺寸，单位rpx，组件内把"),l("code",null,"size"),e("值体现为组件的宽和高")]),_:1}),t(i,{title:"图标尺寸",language:"html",code:b})]),_:1})]),_:1})]),_:1})]),_:1})}}}),A=r(k,[["__scopeId","data-v-3dd78a69"]]);export{A as default};
