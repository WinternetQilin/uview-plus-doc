<template>
  <view class="colorPicker-page">
    <view class="theme-default-content content__default">
      <text id="colorpicker-颜色选择器">
        <text href="colorPicker.html#colorpicker-颜色选择器" class="header-anchor">
          #
        </text>
        ColorPicker 颜色选择器
        <text class="badge tip">3.5.15</text>
      </text>
      <text>颜色选择器组件，支持纯色和渐变色选择，可自定义常用颜色。</text>
      <text id="平台差异说明">
        <text href="colorPicker.html#平台差异说明" class="header-anchor">#</text>
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
              x
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
        <text href="colorPicker.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>v-model</code>绑定颜色值，支持纯色和渐变色。</text>
      <pre><code>&lt;template&gt;
    &lt;view class="text-4 bg-white"&gt;
        &lt;up-color-picker
            v-model="color"
            @confirm="confirm"
        &gt;
            &lt;view class="color-preview"&gt;
                &lt;view class="color-block" :style="{ backgroundColor: color }"&gt;&lt;/view&gt;
                &lt;text class="color-text"&gt;{{ color }}&lt;/text&gt;
            &lt;/view&gt;
        &lt;/up-color-picker&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const color = ref('#ff0000');
const confirm = (selectedColor) =&gt; {
    console.log('选择的颜色：', selectedColor);
};
&lt;/script&gt;</code></pre>
      <text id="带常用颜色的使用">
        <text href="colorPicker.html#带常用颜色的使用" class="header-anchor">#</text>
        带常用颜色的使用
      </text>
      <text>通过<code>commonColors</code>属性设置常用颜色列表。</text>
      <pre><code>&lt;template&gt;
    &lt;view class="text-4 bg-white"&gt;
        &lt;up-color-picker
            v-model="color"
            :commonColors="commonColors"
            @confirm="confirm"
        &gt;
            &lt;view class="color-preview"&gt;
                &lt;view class="color-block" :style="{ backgroundColor: color }"&gt;&lt;/view&gt;
                &lt;text class="color-text"&gt;{{ color }}&lt;/text&gt;
            &lt;/view&gt;
        &lt;/up-color-picker&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const color = ref('#ff0000');
const commonColors = ref([
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
    '#ffffff',
    '#000000'
]);
const confirm = (selectedColor) =&gt; {
    console.log('选择的颜色：', selectedColor);
};
&lt;/script&gt;</code></pre>
      <text id="示例演示页面源代码地址">
        <text href="colorPicker.html#示例演示页面源代码地址" class="header-anchor">
          #
        </text>
        示例演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/colorPicker/colorPicker.nvue"
          target="_blank"
          style="display: flex; align-items: center"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="github"
            width="30"
          />
          github
        </text>
        <br>
      </view>
      <text id="api">
        <text href="colorPicker.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="colorPicker.html#props" class="header-anchor">#</text>
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
              v-model
            </td>
            <td style="text-align: left">
              绑定的颜色值，支持纯色和渐变色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              <code>#ff0000</code>
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              commonColors
            </td>
            <td style="text-align: left">
              常用颜色列表
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              <code>[]</code>
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="colorPicker.html#events" class="header-anchor">#</text>
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
              confirm
            </td>
            <td style="text-align: left">
              确认选择颜色时触发
            </td>
            <td style="text-align: left">
              <code>color</code> (String)
            </td>
          </tr>
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
          </tr>
        </tbody>
      </table>
      <text id="slot">
        <text href="colorPicker.html#slot" class="header-anchor">#</text>
        Slot
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
              触发颜色选择器的内容区域
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.colorPicker-page {
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
  margin-left: 10px;
  vertical-align: middle;
}
.badge.tip {
  background: #67c23a;
  color: #fff;
}
</style>
