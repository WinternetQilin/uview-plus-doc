<template>
  <view class="modal-page">
    <view class="theme-default-content content__default">
      <text id="modal-模态框">Modal 模态框</text>
      <text>弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsC/modal/modal"
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
      <text>默认情况下，模态框只有一个<code>确认</code>按钮：</text>
      <view>
        <view>请至少要配置弹框的内容参数<code>content</code>。</view>
        <view>通过<code>show</code>绑定一个布尔变量来控制模态框的显示与否。</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="传入富文本内容">传入富文本内容</text>
      <text>
        有时候我们需要给模态框的内容，不一定是纯文本的字符串，可能会需要换行，嵌入其他元素等，这时候我们可以使用<code>slot</code>功能，再结合uni-app<code>richText</code>组件，就能传入富文本内容了，如下演示：
      </text>
      <CodeBlock
        title="传入富文本内容"
        language="html"
        :code="richTextCode"
      />
      <text id="异步关闭">异步关闭</text>
      <text>
        异步关闭只对"确定"按钮起作用，需要设置<code>asyncClose</code>为<code>true</code>，当点击确定按钮的时候，按钮的文字变成一个loading动画，此动画的颜色为<code>confirm-color</code>参数的颜色，同时Modal不会自动关闭，需要手动设置通过<code>show</code>绑定的变量为<code>false</code>来实现手动关闭。
      </text>
      <CodeBlock title="异步关闭" language="html" :code="asyncCloseCode" />
      <text id="点击遮罩关闭">点击遮罩关闭</text>
      <text>
        有时候我们不显示"关闭"按钮的时候，需要点击遮罩也可以关闭Modal，这时通过配置<code>closeOnClickOverlay</code>为<code>true</code>即可（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
      </text>
      <CodeBlock
        title="点击遮罩关闭"
        language="html"
        :code="overlayCloseCode"
      />
      <text id="控制模态框宽度">控制模态框宽度</text>
      <text>可以通过设置<code>width</code>参数控制模态框的宽度，不支持百分比，可以数值，px，rpx单位</text>
      <CodeBlock title="控制模态框宽度" language="html" :code="widthCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<view>
		<up-modal :show="show" :title="title" :content="'content'"></up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
<\/script>`

const richTextCode = `<template>
	<view>
		<up-modal :show="show" :title="title">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</up-modal>
		<up-button @click="show = true">打开</up-button>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
const content = ref(\`空山新雨后<br>天气晚来秋\`);
<\/script>`

const asyncCloseCode = `<template>
	<view>
		<up-modal 
			:show="show" 
			:title="title" 
			:content="content" 
			:async-close="true"
			@confirm="confirm"
			@close="close"
		></up-modal>
	<\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
const content = ref('确定要删除吗？');

const confirm = () => {
	console.log('点击了确定');
	setTimeout(() => {
		show.value = false;
	}, 1000);
}

const close = () => {
	show.value = false;
}
<\/script>`

const overlayCloseCode = `<up-modal 
	:show="show"
	:close-on-click-overlay="true"
></up-modal>`

const widthCode = `<up-modal 
	:show="show"
	width="300px"
></up-modal>`
</script>

<style lang="scss" scoped>
.modal-page {
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
</style>
