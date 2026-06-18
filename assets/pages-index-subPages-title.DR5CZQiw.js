import{d as f,a as p,w as l,b as u,f as _,g as e,i as g,u as t,j as r,k as n,h as x,s as m}from"./index-Bt5U6C3y.js";import{_ as s}from"./CodeBlock.C3t72IAG.js";const y=`<template>
  <u-title>这里是标题</u-title>
</template>`,b=`<template>
  <u-title>
    <template #prefix>
      <u-icon name="file-text"></u-icon>
    </template>
    自定义前缀
  </u-title>
</template>`,h=`<template>
  <u-title class="custom-title">
    <template #prefix>
      <u-icon name="file-text"></u-icon>
    </template>
    组合使用
  </u-title>
</template>

<style scoped>
.custom-title {
  margin-top: 20px;
}
</style>`,v=f({__name:"title",setup(k){return(C,w)=>{const a=r,d=x,i=g,o=u("layout-default-uni"),c=u("global-ku-root");return _(),p(c,null,{default:l(()=>[e(o,null,{default:l(()=>[e(i,{class:"title-page"},{default:l(()=>[e(i,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"title-标题"},{default:l(()=>[n(" Title 标题 "),e(a,{class:"badge tip"},{default:l(()=>[n("3.4.58")]),_:1})]),_:1}),e(a,null,{default:l(()=>[t("code",null,"u-title"),n(" 组件用于展示标题文本，通常用于页面区块标题，提供默认的前缀标识样式。")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[n("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:l(()=>[n("基本使用")]),_:1}),e(a,null,{default:l(()=>[n("通过默认插槽设置标题内容：")]),_:1}),e(s,{title:"基本使用",language:"html",code:y}),e(a,{id:"自定义前缀"},{default:l(()=>[n("自定义前缀")]),_:1}),e(a,null,{default:l(()=>[n("使用 [prefix] 插槽自定义前缀标识：")]),_:1}),e(s,{title:"自定义前缀",language:"html",code:b}),e(a,{id:"组合使用"},{default:l(()=>[n("组合使用")]),_:1}),e(s,{title:"组合使用",language:"html",code:h}),e(a,{id:"右侧演示页面源代码地址"},{default:l(()=>[n("右侧演示页面源代码地址")]),_:1}),e(i,{class:"custom-block tip"},{default:l(()=>[e(a,{class:"custom-block-title"},{default:l(()=>[n("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/title/title.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[e(d,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:l(()=>[n(" github ")]),_:1})]),_:1})]),_:1}),e(a,{id:"api"},{default:l(()=>[n("API")]),_:1}),e(a,{id:"props"},{default:l(()=>[n("Props")]),_:1}),t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," 当前组件无props "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")])])]),e(a,{id:"slots"},{default:l(()=>[n("Slots")]),_:1}),t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," default "),t("td",{style:{"text-align":"left"}}," 标题文本内容 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," prefix "),t("td",{style:{"text-align":"left"}}," 标题前缀内容 ")])])]),e(a,{id:"event"},{default:l(()=>[n("Event")]),_:1}),t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," 当前组件无事件 "),t("td",{style:{"text-align":"left"}}," - ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),B=m(v,[["__scopeId","data-v-c6ed8621"]]);export{B as default};
