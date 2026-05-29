<template>
  <view class="pdfReader-page">
    <view class="theme-default-content content__default">
      <text id="pdf阅读器">
        PDF阅读器
        <text class="badge tip">3.5.14</text>
      </text>
      <view class="demo-placeholder">
        <text>此处应展示 PDF阅读器 组件的交互式演示</text>
        <text class="placeholder-tip">演示地址：<text href="https://ijry.github.io/uview-plus/text/#/pages/componentsD/pdfReader/pdfReader" target="_blank">https://ijry.github.io/uview-plus/text/#/pages/componentsD/pdfReader/pdfReader</text></text>
      </view>
      <text>基于pdf.js的PDF阅读器组件，可以在移动端直接查看PDF文件，目前支持H5。</text>
      <view class="custom-block tip">
        <text class="custom-block-title">说明</text>
        <text>组件默认提供的pdfjs资源仅供测试，速度较慢，建议参考下面章节自托管PDFJS资源。</text>
      </view>
      <text id="使用场景">使用场景</text>
      <view>
        <view>需要在应用内直接查看PDF文件</view>
        <view>不希望跳转到外部应用查看PDF</view>
        <view>需要在不同平台提供一致的PDF阅读体验</view>
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
              x
            </td>
            <td style="text-align: center">
              x
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              x
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本使用">基本使用</text>
      <text>通过<code>src</code>参数传入PDF文件的URL地址即可显示PDF内容。</text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="自定义高度">自定义高度</text>
      <text>通过[height]参数可以设置PDF阅读器的高度。</text>
      <CodeBlock title="自定义高度" language="html" :code="customHeightCode" />
      <text id="使用自定义pdf-js">使用自定义pdf.js</text>
      <text>通过[baseUrl]参数可以指定自定义的pdf.js资源地址，注意需要下载pdfjs.zip进static目录，并打包部署一份H5网站到自己的服务器。</text>
      <text>下载链接: https://pan.baidu.com/s/1tYi2GI77g5Js25wrAO0UaA?pwd=kxp8 提取码: kxp8 复制这段内容后打开百度网盘手机App，操作更方便哦</text>
      <CodeBlock title="使用自定义pdf.js" language="html" :code="customPdfJsCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/pdfReader/pdfReader.nvue" target="_blank" class="github-link">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30" />
          github
        </text>
        <br>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/pdfReader/pdfReader.nvue" target="_blank" class="github-link">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30" />
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
              src
            </td>
            <td style="text-align: left">
              PDF文件地址
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
              height
            </td>
            <td style="text-align: left">
              组件高度
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              700px
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              baseUrl
            </td>
            <td style="text-align: left">
              pdf.js资源域名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              https://uview-plus.jiangruyi.com/text
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
  <view>
    <up-pdf-reader :src="pdfUrl"></up-pdf-reader>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const pdfUrl = ref('https://example.com/sample.pdf');
<\/script>`

const customHeightCode = `<template>
  <view>
    <up-pdf-reader 
      :src="pdfUrl" 
      height="500px">
    </up-pdf-reader>
  </view>
<\/template>`

const customPdfJsCode = `<template>
  <view>
    <up-pdf-reader 
      :src="pdfUrl" 
      baseUrl="https://your-domain.com">
    </up-pdf-reader>
  </view>
<\/template>`
</script>

<style lang="scss" scoped>
.pdfReader-page {
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
text {
  display: flex;
  align-items: center;
  gap: 10px;
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
