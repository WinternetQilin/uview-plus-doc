import{d as i,a as _,w as e,b as s,f,g as t,i as p,k as a,j as h,u as l,s as m}from"./index-Bt5U6C3y.js";import{_ as c}from"./CodeBlock.C3t72IAG.js";const b=`<template>
    <up-card
        title="Card 标题"
        sub-title="Card 副标题"
    >
        <view>卡片主体内容</view>
        <template #foot>
            <view>卡片底部内容</view>
        </template>
    </up-card>
</template>`,g=`<template>
    <up-card
        title="卡片标题"
        margin="20rpx 30rpx"
    >
        <view>卡片内容</view>
    </up-card>
</template>`,x=`<template>
    <up-card
        title="卡片标题"
        thumb="https://example.com/thumb.png"
        thumb-width="80"
        thumb-circle
    >
        <view>卡片内容</view>
    </up-card>
</template>`,w=`<template>
    <up-card
        title="卡片标题"
        :border="true"
        :head-border-bottom="true"
        :foot-border-top="true"
    >
        <view>卡片内容</view>
    </up-card>
</template>`,v=`<template>
    <up-card
        title="卡片标题"
        padding="30rpx 40rpx"
    >
        <view>卡片内容</view>
    </up-card>
</template>`,C=i({__name:"card",setup(k){return(B,S)=>{const u=p,d=h,n=s("up-card"),r=s("layout-default-uni"),o=s("global-ku-root");return f(),_(o,null,{default:e(()=>[t(r,null,{default:e(()=>[t(u,{class:"card-page"},{default:e(()=>[t(u,{class:"page-header"},{default:e(()=>[t(u,{class:"header-badge"},{default:e(()=>[a(" 布局组件 ")]),_:1}),t(u,{id:"card-卡片",class:"page-title"},{default:e(()=>[t(d,{href:"card.html#card-卡片",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" Card 卡片 ")]),_:1}),t(u,{class:"page-desc"},{default:e(()=>[a(" 卡片组件一般用于多个列表条目，且风格统一的场景。 ")]),_:1})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"平台差异说明",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#平台差异说明",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 平台差异说明 ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",null,"App"),l("th",null,"H5"),l("th",null,"微信小程序"),l("th",null,"支付宝小程序"),l("th",null,"百度小程序"),l("th",null,"头条小程序"),l("th",null,"QQ小程序")])]),l("tbody",null,[l("tr",null,[l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})]),l("td",null,[t(u,{class:"check-icon"},{default:e(()=>[a(" √ ")]),_:1})])])])])]),_:1})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"基本使用",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#基本使用",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 基本使用 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[a(" 组件的头部信息可以通过参数配置，其他主体和底部的信息，需要通过 "),l("code",null,"slot"),a(" 传入。 ")]),_:1}),t(u,{class:"list-items"},{default:e(()=>[t(u,null,{default:e(()=>[l("code",null,"title"),a(" 配置标题 ")]),_:1}),t(u,null,{default:e(()=>[l("code",null,"sub-title"),a(" 配置副标题 ")]),_:1})]),_:1}),t(n,{title:"Card 标题","sub-title":"Card 副标题"},{foot:e(()=>[t(u,null,{default:e(()=>[a("卡片底部内容")]),_:1})]),default:e(()=>[t(u,null,{default:e(()=>[a("卡片主体内容")]),_:1})]),_:1}),t(c,{title:"基本使用",language:"html",code:b})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"配置卡片间距",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#配置卡片间距",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 配置卡片间距 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[a(" 可以通过 "),l("code",null,"margin"),a(" 参数配置卡片与屏幕左右的边距，以及上下卡片之间的距离，如: "),l("code",null,"20rpx 30rpx"),a(" 、 "),l("code",null,"20rpx 30rpx 30rpx 20rpx"),a(" 。 ")]),_:1}),t(n,{title:"卡片标题",margin:"20rpx 30rpx"},{default:e(()=>[t(u,null,{default:e(()=>[a("卡片内容")]),_:1})]),_:1}),t(c,{title:"配置卡片间距",language:"html",code:g})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"配置卡片左上角的缩略图",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#配置卡片左上角的缩略图",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 配置卡片左上角的缩略图 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[a(" 这个缩略图是可选的，显示在卡片的左上角位置，如果配置了 "),l("code",null,"thumb"),a(" 参数(图片路径)，就会显示图片。 ")]),_:1}),t(u,{class:"list-items"},{default:e(()=>[t(u,null,{default:e(()=>[l("code",null,"thumb"),a(" 缩略图路径 ")]),_:1}),t(u,null,{default:e(()=>[l("code",null,"thumb-width"),a(" 缩略图宽度，高等于宽 ")]),_:1}),t(u,null,{default:e(()=>[l("code",null,"thumb-circle"),a(" 缩略图是否为圆形 ")]),_:1})]),_:1}),t(n,{title:"卡片标题",thumb:"https://example.com/thumb.png","thumb-width":"80","thumb-circle":""},{default:e(()=>[t(u,null,{default:e(()=>[a("卡片内容")]),_:1})]),_:1}),t(c,{title:"配置缩略图",language:"html",code:x})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"配置卡片边框",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#配置卡片边框",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 配置卡片边框 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[a(" 这里说的边框，有3个： ")]),_:1}),t(u,{class:"list-items"},{default:e(()=>[t(u,null,{default:e(()=>[l("code",null,"border"),a(" 配置是否显示整个卡片的外边框 ")]),_:1}),t(u,null,{default:e(()=>[l("code",null,"head-border-bottom"),a(" 配置是否显示卡片内部头部的下边框 ")]),_:1}),t(u,null,{default:e(()=>[l("code",null,"foot-border-top"),a(" 配置是否显示卡片内部底部的上边框 ")]),_:1})]),_:1}),t(n,{title:"卡片标题",border:!0,"head-border-bottom":!0,"foot-border-top":!0},{default:e(()=>[t(u,null,{default:e(()=>[a("卡片内容")]),_:1})]),_:1}),t(c,{title:"配置卡片边框",language:"html",code:w})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"设置内边距",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#设置内边距",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" 设置内边距 ")]),_:1}),t(u,{class:"section-desc"},{default:e(()=>[a(" 默认下，卡片内部的头部，主体，底部都有一个内边距，可以通过配置 "),l("code",null,"padding"),a(" 参数去覆盖。 ")]),_:1}),t(n,{title:"卡片标题",padding:"30rpx 40rpx"},{default:e(()=>[t(u,null,{default:e(()=>[a("卡片内容")]),_:1})]),_:1}),t(c,{title:"设置内边距",language:"html",code:v})]),_:1}),t(u,{class:"section"},{default:e(()=>[t(u,{id:"api",class:"section-title"},{default:e(()=>[t(d,{href:"card.html#api",class:"header-anchor"},{default:e(()=>[a("#")]),_:1}),a(" API ")]),_:1}),t(u,{id:"props",class:"subsection-title"},{default:e(()=>[a(" Props ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"title"),l("td",null,"卡片标题"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"subTitle"),l("td",null,"副标题"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"thumb"),l("td",null,"缩略图路径"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"thumbWidth"),l("td",null,"缩略图宽度，高等于宽"),l("td",null,"String / Number"),l("td",null,"100"),l("td",null,"-")]),l("tr",null,[l("td",null,"thumbCircle"),l("td",null,"缩略图是否为圆形"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true / false")]),l("tr",null,[l("td",null,"margin"),l("td",null,"卡片与屏幕左右的边距，以及上下卡片之间的距离"),l("td",null,"String"),l("td",null,"30rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"border"),l("td",null,"是否显示外边框"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"true / false")]),l("tr",null,[l("td",null,"borderRadius"),l("td",null,"圆角"),l("td",null,"String / Number"),l("td",null,"16"),l("td",null,"-")]),l("tr",null,[l("td",null,"headBorderBottom"),l("td",null,"是否显示头部下边框"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"true / false")]),l("tr",null,[l("td",null,"footBorderTop"),l("td",null,"是否显示底部上边框"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"true / false")]),l("tr",null,[l("td",null,"padding"),l("td",null,"卡片内部的内边距"),l("td",null,"String"),l("td",null,"24rpx 30rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"boxShadow"),l("td",null,"卡片阴影"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")])])])]),_:1}),t(u,{id:"slot",class:"subsection-title"},{default:e(()=>[a(" Slot ")]),_:1}),t(u,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"default"),l("td",null,"卡片主体内容")]),l("tr",null,[l("td",null,"foot"),l("td",null,"卡片底部内容")])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),T=m(C,[["__scopeId","data-v-68c69e81"]]);export{T as default};
