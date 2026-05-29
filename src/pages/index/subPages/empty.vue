<template>
  <view class="empty-page">
    <view class="theme-default-content content__default">
      <text id="empty-内容为空">
        <text href="empty.html#empty-内容为空" class="header-anchor">#</text>
        Empty 内容为空
      </text>
      <text>
        该组件用于需要加载内容，但是加载的第一页数据就为空，提示一个"没有内容"的场景，
        我们精心挑选了十几个场景的图标，方便您使用。
      </text>
      <text id="平台差异说明">
        <text href="empty.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="empty.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>我们的专业设计师精心为您准备了一套精美默认图，带有图片和<code>Sketch</code>文件，您可以下载或修改后再使用：<text href="resource.html">资源下载</text></text>
      </view>
      <view>
        <view>通过<code>text</code>参数配置提示的文字内容</view>
        <view>通过<code>mode</code>(默认为<code>data</code>)参数配置要显示的图标</view>
      </view>
      <pre><code>&lt;up-empty
  mode="car"
  icon="http://cdn.uviewui.com/uview/empty/car.png"
&gt;&lt;/up-empty&gt;</code></pre>
      <text id="内置图标">
        <text href="empty.html#内置图标" class="header-anchor">#</text>
        内置图标
      </text>
      <text>这些图标已内置，直接通过<code>mode</code>参数引用即可</text>
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
              car
            </td>
            <td style="text-align: left">
              购物车为空
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              page
            </td>
            <td style="text-align: left">
              页面不存在
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              search
            </td>
            <td style="text-align: left">
              没有搜索结果
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              address
            </td>
            <td style="text-align: left">
              没有收货地址
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              wifi
            </td>
            <td style="text-align: left">
              没有WiFi
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              order
            </td>
            <td style="text-align: left">
              订单为空
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              coupon
            </td>
            <td style="text-align: left">
              没有优惠券
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              favor
            </td>
            <td style="text-align: left">
              无收藏
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              permission
            </td>
            <td style="text-align: left">
              无权限
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              history
            </td>
            <td style="text-align: left">
              无历史记录
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              news
            </td>
            <td style="text-align: left">
              无新闻列表
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              message
            </td>
            <td style="text-align: left">
              消息列表为空
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              list
            </td>
            <td style="text-align: left">
              列表为空(通用)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              data
            </td>
            <td style="text-align: left">
              数据为空(默认，通用)
            </td>
          </tr>
        </tbody>
      </table>
      <text id="右侧演示页面源代码地址">
        <text href="empty.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/empty/empty.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            &nbsp;github
          </image>
        </text>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/empty/empty.nvue" target="_blank" style="display:flex;align-items:center;margin-top:10px;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30">
            &nbsp;gitee
          </image>
        </text>
        <br>
      </view>
      <text id="api">
        <text href="empty.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="empty.html#props" class="header-anchor">#</text>
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
              icon
            </td>
            <td style="text-align: left">
              内置图标名称，或图片路径，建议绝对路径
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
              text
            </td>
            <td style="text-align: left">
              文字提示
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
              textColor
            </td>
            <td style="text-align: left">
              文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c0c4cc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              textSize
            </td>
            <td style="text-align: left">
              文字大小
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              14
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconColor
            </td>
            <td style="text-align: left">
              图标的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c0c4cc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconSize
            </td>
            <td style="text-align: left">
              图标的大小
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              90
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
              内置的图标，见上方说明
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              data
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
              图标的宽度，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              160
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
              图标的高度，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              160
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              show
            </td>
            <td style="text-align: left">
              是否显示组件
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
              marginTop
            </td>
            <td style="text-align: left">
              组件到上一个元素的间距,单位px
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
      <text id="slot">
        <text href="empty.html#slot" class="header-anchor">#</text>
        Slot
      </text>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>给组件底部传入<code>slot</code>内容</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.empty-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
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
  font-size: 16px;
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
