import{d as p,a as i,w as n,b as s,f as c,g as t,i as h,u as l,j as g,k as u,s as f}from"./index-C-vHpWRU.js";import{_ as o}from"./CodeBlock.WuTHDaQt.js";const _=`<template>
    <up-poster :json="posterJson" @export="exportSuccess"></up-poster>
</template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: '#ffffff'
    },
    views: [
        {
            type: 'text',
            text: '标题文本',
            css: {
                position: 'absolute',
                top: '100rpx',
                left: '50rpx',
                color: '#333333',
                fontSize: '40rpx',
                fontWeight: 'bold'
            }
        },
        {
            type: 'image',
            src: 'https://example.com/image.jpg',
            css: {
                position: 'absolute',
                top: '200rpx',
                left: '50rpx',
                width: '650rpx',
                height: '400rpx'
            }
        }
    ]
};

function exportSuccess(result: any) {
    console.log('海报导出成功', result);
}
<\/script>`,x=`<template>
    <up-poster :json="posterJson"></up-poster>
</template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: 'https://example.com/bg.jpg'
    },
    views: [
        {
            type: 'text',
            text: '自定义背景海报',
            css: {
                position: 'absolute',
                top: '50rpx',
                left: '50rpx',
                color: '#ffffff',
                fontSize: '36rpx'
            }
        }
    ]
};
<\/script>`,b=`<template>
    <up-poster :json="posterJson"></up-poster>
</template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
    },
    views: [
        {
            type: 'text',
            text: '渐变背景海报',
            css: {
                position: 'absolute',
                top: '50rpx',
                left: '50rpx',
                color: '#ffffff',
                fontSize: '36rpx'
            }
        }
    ]
};
<\/script>`,m=p({__name:"poster",setup(y){return(S,w)=>{const e=g,d=h,r=s("layout-default-uni"),a=s("global-ku-root");return c(),i(a,null,{default:n(()=>[t(r,null,{default:n(()=>[t(d,{class:"poster-page"},{default:n(()=>[t(d,{class:"theme-default-content content__default"},{default:n(()=>[t(e,{id:"poster-海报生成"},{default:n(()=>[u(" Poster 海报生成 "),t(e,{class:"badge tip"},{default:n(()=>[u("3.5.10")]),_:1})]),_:1}),t(d,{class:"demo-placeholder"},{default:n(()=>[t(e,null,{default:n(()=>[u("此处应展示 Poster 海报生成 组件的交互式演示")]),_:1}),t(e,{class:"placeholder-tip"},{default:n(()=>[u(" 演示地址："),t(e,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsD/poster/poster",target:"_blank"},{default:n(()=>[u(" https://ijry.github.io/uview-plus/text/#/pages/componentsD/poster/poster ")]),_:1})]),_:1})]),_:1}),t(e,null,{default:n(()=>[u(" 该组件用于生成海报图片，支持自定义背景、文本、图片、二维码等元素。（部分兼容l-painter组件）。 ")]),_:1}),t(e,{id:"平台差异说明"},{default:n(()=>[u("平台差异说明")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(e,{id:"基础用法"},{default:n(()=>[u("基础用法")]),_:1}),t(e,null,{default:n(()=>[u("通过配置 "),l("code",null,"json"),u(" 属性来定义海报内容和样式。")]),_:1}),t(o,{title:"基础用法",language:"html",code:_}),t(e,{id:"自定义背景图海报"},{default:n(()=>[u("自定义背景图海报")]),_:1}),t(e,null,{default:n(()=>[u("通过设置 "),l("code",null,"background"),u(" 为图片链接，可以创建自定义背景图的海报。")]),_:1}),t(o,{title:"自定义背景图海报",language:"html",code:x}),t(e,{id:"渐变背景海报"},{default:n(()=>[u("渐变背景海报")]),_:1}),t(e,null,{default:n(()=>[u("支持线性渐变和径向渐变背景。")]),_:1}),t(o,{title:"渐变背景海报",language:"html",code:b}),t(e,{id:"api"},{default:n(()=>[u("API")]),_:1}),t(e,{id:"props"},{default:n(()=>[u("Props")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数名"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"json"),l("td",null,"海报配置JSON数据"),l("td",null,"Object"),l("td",null,"-"),l("td",null,"-")])])]),t(e,{id:"json-配置项"},{default:n(()=>[u("json 配置项")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数名"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,"css"),l("td",null,"海报容器样式"),l("td",null,"Object"),l("td",null,"-")]),l("tr",null,[l("td",null,"views"),l("td",null,"海报元素列表"),l("td",null,"Array"),l("td",null,"-")])])]),t(e,{id:"json-css-容器样式"},{default:n(()=>[u("json.css 容器样式")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数名"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,"width"),l("td",null,"海报宽度"),l("td",null,"String"),l("td",null,"750rpx")]),l("tr",null,[l("td",null,"height"),l("td",null,"海报高度"),l("td",null,"String"),l("td",null,"1114rpx")]),l("tr",null,[l("td",null,"background"),l("td",null,"背景颜色或图片链接"),l("td",null,"String"),l("td",null,"-")])])]),t(e,{id:"json-views-元素配置"},{default:n(()=>[u("json.views 元素配置")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数名"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,"type"),l("td",null,"元素类型"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"text"),l("td",null,"文本内容(仅text类型)"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"src"),l("td",null,"图片地址(仅image/qrcode类型)"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"css"),l("td",null,"元素样式"),l("td",null,"Object"),l("td",null,"-")])])]),t(e,{id:"views元素类型"},{default:n(()=>[u("views元素类型")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"类型"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"text"),l("td",null,"文本元素")]),l("tr",null,[l("td",null,"image"),l("td",null,"图片元素")]),l("tr",null,[l("td",null,"qrcode"),l("td",null,"二维码元素")]),l("tr",null,[l("td",null,"view"),l("td",null,"矩形容器元素")])])]),t(e,{id:"css-样式属性"},{default:n(()=>[u("css 样式属性")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数名"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值")])]),l("tbody",null,[l("tr",null,[l("td",null,"position"),l("td",null,"定位方式"),l("td",null,"String"),l("td",null,"absolute")]),l("tr",null,[l("td",null,"left"),l("td",null,"距离左边距离"),l("td",null,"String"),l("td",null,"0rpx")]),l("tr",null,[l("td",null,"top"),l("td",null,"距离顶部距离"),l("td",null,"String"),l("td",null,"0rpx")]),l("tr",null,[l("td",null,"width"),l("td",null,"元素宽度"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"height"),l("td",null,"元素高度"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"color"),l("td",null,"文字颜色(仅text类型)"),l("td",null,"String"),l("td",null,"#000")]),l("tr",null,[l("td",null,"fontSize"),l("td",null,"文字大小(仅text类型)"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"fontWeight"),l("td",null,"文字粗细(仅text类型)"),l("td",null,"String"),l("td",null,"normal")]),l("tr",null,[l("td",null,"lineHeight"),l("td",null,"行高(仅text类型)"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"lineClamp"),l("td",null,"最大行数(仅text类型)"),l("td",null,"Number"),l("td",null,"-")]),l("tr",null,[l("td",null,"background"),l("td",null,"背景颜色(仅view类型)"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"radius"),l("td",null,"圆角大小"),l("td",null,"String"),l("td",null,"-")]),l("tr",null,[l("td",null,"shadow"),l("td",null,"阴影效果"),l("td",null,"String"),l("td",null,"-")])])]),t(e,{id:"event"},{default:n(()=>[u("Event")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"export"),l("td",null,"海报导出完成时触发"),l("td",null,"result")])])]),t(e,{id:"methods"},{default:n(()=>[u("Methods")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"方法名"),l("th",null,"说明"),l("th",null,"参数"),l("th",null,"返回值")])]),l("tbody",null,[l("tr",null,[l("td",null,"exportImage"),l("td",null,"导出海报图片"),l("td",null,"-"),l("td",null,"Promise")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),k=f(m,[["__scopeId","data-v-a79c969a"]]);export{k as default};
