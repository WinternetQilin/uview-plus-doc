<template>
  <view class="grid-page">
    <view class="theme-default-content content__default">
      <text id="grid-宫格布局">
        <text href="grid.html#grid-宫格布局" class="header-anchor">#</text>
        Grid 宫格布局
      </text>
      <text>宫格组件一般用于同时展示多个同类项目的场景，可以给宫格的项目设置徽标组件(<text href="badge.html">badge</text>)，或者图标等，也可以扩展为左右滑动的轮播形式。</text>
      <text id="平台差异说明">
        <text href="grid.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="grid.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>该组件外层为<code>up-grid</code>组件包裹，通过<code>col</code>设置内部宫格的列数</view>
        <view>内部通过<code>up-grid-item</code>组件的<code>slot</code>设置宫格的内容</view>
        <view>如果不需要宫格的边框，可以设置<code>border</code>为<code>false</code></view>
      </view>
      <text id="绑定点击事件-自定义列数">
        <text href="grid.html#绑定点击事件-自定义列数" class="header-anchor">#</text>
        绑定点击事件&自定义列数
      </text>
      <text id="实现宫格的左右滑动">
        <text href="grid.html#实现宫格的左右滑动" class="header-anchor">#</text>
        实现宫格的左右滑动
      </text>
      <text>结合uni的swiper组件可以实现宫格的左右滑动，因为<code>swiper</code>特性的关系，请指定<code>swiper</code>的高度 ，否则<code>swiper</code>的高度不会被内容撑开，可以自定义<code>swiper</code>的指示器，达到更高的灵活度</text>
      <text id="右侧演示页面源代码地址">
        <text href="grid.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/grid/grid.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            &nbsp;github
          </image>
        </text>
        <br>
      </view>
      <text id="api">
        <text href="grid.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="grid-props">
        <text href="grid.html#grid-props" class="header-anchor">#</text>
        Grid Props
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
              col
            </td>
            <td style="text-align: left">
              宫格的列数
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              3
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              border
            </td>
            <td style="text-align: left">
              是否显示宫格的边框
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
              align
            </td>
            <td style="text-align: left">
              宫格的对齐方式，用于控制只有一两个宫格时的对齐场景
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              center / right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              gap
            </td>
            <td style="text-align: left">
              宫格间隔（暂不支持nvue)
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              0px
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="grid-item-props">
        <text href="grid.html#grid-item-props" class="header-anchor">#</text>
        Grid-item Props
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
              name
            </td>
            <td style="text-align: left">
              宫格的name
            </td>
            <td style="text-align: left">
              String | Number
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
              bgColor
            </td>
            <td style="text-align: left">
              宫格的背景颜色
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
        </tbody>
      </table>
      <text id="grid-event">
        <text href="grid.html#grid-event" class="header-anchor">#</text>
        Grid Event
      </text>
      <text>注意：请在<code>&lt;up-grid&gt;&lt;/up-grid&gt;</code>上监听此事件</text>
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
              点击宫格触发
            </td>
            <td style="text-align: left">
              name
            </td>
          </tr>
        </tbody>
      </table>
      <text id="grid-item-event">
        <text href="grid.html#grid-item-event" class="header-anchor">#</text>
        Grid-item Event
      </text>
      <text>注意：请在<code>&lt;up-grid-item&gt;&lt;/up-grid-item&gt;</code>上监听此事件</text>
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
              点击宫格触发
            </td>
            <td style="text-align: left">
              name
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
.grid-page {
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
