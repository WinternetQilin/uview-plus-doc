<template>
  <view class="shortVideo-page">
    <view class="theme-default-content content__default">
      <text id="shortvideo-短视频">
        ShortVideo 短视频
        <text class="badge tip">3.5.11</text>
      </text>
      <text>短视频组件通常用于App中实现上下滑动切换短视频的功能，类似抖音等短视频应用的效果。</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本使用">基本使用</text>
      <view>
        <view>通过<code>tabsList</code>(设置顶部分类标签)，<code>videoList</code>(设置视频数据列表)，<code>currentTab</code>(当前选中的tab索引)，<code>currentVideo</code>(当前播放的视频索引)</view>
        <view>通过各种事件监听实现交互功能，如<code>@tabChange</code>(标签切换)、<code>@videoChange</code>(视频切换)、<code>@like</code>(点赞)等</view>
      </view>
      <CodeBlock title="基本用法" language="html" :code="basicUseCode" />
      <text id="自定义插槽示例">自定义插槽示例</text>
      <CodeBlock title="自定义插槽" language="html" :code="customSlotCode" />
      <text id="演示页面源代码地址">演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/shortVideo/shortVideo.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
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
<\/script>`

const customSlotCode = `<template>
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
</template>`
</script>

<style lang="scss" scoped>
.shortVideo-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
view {
  margin: 10px 0;
  padding-left: 20px;
  view {
    margin: 5px 0;
    line-height: 1.6;
  }
}
text {
  color: #3eaf7c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e6f7ff;
  color: #1890ff;
  margin-left: 8px;
  vertical-align: middle;
}
.platform-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  th,
  td {
    border: 1px solid #e8e8e8;
    padding: 8px;
  }
  th {
    background: #f5f5f5;
  }
}
.custom-block {
  background: #f6f8fa;
  border-left: 4px solid #3eaf7c;
  padding: 12px 16px;
  margin: 10px 0;
  border-radius: 4px;
  .custom-block-title {
    font-weight: 600;
    margin: 0;
  }
}
</style>
