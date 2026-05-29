<template>
  <view class="table2-page">
    <view class="theme-default-content content__default">
      <text id="table-表格2">
        Table 表格2
        <text class="badge tip">3.4.28</text>
      </text>
      <text>表格2组件主要为了实现一个兼容element-plus表格API风格的多用途表格，方便开发者使用【部分功能暂未完全实现】。</text>
      <text>注意传递Function类型的参数在小程序环境下由于不支持，必须通过setXXX方法手动设置，比如cellStyle对应setCellStyle。</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App(vue)
            </th>
            <th style="text-align:center;">
              APP(nvue)
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              微信小程序
            </th>
            <th style="text-align:center;">
              支付宝小程序
            </th>
            <th style="text-align:center;">
              百度小程序
            </th>
            <th style="text-align:center;">
              头条小程序
            </th>
            <th style="text-align:center;">
              QQ小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              x
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
      <text id="使用示例">使用示例</text>
      <CodeBlock title="使用示例" language="html" :code="basicUseCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-table2 :data="tableData" :columns="tableColumns" stripe border></up-table2>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: '张三', age: 20, address: '北京' },
  { name: '李四', age: 22, address: '上海' },
  { name: '王五', age: 24, address: '广州' },
]);

const tableColumns = ref([
  { type: 'index' },
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' },
  { prop: 'address', label: '地址' },
]);
<\/script>`
</script>

<style lang="scss" scoped>
.table2-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
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
.platform-table {
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
</style>
