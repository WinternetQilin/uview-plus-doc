<template>
  <view class="popup-page">
    <view class="theme-default-content content__default">
      <text id="popup-弹出层">Popup 弹出层</text>
      <view class="demo-placeholder">
        <text>此处应展示 Popup 弹出层 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsA/popup/popup"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsA/popup/popup
          </text>
        </text>
      </view>
      <text>
        弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。
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
      <view>
        <view>弹出层的内容通过<code>slot</code>传入，由用户自定义</view>
        <view>通过<code>show</code>绑定一个布尔值的变量控制弹出层的打开和收起，通过v-model:show双向绑定简化使用。</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="设置弹出层的方向">设置弹出层的方向</text>
      <view>
        <view>可以通过<code>mode</code>参数设置，可以设置为<code>left</code>、<code>top</code>、<code>right</code>、<code>bottom</code>、<code>center</code></view>
      </view>
      <CodeBlock title="设置弹出层的方向" language="html" :code="directionCode" />
      <text id="设置弹出层的圆角">设置弹出层的圆角</text>
      <text>需要将<code>round</code>设置为圆角值(仅对<code>mode = top | bottom | center</code>有效)。</text>
      <CodeBlock title="设置弹出层的圆角" language="html" :code="roundCode" />
      <text id="弹窗中内容滚动">弹窗中内容滚动</text>
      <view>
        <view>可以通过<code>scroll-view</code>来支持内容滚动，。</view>
      </view>
      <CodeBlock title="弹窗中内容滚动" language="html" :code="scrollCode" />
      <text id="底部追加内容">
        底部追加内容<text class="badge tip">3.4.30</text>
      </text>
      <view>
        <view>可以通过<code>bottom</code>插槽设置除了内容外的追加内容，典型的如一个悬浮的关闭按钮。</view>
      </view>
      <CodeBlock title="底部追加内容" language="html" :code="bottomSlotCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/popup/popup.nvue"
          target="_blank"
          class="github-link"
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
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/popup/popup.nvue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="gitee"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
    <view>
        <up-popup :show="show" @close="close" @open="open">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
        </up-popup>
        <up-popup v-model:show="show">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
        </up-popup>
        <up-button @click="show = true">打开</up-button>
    </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

function open() {
    show.value = true;
}

function close() {
    show.value = false;
}
<\/script>`

const directionCode = `<template>
    <up-popup :show="show" mode="top" @close="close" @open="open">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
    </up-popup>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

function open() {
    show.value = true;
}

function close() {
    show.value = false;
}
<\/script>`

const roundCode = `<template>
    <up-popup mode="bottom" round="10">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
    </up-popup>
<\/template>`

const scrollCode = `<template>
    <up-popup :show="show" mode="bottom" round="10" height="300">
        <scroll-view scroll-y="true" class="scroll-view">
            <view style="padding: 20px;">
                <text>内容区域</text>
                <view v-for="i in 20" :key="i" style="padding: 10px 0;">{{ i }}</view>
            </view>
        </scroll-view>
    </up-popup>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>

<style>
.scroll-view {
    height: 100%;
}
<\/style>`

const bottomSlotCode = `<template>
    <up-popup :show="show" mode="bottom" round="10">
        <view style="padding: 20px;">
            <text>这里是弹窗内容</text>
        </view>
        <template #bottom>
            <view style="padding: 10px; text-align: center;" @click="show = false">
                <text>关闭</text>
            </view>
        </template>
    </up-popup>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>`
</script>

<style lang="scss" scoped>
.popup-page {
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
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  vertical-align: middle;
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
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.demo-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px dashed #ccc;
}
.demo-placeholder text {
  color: #666;
  font-size: 14px;
}
.placeholder-tip {
  margin-top: 10px;
}
.placeholder-tip text {
  color: #3eaf7c;
  text-decoration: none;
}
.placeholder-tip text:hover {
  text-decoration: underline;
}
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  margin-top: 10px;
}
.github-link:hover {
  color: #3eaf7c;
}
</style>
