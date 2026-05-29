<template>
  <view class="slider-page">
    <view class="theme-default-content content__default">
      <text id="slider-滑动选择器">
        Slider 滑动选择器
      </text>
      <text>该组件一般用于表单中，手动选择一个区间范围的场景。</text>
      <view class="custom-block tip">
        <text class="custom-block-title">说明</text>
        <text>
          该组件在<code>H5</code>，<code>微信小程序</code>和<code>APP-VUE</code>等平台上使用了<code>WXS</code>技术，在<code>NVUE</code>平台使用了<code>BindingX</code>技术，
          故在滑动过程中可以获得细腻流畅的跟随效果。
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
      <text>需要通过<code>v-model</code>绑定一个值，来初始化滑块的选择值(0到100之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。</text>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="设置最大和最小值">设置最大和最小值</text>
      <text>通过<code>min</code>和<code>max</code>，可以设置滑块所能选择的最大和最小值</text>
      <CodeBlock title="设置最大和最小值" language="html" :code="minMaxCode" />
      <text id="设置步进值">设置步进值</text>
      <text>通过<code>step</code>参数设置步进值，这个步进值为每次跳变的值，具体表现请见示例。</text>
      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>需要注意的是，这个<code>step</code>必须要被<code>max</code>值整除，否则会出现无法无法滑动到最大值的情况</text>
      </view>
      <CodeBlock title="设置步进值" language="html" :code="stepCode" />
      <text id="在弹窗等初始化不显示的容器中使用">在弹窗等初始化不显示的容器中使用</text>
      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>需要注意的是，在此场景中使用要注意给slider同时一个v-if让它随着弹窗的显示再渲染，这样才能计算出滑块的正确尺寸。</text>
      </view>
      <CodeBlock title="弹窗中使用" language="html" :code="popupCode" />
      <text id="禁用状态">禁用状态</text>
      <CodeBlock title="禁用状态" language="html" :code="disabledCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-slider v-model="value"></up-slider>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(30);
<\/script>`

const minMaxCode = `<up-slider v-model="value" min="30" max="80"></up-slider>`

const stepCode = `<up-slider v-model="value" step="20" min="30" max="100"></up-slider>`

const popupCode = `<up-popup v-model:show="popupShow">
  <view class="popup-content">
    <up-slider v-if="popupShow" v-model="value"></up-slider>
  </view>
</up-popup>

<script setup>
import { ref } from 'vue';

const popupShow = ref(false);
const value = ref(50);
<\/script>`

const disabledCode = `<up-slider v-model="value" disabled></up-slider>`
</script>

<style lang="scss" scoped>
.slider-page {
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
