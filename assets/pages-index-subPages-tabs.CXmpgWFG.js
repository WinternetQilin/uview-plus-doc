import{d as h,r as k,a as v,w as e,b as o,D as r,M as y,q as p,N as x,f as S,g as t,i as C,k as a,u as l,j as w,C as m,s as N}from"./index-C-vHpWRU.js";import{_ as s}from"./CodeBlock.WuTHDaQt.js";const j=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,T=`<template>
  <up-sticky>
    <up-tabs :list="list" @click="click"></up-tabs>
  </up-sticky>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,B=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注', badge: 3 },
  { name: '推荐', badge: 5 },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,A=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注', disabled: true },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,E=`<template>
  <up-tabs
    :list="list"
    :activeStyle="{ color: '#2979ff' }"
    :inactiveStyle="{ color: '#7a7e7f' }"
    :itemStyle="{ padding: '0 10px' }"
  ></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,O=`<template>
  <up-tabs :list="list" lineColor="#2979ff"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,I=`<template>
  <up-tabs :list="list1" keyName="name">
    <template #default="{ item, index }">
      <view class="tab-content">
        这是第{{ index + 1 }}个Tab内容: {{ item.name }}
      </view>
    </template>
  </up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list1 = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,P=`<template>
  <up-tabs :list="list">
    <template #right>
      <view class="right-content">
        <up-icon name="search"></up-icon>
      </view>
    </template>
  </up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,V=`interface TabClickEvent {
  index: number;
  name: string;
  rect: {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    id: string;
    dataset: object;
  };
}`,D=h({__name:"tabs",setup(H){const u=k([{name:"关注"},{name:"推荐"},{name:"热榜"}]);function c(f){}return(f,$)=>{const n=C,i=w,d=r(p("up-tabs"),y),_=r(p("up-sticky"),x),b=o("layout-default-uni"),g=o("global-ku-root");return S(),v(g,null,{default:e(()=>[t(b,null,{default:e(()=>[t(n,{class:"tabs-page"},{default:e(()=>[t(n,{class:"page-header"},{default:e(()=>[t(n,{class:"header-badge"},{default:e(()=>[a(" 布局组件 ")]),_:1}),t(n,{id:"tabs-标签",class:"page-title"},{default:e(()=>[a(" Tabs 标签 ")]),_:1}),t(n,{class:"page-desc"},{default:e(()=>[a(" 该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。 ")]),_:1})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"平台差异说明",class:"section-title"},{default:e(()=>[a(" 平台差异说明 ")]),_:1}),t(n,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",null,"App（vue）"),l("th",null,"App（nvue）"),l("th",null,"H5"),l("th",null,"小程序")])]),l("tbody",null,[l("tr",null,[l("td",null,[t(n,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),l("td",null,[t(n,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),l("td",null,[t(n,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),l("td",null,[t(n,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"基本使用",class:"section-title"},{default:e(()=>[a(" 基本使用 ")]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 通过设置"),l("code",null,"scrollable"),a("（默认为"),l("code",null,"true"),a("），配置tabs组件的内容是否可以左右拖动。 ")]),_:1}),t(n,{class:"notice-card tip"},{default:e(()=>[t(n,{class:"notice-icon"},{default:e(()=>[a(" ! ")]),_:1}),t(n,{class:"notice-content"},{default:e(()=>[t(i,{class:"notice-title"},{default:e(()=>[a("说明")]),_:1}),t(i,null,{default:e(()=>[l("code",null,"scrollable"),a("参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置"),l("code",null,"scrollable"),a("为"),l("code",null,"false"),a("，因为它默认为"),l("code",null,"true"),a("。")]),_:1})]),_:1})]),_:1}),t(n,{class:"demo-container"},{default:e(()=>[t(d,{list:m(u),onClick:c},null,8,["list"])]),_:1}),t(s,{title:"基本使用",language:"html",code:j})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"粘性布局",class:"section-title"},{default:e(()=>[a(" 粘性布局 ")]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 通过加上"),l("code",null,"up-sticky"),a("来使tabs滑动浮动在最顶部。 ")]),_:1}),t(n,{class:"demo-container"},{default:e(()=>[t(_,null,{default:e(()=>[t(d,{list:m(u),onClick:c},null,8,["list"])]),_:1})]),_:1}),t(s,{title:"粘性布局",language:"html",code:T})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"显示徽标",class:"section-title"},{default:e(()=>[a(" 显示徽标 ")]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 可以通过在列表对象中加入"),l("code",null,"badge"),a("来设置徽标。 ")]),_:1}),t(s,{title:"显示徽标",language:"html",code:B})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"禁用",class:"section-title"},{default:e(()=>[a(" 禁用 ")]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 可以通过在列表对象中加入"),l("code",null,"disabled = true"),a("来设置禁用。 ")]),_:1}),t(s,{title:"禁用",language:"html",code:A})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"自定义样式",class:"section-title"},{default:e(()=>[a(" 自定义样式 ")]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 通过使用"),l("code",null,"activeStyle"),a("、"),l("code",null,"inactiveStyle"),a("、"),l("code",null,"itemStyle"),a("来设置tabs的样式。 ")]),_:1}),t(s,{title:"自定义样式",language:"html",code:E})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"滑块设置背景图",class:"section-title"},{default:e(()=>[a(" 滑块设置背景图 "),t(n,{class:"version-badge"},{default:e(()=>[a(" 2.0.30 ")]),_:1})]),_:1}),t(n,{class:"section-desc"},{default:e(()=>[a(" 通过使用"),l("code",null,"lineColor"),a("来设置滑块背景图。 ")]),_:1}),t(s,{title:"滑块设置背景图",language:"html",code:O})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"tab内容自定义插槽",class:"section-title"},{default:e(()=>[a(" Tab内容自定义插槽 ")]),_:1}),t(s,{title:"Tab内容自定义插槽",language:"html",code:I})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"右侧自定义插槽",class:"section-title"},{default:e(()=>[a(" 右侧自定义插槽 ")]),_:1}),t(s,{title:"右侧自定义插槽",language:"html",code:P})]),_:1}),t(n,{class:"section"},{default:e(()=>[t(n,{id:"api",class:"section-title"},{default:e(()=>[a(" API ")]),_:1}),t(n,{id:"props",class:"subsection-title"},{default:e(()=>[a(" Props ")]),_:1}),t(n,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"duration"),l("td",null,"滑块移动一次所需的时间，单位ms"),l("td",null,"String | Number"),l("td",null,"300"),l("td",null,"-")]),l("tr",null,[l("td",null,"list"),l("td",null,"标签数组，元素为对象，如[{name: '推荐'}]"),l("td",null,"Array"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"lineColor"),l("td",null,"滑块颜色"),l("td",null,"String"),l("td",null,"#3c9cff"),l("td",null,"-")]),l("tr",null,[l("td",null,"activeStyle"),l("td",null,"菜单选择中时的样式"),l("td",null,"String | Object"),l("td",null,"{ color: '#303133' }"),l("td",null,"-")]),l("tr",null,[l("td",null,"inactiveStyle"),l("td",null,"菜单非选中时的样式"),l("td",null,"String | Object"),l("td",null,"{ color: '#606266' }"),l("td",null,"-")]),l("tr",null,[l("td",null,"lineWidth"),l("td",null,"滑块长度"),l("td",null,"String | Number"),l("td",null,"20"),l("td",null,"-")]),l("tr",null,[l("td",null,"lineHeight"),l("td",null,"滑块高度"),l("td",null,"String | Number"),l("td",null,"3"),l("td",null,"-")]),l("tr",null,[l("td",null,[a(" lineBgSize "),t(n,{class:"version-badge"},{default:e(()=>[a(" 2.0.30 ")]),_:1})]),l("td",null,"滑块背景显示大小，当滑块背景设置为图片时使用"),l("td",null,"String"),l("td",null,"cover"),l("td",null,"-")]),l("tr",null,[l("td",null,"itemStyle"),l("td",null,"菜单item的样式"),l("td",null,"String | Object"),l("td",null,"{ height: '44px' }"),l("td",null,"-")]),l("tr",null,[l("td",null,"scrollable"),l("td",null,"菜单是否可滚动"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")]),l("tr",null,[l("td",null,"current"),l("td",null,"当前选中标签的索引"),l("td",null,"String | Number"),l("td",null,"0"),l("td",null,"-")]),l("tr",null,[l("td",null,"keyName"),l("td",null,"从list元素对象中读取的键名"),l("td",null,"String"),l("td",null,"name"),l("td",null,"-")]),l("tr",null,[l("td",null,[a(" iconStyle "),t(n,{class:"version-badge"},{default:e(()=>[a(" 3.3.72 ")]),_:1})]),l("td",null,"左侧图标样式自定义"),l("td",null,"Object"),l("td",null,"{ color: '#303133' }"),l("td",null,"-")])])])]),_:1}),t(n,{id:"slot",class:"subsection-title"},{default:e(()=>[a(" Slot ")]),_:1}),t(n,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"-"),l("td",null,"整体左侧插槽")]),l("tr",null,[l("td",null,"-"),l("td",null,"整体右侧插槽")]),l("tr",null,[l("td",null,"-"),l("td",null,'自定义每个tab内容 #content="{item, keyName, index}"')])])])]),_:1}),t(n,{id:"events",class:"subsection-title"},{default:e(()=>[a(" Events ")]),_:1}),t(n,{class:"table-wrapper"},{default:e(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"click"),l("td",null,"点击标签时触发"),l("td",null,"index: 标签索引值，item: 传入的其他值（见下方类型声明）")]),l("tr",null,[l("td",null,"change"),l("td",null,"标签索引改变时触发(disabled时不会触发)"),l("td",null,"tabItem: { index: 标签索引值, ...item: 传入的其他值 }")]),l("tr",null,[l("td",null,"longPress"),l("td",null,"长按标签时触发"),l("td",null,"index: 标签索引值，item: 传入的其他值")])])])]),_:1}),t(n,{class:"mt-20rpx"},{default:e(()=>[t(s,{title:"点击事件传参类型声明",language:"typescript",code:V})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),M=N(D,[["__scopeId","data-v-4812fbd2"]]);export{M as default};
