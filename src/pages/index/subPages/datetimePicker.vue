<template>
  <view class="datetimePicker-page">
    <view class="theme-default-content content__default">
      <text id="datetimepicker-选择器">
        <text href="datetimePicker.html#datetimepicker-选择器" class="header-anchor">#</text>
        DatetimePicker 选择器
      </text>
      <text>此选择器用于时间日期</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意：</text>
        <text>请先执行npm i dayjs安装依赖。</text>
      </view>
      <text id="平台差异说明">
        <text href="datetimePicker.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="datetimePicker.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>show</code>绑定一个布尔值变量，用于控制组件的弹出与收起。</view>
        <view>通过<code>mode</code>配置选择何种日期格式。</view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-datetime-picker
            hasInput
            :show="show"
            v-model="value1"
            mode="datetime"
        &gt;&lt;/up-datetime-picker&gt;
        &lt;up-button @click="show = true"&gt;打开&lt;/up-button&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const show = ref(false);
const value1 = ref(Date.now());
&lt;/script&gt;</code></pre>
      <text id="年-月-日">
        <text href="datetimePicker.html#年-月-日" class="header-anchor">#</text>
        年 月 日
      </text>
      <text>此模式通过<code>mode</code>设置为<code>date</code>。</text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-datetime-picker
            hasInput
            :show="show"
            v-model="value1"
            mode="date"
        &gt;&lt;/up-datetime-picker&gt;
        &lt;up-button @click="show = true"&gt;打开&lt;/up-button&gt;
    &lt;/view&gt;
&lt;/template&gt;</code></pre>
      <text id="格式化">
        <text href="datetimePicker.html#格式化" class="header-anchor">#</text>
        格式化
      </text>
      <text>如有需要，可以通过<code>formatter</code>参数编写自定义格式化规则。</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意：</text>
        <text>微信小程序不支持通过<code>props</code>传递函数参数，所以组件内部暴露了一个<code>setFormatter</code>方法用于设置格式化方法，注意在页面的<code>onReady</code>生命周期获取<code>ref</code>再操作。</text>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-datetime-picker
            ref="datetimePickerRef"
            hasInput
            :show="show"
            v-model="value1"
            mode="datetime"
            :formatter="formatter"
        &gt;&lt;/up-datetime-picker&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const datetimePickerRef = ref(null);
const show = ref(false);
const value1 = ref(Date.now());

const formatter = (type, value) => {
    if (type === 'year') {
        return value + '年';
    }
    if (type === 'month') {
        return value + '月';
    }
    if (type === 'day') {
        return value + '日';
    }
    if (type === 'hour') {
        return value + '时';
    }
    if (type === 'minute') {
        return value + '分';
    }
    return value;
};
&lt;/script&gt;</code></pre>
      <text id="限制最大最小值">
        <text href="datetimePicker.html#限制最大最小值" class="header-anchor">#</text>
        限制最大最小值
      </text>
      <text>参数<code>minDate</code>和<code>maxData</code>可以设置最大值和最小值（传入时间戳）。</text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-datetime-picker
            :show="show"
            v-model="value1"
            mode="date"
            :minDate="946656000000"
            :maxData="4133865600000"
        &gt;&lt;/up-datetime-picker&gt;
    &lt;/view&gt;
