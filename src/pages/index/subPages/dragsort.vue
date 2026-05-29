<template>
  <view class="dragsort-page">
    <view class="theme-default-content content__default">
      <text id="dragsort-拖拽排序">
        <text href="dragsort.html#dragsort-拖拽排序" class="header-anchor">#</text>
        Dragsort 拖拽排序
        <text class="badge tip">3.4.64</text>
      </text>
      <text>dragsort 拖拽排序组件，支持垂直、水平和网格三种模式的拖拽排序，适用于列表重排、九宫格排序等场景。</text>
      <text id="平台差异说明">
        <text href="dragsort.html#平台差异说明" class="header-anchor">#</text>
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
              x
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
        <text href="dragsort.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过 <code>initialList</code> 设置初始数据列表</view>
        <view>通过 [direction]设置拖拽方向：vertical（垂直）、horizontal（水平）、all（网格）</view>
        <view>通过 [columns] 设置网格模式下的列数</view>
        <view>通过 [draggable] 控制是否允许拖拽</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;view class="text-4 bg-white"&gt;
    &lt;!-- 垂直拖拽排序 --&gt;
    &lt;up-dragsort
      :initialList="verticalList"
      direction="vertical"
      @drag-end="onVerticalDragEnd"
    /&gt;

    &lt;!-- 水平拖拽排序 --&gt;
    &lt;up-dragsort
      :initialList="horizontalList"
      direction="horizontal"
      class="mt-4"
      @drag-end="onHorizontalDragEnd"
    /&gt;

    &lt;!-- 网格拖拽排序 --&gt;
    &lt;up-dragsort
      :initialList="gridList"
      direction="all"
      :columns="3"
      class="mt-4"
      @drag-end="onGridDragEnd"
    /&gt;
  &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const verticalList = ref([
  { id: 1, label: '项目1' },
  { id: 2, label: '项目2' },
  { id: 3, label: '项目3' },
  { id: 4, label: '项目4' }
]);

const horizontalList = ref([
  { id: 1, label: '项目A' },
  { id: 2, label: '项目B' },
  { id: 3, label: '项目C' },
  { id: 4, label: '项目D' }
]);

const gridList = ref([
  { id: 1, label: '格子1' },
  { id: 2, label: '格子2' },
  { id: 3, label: '格子3' },
  { id: 4, label: '格子4' },
  { id: 5, label: '格子5' },
  { id: 6, label: '格子6' }
]);

const onVerticalDragEnd = (list) => {
  console.log('垂直拖拽结束', list);
  verticalList.value = list;
};

const onHorizontalDragEnd = (list) => {
  console.log('水平拖拽结束', list);
  horizontalList.value = list;
};

const onGridDragEnd = (list) => {
  console.log('网格拖拽结束', list);
  gridList.value = list;
};
&lt;/script&gt;</code></pre>
      <text id="高级用法示例">
        <text href="dragsort.html#高级用法示例" class="header-anchor">#</text>
        高级用法示例
      </text>
      <text id="_1-部分项目禁用拖拽">
        <text href="dragsort.html#_1-部分项目禁用拖拽" class="header-anchor">#</text>
        1. 部分项目禁用拖拽
      </text>
      <text>可以通过给列表项添加 <code>draggable: false</code> 属性来禁用特定项目的拖拽功能：</text>
      <pre><code>&lt;up-dragsort
  :initialList="list"
  direction="vertical"
  @drag-end="onDragEnd"
/&gt;</code></pre>
      <text id="自定义内容">
        <text href="dragsort.html#自定义内容" class="header-anchor">#</text>
        自定义内容
      </text>
      <text>通过默认插槽可以自定义每个拖拽项的内容：</text>
      <pre><code>&lt;up-dragsort
  :initialList="list"
  direction="vertical"
  @drag-end="onDragEnd"
&gt;
  &lt;template #default="{ item, index }"&gt;
    &lt;view class="custom-item"&gt;
      &lt;text&gt;{{ item.label }}&lt;/text&gt;
    &lt;/view&gt;
  &lt;/template&gt;
&lt;/up-dragsort&gt;</code></pre>
      <text id="演示页面源代码地址">
        <text href="dragsort.html#演示页面源代码地址" class="header-anchor">#</text>
        演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/dragsort/dragsort.vue" target="_blank">
          github
        </text>
      </view>
      <text id="api">
        <text href="dragsort.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="dragsort.html#props" class="header-anchor">#</text>
        Props
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
              initialList
            </td>
            <td style="text-align: left">
              初始数据列表
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              draggable
            </td>
            <td style="text-align: left">
              是否允许拖拽
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
              direction
            </td>
            <td style="text-align: left">
              拖拽方向
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              vertical
            </td>
            <td style="text-align: left">
              vertical / horizontal / all
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              columns
            </td>
            <td style="text-align: left">
              all模式下的列数
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              3
            </td>
            <td style="text-align: left" />
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="dragsort.html#events" class="header-anchor">#</text>
        Events
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              drag-end
            </td>
            <td style="text-align: left">
              拖拽结束时触发
            </td>
            <td style="text-align: left">
              排序后的列表
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slot">
        <text href="dragsort.html#slot" class="header-anchor">#</text>
        Slot
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
              default
            </td>
            <td style="text-align: left">
              自定义每个拖拽项的内容，参数为 { item, index }
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.dragsort-page {
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
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  font-size: 16px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
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
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.tip {
  border-left-color: #67c23a;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
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
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 3px;
  margin-left: 10px;
  vertical-align: middle;
}
.badge.tip {
  background: #67c23a;
  color: #fff;
}
</style>
