<template>
  <view class="table-page">
    <view class="theme-default-content content__default">
      <text id="table-表格">
        Table 表格
        <text class="badge tip">3.4.28</text>
      </text>
      <text>表格组件一般用于展示结构化数据的场景</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App
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
      <text id="基本使用">基本使用</text>
      <text>本组件标签类似HTML的table表格，由<code>table</code>、<code>tr</code>、<code>th</code>、<code>td</code>四个组件组成</text>
      <view>
        <view><code>table</code>组件裹在最外层，可以配置一些基础参数</view>
        <view><code>tr</code>组件用于显示"行"数据</view>
        <view><code>th</code>组件用于显示表头内容，类似<code>td</code>，不同之处在于字体加粗了，也带有背景颜色，也可以直接用<code>td</code>替代<code>th</code></view>
        <view><code>td</code>组件不是最小单位，为了合并单元格时，内部可以嵌入<code>tr</code>和<code>td</code>组件</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="兼容性">兼容性</text>
      <text>由于<code>头条小程序</code>的兼容性问题，您需要给表格相关的组件(<code>up-tr</code>、<code>up-th</code>、<code>up-td</code>)写上对应的类名才有效，如下：</text>
      <CodeBlock title="兼容性" language="html" :code="compatibilityCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-table>
    <up-tr>
      <up-th>姓名</up-th>
      <up-th>年龄</up-th>
      <up-th>性别</up-th>
    </up-tr>
    <up-tr>
      <up-td>张三</up-td>
      <up-td>22</up-td>
      <up-td>男</up-td>
    </up-tr>
    <up-tr>
      <up-td>李四</up-td>
      <up-td>24</up-td>
      <up-td>女</up-td>
    </up-tr>
  </up-table>
</template>`

const compatibilityCode = `<template>
  <up-table>
    <up-tr class="up-tr">
      <up-th class="up-th">姓名</up-th>
      <up-th class="up-th">年龄</up-th>
      <up-th class="up-th">性别</up-th>
    </up-tr>
    <up-tr class="up-tr">
      <up-td class="up-td">张三</up-td>
      <up-td class="up-td">22</up-td>
      <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
      <up-td class="up-td">李四</up-td>
      <up-td class="up-td">24</up-td>
      <up-td class="up-td">女</up-td>
    </up-tr>
  </up-table>
</template>`
</script>

<style lang="scss" scoped>
.table-page {
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
