<template>
  <view class="cascader-page">
    <view class="theme-default-content content__default">
      <text id="cascader-级联选择器">
        <text href="cascader.html#cascader-级联选择器" class="header-anchor">#</text>
        Cascader 级联选择器
        <text class="badge tip">3.5.30</text>
        <text href="cascader.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>级联选择器，用于选择多级关联数据，如省市区、商品分类等。</text>
      <text id="使用场景">
        <text href="cascader.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>需要从一组相关联的数据集合中进行选择，例如省市区、公司部门、商品分类等</view>
        <view>支持无限级联，可配置任意层级</view>
        <view>支持自定义字段名，适应不同的数据结构</view>
      </view>
      <text id="平台差异说明">
        <text href="cascader.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="cascader.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过 <code>data</code> 设置级联数据</view>
        <view>通过 <code>v-model</code> 绑定选中的值</view>
        <view>通过 <code>v-model:show</code> 控制组件显示与隐藏</view>
      </view>
      <text id="设置默认值">
        <text href="cascader.html#设置默认值" class="header-anchor">#</text>
        设置默认值
      </text>
      <text>通过 <code>v-model</code> 可以设置默认选中值。</text>
      <text id="自定义字段名">
        <text href="cascader.html#自定义字段名" class="header-anchor">#</text>
        自定义字段名
      </text>
      <text>通过 <code>value-key</code>、<code>label-key</code>、<code>children-key</code> 可自定义数据字段名。</text>
      <text id="垂直头部及单列选项">
        <text href="cascader.html#垂直头部及单列选项" class="header-anchor">#</text>
        垂直头部及单列选项
      </text>
      <text>如果选项的文案较长，可以配置headerDirection="column"和:optionsCols="1"来展示</text>
      <text id="自动关闭">
        <text href="cascader.html#自动关闭" class="header-anchor">#</text>
        自动关闭
      </text>
      <text>通过 <code>auto-close</code> 设置是否在选择最后一级时自动关闭并触发 confirm 事件。</text>
      <text id="api">
        <text href="cascader.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="cascader.html#props" class="header-anchor">#</text>
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
              show
            </td>
            <td style="text-align:left;">
              是否显示级联选择器
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
              title
            </td>
            <td style="text-align:left;">
              标题
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              请选择
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              data
            </td>
            <td style="text-align:left;">
              级联数据
            </td>
            <td style="text-align:left;">
              Array
            </td>
            <td style="text-align:left;">
              []
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              valueKey
            </td>
            <td style="text-align:left;">
              指定选项的值为选项对象的某个属性值
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              value
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              labelKey
            </td>
            <td style="text-align:left;">
              指定选项标签为选项对象的某个属性值
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              label
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              childrenKey
            </td>
            <td style="text-align:left;">
              指定选项的子选项为选项对象的某个属性值
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              children
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              modelValue
            </td>
            <td style="text-align:left;">
              选中值
            </td>
            <td style="text-align:left;">
              String / Number / Array
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
              placeholder
            </td>
            <td style="text-align:left;">
              占位文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              请选择
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              safeAreaInsetBottom
            </td>
            <td style="text-align:left;">
              是否开启底部安全区适配
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
              closeOnClickOverlay
            </td>
            <td style="text-align:left;">
              点击遮罩关闭
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
              autoClose
            </td>
            <td style="text-align:left;">
              选择最后一级时自动关闭
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
              headerDirection
            </td>
            <td style="text-align:left;">
              头部滑动方向
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              row
            </td>
            <td style="text-align:left;">
              row / column
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              optionsCols
            </td>
            <td style="text-align:left;">
              选项列数
            </td>
            <td style="text-align:left;">
              String / Number
            </td>
            <td style="text-align:left;">
              3
            </td>
            <td style="text-align:left;">
              1 / 2 / 3 / 4 / 5
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              formatter
            </td>
            <td style="text-align:left;">
              格式化标签文本
            </td>
            <td style="text-align:left;">
              Function
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
      <text id="events">
        <text href="cascader.html#events" class="header-anchor">#</text>
        Events
      </text>
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
              update:modelValue
            </td>
            <td style="text-align:left;">
              选中值发生变化时触发
            </td>
            <td style="text-align:left;">
              value: String / Number / Array
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              update:show
            </td>
            <td style="text-align:left;">
              显示状态发生变化时触发
            </td>
            <td style="text-align:left;">
              show: Boolean
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              confirm
            </td>
            <td style="text-align:left;">
              点击确认按钮时触发
            </td>
            <td style="text-align:left;">
              { value: Array, label: String }
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              close
            </td>
            <td style="text-align:left;">
              关闭时触发
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              change
            </td>
            <td style="text-align:left;">
              选择项发生变化时触发
            </td>
            <td style="text-align:left;">
              { value: String / Number, label: String, values: Array }
            </td>
          </tr>
        </tbody>
      </table>
      <text id="methods">
        <text href="cascader.html#methods" class="header-anchor">#</text>
        Methods
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:left;">
              方法名
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              setInfo
            </td>
            <td style="text-align:left;">
              设置信息
            </td>
            <td style="text-align:left;">
              info: string
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slot">
        <text href="cascader.html#slot" class="header-anchor">#</text>
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
              默认插槽，用于自定义触发器
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              trigger
            </td>
            <td style="text-align:left;">
              自定义触发器插槽
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
.cascader-page {
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
.badge.tip {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  color: #fff;
  background-color: #13ce66;
  border-radius: 4px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