&lt;/template&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="datetimePicker.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/datetimePicker/datetimePicker.nvue" target="_blank">
          github
        </text>
      </view>
      <text id="api">
        <text href="datetimePicker.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="datetimePicker.html#props" class="header-anchor">#</text>
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
              hasInput <text class="badge tip">3.1.49</text>
            </td>
            <td style="text-align: left">
              是否自带input输入框
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
              format <text class="badge tip">3.1.49</text>
            </td>
            <td style="text-align: left">
              输入框显示日期格式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              'YYYY-MM-DD HH:mm'
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              placeholder <text class="badge tip">3.1.49</text>
            </td>
            <td style="text-align: left">
              输入框placeholder
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              请选择
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              inputProps <text class="badge tip">3.4.25</text>
            </td>
            <td style="text-align: left">
              输入框props，便于传递更多up-input的props
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              {}
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              v-model:show
            </td>
            <td style="text-align: left">
              用于控制选择器的弹出与收起
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
              popupMode
            </td>
            <td style="text-align: left">
              用于控制选择器的弹出方向
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              bottom
            </td>
            <td style="text-align: left">
              top、bottom、left、right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showToolbar
            </td>
            <td style="text-align: left">
              是否显示顶部的操作栏
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
              v-model
            </td>
            <td style="text-align: left">
              绑定值
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
              title
            </td>
            <td style="text-align: left">
              顶部标题
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
              展示格式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              datetime
            </td>
            <td style="text-align: left">
              date为日期选择，time为时间选择，year-month为年月选择
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              maxDate
            </td>
            <td style="text-align: left">
              可选的最大时间（时间戳毫秒）
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              最大默认值为后10年
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              minDate
            </td>
            <td style="text-align: left">
              可选的最小时间（时间戳毫秒）
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              最小默认值为前10年
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              minHour
            </td>
            <td style="text-align: left">
              可选的最小小时，仅mode=time有效
            </td>
            <td style="text-align: left">
              Number
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
              maxHour
            </td>
            <td style="text-align: left">
              可选的最大小时，仅mode=time有效
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              23
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              minMinute
            </td>
            <td style="text-align: left">
              可选的最小分钟，仅mode=time有效
            </td>
            <td style="text-align: left">
              Number
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
              maxMinute
            </td>
            <td style="text-align: left">
              可选的最大分钟，仅mode=time有效
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              59
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              filter
            </td>
            <td style="text-align: left">
              选项过滤函数
            </td>
            <td style="text-align: left">
              Function
            </td>
            <td style="text-align: left">
              null
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              formatter
            </td>
            <td style="text-align: left">
              输入过滤或格式化函数(如需兼容微信小程序，则只能通过<code>setFormatter</code>方法)
            </td>
            <td style="text-align: left">
              Function
            </td>
            <td style="text-align: left">
              null
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              loading
            </td>
            <td style="text-align: left">
              是否显示加载中状态
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
              itemHeight
            </td>
            <td style="text-align: left">
              各列中，单个选项的高度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              44
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancelText
            </td>
            <td style="text-align: left">
              取消按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              取消
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
              确认按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              确认
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancelColor
            </td>
            <td style="text-align: left">
              取消按钮的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #909193
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirmColor
            </td>
            <td style="text-align: left">
              确认按钮的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #3c9cff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              visibleItemCount
            </td>
            <td style="text-align: left">
              每列中可见选项的数量
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              5
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              closeOnClickOverlay
            </td>
            <td style="text-align: left">
              是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
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
              defaultIndex
            </td>
            <td style="text-align: left">
              各列的默认索引
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
              pageInline <text class="badge tip">3.5.5</text>
            </td>
            <td style="text-align: left">
              页面内插入模式
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
        <text href="datetimePicker.html#events" class="header-anchor">#</text>
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
              close
            </td>
            <td style="text-align: left">
              关闭选择器时触发
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
              confirm
            </td>
            <td style="text-align: left">
              点击确定按钮，返回当前选择的值
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
              change
            </td>
            <td style="text-align: left">
              当选择值变化时触发
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
              cancel
            </td>
            <td style="text-align: left">
              点击取消按钮
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
      <text id="slots">
        <text href="datetimePicker.html#slots" class="header-anchor">#</text>
        Slots
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
            <td>toolbar-right</td>
            <td>工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。</td>
          </tr>
          <tr>
            <td>toolbar-bottom</td>
            <td>输入框下方自定义区域</td>
          </tr>
          <tr>
            <td>trigger</td>
            <td>hasInput模式时自定义触发和显示区域scope={value: ''}</td>
          </tr>
        </tbody>
      </table>
      <text id="methods">
        <text href="datetimePicker.html#methods" class="header-anchor">#</text>
        Methods
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              方法名
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              setFormatter
            </td>
            <td style="text-align: left">
              为兼容微信小程序而暴露的内部方法，见上方说明
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
.datetimePicker-page {
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
.custom-block.warning {
  background: #fff6e6;
  border-left-color: #e6a23c;
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
  margin-left: 10px;
  vertical-align: middle;
  background: #67c23a;
  color: #fff;
}
</style>
