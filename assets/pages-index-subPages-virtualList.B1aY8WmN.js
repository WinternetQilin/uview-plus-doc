import{_ as o}from"./CodeBlock.BlRjy5Lx.js";import{s as c,a as h,w as e,b as d,f as m,g as t,i as f,u as l,j as _,k as n}from"./index-CRHsRVm2.js";const p={};function v(g,x){const u=_,i=o,a=f,r=d("layout-default-uni"),s=d("global-ku-root");return m(),h(s,null,{default:e(()=>[t(r,null,{default:e(()=>[t(a,{class:"virtualList-page"},{default:e(()=>[t(a,{class:"theme-default-content content__default"},{default:e(()=>[t(u,{id:"virtuallist-虚拟列表"},{default:e(()=>[t(u,{href:"virtualList.html#virtuallist-虚拟列表",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" VirtualList 虚拟列表 "),t(u,{class:"badge tip"},{default:e(()=>[n("3.1.80")]),_:1})]),_:1}),t(u,null,{default:e(()=>[n("虚拟列表是一种高性能的列表渲染技术，适用于需要渲染大量数据的场景。它通过只渲染可视区域内的元素，大大减少了DOM节点数量，提升了页面性能。")]),_:1}),t(u,{id:"平台差异说明"},{default:e(()=>[t(u,{href:"virtualList.html#平台差异说明",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(u,{id:"基本使用"},{default:e(()=>[t(u,{href:"virtualList.html#基本使用",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),t(u,null,{default:e(()=>[n("通过 listData 传入需要渲染的数据列表，通过插槽自定义列表项内容。")]),_:1}),t(i,{code:`<template>
  <view>
    <up-virtual-list :list-data="list" :item-height="50">
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: \`Item \${index + 1}\`
})));
<\/script>`,language:"vue",title:"基本使用"}),t(u,{id:"设置列表高度"},{default:e(()=>[t(u,{href:"virtualList.html#设置列表高度",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 设置列表高度 ")]),_:1}),t(u,null,{default:e(()=>[n("通过 height 设置虚拟列表容器的高度。")]),_:1}),t(i,{code:`<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :height="400"
      :item-height="50"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: \`Item \${index}\`
})));
<\/script>`,language:"vue",title:"设置列表高度"}),t(u,{id:"自定义缓冲区"},{default:e(()=>[t(u,{href:"virtualList.html#自定义缓冲区",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 自定义缓冲区 ")]),_:1}),t(u,null,{default:e(()=>[n("通过 buffer 设置可视区域外的缓冲区大小，提升滚动体验。")]),_:1}),t(i,{code:`<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="60"
      :buffer="10"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 5000 }, (_, index) => ({
  id: index,
  name: \`Item \${index}\`
})));
<\/script>`,language:"vue",title:"自定义缓冲区"}),t(u,{id:"props"},{default:e(()=>[t(u,{href:"virtualList.html#props",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Props ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"listData"),l("td",null,"列表数据"),l("td",null,"Array"),l("td",null,"[]"),l("td",null,"-")]),l("tr",null,[l("td",null,"itemHeight"),l("td",null,"列表项高度"),l("td",null,"Number"),l("td",null,"50"),l("td",null,"-")]),l("tr",null,[l("td",null,"height"),l("td",null,"列表容器高度"),l("td",null,"String | Number"),l("td",null,"100%"),l("td",null,"-")]),l("tr",null,[l("td",null,"buffer"),l("td",null,"缓冲区大小(可视区域外的渲染数量)"),l("td",null,"Number"),l("td",null,"4"),l("td",null,"-")]),l("tr",null,[l("td",null,"keyField"),l("td",null,"唯一标识字段名"),l("td",null,"String"),l("td",null,"id"),l("td",null,"-")]),l("tr",null,[l("td",null,"scrollTop"),l("td",null,"当前滚动位置"),l("td",null,"Number"),l("td",null,"0"),l("td",null,"-")])])]),t(u,{id:"events"},{default:e(()=>[t(u,{href:"virtualList.html#events",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Events ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"update:scrollTop"),l("td",null,"滚动时更新scrollTop值"),l("td",null,"scrollTop")]),l("tr",null,[l("td",null,"scroll"),l("td",null,"滚动时触发"),l("td",null,"scrollTop")])])]),t(u,{id:"slots"},{default:e(()=>[t(u,{href:"virtualList.html#slots",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Slots ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明"),l("th",null,"SlotProps")])]),l("tbody",null,[l("tr",null,[l("td",null,"default"),l("td",null,"列表项内容"),l("td",null,"{ item, index }")])])]),t(u,{id:"方法"},{default:e(()=>[t(u,{href:"virtualList.html#方法",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 方法 ")]),_:1}),t(u,null,{default:e(()=>[n("通过 ref 可以获取到虚拟列表实例并调用方法：")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"方法名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"getVisibleRange()"),l("td",null,"获取可见项范围"),l("td",null,"-")])])]),t(u,{id:"监听滚动事件"},{default:e(()=>[t(u,{href:"virtualList.html#监听滚动事件",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 监听滚动事件 ")]),_:1}),t(i,{code:`<template>
  <view>
    <up-virtual-list
      :list-data="list"
      :item-height="50"
      @scroll="handleScroll"
    >
      <template #item="{ item }">
        <view class="list-item">
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: \`Item \${index}\`
})));

const handleScroll = (scrollTop) => {
  console.log('Current scroll position:', scrollTop);
};
<\/script>`,language:"vue",title:"监听滚动事件"}),t(u,{id:"注意事项"},{default:e(()=>[t(u,{href:"virtualList.html#注意事项",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 注意事项 ")]),_:1}),t(a,null,{default:e(()=>[t(a,null,{default:e(()=>[n("每个列表项的高度必须固定且一致，通过"),l("code",null,"itemHeight"),n("属性设置")]),_:1}),t(a,null,{default:e(()=>[n("数据量越大，虚拟列表的性能优势越明显")]),_:1}),t(a,null,{default:e(()=>[n("如果需要动态高度的列表项，请使用其他解决方案")]),_:1}),t(a,null,{default:e(()=>[n("使用"),l("code",null,"keyField"),n("指定唯一标识字段，避免渲染异常")]),_:1}),t(a,null,{default:e(()=>[n("可通过 buffer 调整缓冲区大小以平衡性能和体验")]),_:1}),t(a,null,{default:e(()=>[n("组件会自动测量容器高度，也可以通过 height 属性手动指定")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const w=c(p,[["render",v],["__scopeId","data-v-4829e9c7"]]);export{w as default};
