<template>
  <view class="pagination-page">
    <view class="theme-default-content content__default">
      <text id="pagination-分页器">
        Pagination 分页器 <text class="badge tip">3.4.30</text>
      </text>
      <view class="demo-model">
        <view class="model-content">
          <iframe
            id="demo-modal"
            scrolling="auto"
            frameborder="0"
            src="https://ijry.github.io/uview-plus/text/#/pages/componentsD/pagination/pagination"
            class="iframe"
          />
        </view>
        <text
          target="_blank"
          href="https://ijry.github.io/uview-plus/text/#"
          class="open-link"
        >
          打开
        </text>
      </view>
      <text>分页器组件主要用于数据分页场景</text>
      <text id="平台差异说明">平台差异说明</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              微信小程序
            </th>
            <th style="text-align: center">
              支付宝小程序
            </th>
            <th style="text-align: center">
              百度小程序
            </th>
            <th style="text-align: center">
              头条小程序
            </th>
            <th style="text-align: center">
              QQ小程序
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
      <text id="使用示例">使用示例</text>
      <CodeBlock title="使用示例" language="html" :code="usageCode" />
      <text id="api">API</text>
      <text id="props-参数说明">Props 参数说明</text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>currentPage</td>
            <td>当前页码</td>
            <td><code>Number</code></td>
            <td><code>1</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>pageSize</td>
            <td>每页条目数</td>
            <td><code>Number</code></td>
            <td><code>10</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>total</td>
            <td>总数据条目数</td>
            <td><code>Number</code></td>
            <td><code>0</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>prevText</td>
            <td>上一页按钮自定义文本</td>
            <td><code>String</code></td>
            <td><code>''</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>nextText</td>
            <td>下一页按钮自定义文本</td>
            <td><code>String</code></td>
            <td><code>''</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>buttonBgColor</td>
            <td>分页按钮的背景颜色</td>
            <td><code>String</code></td>
            <td><code>#f5f7fa</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>buttonBorderColor</td>
            <td>分页按钮的边框颜色</td>
            <td><code>String</code></td>
            <td><code>#dcdfe6</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>pageSizes</td>
            <td>每页显示条目个数选择器的选项</td>
            <td><code>Array</code></td>
            <td><code>[10, 20, 30, 40, 50]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>layout</td>
            <td>
              组件布局，子组件名用逗号分隔。支持：<code>prev</code>,
              <code>pager</code>, <code>next</code>, <code>total</code>
            </td>
            <td><code>String</code></td>
            <td><code>'prev, pager, next'</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>hideOnSinglePage</td>
            <td>是否在只有一页时隐藏分页器</td>
            <td><code>Boolean</code></td>
            <td><code>false</code></td>
            <td><code>true / false</code></td>
          </tr>
        </tbody>
      </table>
      <text id="events-事件说明">Events 事件说明</text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@update:currentPage</td>
            <td>页码改变时触发（v-model）</td>
            <td><code>page</code></td>
          </tr>
          <tr>
            <td>@update:pageSize</td>
            <td>每页数量改变时触发（v-model）</td>
            <td><code>size</code></td>
          </tr>
          <tr>
            <td>@current-change</td>
            <td>页码改变时触发</td>
            <td><code>page</code></td>
          </tr>
          <tr>
            <td>@size-change</td>
            <td>每页条目数改变时触发</td>
            <td><code>size</code></td>
          </tr>
        </tbody>
      </table>
      <text id="插槽说明-slot">插槽说明（Slot）</text>
      <table>
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>默认插槽（暂未使用）</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="支持的-layout-项">支持的 layout 项</text>
      <table>
        <thead>
          <tr>
            <th>layout 项</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>prev</code></td>
            <td>上一页按钮</td>
          </tr>
          <tr>
            <td><code>pager</code></td>
            <td>页码列表</td>
          </tr>
          <tr>
            <td><code>next</code></td>
            <td>下一页按钮</td>
          </tr>
          <tr>
            <td><code>total</code></td>
            <td>显示总页数信息</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const usageCode = `<template>
  <view>
    <up-pagination
      :total="total"
      :current="current"
      @change="change"
    ></up-pagination>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const current = ref(1);
const total = ref(100);

const change = (page: number) => {
  console.log('当前页：', page);
}
<\/script>`
</script>

<style lang="scss" scoped>
.pagination-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
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
.demo-model {
  position: relative;
  width: 100%;
  height: 700px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px 0;
  background-image: url(/common/iPhone13.png);
}
.model-content {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  position: relative;
  top: 33px;
}
.iframe {
  width: 100%;
  height: 100%;
}
.open-link {
  position: absolute;
  right: 20px;
  top: 60px;
}
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}
</style>
