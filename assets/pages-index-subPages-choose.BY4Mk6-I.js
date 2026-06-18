import{s as h,a as p,w as t,b as c,f as m,g as l,i as f,u as n,j as _,k as e,t as u,h as v}from"./index-Bt5U6C3y.js";const g={};function b(s,x){const o=_,a=f,i=v,d=c("layout-default-uni"),r=c("global-ku-root");return m(),p(r,null,{default:t(()=>[l(d,null,{default:t(()=>[l(a,{class:"choose-page"},{default:t(()=>[l(a,{class:"theme-default-content content__default"},{default:t(()=>[l(o,{id:"choose-选择器"},{default:t(()=>[l(o,{href:"choose.html#choose-选择器",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" Choose 选择器 "),l(o,{class:"badge tip"},{default:t(()=>[e("3.5.31")]),_:1})]),_:1}),l(o,null,{default:t(()=>[e("选择器组件，用于实现一组选项的单选或自定义操作。")]),_:1}),l(o,{id:"使用场景"},{default:t(()=>[l(o,{href:"choose.html#使用场景",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 使用场景 ")]),_:1}),l(a,null,{default:t(()=>[l(a,null,{default:t(()=>[e("从一组选项中选择单个项目")]),_:1}),l(a,null,{default:t(()=>[e("时间段选择")]),_:1}),l(a,null,{default:t(()=>[e("快递时间预约等场景")]),_:1}),l(a,null,{default:t(()=>[e("可自定义选项的外观和交互")]),_:1})]),_:1}),l(o,{id:"平台差异说明"},{default:t(()=>[l(o,{href:"choose.html#平台差异说明",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 平台差异说明 ")]),_:1}),n("table",null,[n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}}," App（vue） "),n("th",{style:{"text-align":"center"}}," App（nvue） "),n("th",{style:{"text-align":"center"}}," H5 "),n("th",{style:{"text-align":"center"}}," 小程序 ")])]),n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ "),n("td",{style:{"text-align":"center"}}," √ ")])])]),l(o,{id:"基本使用"},{default:t(()=>[l(o,{href:"choose.html#基本使用",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 基本使用 ")]),_:1}),l(a,null,{default:t(()=>[l(a,null,{default:t(()=>[e(" 通过"),n("code",null,"options"),e("设置选项数据，数据元素需要有"),n("code",null,"id"),e("和"),n("code",null,"title"),e("字段 ")]),_:1}),l(a,null,{default:t(()=>[e("通过"),n("code",null,"v-model"),e("绑定当前选中项的索引值")]),_:1})]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-choose v-model="value" :options="options"></up-choose>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'},
  {id: 4, title: '选项4'},
  {id: 5, title: '选项5'},
  {id: 6, title: '选项6'}
])
<\/script>`)]),l(o,{id:"不换行显示"},{default:t(()=>[l(o,{href:"choose.html#不换行显示",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 不换行显示 ")]),_:1}),l(o,null,{default:t(()=>[e("通过设置"),n("code",null,"wrap"),e("为"),n("code",null,"false"),e("可使选项在一行内显示，超出部分可通过滚动查看。")]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-choose v-model="value" :options="options" :wrap="false"></up-choose>
</template>`)]),l(o,{id:"自定义尺寸"},{default:t(()=>[l(o,{href:"choose.html#自定义尺寸",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 自定义尺寸 ")]),_:1}),l(o,null,{default:t(()=>[e("通过"),n("code",null,"itemWidth"),e("和"),n("code",null,"itemHeight"),e("可以自定义选项的宽高。")]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-choose
    v-model="value"
    :options="options"
    item-width="250rpx"
    item-height="220rpx">
  </up-choose>
</template>`)]),l(o,{id:"快递上门时间预约"},{default:t(()=>[l(o,{href:"choose.html#快递上门时间预约",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 快递上门时间预约 ")]),_:1}),l(o,null,{default:t(()=>[e("结合"),n("code",null,"up-cate-tab"),e("组件可以实现更复杂的交互场景，如快递上门时间预约。")]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-cate-tab height="300px" :tab-list="deliveryOptions" v-model:current="deliveryCurrent">
    <template v-slot:itemList="{item}">
      <view class="delivery-time-container">
        <view class="item-title">
          <text>`+u(s.item.name)+`</text>
        </view>
        <view class="item-container">
          <up-choose
            v-model="item.selectedIndex"
            :options="item.times"
            item-width="460rpx"
            item-height="60rpx"
            @change="onDeliveryTimeChange">
          </up-choose>
        </view>
      </view>
    </template>
  </up-cate-tab>
</template>`,1)]),l(o,{id:"自定义选项插槽"},{default:t(()=>[l(o,{href:"choose.html#自定义选项插槽",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 自定义选项插槽 ")]),_:1}),l(o,null,{default:t(()=>[e("通过插槽可以完全自定义选项的显示内容和样式。")]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-choose v-model="value" :options="options">
    <template v-slot:slotProps="{ item }">
      <text>`+u(s.item.title)+`</text>
    </template>
  </up-choose>
</template>`,1)]),l(o,{id:"自定义点击事件"},{default:t(()=>[l(o,{href:"choose.html#自定义点击事件",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 自定义点击事件 ")]),_:1}),l(o,null,{default:t(()=>[e(" 通过设置"),n("code",null,"customClick"),e("为"),n("code",null,"true"),e("并监听"),n("code",null,"custom-click"),e("事件可以实现自定义点击逻辑。 ")]),_:1}),n("pre",null,[n("code",null,`<template>
  <up-choose
    v-model="value"
    :options="options"
    :custom-click="true"
    @custom-click="handleCustomClick">
  </up-choose>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'}
])

const handleCustomClick = (item) => {
  console.log('自定义点击:', item)
}
<\/script>`)]),l(o,{id:"右侧演示页面源代码地址"},{default:t(()=>[l(o,{href:"choose.html#右侧演示页面源代码地址",class:"header-anchor"},{default:t(()=>[e("#")]),_:1}),e(" 右侧演示页面源代码地址 ")]),_:1}),l(a,{class:"custom-block tip"},{default:t(()=>[l(o,{class:"custom-block-title"},{default:t(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),n("br"),l(o,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/choose/choose.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:t(()=>[l(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),e(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const k=h(g,[["render",b],["__scopeId","data-v-898136a3"]]);export{k as default};
