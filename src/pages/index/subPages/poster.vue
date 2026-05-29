<template>
  <view class="poster-page">
    <view class="theme-default-content content__default">
      <text id="poster-海报生成">
        Poster 海报生成
        <text class="badge tip">3.5.10</text>
      </text>
      <view class="demo-placeholder">
        <text>此处应展示 Poster 海报生成 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsD/poster/poster"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsD/poster/poster
          </text>
        </text>
      </view>
      <text>
        该组件用于生成海报图片，支持自定义背景、文本、图片、二维码等元素。（部分兼容l-painter组件）。
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
      <text id="基础用法">基础用法</text>
      <text>通过配置 <code>json</code> 属性来定义海报内容和样式。</text>
      <CodeBlock title="基础用法" language="html" :code="basicUsageCode" />
      <text id="自定义背景图海报">自定义背景图海报</text>
      <text>通过设置 <code>background</code> 为图片链接，可以创建自定义背景图的海报。</text>
      <CodeBlock title="自定义背景图海报" language="html" :code="backgroundCode" />
      <text id="渐变背景海报">渐变背景海报</text>
      <text>支持线性渐变和径向渐变背景。</text>
      <CodeBlock title="渐变背景海报" language="html" :code="gradientCode" />
      <text id="api">API</text>
      <text id="props">Props</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>json</td>
            <td>海报配置JSON数据</td>
            <td>Object</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="json-配置项">json 配置项</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>css</td>
            <td>海报容器样式</td>
            <td>Object</td>
            <td>-</td>
          </tr>
          <tr>
            <td>views</td>
            <td>海报元素列表</td>
            <td>Array</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="json-css-容器样式">json.css 容器样式</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>width</td>
            <td>海报宽度</td>
            <td>String</td>
            <td>750rpx</td>
          </tr>
          <tr>
            <td>height</td>
            <td>海报高度</td>
            <td>String</td>
            <td>1114rpx</td>
          </tr>
          <tr>
            <td>background</td>
            <td>背景颜色或图片链接</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="json-views-元素配置">json.views 元素配置</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>type</td>
            <td>元素类型</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>text</td>
            <td>文本内容(仅text类型)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>src</td>
            <td>图片地址(仅image/qrcode类型)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>css</td>
            <td>元素样式</td>
            <td>Object</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="views元素类型">views元素类型</text>
      <table>
        <thead>
          <tr>
            <th>类型</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>text</td>
            <td>文本元素</td>
          </tr>
          <tr>
            <td>image</td>
            <td>图片元素</td>
          </tr>
          <tr>
            <td>qrcode</td>
            <td>二维码元素</td>
          </tr>
          <tr>
            <td>view</td>
            <td>矩形容器元素</td>
          </tr>
        </tbody>
      </table>
      <text id="css-样式属性">css 样式属性</text>
      <table>
        <thead>
          <tr>
            <th>参数名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>position</td>
            <td>定位方式</td>
            <td>String</td>
            <td>absolute</td>
          </tr>
          <tr>
            <td>left</td>
            <td>距离左边距离</td>
            <td>String</td>
            <td>0rpx</td>
          </tr>
          <tr>
            <td>top</td>
            <td>距离顶部距离</td>
            <td>String</td>
            <td>0rpx</td>
          </tr>
          <tr>
            <td>width</td>
            <td>元素宽度</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>height</td>
            <td>元素高度</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>color</td>
            <td>文字颜色(仅text类型)</td>
            <td>String</td>
            <td>#000</td>
          </tr>
          <tr>
            <td>fontSize</td>
            <td>文字大小(仅text类型)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>fontWeight</td>
            <td>文字粗细(仅text类型)</td>
            <td>String</td>
            <td>normal</td>
          </tr>
          <tr>
            <td>lineHeight</td>
            <td>行高(仅text类型)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>lineClamp</td>
            <td>最大行数(仅text类型)</td>
            <td>Number</td>
            <td>-</td>
          </tr>
          <tr>
            <td>background</td>
            <td>背景颜色(仅view类型)</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>radius</td>
            <td>圆角大小</td>
            <td>String</td>
            <td>-</td>
          </tr>
          <tr>
            <td>shadow</td>
            <td>阴影效果</td>
            <td>String</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="event">Event</text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>export</td>
            <td>海报导出完成时触发</td>
            <td>result</td>
          </tr>
        </tbody>
      </table>
      <text id="methods">Methods</text>
      <table>
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
            <th>返回值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>exportImage</td>
            <td>导出海报图片</td>
            <td>-</td>
            <td>Promise</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
    <up-poster :json="posterJson" @export="exportSuccess"></up-poster>
<\/template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: '#ffffff'
    },
    views: [
        {
            type: 'text',
            text: '标题文本',
            css: {
                position: 'absolute',
                top: '100rpx',
                left: '50rpx',
                color: '#333333',
                fontSize: '40rpx',
                fontWeight: 'bold'
            }
        },
        {
            type: 'image',
            src: 'https://example.com/image.jpg',
            css: {
                position: 'absolute',
                top: '200rpx',
                left: '50rpx',
                width: '650rpx',
                height: '400rpx'
            }
        }
    ]
};

function exportSuccess(result: any) {
    console.log('海报导出成功', result);
}
<\/script>`

const backgroundCode = `<template>
    <up-poster :json="posterJson"></up-poster>
<\/template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: 'https://example.com/bg.jpg'
    },
    views: [
        {
            type: 'text',
            text: '自定义背景海报',
            css: {
                position: 'absolute',
                top: '50rpx',
                left: '50rpx',
                color: '#ffffff',
                fontSize: '36rpx'
            }
        }
    ]
};
<\/script>`

const gradientCode = `<template>
    <up-poster :json="posterJson"></up-poster>
<\/template>

<script setup lang="ts">
const posterJson = {
    css: {
        width: '750rpx',
        height: '1114rpx',
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)'
    },
    views: [
        {
            type: 'text',
            text: '渐变背景海报',
            css: {
                position: 'absolute',
                top: '50rpx',
                left: '50rpx',
                color: '#ffffff',
                fontSize: '36rpx'
            }
        }
    ]
};
<\/script>`
</script>

<style lang="scss" scoped>
.poster-page {
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
</style>
