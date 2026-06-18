import{d as u,a as p,w as a,b as d,f as r,g as e,i as c,u as t,j as y,k as l,h as x,s as m}from"./index-Bt5U6C3y.js";import{_ as s}from"./CodeBlock.C3t72IAG.js";const _=`<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false },
      { name: '编辑', copy: false },
      { name: '删除', copy: false }
    ]"
  >长按弹出气泡</up-tooltip>
</template>`,b=`<template>
  <up-tooltip
    placement="bottom"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >下方弹出气泡</up-tooltip>
</template>`,h=`<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '选项一', copy: false, prefixIcon: 'plus' },
      { name: '选项二', copy: false, prefixIcon: 'trash' },
      { name: '选项三', copy: false, suffixIcon: 'arrow-right' }
    ]"
  >扩展按钮</up-tooltip>
</template>`,v=`<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    selectStrColor="rgba(255, 255, 255, 0.7)"
    selectBgColor="rgba(0, 0, 0, 0.7)"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >高亮选中文本背景色</up-tooltip>
</template>`,C=`<template>
  <up-tooltip
    placement="left"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >左侧弹出</up-tooltip>
</template>`,k=`<template>
  <up-tooltip
    placement="right"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >右侧弹出</up-tooltip>
</template>`,T=u({__name:"tooltip",setup(w){return(I,S)=>{const n=y,o=c,i=x,g=d("layout-default-uni"),f=d("global-ku-root");return r(),p(f,null,{default:a(()=>[e(g,null,{default:a(()=>[e(o,{class:"tooltip-page"},{default:a(()=>[e(o,{class:"theme-default-content content__default"},{default:a(()=>[e(n,{id:"tooltip-长按提示"},{default:a(()=>[l("Tooltip 长按提示")]),_:1}),e(n,null,{default:a(()=>[l("Tooltip组件主要用于长按操作，类似微信的长按气泡")]),_:1}),e(n,{id:"平台差异说明"},{default:a(()=>[l("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," x "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(n,{id:"基本使用"},{default:a(()=>[l("基本使用")]),_:1}),e(o,{class:"custom-block warning"},{default:a(()=>[e(n,{class:"custom-block-title"},{default:a(()=>[l("说明")]),_:1}),e(n,null,{default:a(()=>[l(" 由于安卓"),t("code",null,"nvue"),l("下，"),t("code",null,"overflow"),l("属性不支持"),t("code",null,"visible"),l("值，故此组件暂不支持安卓"),t("code",null,"nvue"),l("环境。 ")]),_:1})]),_:1}),e(s,{title:"基本使用",language:"html",code:_}),e(n,{id:"下方显示"},{default:a(()=>[l("下方显示")]),_:1}),e(s,{title:"下方显示",language:"html",code:b}),e(n,{id:"扩展按钮"},{default:a(()=>[l("扩展按钮")]),_:1}),e(s,{title:"扩展按钮",language:"html",code:h}),e(n,{id:"高亮选中文本背景色"},{default:a(()=>[l("高亮选中文本背景色")]),_:1}),e(s,{title:"高亮选中文本背景色",language:"html",code:v}),e(n,{id:"左侧弹出及强制定位"},{default:a(()=>[l("左侧弹出及强制定位")]),_:1}),e(s,{title:"左侧弹出及强制定位",language:"html",code:C}),e(n,{id:"右侧弹出"},{default:a(()=>[l("右侧弹出")]),_:1}),e(s,{title:"右侧弹出",language:"html",code:k}),e(n,{id:"右侧演示页面源代码地址"},{default:a(()=>[l("右侧演示页面源代码地址")]),_:1}),e(o,{class:"custom-block tip"},{default:a(()=>[e(n,{class:"custom-block-title"},{default:a(()=>[l("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(n,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:a(()=>[e(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),l(" github ")]),_:1}),e(n,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:a(()=>[e(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),l(" gitee ")]),_:1})]),_:1}),e(n,{id:"api"},{default:a(()=>[l("API")]),_:1}),e(n,{id:"tooltip-props"},{default:a(()=>[l("Tooltip Props")]),_:1}),t("table",{class:"props-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," text "),t("td",{style:{"text-align":"left"}}," 需要显示的提示文字 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," copyText "),t("td",{style:{"text-align":"left"}}," 点击复制按钮时，复制的文本，为空则使用text值 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," size "),t("td",{style:{"text-align":"left"}}," 文本大小 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 14 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," color "),t("td",{style:{"text-align":"left"}}," 字体颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #606266 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," bgColor "),t("td",{style:{"text-align":"left"}}," 弹出提示框时，文本的背景色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," transparent "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" direction "),e(n,{class:"badge"},{default:a(()=>[l("3.4.104")]),_:1})]),t("td",{style:{"text-align":"left"}}," 弹出提示的方向，top-上方，bottom-下方, left-左方, right-右方 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," top "),t("td",{style:{"text-align":"left"}}," bottom ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," zIndex "),t("td",{style:{"text-align":"left"}}," 弹出提示的z-index，nvue无效 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 10071 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," showCopy "),t("td",{style:{"text-align":"left"}}," 是否显示复制按钮 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," buttons "),t("td",{style:{"text-align":"left"}}," 扩展的按钮组 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," overlay "),t("td",{style:{"text-align":"left"}}," 是否显示透明遮罩以防止触摸穿透 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," showToast "),t("td",{style:{"text-align":"left"}},[l(" 是否显示复制成功或者失败的"),t("code",null,"toast")]),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" triggerMode "),e(n,{class:"badge"},{default:a(()=>[l("3.4.104")]),_:1})]),t("td",{style:{"text-align":"left"}}," 触发模式 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," longpress "),t("td",{style:{"text-align":"left"}}," click ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" popupBgColor "),e(n,{class:"badge"},{default:a(()=>[l("3.4.104")]),_:1})]),t("td",{style:{"text-align":"left"}}," 弹窗背景色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" forcePosition "),e(n,{class:"badge"},{default:a(()=>[l("3.5.8")]),_:1})]),t("td",{style:{"text-align":"left"}}," 手动强制定位更精确控制,支持指定left/right/top/bottom "),t("td",{style:{"text-align":"left"}}," Object "),t("td",{style:{"text-align":"left"}}," {} "),t("td",{style:{"text-align":"left"}})])])]),e(n,{id:"slot"},{default:a(()=>[l("Slot")]),_:1}),t("table",{class:"props-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" trigger "),e(n,{class:"badge"},{default:a(()=>[l("3.4.104")]),_:1})]),t("td",{style:{"text-align":"left"}}," 触发器插槽 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[l(" content "),e(n,{class:"badge"},{default:a(()=>[l("3.4.104")]),_:1})]),t("td",{style:{"text-align":"left"}}," 弹窗内容插槽 ")])])]),e(n,{id:"tooltip-events"},{default:a(()=>[l("Tooltip Events")]),_:1}),t("table",{class:"props-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," click "),t("td",{style:{"text-align":"left"}}," 点击触发事件 "),t("td",{style:{"text-align":"left"}}," index，被点击按钮的索引 ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=m(T,[["__scopeId","data-v-e2bd269b"]]);export{N as default};
