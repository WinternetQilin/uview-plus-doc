<template>
  <view class="swiper-page">
    <view class="theme-default-content content__default">
      <text id="swiper-轮播图">
        Swiper 轮播图
      </text>
      <text>该组件一般用于导航轮播，广告展示等场景,可开箱即用，具有如下特点：</text>
      <view>
        <view>自定义指示器模式，可配置指示器样式</view>
        <view>3D轮播图效果，满足不同的开发需求</view>
        <view>可配置显示标题，涵盖不同的应用场景</view>
        <view>具有设置加载状态和嵌入视频的能力，功能齐全丰富</view>
      </view>
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
      <text>通过<code>list</code>参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：</text>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="带标题">带标题</text>
      <text>添加<code>showTitle</code>属性以展示标题，此时<code>list</code>的参数应为一个对象：</text>
      <CodeBlock title="带标题" language="html" :code="titleCode" />
      <text id="带指示器">带指示器</text>
      <text>通过<code>indicator</code>属性添加指示器，例如：</text>
      <CodeBlock title="带指示器" language="html" :code="indicatorCode" />
      <text id="加载中">加载中</text>
      <text>通过添加<code>loading</code>属性达到加载中的状态，例如：</text>
      <CodeBlock title="加载中" language="html" :code="loadingCode" />
      <text id="插槽自定义内容">插槽自定义内容</text>
      <text>通过<code>list</code>参数传入轮播图列表值，该值为一个数组，键值为图片路径，例如：</text>
      <CodeBlock title="插槽自定义内容" language="html" :code="slotCode" />
      <text id="嵌入视频">嵌入视频</text>
      <text>我们提供了嵌入视频的能力，为避免资源浪费，在您切换轮播的时候视频会停止播放，你可以设置<code>poster</code>指定视频封面，案例如下：</text>
      <CodeBlock title="嵌入视频" language="html" :code="videoCode" />
      <text id="指定类型">指定类型 <text class="badge tip">2.0.30</text></text>
      <text>默认会根据链接自动判断<code>swiper-item</code>类型，但是在极端情况下可能会不准确，所以我们提供了指定<code>item</code>的类型，通过设置<code>type</code>为<code>video</code>或<code>image</code>即可：</text>
      <CodeBlock title="指定类型" language="html" :code="typeCode" />
      <text id="自定义指示器">自定义指示器</text>
      <text>如您需要以指示点或数字形式来自定义指示器，请参考如下案例：</text>
      <CodeBlock title="自定义指示器" language="html" :code="customIndicatorCode" />
      <text id="卡片式轮播">卡片式轮播</text>
      <text>在实际开发中，普通的轮播或许不能满足您的开发需求，<code>swiper</code>组件提供了卡片式轮播的api，您可以参考以下案例实现此功能</text>
      <CodeBlock title="卡片式轮播" language="html" :code="cardCode" />
      <text id="控制轮播效果">控制轮播效果</text>
      <view>
        <view><code>autoplay</code>-是否自动轮播，默认为<code>true</code></view>
        <view><code>interval</code>-前后两张图自动轮播的时间间隔</view>
        <view><code>duration</code>-切换一张轮播图所需的时间</view>
        <view><code>circular</code>-是否衔接滑动，即到最后一张时，是否可以直接转到第一张</view>
      </view>
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/swiper/swiper.nvue" target="_blank" style="display:flex;align-items:center;">
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
<\/script>`

const titleCode = `<template>
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
<\/script>`

const indicatorCode = `<template>
  <up-swiper :list="list" indicator></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`

const loadingCode = `<template>
  <up-swiper :list="list" loading></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`

const slotCode = `<template>
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
<\/script>`

const videoCode = `<template>
  <up-swiper :list="list" @click="click" indicator></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([{
  type: 'video',
  url: 'https://cdn.uviewui.com/uview/swiper/video.mp4',
  poster: 'https://cdn.uviewui.com/uview/swiper/1.jpg'
}]);
<\/script>`

const typeCode = `<template>
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
<\/script>`

const customIndicatorCode = `<template>
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
<\/script>`

const cardCode = `<template>
  <up-swiper :list="list" effect3d></up-swiper>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  'https://cdn.uviewui.com/uview/swiper/1.jpg',
  'https://cdn.uviewui.com/uview/swiper/2.jpg',
  'https://cdn.uviewui.com/uview/swiper/3.jpg'
]);
<\/script>`
</script>

<style lang="scss" scoped>
.swiper-page {
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
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
