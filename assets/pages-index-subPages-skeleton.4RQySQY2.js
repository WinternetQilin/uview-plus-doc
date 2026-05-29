import{d as r,a as _,w as a,b as u,f as p,g as l,i as f,u as t,j as g,k as e,h as m,s as b}from"./index-CRHsRVm2.js";import{_ as s}from"./CodeBlock.BlRjy5Lx.js";const k='<up-skeleton :loading="true" :title="true" :rows="3"></up-skeleton>',v='<up-skeleton :loading="true" :animate="true" :title="true" :rows="3"></up-skeleton>',h='<up-skeleton :loading="true" avatar :rows="1"></up-skeleton>',x=`<template>
  <up-skeleton :loading="loading" :title="true" :rows="3">
    <view class="content">
      <view class="item" v-for="i in 3" :key="i">
        <image class="avatar" src="/static/logo.png" />
        <view class="text">这是真实内容</view>
      </view>
    </view>
  </up-skeleton>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 2000);
<\/script>`,w=r({__name:"skeleton",setup(y){return(C,V)=>{const n=g,o=f,c=m,d=u("layout-default-uni"),i=u("global-ku-root");return p(),_(i,null,{default:a(()=>[l(d,null,{default:a(()=>[l(o,{class:"skeleton-page"},{default:a(()=>[l(o,{class:"theme-default-content content__default"},{default:a(()=>[l(n,{id:"skeleton-骨架屏"},{default:a(()=>[e(" Skeleton 骨架屏 ")]),_:1}),l(n,null,{default:a(()=>[e("骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。")]),_:1}),l(o,{class:"custom-block tip"},{default:a(()=>[l(n,{class:"custom-block-title"},{default:a(()=>[e("说明")]),_:1}),l(n,null,{default:a(()=>[e("由于"),t("code",null,"VUE"),e("和"),t("code",null,"NVUE"),e("的特性不同，组件动画在"),t("code",null,"VUE"),e("上为由左到右形式，在"),t("code",null,"NVUE"),e("上为明暗显隐的形式。")]),_:1})]),_:1}),l(n,{id:"平台差异说明"},{default:a(()=>[e("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(n,{id:"基本使用"},{default:a(()=>[e("基本使用")]),_:1}),l(n,null,{default:a(()=>[e("组件由"),t("code",null,"标题"),e("，"),t("code",null,"段落"),e("和"),t("code",null,"头像"),e("组件组件，其中"),t("code",null,"段落"),e("需要通过"),t("code",null,"rows"),e("参数配置才显示，可以通过"),t("code",null,"title"),e("和"),t("code",null,"avatar"),e("是否显示"),t("code",null,"标题"),e("和"),t("code",null,"头像"),e("。")]),_:1}),l(s,{title:"基本使用",language:"html",code:k}),l(n,{id:"加载中动画"},{default:a(()=>[e("加载中动画")]),_:1}),l(n,null,{default:a(()=>[e("设置"),t("code",null,"animate"),e("为"),t("code",null,"true"),e("，加载中的骨架块将会有一个动画效果，用以加强视觉效果。")]),_:1}),l(s,{title:"加载中动画",language:"html",code:v}),l(n,{id:"显示头像"},{default:a(()=>[e("显示头像")]),_:1}),l(s,{title:"显示头像",language:"html",code:h}),l(n,{id:"插槽内容"},{default:a(()=>[e("插槽内容")]),_:1}),l(n,null,{default:a(()=>[e("可以通过插槽写入展示的内容，当请求结束，将"),t("code",null,"loading"),e("设置为"),t("code",null,"false"),e("，此时会隐藏骨架组件，同时展示插槽内容。")]),_:1}),l(s,{title:"插槽内容",language:"html",code:x}),l(n,{id:"右侧演示页面源代码地址"},{default:a(()=>[e("右侧演示页面源代码地址")]),_:1}),l(o,{class:"custom-block tip"},{default:a(()=>[l(n,{class:"custom-block-title"},{default:a(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),l(n,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/skeleton/skeleton.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:a(()=>[l(c,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:a(()=>[e(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=b(w,[["__scopeId","data-v-bbb778ef"]]);export{N as default};
