import{d as r,a as _,w as l,b as s,f,g as t,i as p,u as n,j as b,k as e,h as m,s as g}from"./index-C-vHpWRU.js";import{_ as c}from"./CodeBlock.WuTHDaQt.js";const h=`<template>
  <up-subsection :list="list" :current="0"></up-subsection>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['未付款', '待发货', '已发货', '待评价', '已完成']);
<\/script>`,x='<up-subsection :list="list" mode="subsection" :current="1"></up-subsection>',v=`<up-subsection
  :list="list"
  activeColor="#f56c6c"
  inactiveColor="#666"
></up-subsection>`,y=`<template>
  <up-subsection
    :list="list"
    :current="current"
    @change="change"
  ></up-subsection>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['未付款', '待发货', '已发货']);
const current = ref(0);

const change = (index) => {
  current.value = index;
}
<\/script>`,C=r({__name:"subsection",setup(k){return(w,N)=>{const u=b,o=p,a=m,d=s("layout-default-uni"),i=s("global-ku-root");return f(),_(i,null,{default:l(()=>[t(d,null,{default:l(()=>[t(o,{class:"subsection-page"},{default:l(()=>[t(o,{class:"theme-default-content content__default"},{default:l(()=>[t(u,{id:"subsection-分段器"},{default:l(()=>[e(" Subsection 分段器 ")]),_:1}),t(u,null,{default:l(()=>[e("该分段器一般用于用户从几个选项中选择某一个的场景")]),_:1}),t(u,{id:"平台差异说明"},{default:l(()=>[e("平台差异说明")]),_:1}),n("table",{class:"platform-table"},[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}}," App（vue） "),n("th",{style:{"text-align":"center"}}," App（nvue） "),n("th",{style:{"text-align":"center"}}," H5 "),n("th",{style:{"text-align":"center"}}," 小程序 ")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ ")])])]),t(u,{id:"基本使用"},{default:l(()=>[e("基本使用")]),_:1}),t(o,null,{default:l(()=>[t(o,null,{default:l(()=>[e("通过"),n("code",null,"list"),e("数组参数传递分段的选项，数组元素可为字符串，或者通过"),n("code",null,"keyName"),e("参数传入对象(默认为"),n("code",null,"name"),e(")")]),_:1}),t(o,null,{default:l(()=>[e("通过"),n("code",null,"current"),e("指定初始化时激活的选项")]),_:1})]),_:1}),t(c,{title:"基本使用",language:"html",code:h}),t(u,{id:"模式选择"},{default:l(()=>[e("模式选择")]),_:1}),t(u,null,{default:l(()=>[e("通过"),n("code",null,"mode"),e("设置分段器的模式")]),_:1}),t(o,null,{default:l(()=>[t(o,null,{default:l(()=>[e("值为"),n("code",null,"button"),e("时为按钮类型")]),_:1}),t(o,null,{default:l(()=>[e("值为"),n("code",null,"subsection"),e("时为分段器形式")]),_:1})]),_:1}),t(c,{title:"模式选择",language:"html",code:x}),t(u,{id:"颜色配置"},{default:l(()=>[e("颜色配置")]),_:1}),t(o,null,{default:l(()=>[t(o,null,{default:l(()=>[e("通过"),n("code",null,"activeColor"),e("配置激活选项的文字颜色")]),_:1}),t(o,null,{default:l(()=>[e("通过"),n("code",null,"inactiveColor"),e("配置未激活选项的文字颜色")]),_:1}),t(o,null,{default:l(()=>[e("通过"),n("code",null,"bgColor"),e("配置背景颜色，mode为button时有效（默认 '#eeeeef' ）")]),_:1})]),_:1}),t(c,{title:"颜色配置",language:"html",code:v}),t(u,{id:"注意事项"},{default:l(()=>[e("注意事项")]),_:1}),t(u,null,{default:l(()=>[e(" 如果想通过一个变量绑定"),n("code",null,"current"),e("值，需要在"),n("code",null,"change"),e("事件回调中修改此值，否则可能会由于"),n("code",null,"props"),e("的限制，前后两次设置"),n("code",null,"current"),e("为相同的值， 视图将不会更新。 ")]),_:1}),t(o,{class:"custom-block warning"},{default:l(()=>[t(u,{class:"custom-block-title"},{default:l(()=>[e("注意")]),_:1}),t(u,null,{default:l(()=>[e("请勿在"),n("code",null,"watch"),e("监听中修改"),n("code",null,"current"),e("值，会导致事件死循环。")]),_:1})]),_:1}),t(c,{title:"注意事项",language:"html",code:y}),t(u,{id:"右侧演示页面源代码地址"},{default:l(()=>[e("右侧演示页面源代码地址")]),_:1}),t(o,{class:"custom-block tip"},{default:l(()=>[t(u,{class:"custom-block-title"},{default:l(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),n("br"),t(u,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/subsection/subsection.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[t(a,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:l(()=>[e(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),U=g(C,[["__scopeId","data-v-42a28020"]]);export{U as default};
