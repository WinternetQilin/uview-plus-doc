import{s as d,a as i,w as a,b as s,f as r,g as t,i as m,u as e,j as _,k as l,h as f}from"./index-C-vHpWRU.js";const h={};function x(g,b){const n=_,c=m,o=f,p=s("layout-default-uni"),u=s("global-ku-root");return r(),i(u,null,{default:a(()=>[t(p,null,{default:a(()=>[t(c,{class:"collapse-page"},{default:a(()=>[t(c,{class:"theme-default-content content__default"},{default:a(()=>[t(n,{id:"collapse-折叠面板"},{default:a(()=>[t(n,{href:"collapse.html#collapse-折叠面板",class:"header-anchor"},{default:a(()=>[l("#")]),_:1}),l(" Collapse 折叠面板 ")]),_:1}),t(n,null,{default:a(()=>[l("通过折叠面板收纳内容区域")]),_:1}),t(n,{id:"平台差异说明"},{default:a(()=>[t(n,{href:"collapse.html#平台差异说明",class:"header-anchor"},{default:a(()=>[l("#")]),_:1}),l(" 平台差异说明 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App（vue） "),e("th",{style:{"text-align":"center"}}," App（nvue） "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),t(n,{id:"基本使用"},{default:a(()=>[t(n,{href:"collapse.html#基本使用",class:"header-anchor"},{default:a(()=>[l("#")]),_:1}),l(" 基本使用 ")]),_:1}),e("pre",null,[e("code",null,`<template>
  <up-collapse @change="change" @close="close" @open="open">
    <up-collapse-item title="文档指南" name="Docs guide">
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item title="组件全面" name="Variety components">
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item title="众多利器" name="Tools">
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>

<script setup>
const open = (e) => {
  // console.log('open', e)
};

const close = (e) => {
  // console.log('close', e)
};

const change = (e) => {
  // console.log('change', e)
};
<\/script>`)]),t(n,{id:"控制面板的初始状态-以及是否可以操作"},{default:a(()=>[t(n,{href:"collapse.html#控制面板的初始状态-以及是否可以操作",class:"header-anchor"},{default:a(()=>[l(" # ")]),_:1}),l(" 控制面板的初始状态，以及是否可以操作 ")]),_:1}),t(c,null,{default:a(()=>[t(c,null,{default:a(()=>[l(" 设置"),e("code",null,"u-collapse-item"),l("的"),e("code",null,"name"),l("参数，并在"),e("code",null,"u-collapse"),l("中指定数组"),e("code",null,"value"),l("可以让面板初始化时为打开状态 ")]),_:1}),t(c,null,{default:a(()=>[l(" 如果设置"),e("code",null,"u-collapse-item"),l("的"),e("code",null,"disabled"),l("参数，那么面板会保持被禁用状态 ")]),_:1})]),_:1}),e("pre",null,[e("code",null,`<template>
  <up-collapse :value="['2']">
    <up-collapse-item title="文档指南">
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item disabled title="组件全面">
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item name="2" title="众多利器">
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>`)]),t(n,{id:"手风琴模式"},{default:a(()=>[t(n,{href:"collapse.html#手风琴模式",class:"header-anchor"},{default:a(()=>[l("#")]),_:1}),l(" 手风琴模式 ")]),_:1}),t(c,null,{default:a(()=>[t(c,null,{default:a(()=>[l(" 将"),e("code",null,"u-collapse"),l("的"),e("code",null,"accordion"),l("设置为"),e("code",null,"true"),l("，这样可以开启手风琴模式 ")]),_:1})]),_:1}),e("pre",null,[e("code",null,`<template>
  <up-collapse accordion>
    <up-collapse-item title="文档指南">
      <text class="u-collapse-content">涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川</text>
    </up-collapse-item>
    <up-collapse-item title="组件全面">
      <text class="u-collapse-content">众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用</text>
    </up-collapse-item>
    <up-collapse-item title="众多利器">
      <text class="u-collapse-content">众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨</text>
    </up-collapse-item>
  </up-collapse>
</template>`)]),t(n,{id:"自定义标题和内容"},{default:a(()=>[t(n,{href:"collapse.html#自定义标题和内容",class:"header-anchor"},{default:a(()=>[l("#")]),_:1}),l(" 自定义标题和内容 ")]),_:1}),t(c,null,{default:a(()=>[t(c,null,{default:a(()=>[l("通过设置"),e("code",null,"slot"),l("来自定义标题和内容")]),_:1})]),_:1}),e("pre",null,[e("code",null,`<template>
  <up-collapse accordion>
    <up-collapse-item>
      <template #title>
        <view class="title">自定义标题</view>
      </template>
      <text class="u-collapse-content">自定义内容</text>
    </up-collapse-item>
  </up-collapse>
</template>`)]),t(n,{id:"右侧演示页面源代码地址"},{default:a(()=>[t(n,{href:"collapse.html#右侧演示页面源代码地址",class:"header-anchor"},{default:a(()=>[l(" # ")]),_:1}),l(" 右侧演示页面源代码地址 ")]),_:1}),t(c,{class:"custom-block tip"},{default:a(()=>[t(n,{class:"custom-block-title"},{default:a(()=>[l(" 点击以下链接以查看右侧演示页面的源码 ")]),_:1}),e("br"),t(n,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/collapse/collapse.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:a(()=>[t(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),l(" github ")]),_:1}),t(n,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/collapse/collapse.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:a(()=>[t(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),l(" gitee ")]),_:1}),e("br")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const v=d(h,[["render",x],["__scopeId","data-v-e9ddf09b"]]);export{v as default};
