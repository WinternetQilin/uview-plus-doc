<template>
  <view class="image-page">
    <view class="theme-default-content content__default">
      <text id="image-图片">
        <text href="image.html#image-图片" class="header-anchor">#</text>
        Image 图片
      </text>
      <text>此组件为uni-app的<code>image</code>组件的加强版，在继承了原有功能外，还支持淡入动画、加载中、加载失败提示、圆角值和形状等。</text>
      <text>我们推荐您在任何使用图片场景的地方，都优先考虑使用这个小巧，精致而实用的组件。</text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意：</text>
        <text>由于在<code>nvue</code>下，<code>u-image</code>名称被uni-app官方占用，在uview2中官方使用<code>u--image</code>的方式解决，uview-plus则统一将前缀改为形如<code>up-image</code>既兼容nvue也兼容vue，同时仍然保持<code>u--</code>和<code>u-</code>前缀的兼容。</text>
      </view>
      <text id="平台差异说明">
        <text href="image.html#平台差异说明" class="header-anchor">#</text>
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
      <text id="配置manifest">
        <text href="image.html#配置manifest" class="header-anchor">#</text>
        配置manifest
      </text>
      <text>在项目的manifest.json中增加mergeVirtualHostAttributes配置</text>
      <pre><code>"mp-weixin" : {
    "appid" : "",
    ...
    "mergeVirtualHostAttributes" : true
},
"mp-toutiao" : {
    "appid" : "",
    ...
    "mergeVirtualHostAttributes" : true
}</code></pre>
      <text id="基本使用">
        <text href="image.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>配置图片的<code>width</code>宽和<code>height</code>高，以及<code>src</code>路径即可使用。</text>
      <pre><code>&lt;up-image :show-loading="true" :src="src" width="80px" height="80px" @click="click"&gt;&lt;/up-image&gt;</code></pre>
      <text id="裁剪模式">
        <text href="image.html#裁剪模式" class="header-anchor">#</text>
        裁剪模式
      </text>
      <text>通过<code>mode</code>参数配置填充模式，此模式用法与uni-app的<code>image</code>组件的<code>mode</code>参数完全一致</text>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg" mode="widthFix"&gt;&lt;/up-image&gt;</code></pre>
      <text id="图片形状">
        <text href="image.html#图片形状" class="header-anchor">#</text>
        图片形状
      </text>
      <view>
        <view>通过<code>shape</code>参数设置图片的形状，<code>circle</code>为圆形，<code>square</code>为方形</view>
        <view>如果为方形时，还可以通过<code>radius</code>属性设置圆角值</view>
      </view>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg" shape="circle"&gt;&lt;/up-image&gt;</code></pre>
      <text id="懒加载">
        <text href="image.html#懒加载" class="header-anchor">#</text>
        懒加载
      </text>
      <text>注意：此功能只对微信小程序、App、百度小程序、字节跳动小程序有效，默认开启。</text>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :lazy-load="true"&gt;&lt;/up-image&gt;</code></pre>
      <text id="加载中提示">
        <text href="image.html#加载中提示" class="header-anchor">#</text>
        加载中提示
      </text>
      <text>图片加载过程中，为加载中状态(默认显示一个小图标)，可以通过<code>loading</code>自定义插槽，结合uview-plus的<code>u-loading</code>组件，实现加载的动画效果。</text>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg"&gt;
  &lt;template v-slot:loading&gt;
    &lt;up-loading-icon color="red"&gt;&lt;/up-loading-icon&gt;
  &lt;/template&gt;
&lt;/up-image&gt;</code></pre>
      <text id="加载错误提示">
        <text href="image.html#加载错误提示" class="header-anchor">#</text>
        加载错误提示
      </text>
      <text>图片加载失败时，默认显示一个错误提示图标，可以通过<code>error</code>自定义插槽，实现个性化的提示方式。</text>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg"&gt;
  &lt;template v-slot:error&gt;
    &lt;text&gt;加载失败&lt;/text&gt;
  &lt;/template&gt;
&lt;/up-image&gt;</code></pre>
      <text id="淡入效果">
        <text href="image.html#淡入效果" class="header-anchor">#</text>
        淡入效果
      </text>
      <text>可以通过<code>fade</code>参数设置是否需要淡入效果，同时可以通过<code>duration</code>参数设置过渡时间。</text>
      <pre><code>&lt;up-image src="https://cdn.uviewui.com/uview/album/1.jpg" :fade="true" duration="500"&gt;&lt;/up-image&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="image.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/image/image.nvue" target="_blank">github</text>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/image/image.nvue" target="_blank">gitee</text>
      </view>
      <text id="props">
        <text href="image.html#props" class="header-anchor">#</text>
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
              src
            </td>
            <td style="text-align: left">
              图片地址，强烈建议使用绝对或者网络路径
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
          <tr>
            <td style="text-align: left">
              mode
            </td>
            <td style="text-align: left">
              裁剪模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              aspectFill
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              width
            </td>
            <td style="text-align: left">
              宽度，单位任意，如果为数值，默认单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              300
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
              高度，单位任意，如果为数值，默认单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              225
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              shape
            </td>
            <td style="text-align: left">
              图片形状，circle-圆形，square-方形
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              square
            </td>
            <td style="text-align: left">
              square
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              radius
            </td>
            <td style="text-align: left">
              圆角，默认单位px
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
              lazyLoad
            </td>
            <td style="text-align: left">
              是否懒加载，仅微信小程序、App、百度小程序、字节跳动小程序有效
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showMenuByLongpress
            </td>
            <td style="text-align: left">
              是否开启长按图片显示识别小程序码菜单，仅微信小程序有效
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              loadingIcon
            </td>
            <td style="text-align: left">
              加载中的图标，或者小图片
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              photo
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              errorIcon
            </td>
            <td style="text-align: left">
              加载失败的图标，或者小图片
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              error-circle
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showLoading
            </td>
            <td style="text-align: left">
              是否显示加载中的图标或者自定义的slot
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
              showError
            </td>
            <td style="text-align: left">
              是否显示加载错误的图标或者自定义的slot
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
              fade
            </td>
            <td style="text-align: left">
              是否需要淡入效果
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
              webp
            </td>
            <td style="text-align: left">
              只支持网络资源，只对微信小程序有效
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
              duration
            </td>
            <td style="text-align: left">
              搭配<code>fade</code>参数的过渡时间，单位ms
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              500
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
              背景颜色，用于深色页面加载图片时，为了和背景色融合
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #f3f4f6
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slot">
        <text href="image.html#slot" class="header-anchor">#</text>
        Slot
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              loading
            </td>
            <td style="text-align: left">
              自定义加载中的提示内容
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              error
            </td>
            <td style="text-align: left">
              自定义失败的提示内容
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="image.html#events" class="header-anchor">#</text>
        Events
      </text>
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
              点击图片时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              error
            </td>
            <td style="text-align: left">
              图片加载失败时触发
            </td>
            <td style="text-align: left">
              err: 错误信息
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              load
            </td>
            <td style="text-align: left">
              图片加载成功时触发
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
.image-page {
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
