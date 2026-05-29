<template>
  <view class="layout-page">
    <view class="theme-default-content content__default">
      <text id="layout-布局">
        <text href="#layout-布局" class="header-anchor">#</text>
        Layout 布局
      </text>

      <text>通过基础的 12 分栏，迅速简便地创建布局</text>

      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>如需实现类似宫格的布局，请使用uview-plus的<text href="#">Grid宫格组件</text>，可以设置角标，功能更完善和灵活</text>
      </view>

      <text id="平台差异说明">
        <text href="#平台差异说明" class="header-anchor">#</text>
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
        <text href="#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>col</code>组件的<code>text</code>设置需要分栏的比例</text>

      <text id="分栏间隔">
        <text href="#分栏间隔" class="header-anchor">#</text>
        分栏间隔
      </text>
      <text>通过设置<code>row</code>组件的<code>gutter</code>参数，来指定每一栏之间的间隔(最终表现为左边内边距各为gutter/2)，默认间隔为0</text>

      <text id="混合布局">
        <text href="#混合布局" class="header-anchor">#</text>
        混合布局
      </text>
      <text>通过指定<code>col</code>组件的<code>text</code>属性，指定不同的值，达到不同的比例</text>

      <text id="分栏偏移">
        <text href="#分栏偏移" class="header-anchor">#</text>
        分栏偏移
      </text>
      <text>通过指定<code>col</code>组件的<code>offset</code>属性可以指定分栏偏移的栏数。</text>

      <text id="对齐方式">
        <text href="#对齐方式" class="header-anchor">#</text>
        对齐方式
      </text>
      <text>通过<code>row</code>组件的<code>justify</code>来对分栏进行灵活的对齐</text>

      <text id="api">
        <text href="#api" class="header-anchor">#</text>
        API
      </text>

      <text id="row-props">
        <text href="#row-props" class="header-anchor">#</text>
        Row Props
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
              gutter
            </td>
            <td style="text-align: left">
              栅格间隔，左右各为此值的一半，单位任意
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
              justify
            </td>
            <td style="text-align: left">
              水平排列方式(微信小程序暂不支持)
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              start(或flex-start)
            </td>
            <td style="text-align: left">
              end(或flex-end) / center / around(或space-around) / between(或space-between)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              align
            </td>
            <td style="text-align: left">
              垂直排列方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              center
            </td>
            <td style="text-align: left">
              top / bottom
            </td>
          </tr>
        </tbody>
      </table>

      <text id="col-props">
        <text href="#col-props" class="header-anchor">#</text>
        Col Props
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
              栅格占据的列数，总12等分
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              0
            </td>
            <td style="text-align: left">
              1-12
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              offset
            </td>
            <td style="text-align: left">
              分栏左边偏移，计算方式与span相同
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
              justify
            </td>
            <td style="text-align: left">
              水平排列方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              start
            </td>
            <td style="text-align: left">
              start(或flex-start)、end(或flex-end)、center、around(或space-around)、between(或space-between)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              align
            </td>
            <td style="text-align: left">
              垂直对齐方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              stretch
            </td>
            <td style="text-align: left">
              top、center、bottom、stretch
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              textAlign
            </td>
            <td style="text-align: left">
              文字水平对齐方式
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
        </tbody>
      </table>

      <text id="row-events">
        <text href="#row-events" class="header-anchor">#</text>
        Row Events
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
              row被点击
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>

      <text id="col-events">
        <text href="#col-events" class="header-anchor">#</text>
        Col Events
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
              col被点击，会阻止事件冒泡到row
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
.layout-page {
  padding: 20px;
}

.theme-default-content {
  max-width: 1000px;
  margin: 0 auto;
}

text {
  font-size: 28px;
  color: #333;
  margin: 30px 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

text {
  font-size: 22px;
  color: #333;
  margin: 25px 0 15px;
}

text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 10px 0;
}

code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e83e8c;
}

.custom-block {
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;

  &.warning {
    background: #fdf6ec;
    border-left: 4px solid #e6a23c;

    .custom-block-title {
      color: #e6a23c;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}

.header-anchor {
  color: #999;
  margin-right: 5px;

  &:hover {
    color: #0066cc;
    text-decoration: none;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;

  th,
  td {
    padding: 10px 15px;
    border: 1px solid #eee;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    color: #333;
  }

  td {
    color: #555;
    font-size: 14px;
  }
}
</style>
