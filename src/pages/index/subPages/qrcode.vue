<template>
  <view class="qrcode-page">
    <view class="theme-default-content content__default">
      <text id="qrcode-二维码">
        Qrcode 二维码
        <text class="badge tip">3.1.51</text>
      </text>
      <view class="demo-placeholder">
        <text>此处应展示 Qrcode 二维码 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsD/qrcode/qrcode"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsD/qrcode/qrcode
          </text>
        </text>
      </view>
      <text>根据提供的字符串前端JS生成二维码展示</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>需要uview-plus版本v3.1.50以上版本</text>
      </view>
      <text id="使用场景">使用场景</text>
      <view>
        <view>展示二维码场景</view>
      </view>
      <text id="平台差异说明">平台差异说明</text>
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
      <text id="基本使用">基本使用</text>
      <view>
        <view>通过<code>size</code>和<code>val</code>设置二维码的大小和内容</view>
        <view>通过<code>background</code>和<code>foreground</code>设置二维码颜色</view>
        <view>通过<code>icon</code>设置二维码中间的logo图片</view>
      </view>
      <CodeBlock title="基本使用" language="vue" :code="basicUsageCode" />
      <text id="加载状态">加载状态</text>
      <text>由于二维码使用前端JS计算生成，因此会有一个计算时间。</text>
      <view>
        <view><code>showLoading</code>参数配置是否显示加载状态</view>
      </view>
      <CodeBlock title="加载状态" language="html" :code="loadingCode" />
      <text id="演示页面源代码地址">演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/qrcode/qrcode.nvue"
          target="_blank"
          class="github-link"
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
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/qrcode/qrcode.nvue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="gitee"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
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
              cid
            </td>
            <td style="text-align: left">
              实例ID字符串(必须)
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
              size
            </td>
            <td style="text-align: left">
              二维码大小
            </td>
            <td style="text-align: left">
              Integer
            </td>
            <td style="text-align: left">
              200
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              val
            </td>
            <td style="text-align: left">
              二维码内容
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
              background
            </td>
            <td style="text-align: left">
              背景色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #ffffff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              foreground
            </td>
            <td style="text-align: left">
              前景色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #000000
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              icon
            </td>
            <td style="text-align: left">
              二维码中间图标
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
              showLoading
            </td>
            <td style="text-align: left">
              显示加载状态
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
              loadingText
            </td>
            <td style="text-align: left">
              加载中提示语
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              二维码生成中
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">Events</text>
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
              result
            </td>
            <td style="text-align: left">
              二维码生成成功
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              longpress
            </td>
            <td style="text-align: left">
              长按事件
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
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
    <view>
        <up-qrcode cid="ex1" :size="200" val="uview-plus"></up-qrcode>
        <up-qrcode cid="ex2" :size="200" val="uview-plus" icon="https://uview-plus.jiangruyi.com/uview-plus/common/logo.png"></up-qrcode>
        <up-qrcode cid="ex3" :size="200" val="uview-plus" background="red" foreground="blue"></up-qrcode>
    </view>
<\/template>`

const loadingCode = `<template>
    <view>
        <up-qrcode cid="ex4" :size="200" val="uview-plus" showLoading loadingText="loading..."></up-qrcode>
    </view>
<\/template>`
</script>

<style lang="scss" scoped>
.qrcode-page {
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
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  vertical-align: middle;
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
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.demo-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px dashed #ccc;
}
.demo-placeholder text {
  color: #666;
  font-size: 14px;
}
.placeholder-tip {
  margin-top: 10px;
}
.placeholder-tip text {
  color: #3eaf7c;
  text-decoration: none;
}
.placeholder-tip text:hover {
  text-decoration: underline;
}
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.warning {
  background: #fff7e6;
  border-left: 4px solid #faad14;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  margin-top: 10px;
}
.github-link:hover {
  color: #3eaf7c;
}
</style>
