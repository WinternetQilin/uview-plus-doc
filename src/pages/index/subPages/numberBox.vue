<template>
  <view class="number-box-page">
    <view class="theme-default-content content__default">
      <text id="numberbox-步进器">NumberBox 步进器</text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsB/numberBox/numberBox"
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
      <text>该组件一般用于商城购物选择物品数量的场景</text>
      <text>注意：该输入框只能输入大于或等于0的整数</text>
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
        通过<code>v-model</code>绑定<code>modelValue</code>初始值，此值是双向绑定的，<strong>无需</strong>在回调中将返回的数值重新赋值给<code>modelValue</code>。
      </text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="步长设置">步长设置</text>
      <view>
        <view>
          通过<code>step</code>属性设置每次点击增加或减少按钮时变化的值，默认为1，下面示例每次都会加2或者减2
        </view>
      </view>
      <CodeBlock title="步长设置" language="html" :code="stepCode" />
      <text id="限制输入范围">限制输入范围</text>
      <text>通过<code>min</code>和<code>max</code>参数限制输的入值最小值和最大值</text>
      <CodeBlock title="限制输入范围" language="html" :code="rangeCode" />
      <text id="限制只能输入整数">限制只能输入整数</text>
      <text>通过<code>integer</code>限制输入类型</text>
      <CodeBlock title="限制只能输入整数" language="html" :code="integerCode" />
      <text id="禁用">禁用</text>
      <text>通过设置`disabled`参数来禁用输入框，禁用状态下无法点击加减按钮或修改输入框的值</text>
      <CodeBlock title="禁用" language="html" :code="disabledCode" />
      <text id="禁用操作按钮">禁用操作按钮</text>
      <text>通过设置`disabledPlus`或`disabledMinus`分别禁用"+"按钮或"-"按钮</text>
      <CodeBlock title="禁用操作按钮" language="html" :code="disabledBtnCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/numberBox/numberBox.nvue"
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
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/numberBox/numberBox.nvue"
          target="_blank"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
            width="30"
          />
          gitee
        </text>
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
              v-model / modelValue
            </td>
            <td style="text-align: left">
              输入框初始值（双向绑定）
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
              disabled
            </td>
            <td style="text-align: left">
              是否禁用输入框
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
              min
            </td>
            <td style="text-align: left">
              最小值
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
              max
            </td>
            <td style="text-align: left">
              最大值
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              99999
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              step
            </td>
            <td style="text-align: left">
              步长，每次加/减的值
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
              integer
            </td>
            <td style="text-align: left">
              是否只能输入正整数
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
              disabledPlus
            </td>
            <td style="text-align: left">
              是否禁用加号按钮
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
              disabledMinus
            </td>
            <td style="text-align: left">
              是否禁用减号按钮
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
              plusDisabled / minusDisabled
            </td>
            <td style="text-align: left">
              (已废弃，请使用disabledPlus/disabledMinus)
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
              值发生改变时触发
            </td>
            <td style="text-align: left">
              value: Number
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              overlimit
            </td>
            <td style="text-align: left">
              超过限制时触发
            </td>
            <td style="text-align: left">
              type: String，"plus"或"minus"
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              minus
            </td>
            <td style="text-align: left">
              点击减号时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              plus
            </td>
            <td style="text-align: left">
              点击加号时触发
            </td>
            <td style="text-align: left">
              -
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
              minus-icon
            </td>
            <td style="text-align: left">
              自定义减号图标
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              plus-icon
            </td>
            <td style="text-align: left">
              自定义加号图标
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
  <view>
    <up-number-box :value="value" @change="change"></up-number-box>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);
const change = (value: number) => {
  console.log('值变为：', value);
}
<\/script>`

const stepCode = `<up-number-box :step="2"></up-number-box>`

const rangeCode = `<up-number-box :min="1" :max="100"></up-number-box>`

const integerCode = `<up-number-box integer></up-number-box>`

const disabledCode = `<up-number-box :value="0" disabled></up-number-box>`

const disabledBtnCode = `<template>
  <up-number-box :disabledMinus="true" :value="1"></up-number-box>
  <up-number-box :disabledPlus="true" :value="value"></up-number-box>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const value = ref(0);
<\/script>`
</script>

<style lang="scss" scoped>
.number-box-page {
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
