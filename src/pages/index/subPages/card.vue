<template>
  <view class="card-page">
    <view class="theme-default-content content__default">
      <text id="card-卡片">
        <text href="card.html#card-卡片" class="header-anchor">#</text>
        Card 卡片
        <text href="card.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>卡片组件一般用于多个列表条目，且风格统一的场景。</text>
      <text id="平台差异说明">
        <text href="card.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              App
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              微信小程序
            </th>
            <th style="text-align:center;">
              支付宝小程序
            </th>
            <th style="text-align:center;">
              百度小程序
            </th>
            <th style="text-align:center;">
              头条小程序
            </th>
            <th style="text-align:center;">
              QQ小程序
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
        <text href="card.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>组件的头部信息可以通过参数配置，其他主体和底部的信息，需要通过<code>slot</code>传入。</text>
      <view>
        <view><code>title</code>配置标题</view>
        <view><code>sub-title</code>配置副标题</view>
      </view>
      <text id="配置卡片间距">
        <text href="card.html#配置卡片间距" class="header-anchor">#</text>
        配置卡片间距
      </text>
      <text>可以通过<code>margin</code>参数配置卡片与屏幕左右的边距，以及上下卡片之间的距离，如: <code>20rpx 30rpx</code>、<code>20rpx 30rpx 30rpx 20rpx</code>。</text>
      <text id="配置卡片左上角的缩略图">
        <text href="card.html#配置卡片左上角的缩略图" class="header-anchor">#</text>
        配置卡片左上角的缩略图
      </text>
      <text>这个缩略图是可选的，显示在卡片的左上角位置，如果配置了<code>thumb</code>参数(图片路径)，就会显示图片。</text>
      <view>
        <view><code>thumb</code>缩略图路径</view>
        <view><code>thumb-width</code>缩略图宽度，高等于宽</view>
        <view><code>thumb-circle</code>缩略图是否为圆形</view>
      </view>
      <text id="配置卡片边框">
        <text href="card.html#配置卡片边框" class="header-anchor">#</text>
        配置卡片边框
      </text>
      <text>这里说的边框，有3个：</text>
      <view>
        <view><code>border</code>配置是否显示整个卡片的外边框</view>
        <view><code>head-border-bottom</code>配置是否显示卡片内部头部的下边框</view>
        <view><code>foot-border-top</code>配置是否显示卡片内部底部的上边框</view>
      </view>
      <text id="设置内边距">
        <text href="card.html#设置内边距" class="header-anchor">#</text>
        设置内边距
      </text>
      <text>默认下，卡片内部的头部，主体，底部都有一个内边距，可以通过配置<code>padding</code>参数去覆盖：</text>
      <text id="api">
        <text href="card.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="card.html#props" class="header-anchor">#</text>
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
              title
            </td>
            <td style="text-align:left;">
              卡片标题
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
              subTitle
            </td>
            <td style="text-align:left;">
              副标题
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
              thumb
            </td>
            <td style="text-align:left;">
              缩略图路径
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
              thumbWidth
            </td>
            <td style="text-align:left;">
              缩略图宽度，高等于宽
            </td>
            <td style="text-align:left;">
              String / Number
            </td>
            <td style="text-align:left;">
              100
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              thumbCircle
            </td>
            <td style="text-align:left;">
              缩略图是否为圆形
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              margin
            </td>
            <td style="text-align:left;">
              卡片与屏幕左右的边距，以及上下卡片之间的距离
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              30rpx
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              border
            </td>
            <td style="text-align:left;">
              是否显示外边框
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              borderRadius
            </td>
            <td style="text-align:left;">
              圆角
            </td>
            <td style="text-align:left;">
              String / Number
            </td>
            <td style="text-align:left;">
              16
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              headBorderBottom
            </td>
            <td style="text-align:left;">
              是否显示头部下边框
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              footBorderTop
            </td>
            <td style="text-align:left;">
              是否显示底部上边框
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              true
            </td>
            <td style="text-align:left;">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              padding
            </td>
            <td style="text-align:left;">
              卡片内部的内边距
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              24rpx 30rpx
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              boxShadow
            </td>
            <td style="text-align:left;">
              卡片阴影
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
        </tbody>
      </table>
      <text id="slot">
        <text href="card.html#slot" class="header-anchor">#</text>
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
              default
            </td>
            <td style="text-align:left;">
              卡片主体内容
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              foot
            </td>
            <td style="text-align:left;">
              卡片底部内容
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
.card-page {
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
  border-left: 4px solid #13ce66;
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
