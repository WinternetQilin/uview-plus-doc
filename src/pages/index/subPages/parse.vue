<template>
  <view class="parse-page">
    <view class="theme-default-content content__default">
      <text id="parse-富文本解析器">Parse 富文本解析器</text>
      <view class="demo-placeholder">
        <text>此处应展示 Parse 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsB/parse/parse"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsB/parse/parse
          </text>
        </text>
      </view>
      <text>
        该组件一般用于富文本解析场景，比如解析文章内容，商品详情，带原生HTML标签的各类字符串等，此组件和uni-app官方的<code>rich-text</code>组件功能有重合之处，但是也有不同的地方。
      </text>
      <text id="相同点">相同点：</text>
      <view>
        <view>二者都能解析HTML字符串</view>
      </view>
      <text id="不同点">不同点：</text>
      <view>
        <view>对于轻量、简单的字符串，<code>rich-text</code>性能更好</view>
        <view>
          对于复杂的字符串，使用<code>parse</code>组件效果更好，有更多的自定义属性和效果
        </view>
      </view>
      <text>
        总结：如果是简单的场景，比如一段简单的文字和图片内容，可以优先使用<code>rich-text</code>组件，在文章内容，商品详情等复杂的文本详情，可以优先使用<code>parse</code>组件。
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>
          此组件源于开源的优秀作品<text
            href="https://github.com/jin-yufeng/mp-html"
            target="_blank"
          >
            mp-html
          </text>，本文档只对重要的功能进行介绍，如果需要更详细的说明，请参考<text
            href="https://jin-yufeng.gitee.io/mp-html/#/overview/quickstart?id=uni-app"
            target="_blank"
          >
            mp-html官方文档
          </text>。
        </text>
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
      <text>通过<code>content</code>参数绑定需要解析的内容即可。</text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="长按复制">长按复制</text>
      <text>
        可以通过设置<code>selectable</code>参数为<code>true</code>来实现长按复制的效果
      </text>
      <CodeBlock title="长按复制" language="html" :code="selectableCode" />
      <text id="设置样式">设置样式</text>
      <text>可以有两种方法可设置富文本的样式：</text>
      <view>
        <view>
          通过组件的<code>tagStyle</code>参数可以精细化的对单独的标签设置样式，注意此方式设置的样式为<strong>字符串</strong>的形式，而非<strong>对象</strong>形式：
        </view>
      </view>
      <CodeBlock title="tagStyle设置" language="html" :code="tagStyleCode" />
      <view>
        <view>
          通过父元素标签，统一设置全文的颜色，行高，字体大小等，注意这种方式无法对单独的标签设置样式：
        </view>
      </view>
      <CodeBlock title="父元素样式" language="html" :code="parentStyleCode" />
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
              bgColor
            </td>
            <td style="text-align: left">
              背景颜色，只适用与APP-PLUS-NVUE(已废弃)
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
              containerStyle
            </td>
            <td style="text-align: left">
              样式设置代替bgColor
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
              content
            </td>
            <td style="text-align: left">
              要显示的富文本字符串
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
              copyLink
            </td>
            <td style="text-align: left">
              是否允许外部链接被点击时自动复制
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
              domain
            </td>
            <td style="text-align: left">
              主域名，设置后将给链接自动拼接上主域名或协议名
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
              errorImg
            </td>
            <td style="text-align: left">
              图片出错时的占位图链接
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
              lazyLoad
            </td>
            <td style="text-align: left">
              是否开启图片懒加载，nvue不支持此属性
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
              loadingImg
            </td>
            <td style="text-align: left">
              图片加载完成前的占位图
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
              pauseVideo
            </td>
            <td style="text-align: left">
              是否在播放一个视频时自动暂停其它视频
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
              previewImg
            </td>
            <td style="text-align: left">
              是否开启图片被点击时自动预览
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
              scrollTable
            </td>
            <td style="text-align: left">
              是否自动给 table 添加一个滚动层
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
              selectable
            </td>
            <td style="text-align: left">
              是否开启长按复制内容
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
              setTitle
            </td>
            <td style="text-align: left">
              是否自动将 title 标签的内容设置到页面标题
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
              showImgMenu
            </td>
            <td style="text-align: left">
              是否开启图片被长按时显示菜单
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
              tagStyle
            </td>
            <td style="text-align: left">
              设置标签的默认样式
            </td>
            <td style="text-align: left">
              Object
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
              useAnchor
            </td>
            <td style="text-align: left">
              是否使用页面内锚点
            </td>
            <td style="text-align: left">
              Boolean/Number
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
      <text id="event">Event</text>
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
              load
            </td>
            <td style="text-align: left">
              dom 加载完成时触发
            </td>
            <td style="text-align: left">
              所有节点被添加到节点树中时触发
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              ready
            </td>
            <td style="text-align: left">
              渲染完成时触发
            </td>
            <td style="text-align: left">
              返回 boundingClientRect 的查询结果
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              error
            </td>
            <td style="text-align: left">
              出错时触发
            </td>
            <td style="text-align: left">
              返回错误信息来源和错误信息
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              imgtap
            </td>
            <td style="text-align: left">
              图片被点击时触发
            </td>
            <td style="text-align: left">
              返回图片链接等信息
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              linktap
            </td>
            <td style="text-align: left">
              在链接被点击时触发
            </td>
            <td style="text-align: left">
              返回被点击的链接的所有属性
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
  <view class="up-content">
    <up-parse :content="content"></up-parse>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref(\`
  <text>露从今夜白，月是故乡明</text>
  <image src="https://cdn.uviewui.com/uview/swiper/2.jpg" alt="Image Description" />
\`);
<\/script>

<style lang="scss" scoped>
.up-content {
  padding: 24rpx;
}
</style>`

const selectableCode = `<up-parse :content="content" :selectable="true"></up-parse>`

const tagStyleCode = `<template>
  <view class="up-content">
    <up-parse :content="content" :tagStyle="style"></up-parse>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const paragraphText = ref('露从今夜白，月是故乡明');
const imageSrc = ref('https://cdn.uviewui.com/uview/swiper/2.jpg');

const styles = "{text: { color: 'red', fontSize: '32rpx' }, text: { fontSize: '30rpx' }}";
<\/script>`

const parentStyleCode = `<template>
  <view class="up-content">
    <up-parse :content="content"></up-parse>
  </view>
<\/template>

<style lang="scss" scoped>
.up-content {
  color: #666;
  font-size: 28rpx;
  line-height: 1.8;
}
</style>`
</script>

<style lang="scss" scoped>
.parse-page {
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
