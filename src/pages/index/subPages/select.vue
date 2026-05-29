<template>
  <view class="select-page">
    <view class="theme-default-content content__default">
      <text id="select-经典下拉框">Select 经典下拉框</text>
      <view class="demo-placeholder">
        <text>此处应展示 Select 经典下拉框 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsD/select/select"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsD/select/select
          </text>
        </text>
      </view>
      <text>
        本组件用于从底部弹出一个操作菜单，类似传统Web上的select下拉框组件, 供用户选择并返回结果。
        <text class="badge tip">3.4.10</text>
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
      <text id="点击获取所点击选项id">点击获取所点击选项ID</text>
      <text><code>select</code>回调事件带有一个<code>object</code>值</text>
      <CodeBlock title="点击获取所点击选项ID" language="html" :code="basicUsageCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/select/select.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/select/select.nvue"
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
              label
            </td>
            <td style="text-align: left">
              选项名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              '选项'
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              options
            </td>
            <td style="text-align: left">
              下拉选项列表
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              current
            </td>
            <td style="text-align: left">
              当前选中项目值v-model:current
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              ''
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              keyName
            </td>
            <td style="text-align: left">
              选中时获取列表字段
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              'ud'
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelName
            </td>
            <td style="text-align: left">
              文案字段显示名称
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              name
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              overlay
            </td>
            <td style="text-align: left">
              点击后显示蒙版
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
              overlayOpacity
            </td>
            <td style="text-align: left">
              蒙版透明度
            </td>
            <td style="text-align: left">
              Number
            </td>
            <td style="text-align: left">
              0.01
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              overlayStyle
            </td>
            <td style="text-align: left">
              蒙版样式
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
              zIndex
            </td>
            <td style="text-align: left">
              弹出层层级
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              10075
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              popupStyle
            </td>
            <td style="text-align: left">
              弹出层样式
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
              safeAreaInsetBottom
            </td>
            <td style="text-align: left">
              是否开启底部安全区适配
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
              closeOnClickOverlay
            </td>
            <td style="text-align: left">
              点击蒙版关闭
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
              select
            </td>
            <td style="text-align: left">
              点击选择时触发
            </td>
            <td style="text-align: left">
              (item: Object)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              关闭选择器时触发
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
        <up-select v-model:current="cateId" label="分类"
            :options="cateList" @select="selectItem"><\/up-select>
    <\/view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const cateId = ref('')
const cateList = ref([
    {
        id: '1',
        name: '分类1'
    },
    {
        id: '2',
        name: '分类2'
    },
    {
        id: '3',
        name: '分类4'
    },
])

const selectItem = (item: any) => {
  console.log(item);
};
<\/script>`
</script>

<style lang="scss" scoped>
.select-page {
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
</style>
