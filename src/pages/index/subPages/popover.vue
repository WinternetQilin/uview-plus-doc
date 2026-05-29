<template>
  <view class="popover-page">
    <view class="theme-default-content content__default">
      <text id="popover-弹窗提示">
        Popover 弹窗提示
        <text class="badge tip">3.5.10</text>
      </text>
      <view class="demo-placeholder">
        <text>此处应展示 Popover 弹窗提示 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsC/popover/popover"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsC/popover/popover
          </text>
        </text>
      </view>
      <text>
        Popover组件主要用于点击显示弹窗展示内容，Popover组件实际上与tootip组件高度类似，为减少体积，重复利用代码，因此直接使用tooltip二次封装而成。
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
              x
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
      <view class="custom-block warning">
        <text class="custom-block-title">说明</text>
        <text>
          由于安卓<code>nvue</code>下，<code>overflow</code>属性不支持<code>visible</code>值，故此组件暂不支持安卓<code>nvue</code>环境。
        </text>
      </view>
      <text id="上方弹出">上方弹出</text>
      <CodeBlock title="上方弹出" language="html" :code="topPopupCode" />
      <text id="下方弹出">下方弹出</text>
      <CodeBlock title="下方弹出" language="html" :code="bottomPopupCode" />
      <text id="左侧弹出及强制定位">左侧弹出及强制定位</text>
      <CodeBlock title="左侧弹出及强制定位" language="html" :code="leftPopupCode" />
      <text id="右侧弹出">右侧弹出</text>
      <CodeBlock title="右侧弹出" language="html" :code="rightPopupCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">API</text>
      <text id="tooltip-props">Tooltip Props</text>
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
              text
            </td>
            <td style="text-align: left">
              需要显示的提示文字
            </td>
            <td style="text-align: left">
              String | Number
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
              copyText
            </td>
            <td style="text-align: left">
              点击复制按钮时，复制的文本，为空则使用text值
            </td>
            <td style="text-align: left">
              String | Number
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
              文本大小
            </td>
            <td style="text-align: left">
              String | Number
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
              color
            </td>
            <td style="text-align: left">
              字体颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #606266
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              bgColor
            </td>
            <td style="text-align: left">
              弹出提示框时，文本的背景色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              transparent
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              direction <text class="badge tip">3.4.104</text>
            </td>
            <td style="text-align: left">
              弹出提示的方向，top-上方，bottom-下方, left-左方, right-右方
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              top
            </td>
            <td style="text-align: left">
              bottom
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              zIndex
            </td>
            <td style="text-align: left">
              弹出提示的z-index，nvue无效
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              10071
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showCopy
            </td>
            <td style="text-align: left">
              是否显示复制按钮
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
              buttons
            </td>
            <td style="text-align: left">
              扩展的按钮组
            </td>
            <td style="text-align: left">
              Array
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
              overlay
            </td>
            <td style="text-align: left">
              是否显示透明遮罩以防止触摸穿透
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
              showToast
            </td>
            <td style="text-align: left">
              是否显示复制成功或者失败的<code>toast</code>
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
              triggerMode <text class="badge tip">3.4.104</text>
            </td>
            <td style="text-align: left">
              触发模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              longpress
            </td>
            <td style="text-align: left">
              click
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              popupBgColor <text class="badge tip">3.4.104</text>
            </td>
            <td style="text-align: left">
              弹窗背景色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left" />
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              forcePosition <text class="badge tip">3.5.8</text>
            </td>
            <td style="text-align: left">
              手动强制定位更精确控制,支持指定left/right/top/bottom
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              {}
            </td>
            <td style="text-align: left" />
          </tr>
        </tbody>
      </table>
      <text id="slot">Slot</text>
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
              trigger <text class="badge tip">3.4.104</text>
            </td>
            <td style="text-align: left">
              触发器插槽
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              content <text class="badge tip">3.4.104</text>
            </td>
            <td style="text-align: left">
              弹窗内容插槽
            </td>
          </tr>
        </tbody>
      </table>
      <text id="tooltip-events">Tooltip Events</text>
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
              click
            </td>
            <td style="text-align: left">
              点击触发事件
            </td>
            <td style="text-align: left">
              index，被点击按钮的索引
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const topPopupCode = `<template>
    <up-popover
        text="text5"
        color="#fff"
        bgColor="#333"
        popupBgColor="#333"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-popover>
<\/template>`

const bottomPopupCode = `<template>
    <up-popover
        text="text5"
        color="#333"
        bgColor="#e3e4e6"
        popupBgColor="#f7f7f7"
        direction="bottom"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-popover>
<\/template>`

const leftPopupCode = `<template>
    <up-popover
        text="text5"
        color="#fff"
        bgColor="#333"
        popupBgColor="#333"
        :forcePosition="{right: '108px', top: '0px'}"
        direction="left"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-popover>
<\/template>`

const rightPopupCode = `<template>
    <up-popover
        text="text5"
        color="#333"
        bgColor="#e3e4e6"
        popupBgColor="#f7f7f7"
        direction="right"
    >
        <template #trigger>
            <up-button style="width: 100px" :stop="false" type="primary">点击</up-button>
        </template>
        <template #content>
            <view style="padding: 6px 12px;">自定义内容</view>
        </template>
    </up-popover>
<\/template>`
</script>

<style lang="scss" scoped>
.popover-page {
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
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  vertical-align: middle;
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
.custom-block.warning {
  border-left: 4px solid #e6a23c;
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
