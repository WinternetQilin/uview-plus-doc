<template>
  <view class="choose-page">
    <view class="theme-default-content content__default">
      <text id="choose-选择器">
        <text href="choose.html#choose-选择器" class="header-anchor">#</text> Choose 选择器
        <text class="badge tip">3.5.31</text>
      </text>

      <text>选择器组件，用于实现一组选项的单选或自定义操作。</text>
      <text id="使用场景">
        <text href="choose.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>从一组选项中选择单个项目</view>
        <view>时间段选择</view>
        <view>快递时间预约等场景</view>
        <view>可自定义选项的外观和交互</view>
      </view>
      <text id="平台差异说明">
        <text href="choose.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
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
      <text id="基本使用">
        <text href="choose.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <view>
        <view>
          通过<code>options</code>设置选项数据，数据元素需要有<code>id</code>和<code>title</code>字段
        </view>
        <view>通过<code>v-model</code>绑定当前选中项的索引值</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-choose v-model="value" :options="options"&gt;&lt;/up-choose&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'},
  {id: 4, title: '选项4'},
  {id: 5, title: '选项5'},
  {id: 6, title: '选项6'}
])
&lt;/script&gt;</code></pre>
      <text id="不换行显示">
        <text href="choose.html#不换行显示" class="header-anchor">#</text> 不换行显示
      </text>
      <text>通过设置<code>wrap</code>为<code>false</code>可使选项在一行内显示，超出部分可通过滚动查看。</text>
      <pre><code>&lt;template&gt;
  &lt;up-choose v-model="value" :options="options" :wrap="false"&gt;&lt;/up-choose&gt;
&lt;/template&gt;</code></pre>
      <text id="自定义尺寸">
        <text href="choose.html#自定义尺寸" class="header-anchor">#</text> 自定义尺寸
      </text>
      <text>通过<code>itemWidth</code>和<code>itemHeight</code>可以自定义选项的宽高。</text>
      <pre><code>&lt;template&gt;
  &lt;up-choose
    v-model="value"
    :options="options"
    item-width="250rpx"
    item-height="220rpx"&gt;
  &lt;/up-choose&gt;
&lt;/template&gt;</code></pre>
      <text id="快递上门时间预约">
        <text href="choose.html#快递上门时间预约" class="header-anchor">#</text>
        快递上门时间预约
      </text>
      <text>结合<code>up-cate-tab</code>组件可以实现更复杂的交互场景，如快递上门时间预约。</text>
      <pre><code>&lt;template&gt;
  &lt;up-cate-tab height="300px" :tab-list="deliveryOptions" v-model:current="deliveryCurrent"&gt;
    &lt;template v-slot:itemList="{item}"&gt;
      &lt;view class="delivery-time-container"&gt;
        &lt;view class="item-title"&gt;
          &lt;text&gt;{{ item.name }}&lt;/text&gt;
        &lt;/view&gt;
        &lt;view class="item-container"&gt;
          &lt;up-choose
            v-model="item.selectedIndex"
            :options="item.times"
            item-width="460rpx"
            item-height="60rpx"
            @change="onDeliveryTimeChange"&gt;
          &lt;/up-choose&gt;
        &lt;/view&gt;
      &lt;/view&gt;
    &lt;/template&gt;
  &lt;/up-cate-tab&gt;
&lt;/template&gt;</code></pre>
      <text id="自定义选项插槽">
        <text href="choose.html#自定义选项插槽" class="header-anchor">#</text>
        自定义选项插槽
      </text>
      <text>通过插槽可以完全自定义选项的显示内容和样式。</text>
      <pre><code>&lt;template&gt;
  &lt;up-choose v-model="value" :options="options"&gt;
    &lt;template v-slot:slotProps="{ item }"&gt;
      &lt;text&gt;{{ item.title }}&lt;/text&gt;
    &lt;/template&gt;
  &lt;/up-choose&gt;
&lt;/template&gt;</code></pre>
      <text id="自定义点击事件">
        <text href="choose.html#自定义点击事件" class="header-anchor">#</text>
        自定义点击事件
      </text>
      <text>
        通过设置<code>customClick</code>为<code>true</code>并监听<code>custom-click</code>事件可以实现自定义点击逻辑。
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-choose
    v-model="value"
    :options="options"
    :custom-click="true"
    @custom-click="handleCustomClick"&gt;
  &lt;/up-choose&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const value = ref(0)
const options = ref([
  {id: 1, title: '选项1'},
  {id: 2, title: '选项2'},
  {id: 3, title: '选项3'}
])

const handleCustomClick = (item) => {
  console.log('自定义点击:', item)
}
&lt;/script&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="choose.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/choose/choose.nvue"
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
</script>

<style lang="scss" scoped>
.choose-page {
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
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
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
.custom-block {
  background: #f0f9eb;
  border-left: 4px solid #67c23a;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.custom-block text {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #67c23a;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
.badge.tip {
  background: #67c23a;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: top;
  margin-left: 5px;
}
</style>
