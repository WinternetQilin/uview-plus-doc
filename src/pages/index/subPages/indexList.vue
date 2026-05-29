<template>
  <view class="indexList-page">
    <view class="theme-default-content content__default">
      <text id="indexlist-索引列表">
        <text href="indexList.html#indexlist-索引列表" class="header-anchor">#</text>
        IndexList 索引列表
      </text>
      <text>通过折叠面板收纳内容区域</text>
      <text id="平台差异说明">
        <text href="indexList.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="indexList.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>外层包裹一个<code>index-list</code>组件，锚点通过<code>index-anchor</code>组件传入，自定义列表内容通过<code>index-item</code>嵌套使用</text>
      <view>
        <view>nvue需要将<code>index-anchor</code>写在<code>index-item</code>的外部</view>
        <view>非nvue需要将<code>index-anchor</code>嵌套在<code>index-item</code>的内部</view>
        <view>可以通过<code>index-list</code>参数自定义索引字符列表</view>
        <view>需要监听页面的onPageScroll事件，将当前滚动条高度传入<code>index-list</code>组件</view>
      </view>
      <text id="自定义导航栏">
        <text href="indexList.html#自定义导航栏" class="header-anchor">#</text>
        自定义导航栏
      </text>
      <text>默认情况下，组件的锚点是吸附在导航栏下方的，如果您修改了导航栏，比如取消导航栏、或者自定义了导航栏，就需要指定吸顶的高度，也就是<code>custom-nav-height</code>的值，注意这个值的单位为<code>px</code>：</text>
      <view>
        <view>如果自定义了导航栏，需要<code>custom-nav-height</code>设置为导航栏的高度</view>
      </view>
      <text id="右侧演示页面源代码地址">
        <text href="indexList.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/indexList/indexList.nvue" target="_blank">github</text>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/indexList/indexList.nvue" target="_blank">gitee</text>
      </view>
      <text id="indexbar-props">
        <text href="indexList.html#indexbar-props" class="header-anchor">#</text>
        IndexBar Props
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
              inactiveColor
            </td>
            <td style="text-align: left">
              右边锚点状态非激活时的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #606266
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              activeColor
            </td>
            <td style="text-align: left">
              右边锚点状态激活时的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #5677fc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              indexList
            </td>
            <td style="text-align: left">
              索引字符列表，数组
            </td>
            <td style="text-align: left">
              Array[string | number]
            </td>
            <td style="text-align: left">
              A-Z
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              sticky
            </td>
            <td style="text-align: left">
              是否开启锚点自动吸顶
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
              customNavHeight
            </td>
            <td style="text-align: left">
              自定义导航栏的高度，单位默认px
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
      <text id="indexanchor-props">
        <text href="indexList.html#indexanchor-props" class="header-anchor">#</text>
        IndexAnchor Props
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
              text
            </td>
            <td style="text-align: left">
              列表锚点文本内容
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
              color
            </td>
            <td style="text-align: left">
              列表锚点文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #606266
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              size
            </td>
            <td style="text-align: left">
              列表锚点文字大小，单位默认px
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
              bgColor
            </td>
            <td style="text-align: left">
              列表锚点背景颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #dedede
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
              列表锚点高度，单位默认px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              32
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="indexbar-events">
        <text href="indexList.html#indexbar-events" class="header-anchor">#</text>
        IndexBar Events
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
              select
            </td>
            <td style="text-align: left">
              选中右边索引字符时触发
            </td>
            <td style="text-align: left">
              index: 索引字符
            </td>
          </tr>
        </tbody>
      </table>
      <text id="indexitem-slots">
        <text href="indexList.html#indexitem-slots" class="header-anchor">#</text>
        IndexItem Slots
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
              default
            </td>
            <td style="text-align: left">
              自定义列表内容
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
.indexList-page {
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
