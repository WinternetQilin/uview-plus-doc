<template>
  <view class="cateTab-page">
    <view class="theme-default-content content__default">
      <text id="catetab-垂直tab">
        <text href="cateTab.html#catetab-垂直tab" class="header-anchor">#</text>
        CateTab 垂直TAB
        <text href="cateTab.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>
      <text>常用于电商/外卖/商超等商品分类</text>
      <text id="平台差异说明">
        <text href="cateTab.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="cateTab.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <text>
        tabList指定tab列表，<code>tabKeyName</code>和<code>itemKeyName</code>指定对象的key。
      </text>
      <pre><code>&lt;up-cate-tab :tabList="tabList" tabKeyName="title" itemKeyName="title"&gt;
    &lt;template #pageItem="{pageItem}"&gt;
        ...
    &lt;/template&gt;
&lt;/up-cate-tab&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="cateTab.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/cateTab/cateTab.nvue"
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
        <br>
      </view>
      <text id="api">
        <text href="cateTab.html#api" class="header-anchor">#</text> API
      </text>
      <text id="props">
        <text href="cateTab.html#props" class="header-anchor">#</text> Props
      </text>
      <text>
        注意：props中没有控制组件弹出与收起的参数，因为这是通过show绑定变量实现的，见上方说明。
      </text>
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
              current<text class="badge tip" style="vertical-align: top">
                3.3.73
              </text>
            </td>
            <td style="text-align: left">
              当前Tab索引，支持v-model:current
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              0
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              tabList
            </td>
            <td style="text-align: left">
              tab列表
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              tabKeyName
            </td>
            <td style="text-align: left">
              tab切换key名称
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              name
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              itemKeyName
            </td>
            <td style="text-align: left">
              内容key名称
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              name
            </td>
            <td style="text-align: left" />
          </tr>
        </tbody>
      </table>
      <text id="slots">
        <text href="cateTab.html#slots" class="header-anchor">#</text> Slots
      </text>
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
              tabItem
            </td>
            <td style="text-align: left">
              自定义左侧侧TAB切换 scope={item}
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              pageItem
            </td>
            <td style="text-align: left">
              自定义右侧TAB内容区域 scope={pageItem}
            </td>
          </tr>
        </tbody>
      </table>
      <text id="event">
        <text href="cateTab.html#event" class="header-anchor">#</text> Event
      </text>
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
            <th style="text-align: left">
              版本
            </th>
          </tr>
        </thead>
        <tbody>
          <tr />
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cateTab-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  th,
  td {
    border: 1px solid #eee;
    padding: 8px;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
pre {
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  code {
    background: transparent;
    padding: 0;
    color: inherit;
  }
}
.custom-block {
  background: #f0f9eb;
  border-left: 4px solid #67c23a;
  padding: 10px 15px;
  margin: 20px 0;
  .custom-block-title {
    font-weight: bold;
    margin-bottom: 10px;
  }
  text {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #67c23a;
  }
}
.badge.tip {
  background: #67c23a;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-left: 5px;
}
</style>
