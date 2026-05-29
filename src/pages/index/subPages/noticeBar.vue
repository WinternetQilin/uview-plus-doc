<template>
  <view class="notice-bar-page">
    <view class="theme-default-content content__default">
      <text id="noticebar-滚动通知">NoticeBar 滚动通知</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsB/noticeBar/noticeBar"
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
      <text>该组件用于滚动通告场景，有多种模式可供选择</text>
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
      <view>
        <view>通过<code>text</code>参数设置需要滚动的内容</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="可关闭">可关闭</text>
      <text>
        通过<code>mode</code>配置为<code>closable</code>让右侧显示关闭按钮
      </text>
      <CodeBlock title="可关闭" language="html" :code="closableCode" />
      <text id="配置滚动速度和跳转">配置滚动速度和跳转</text>
      <view>
        <view><code>speed</code>可配置横向滚动速度</view>
        <view><code>url</code>可配置跳转</view>
      </view>
      <CodeBlock
        title="配置滚动速度和跳转"
        language="html"
        :code="speedUrlCode"
      />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/noticeBar/noticeBar.nvue"
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
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/noticeBar/noticeBar.nvue"
          target="_blank"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
            width="30"
          />
          gitee
        </text>
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
              text
            </td>
            <td style="text-align: left">
              显示的内容，<code>direction</code>为<code>column</code>时要求为数组，
              为<code>row</code>时要求为字符串
            </td>
            <td style="text-align: left">
              Array | String
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
              direction
            </td>
            <td style="text-align: left">
              通告滚动模式，row-横向滚动，column-竖向滚动
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              row
            </td>
            <td style="text-align: left">
              column
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              step
            </td>
            <td style="text-align: left">
              direction = row时，是否使用步进形式滚动
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
          <tr>
            <td style="text-align: left">
              icon
            </td>
            <td style="text-align: left">
              是否显示左侧的音量图标
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              volume
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              mode
            </td>
            <td style="text-align: left">
              通告模式，link-显示右箭头，closable-显示右侧关闭图标
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              link / closable
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              color
            </td>
            <td style="text-align: left">
              文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #f9ae3d
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
              #fdf6ec
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              speed
            </td>
            <td style="text-align: left">
              水平滚动速度 (px/s)
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              80
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              url
            </td>
            <td style="text-align: left">
              跳转链接
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
              click
            </td>
            <td style="text-align: left">
              点击通告栏触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              点击关闭图标时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
  <view>
    <up-notice-bar :text="text1"></up-notice-bar>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

// 创建响应式数据  
const text1 = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用');  
<\/script>`

const closableCode = `<template>
  <view>
    <up-notice-bar :text="text1" mode="closable"></up-notice-bar>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

// 创建响应式数据  
const text1 = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用');  
<\/script>`

const speedUrlCode = `<template>
  <view>
    <up-notice-bar :text="text1" mode="closable" speed="250" url="/pages/componentsB/tag/tag"></up-notice-bar>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

// 创建响应式数据  
const text1 = ref('uview-plus UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用');  
<\/script>`
</script>

<style lang="scss" scoped>
.notice-bar-page {
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
