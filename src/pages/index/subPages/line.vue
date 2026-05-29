<template>
  <view class="line-page">
    <view class="theme-default-content content__default">
      <text id="line-线条">Line 线条</text>

      <text>
        此组件一般用于显示一根线条，用于分隔内容块，有横向和竖向两种模式，且能设置0.5px线条，使用也很简单。
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
      <text>组件内部有预置的参数，直接使用即可，有如下几个参数需要了解：</text>
      <view>
        <view><code>color</code>为线条的颜色</view>
        <view><code>direction</code>为线条的方向，默认为横向</view>
        <view>
          <code>length</code>参数需要特别留意，它需要带上单位，比如设置为"50%"，"500rpx"等，在线条为横向时，表现为线条的长度；在线条为竖向时，表现为线条的高度。
        </view>
      </view>
      <CodeBlock
        title="基础使用"
        language="html"
        :code="basicUsageCode"
      />
      <text id="是否虚线">是否虚线</text>
      <view>
        <view><code>dashed</code>控制线条是否虚线：</view>
      </view>
      <CodeBlock title="是否虚线" language="html" :code="dashedCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/line/line.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/line/line.nvue"
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
              color
            </td>
            <td style="text-align: left">
              线条的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #d6d7d9
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              length
            </td>
            <td style="text-align: left">
              长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带rpx单位的值等
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              100%
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
              线条的方向，<code>row</code>-横向，<code>col</code>-竖向
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              row
            </td>
            <td style="text-align: left">
              col
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              hairline
            </td>
            <td style="text-align: left">
              是否显示细边框
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              margin
            </td>
            <td style="text-align: left">
              线条与上下左右元素的间距，字符串形式，如"30rpx"、"20rpx
              30rpx"，默认单位px
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
              dashed
            </td>
            <td style="text-align: left">
              是否虚线，false-实线，true-虚线
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
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<up-line></up-line>
	
	<!-- 自定义颜色 -->
	<up-line color="#2979ff"></up-line>
	
	<!-- 自定义线条方向 -->
	<up-line direction="col"></up-line>
	
	<!-- 自定义线条长度 -->
	<up-line length="50%"></up-line>
</template>`

const dashedCode = `<template>
	<up-line dashed></up-line>
</template>`
</script>

<style lang="scss" scoped>
.line-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
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
  background: #fef0f0;
  border-left: 4px solid #f56c6c;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.github-link {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
