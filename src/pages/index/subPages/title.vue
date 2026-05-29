<template>
  <view class="title-page">
    <view class="theme-default-content content__default">
      <text id="title-标题">
        Title 标题
        <text class="badge tip">3.4.58</text>
      </text>
      <text><code>u-title</code> 组件用于展示标题文本，通常用于页面区块标题，提供默认的前缀标识样式。</text>
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
      <text>通过默认插槽设置标题内容：</text>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="自定义前缀">自定义前缀</text>
      <text>使用 [prefix] 插槽自定义前缀标识：</text>
      <CodeBlock title="自定义前缀" language="html" :code="prefixCode" />
      <text id="组合使用">组合使用</text>
      <CodeBlock title="组合使用" language="html" :code="combineCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/title/title.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
      <table class="api-table">
        <thead>
          <tr>
            <th style="text-align:left;">
              参数
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              类型
            </th>
            <th style="text-align:left;">
              默认值
            </th>
            <th style="text-align:left;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              当前组件无props
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slots">Slots</text>
      <table class="api-table">
        <thead>
          <tr>
            <th style="text-align:left;">
              名称
            </th>
            <th style="text-align:left;">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              default
            </td>
            <td style="text-align:left;">
              标题文本内容
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              prefix
            </td>
            <td style="text-align:left;">
              标题前缀内容
            </td>
          </tr>
        </tbody>
      </table>
      <text id="event">Event</text>
      <table class="api-table">
        <thead>
          <tr>
            <th style="text-align:left;">
              事件名
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              当前组件无事件
            </td>
            <td style="text-align:left;">
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

const basicUseCode = `<template>
  <u-title>这里是标题</u-title>
</template>`

const prefixCode = `<template>
  <u-title>
    <template #prefix>
      <u-icon name="file-text"></u-icon>
    </template>
    自定义前缀
  </u-title>
</template>`

const combineCode = `<template>
  <u-title class="custom-title">
    <template #prefix>
      <u-icon name="file-text"></u-icon>
    </template>
    组合使用
  </u-title>
</template>

<style>
.custom-title {
  margin-top: 20px;
}
</style>`
</script>

<style lang="scss" scoped>
.title-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
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
.platform-table,
.api-table {
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
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
