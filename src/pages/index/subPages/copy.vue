<template>
  <view class="copy-page">
    <view class="theme-default-content content__default">
      <text id="copy-复制">
        <text href="copy.html#copy-复制" class="header-anchor">#</text>
        Copy 复制
        <text class="badge tip">3.1.52</text>
      </text>
      <text>点击复制</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>需要uview-plus版本v3.1.52以上版本</text>
      </view>
      <text id="使用场景">
        <text href="copy.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>点击页面元素复制文字到剪切板</view>
      </view>
      <text id="平台差异说明">
        <text href="copy.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="copy.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>content</code>设置要复制的文字内容</view>
        <view>通过<code>alertStyle</code>设置提示样式</view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view class="center"&gt;
        &lt;up-copy v-model:show="show" content="复制内容"&gt;
            &lt;view class="btn"&gt;点击复制&lt;/view&gt;
        &lt;/up-copy&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';
const show = ref(false);
&lt;/script&gt;</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.copy-page {
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
  background: #fdf6ec;
  border-left: 4px solid #e6a23c;
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
  background: #67c23a;
  color: #fff;
}
</style>
