<template>
  <view class="switch-page">
    <view class="theme-default-content content__default">
      <text id="switch-开关选择器">
        Switch 开关选择器
      </text>
      <text>选择开关用于在打开和关闭状态之间进行切换。</text>
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
      <text id="基础使用">基础使用</text>
      <text>通过<code>v-model</code>绑定一个<code>布尔值</code>变量，这个变量是双向绑定的，当用户开或关选择器的时候，在父组件的该值也会相应的变为<code>true</code>或者<code>false</code>，也就是说，无需监听<code>@change</code>事件，也能获取开关的值。</text>
      <CodeBlock title="基础使用" language="html" :code="basicUseCode" />
      <text id="加载中">加载中</text>
      <text>设置<code>loading</code>属性，默认为<code>true</code>，可以让<code>switch</code>处于加载中的状态，这时<code>switch</code>是不可操作的，您可以通过<code>:loading='loading'</code>以动态设置加载状态</text>
      <CodeBlock title="加载中" language="html" :code="loadingCode" />
      <text id="禁用switch">禁用switch</text>
      <text>设置<code>disabled</code>属性,默认为<code>true</code>，即可禁用某个组件，让用户无法点击，禁用分为两种状态：</text>
      <view>
        <view>一是关闭情况下的禁用，这时只显示一个白色的区域。</view>
        <view>二是打开后再禁用，这时会在原有的颜色上加一个<code>opacity</code>透明度，但此时依然是不可操作的。</view>
      </view>
      <CodeBlock title="禁用switch" language="html" :code="disabledCode" />
      <text id="自定义尺寸">自定义尺寸</text>
      <text>设置<code>size</code>属性，可以让您自定义<code>switch</code>的尺寸，单位为<code>px</code></text>
      <CodeBlock title="自定义尺寸" language="html" :code="sizeCode" />
      <text id="自定义颜色">自定义颜色</text>
      <text>设置<code>activeColor</code>属性，可以让您自定义<code>switch</code>的颜色，支持多种设置方式，如：<code>activeColor="#f56c6c" activeColor="red" activeColor="rgb(0,0,0)"</code></text>
      <CodeBlock title="自定义颜色" language="html" :code="colorCode" />
      <text id="自定义样式">自定义样式</text>
      <text>同时设置<code>activeColor</code>和<code>inactiveColor</code>属性，可以让您自定义<code>switch</code>的样式，同样支持多种设置方式</text>
      <CodeBlock title="自定义样式" language="html" :code="styleCode" />
      <text id="异步控制">异步控制</text>
      <text>异步控制场景，一般发生在用户打开或者关闭选择器时，需要本地或者向后端请求判断，是否允许用户打开或者关闭的场景。</text>
      <CodeBlock title="异步控制" language="html" :code="asyncCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/switch/switch.nvue" target="_blank" style="display:flex;align-items:center;">
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
  <up-switch v-model="checked"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`

const loadingCode = `<template>
  <up-switch v-model="checked" loading></up-switch>
  <up-switch v-model="checked" :loading="loading"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const loading = ref(true);
<\/script>`

const disabledCode = `<template>
  <up-switch v-model="checked" disabled></up-switch>
  <up-switch v-model="checked" :disabled="true"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(true);
<\/script>`

const sizeCode = `<template>
  <up-switch v-model="checked" :size="30"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`

const colorCode = `<template>
  <up-switch v-model="checked" activeColor="#f56c6c"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`

const styleCode = `<template>
  <up-switch v-model="checked" activeColor="#f56c6c" inactiveColor="#eee"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
<\/script>`

const asyncCode = `<template>
  <up-switch v-model="checked" :loading="loading" @change="change"></up-switch>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);
const loading = ref(false);

const change = async (value) => {
  loading.value = true;
  // 模拟异步请求
  await new Promise(resolve => setTimeout(resolve, 1000));
  loading.value = false;
  checked.value = value;
}
<\/script>`
</script>

<style lang="scss" scoped>
.switch-page {
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
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
