<template>
  <view class="subsection-page">
    <view class="theme-default-content content__default">
      <text id="subsection-分段器">
        Subsection 分段器
      </text>
      <text>该分段器一般用于用户从几个选项中选择某一个的场景</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
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
          </tr>
        </tbody>
      </table>
      <text id="基本使用">基本使用</text>
      <view>
        <view>通过<code>list</code>数组参数传递分段的选项，数组元素可为字符串，或者通过<code>keyName</code>参数传入对象(默认为<code>name</code>)</view>
        <view>通过<code>current</code>指定初始化时激活的选项</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="模式选择">模式选择</text>
      <text>通过<code>mode</code>设置分段器的模式</text>
      <view>
        <view>值为<code>button</code>时为按钮类型</view>
        <view>值为<code>subsection</code>时为分段器形式</view>
      </view>
      <CodeBlock title="模式选择" language="html" :code="modeCode" />
      <text id="颜色配置">颜色配置</text>
      <view>
        <view>通过<code>activeColor</code>配置激活选项的文字颜色</view>
        <view>通过<code>inactiveColor</code>配置未激活选项的文字颜色</view>
        <view>通过<code>bgColor</code>配置背景颜色，mode为button时有效（默认 '#eeeeef' ）</view>
      </view>
      <CodeBlock title="颜色配置" language="html" :code="colorCode" />
      <text id="注意事项">注意事项</text>
      <text>
        如果想通过一个变量绑定<code>current</code>值，需要在<code>change</code>事件回调中修改此值，否则可能会由于<code>props</code>的限制，前后两次设置<code>current</code>为相同的值，
        视图将不会更新。
      </text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>请勿在<code>watch</code>监听中修改<code>current</code>值，会导致事件死循环。</text>
      </view>
      <CodeBlock title="注意事项" language="html" :code="noticeCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/subsection/subsection.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-subsection :list="list" :current="0"></up-subsection>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['未付款', '待发货', '已发货', '待评价', '已完成']);
<\/script>`

const modeCode = `<up-subsection :list="list" mode="subsection" :current="1"></up-subsection>`

const colorCode = `<up-subsection
  :list="list"
  activeColor="#f56c6c"
  inactiveColor="#666"
></up-subsection>`

const noticeCode = `<template>
  <up-subsection
    :list="list"
    :current="current"
    @change="change"
  ></up-subsection>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(['未付款', '待发货', '已发货']);
const current = ref(0);

const change = (index) => {
  current.value = index;
}
<\/script>`
</script>

<style lang="scss" scoped>
.subsection-page {
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
text {
  color: #3eaf7c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
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
.custom-block {
  background: #f6f8fa;
  border-left: 4px solid #3eaf7c;
  padding: 12px 16px;
  margin: 10px 0;
  border-radius: 4px;
  &.warning {
    border-left-color: #faad14;
    background: #fffbe6;
  }
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
