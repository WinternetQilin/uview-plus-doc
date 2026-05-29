<template>
  <view class="scrollList-page">
    <view class="theme-default-content content__default">
      <text id="scrolllist-横向滚动列表">ScrollList 横向滚动列表</text>
      <view class="demo-placeholder">
        <text>此处应展示 ScrollList 横向滚动列表 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsC/scrollList/scrollList"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsC/scrollList/scrollList
          </text>
        </text>
      </view>
      <text>
        该组件一般用于同时展示多个商品、分类的场景，也可以完成左右滑动的列表。
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
      <text id="基本使用">基本使用</text>
      <text>通过slot传入内容</text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="指示器的使用">指示器的使用</text>
      <view>
        <view><code>indicator</code> 用于控制指示器是否显示</view>
        <view><code>indicatorWidth</code> 用于控制指示器整体的宽度</view>
        <view><code>indicatorBarWidth</code> 用于控制指示器滑块的宽度</view>
        <view><code>indicatorColor</code> 指示器的颜色</view>
        <view><code>indicatorActiveColor</code> 滑块的颜色</view>
        <view><code>indicatorStyle</code> 指示器的位置/样式控制</view>
      </view>
      <CodeBlock title="指示器使用" language="html" :code="indicatorCode" />
      <text id="兼容性与性能">兼容性与性能</text>
      <view>
        <view>
          此组件是在nvue中引入bindingx，此库类似于微信小程序wxs，目的是让js运行在视图层，减少视图层和逻辑层的通信折损，在nvue中会有更好的体验。
        </view>
        <view>此组件是在APP-VUE、H5、小程序中使用的是wxs。</view>
        <view>其他平台则使用js完成。</view>
      </view>
      <text>
        当滑动到最左边/最右边时，uview-plus提供了事件<code>left</code>和<code>right</code>可供调用，用于对列表滑动到端点处的业务实现。
      </text>
      <CodeBlock title="左右端点事件" language="html" :code="endEventCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/scrollList/scrollList.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/scrollList/scrollList.nvue"
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
              indicatorWidth
            </td>
            <td style="text-align: left">
              指示器的整体宽度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              50
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              indicatorBarWidth
            </td>
            <td style="text-align: left">
              滑块的宽度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              20
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              indicator
            </td>
            <td style="text-align: left">
              是否显示面板指示器
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
              indicatorColor
            </td>
            <td style="text-align: left">
              指示器非激活颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #f2f2f2
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              indicatorActiveColor
            </td>
            <td style="text-align: left">
              滑块激活颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #3eaf7c
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              indicatorStyle
            </td>
            <td style="text-align: left">
              指示器样式
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
              endSensitive
            </td>
            <td style="text-align: left">
              监听左右端点事件的敏感度
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
              left
            </td>
            <td style="text-align: left">
              滑动到最左边时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              right
            </td>
            <td style="text-align: left">
              滑动到最右边时触发
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
    <up-scroll-list>
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        <\/view>
    <\/up-scroll-list>
<\/template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' }
]);
<\/script>`

const indicatorCode = `<template>
    <up-scroll-list
        :indicator="indicator"
        indicatorColor="#fff0f0"
        indicatorActiveColor="#f56c6c">
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        <\/view>
    <\/up-scroll-list>
<\/template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' }
]);
<\/script>`

const endEventCode = `<template>
    <up-scroll-list @right="right" @left="left">
        <view class="scroll-list" style="flex-direction: row;">
            <view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index">
                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                <text class="scroll-list__goods-item__text">\${{ item.name }}</text>
            <\/view>
        <\/view>
    <\/up-scroll-list>
<\/template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { name: 1, thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { name: 2, thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { name: 3, thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { name: 4, thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { name: 5, thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' },
    { name: 6, thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg' },
    { name: 7, thumb: 'https://cdn.uviewui.com/uview/goods/7.jpg' },
    { name: 8, thumb: 'https://cdn.uviewui.com/uview/goods/8.jpg' }
]);

function right() {
    console.log('滑动到最右边');
}

function left() {
    console.log('滑动到最左边');
}
<\/script>`
</script>

<style lang="scss" scoped>
.scrollList-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
.demo-placeholder {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
  text {
    margin: 5px 0;
  }
  .placeholder-tip {
    font-size: 12px;
    color: #666;
  }
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
table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  th,
  td {
    border: 1px solid #eee;
    padding: 8px 12px;
  }
  th {
    background: #f5f5f5;
    font-weight: 600;
  }
}
.custom-block {
  background: #f3f5f7;
  border-left: 4px solid #3eaf7c;
  padding: 10px 15px;
  margin: 15px 0;
  .custom-block-title {
    font-weight: 600;
    margin-bottom: 5px;
  }
  text {
    color: #3eaf7c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  image {
    margin-right: 8px;
  }
}
</style>
