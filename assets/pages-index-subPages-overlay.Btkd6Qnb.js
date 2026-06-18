import{d as r,a as f,w as l,b as d,f as g,g as e,i as y,u as t,j as p,k as a,h as x,s as _}from"./index-C-vHpWRU.js";import{_ as i}from"./CodeBlock.WuTHDaQt.js";const h=`<template>
  <view>
    <up-button @click="show = true">打开遮罩</up-button>
    <up-overlay :show="show" @click="show = false"></up-overlay>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>`,m=`<template>
  <view>
    <up-button @click="show = true">打开遮罩</up-button>
    <up-overlay :show="show" @click="show = false">
      <view class="warp">
        <view class="rect">
          <text>内容</text>
        </view>
      </view>
    </up-overlay>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>

<style scoped>
.warp {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.rect {
  width: 120px;
  height: 120px;
  background-color: #fff;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>`,b='<up-overlay :show="show" :duration="400" :z-index="999" :opacity="0.3"></up-overlay>',v=r({__name:"overlay",setup(w){return(k,C)=>{const n=p,s=y,o=x,u=d("layout-default-uni"),c=d("global-ku-root");return g(),f(c,null,{default:l(()=>[e(u,null,{default:l(()=>[e(s,{class:"overlay-page"},{default:l(()=>[e(s,{class:"theme-default-content content__default"},{default:l(()=>[e(n,{id:"overlay-遮罩层"},{default:l(()=>[a("Overlay 遮罩层")]),_:1}),e(s,{class:"demo-model"},{default:l(()=>[e(s,{class:"model-content"},{default:l(()=>[t("iframe",{id:"demo-modal",scrolling:"auto",frameborder:"0",src:"https://ijry.github.io/uview-plus/text/#/pages/componentsA/overlay/overlay",class:"iframe"})]),_:1}),e(n,{target:"_blank",href:"https://ijry.github.io/uview-plus/text/#",class:"open-link"},{default:l(()=>[a(" 打开 ")]),_:1})]),_:1}),e(n,null,{default:l(()=>[a("创建一个遮罩层，用于强调特定的页面元素，并阻止用户对遮罩下层的内容进行操作，一般用于弹窗场景")]),_:1}),e(n,{id:"平台差异说明"},{default:l(()=>[a("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(n,{id:"基本使用"},{default:l(()=>[a("基本使用")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[a("通过"),t("code",null,"show"),a("参数配置是否显示遮罩")]),_:1}),e(s,null,{default:l(()=>[a("遮罩被点击时，会发送一个"),t("code",null,"click"),a("事件，如不需要此事件，请设置"),t("code",null,"mask-click-able"),a("参数为"),t("code",null,"false")]),_:1})]),_:1}),e(i,{title:"基本使用",language:"html",code:h}),e(n,{id:"嵌入内容"},{default:l(()=>[a("嵌入内容")]),_:1}),e(n,null,{default:l(()=>[a("通过默认插槽可以在遮罩层上嵌入任意内容")]),_:1}),e(i,{title:"嵌入内容",language:"html",code:m}),e(n,{id:"遮罩样式"},{default:l(()=>[a("遮罩样式")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[a("通过"),t("code",null,"duration"),a("设置遮罩淡入淡出的时长，单位"),t("code",null,"ms")]),_:1})]),_:1}),e(i,{title:"遮罩样式",language:"html",code:b}),e(n,{id:"右侧演示页面源代码地址"},{default:l(()=>[a("右侧演示页面源代码地址")]),_:1}),e(s,{class:"custom-block tip"},{default:l(()=>[e(n,{class:"custom-block-title"},{default:l(()=>[a("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(n,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/overlay/overlay.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[e(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),a(" github ")]),_:1}),e(n,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/overlay/overlay.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:l(()=>[e(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),a(" gitee ")]),_:1})]),_:1}),e(n,{id:"api"},{default:l(()=>[a("API")]),_:1}),e(n,{id:"props"},{default:l(()=>[a("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," show "),t("td",{style:{"text-align":"left"}}," 是否显示遮罩 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," z-index "),t("td",{style:{"text-align":"left"}}," z-index 层级 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 10075 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," duration "),t("td",{style:{"text-align":"left"}}," 动画时长，单位ms "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 300 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," opacity "),t("td",{style:{"text-align":"left"}}," 遮罩透明度 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 0.5 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," color "),t("td",{style:{"text-align":"left"}}," 遮罩背景色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #000000 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," mask-click-able "),t("td",{style:{"text-align":"left"}}," 是否允许点击遮罩关闭 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")])])]),e(n,{id:"events"},{default:l(()=>[a("Events")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," click "),t("td",{style:{"text-align":"left"}}," 点击遮罩时触发 "),t("td",{style:{"text-align":"left"}}," - ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=_(v,[["__scopeId","data-v-893ba3f6"]]);export{N as default};
