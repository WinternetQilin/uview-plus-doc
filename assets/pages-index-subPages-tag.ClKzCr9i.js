import{d,a as p,w as e,b as n,W as _,q as g,f,g as t,i as m,k as a,u as s,s as r}from"./index-CRHsRVm2.js";import{_ as h}from"./u-tag.DVVvLlP2.js";import{_ as c}from"./CodeBlock.BlRjy5Lx.js";const x=`<template>
  <up-tag text="标签" plain size="mini" type="warning"></up-tag>
</template>`,k=`<template>
  <up-tag text="标签"></up-tag>
  <up-tag text="标签" type="success"></up-tag>
  <up-tag text="标签" type="error"></up-tag>
  <up-tag text="标签" type="warning"></up-tag>
  <up-tag text="标签" type="info"></up-tag>
</template>`,y=`<template>
  <up-tag text="标签" plain shape="circle"></up-tag>
</template>`,b=`<template>
  <up-tag text="标签" plain></up-tag>
</template>`,C=`<template>
  <up-tag text="标签" plain plainFill></up-tag>
</template>`,v=`<template>
  <up-tag text="标签" plain plainFill :border="false"></up-tag>
</template>`,w=`<template>
  <up-tag text="标签" color="#303133" plain></up-tag>
</template>`,F=`<template>
  <up-tag text="标签" @click="click"></up-tag>
</template>

<script setup>
const click = () => {
  console.log('点击了标签');
}
<\/script>`,B=`<template>
  <up-tag text="标签" disabled></up-tag>
</template>`,N=d({__name:"tag",setup(V){return(z,A)=>{const l=m,o=_(g("up-tag"),h),u=n("layout-default-uni"),i=n("global-ku-root");return f(),p(i,null,{default:e(()=>[t(u,null,{default:e(()=>[t(l,{class:"tag-page"},{default:e(()=>[t(l,{class:"page-header"},{default:e(()=>[t(l,{class:"header-badge"},{default:e(()=>[a(" 基础组件 ")]),_:1}),t(l,{id:"tag-标签",class:"page-title"},{default:e(()=>[a(" Tag 标签 ")]),_:1}),t(l,{class:"page-desc"},{default:e(()=>[a(" tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景 ")]),_:1})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"平台差异说明",class:"section-title"},{default:e(()=>[a(" 平台差异说明 ")]),_:1}),t(l,{class:"table-wrapper"},{default:e(()=>[s("table",{class:"platform-table"},[s("thead",null,[s("tr",null,[s("th",null,"App（vue）"),s("th",null,"App（nvue）"),s("th",null,"H5"),s("th",null,"小程序")])]),s("tbody",null,[s("tr",null,[s("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),s("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),s("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),s("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"基本使用",class:"section-title"},{default:e(()=>[a(" 基本使用 ")]),_:1}),t(l,{class:"list-items"},{default:e(()=>[t(l,null,{default:e(()=>[a("通过"),s("code",null,"type"),a("参数设置主题类型，默认为"),s("code",null,"primary")]),_:1}),t(l,null,{default:e(()=>[a("属性"),s("code",null,"text"),a("设置标签内容")]),_:1})]),_:1}),t(c,{title:"基本使用",language:"html",code:x})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"自定义主题",class:"section-title"},{default:e(()=>[a(" 自定义主题 ")]),_:1}),t(c,{title:"自定义主题",language:"html",code:k})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"圆形标签",class:"section-title"},{default:e(()=>[a(" 圆形标签 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 类似胶囊形状 ")]),_:1}),t(c,{title:"圆形标签",language:"html",code:y})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"镂空标签",class:"section-title"},{default:e(()=>[a(" 镂空标签 ")]),_:1}),t(c,{title:"镂空标签",language:"html",code:b})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"镂空带背景色",class:"section-title"},{default:e(()=>[a(" 镂空带背景色 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 添加"),s("code",null,"plainFill"),a("属性镂空带背景色 ")]),_:1}),t(c,{title:"镂空带背景色",language:"html",code:C})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"镂空带背景色不带边框",class:"section-title"},{default:e(()=>[a(" 镂空带背景色不带边框 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 添加"),s("code",null,"plainFill"),a("属性镂空带背景色 ")]),_:1}),t(c,{title:"镂空带背景色不带边框",language:"html",code:v})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"镂空自动计算背景色",class:"section-title"},{default:e(()=>[a(" 镂空自动计算背景色 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[t(o,{text:"3.4.5",size:"mini",type:"warning"}),a(" 以上 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 添加"),s("code",null,"color"),a("属性，会自动计算对应的镂空背景色 ")]),_:1}),t(c,{title:"镂空自动计算背景色",language:"html",code:w})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"点击事件",class:"section-title"},{default:e(()=>[a(" 点击事件 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 设置"),s("code",null,"click"),a("事件，可以使用标签的点击事件 ")]),_:1}),t(c,{title:"点击事件",language:"html",code:F})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"禁用",class:"section-title"},{default:e(()=>[a(" 禁用 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 设置"),s("code",null,"disabled"),a("属性禁用标签 ")]),_:1}),t(c,{title:"禁用",language:"html",code:B})]),_:1})]),_:1})]),_:1})]),_:1})}}}),E=r(N,[["__scopeId","data-v-7c9a25ee"]]);export{E as default};
