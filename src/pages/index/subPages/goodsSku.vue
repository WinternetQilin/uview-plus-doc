<template>
  <view class="goods-sku-page">
    <view class="theme-default-content content__default">
      <text id="goodssku-商品规格选择">
        <text href="goodsSku.html#goodssku-商品规格选择" class="header-anchor">#</text>
        GoodsSku 商品规格选择
        <text class="badge tip">3.5.22</text>
      </text>
      <text>商品规格选择组件，用于电商场景中选择商品的不同规格和数量。</text>
      <text id="使用场景">
        <text href="goodsSku.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>电商商品详情页中选择商品规格（如颜色、尺寸等）</view>
        <view>展示商品不同规格对应的价格和库存</view>
        <view>控制商品购买数量</view>
      </view>
      <text id="平台差异说明">
        <text href="goodsSku.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="goodsSku.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>goodsInfo</code>设置商品基本信息（图片、价格、库存等）</view>
        <view>通过<code>skuTree</code>设置规格树形结构</view>
        <view>通过<code>skuList</code>设置具体规格组合及其价格、库存等信息</view>
      </view>
      <text id="自定义最大购买数量">
        <text href="goodsSku.html#自定义最大购买数量" class="header-anchor">#</text>
        自定义最大购买数量
      </text>
      <text>通过<code>maxBuy</code>参数设置最大购买数量，默认为999。</text>
      <text id="自定义确认按钮文字">
        <text href="goodsSku.html#自定义确认按钮文字" class="header-anchor">#</text>
        自定义确认按钮文字
      </text>
      <text>通过<code>confirmText</code>参数设置确认按钮的文字内容。</text>
      <text id="页面内联模式">
        <text href="goodsSku.html#页面内联模式" class="header-anchor">#</text>
        页面内联模式
      </text>
      <text>通过<code>pageInline</code>参数启用页面内联模式，组件将直接显示在页面中而不是弹窗形式。</text>
      <text id="右侧演示页面源代码地址">
        <text href="goodsSku.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/goodsSku/goodsSku.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            &nbsp;github
          </image>
        </text>
        <br>
      </view>
      <text id="api">
        <text href="goodsSku.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="goodsSku.html#props" class="header-anchor">#</text>
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
              goodsInfo
            </td>
            <td style="text-align: left">
              商品信息，包含图片、价格、库存等
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              {}
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              skuTree
            </td>
            <td style="text-align: left">
              SKU树形结构，定义规格分类和选项
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              skuList
            </td>
            <td style="text-align: left">
              SKU列表，包含各规格组合的价格、库存等信息
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              maxBuy
            </td>
            <td style="text-align: left">
              最大购买数量
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              999
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirmText
            </td>
            <td style="text-align: left">
              确认按钮文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              确定
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              closeable
            </td>
            <td style="text-align: left">
              是否显示关闭弹窗按钮
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
              pageInline
            </td>
            <td style="text-align: left">
              是否页面内联模式
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
        </tbody>
      </table>
      <text id="events">
        <text href="goodsSku.html#events" class="header-anchor">#</text>
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
              open
            </td>
            <td style="text-align: left">
              弹窗打开时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              弹窗关闭时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirm
            </td>
            <td style="text-align: left">
              点击确认按钮时触发
            </td>
            <td style="text-align: left">
              { sku: Object, goodsInfo: Object, num: Number, selectedText: String }
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slots">
        <text href="goodsSku.html#slots" class="header-anchor">#</text>
        Slots
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
              trigger
            </td>
            <td style="text-align: left">
              触发弹窗的元素
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              header
            </td>
            <td style="text-align: left">
              弹窗头部区域
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
.goods-sku-page {
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
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  vertical-align: middle;
  margin-left: 10px;
}
.badge.tip {
  background: #e6f7ff;
  color: #1890ff;
  border: 1px solid #91d5ff;
}
</style>
