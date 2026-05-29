<template>
  <view class="barcode-page">
    <view class="theme-default-content content__default">
      <text id="barcode-条形码">
        <text href="barcode.html#barcode-条形码" class="header-anchor">#</text>
        Barcode 条形码
        <text class="badge tip">3.1.83</text>
        <text href="barcode.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>条形码组件，支持多种条形码格式，可以生成条形码图片或Canvas，本插件使用canvas原生实现，不依赖第三方插件，体积较小。支持CODE128/EAN13/EAN8/EAN5/EAN2/UPC/UPCA，ITF、pharmacode、codabar暂未支持，后期会增加支持。</text>
      <text id="基本使用">
        <text href="barcode.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>value</code>设置条形码内容，通过<code>format</code>设置条形码格式。</text>
      <text id="设置条形码尺寸">
        <text href="barcode.html#设置条形码尺寸" class="header-anchor">#</text>
        设置条形码尺寸
      </text>
      <text>通过<code>width</code>和<code>height</code>设置条形码尺寸。</text>
      <text id="设置条形码颜色">
        <text href="barcode.html#设置条形码颜色" class="header-anchor">#</text>
        设置条形码颜色
      </text>
      <text>通过<code>lineColor</code>设置条形码线条颜色，通过<code>background</code>设置背景色。</text>
      <text id="显示文本">
        <text href="barcode.html#显示文本" class="header-anchor">#</text>
        显示文本
      </text>
      <text>通过<code>displayValue</code>控制是否显示文本，通过<code>text</code>设置文本内容。</text>
      <text id="禁用canvas渲染">
        <text href="barcode.html#禁用canvas渲染" class="header-anchor">#</text>
        禁用Canvas渲染
      </text>
      <text>通过<code>useCanvas</code>控制是否使用Canvas渲染，默认为true。</text>
      <text id="props">
        <text href="barcode.html#props" class="header-anchor">#</text>
        Props
      </text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>value</td>
            <td>条码值</td>
            <td>string | number</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>format</td>
            <td>条码格式</td>
            <td>string</td>
            <td>auto</td>
            <td>CODE128/CODE128A/CODE128B/CODE128C/EAN13/EAN8/EAN5/EAN2/UPC/UPCA/UPCE/CODE39/ITF/ITF14/MSI/MSI10/MSI11/MSI1010/MSI1110/pharmacode/codabar</td>
          </tr>
          <tr>
            <td>width</td>
            <td>宽度</td>
            <td>number</td>
            <td>200</td>
            <td>-</td>
          </tr>
          <tr>
            <td>height</td>
            <td>高度</td>
            <td>number</td>
            <td>80</td>
            <td>-</td>
          </tr>
          <tr>
            <td>displayValue</td>
            <td>是否显示文本</td>
            <td>boolean</td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>text</td>
            <td>文本内容</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>fontOptions</td>
            <td>字体选项</td>
            <td>string</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>font</td>
            <td>字体</td>
            <td>string</td>
            <td>monospace</td>
            <td>-</td>
          </tr>
          <tr>
            <td>textAlign</td>
            <td>文本对齐方式</td>
            <td>string</td>
            <td>center</td>
            <td>left/center/right</td>
          </tr>
          <tr>
            <td>textPosition</td>
            <td>文本位置</td>
            <td>string</td>
            <td>bottom</td>
            <td>top/bottom</td>
          </tr>
          <tr>
            <td>textMargin</td>
            <td>文本边距</td>
            <td>number</td>
            <td>2</td>
            <td>-</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>字体大小</td>
            <td>number</td>
            <td>14</td>
            <td>-</td>
          </tr>
          <tr>
            <td>background</td>
            <td>背景色</td>
            <td>string</td>
            <td>#ffffff</td>
            <td>-</td>
          </tr>
          <tr>
            <td>lineColor</td>
            <td>条码颜色</td>
            <td>string</td>
            <td>#000000</td>
            <td>-</td>
          </tr>
          <tr>
            <td>margin</td>
            <td>边距</td>
            <td>number</td>
            <td>10</td>
            <td>-</td>
          </tr>
          <tr>
            <td>useCanvas</td>
            <td>使用canvas还是生成图片</td>
            <td>boolean</td>
            <td>true</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="barcode.html#events" class="header-anchor">#</text>
        Events
      </text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>rendered</td>
            <td>渲染完成时触发</td>
            <td>{ type: 'canvas' | 'image', id?: string, value?: string, path?: string }</td>
          </tr>
          <tr>
            <td>error</td>
            <td>渲染出错时触发</td>
            <td>error</td>
          </tr>
        </tbody>
      </table>
      <text id="支持格式说明">
        <text href="barcode.html#支持格式说明" class="header-anchor">#</text>
        支持格式说明
      </text>
      <table>
        <thead>
          <tr>
            <th>格式</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CODE128</td>
            <td>最常用的条形码格式，可编码所有ASCII字符</td>
          </tr>
          <tr>
            <td>EAN13</td>
            <td>国际商品条形码，13位数字</td>
          </tr>
          <tr>
            <td>EAN8</td>
            <td>国际商品条形码，8位数字</td>
          </tr>
          <tr>
            <td>CODE39</td>
            <td>39字符条形码，常用于工业领域</td>
          </tr>
          <tr>
            <td>UPC</td>
            <td>统一产品代码</td>
          </tr>
          <tr>
            <td>MSI</td>
            <td>MSI Plessey条码，用于仓库和库存管理</td>
          </tr>
          <tr>
            <td>pharmacode</td>
            <td>药品包装上使用的条码</td>
          </tr>
          <tr>
            <td>codabar</td>
            <td>医疗和图书馆使用的条码</td>
          </tr>
        </tbody>
      </table>
      <text id="注意事项">
        <text href="barcode.html#注意事项" class="header-anchor">#</text>
        注意事项
      </text>
      <view>
        <view>条形码内容需要符合对应格式的规范，否则会报错</view>
        <view>使用Canvas渲染时性能更好，但生成图片可以保存到相册</view>
        <view>文本显示时会自动根据条码尺寸调整位置</view>
        <view>不同格式的条码对内容要求不同，请根据实际需求选择格式</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.barcode-page {
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
