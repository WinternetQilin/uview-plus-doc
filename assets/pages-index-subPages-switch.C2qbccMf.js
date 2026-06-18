import{d as r,a as p,w as c,b as d,f,g as l,i as h,u as t,j as m,k as e,h as _,s as g}from"./index-C-vHpWRU.js";import{_ as o}from"./CodeBlock.WuTHDaQt.js";const v=`<template>
  <up-switch v-model="checked"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`,w=`<template>
  <up-switch v-model="checked" loading></up-switch>
  <up-switch v-model="checked" :loading="loading"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const loading = ref(true);
<\/script>`,b=`<template>
  <up-switch v-model="checked" disabled></up-switch>
  <up-switch v-model="checked" :disabled="true"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>`,k=`<template>
  <up-switch v-model="checked" :size="30"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`,x=`<template>
  <up-switch v-model="checked" activeColor="#f56c6c"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`,C=`<template>
  <up-switch v-model="checked" activeColor="#f56c6c" inactiveColor="#eee"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`,y=`<template>
  <up-switch v-model="checked" :loading="loading" @change="change"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const loading = ref(false);

const change = async (value) => {
  loading.value = true;
  // 模拟异步请求
  await new Promise(resolve => setTimeout(resolve, 1000));
  loading.value = false;
  checked.value = value;
}
<\/script>`,B=r({__name:"switch",setup(V){return(z,N)=>{const a=m,s=h,n=_,u=d("layout-default-uni"),i=d("global-ku-root");return f(),p(i,null,{default:c(()=>[l(u,null,{default:c(()=>[l(s,{class:"switch-page"},{default:c(()=>[l(s,{class:"theme-default-content content__default"},{default:c(()=>[l(a,{id:"switch-开关选择器"},{default:c(()=>[e(" Switch 开关选择器 ")]),_:1}),l(a,null,{default:c(()=>[e("选择开关用于在打开和关闭状态之间进行切换。")]),_:1}),l(a,{id:"平台差异说明"},{default:c(()=>[e("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"基础使用"},{default:c(()=>[e("基础使用")]),_:1}),l(a,null,{default:c(()=>[e("通过"),t("code",null,"v-model"),e("绑定一个"),t("code",null,"布尔值"),e("变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为"),t("code",null,"true"),e("或者"),t("code",null,"false"),e("，也就是说，无需监听"),t("code",null,"@change"),e("事件，也能获取开关的值。")]),_:1}),l(o,{title:"基础使用",language:"html",code:v}),l(a,{id:"加载中"},{default:c(()=>[e("加载中")]),_:1}),l(a,null,{default:c(()=>[e("设置"),t("code",null,"loading"),e("属性，默认为"),t("code",null,"true"),e("，可以让"),t("code",null,"switch"),e("处于加载中的状态，这时"),t("code",null,"switch"),e("是不可操作的，您可以通过"),t("code",null,":loading='loading'"),e("以动态设置加载状态")]),_:1}),l(o,{title:"加载中",language:"html",code:w}),l(a,{id:"禁用switch"},{default:c(()=>[e("禁用switch")]),_:1}),l(a,null,{default:c(()=>[e("设置"),t("code",null,"disabled"),e("属性,默认为"),t("code",null,"true"),e("，即可禁用某个组件，让用户无法点击，禁用分为两种状态：")]),_:1}),l(s,null,{default:c(()=>[l(s,null,{default:c(()=>[e("一是关闭情况下的禁用，这时只显示一个白色的区域。")]),_:1}),l(s,null,{default:c(()=>[e("二是打开后再禁用，这时会在原有的颜色上加一个"),t("code",null,"opacity"),e("透明度，但此时依然是不可操作的。")]),_:1})]),_:1}),l(o,{title:"禁用switch",language:"html",code:b}),l(a,{id:"自定义尺寸"},{default:c(()=>[e("自定义尺寸")]),_:1}),l(a,null,{default:c(()=>[e("设置"),t("code",null,"size"),e("属性，可以让您自定义"),t("code",null,"switch"),e("的尺寸，单位为"),t("code",null,"px")]),_:1}),l(o,{title:"自定义尺寸",language:"html",code:k}),l(a,{id:"自定义颜色"},{default:c(()=>[e("自定义颜色")]),_:1}),l(a,null,{default:c(()=>[e("设置"),t("code",null,"activeColor"),e("属性，可以让您自定义"),t("code",null,"switch"),e("的颜色，支持多种设置方式，如："),t("code",null,'activeColor="#f56c6c" activeColor="red" activeColor="rgb(0,0,0)"')]),_:1}),l(o,{title:"自定义颜色",language:"html",code:x}),l(a,{id:"自定义样式"},{default:c(()=>[e("自定义样式")]),_:1}),l(a,null,{default:c(()=>[e("同时设置"),t("code",null,"activeColor"),e("和"),t("code",null,"inactiveColor"),e("属性，可以让您自定义"),t("code",null,"switch"),e("的样式，同样支持多种设置方式")]),_:1}),l(o,{title:"自定义样式",language:"html",code:C}),l(a,{id:"异步控制"},{default:c(()=>[e("异步控制")]),_:1}),l(a,null,{default:c(()=>[e("异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。")]),_:1}),l(o,{title:"异步控制",language:"html",code:y}),l(a,{id:"右侧演示页面源代码地址"},{default:c(()=>[e("右侧演示页面源代码地址")]),_:1}),l(s,{class:"custom-block tip"},{default:c(()=>[l(a,{class:"custom-block-title"},{default:c(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),l(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/switch/switch.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:c(()=>[l(n,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:c(()=>[e(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=g(B,[["__scopeId","data-v-caabdd46"]]);export{j as default};
