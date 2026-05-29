<template>
  <view class="collapse-page">
    <view class="theme-default-content content__default">
      <text id="collapse-折叠面板">
        <text href="collapse.html#collapse-折叠面板" class="header-anchor">#</text>
        Collapse 折叠面板
      </text>

      <text>通过折叠面板收纳内容区域</text>
      <text id="平台差异说明">
        <text href="collapse.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="collapse.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-collapse @change="change" @close="close" @open="open"&gt;
    &lt;up-collapse-item title="文档指南" name="Docs guide"&gt;
      &lt;text class="u-collapse-content"&gt;涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item title="组件全面" name="Variety components"&gt;
      &lt;text class="u-collapse-content"&gt;众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item title="众多利器" name="Tools"&gt;
      &lt;text class="u-collapse-content"&gt;众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨&lt;/text&gt;
    &lt;/up-collapse-item&gt;
  &lt;/up-collapse&gt;
&lt;/template&gt;

&lt;script setup&gt;
const open = (e) => {
  // console.log('open', e)
};

const close = (e) => {
  // console.log('close', e)
};

const change = (e) => {
  // console.log('change', e)
};
&lt;/script&gt;</code></pre>
      <text id="控制面板的初始状态-以及是否可以操作">
        <text
          href="collapse.html#控制面板的初始状态-以及是否可以操作"
          class="header-anchor"
        >
          #
        </text>
        控制面板的初始状态，以及是否可以操作
      </text>
      <view>
        <view>
          设置<code>u-collapse-item</code>的<code>name</code>参数，并在<code>u-collapse</code>中指定数组<code>value</code>可以让面板初始化时为打开状态
        </view>
        <view>
          如果设置<code>u-collapse-item</code>的<code>disabled</code>参数，那么面板会保持被禁用状态
        </view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-collapse :value="['2']"&gt;
    &lt;up-collapse-item title="文档指南"&gt;
      &lt;text class="u-collapse-content"&gt;涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item disabled title="组件全面"&gt;
      &lt;text class="u-collapse-content"&gt;众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item name="2" title="众多利器"&gt;
      &lt;text class="u-collapse-content"&gt;众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨&lt;/text&gt;
    &lt;/up-collapse-item&gt;
  &lt;/up-collapse&gt;
&lt;/template&gt;</code></pre>
      <text id="手风琴模式">
        <text href="collapse.html#手风琴模式" class="header-anchor">#</text>
        手风琴模式
      </text>
      <view>
        <view>
          将<code>u-collapse</code>的<code>accordion</code>设置为<code>true</code>，这样可以开启手风琴模式
        </view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-collapse accordion&gt;
    &lt;up-collapse-item title="文档指南"&gt;
      &lt;text class="u-collapse-content"&gt;涵盖uniapp各个方面，给开发者方向指导和设计理念，让您茅塞顿开，一马平川&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item title="组件全面"&gt;
      &lt;text class="u-collapse-content"&gt;众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用&lt;/text&gt;
    &lt;/up-collapse-item&gt;
    &lt;up-collapse-item title="众多利器"&gt;
      &lt;text class="u-collapse-content"&gt;众多的贴心小工具，是您开发过程中召之即来的利器，让您飞镖在手，百步穿杨&lt;/text&gt;
    &lt;/up-collapse-item&gt;
  &lt;/up-collapse&gt;
&lt;/template&gt;</code></pre>
      <text id="自定义标题和内容">
        <text href="collapse.html#自定义标题和内容" class="header-anchor">#</text>
        自定义标题和内容
      </text>
      <view>
        <view>通过设置<code>slot</code>来自定义标题和内容</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-collapse accordion&gt;
    &lt;up-collapse-item&gt;
      &lt;template #title&gt;
        &lt;view class="title"&gt;自定义标题&lt;/view&gt;
      &lt;/template&gt;
      &lt;text class="u-collapse-content"&gt;自定义内容&lt;/text&gt;
    &lt;/up-collapse-item&gt;
  &lt;/up-collapse&gt;
&lt;/template&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text
          href="collapse.html#右侧演示页面源代码地址"
          class="header-anchor"
        >
          #
        </text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">
          点击以下链接以查看右侧演示页面的源码
        </text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/collapse/collapse.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/collapse/collapse.nvue"
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
        <br>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.collapse-page {
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
</style>
