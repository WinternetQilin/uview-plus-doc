<template>
  <view class="navbar-mini-page">
    <view class="theme-default-content content__default">
      <text id="navbarmini-迷你导航栏">NavbarMini 迷你导航栏</text>
      <text>此组件一般用于在全屏页面中，典型的比如微信小程序左上角。</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsD/navbarMini/navbarMini"
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
      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>
          右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的"演示"扫码查看实际效果。
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
      <text>
        默认情况下，该组件只有向左的箭头及返回主页的按钮，<strong>点击</strong>向左的箭头可以返回上一页。
      </text>
      <view>
        <view>通过<code>fixed</code>配置是否将导航栏固定在顶部</view>
      </view>
      <view class="custom-block tip">
        <text class="custom-block-title">说明</text>
        <view>
          <view>非常适合在小程序全屏页面中，避开导航栏右侧的胶囊位置。</view>
        </view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="注意事项">注意事项</text>
      <text>
        既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。
      </text>
      <CodeBlock title="pages.json配置" language="javascript" :code="pagesJsonCode" />
      <text id="导航栏高度">导航栏高度</text>
      <text>组件内部会自动加上状态栏的高度，并填充状态栏的占位区域。</text>
      <text id="自定义导航栏内容">自定义导航栏内容</text>
      <text>通过自定义<code>slot</code>传入的内容</text>
      <CodeBlock
        title="自定义导航栏内容"
        language="html"
        :code="slotContentCode"
      />
      <text id="自定义导航栏背景颜色">自定义导航栏背景颜色</text>
      <text>
        uview-plus提供了一个<code>bgColor</code>参数，可以自定义导航栏的背景颜色：
      </text>
      <CodeBlock
        title="自定义导航栏背景颜色"
        language="html"
        :code="bgColorCode"
      />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/navbarMini/navbarMini.nvue"
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
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar-mini
            @leftClick="leftClick"
            :autoBack="true"
            homeUrl="/pages/index/index"
        ></up-navbar-mini>
	</view>
<\/template>

<script setup lang="ts">
// 定义方法
const leftClick = () => {  
    console.log('leftClick');
};  
<\/script>`

const pagesJsonCode = `// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom", // 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]`

const slotContentCode = `<template>
	<view>
        <up-navbar-mini
            :safeAreaInsetTop="false"
        >
            <template #left>
                <up-icon
                    name="arrow-left"
                    size="19"
                ></up-icon>
            </template>
        </up-navbar-mini>
	</view>
<\/template>

<script setup lang="ts">
<\/script>`

const bgColorCode = `<template>
	<view>
		<up-navbar-mini fixed :bgColor="'bgColor'"></up-navbar-mini>
		<view class="content">
			<!-- 正文内容 -->
		</view>
	</view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

// 创建响应式数据  
const bgColor = ref('#001f3f');  
<\/script>`
</script>

<style lang="scss" scoped>
.navbar-mini-page {
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
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
</style>
