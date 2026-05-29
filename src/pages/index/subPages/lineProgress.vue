<template>
  <view class="lineProgress-page">
    <view class="theme-default-content content__default">
      <text id="lineprogress-线形进度条">LineProgress 线形进度条</text>

      <text>
        展示操作或任务的当前进度，比如上传文件，是一个线形的进度条。
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
        <view>
          <code>percentage</code>设置当前的进度值，该值区间为0-100.
        </view>
        <view>
          <code>activeColor</code>设置进度条的颜色
        </view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="不显示百分比">不显示百分比</text>
      <text>不显示百分比值信息</text>
      <view>
        <view><code>show-text</code>参数配置是否显示进度条内百分值</view>
      </view>
      <CodeBlock
        title="不显示百分比"
        language="html"
        :code="showTextCode"
      />
      <text id="自定义高度">自定义高度</text>
      <view>
        <view><code>height</code>进度条高度</view>
      </view>
      <CodeBlock
        title="自定义高度"
        language="html"
        :code="heightCode"
      />
      <text id="自定义样式-不支持安卓环境的nvue">自定义样式(不支持安卓环境的nvue)</text>
      <view>
        <view>自定义的数值样式嵌套在默认插槽里</view>
      </view>
      <CodeBlock
        title="自定义样式"
        language="html"
        :code="customStyleCode"
      />
      <text id="手动加减">手动加减</text>
      <view>
        <view>通过控制<code>percentage</code>参数数值达到增减</view>
      </view>
      <CodeBlock title="手动加减" language="typescript" :code="manualCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/progress/progress.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/progress/progress.nvue"
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
              activeColor
            </td>
            <td style="text-align: left">
              进度条激活部分的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #19be6b
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              inactiveColor
            </td>
            <td style="text-align: left">
              进度条的底色，默认为灰色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #ececec
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              percentage
            </td>
            <td style="text-align: left">
              进度百分比，数值
            </td>
            <td style="text-align: left">
              String | Number
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
              showText
            </td>
            <td style="text-align: left">
              是否在进度条内部显示百分比的值
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
              height
            </td>
            <td style="text-align: left">
              进度条的高度，默认单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              12
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              fromRight
            </td>
            <td style="text-align: left">
              是否从右往左
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
      <text id="slots">Slots</text>
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
              传入自定义的显示内容，将会覆盖默认显示的百分比值
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
	<up-line-progress :percentage="30" activeColor="#ff0000"></up-line-progress>
</template>`

const showTextCode = `<template>
	<up-line-progress :percentage="30" :showText="false"></up-line-progress>
</template>`

const heightCode = `<template>
	<up-line-progress :percentage="30" height="8"></up-line-progress>
</template>`

const customStyleCode = `<template>
	<up-line-progress :percentage="30">
		<text class="u-percentage-slot">{{30}}%</text>
	</up-line-progress>
</template>

<style lang="scss" scoped>
.u-percentage-slot {
	padding: 1px 5px;
	background-color: $u-warning;
	color: #fff;
	border-radius: 100px;
	font-size: 10px;
	margin-right: -5px;
}
</style>`

const manualCode = `<template>
	<view style="margin-top: 50px;">
		<up-line-progress :percentage="percentage" />
		<view style="display: flex; margin-top: 100px;">
			<button @click="computedWidth('minus')">减少</button>
			<button @click="computedWidth('plus')">增加</button>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const percentage = ref(30);

const computedWidth = (type) => {
	if (type === 'plus') {
		percentage.value += 10;
	} else {
		percentage.value -= 10;
	}
}
<\/script>`
</script>

<style lang="scss" scoped>
.lineProgress-page {
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
