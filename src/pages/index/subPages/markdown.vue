<template>
  <view class="markdown-page">
    <view class="theme-default-content content__default">
      <text id="markdown-文本解析">
        Markdown 文本解析 <text class="badge tip">3.4.100</text>
      </text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsD/markdown/markdown"
            class="iframe"
          />
        </view>
        <text
          target="_blank"
          href="https://ijry.github.io/uview-plus/text/#"
          class="open-link"
        >
          打开
        </text>
      </view>
      <text>
        该组件基于 <code>marked</code>（库大小40KB） 实现，支持将 Markdown
        文本解析为富文本内容。
      </text>
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
      <text id="基础用法">基础用法</text>
      <text>通过 <code>content</code> 属性传入 Markdown 文本内容。</text>
      <CodeBlock title="基础用法" language="html" :code="basicUsageCode" />
      <text id="显示代码块行号">显示代码块行号</text>
      <text>通过 <code>show-line-number</code> 属性控制是否显示代码块行号。</text>
      <CodeBlock
        title="显示代码块行号"
        language="html"
        :code="showLineNumberCode"
      />
      <text id="深色主题">深色主题</text>
      <text>
        通过 <code>theme</code> 属性设置主题样式，可选值为
        <code>light</code>（默认）和 <code>dark</code>。
      </text>
      <CodeBlock title="深色主题" language="html" :code="darkThemeCode" />
      <text id="ai流式内容显示">AI流式内容显示</text>
      <text>模拟AI逐步输出文字的效果。</text>
      <CodeBlock title="AI流式内容显示" language="html" :code="streamingCode" />
      <text id="props">Props</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>content</td>
            <td>markdown内容</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>previewImg</td>
            <td>是否启用图片预览</td>
            <td>Boolean</td>
            <td>true</td>
            <td>true / false</td>
          </tr>
          <tr>
            <td>showLineNumber</td>
            <td>是否显示代码块行号</td>
            <td>Boolean</td>
            <td>false</td>
            <td>true / false</td>
          </tr>
          <tr>
            <td>theme</td>
            <td>主题样式</td>
            <td>String</td>
            <td>light</td>
            <td>light / dark</td>
          </tr>
        </tbody>
      </table>
      <text id="event">Event</text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="basicContent"><\/up-markdown>
		<\/view>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue'
const basicContent = ref(\`
# 标题一
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`

const showLineNumberCode = `<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="codeContent" :show-line-number="true"><\/up-markdown>
		<\/view>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue'
const codeContent = ref(\`
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`

const darkThemeCode = `<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="basicContent" theme="dark"><\/up-markdown>
		<\/view>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue'
const basicContent = ref(\`
# 标题一
\\\`\\\`\\\`javascript
console.log('hello')
\\\`\\\`\\\`
\`)
<\/script>`

const streamingCode = `<template>
	<view class="u-page">
		<view class="u-page__item">
			<up-markdown :content="streamingContent" :show-line-number="true"><\/up-markdown>
		<\/view>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue'
const streamingContent = ref('')
const timer = setInterval(() => {
	const content = '# 流式输出\\n这是一个模拟AI流式输出的示例'
	if (streamingContent.value.length < content.length) {
		streamingContent.value += content.charAt(streamingContent.value.length)
	} else {
		clearInterval(timer)
	}
}, 100)
<\/script>`
</script>

<style lang="scss" scoped>
.markdown-page {
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
.demo-model {
  position: relative;
  width: 100%;
  height: 700px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px 0;
  background-image: url(/common/iPhone13.png);
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
.badge.tip {
  background: #e6f7ff;
  color: #1890ff;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 3px;
  vertical-align: middle;
}
</style>
