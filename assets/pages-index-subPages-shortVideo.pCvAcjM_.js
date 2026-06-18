import{d as r,a as m,w as o,b as l,f as p,g as t,i as v,u as e,j as _,k as n,h,s as x}from"./index-C-vHpWRU.js";import{_ as s}from"./CodeBlock.WuTHDaQt.js";const g=`<template>
  <up-short-video
    :tabsList="tabsList"
    :videoList="videoList"
    :currentTab="currentTab"
    :currentVideo="currentVideo"
    @tabChange="onTabChange"
    @videoChange="onVideoChange"
    @like="onLike"
    @comment="onComment"
    @share="onShare"
    @collect="onCollect"
  >
  </up-short-video>
</template>

<script setup>
import { ref } from 'vue';

const currentTab = ref(0);
const currentVideo = ref(0);

const tabsList = ref([
  { name: '推荐' },
  { name: '关注' },
  { name: '朋友' },
  { name: '本地' }
]);

const videoList = ref([
  {
    videoUrl: 'http://qn-o.jiangruyi.com/rjtsdl.MP4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar1.jpg',
      name: '创作者1',
      desc: '这是一段视频描述'
    },
    isLiked: false,
    likeCount: 128,
    commentCount: 25,
    shareCount: 12,
    collectCount: 8,
    isCollected: false
  },
  {
    videoUrl: 'http://qn-o.jiangruyi.com/shanghai.mp4',
    progress: 0,
    bgColor: '#000',
    author: {
      avatar: '/static/avatar2.jpg',
      name: '创作者2',
      desc: '记录美好生活'
    },
    isLiked: true,
    likeCount: 863,
    commentCount: 96,
    shareCount: 32,
    collectCount: 45,
    isCollected: true
  }
]);

const onTabChange = (index) => {
  console.log('切换tab到:', index);
  currentTab.value = index;
};

const onVideoChange = (index) => {
  console.log('切换视频到:', index);
  currentVideo.value = index;
};

const onLike = ({ item, index }) => {
  console.log('点赞视频:', index);
  videoList.value[index].isLiked = !videoList.value[index].isLiked;
  videoList.value[index].likeCount += videoList.value[index].isLiked ? 1 : -1;
};

const onComment = ({ item, index }) => {
  console.log('评论视频:', index);
  uni.showToast({
    title: '评论功能',
    icon: 'none'
  });
};

const onShare = ({ item, index }) => {
  console.log('分享视频:', index);
  uni.showToast({
    title: '分享功能',
    icon: 'none'
  });
};

const onCollect = ({ item, index }) => {
  console.log('收藏视频:', index);
  videoList.value[index].isCollected = !videoList.value[index].isCollected;
  videoList.value[index].collectCount += videoList.value[index].isCollected ? 1 : -1;
};
<\/script>`,b=`<template>
  <up-short-video
    :videoList="videoList"
  >
    <!-- 自定义顶部标签栏 -->
    <template #tabs>
      <view class="custom-tabs">
        <view v-for="(item, index) in tabsList" :key="index" class="tab-item">
          {{ item.name }}
        </view>
      </view>
    </template>
    
    <!-- 自定义视频信息区域 -->
    <template #videoInfo="{ item, index }">
      <view class="custom-video-info">
        <text class="author-name">@{{ item.author.name }}</text>
        <text class="video-desc">{{ item.author.desc }}</text>
      </view>
    </template>
    
    <!-- 自定义右侧互动栏 -->
    <template #actionBar="{ item, index }">
      <view class="custom-action-bar">
        <view class="action-item" @click="handleLike(item, index)">
          <text class="icon">♥</text>
          <text class="count">{{ item.likeCount }}</text>
        </view>
      </view>
    </template>
  </up-short-video>
</template>`,f=r({__name:"shortVideo",setup(C){return(L,k)=>{const i=_,a=v,d=h,c=l("layout-default-uni"),u=l("global-ku-root");return p(),m(u,null,{default:o(()=>[t(c,null,{default:o(()=>[t(a,{class:"shortVideo-page"},{default:o(()=>[t(a,{class:"theme-default-content content__default"},{default:o(()=>[t(i,{id:"shortvideo-短视频"},{default:o(()=>[n(" ShortVideo 短视频 "),t(i,{class:"badge tip"},{default:o(()=>[n("3.5.11")]),_:1})]),_:1}),t(i,null,{default:o(()=>[n("短视频组件通常用于App中实现上下滑动切换短视频的功能，类似抖音等短视频应用的效果。")]),_:1}),t(i,{id:"平台差异说明"},{default:o(()=>[n("平台差异说明")]),_:1}),e("table",{class:"platform-table"},[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App（vue） "),e("th",{style:{"text-align":"center"}}," App（nvue） "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),t(i,{id:"基本使用"},{default:o(()=>[n("基本使用")]),_:1}),t(a,null,{default:o(()=>[t(a,null,{default:o(()=>[n("通过"),e("code",null,"tabsList"),n("(设置顶部分类标签)，"),e("code",null,"videoList"),n("(设置视频数据列表)，"),e("code",null,"currentTab"),n("(当前选中的tab索引)，"),e("code",null,"currentVideo"),n("(当前播放的视频索引)")]),_:1}),t(a,null,{default:o(()=>[n("通过各种事件监听实现交互功能，如"),e("code",null,"@tabChange"),n("(标签切换)、"),e("code",null,"@videoChange"),n("(视频切换)、"),e("code",null,"@like"),n("(点赞)等")]),_:1})]),_:1}),t(s,{title:"基本用法",language:"html",code:g}),t(i,{id:"自定义插槽示例"},{default:o(()=>[n("自定义插槽示例")]),_:1}),t(s,{title:"自定义插槽",language:"html",code:b}),t(i,{id:"演示页面源代码地址"},{default:o(()=>[n("演示页面源代码地址")]),_:1}),t(a,{class:"custom-block tip"},{default:o(()=>[t(i,{class:"custom-block-title"},{default:o(()=>[n("点击以下链接以查看演示页面的源码")]),_:1}),e("br"),t(i,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/shortVideo/shortVideo.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:o(()=>[t(d,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"},{default:o(()=>[n(" github ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),V=x(f,[["__scopeId","data-v-c53cc8e4"]]);export{V as default};
