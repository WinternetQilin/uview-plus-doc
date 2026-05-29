<template>
  <view class="no-network-page">
    <view class="theme-default-content content__default">
      <text id="nonetwork-无网络提示">NoNetwork 无网络提示</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsC/noNetwork/noNetwork"
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
      <text>该组件无需任何配置，引入即可，内部自动处理所有功能和事件，有如下特点：</text>
      <view>
        <view>
          如果没有网络，该组件会以<code>fixed</code>定位，并且以很大的<code>z-index</code>值覆盖原来的内容。一旦有网络了，会自动隐藏该组件，实现自动化
        </view>
        <view>
          在APP上，嵌入了5+接口，可以直接打开手机的设置页面，方便用户进行网络相关的设置
        </view>
      </view>
      <view class="custom-block warning">
        <text class="custom-block-title">说明</text>
        <view>
          <view>
            应用有网络时，是不会触发本组件的，为了测试此功能，请关闭手机的数据连接以及WiFi即可
          </view>
          <view>
            由于普通的组件无法覆盖原生组件，所以本组件不适用那些有<code>video</code>，<code>map</code>等原生表现的组件的页面，可以自行使用uni的<code>cover-view</code>组件修改
          </view>
        </view>
      </view>
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
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/noNetwork/noNetwork.nvue"
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
              tips
            </td>
            <td style="text-align: left">
              没有网络时的提示语
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              哎呀，网络信号丢失
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              zIndex
            </td>
            <td style="text-align: left">
              组件的<code>z-index</code>值
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              10080
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              image
            </td>
            <td style="text-align: left">
              无网络的图片提示，可用的src地址或base64图片
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
              retry
            </td>
            <td style="text-align: left">
              用户点击页面的"重试"按钮时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              connected
            </td>
            <td style="text-align: left">
              "重试"后，有网络触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              disconnected
            </td>
            <td style="text-align: left">
              "重试"后，无网络触发
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

const basicUsageCode = `<up-no-network></up-no-network>`
</script>

<style lang="scss" scoped>
.no-network-page {
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
.custom-block.warning {
  border-left: 4px solid #e6a23c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
</style>
