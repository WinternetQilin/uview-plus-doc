<template>
  <view class="steps-page">
    <view class="theme-default-content content__default">
      <text id="steps-步骤条">
        Steps 步骤条
      </text>
      <text>该组件一般用于完成一个任务要分几个步骤，标识目前处于第几步的场景。</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本使用">基本使用</text>
      <view class="custom-block warning">
        <text class="custom-block-title">说明</text>
        <text>由于安卓<code>nvue</code>下，<code>overflow</code>属性不支持<code>visible</code>值，故此组件暂不支持安卓<code>nvue</code>环境。</text>
      </view>
      <view>
        <view>通过<code>current</code>参数标识目前处于第几步，从0开始</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="错误状态">错误状态</text>
      <text>如果设置<code>up-steps-item</code>的<code>error</code>参数为<code>true</code>的话，当前步骤将会为"失败"的状态</text>
      <CodeBlock title="错误状态" language="html" :code="errorCode" />
      <text id="步骤条模式">步骤条模式</text>
      <text><code>up-steps</code>的<code>dot</code>参数设置为<code>true</code>的话，将会以点状的形式展示步骤条样式。</text>
      <CodeBlock title="步骤条模式" language="html" :code="dotCode" />
      <text id="竖向模式">竖向模式</text>
      <text><code>up-steps</code>的<code>direction</code>参数设置为<code>column</code>的话，组件将会以竖向的形式展示步骤条内容。</text>
      <CodeBlock title="竖向模式" language="html" :code="columnCode" />
      <text id="自定义图标">自定义图标</text>
      <view>
        <view>通过<code>activeIcon</code>可以设置激活状态的图标</view>
        <view>通过<code>inactiveIcon</code>可以设置非激活状态的图标</view>
      </view>
      <CodeBlock title="自定义图标" language="html" :code="iconCode" />
      <text id="通过插槽自定义标题">通过插槽自定义标题 <text class="badge tip">3.4.2</text></text>
      <text>通过title插槽，可以自定义某个步骤标题。</text>
      <CodeBlock title="自定义标题" language="html" :code="slotCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/steps/steps.vue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-steps :current="0">
    <up-steps-item title="步骤一" desc="填写用户信息"></up-steps-item>
    <up-steps-item title="步骤二" desc="填写收货地址"></up-steps-item>
    <up-steps-item title="步骤三" desc="确认订单"></up-steps-item>
  </up-steps>
</template>`

const errorCode = `<up-steps :current="1">
  <up-steps-item title="步骤一"></up-steps-item>
  <up-steps-item title="步骤二" error></up-steps-item>
  <up-steps-item title="步骤三"></up-steps-item>
</up-steps>`

const dotCode = `<up-steps :current="1" dot>
  <up-steps-item></up-steps-item>
  <up-steps-item></up-steps-item>
  <up-steps-item></up-steps-item>
</up-steps>`

const columnCode = `<template>
  <up-steps :current="1" direction="column">
    <up-steps-item title="步骤一" desc="填写用户信息"></up-steps-item>
    <up-steps-item title="步骤二" desc="填写收货地址"></up-steps-item>
    <up-steps-item title="步骤三" desc="确认订单"></up-steps-item>
  </up-steps>
</template>`

const iconCode = `<up-steps :current="1" activeIcon="checkmark" inactiveIcon="close">
  <up-steps-item title="步骤一"></up-steps-item>
  <up-steps-item title="步骤二"></up-steps-item>
  <up-steps-item title="步骤三"></up-steps-item>
</up-steps>`

const slotCode = `<template>
  <up-steps :current="1">
    <up-steps-item title="步骤一"></up-steps-item>
    <up-steps-item>
      <template #title>
        <text class="custom-title">自定义标题</text>
      </template>
    </up-steps-item>
    <up-steps-item title="步骤三"></up-steps-item>
  </up-steps>
</template>

<style lang="scss" scoped>
.custom-title {
  color: #3eaf7c;
  font-weight: bold;
}
</style>`
</script>

<style lang="scss" scoped>
.steps-page {
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
text {
  color: #3eaf7c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
    border-left-color: #faad14;
    background: #fffbe6;
  }
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
