<template>
  <view class="list-page">
    <view class="theme-default-content content__default">
      <text id="list-列表">List 列表</text>

      <text>
        该组件为通用列表组件，在nvue使用list高性能组件实现，在非nvue使用普通scorll-view实现。
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
      <view>
        <view>配合组件<code>up-list-item</code>嵌套使用</view>
        <view>参数<code>show-scrollbar</code>是否出现滚动条仅在nvue中有效</view>
        <view>事件<code>@scroll-to-lower</code>滚动到底部触发事件</view>
      </view>
      <CodeBlock
        title="基本使用 (Composition API)"
        language="html"
        :code="basicUsageCode"
      />
      <CodeBlock
        title="基本使用 (Options API)"
        language="html"
        :code="optionsApiCode"
      />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/list/list.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/list/list.nvue"
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
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<view class="u-page">
		<up-list
			@scrolltolower="scrolltolower">
			<up-list-item>
				<up-cell title="标题文字" value="内容"></up-cell>
			</up-list-item>
		</up-list>
	</view>
<\/template>

<script setup lang="ts">
const scrolltolower = () => {
	console.log('滚动到底部');
}
<\/script>`

const optionsApiCode = `<template>
	<view class="u-page">
		<up-list
			@scrolltolower="scrolltolower">
			<up-list-item>
				<up-cell title="标题文字" value="内容"></up-cell>
			</up-list-item>
		</up-list>
	</view>
<\/template>

<script>
export default {
	data() {
		return {
		}
	},
	methods: {
		scrolltolower() {
			console.log('滚动到底部');
		}
	}
}
<\/script>`
</script>

<style lang="scss" scoped>
.list-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
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
.github-link {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
</style>
