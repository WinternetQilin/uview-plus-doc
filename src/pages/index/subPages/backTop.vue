<template>
  <view class="backTop-page">
    <view class="theme-default-content content__default">
      <text id="backtop-返回顶部">
        <text href="backTop.html#backtop-返回顶部" class="header-anchor">#</text>
        BackTop 返回顶部
        <text href="backTop.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>该组件一个用于长页面，滑动一定距离后，出现返回顶部按钮，方便快速返回顶部的场景。</text>
      <text id="平台差异说明">
        <text href="backTop.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="backTop.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>由于返回顶部需要实时监听滚动条的位置，从而判断返回的按钮该出现还是隐藏，由于组件无法得知页面的滚动条信息，只能在<strong>页面</strong>的<code>onPageScroll</code>生命周期中判断滚动的距离，然后通过v-model绑定给组件的<code>scrollTop</code>属性。</text>
      <text id="改变返回顶部按钮的出现时机">
        <text href="backTop.html#改变返回顶部按钮的出现时机" class="header-anchor">#</text>
        改变返回顶部按钮的出现时机
      </text>
      <text>可以通过<code>top</code>参数，修改页面滚动多少距离时，出现返回顶部的按钮</text>
      <text id="自定义返回顶部的图标和提示">
        <text href="backTop.html#自定义返回顶部的图标和提示" class="header-anchor">#</text>
        自定义返回顶部的图标和提示
      </text>
      <view>
        <view>通过<code>icon</code>修改返回顶部按钮的图标，可以是uview-plus内置的图标，或者图片路径</view>
        <view>通过<code>text</code>参数修改返回顶部按钮的文字提示信息，如果需要修改文字的颜色和大小，可以通过<code>customStyle</code>参数</view>
      </view>
      <text id="其他自定义样式">
        <text href="backTop.html#其他自定义样式" class="header-anchor">#</text>
        其他自定义样式
      </text>
      <view>
        <view>通过<code>iconStyle</code>参数自定义图标的样式，比如颜色，大小等</view>
        <view>通过<code>customStyle</code>修改返回按钮的背景颜色，大小等</view>
        <view>通过<code>mode</code>修改按钮的形状，<code>circle</code>为圆形，<code>square</code>为方形</view>
      </view>
      <text>注意：如果通过<code>icon</code>参数传入图片路径的话，需要通过<code>iconStyle</code>参数设置图片的<code>width</code>和<code>height</code>属性</text>
      <text id="api">
        <text href="backTop.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="backTop.html#props" class="header-anchor">#</text>
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
              mode
            </td>
            <td style="text-align:left;">
              按钮形状
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              circle
            </td>
            <td style="text-align:left;">
              square
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              icon
            </td>
            <td style="text-align:left;">
              uview-plus内置图标名称，或图片路径
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              arrow-upward
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              text
            </td>
            <td style="text-align:left;">
              返回顶部按钮的提示文字
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
              duration
            </td>
            <td style="text-align:left;">
              返回顶部过程中的过渡时间，单位ms
            </td>
            <td style="text-align:left;">
              String | Number
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
              scrollTop
            </td>
            <td style="text-align:left;">
              页面滚动距离
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              0
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              top
            </td>
            <td style="text-align:left;">
              滚动条距离顶部多少时显示组件
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              400
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              bottom
            </td>
            <td style="text-align:left;">
              到顶部的距离
            </td>
            <td style="text-align:left;">
              String | Number
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
              right
            </td>
            <td style="text-align:left;">
              到右边的距离
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              40
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              iconStyle
            </td>
            <td style="text-align:left;">
              图标样式，对象形式
            </td>
            <td style="text-align:left;">
              Object
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
              customStyle
            </td>
            <td style="text-align:left;">
              自定义样式，对象形式
            </td>
            <td style="text-align:left;">
              Object
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
              zIndex
            </td>
            <td style="text-align:left;">
              层级
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              10090
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text>Events</text>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              事件名
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              click
            </td>
            <td style="text-align:left;">
              点击返回顶部按钮时触发
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
.backTop-page {
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
