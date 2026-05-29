<template>
  <view class="tooltip-page">
    <view class="theme-default-content content__default">
      <text id="tooltip-长按提示">Tooltip 长按提示</text>
      <text>Tooltip组件主要用于长按操作，类似微信的长按气泡</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
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
      <text id="基本使用">基本使用</text>
      <view class="custom-block warning">
        <text class="custom-block-title">说明</text>
        <text>
          由于安卓<code>nvue</code>下，<code>overflow</code>属性不支持<code>visible</code>值，故此组件暂不支持安卓<code>nvue</code>环境。
        </text>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="下方显示">下方显示</text>
      <CodeBlock title="下方显示" language="html" :code="bottomCode" />
      <text id="扩展按钮">扩展按钮</text>
      <CodeBlock title="扩展按钮" language="html" :code="actionsCode" />
      <text id="高亮选中文本背景色">高亮选中文本背景色</text>
      <CodeBlock
        title="高亮选中文本背景色"
        language="html"
        :code="bgColorCode"
      />
      <text id="左侧弹出及强制定位">左侧弹出及强制定位</text>
      <CodeBlock title="左侧弹出及强制定位" language="html" :code="leftCode" />
      <text id="右侧弹出">右侧弹出</text>
      <CodeBlock title="右侧弹出" language="html" :code="rightCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/tooltip/tooltip.vue"
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
      <text id="tooltip-props">Tooltip Props</text>
      <table class="props-table">
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
              direction <text class="badge">3.4.104</text>
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
              triggerMode <text class="badge">3.4.104</text>
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
              popupBgColor <text class="badge">3.4.104</text>
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
              forcePosition <text class="badge">3.5.8</text>
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
      <table class="props-table">
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
              trigger <text class="badge">3.4.104</text>
            </td>
            <td style="text-align: left">
              触发器插槽
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              content <text class="badge">3.4.104</text>
            </td>
            <td style="text-align: left">
              弹窗内容插槽
            </td>
          </tr>
        </tbody>
      </table>

      <text id="tooltip-events">Tooltip Events</text>
      <table class="props-table">
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

const basicUseCode = `<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false },
      { name: '编辑', copy: false },
      { name: '删除', copy: false }
    ]"
  >长按弹出气泡</up-tooltip>
</template>`

const bottomCode = `<template>
  <up-tooltip
    placement="bottom"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >下方弹出气泡</up-tooltip>
</template>`

const actionsCode = `<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '选项一', copy: false, prefixIcon: 'plus' },
      { name: '选项二', copy: false, prefixIcon: 'trash' },
      { name: '选项三', copy: false, suffixIcon: 'arrow-right' }
    ]"
  >扩展按钮</up-tooltip>
</template>`

const bgColorCode = `<template>
  <up-tooltip
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    selectStrColor="rgba(255, 255, 255, 0.7)"
    selectBgColor="rgba(0, 0, 0, 0.7)"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >高亮选中文本背景色</up-tooltip>
</template>`

const leftCode = `<template>
  <up-tooltip
    placement="left"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >左侧弹出</up-tooltip>
</template>`

const rightCode = `<template>
  <up-tooltip
    placement="right"
    :copyTip="true"
    :longpress="true"
    :zIndex="100"
    :text="[
      { name: '复制', copy: true },
      { name: '收藏', copy: false }
    ]"
  >右侧弹出</up-tooltip>
</template>`
</script>

<style lang="scss" scoped>
.tooltip-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
view {
  margin: 10px 0;
  padding-left: 20px;
  view {
    margin: 5px 0;
    line-height: 1.6;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e6f7ff;
  color: #1890ff;
  margin-left: 8px;
  vertical-align: middle;
}
.platform-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  th,
  td {
    border: 1px solid #e8e8e8;
    padding: 8px;
  }
  th {
    background: #f5f5f5;
  }
}
.custom-block {
  background: #f6f8fa;
  border-left: 4px solid #3eaf7c;
  padding: 12px 16px;
  margin: 10px 0;
  border-radius: 4px;
  &.warning {
    border-left-color: #e6a23c;
    background: #fdf6ec;
  }
  &.tip {
    border-left-color: #409eff;
    background: #f0f9eb;
  }
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
.props-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  th,
  td {
    border: 1px solid #e8e8e8;
    padding: 8px;
    font-size: 14px;
  }
  th {
    background: #f5f5f5;
    font-weight: 600;
  }
}
text {
  color: #409eff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>
