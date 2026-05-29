import{d,a as m,w as s,b as a,f as _,g as t,i as r,u as l,j as f,k as e,h as g,s as b}from"./index-CRHsRVm2.js";import{_ as n}from"./CodeBlock.BlRjy5Lx.js";const h=`<template>
  <up-steps :current="0">
    <up-steps-item title="步骤一" desc="填写用户信息"></up-steps-item>
    <up-steps-item title="步骤二" desc="填写收货地址"></up-steps-item>
    <up-steps-item title="步骤三" desc="确认订单"></up-steps-item>
  </up-steps>
</template>`,x=`<up-steps :current="1">
  <up-steps-item title="步骤一"></up-steps-item>
  <up-steps-item title="步骤二" error></up-steps-item>
  <up-steps-item title="步骤三"></up-steps-item>
</up-steps>`,v=`<up-steps :current="1" dot>
  <up-steps-item></up-steps-item>
  <up-steps-item></up-steps-item>
  <up-steps-item></up-steps-item>
</up-steps>`,y=`<template>
  <up-steps :current="1" direction="column">
    <up-steps-item title="步骤一" desc="填写用户信息"></up-steps-item>
    <up-steps-item title="步骤二" desc="填写收货地址"></up-steps-item>
    <up-steps-item title="步骤三" desc="确认订单"></up-steps-item>
  </up-steps>
</template>`,k=`<up-steps :current="1" activeIcon="checkmark" inactiveIcon="close">
  <up-steps-item title="步骤一"></up-steps-item>
  <up-steps-item title="步骤二"></up-steps-item>
  <up-steps-item title="步骤三"></up-steps-item>
</up-steps>`,C=`<template>
  <up-steps :current="1">
    <up-steps-item title="步骤一"></up-steps-item>
    <up-steps-item>
      <template #title>
        <text class="custom-title">自定义标题</text>
      </template>
    </up-steps-item>
    <up-steps-item title="步骤三"></up-steps-item>
  </up-steps>
</template>

<style lang="scss" scoped>
.custom-title {
  color: #3eaf7c;
  font-weight: bold;
}
</style>`,w=d({__name:"steps",setup(I){return(V,B)=>{const u=f,p=r,i=g,c=a("layout-default-uni"),o=a("global-ku-root");return _(),m(o,null,{default:s(()=>[t(c,null,{default:s(()=>[t(p,{class:"steps-page"},{default:s(()=>[t(p,{class:"theme-default-content content__default"},{default:s(()=>[t(u,{id:"steps-步骤条"},{default:s(()=>[e(" Steps 步骤条 ")]),_:1}),t(u,null,{default:s(()=>[e("该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。")]),_:1}),t(u,{id:"平台差异说明"},{default:s(()=>[e("平台差异说明")]),_:1}),l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(u,{id:"基本使用"},{default:s(()=>[e("基本使用")]),_:1}),t(p,{class:"custom-block warning"},{default:s(()=>[t(u,{class:"custom-block-title"},{default:s(()=>[e("说明")]),_:1}),t(u,null,{default:s(()=>[e("由于安卓"),l("code",null,"nvue"),e("下，"),l("code",null,"overflow"),e("属性不支持"),l("code",null,"visible"),e("值，故此组件暂不支持安卓"),l("code",null,"nvue"),e("环境。")]),_:1})]),_:1}),t(p,null,{default:s(()=>[t(p,null,{default:s(()=>[e("通过"),l("code",null,"current"),e("参数标识目前处于第几步，从0开始")]),_:1})]),_:1}),t(n,{title:"基本使用",language:"html",code:h}),t(u,{id:"错误状态"},{default:s(()=>[e("错误状态")]),_:1}),t(u,null,{default:s(()=>[e("如果设置"),l("code",null,"up-steps-item"),e("的"),l("code",null,"error"),e("参数为"),l("code",null,"true"),e('的话，当前步骤将会为"失败"的状态')]),_:1}),t(n,{title:"错误状态",language:"html",code:x}),t(u,{id:"步骤条模式"},{default:s(()=>[e("步骤条模式")]),_:1}),t(u,null,{default:s(()=>[l("code",null,"up-steps"),e("的"),l("code",null,"dot"),e("参数设置为"),l("code",null,"true"),e("的话，将会以点状的形式展示步骤条样式。")]),_:1}),t(n,{title:"步骤条模式",language:"html",code:v}),t(u,{id:"竖向模式"},{default:s(()=>[e("竖向模式")]),_:1}),t(u,null,{default:s(()=>[l("code",null,"up-steps"),e("的"),l("code",null,"direction"),e("参数设置为"),l("code",null,"column"),e("的话，组件将会以竖向的形式展示步骤条内容。")]),_:1}),t(n,{title:"竖向模式",language:"html",code:y}),t(u,{id:"自定义图标"},{default:s(()=>[e("自定义图标")]),_:1}),t(p,null,{default:s(()=>[t(p,null,{default:s(()=>[e("通过"),l("code",null,"activeIcon"),e("可以设置激活状态的图标")]),_:1}),t(p,null,{default:s(()=>[e("通过"),l("code",null,"inactiveIcon"),e("可以设置非激活状态的图标")]),_:1})]),_:1}),t(n,{title:"自定义图标",language:"html",code:k}),t(u,{id:"通过插槽自定义标题"},{default:s(()=>[e("通过插槽自定义标题 "),t(u,{class:"badge tip"},{default:s(()=>[e("3.4.2")]),_:1})]),_:1}),t(u,null,{default:s(()=>[e("通过title插槽，可以自定义某个步骤标题。")]),_:1}),t(n,{title:"自定义标题",language:"html",code:C}),t(u,{id:"右侧演示页面源代码地址"},{default:s(()=>[e("右侧演示页面源代码地址")]),_:1}),t(p,{class:"custom-block tip"},{default:s(()=>[t(u,{class:"custom-block-title"},{default:s(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),l("br"),t(u,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/steps/steps.vue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:s(()=>[t(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:s(()=>[e(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),$=b(w,[["__scopeId","data-v-fa839ba7"]]);export{$ as default};
