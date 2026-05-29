<template>
  <view class="avatar-page">
    <view class="theme-default-content content__default">
      <text id="avatar-头像">
        <text href="avatar.html#avatar-头像" class="header-anchor">#</text>
        Avatar 头像
        <text href="avatar.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>本组件一般用于展示头像的地方，如个人中心，或者评论列表页的用户头像展示等场所。</text>
      <text id="平台差异说明">
        <text href="avatar.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="avatar.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>src</code>指定头像的路径即可简单使用，如果传递了<code>text</code>参数，<code>text</code>将会优先起作用</text>
      <text><strong>注意：</strong> 请保证传递给<code>src</code>的是绝对地址，而不是相对地址，为什么呢？因为传入<code>avatar</code>组件的相对地址，是相对于组件的，而不是父组件(页面)，所以相对址可能会出错。</text>
      <text id="头像形状">
        <text href="avatar.html#头像形状" class="header-anchor">#</text>
        头像形状
      </text>
      <view>
        <view><code>shape</code>参数指定头像的形状，取值<code>circle</code>为圆形，取值<code>square</code>为圆角方形</view>
      </view>
      <text id="图标头像">
        <text href="avatar.html#图标头像" class="header-anchor">#</text>
        图标头像
      </text>
      <view>
        <view><code>icon</code>参数指定头像的图标，图标可参考<code>icon</code>组件</view>
      </view>
      <text id="文字头像-自动背景色">
        <text href="avatar.html#文字头像-自动背景色" class="header-anchor">#</text>
        文字头像（自动背景色）
      </text>
      <view>
        <view><code>randomBgColor</code>参数开启头像的自动背景色</view>
      </view>
      <text id="默认头像">
        <text href="avatar.html#默认头像" class="header-anchor">#</text>
        默认头像
      </text>
      <text>如果头像加载失败，导致加载图片失败，将会显示一个默认的灰色头像</text>
      <text id="头像组">
        <text href="avatar.html#头像组" class="header-anchor">#</text>
        头像组
      </text>
      <text>使用<code>up-avatar-group</code>实现头像组</text>
      <text id="api">
        <text href="avatar.html#api" class="header-anchor">#</text>
        Props
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              属性名
            </th>
            <th style="text-align:center;">
              说明
            </th>
            <th style="text-align:center;">
              类型
            </th>
            <th style="text-align:center;">
              默认值
            </th>
            <th style="text-align:center;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              src
            </td>
            <td>头像路径</td>
            <td style="text-align:center;">
              string
            </td>
            <td style="text-align:center;">
              -
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              shape
            </td>
            <td>头像形状</td>
            <td style="text-align:center;">
              string
            </td>
            <td style="text-align:center;">
              circle
            </td>
            <td>circle / square</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              size
            </td>
            <td>头像尺寸</td>
            <td style="text-align:center;">
              number / string
            </td>
            <td style="text-align:center;">
              80
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              icon
            </td>
            <td>图标</td>
            <td style="text-align:center;">
              string
            </td>
            <td style="text-align:center;">
              -
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              text
            </td>
            <td>文字</td>
            <td style="text-align:center;">
              string
            </td>
            <td style="text-align:center;">
              -
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              randomBgColor
            </td>
            <td>随机背景色</td>
            <td style="text-align:center;">
              boolean
            </td>
            <td style="text-align:center;">
              false
            </td>
            <td>true / false</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              fontSize
            </td>
            <td>文字或图标大小</td>
            <td style="text-align:center;">
              number / string
            </td>
            <td style="text-align:center;">
              40
            </td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text>AvatarGroup Props</text>
      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              属性名
            </th>
            <th style="text-align:center;">
              说明
            </th>
            <th style="text-align:center;">
              类型
            </th>
            <th style="text-align:center;">
              默认值
            </th>
            <th style="text-align:center;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              urls
            </td>
            <td>头像组图片数组</td>
            <td style="text-align:center;">
              array
            </td>
            <td style="text-align:center;">
              []
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              size
            </td>
            <td>头像尺寸</td>
            <td style="text-align:center;">
              number / string
            </td>
            <td style="text-align:center;">
              40
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              gap
            </td>
            <td>头像间距</td>
            <td style="text-align:center;">
              number
            </td>
            <td style="text-align:center;">
              0.5
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              maxCount
            </td>
            <td>显示的最大头像数量</td>
            <td style="text-align:center;">
              number
            </td>
            <td style="text-align:center;">
              5
            </td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              shape
            </td>
            <td>头像形状</td>
            <td style="text-align:center;">
              string
            </td>
            <td style="text-align:center;">
              circle
            </td>
            <td>circle / square</td>
          </tr>
        </tbody>
      </table>
      <text>Events</text>
      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              事件名
            </th>
            <th style="text-align:center;">
              说明
            </th>
            <th style="text-align:center;">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              click
            </td>
            <td>点击头像时触发</td>
            <td>-</td>
          </tr>
          <tr>
            <td style="text-align:center;">
              error
            </td>
            <td>图片加载失败时触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.avatar-page {
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
