<template>
  <view class="link-page">
    <view class="theme-default-content content__default">
      <text id="link-超链接">Link 超链接</text>

      <text>该组件为超链接组件，在不同平台有不同表现形式：</text>
      <view>
        <view>在APP平台会通过<code>plus</code>环境打开内置浏览器</view>
        <view>在小程序中把链接复制到粘贴板，同时提示信息</view>
        <view>在H5中通过<code>window.open</code>打开链接</view>
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
          通过<code>href</code>设置打开的链接，<code>text</code>设置显示的内容
        </view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="下划线">下划线</text>
      <text>通过<code>under-line</code>设置是否显示链接的下划线</text>
      <CodeBlock title="下划线" language="html" :code="underlineCode" />
      <text id="自定义颜色">自定义颜色</text>
      <view>
        <view>通过<code>color</code>设置文字颜色</view>
        <view>通过<code>line-color</code>设置下划线颜色</view>
      </view>
      <CodeBlock
        title="自定义颜色"
        language="html"
        :code="customColorCode"
      />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/link/link.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/link/link.nvue"
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
              color
            </td>
            <td style="text-align: left">
              文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              color['up-primary']
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              fontSize
            </td>
            <td style="text-align: left">
              字体大小，默认单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              15
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              underLine
            </td>
            <td style="text-align: left">
              是否显示下划线
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
              href
            </td>
            <td style="text-align: left">
              跳转的链接，要带上http(s)
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
              mpTips
            </td>
            <td style="text-align: left">
              各个小程序平台把链接复制到粘贴板后的提示语
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              链接已复制，请在浏览器打开
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              lineColor
            </td>
            <td style="text-align: left">
              下划线颜色，默认同<code>color</code>参数颜色
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
              text
            </td>
            <td style="text-align: left">
              超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
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
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" @click="click"></up-link>
</template>`

const underlineCode = `<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" :under-line="true"></up-link>
</template>`

const customColorCode = `<template>
	<up-link href="https://uviewui.com/" text="打开uview-plus UI文档" color="#19be6b" line-color="#19be6b"></up-link>
</template>`
</script>

<style lang="scss" scoped>
.link-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
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
</style>
