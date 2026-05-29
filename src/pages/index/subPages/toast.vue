<template>
  <view class="toast-page">
    <view class="theme-default-content content__default">
      <text id="toast-消息提示">
        Toast 消息提示
      </text>
      <text>Toast 组件主要用于消息通知、加载提示、操作结果提示等醒目提示效果，我们为其提供了多种丰富的API。</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意：</text>
        <text>由于uni中无法通过js创建元素，所以需要在页面中调用<code>&lt;toast /&gt;</code>组件，再通过<code>ref</code>开启</text>
      </view>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
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
      <text id="基本使用">基本使用</text>
      <text>以下为不同能力的toast的具体表现</text>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/toast/toast.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
      <text id="api">API</text>
      <text id="params">Params</text>
      <text>这些参数为通过<code>ref</code>调用<code>&lt;toast/&gt;</code>组件内部的<code>show</code>方法时，需要传递参数</text>
      <table class="api-table">
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
              loading
            </td>
            <td style="text-align:left;">
              是否加载中
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              message
            </td>
            <td style="text-align:left;">
              显示的文本
            </td>
            <td style="text-align:left;">
              String | Number
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
              icon
            </td>
            <td style="text-align:left;">
              图标，或者绝对路径的图片
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
              position
            </td>
            <td style="text-align:left;">
              toast出现的位置
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              center
            </td>
            <td style="text-align:left;">
              top / bottom
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              type
            </td>
            <td style="text-align:left;">
              主题类型
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
              params
            </td>
            <td style="text-align:left;">
              跳转的参数
            </td>
            <td style="text-align:left;">
              Object
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
              duration
            </td>
            <td style="text-align:left;">
              展示时间，单位ms, 值为-1时不自动关闭
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              2000
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              complete
            </td>
            <td style="text-align:left;">
              执行完后的回调函数
            </td>
            <td style="text-align:left;">
              Function
            </td>
            <td style="text-align:left;">
              null
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="methods">Methods</text>
      <text>方法是通过<code>ref</code>调用的，参见上方说明</text>
      <table class="api-table">
        <thead>
          <tr>
            <th style="text-align:left;">
              方法名
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
              show
            </td>
            <td style="text-align:left;">
              显示toast，如需动态修改toast内容，需调用本方法
            </td>
            <td style="text-align:left;">
              see params
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              showLoading
            </td>
            <td style="text-align:left;">
              显示loading
            </td>
            <td style="text-align:left;">
              message: string
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              close
            </td>
            <td style="text-align:left;">
              关闭toast
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <toast ref="toastRef"></toast>
  <up-button @click="showToast">显示toast</up-button>
  <up-button @click="showLoading">显示loading</up-button>
</template>

<script setup>
import { ref } from 'vue';

const toastRef = ref(null);

const showToast = () => {
  toastRef.value.show({
    message: '提示信息',
    duration: 2000
  });
}

const showLoading = () => {
  toastRef.value.showLoading('加载中...');
}
<\/script>`
</script>

<style lang="scss" scoped>
.toast-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
text,
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
view {
  margin: 10px 0;
  padding-left: 20px;
  view {
    margin: 5px 0;
    line-height: 1.6;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e6f7ff;
  color: #1890ff;
  margin-left: 8px;
  vertical-align: middle;
}
.platform-table,
.api-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  th,
  td {
    border: 1px solid #e8e8e8;
    padding: 8px;
  }
  th {
    background: #f5f5f5;
  }
}
.custom-block {
  background: #f6f8fa;
  border-left: 4px solid #3eaf7c;
  padding: 12px 16px;
  margin: 10px 0;
  border-radius: 4px;
  &.warning {
    border-left-color: #e6a23c;
    background: #fdf6ec;
  }
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
