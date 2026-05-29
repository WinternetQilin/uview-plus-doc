<template>
  <view class="loadingicon-page">
    <view class="theme-default-content content__default">
      <text id="loadingicon-加载动画">
        LoadingIcon 加载动画
      </text>

      <text>
        此组件为一个小动画，目前用在uview-plus的<text href="/components/loadMore">loadMore加载更多</text>等组件的正在加载状态场景。
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
      <text>
        通过<code>mode</code>设定动画的类型，<code>circle</code>为圆圈的形状，<code>flower</code>为经典类似花朵的形状
      </text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="动画文字">动画文字</text>
      <text><code>text</code>可以指定文字内容</text>
      <CodeBlock title="动画文字" language="html" :code="textCode" />
      <text><code>textSize</code>可以指定文字大小</text>
      <CodeBlock title="文字大小" language="html" :code="textSizeCode" />
      <text id="模式类型">模式类型</text>
      <text><code>mode</code>可以指定模式</text>
      <CodeBlock title="模式类型" language="html" :code="modeCode" />
      <text id="排列类型">排列类型</text>
      <text><code>vertical</code>可以指定文字和图标是否垂直排列</text>
      <CodeBlock title="排列类型" language="html" :code="verticalCode" />
      <text id="动画模式">动画模式</text>
      <text>
        <code>timing-function</code>可以指定<code>mode</code>为<code>semicircle</code>或<code>circle</code>时动画里css中<code>animation-timing-function</code>的属性，默认为<code>ease-in-out</code>
      </text>
      <CodeBlock title="动画模式" language="html" :code="timingFunctionCode" />
      <text id="动画运行时间">动画运行时间</text>
      <text><code>duration</code>可以指定动画的运行周期时间</text>
      <CodeBlock title="动画运行时间" language="html" :code="durationCode" />
      <text id="图标颜色">图标颜色</text>
      <text>
        <code>color</code>可以指定动画活动区域的颜色,
        <code>inactive-color</code>可以制定<code>mode</code>为<code>circle</code>时的暗边颜色
      </text>
      <CodeBlock title="图标颜色" language="html" :code="colorCode" />
      <text id="图标尺寸">图标尺寸</text>
      <text>通过<code>size</code>设定尺寸，单位rpx，组件内把<code>size</code>值体现为组件的宽和高</text>
      <CodeBlock title="图标尺寸" language="html" :code="sizeCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<view>
		<up-loading-icon></up-loading-icon>
	</view>
</template>`

const textCode = `<template>
	<view>
		<up-loading-icon text="加载中"></up-loading-icon>
	</view>
</template>`

const textSizeCode = `<template>
	<view>
		<up-loading-icon text="加载中" textSize="18"></up-loading-icon>
	</view>
</template>`

const modeCode = `<template>
	<view>
		<up-loading-icon text="花朵形"></up-loading-icon>
		<up-loading-icon mode="semicircle" text="半圆"></up-loading-icon>
		<up-loading-icon mode="circle" text="圆型"></up-loading-icon>
	</view>
</template>`

const verticalCode = `<template>
	<view>
		<up-loading-icon :vertical="true"></up-loading-icon>
	</view>
</template>`

const timingFunctionCode = `<template>
	<view>
		<up-loading-icon timing-function="linear"></up-loading-icon>
	</view>
</template>`

const durationCode = `<template>
	<view>
		<up-loading-icon duration="2000"></up-loading-icon>
	</view>
</template>`

const colorCode = `<template>
	<view>
		<up-loading-icon color="red"></up-loading-icon>
	</view>
</template>`

const sizeCode = `<template>
	<view>
		<up-loading-icon size="36"></up-loading-icon>
	</view>
</template>`
</script>

<style lang="scss" scoped>
.loadingicon-page {
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
</style>
