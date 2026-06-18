import{d,a as r,w as e,b as a,f as _,g as t,i as f,u as o,j as m,k as l,h as g,s as b}from"./index-Bt5U6C3y.js";import{_ as c}from"./CodeBlock.C3t72IAG.js";const x=`<template>
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([{
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`,k=`<template>
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([{
  text: '收藏',
  style: {
    backgroundColor: '#E9A23B'
  }
}, {
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`,w=`<template>
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options1" @click="click">
      </up-swipe-action-item>
      <up-swipe-action-item :options="options2" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options1 = ref([{
  text: '标记',
  style: {
    backgroundColor: '#3EAF7C'
  }
}]);

const options2 = ref([{
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`,h=d({__name:"swipeAction",setup(y){return(v,C)=>{const n=m,i=f,s=g,u=a("layout-default-uni"),p=a("global-ku-root");return _(),r(p,null,{default:e(()=>[t(u,null,{default:e(()=>[t(i,{class:"swipeaction-page"},{default:e(()=>[t(i,{class:"theme-default-content content__default"},{default:e(()=>[t(n,{id:"swipeaction-滑动单元格"},{default:e(()=>[l(" SwipeAction 滑动单元格 ")]),_:1}),t(n,null,{default:e(()=>[l("该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。")]),_:1}),t(i,{class:"custom-block warning"},{default:e(()=>[t(n,{class:"custom-block-title"},{default:e(()=>[l("注意")]),_:1}),t(n,null,{default:e(()=>[l(" 如果把该组件通过v-for用于左滑删除的列表，请保证循环的"),o("code",null,":key"),l("是一个唯一值，可以用数据的id或者title替代。 不能是数组循环的index，否则删除的时候，可能会出现数据错乱 ")]),_:1})]),_:1}),t(n,{id:"平台差异说明"},{default:e(()=>[l("平台差异说明")]),_:1}),o("table",{class:"platform-table"},[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}}," App（vue） "),o("th",{style:{"text-align":"center"}}," App（nvue） "),o("th",{style:{"text-align":"center"}}," H5 "),o("th",{style:{"text-align":"center"}}," 小程序 ")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ ")])])]),t(n,{id:"基本使用"},{default:e(()=>[l("基本使用")]),_:1}),t(i,null,{default:e(()=>[t(i,null,{default:e(()=>[l("通过slot传入内部内容即可，可以将"),o("code",null,"v-for"),l('的"index"索引值传递给'),o("code",null,"index"),l("参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)")]),_:1}),t(i,null,{default:e(()=>[l("内部的按钮通过"),o("code",null,"options"),l("参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，"),o("strong",null,"请勿配置宽高等属性"),l("。")]),_:1})]),_:1}),t(c,{title:"基本使用",language:"html",code:x}),t(n,{id:"多个按钮并列"},{default:e(()=>[l("多个按钮并列")]),_:1}),t(i,null,{default:e(()=>[t(i,null,{default:e(()=>[l("通过添加"),o("code",null,"options"),l("的值，达到多个并列的效果")]),_:1})]),_:1}),t(c,{title:"多个按钮并列",language:"html",code:k}),t(n,{id:"组合使用"},{default:e(()=>[l("组合使用")]),_:1}),t(i,null,{default:e(()=>[t(i,null,{default:e(()=>[l("通过增设"),o("code",null,"options"),l("的"),o("code",null,"options"),l("达成组合效果")]),_:1})]),_:1}),t(c,{title:"组合使用",language:"html",code:w}),t(n,{id:"右侧演示页面源代码地址"},{default:e(()=>[l("右侧演示页面源代码地址")]),_:1}),t(i,{class:"custom-block tip"},{default:e(()=>[t(n,{class:"custom-block-title"},{default:e(()=>[l("点击以下链接以查看右侧演示页面的源码")]),_:1}),o("br"),t(n,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/swipeAction/swipeAction.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:e(()=>[t(s,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:e(()=>[l(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),F=b(h,[["__scopeId","data-v-7134eceb"]]);export{F as default};
