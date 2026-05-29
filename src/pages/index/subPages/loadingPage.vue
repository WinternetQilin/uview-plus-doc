<template>
  <view class="loadingpage-page">
    <view class="theme-default-content content__default">
      <text id="loadingpage-加载页">LoadingPage 加载页</text>

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
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="显示或隐藏">显示或隐藏</text>
      <text><code>loading</code>可以指定是否显示加载页</text>
      <CodeBlock title="显示或隐藏" language="html" :code="loadingCode" />
      <text id="文字内容">文字内容</text>
      <text><code>loading-text</code>可以指定提示内容</text>
      <CodeBlock title="文字内容" language="html" :code="loadingTextCode" />
      <text id="动画模式">动画模式</text>
      <text><code>loading-mode</code>可以指定加载动画的模式, 默认为<code>circle</code></text>
      <CodeBlock title="动画模式" language="html" :code="loadingModeCode" />
      <text id="动画图片">动画图片</text>
      <text><code>image</code>可以指定文字上方用于替换loading动画的图片</text>
      <CodeBlock title="动画图片" language="html" :code="imageCode" />
      <text id="文字颜色">文字颜色</text>
      <text><code>color</code>可以指定文字颜色</text>
      <CodeBlock title="文字颜色" language="html" :code="colorCode" />
      <text id="文字大小">文字大小</text>
      <text><code>font-size</code>可以指定文字大小</text>
      <CodeBlock title="文字大小" language="html" :code="fontSizeCode" />
      <text id="图标大小">图标大小 <text class="badge tip">2.0.32</text></text>
      <text><code>icon-size</code>可以指定图标大小</text>
      <CodeBlock title="图标大小" language="html" :code="iconSizeCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<up-loading-page></up-loading-page>
</template>`

const loadingCode = `<template>
	<up-loading-page :loading="true"></up-loading-page>
</template>`

const loadingTextCode = `<template>
	<up-loading-page loading-text="loading..."></up-loading-page>
</template>`

const loadingModeCode = `<template>
	<up-loading-page loading-mode="spinner"></up-loading-page>
</template>`

const imageCode = `<template>
	<up-loading-page image="/static/logo.png"></up-loading-page>
</template>`

const colorCode = `<template>
	<up-loading-page color="#666"></up-loading-page>
</template>`

const fontSizeCode = `<template>
	<up-loading-page font-size="24"></up-loading-page>
</template>`

const iconSizeCode = `<template>
	<up-loading-page icon-size="36"></up-loading-page>
</template>`
</script>

<style lang="scss" scoped>
.loadingpage-page {
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

.model-content {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  position: relative;
  top: 33px;
}
.iframe {
  width: 100%;
  height: 100%;
}
.open-link {
  position: absolute;
  right: 20px;
  top: 60px;
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
.badge.tip {
  background: #e6f7ff;
  color: #1890ff;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 3px;
  vertical-align: middle;
}
</style>
