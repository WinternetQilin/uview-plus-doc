<template>
  <view class="swipeaction-page">
    <view class="theme-default-content content__default">
      <text id="swipeaction-滑动单元格">
        SwipeAction 滑动单元格
      </text>
      <text>该组件一般用于左滑唤出操作菜单的场景，用的最多的是左滑删除操作。</text>
      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>
          如果把该组件通过v-for用于左滑删除的列表，请保证循环的<code>:key</code>是一个唯一值，可以用数据的id或者title替代。
          不能是数组循环的index，否则删除的时候，可能会出现数据错乱
        </text>
      </view>
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
        <view>通过slot传入内部内容即可，可以将<code>v-for</code>的"index"索引值传递给<code>index</code>参数，用于点击时，在回调方法中对某一个数据进行操作(点击回调时第一个参数会返回此索引值)</view>
        <view>内部的按钮通过<code>options</code>参数配置，此参数为一个数组，元素为对象，可以配置按钮的文字，背景颜色(建议只配置此两个参数即可)，<strong>请勿配置宽高等属性</strong>。</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="多个按钮并列">多个按钮并列</text>
      <view>
        <view>通过添加<code>options</code>的值，达到多个并列的效果</view>
      </view>
      <CodeBlock title="多个按钮并列" language="html" :code="multiButtonCode" />
      <text id="组合使用">组合使用</text>
      <view>
        <view>通过增设<code>options</code>的<code>options</code>达成组合效果</view>
      </view>
      <CodeBlock title="组合使用" language="html" :code="groupCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/swipeAction/swipeAction.nvue" target="_blank" style="display:flex;align-items:center;">
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
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([{
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`

const multiButtonCode = `<template>
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options = ref([{
  text: '收藏',
  style: {
    backgroundColor: '#E9A23B'
  }
}, {
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`

const groupCode = `<template>
  <up-swipe-action>
    <up-cell title="标题文字" value="内容"></up-cell>
    <template #options>
      <up-swipe-action-item :options="options1" @click="click">
      </up-swipe-action-item>
      <up-swipe-action-item :options="options2" @click="click">
      </up-swipe-action-item>
    </template>
  </up-swipe-action>
</template>

<script setup>
import { ref } from 'vue';

const options1 = ref([{
  text: '标记',
  style: {
    backgroundColor: '#3EAF7C'
  }
}]);

const options2 = ref([{
  text: '删除',
  style: {
    backgroundColor: '#F56C6C'
  }
}]);

const click = (index) => {
  console.log('点击了第' + index + '个按钮');
}
<\/script>`
</script>

<style lang="scss" scoped>
.swipeaction-page {
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
