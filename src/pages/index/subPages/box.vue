<template>
  <view class="box-page">
    <view class="theme-default-content content__default">
      <text id="box-盒子">
        <text href="box.html#box-盒子" class="header-anchor">#</text>
        Box 盒子
        <text href="box.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>box盒子一般为左边一个盒子，右侧两个等高的半盒组成，常用于App首页座位重点突出。</text>
      <text id="平台差异说明">
        <text href="box.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
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
      <text id="基本使用">
        <text href="box.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>bgColors</code>(设置3个盒子的背景色)，<code>height</code>(盒子总高度)，<code>gap</code>(盒子间隔)</view>
        <view>通过<code>borderRadius</code>设置盒子圆角大小</view>
      </view>
      <text id="api">
        <text href="box.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="box.html#props" class="header-anchor">#</text>
        Props
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              参数
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              类型
            </th>
            <th style="text-align:left;">
              默认值
            </th>
            <th style="text-align:left;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              height
            </td>
            <td style="text-align:left;">
              高度
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              160px
            </td>
            <td style="text-align:left;" />
          </tr>
          <tr>
            <td style="text-align:left;">
              bgCorlors
            </td>
            <td style="text-align:left;">
              盒子背景色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              ['#EEFCFF', '#FCF8FF', '#FDF8F2']
            </td>
            <td style="text-align:left;" />
          </tr>
          <tr>
            <td style="text-align:left;">
              borderRadius
            </td>
            <td style="text-align:left;">
              圆角
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              6px
            </td>
            <td style="text-align:left;" />
          </tr>
          <tr>
            <td style="text-align:left;">
              gap
            </td>
            <td style="text-align:left;">
              间隔
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              15px
            </td>
            <td style="text-align:left;" />
          </tr>
        </tbody>
      </table>
      <text id="slot">
        <text href="box.html#slot" class="header-anchor">#</text>
        Slot
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              名称
            </th>
            <th style="text-align:left;">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              left
            </td>
            <td style="text-align:left;">
              左侧
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              rightTop
            </td>
            <td style="text-align:left;">
              右上
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              rightBottom
            </td>
            <td style="text-align:left;">
              右下
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
.box-page {
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
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
</style>
