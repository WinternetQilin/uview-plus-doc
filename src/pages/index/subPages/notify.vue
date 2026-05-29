<template>
  <view class="notify-page">
    <view class="theme-default-content content__default">
      <text id="notify-消息提示">Notify 消息提示</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsB/notify/notify"
            class="iframe"
          />
        </view>
        <text
          target="_blank"
          href="https://ijry.github.io/uview-plus/text/#"
          class="open-link"
        >
          打开
        </text>
      </view>
      <text>该组件一般用于页面顶部向下滑出一个提示，尔后自动收起的场景。</text>
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
              √
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
      <text id="基本使用">基本使用</text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="ref调用">ref调用</text>
      <CodeBlock title="ref调用" language="html" :code="refUsageCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/notify/notify.nvue"
          target="_blank"
          style="display: flex; align-items: center"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="github"
            width="30"
          />
          github
        </text>
      </view>
      <text id="api">API</text>
      <text id="methods">Methods</text>
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
              类型
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              show
            </td>
            <td style="text-align: left">
              显示并加载配置
            </td>
            <td style="text-align: left">
              Handler
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              primary / success / warning /error
            </td>
            <td style="text-align: left">
              显示当前主题消息提示
            </td>
            <td style="text-align: left">
              Handler
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              关闭消息提示
            </td>
            <td style="text-align: left">
              Handler
            </td>
          </tr>
        </tbody>
      </table>
      <text id="show-methods-arguments">Show Methods Arguments</text>
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
              top
            </td>
            <td style="text-align: left">
              到顶部的距离
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              0
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              type
            </td>
            <td style="text-align: left">
              主题，primary，success，warning，error
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              primary
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              color
            </td>
            <td style="text-align: left">
              字体颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #ffffff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              bgColor
            </td>
            <td style="text-align: left">
              背景颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              message
            </td>
            <td style="text-align: left">
              展示的文字内容
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              duration
            </td>
            <td style="text-align: left">
              展示时长，为0时不消失，单位ms
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              3000
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              fontSize
            </td>
            <td style="text-align: left">
              字体大小，单位rpx
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              15
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              safeAreaInsetTop
            </td>
            <td style="text-align: left">
              是否留出顶部安全距离（状态栏高度）
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slot">Slot</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              icon
            </td>
            <td style="text-align: left">
              通知内容
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<up-notify ref="notifyRef" message="通知内容"></up-notify>`

const refUsageCode = `<template>
  <view>
    <up-button @click="showNotify">打开</up-button>
    <up-notify ref="notifyRef"></up-notify>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const notifyRef = ref(null);

const showNotify = () => {
  notifyRef.value.show({
    type: 'success',
    message: '太阳当空照',
    duration: 1000,
  });
}
<\/script>`
</script>

<style lang="scss" scoped>
.notify-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
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
pre {
  background: #f6f8fa;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.demo-model {
  position: relative;
  width: 100%;
  height: 700px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px 0;
  background-image: url(/common/iPhone13.png);
}
.model-content {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  position: relative;
  top: 33px;
}
.iframe {
  width: 100%;
  height: 100%;
}
.open-link {
  position: absolute;
  right: 20px;
  top: 60px;
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
</style>
