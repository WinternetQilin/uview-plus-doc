<template>
  <view class="pullRefresh-page">
    <view class="theme-default-content content__default">
      <text id="pullrefresh-下拉刷新">
        PullRefresh 下拉刷新
        <text class="badge tip">3.4.68</text>
      </text>
      <view class="demo-placeholder">
        <text>此处应展示 PullRefresh 下拉刷新 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsD/pullRefresh/pullRefresh"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsD/pullRefresh/pullRefresh
          </text>
        </text>
      </view>
      <text>
        pull-refresh下拉刷新组件，支持自定义下拉刷新状态、结合虚拟列表和上拉加载等功能，适用于各种需要下拉刷新的场景。
      </text>
      <text id="平台差异说明">平台差异说明</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App（vue）
            </th>
            <th style="text-align: center">
              App（nvue）
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              x
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本参数">基本参数</text>
      <view>
        <view>通过 <code>refreshing</code> 控制刷新状态</view>
        <view>通过 <code>threshold</code> 设置触发刷新的阈值</view>
        <view>通过监听 <code>refresh</code> 事件处理刷新逻辑</view>
      </view>
      <text id="用法示例">用法示例</text>
      <text id="_1-自定义下拉动画">1. 自定义下拉动画</text>
      <text>通过插槽可以自定义下拉过程中的不同状态：下拉状态、释放状态和刷新中状态</text>
      <CodeBlock title="自定义下拉动画" language="html" :code="customAnimationCode" />
      <text id="_2-结合虚拟列表">2. 结合虚拟列表</text>
      <text>与虚拟列表组件up-virtual-list结合使用，优化长列表性能</text>
      <CodeBlock title="结合虚拟列表" language="html" :code="virtualListCode" />
      <text id="_3-结合上拉加载">3. 结合上拉加载</text>
      <text>通过 <code>showLoadmore</code> 和 <code>loadmoreProps</code> 属性开启上拉加载功能</text>
      <CodeBlock title="结合上拉加载" language="html" :code="loadMoreCode" />
      <text id="自定义内容">自定义内容</text>
      <text>通过三个插槽可以完全自定义下拉刷新的各个状态：</text>
      <CodeBlock title="自定义内容" language="html" :code="customContentCode" />
      <text id="演示页面源代码地址">演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/pullRefresh/pullRefresh.vue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="github"
            width="30"
          />
          github
        </text>
        <br>
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/pullRefresh/pullRefresh.vue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="gitee"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              类型
            </th>
            <th style="text-align: left">
              默认值
            </th>
            <th style="text-align: left">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              refreshing
            </td>
            <td style="text-align: left">
              是否正在刷新
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true/false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              threshold
            </td>
            <td style="text-align: left">
              下拉刷新阈值
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              80
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              damping
            </td>
            <td style="text-align: left">
              阻尼系数
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              0.4
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              maxDistance
            </td>
            <td style="text-align: left">
              最大下拉距离
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              120
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              showLoadmore
            </td>
            <td style="text-align: left">
              是否显示加载更多
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true/false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              loadmoreProps
            </td>
            <td style="text-align: left">
              u-loadmore 组件的 props 配置
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              { status: 'loadmore', loadmoreText: '加载更多', loadingText: '正在加载...', nomoreText: '没有更多了' }
            </td>
            <td style="text-align: left" />
          </tr>
        </tbody>
      </table>
      <text id="events">Events</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              事件名
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              refresh
            </td>
            <td style="text-align: left">
              下拉刷新时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              loadmore
            </td>
            <td style="text-align: left">
              上拉加载时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              scroll
            </td>
            <td style="text-align: left">
              滚动时触发
            </td>
            <td style="text-align: left">
              滚动事件对象
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slot">Slot</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              pull
            </td>
            <td style="text-align: left">
              下拉状态插槽，参数为 { distance, threshold }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              release
            </td>
            <td style="text-align: left">
              释放状态插槽，参数为 { distance, threshold }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              refreshing
            </td>
            <td style="text-align: left">
              刷新中状态插槽
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              default
            </td>
            <td style="text-align: left">
              内容区域插槽
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const customAnimationCode = `<template>
    <up-pull-refresh
        :refreshing="refreshing"
        :threshold="80"
        @refresh="onRefresh"
    >
        <template #pull="{ distance, threshold }">
            <view class="custom-pull">
                <text>下拉距离: {{ distance }}</text>
            </view>
        </template>
        <template #release>
            <view class="custom-release">
                <text>释放刷新</text>
            </view>
        </template>
        <template #refreshing>
            <view class="custom-refreshing">
                <text>刷新中...</text>
            </view>
        </template>
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>`

const virtualListCode = `<template>
    <up-pull-refresh
        :refreshing="refreshing"
        @refresh="onRefresh"
    >
        <up-virtual-list :list="list" :item-size="50">
            <template #default="{ item }">
                <view class="list-item">{{ item }}</view>
            </template>
        </up-virtual-list>
    </up-pull-refresh>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref(Array.from({ length: 1000 }, (_, i) => i + 1));

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>`

const loadMoreCode = `<template>
    <up-pull-refresh
        :refreshing="refreshing"
        :show-loadmore="true"
        :loadmore-props="loadmoreConfig"
        @refresh="onRefresh"
        @loadmore="onLoadmore"
    >
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);
const loadmoreConfig = ref({
    status: 'loadmore',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了'
});

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}

function onLoadmore() {
    setTimeout(() => {
        list.value = [...list.value, ...[6, 7, 8]];
    }, 1000);
}
<\/script>`

const customContentCode = `<template>
    <up-pull-refresh
        :refreshing="refreshing"
        @refresh="onRefresh"
    >
        <template #pull="{ distance, threshold }">
            <view class="custom-indicator">
                <text>下拉中 {{ Math.round(distance / threshold * 100) }}%</text>
            </view>
        </template>
        <template #release>
            <view class="custom-indicator release">
                <text>释放立即刷新</text>
            </view>
        </template>
        <template #refreshing>
            <view class="custom-indicator refreshing">
                <up-loading-icon></up-loading-icon>
                <text>刷新中...</text>
            </view>
        </template>
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>

<style lang="scss" scoped>
.custom-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.custom-indicator.release {
    color: #3eaf7c;
}
.custom-indicator.refreshing {
    display: flex;
    gap: 8px;
}
<\/style>`
</script>

<style lang="scss" scoped>
.pullRefresh-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text,
text {
  margin: 20px 0 10px;
}
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  vertical-align: middle;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
table th,
table td {
  border: 1px solid #eee;
  padding: 8px;
}
view,
view {
  padding-left: 20px;
  margin: 10px 0;
}
view {
  margin: 5px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.demo-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px dashed #ccc;
}
.demo-placeholder text {
  color: #666;
  font-size: 14px;
}
.placeholder-tip {
  margin-top: 10px;
}
.placeholder-tip text {
  color: #3eaf7c;
  text-decoration: none;
}
.placeholder-tip text:hover {
  text-decoration: underline;
}
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  margin-top: 10px;
}
.github-link:hover {
  color: #3eaf7c;
}
</style>
