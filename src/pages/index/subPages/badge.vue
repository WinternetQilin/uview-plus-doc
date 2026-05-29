<template>
  <view class="badge-page">
    <view class="theme-default-content content__default">
      <text id="badge-徽标数">
        <text href="badge.html#badge-徽标数" class="header-anchor">#</text>
        Badge 徽标数
        <text href="badge.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>该组件一般用于图标右上角显示未读的消息数量，提示用户点击，有圆点和圆包含文字两种形式。</text>
      <text id="平台差异说明">
        <text href="badge.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="badge.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>value</code>参数定义徽标内容</view>
        <view>通过<code>type</code>设置主题。uview-plus中，所有组件的<code>type</code>参数都只有5个固定的可选值，分别是<code>primary</code>(蓝色-主色)，<code>warning</code>(黄色-警告)，<code>success</code>(绿色-成功)，<code>error</code>(红色-错误)，<code>info</code>(灰色-信息)</view>
      </view>
      <text id="设置徽标的类型为一个圆点">
        <text href="badge.html#设置徽标的类型为一个圆点" class="header-anchor">#</text>
        设置徽标的类型为一个圆点
      </text>
      <text>通过<code>isDot</code>参数设置，该形式组件没有内容，只显示一个圆点</text>
      <text id="设置数字的显示方式-overflow-ellipsis-limit">
        <text href="badge.html#设置数字的显示方式-overflow-ellipsis-limit" class="header-anchor">#</text>
        设置数字的显示方式 overflow|ellipsis|limit
      </text>
      <view>
        <view>overflow会根据max字段判断，超出显示<code>${max}+</code></view>
        <view>ellipsis会根据max判断，超出显示<code>${max}...</code></view>
        <view>limit会依据1000作为判断条件，超出1000，显示<code>${value/1000}K</code>，比如2.2k、3.34w，最多保留2位小数</view>
      </view>
      <text id="api">
        <text href="badge.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="badge.html#props" class="header-anchor">#</text>
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
              isDot
            </td>
            <td style="text-align:left;">
              不展示数字，只有一个小点
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              value
            </td>
            <td style="text-align:left;">
              展示的数字，大于 max 时显示为 ${max}+，为0且show-zero为false时隐藏
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              show
            </td>
            <td style="text-align:left;">
              组件是否显示
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              max
            </td>
            <td style="text-align:left;">
              最大值，超过最大值会显示 '{max}+'
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              99
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              type
            </td>
            <td style="text-align:left;">
              主题颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              error
            </td>
            <td style="text-align:left;">
              primary / warning / success / error / info
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              numberType
            </td>
            <td style="text-align:left;">
              设置数字显示方式
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              overflow
            </td>
            <td style="text-align:left;">
              overflow / ellipsis / limit
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              showZero
            </td>
            <td style="text-align:left;">
              当value为0时，是否显示徽标
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              bgColor
            </td>
            <td style="text-align:left;">
              背景颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              color
            </td>
            <td style="text-align:left;">
              文字颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              size
            </td>
            <td style="text-align:left;">
              字体大小
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              12
            </td>
            <td style="text-align:left;">
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
.badge-page {
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
