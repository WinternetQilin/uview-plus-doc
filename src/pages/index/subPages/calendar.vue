<template>
  <view class="calendar-page">
    <view class="theme-default-content content__default">
      <text id="calendar-日历">
        <text href="calendar.html#calendar-日历" class="header-anchor">#</text>
        Calendar 日历
        <text href="calendar.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>此组件用于单个选择日期，范围选择日期等，日历被包裹在底部弹起的容器中。</text>
      <text>
        <strong>注意：</strong> 此组件与<text href="picker.html">Picker 选择器</text>的日期选择模式有一定的重合之处，区别在于本组件为更专业的日期选择场景，能选择日期范围等。
        另外<code>Picker</code>组件的日期模式可以配置更多的参数，如时、分、秒等，可以根据不同的使用场景进行选择。
      </text>
      <text id="平台差异说明">
        <text href="calendar.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="calendar.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>show</code>绑定一个布尔变量用于打开或收起日历弹窗。</view>
        <view>通过<code>mode</code>参数指定选择日期模式，包含单选/多选/范围选择。</view>
      </view>
      <text id="日历模式">
        <text href="calendar.html#日历模式" class="header-anchor">#</text>
        日历模式
      </text>
      <view>
        <view><code>mode</code>为<code>single</code>只能选择单个日期</view>
        <view><code>mode</code>为<code>multiple</code>可以选择多个日期</view>
        <view><code>mode</code>为<code>range</code>可以选择日期范围</view>
      </view>
      <text id="单个日期模式">
        <text href="calendar.html#单个日期模式" class="header-anchor">#</text>
        单个日期模式
      </text>
      <text>选择日期后，需要点击底部的<code>确定</code>按钮才能触发回调事件，回调参数为一个数组，有如下属性：</text>
      <text>["2021-07-01"]</text>
      <text id="多个日期模式">
        <text href="calendar.html#多个日期模式" class="header-anchor">#</text>
        多个日期模式
      </text>
      <text>选择日期后，需要点击底部的<code>确定</code>按钮才能触发回调事件，回调参数为一个数组，有如下属性：</text>
      <text>["2021-07-27", "2021-07-29", "2021-07-30"]</text>
      <text id="日期范围模式">
        <text href="calendar.html#日期范围模式" class="header-anchor">#</text>
        日期范围模式
      </text>
      <text>此模式用于选择一个日期范围，比如住酒店的入住到离店的日期范围，</text>
      <text>此模式的返回参数如下：</text>
      <text>["2021-07-27", "2021-07-28", "2021-07-29", "2021-07-30", "2021-07-31"]</text>
      <text id="自定义主题颜色">
        <text href="calendar.html#自定义主题颜色" class="header-anchor">#</text>
        自定义主题颜色
      </text>
      <text>组件可传入<code>color</code>参数，更改组件主题色</text>
      <text id="快捷选择">
        <text href="calendar.html#快捷选择" class="header-anchor">#</text>
        快捷选择
      </text>
      <text>设置<code>shortcuts</code>属性配置快捷选择日期选项</text>
      <text id="最大日期">
        <text href="calendar.html#最大日期" class="header-anchor">#</text>
        最大日期
      </text>
      <text>通过<code>maxDate</code>设置可选的最大日期</text>
      <text id="最小日期">
        <text href="calendar.html#最小日期" class="header-anchor">#</text>
        最小日期
      </text>
      <text>通过<code>minDate</code>设置可选的最小日期</text>
      <text id="api">
        <text href="calendar.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="calendar.html#props" class="header-anchor">#</text>
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
              控制日历弹窗的显示
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
              mode
            </td>
            <td style="text-align:left;">
              选择日期的模式
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              single
            </td>
            <td style="text-align:left;">
              single / multiple / range
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              title
            </td>
            <td style="text-align:left;">
              日历标题
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              日期选择
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              value
            </td>
            <td style="text-align:left;">
              默认选中的日期，mode为single时传入字符串，多个或范围传入数组
            </td>
            <td style="text-align:left;">
              String / Array
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
              maxDate
            </td>
            <td style="text-align:left;">
              可选的最大日期
            </td>
            <td style="text-align:left;">
              String / Number
            </td>
            <td style="text-align:left;">
              当年
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              minDate
            </td>
            <td style="text-align:left;">
              可选的最小日期
            </td>
            <td style="text-align:left;">
              String / Number
            </td>
            <td style="text-align:left;">
              2020-01-01
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              defaultVal
            </td>
            <td style="text-align:left;">
              弹窗打开时，默认选中的日期
            </td>
            <td style="text-align:left;">
              String / Array
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
              showTitle
            </td>
            <td style="text-align:left;">
              是否显示标题
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
              showSubtitle
            </td>
            <td style="text-align:left;">
              是否显示副标题
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
              titleSubText
            </td>
            <td style="text-align:left;">
              副标题内容
            </td>
            <td style="text-align:left;">
              String
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
              color
            </td>
            <td style="text-align:left;">
              主题色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              #3c9cff
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              activeBgColor
            </td>
            <td style="text-align:left;">
              选中日期的背景色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              #3c9cff
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              activeTextColor
            </td>
            <td style="text-align:left;">
              选中日期的文字颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              #ffffff
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              startText
            </td>
            <td style="text-align:left;">
              范围选择模式下开始日期的底部文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              开始
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              endText
            </td>
            <td style="text-align:left;">
              范围选择模式下结束日期的底部文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              结束
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              rangeBgColor
            </td>
            <td style="text-align:left;">
              范围选择模式下选中日期的背景色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              rgba(60, 156, 255, 0.3)
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              rangeTextColor
            </td>
            <td style="text-align:left;">
              范围选择模式下选中日期的文字颜色
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              #3c9cff
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              showMark
            </td>
            <td style="text-align:left;">
              是否显示月份背景文字
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
              todayText
            </td>
            <td style="text-align:left;">
              今天日期的文本
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              今天
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              formatter
            </td>
            <td style="text-align:left;">
              日期格式化函数
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
          <tr>
            <td style="text-align:left;">
              shortcuts
            </td>
            <td style="text-align:left;">
              快捷选择日期配置
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
              confirmText
            </td>
            <td style="text-align:left;">
              确认按钮文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              确定
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              confirmDisabledText
            </td>
            <td style="text-align:left;">
              确认按钮禁用时文字
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              确定
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              showConfirm
            </td>
            <td style="text-align:left;">
              是否显示底部的确认按钮
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
              linkedH5
            </td>
            <td style="text-align:left;">
              是否在H5平台日期显示在顶部
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
              h5AutoBack
            </td>
            <td style="text-align:left;">
              H5端点击日期后，是否自动关闭(点击空处不关闭)
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
              visible.sync
            </td>
            <td style="text-align:left;">
              控制日历弹窗显示
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
        </tbody>
      </table>
      <text id="events">
        <text href="calendar.html#events" class="header-anchor">#</text>
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
              confirm
            </td>
            <td style="text-align:left;">
              点击确认按钮时触发
            </td>
            <td style="text-align:left;">
              { value: Array / String }
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              change
            </td>
            <td style="text-align:left;">
              日期发生变化时触发
            </td>
            <td style="text-align:left;">
              { value: Array / String }
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              close
            </td>
            <td style="text-align:left;">
              关闭日历弹窗时触发
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="methods">
        <text href="calendar.html#methods" class="header-anchor">#</text>
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
              动态设置日期选择器的信息
            </td>
            <td style="text-align:left;">
              info: string
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slots">
        <text href="calendar.html#slots" class="header-anchor">#</text>
        Slots
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
              title
            </td>
            <td style="text-align:left;">
              自定义标题区域
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              confirm
            </td>
            <td style="text-align:left;">
              自定义确认按钮区域
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
.calendar-page {
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
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
</style>
