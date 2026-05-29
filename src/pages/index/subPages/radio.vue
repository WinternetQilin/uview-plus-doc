<template>
  <view class="radio-page">
    <view class="theme-default-content content__default">
      <text id="radio-单选框">Radio 单选框</text>
      <view class="demo-placeholder">
        <text>此处应展示 Radio 单选框 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsA/radio/radio"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsA/radio/radio
          </text>
        </text>
      </view>
      <text>单选框用于有一个选择，用户只能选择其中一个的场景。</text>
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
        <view>该组件需要搭配<code>radioGroup</code>组件使用，以便用户进行操作时，获得当前单选框组的选中情况</view>
        <view>通过<code>v-model</code>给<code>radioGroup</code>组件绑定一个变量，对应的<code>name</code>将会被选中</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="自定义形状">自定义形状</text>
      <text>可以通过设置<code>shape</code>为<code>square</code>或者<code>circle</code>，将单选框设置为方形或者圆形</text>
      <CodeBlock title="自定义形状" language="html" :code="shapeCode" />
      <text id="禁用radio">禁用radio</text>
      <text>设置<code>disabled</code>为<code>true</code>，即可禁用某个组件，让用户无法点击</text>
      <CodeBlock title="禁用radio" language="html" :code="disabledCode" />
      <text id="是否禁止点击提示语选中复选框">是否禁止点击提示语选中复选框</text>
      <text>设置<code>labelDisabled</code>为<code>true</code>，即可禁止点击提示语选中复选框</text>
      <CodeBlock title="禁止点击提示语" language="html" :code="labelDisabledCode" />
      <text id="自定义颜色">自定义颜色</text>
      <text>此处所指的颜色，为<code>radio</code>选中时的背景颜色，参数为<code>activeColor</code></text>
      <CodeBlock title="自定义颜色" language="html" :code="customColorCode" />
      <text id="横向排列形式">横向排列形式</text>
      <text>可以通过设置<code>placement</code>为<code>row</code>或者<code>column</code>，将复选框设置为横向排列或者竖向排列</text>
      <CodeBlock title="横向排列" language="html" :code="placementCode" />
      <text id="横向两端排列形式">横向两端排列形式</text>
      <text>可以通过设置<code>iconPlacement</code>为<code>left</code>或者<code>right</code>，将复选框勾选图标的对齐设置为左对齐或者右对齐</text>
      <CodeBlock title="横向两端排列" language="html" :code="iconPlacementCode" />
      <text id="演示页面源代码地址">演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/radio/radio.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/radio/radio.nvue"
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
      <text id="radio-props">Radio Props</text>
      <text>注意：<code>radio</code>和<code>radio-group</code>二者同名参数中，<code>radio</code>的参数优先级更高。</text>
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
              name
            </td>
            <td style="text-align: left">
              radio的名称
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              shape
            </td>
            <td style="text-align: left">
              形状，square为方形，circle为圆型
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              square
            </td>
            <td style="text-align: left">
              circle
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              disabled
            </td>
            <td style="text-align: left">
              是否禁用
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelDisabled
            </td>
            <td style="text-align: left">
              是否禁止点击提示语选中复选框
            </td>
            <td style="text-align: left">
              String / Boolean
            </td>
            <td style="text-align: left">
              -
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
              选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
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
              未选中的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconSize
            </td>
            <td style="text-align: left">
              图标的大小，单位px
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelSize
            </td>
            <td style="text-align: left">
              label的字体大小，px单位
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              label提示文字
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              size
            </td>
            <td style="text-align: left">
              整体的大小
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconColor
            </td>
            <td style="text-align: left">
              图标颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelColor
            </td>
            <td style="text-align: left">
              label的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="radiogroup-props">radioGroup Props</text>
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
              绑定的值
            </td>
            <td style="text-align: left">
              String/Number/Boolean
            </td>
            <td style="text-align: left">
              -
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
              是否禁用全部radio
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
              shape
            </td>
            <td style="text-align: left">
              形状，circle-圆形，square-方形
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              circle
            </td>
            <td style="text-align: left">
              square
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              activeColor
            </td>
            <td style="text-align: left">
              选中状态下的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #2979ff
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
              未选中的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c8c9cc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              size
            </td>
            <td style="text-align: left">
              整个组件的尺寸，默认px
            </td>
            <td style="text-align: left">
              String / Number
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
              placement
            </td>
            <td style="text-align: left">
              布局方式，row-横向，column-纵向
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              row
            </td>
            <td style="text-align: left">
              column
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              文本
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelColor
            </td>
            <td style="text-align: left">
              label的字体颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #303133
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelSize
            </td>
            <td style="text-align: left">
              label的字体大小，px单位
            </td>
            <td style="text-align: left">
              String / Number
            </td>
            <td style="text-align: left">
              14
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelDisabled
            </td>
            <td style="text-align: left">
              是否禁止点击文本操作
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
              iconColor
            </td>
            <td style="text-align: left">
              图标颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #ffffff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconSize
            </td>
            <td style="text-align: left">
              图标的大小，单位px
            </td>
            <td style="text-align: left">
              String / Number
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
              borderBottom
            </td>
            <td style="text-align: left">
              竖向配列时，是否显示下划线
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
              iconPlacement
            </td>
            <td style="text-align: left">
              勾选图标的对齐方式，left-左边，right-右边
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              right
            </td>
          </tr>
        </tbody>
      </table>
      <text id="radio-slot">Radio Slot</text>
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
              icon
            </td>
            <td style="text-align: left">
              自定义<code>icon</code>内容
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              自定义<code>label</code>内容
            </td>
          </tr>
        </tbody>
      </table>
      <text id="radio-event">radio Event</text>
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
              某个<code>radio</code>状态发生变化时触发
            </td>
            <td style="text-align: left">
              name: 通过props传递的name参数
            </td>
          </tr>
        </tbody>
      </table>
      <text id="radiogroup-event">radioGroup Event</text>
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
              任一个<code>radio</code>状态发生变化时触发
            </td>
            <td style="text-align: left">
              name: 值为radio通过props传递的name值
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
    <up-radio-group v-model="value">
        <up-radio name="1">备选项1</up-radio>
        <up-radio name="2">备选项2</up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('1');
<\/script>`

const shapeCode = `<template>
    <up-radio-group v-model="value">
        <up-radio shape="circle" label="月明人倚楼"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`

const disabledCode = `<template>
    <up-radio-group v-model="value">
        <up-radio :disabled="true" label="明月几时有"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`

const labelDisabledCode = `<template>
    <up-radio-group v-model="value">
        <up-radio :labelDisabled="true" label="明月几时有"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`

const customColorCode = `<template>
    <up-radio-group v-model="value">
        <up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`

const placementCode = `<template>
    <up-radio-group 
        v-model="value"
        placement="row"
    >
        <up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`

const iconPlacementCode = `<template>
    <up-radio-group 
        v-model="value"
        iconPlacement="right"
    >
        <up-radio activeColor="red" label="思悠悠，恨悠悠，恨到归时方始休"></up-radio>
    </up-radio-group>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
<\/script>`
</script>

<style lang="scss" scoped>
.radio-page {
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
