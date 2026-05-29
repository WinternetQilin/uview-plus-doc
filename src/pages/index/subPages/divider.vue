<template>
  <view class="divider-page">
    <view class="theme-default-content content__default">
      <text id="divider-分割线">
        <text href="divider.html#divider-分割线" class="header-anchor">#</text>
        Divider 分割线
      </text>
      <text>区隔内容的分割线，一般用于页面底部"没有更多"的提示。</text>
      <text id="平台差异说明">
        <text href="divider.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="divider.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>文字内容通过<code>text</code>传入</text>
      <pre><code>&lt;up-divider text="分割线"&gt;&lt;/up-divider&gt;</code></pre>
      <text id="设置虚线">
        <text href="divider.html#设置虚线" class="header-anchor">#</text>
        设置虚线
      </text>
      <text>可以通过<code>dashed</code>指定虚线</text>
      <pre><code>&lt;up-divider text="分割线" :dashed="true"&gt;&lt;/up-divider&gt;</code></pre>
      <text id="设置细线">
        <text href="divider.html#设置细线" class="header-anchor">#</text>
        设置细线
      </text>
      <text>可以通过<code>hairline</code>指定细线</text>
      <pre><code>&lt;up-divider text="分割线" :hairline="true"&gt;&lt;/up-divider&gt;</code></pre>
      <text id="设置以点代替文字">
        <text href="divider.html#设置以点代替文字" class="header-anchor">#</text>
        设置以点代替文字
      </text>
      <text>可以通过<code>dot</code>指定以点代替文字</text>
      <pre><code>&lt;up-divider text="分割线" :dot="true"&gt;&lt;/up-divider&gt;</code></pre>
      <text id="设置文本靠左靠右">
        <text href="divider.html#设置文本靠左靠右" class="header-anchor">#</text>
        设置文本靠左靠右
      </text>
      <text>可以通过<code>textPosition</code>指定文字靠左靠右</text>
      <pre><code>&lt;up-divider text="靠左" textPosition="left"&gt;&lt;/up-divider&gt;
&lt;up-divider text="靠右" textPosition="right"&gt;&lt;/up-divider&gt;</code></pre>
      <text id="设置文本颜色和线条颜色">
        <text href="divider.html#设置文本颜色和线条颜色" class="header-anchor">#</text>
        设置文本颜色和线条颜色
      </text>
      <text>可以通过<code>textColor</code>和<code>lineColor</code>指定文字刚线条颜色</text>
      <pre><code>&lt;up-divider
   text="分割线"
   textColor="#2979ff"
   lineColor="#ff0000"
&gt;&lt;/up-divider&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="divider.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/divider/divider.nvue" target="_blank">
          github
        </text>
      </view>
      <text id="api">
        <text href="divider.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="divider.html#props" class="header-anchor">#</text>
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
              dashed
            </td>
            <td style="text-align: left">
              是否虚线
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
              hairline
            </td>
            <td style="text-align: left">
              是否细线
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
              dot
            </td>
            <td style="text-align: left">
              是否以点替代文字，优先于text字段起作用
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
              textPosition
            </td>
            <td style="text-align: left">
              内容文本的位置
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              center
            </td>
            <td style="text-align: left">
              left、right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              text
            </td>
            <td style="text-align: left">
              文本内容
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
              textSize
            </td>
            <td style="text-align: left">
              文本大小
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
              textColor
            </td>
            <td style="text-align: left">
              文本颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #909399
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              lineColor
            </td>
            <td style="text-align: left">
              线条颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #dcdfe6
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="divider.html#events" class="header-anchor">#</text>
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
            <th style="text-align: left">
              版本
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              click
            </td>
            <td style="text-align: left">
              divider组件被点击时触发
            </td>
            <td style="text-align: left">
              -
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
.divider-page {
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
