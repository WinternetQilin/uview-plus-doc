<template>
  <view class="rate-page">
    <view class="theme-default-content content__default">
      <text id="rate-评分">Rate 评分</text>
      <view class="demo-placeholder">
        <text>此处应展示 Rate 评分 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsA/rate/rate"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsA/rate/rate
          </text>
        </text>
      </view>
      <text>该组件一般用于满意度调查，星型评分的场景。</text>
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
        <view>通过<code>count</code>参数设置总共有多少颗星星可选择</view>
        <view>通过<code>v-model</code>双向绑定初始化时默认选中的星星数量</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="自定义样式">自定义样式</text>
      <view>
        <view>通过<code>active-color</code>设置选中的星星的颜色</view>
        <view>通过<code>inactive-color</code>设置未选中时星星的颜色</view>
        <view>通过<code>gutter</code>设置星星的间距，左右内边距各占<code>gutter</code>的一半</view>
      </view>
      <CodeBlock title="自定义样式" language="html" :code="customStyleCode" />
      <text id="自定义图标">自定义图标</text>
      <view>
        <view>通过<code>active-icon</code>设置激活的图标</view>
        <view>通过<code>inactive-icon</code>设置未激活的图标</view>
      </view>
      <text>下方示例为使用心形图标替代默认的星星图标：</text>
      <CodeBlock title="自定义图标" language="html" :code="customIconCode" />
      <text id="最少选中的数量">最少选中的数量</text>
      <CodeBlock title="最少选中数量" language="html" :code="minCountCode" />
      <text id="禁用状态">禁用状态</text>
      <text>禁用下，无法点击或者滑动选择，但是可以通过<code>value</code>设置默认选中的数量，禁用状态下用来展示分数，允许出现半星</text>
      <CodeBlock title="禁用状态" language="html" :code="disabledCode" />
      <text id="只读状态">只读状态</text>
      <text>只读下，无法点击或者滑动选择，但是可以通过<code>value</code>设置默认选中的数量，只读状态下用来展示分数，允许出现半星</text>
      <CodeBlock title="只读状态" language="html" :code="readonlyCode" />
      <text id="演示页面源代码地址">演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/rate/rate.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/rate/rate.nvue"
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
              modelValue
            </td>
            <td style="text-align: left">
              双向绑定选择星星的数量
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              1
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              count
            </td>
            <td style="text-align: left">
              最多可选的星星数量
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              5
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              disabled
            </td>
            <td style="text-align: left">
              是否禁止用户操作
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
          <tr>
            <td style="text-align: left">
              readonly
            </td>
            <td style="text-align: left">
              是否只读
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
          <tr>
            <td style="text-align: left">
              size
            </td>
            <td style="text-align: left">
              星星的大小，单位rpx
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              18
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
              未选中星星的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #b2b2b2
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              activeColor
            </td>
            <td style="text-align: left">
              选中的星星颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #FA3534
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              gutter
            </td>
            <td style="text-align: left">
              星星之间的距离
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              4
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              minCount
            </td>
            <td style="text-align: left">
              最少选中星星的个数
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              1
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              allowHalf
            </td>
            <td style="text-align: left">
              是否允许半星选择
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
          <tr>
            <td style="text-align: left">
              activeIcon
            </td>
            <td style="text-align: left">
              选中时的图标名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              star-fill
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              inactiveIcon
            </td>
            <td style="text-align: left">
              未选中时的图标名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              star
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              touchable
            </td>
            <td style="text-align: left">
              是否可以通过滑动手势选择评分
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
              change
            </td>
            <td style="text-align: left">
              选中的星星发生变化时触发
            </td>
            <td style="text-align: left">
              value：当前选中的星星的数量
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
    <up-rate v-model="value" :count="5"></up-rate>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(1);
<\/script>`

const customStyleCode = `<template>
    <up-rate 
        active-color="#FA3534" 
        inactive-color="#b2b2b2" 
        :gutter="20"
    ></up-rate>
<\/template>

<script setup lang="ts">
<\/script>`

const customIconCode = `<template>
    <up-rate 
        activeIcon="heart-fill" 
        inactiveIcon="heart"
    ></up-rate>
<\/template>

<script setup lang="ts">
<\/script>`

const minCountCode = `<template>
    <up-rate :minCount="5"></up-rate>
<\/template>

<script setup lang="ts">
<\/script>`

const disabledCode = `<template>
    <up-rate :value="3.7" disabled></up-rate>
<\/template>

<script setup lang="ts">
<\/script>`

const readonlyCode = `<template>
    <up-rate :value="3.7" readonly></up-rate>
<\/template>

<script setup lang="ts">
<\/script>`
</script>

<style lang="scss" scoped>
.rate-page {
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
