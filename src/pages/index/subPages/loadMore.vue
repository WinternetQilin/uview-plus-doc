<template>
  <view class="loadMore-page">
    <view class="theme-default-content content__default">
      <text id="loadmore-加载更多">LoadMore 加载更多</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsC/loadmore/loadmore"
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
      <text>此组件一般用于标识页面底部加载数据时的状态，共有三种状态：</text>
      <view>
        <view>
          加载前，显示"加载更多"，加入点击可选，是因为数据不够一页时，无法触发页面的<code>onReachBottom</code>生命周期
        </view>
        <view>加载中，显示"正在加载..."，2种动画可选</view>
        <view>
          加载后，如果还有数据，回到"加载前"状态，否则加载结束，显示"没有更多了"
        </view>
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
        <view>
          通过<code>status</code>设置组件的状态，加载前值为<code>loadmore</code>，加载中为<code>loading</code>，没有数据为<code>nomore</code>
        </view>
      </view>
      <text>
        注意：以下示例仅为模拟效果，实际中请根据自己的逻辑，修改代码的实现
      </text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="控制组件的提示以及动画效果">控制组件的提示以及动画效果</text>
      <view>
        <view>如果不需要图标，可以设置<code>icon</code>为<code>false</code></view>
        <view>
          可以设置<code>is-dot</code>为<code>true</code>，在没有数据时，内容显示为一个"●"替代默认的"没有更多了"
        </view>
        <view>
          可以通过配置<code>loading-text</code>配置提示的文字，该参数为一个对象值，可以修改默认的文字提示，见如下：
        </view>
      </view>
      <CodeBlock
        title="控制组件的提示以及动画效果"
        language="html"
        :code="customTextCode"
      />
      <text id="线条自定义颜色和设置为虚线">
        线条自定义颜色和设置为虚线 <text class="badge tip">2.0.32</text>
      </text>
      <view>
        <view>可以通过配置<code>dashed</code>和<code>lineColor</code>实现，见如下：</view>
      </view>
      <CodeBlock
        title="线条自定义颜色和设置为虚线"
        language="html"
        :code="dashedCode"
      />
      <text id="手动触发加载更多">手动触发加载更多</text>
      <text>
        有时候可能会因为网络，或者数据不满一页的原因，导致无法上拉触发<code>onReachBottom</code>生命周期，这时候(需<code>status</code>为<code>loadmore</code>状态)，用户点击组件，就会触发<code>loadmore</code>事件，可以在回调中，进行状态的控制和数据的加载，同时也可以修改<code>loadText</code>的<code>loadmore</code>为"上拉或点击加载更多"进行更加人性化的提示。
      </text>
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/loadmore/loadmore.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/loadmore/loadmore.nvue"
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
	<view class="wrap">
		<view class="item up-border-bottom" v-for="(item, index) in list" :key="index">
			<up-cell title="列表项" :value="index + 1"></up-cell>
		</view>
		<up-loadmore :status="status" />
	</view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';
const status = ref('loadmore');
const list = ref([1, 2, 3, 4]);
<\/script>`

const customTextCode = `<template>
	<up-loadmore 
		:status="status" 
		:icon="false"
		:load-text="{loadmore: '上拉或点击加载更多',loading: '正在加载...',nomore: '没有更多了'}"
	></up-loadmore>
</template>`

const dashedCode = `<template>
	<up-loadmore 
		:status="status" 
		:dashed="true"
		line-color="#909399"
	></up-loadmore>
</template>`
</script>

<style lang="scss" scoped>
.loadMore-page {
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
.badge.tip {
  background: #e6f7ff;
  color: #1890ff;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 3px;
  vertical-align: middle;
}
</style>
