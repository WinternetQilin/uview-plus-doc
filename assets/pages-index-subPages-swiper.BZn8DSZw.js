import{d,a as r,w as i,b as c,f as w,g as e,i as m,u as l,j as f,k as t,h as v,s as _}from"./index-Bt5U6C3y.js";import{_ as p}from"./CodeBlock.C3t72IAG.js";const g=`<template>
  <up-swiper :list="list" @click="click"></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);

const click = (index) => {
  console.log('点击了第' + index + '张图片');
}
<\/script>`,h=`<template>
  <up-swiper :list="list" showTitle></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([{
  image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
  title: '身无彩凤双飞翼，心有灵犀一点通'
}, {
  image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
  title: '身无彩凤双飞翼，心有灵犀一点通'
}, {
  image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
  title: '身无彩凤双飞翼，心有灵犀一点通'
}]);
<\/script>`,x=`<template>
  <up-swiper :list="list" indicator></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`,b=`<template>
  <up-swiper :list="list" loading></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`,j=`<template>
  <up-swiper :list="list" @click="click">
    <template #default>
      <view class="swiper-item">
        <text>自定义内容</text>
      </view>
    </template>
  </up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);

const click = (index) => {
  console.log('点击了第' + index + '张图片');
}
<\/script>`,y=`<template>
  <up-swiper :list="list" @click="click" indicator></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([{
  type: 'video',
  url: 'https://cdn.uviewui.com/uview/swiper/video.mp4',
  poster: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
}]);
<\/script>`,k=`<template>
  <up-swiper :list="list"></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([{
  type: 'video',
  url: 'https://cdn.uviewui.com/uview/swiper/video.mp4',
  poster: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
}, {
  type: 'image',
  image: 'https://cdn.uviewui.com/uview/swiper/2.jpg'
}]);
<\/script>`,C=`<template>
  <up-swiper :list="list" indicatorActiveColor="#ff0000">
    <view slot="indicator" class="indicator">
      <view v-for="(item, index) in list" :key="index" class="indicator-item" :class="{ active: currentIndex === index }">
      </view>
    </view>
  </up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
const currentIndex = ref(0);
<\/script>`,I=`<template>
  <up-swiper :list="list" effect3d></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`,V=d({__name:"swiper",setup(A){return(B,N)=>{const u=f,s=m,o=v,n=c("layout-default-uni"),a=c("global-ku-root");return w(),r(a,null,{default:i(()=>[e(n,null,{default:i(()=>[e(s,{class:"swiper-page"},{default:i(()=>[e(s,{class:"theme-default-content content__default"},{default:i(()=>[e(u,{id:"swiper-轮播图"},{default:i(()=>[t(" Swiper 轮播图 ")]),_:1}),e(u,null,{default:i(()=>[t("该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：")]),_:1}),e(s,null,{default:i(()=>[e(s,null,{default:i(()=>[t("自定义指示器模式，可配置指示器样式")]),_:1}),e(s,null,{default:i(()=>[t("3D轮播图效果，满足不同的开发需求")]),_:1}),e(s,null,{default:i(()=>[t("可配置显示标题，涵盖不同的应用场景")]),_:1}),e(s,null,{default:i(()=>[t("具有设置加载状态和嵌入视频的能力，功能齐全丰富")]),_:1})]),_:1}),e(u,{id:"平台差异说明"},{default:i(()=>[t("平台差异说明")]),_:1}),l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),e(u,{id:"基本使用"},{default:i(()=>[t("基本使用")]),_:1}),e(u,null,{default:i(()=>[t("通过"),l("code",null,"list"),t("参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：")]),_:1}),e(p,{title:"基本使用",language:"html",code:g}),e(u,{id:"带标题"},{default:i(()=>[t("带标题")]),_:1}),e(u,null,{default:i(()=>[t("添加"),l("code",null,"showTitle"),t("属性以展示标题，此时"),l("code",null,"list"),t("的参数应为一个对象：")]),_:1}),e(p,{title:"带标题",language:"html",code:h}),e(u,{id:"带指示器"},{default:i(()=>[t("带指示器")]),_:1}),e(u,null,{default:i(()=>[t("通过"),l("code",null,"indicator"),t("属性添加指示器，例如：")]),_:1}),e(p,{title:"带指示器",language:"html",code:x}),e(u,{id:"加载中"},{default:i(()=>[t("加载中")]),_:1}),e(u,null,{default:i(()=>[t("通过添加"),l("code",null,"loading"),t("属性达到加载中的状态，例如：")]),_:1}),e(p,{title:"加载中",language:"html",code:b}),e(u,{id:"插槽自定义内容"},{default:i(()=>[t("插槽自定义内容")]),_:1}),e(u,null,{default:i(()=>[t("通过"),l("code",null,"list"),t("参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：")]),_:1}),e(p,{title:"插槽自定义内容",language:"html",code:j}),e(u,{id:"嵌入视频"},{default:i(()=>[t("嵌入视频")]),_:1}),e(u,null,{default:i(()=>[t("我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置"),l("code",null,"poster"),t("指定视频封面，案例如下：")]),_:1}),e(p,{title:"嵌入视频",language:"html",code:y}),e(u,{id:"指定类型"},{default:i(()=>[t("指定类型 "),e(u,{class:"badge tip"},{default:i(()=>[t("2.0.30")]),_:1})]),_:1}),e(u,null,{default:i(()=>[t("默认会根据链接自动判断"),l("code",null,"swiper-item"),t("类型，但是在极端情况下可能会不准确，所以我们提供了指定"),l("code",null,"item"),t("的类型，通过设置"),l("code",null,"type"),t("为"),l("code",null,"video"),t("或"),l("code",null,"image"),t("即可：")]),_:1}),e(p,{title:"指定类型",language:"html",code:k}),e(u,{id:"自定义指示器"},{default:i(()=>[t("自定义指示器")]),_:1}),e(u,null,{default:i(()=>[t("如您需要以指示点或数字形式来自定义指示器，请参考如下案例：")]),_:1}),e(p,{title:"自定义指示器",language:"html",code:C}),e(u,{id:"卡片式轮播"},{default:i(()=>[t("卡片式轮播")]),_:1}),e(u,null,{default:i(()=>[t("在实际开发中，普通的轮播或许不能满足您的开发需求，"),l("code",null,"swiper"),t("组件提供了卡片式轮播的api，您可以参考以下案例实现此功能")]),_:1}),e(p,{title:"卡片式轮播",language:"html",code:I}),e(u,{id:"控制轮播效果"},{default:i(()=>[t("控制轮播效果")]),_:1}),e(s,null,{default:i(()=>[e(s,null,{default:i(()=>[l("code",null,"autoplay"),t("-是否自动轮播，默认为"),l("code",null,"true")]),_:1}),e(s,null,{default:i(()=>[l("code",null,"interval"),t("-前后两张图自动轮播的时间间隔")]),_:1}),e(s,null,{default:i(()=>[l("code",null,"duration"),t("-切换一张轮播图所需的时间")]),_:1}),e(s,null,{default:i(()=>[l("code",null,"circular"),t("-是否衔接滑动，即到最后一张时，是否可以直接转到第一张")]),_:1})]),_:1}),e(u,{id:"右侧演示页面源代码地址"},{default:i(()=>[t("右侧演示页面源代码地址")]),_:1}),e(s,{class:"custom-block tip"},{default:i(()=>[e(u,{class:"custom-block-title"},{default:i(()=>[t("点击以下链接以查看右侧演示页面的源码")]),_:1}),l("br"),e(u,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/swiper/swiper.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:i(()=>[e(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:i(()=>[t(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),$=_(V,[["__scopeId","data-v-81134e89"]]);export{$ as default};
