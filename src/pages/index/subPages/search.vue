<template>
  <view class="search-page">
    <view class="theme-default-content content__default">
      <text id="search-搜索">Search 搜索</text>
      <view class="demo-placeholder">
        <text>此处应展示 Search 搜索 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsB/search/search"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsB/search/search
          </text>
        </text>
      </view>
      <text>搜索组件，集成了常见搜索框所需功能，用户可以一键引入，开箱即用。</text>
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
        <view>通过<code>placeholder</code>参数设置占位内容</view>
        <view>
          通过<code>v-model</code>双向绑定一个<strong>变量</strong>值，设置初始化时搜索框的值，如果初始内容为空，那么请绑定一个值为空字符的变量。
        </view>
      </view>
      <text>
        <strong>说明：</strong>
        因为是双向绑定的，所以当组件内容输入框内容变化时，也会实时的反映到绑定的<code>keyword</code>变量，这意味着，您<strong>无需</strong>监听<code>change</code>事件，
        也能实时的得知输入框的内容。
      </text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="设置输入框形状">设置输入框形状</text>
      <text>通过<code>shape</code>设置输入框两端的形状，<code>square</code>-方形带圆角，<code>round</code>(默认)-半圆形</text>
      <CodeBlock title="设置输入框形状" language="html" :code="shapeCode" />
      <text id="是否开启清除控件">是否开启清除控件</text>
      <text><code>clearabled</code>(默认为<code>true</code>)设置为<code>true</code>的话，输入框有内容时，右边会显示一个清除的图标</text>
      <CodeBlock title="是否开启清除控件" language="html" :code="clearabledCode" />
      <text id="是否开启右边控件">是否开启右边控件</text>
      <text>该控件为类似按钮形式，可以设置为"搜索"或者"取消"等内容，如果开启动画效果，用户确认搜索后，该控件会自动消失</text>
      <view>
        <view><code>showAction</code>配置是否开启右边按钮控件</view>
        <view><code>actionText</code>配置控件内容</view>
        <view><code>animation</code>(默认为<code>false</code>)设置为<code>true</code>的话，失去焦点，或者点击控件按钮时，控件自动消失，并且带有动画效果</view>
      </view>
      <view class="custom-block warning">
        <text class="custom-block-title">说明</text>
        <view>
          <view>如果不想点击右侧控件时自动消失，请把<code>animation</code>设置为<code>false</code></view>
          <view>右侧控件的默认文字为"搜索"(它本意为控件，碰巧内容为"搜索"二字，并非说它就是一个搜索按钮)，点击它的时候触发的是<code>custom</code>事件，而不是<code>search</code>事件</view>
        </view>
      </view>
      <CodeBlock title="是否开启右边控件" language="html" :code="actionCode" />
      <text id="自定义样式">自定义样式</text>
      <view>
        <view>通过<code>inputAlign</code>设置输入框内容的对其方式，和css的<code>text-align</code>同理</view>
        <view>通过<code>borderColor</code>设置整个搜索组件的边框，只要配置了颜色，才会出现边框</view>
        <view>通过<code>height</code>设置组件高度</view>
        <view>通过<code>disabled</code>设置是否禁用输入框</view>
        <view>通过<code>bgColor</code>设置是搜索组件背景颜色</view>
      </view>
      <CodeBlock title="自定义样式" language="html" :code="customStyleCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/search/search.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/search/search.nvue"
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
              v-model
            </td>
            <td style="text-align: left">
              双向绑定输入框搜索值
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
              shape
            </td>
            <td style="text-align: left">
              搜索框形状，round-圆形，square-方形
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              round
            </td>
            <td style="text-align: left">
              square
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              bgColor
            </td>
            <td style="text-align: left">
              搜索框背景颜色
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
              placeholder
            </td>
            <td style="text-align: left">
              占位文字内容
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              请输入关键字
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              clearabled
            </td>
            <td style="text-align: left">
              是否显示清除按钮
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
              focus
            </td>
            <td style="text-align: left">
              自动获取焦点
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
              showAction
            </td>
            <td style="text-align: left">
              是否显示右侧控件
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
              actionStyle
            </td>
            <td style="text-align: left">
              右侧控件的样式
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
              actionText
            </td>
            <td style="text-align: left">
              右侧控件文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              搜索
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              inputAlign
            </td>
            <td style="text-align: left">
              输入框内容对齐方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              center / right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              disabled
            </td>
            <td style="text-align: left">
              是否禁用输入框
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
              borderColor
            </td>
            <td style="text-align: left">
              边框颜色，配置此值则显示边框
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
              搜索框高度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              64
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              inputStyle
            </td>
            <td style="text-align: left">
              输入框样式
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
              animation
            </td>
            <td style="text-align: left">
              是否开启动画
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
              searchIconColor
            </td>
            <td style="text-align: left">
              搜索图标颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c0c4cc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              searchIconSize
            </td>
            <td style="text-align: left">
              搜索图标大小
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              24
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
              输入框文字颜色
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
              placeholderColor
            </td>
            <td style="text-align: left">
              占位符文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c0c4cc
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              搜索框左侧文本
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
              change
            </td>
            <td style="text-align: left">
              输入框内容发生变化时触发
            </td>
            <td style="text-align: left">
              value：输入框的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              search
            </td>
            <td style="text-align: left">
              用户确定搜索时触发，用户按回车键，或者手机键盘右下角的"搜索"键时触发
            </td>
            <td style="text-align: left">
              value：输入框的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              custom
            </td>
            <td style="text-align: left">
              用户点击右侧控件时触发
            </td>
            <td style="text-align: left">
              value：输入框的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              blur
            </td>
            <td style="text-align: left">
              输入框失去焦点时触发
            </td>
            <td style="text-align: left">
              value：输入框的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              focus
            </td>
            <td style="text-align: left">
              输入框获得焦点时触发
            </td>
            <td style="text-align: left">
              value：输入框的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              clear
            </td>
            <td style="text-align: left">
              配置了<code>clearabled</code>后，清空内容时会发出此事件
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slots">Slots</text>
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
              default
            </td>
            <td style="text-align: left">
              输入框左测自定义内容
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              action-right
            </td>
            <td style="text-align: left">
              输入框右侧自定义内容
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
    <up-search placeholder="日照香炉生紫烟" v-model="keyword"><\/up-search>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const keyword = ref('遥看瀑布挂前川');
<\/script>`

const shapeCode = `<up-search shape="round"><\/up-search>`

const clearabledCode = `<up-search :clearabled="true"><\/up-search>`

const actionCode = `<up-search :show-action="true" actionText="搜索" :animation="true"><\/up-search>`

const customStyleCode = `<up-search inputAlign="center" height="70"><\/up-search>`
</script>

<style lang="scss" scoped>
.search-page {
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
  border-left: 4px solid #e6a23c;
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
