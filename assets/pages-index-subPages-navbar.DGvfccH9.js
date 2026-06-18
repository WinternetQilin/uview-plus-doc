import{d as r,a as p,w as e,b as c,D as f,L as _,q as g,f as b,g as t,i as h,k as n,j as m,u as l,s as v}from"./index-C-vHpWRU.js";import{_ as a}from"./CodeBlock.WuTHDaQt.js";const x=`<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar
            title="个人中心"
            @rightClick="rightClick"
            :autoBack="true"
        ></up-navbar>
	</view>
</template>

<script setup lang="ts">
const rightClick = () => {  
    console.log('rightClick');
};  
  
const leftClick = () => {  
    console.log('leftClick');
};  
<\/script>`,w=`// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom", // 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]`,C=`<template>
	<view>
        <up-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <template #left>
                <view class="u-nav-slot">
                    <up-icon
                        name="arrow-left"
                        size="19"
                    ></up-icon>
                    <up-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 8px"
                    ></up-line>
                    <up-text text="返回"></up-text>
                </view>
            </template>
        </up-navbar>
	</view>
</template>

<script setup lang="ts">
<\/script>

<style scoped>
.u-nav-slot {
    display: flex;
    align-items: center;
}
</style>`,k=`<template>
	<view>
		<up-navbar 
			title="title" 
			:bgColor="'bgColor'"
		></up-navbar>
	</view>
</template>

<script setup lang="ts">
<\/script>`,y=r({__name:"navbar",setup(S){return(B,I)=>{const u=h,s=m,d=f(g("up-tag"),_),i=c("layout-default-uni"),o=c("global-ku-root");return b(),p(o,null,{default:e(()=>[t(i,null,{default:e(()=>[t(u,{class:"navbar-page"},{default:e(()=>[t(u,{class:"page-header"},{default:e(()=>[t(u,{class:"header-badge"},{default:e(()=>[n(" 布局组件 ")]),_:1}),t(u,{id:"navbar-自定义导航栏",class:"page-title"},{default:e(()=>[n(" Navbar 自定义导航栏 ")]),_:1}),t(u,{class:"page-desc"},{default:e(()=>[n(" 此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。 ")]),_:1})]),_:1}),t(u,{class:"notice-card tip"},{default:e(()=>[t(u,{class:"notice-icon"},{default:e(()=>[n(" ! ")]),_:1}),t(u,{class:"notice-content"},{default:e(()=>[t(s,{class:"notice-title"},{default:e(()=>[n("提示")]),_:1}),t(s,null,{default:e(()=>[n('右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的"演示"扫码查看实际效果。')]),_:1})]),_:1})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"平台差异说明",class:"section-title"},{default:e(()=>[n(" 平台差异说明 ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",null,"App（vue）"),l("th",null,"App（nvue）"),l("th",null,"H5"),l("th",null,"小程序")])]),l("tbody",null,[l("tr",null,[l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[n(" ✓ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[n(" ✓ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[n(" ✓ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[n(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"基本使用",class:"section-title"},{default:e(()=>[n(" 基本使用 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(" 默认情况下，该组件只有向左的箭头，"),l("strong",null,"点击"),n("可以返回上一页，如果您想将自定义导航栏用在tabbar(不存在要返回的逻辑)页面，这样会隐藏左边的返回图标区域。 ")]),_:1}),t(u,{class:"list-items"},{default:e(()=>[t(u,null,{default:e(()=>[n('如果想在返回箭头的右边自定义类似"返回"字样，可以将'),l("code",null,"left-text"),n('设置为"返回"')]),_:1}),t(u,null,{default:e(()=>[n("通过"),l("code",null,"title"),n("参数传入需要显示的标题，通过"),l("code",null,"title-width"),n("设置标题区域的宽度，文字超出会通过省略号隐藏")]),_:1}),t(u,null,{default:e(()=>[n("通过"),l("code",null,"fixed"),n("配置是否将导航栏固定在顶部")]),_:1})]),_:1}),t(u,{class:"notice-card tip"},{default:e(()=>[t(u,{class:"notice-icon"},{default:e(()=>[n(" ! ")]),_:1}),t(u,{class:"notice-content"},{default:e(()=>[t(s,{class:"notice-title"},{default:e(()=>[n("说明")]),_:1}),t(u,null,{default:e(()=>[n("在小程序中，导航栏会自动适配导航栏右侧的胶囊位置，避开该区域")]),_:1}),t(u,null,{default:e(()=>[n("组件底部默认有一条下边框，如您不需要，可以设置"),l("code",null,"border"),n("为"),l("code",null,"false"),n("即可")]),_:1})]),_:1})]),_:1}),t(a,{title:"基本使用",language:"html",code:x})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"注意事项",class:"section-title"},{default:e(()=>[n(" 注意事项 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(' 既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。 ')]),_:1}),t(a,{title:"pages.json配置",language:"javascript",code:w})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"导航栏高度",class:"section-title"},{default:e(()=>[n(" 导航栏高度 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(" 可以通过"),l("code",null,"height"),n("(单位"),l("strong",null,"px"),n("，默认44，和uni-app统导航栏高度一致)配置导航栏的高度，此高度为导航栏内容的高度，不含状态栏的高度，组件内部会自动加上状态栏的高度，并填充状态栏的占位区域。 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(" 注意上方说的uni-app方的高度，这里指的是H5，和APP。至于各家小程序，由于受导航栏右侧胶囊的影响，目前组件内部给安卓设定的导航栏高度为"),l("code",null,"48px"),n("，iOS设定的导航栏高度为"),l("code",null,"44"),n("，这是结合了大量的实践的出来的结果，具备完好的兼容性。 ")]),_:1})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"自定义导航栏内容",class:"section-title"},{default:e(()=>[n(" 自定义导航栏内容 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(" 通过自定义"),l("code",null,"slot"),n("传入的内容 ")]),_:1}),t(a,{title:"自定义导航栏内容",language:"html",code:C})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"自定义导航栏背景颜色",class:"section-title"},{default:e(()=>[n(" 自定义导航栏背景颜色 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[n(" uview-plus提供了一个"),l("code",null,"bgColor"),n("参数，可以自定义导航栏的背景颜色： ")]),_:1}),t(a,{title:"自定义导航栏背景颜色",language:"html",code:k})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"api",class:"section-title"},{default:e(()=>[n(" API ")]),_:1}),t(u,{id:"props",class:"subsection-title"},{default:e(()=>[n(" Props ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"safeAreaInsetTop"),l("td",null,"是否开启顶部安全区适配"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")]),l("tr",null,[l("td",null,"placeholder"),l("td",null,"固定在顶部时，是否生成一个等高元素，以防止塌陷"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"fixed"),l("td",null,"导航栏是否固定在顶部"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")]),l("tr",null,[l("td",null,"border"),l("td",null,"导航栏底部是否显示下边框"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"leftIcon"),l("td",null,"左边返回图标的名称，只能为uview-plus自带的图标"),l("td",null,"String"),l("td",null,"arrow-left"),l("td",null,"-")]),l("tr",null,[l("td",null,"leftText"),l("td",null,"左边的提示文字"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"rightText"),l("td",null,"右边的提示文字"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"rightIcon"),l("td",null,"右边返回图标的名称，只能为uview-plus自带的图标"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"title"),l("td",null,"导航栏标题，如设置为空字符，将会隐藏标题占位区域"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"bgColor"),l("td",null,"导航栏背景设置"),l("td",null,"String"),l("td",null,"#ffffff"),l("td",null,"-")]),l("tr",null,[l("td",null,"titleWidth"),l("td",null,"导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx"),l("td",null,"String | Number"),l("td",null,"400rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"height"),l("td",null,"导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px"),l("td",null,"String | Number"),l("td",null,"44px"),l("td",null,"-")]),l("tr",null,[l("td",null,"leftIconSize"),l("td",null,"左侧返回图标的大小"),l("td",null,"String | Number"),l("td",null,"20px"),l("td",null,"-")]),l("tr",null,[l("td",null,"leftIconColor"),l("td",null,"左侧返回图标的颜色"),l("td",null,"String"),l("td",null,"#303133"),l("td",null,"-")]),l("tr",null,[l("td",null,[n("autoBack "),t(d,{text:"2.0.19",size:"mini",type:"warning"})]),l("td",null,"点击左侧区域(返回图标)，是否自动返回上一页"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,[n("titleStyle "),t(d,{text:"2.0.23",size:"mini",type:"warning"})]),l("td",null,"标题的样式，对象或字符串形式"),l("td",null,"String | Object"),l("td",null,"-"),l("td",null,"-")])])])]),_:1}),t(u,{id:"event",class:"subsection-title"},{default:e(()=>[n(" Event ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明"),l("th",null,"类型")])]),l("tbody",null,[l("tr",null,[l("td",null,"leftClick"),l("td",null,"点击左侧区域"),l("td",null,"Handler")]),l("tr",null,[l("td",null,"rightClick"),l("td",null,"点击右侧区域"),l("td",null,"Handler")])])])]),_:1}),t(u,{id:"slot",class:"subsection-title"},{default:e(()=>[n(" Slot ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"left"),l("td",null,"自定义左侧部分内容")]),l("tr",null,[l("td",null,"right"),l("td",null,"自定义右侧部分内容")]),l("tr",null,[l("td",null,[n("center "),t(d,{text:"2.0.17",size:"mini",type:"warning"})]),l("td",null,"自定义中部内容")])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=v(y,[["__scopeId","data-v-dabd3b52"]]);export{j as default};
