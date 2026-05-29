<template>
  <view class="sticky-page">
    <view class="theme-default-content content__default">
      <text id="sticky-吸顶">
        Sticky 吸顶
      </text>
      <text>
        该组件与CSS中<code>position: sticky</code>属性实现的效果一致，当组件达到预设的到顶部距离时，
        就会固定在指定位置，组件位置大于预设的顶部距离时，会重新按照正常的布局排列。
      </text>
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
      <view class="custom-block tip">
        <text class="custom-block-title">说明</text>
        <text>
          本组件内部通过多种手段嗅探当前运行环境是否支持<code>css sticky</code>，在<code>H5</code>，<code>APP-VUE</code>，<code>NVUE</code>，<code>MP-WEIXIN</code>，<code>安卓</code>
          等环境可以进行准确判断，如果支持则使用<code>CSS</code>方案，否则使用降级的<code>JS</code>方案。
        </text>
      </view>
      <text id="基本使用">基本使用</text>
      <text>由于<code>css sticky</code>的特殊性，建议您将此组件放置在页面外层元素中，否则可能会导致<code>sticky</code>失效，以下为MDN对sticky的解释：</text>
      <view>
        <view>元素根据正常文档流进行定位，然后相对它的最近滚动祖先（nearest scrolling ancestor）和 containing block (最近块级祖先 nearest block-level ancestor)，包括table-related元素，基于top, right, bottom, 和 left的值进行偏移。偏移值不会影响任何其他元素的位置。</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="吸顶距离">吸顶距离</text>
      <text>通过<code>offset-top</code>参数设置组件在吸顶时与顶部的距离</text>
      <CodeBlock title="吸顶距离" language="html" :code="offsetTopCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/sticky/sticky.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
      <table class="api-table">
        <thead>
          <tr>
            <th style="text-align:left;">
              参数
            </th>
            <th style="text-align:left;">
              说明
            </th>
            <th style="text-align:left;">
              类型
            </th>
            <th style="text-align:left;">
              默认值
            </th>
            <th style="text-align:left;">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>offsetTop</td>
            <td>吸顶时与顶部的距离，单位rpx</td>
            <td>String | Number</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>customNavHeight</td>
            <td>导航栏高度，自定义导航栏时，需要传入此值</td>
            <td>String | Number</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用吸顶功能</td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>bgColor</td>
            <td>组件背景颜色</td>
            <td>String</td>
            <td>#ffffff</td>
            <td>-</td>
          </tr>
          <tr>
            <td>zIndex</td>
            <td>吸顶时的<code>z-index</code>值，<code>NVUE</code>无效</td>
            <td>String | Number</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>index</td>
            <td>自定义标识，用于区分是哪一个组件</td>
            <td>String | Number</td>
            <td>-</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-sticky>
    <up-button type="primary">吸顶按钮</up-button>
  </up-sticky>
</template>`

const offsetTopCode = `<template>
  <!-- 距离顶部200rpx时吸顶 -->
  <up-sticky :offset-top="200">
    <up-button type="primary">吸顶按钮</up-button>
  </up-sticky>
</template>`
</script>

<style lang="scss" scoped>
.sticky-page {
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
.platform-table,
.api-table {
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
