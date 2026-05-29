import{s as u,a as c,w as l,b as s,f as g,g as e,i as f,u as t,j as h,k as n,t as _}from"./index-CRHsRVm2.js";const x={};function y(i,p){const a=h,d=f,r=s("layout-default-uni"),o=s("global-ku-root");return g(),c(o,null,{default:l(()=>[e(r,null,{default:l(()=>[e(d,{class:"dragsort-page"},{default:l(()=>[e(d,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"dragsort-拖拽排序"},{default:l(()=>[e(a,{href:"dragsort.html#dragsort-拖拽排序",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Dragsort 拖拽排序 "),e(a,{class:"badge tip"},{default:l(()=>[n("3.4.64")]),_:1})]),_:1}),e(a,null,{default:l(()=>[n("dragsort 拖拽排序组件，支持垂直、水平和网格三种模式的拖拽排序，适用于列表重排、九宫格排序等场景。")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[e(a,{href:"dragsort.html#平台差异说明",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," x "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:l(()=>[e(a,{href:"dragsort.html#基本使用",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),e(d,null,{default:l(()=>[e(d,null,{default:l(()=>[n("通过 "),t("code",null,"initialList"),n(" 设置初始数据列表")]),_:1}),e(d,null,{default:l(()=>[n("通过 [direction]设置拖拽方向：vertical（垂直）、horizontal（水平）、all（网格）")]),_:1}),e(d,null,{default:l(()=>[n("通过 [columns] 设置网格模式下的列数")]),_:1}),e(d,null,{default:l(()=>[n("通过 [draggable] 控制是否允许拖拽")]),_:1})]),_:1}),t("pre",null,[t("code",null,`<template>
  <view class="text-4 bg-white">
    <!-- 垂直拖拽排序 -->
    <up-dragsort
      :initialList="verticalList"
      direction="vertical"
      @drag-end="onVerticalDragEnd"
    />

    <!-- 水平拖拽排序 -->
    <up-dragsort
      :initialList="horizontalList"
      direction="horizontal"
      class="mt-4"
      @drag-end="onHorizontalDragEnd"
    />

    <!-- 网格拖拽排序 -->
    <up-dragsort
      :initialList="gridList"
      direction="all"
      :columns="3"
      class="mt-4"
      @drag-end="onGridDragEnd"
    />
  </view>
</template>

<script setup>
import { ref } from 'vue';

const verticalList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  { id: 4, label: '项目4' }
]);

const horizontalList = ref([
  { id: 1, label: '项目A' },
  { id: 2, label: '项目B' },
  { id: 3, label: '项目C' },
  { id: 4, label: '项目D' }
]);

const gridList = ref([
  { id: 1, label: '格子1' },
  { id: 2, label: '格子2' },
  { id: 3, label: '格子3' },
  { id: 4, label: '格子4' },
  { id: 5, label: '格子5' },
  { id: 6, label: '格子6' }
]);

const onVerticalDragEnd = (list) => {
  console.log('垂直拖拽结束', list);
  verticalList.value = list;
};

const onHorizontalDragEnd = (list) => {
  console.log('水平拖拽结束', list);
  horizontalList.value = list;
};

const onGridDragEnd = (list) => {
  console.log('网格拖拽结束', list);
  gridList.value = list;
};
<\/script>`)]),e(a,{id:"高级用法示例"},{default:l(()=>[e(a,{href:"dragsort.html#高级用法示例",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 高级用法示例 ")]),_:1}),e(a,{id:"_1-部分项目禁用拖拽"},{default:l(()=>[e(a,{href:"dragsort.html#_1-部分项目禁用拖拽",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 1. 部分项目禁用拖拽 ")]),_:1}),e(a,null,{default:l(()=>[n("可以通过给列表项添加 "),t("code",null,"draggable: false"),n(" 属性来禁用特定项目的拖拽功能：")]),_:1}),t("pre",null,[t("code",null,`<up-dragsort
  :initialList="list"
  direction="vertical"
  @drag-end="onDragEnd"
/>`)]),e(a,{id:"自定义内容"},{default:l(()=>[e(a,{href:"dragsort.html#自定义内容",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 自定义内容 ")]),_:1}),e(a,null,{default:l(()=>[n("通过默认插槽可以自定义每个拖拽项的内容：")]),_:1}),t("pre",null,[t("code",null,`<up-dragsort
  :initialList="list"
  direction="vertical"
  @drag-end="onDragEnd"
>
  <template #default="{ item, index }">
    <view class="custom-item">
      <text>`+_(i.item.label)+`</text>
    </view>
  </template>
</up-dragsort>`,1)]),e(a,{id:"演示页面源代码地址"},{default:l(()=>[e(a,{href:"dragsort.html#演示页面源代码地址",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 演示页面源代码地址 ")]),_:1}),e(d,{class:"custom-block tip"},{default:l(()=>[e(a,{class:"custom-block-title"},{default:l(()=>[n("点击以下链接以查看演示页面的源码")]),_:1}),t("br"),e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/dragsort/dragsort.vue",target:"_blank"},{default:l(()=>[n(" github ")]),_:1})]),_:1}),e(a,{id:"api"},{default:l(()=>[e(a,{href:"dragsort.html#api",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" API ")]),_:1}),e(a,{id:"props"},{default:l(()=>[e(a,{href:"dragsort.html#props",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," initialList "),t("td",{style:{"text-align":"left"}}," 初始数据列表 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," [] "),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}}," draggable "),t("td",{style:{"text-align":"left"}}," 是否允许拖拽 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," direction "),t("td",{style:{"text-align":"left"}}," 拖拽方向 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," vertical "),t("td",{style:{"text-align":"left"}}," vertical / horizontal / all ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," columns "),t("td",{style:{"text-align":"left"}}," all模式下的列数 "),t("td",{style:{"text-align":"left"}}," Number "),t("td",{style:{"text-align":"left"}}," 3 "),t("td",{style:{"text-align":"left"}})])])]),e(a,{id:"events"},{default:l(()=>[e(a,{href:"dragsort.html#events",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Events ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," drag-end "),t("td",{style:{"text-align":"left"}}," 拖拽结束时触发 "),t("td",{style:{"text-align":"left"}}," 排序后的列表 ")])])]),e(a,{id:"slot"},{default:l(()=>[e(a,{href:"dragsort.html#slot",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Slot ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," default "),t("td",{style:{"text-align":"left"}}," 自定义每个拖拽项的内容，参数为 { item, index } ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}const m=u(x,[["render",y],["__scopeId","data-v-f02be424"]]);export{m as default};
