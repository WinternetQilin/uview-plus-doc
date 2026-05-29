<template>
  <view class="countTo-page">
    <view class="theme-default-content content__default">
      <text id="countto-数字滚动">
        <text href="countTo.html#countto-数字滚动" class="header-anchor">#</text>
        CountTo 数字滚动
      </text>
      <text>
        该组件一般用于需要滚动数字到某一个值的场景，目标要求是一个递增的值。
      </text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>
          如果给组件的父元素设置<code>text-align: center</code>想让数字水平居中，可能是由于元素内容快速变化而导致渲染的问题，在APP上组件可能会有轻微的左右抖动现象，
          解决办法是给父元素设置<code>padding-left</code>或者<code>margin-left</code>即可。
        </text>
      </view>
      <text id="平台差异说明">
        <text href="countTo.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="countTo.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>startVal</code>设置开始值，<code>endVal</code>设置结束值</text>
      <pre><code>&lt;up-count-to :startVal="30" :endVal="500"&gt;&lt;/up-count-to&gt;</code></pre>
      <text id="设置滚动相关参数">
        <text href="countTo.html#设置滚动相关参数" class="header-anchor">#</text>
        设置滚动相关参数
      </text>
      <view>
        <view>通过<code>duration</code>设置从开始值到结束值整个滚动过程所需的时间，单位<code>ms</code></view>
        <view>通过<code>useEasing</code>设置滚动快结尾的时候，是否放慢滚动的速度，给用户更好的视觉效果</view>
      </view>
      <pre><code>&lt;up-count-to :start-val="30" :end-val="500" :duration="2000" :useEasing="false"&gt;&lt;/up-count-to&gt;</code></pre>
      <text id="是否显示小数位">
        <text href="countTo.html#是否显示小数位" class="header-anchor">#</text>
        是否显示小数位
      </text>
      <text>
        通过<code>decimals</code>设置显示的小数位，如果设置了，在滚动过程中，小数位会一起变化。如果<code>startVal</code>和<code>endVal</code>是带小数的，应该设置<code>decimals</code>为
        0，或者不设置decimals。
      </text>
      <pre><code>&lt;up-count-to :start-val="0" :end-val="500" :decimals="2" :duration="3000"&gt;&lt;/up-count-to&gt;</code></pre>
      <text id="千分位分隔符">
        <text href="countTo.html#千分位分隔符" class="header-anchor">#</text>
        千分位分隔符
      </text>
      <text>
        通过<code>separator</code>配置千分位分隔符，默认为空字符串，可以设置英文逗号","，此参数表现为<code>endVal</code>值超过1000时，比如为"1257"，那么滚动后会变成"1,245"，在金额数值时，
        非常有用。
      </text>
      <pre><code>&lt;up-count-to :start-val="0" :end-val="12574" separator="," :duration="3000"&gt;&lt;/up-count-to&gt;</code></pre>
      <text id="api">
        <text href="countTo.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="countTo.html#props" class="header-anchor">#</text>
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
              startVal
            </td>
            <td style="text-align: left">
              开始值
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
              endVal
            </td>
            <td style="text-align: left">
              结束值
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
              duration
            </td>
            <td style="text-align: left">
              滚动过程所需的时间，单位ms
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              2000
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              autoplay
            </td>
            <td style="text-align: left">
              是否自动开始滚动
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
              decimals
            </td>
            <td style="text-align: left">
              要显示的小数位数，见上方说明
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
              useEasing
            </td>
            <td style="text-align: left">
              滚动结束时，是否缓动结尾，见上方说明
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
              decimal
            </td>
            <td style="text-align: left">
              十进制分割
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              .
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
              字体颜色
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
              fontSize
            </td>
            <td style="text-align: left">
              字体大小，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              22
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              bold
            </td>
            <td style="text-align: left">
              字体是否加粗
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
              separator
            </td>
            <td style="text-align: left">
              千位分隔符，见上方说明
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
        </tbody>
      </table>
      <text id="methods">
        <text href="countTo.html#methods" class="header-anchor">#</text>
        Methods
      </text>
      <text>此方法如要通过ref手动调用</text>
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
              start
            </td>
            <td style="text-align: left">
              <code>autoplay</code>为<code>false</code>时，通过此方法启动滚动
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              reStart
            </td>
            <td style="text-align: left">
              暂停后重新开始滚动(从暂停前的值开始滚动)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              paused
            </td>
            <td style="text-align: left">
              暂停滚动
            </td>
          </tr>
        </tbody>
      </table>
      <text id="event">
        <text href="countTo.html#event" class="header-anchor">#</text>
        Event
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
              end
            </td>
            <td style="text-align: left">
              数值滚动到目标值时触发
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
.countTo-page {
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
text {
  color: #409eff;
  text-decoration: none;
}
</style>
