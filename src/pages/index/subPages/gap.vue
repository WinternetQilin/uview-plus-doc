<template>
  <view class="gap-page">
    <view class="theme-default-content content__default">
      <text id="gap-间隔槽">
        <text href="gap.html#gap-间隔槽" class="header-anchor">#</text>
        Gap 间隔槽
      </text>
      <text>该组件一般用于内容块之间的用一个灰色块隔开的场景，方便用户风格统一，减少工作量</text>
      <text id="平台差异说明">
        <text href="gap.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
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
      <text id="基本使用">
        <text href="gap.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>直接引入即可使用</text>
      <view>
        <view>通过<code>height</code>配置高度，单位px</view>
        <view>通过<code>bgColor</code>配置背景颜色</view>
      </view>
      <pre><code>&lt;up-gap height="80" bgColor="#bbb"&gt;&lt;/up-gap&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="gap.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/gap/gap.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            &nbsp;github
          </image>
        </text>
        <br>
      </view>
      <text id="api">
        <text href="gap.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="gap.html#props" class="header-anchor">#</text>
        Props
      </text>
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
              bgColor
            </td>
            <td style="text-align: left">
              背景颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              transparent(背景透明)
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              height
            </td>
            <td style="text-align: left">
              间隔槽高度，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              20
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              marginTop
            </td>
            <td style="text-align: left">
              与前一个元素的距离，单位px
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
              marginBottom
            </td>
            <td style="text-align: left">
              与后一个元素的距离，单位px
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
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.gap-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
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
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
</style>
