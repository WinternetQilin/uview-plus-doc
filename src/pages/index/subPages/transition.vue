<template>
  <view class="transition-page">
    <view class="theme-default-content content__default">
      <text id="transition-动画">
        <text href="transition.html#transition-动画" class="header-anchor">#</text>
        Transition 动画
        <text href="transition.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
      </text>
      <text>该组件用于组件的动画过渡效果。</text>

      <text id="平台差异说明">
        <text href="transition.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
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

      <text id="基本使用">
        <text href="transition.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过slot传入内容，默认使用的是<code>fade</code>效果</text>

      <CodeBlock
        code="<template>
    <up-transition :show=&quot;show&quot;>
        <view class=&quot;transition&quot;></view>
    </up-transition>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>"
        language="html"
        title="基本使用"
      />

      <text id="动画模式">
        <text href="transition.html#动画模式" class="header-anchor">#</text>
        动画模式
      </text>
      <text>通过<code>mode</code>传入效果模式，目前支持：</text>
      <view>
        <view><code>fade</code> 淡入</view>
        <view><code>fade-up</code> 上滑淡入</view>
        <view><code>fade-down</code> 下滑淡入</view>
        <view><code>fade-left</code> 左滑淡入</view>
        <view><code>fade-right</code> 右滑淡入</view>
        <view><code>slide-up</code> 上滑进入</view>
        <view><code>slide-down</code> 下滑进入</view>
        <view><code>slide-left</code> 左滑进入</view>
        <view><code>slide-right</code> 右滑进入</view>
        <view><code>zoom-in</code> 缩放</view>
        <view><code>zoom-out</code> 缩放</view>
      </view>

      <CodeBlock
        code="<template>
    <up-transition :show=&quot;show&quot; mode=&quot;zoom-in&quot;>
        <view class=&quot;transition&quot;></view>
    </up-transition>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);
</script>"
        language="html"
        title="动画模式"
      />

      <text id="右侧演示页面源代码地址">
        <text href="transition.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/transition/transition.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/transition/transition.nvue" target="_blank" style="display:flex;align-items:center;margin-top:10px;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30">
            gitee
          </image>
        </text>
        <br>
      </view>

      <text id="api">
        <text href="transition.html#api" class="header-anchor">#</text>
        API
      </text>

      <text id="props">
        <text href="transition.html#props" class="header-anchor">#</text>
        Props
      </text>
      <table>
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
            <td style="text-align:left;">
              show
            </td>
            <td style="text-align:left;">
              是否展示组件
            </td>
            <td style="text-align:left;">
              Boolean
            </td>
            <td style="text-align:left;">
              false
            </td>
            <td style="text-align:left;">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              mode
            </td>
            <td style="text-align:left;">
              使用的动画模式
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              fade
            </td>
            <td style="text-align:left;">
              fade / fade-up / fade-down / fade-left / fade-right / slide-up / slide-down / slide-left / slide-right / zoom-in / zoom-out
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              duration
            </td>
            <td style="text-align:left;">
              动画的执行时间，单位ms
            </td>
            <td style="text-align:left;">
              String | Number
            </td>
            <td style="text-align:left;">
              300
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              timingFunction
            </td>
            <td style="text-align:left;">
              使用的动画过渡函数
            </td>
            <td style="text-align:left;">
              String
            </td>
            <td style="text-align:left;">
              ease-out
            </td>
            <td style="text-align:left;">
              linear / ease / ease-in / ease-out / ease-in-out
            </td>
          </tr>
          <tr>
            <td style="text-align:left;">
              customStyle
            </td>
            <td style="text-align:left;">
              自定义样式
            </td>
            <td style="text-align:left;">
              Object
            </td>
            <td style="text-align:left;">
              -
            </td>
            <td style="text-align:left;">
              -
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.transition-page {
  padding: 20px;
}

.code-block-container {
  margin: 16px 0;
}

.custom-block {
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;

  &.tip {
    background-color: #f0f9eb;
    border-left: 4px solid #67c23a;
  }

  &.warning {
    background-color: #fdf6ec;
    border-left: 4px solid #e6a23c;
  }
}

.custom-block-title {
  font-weight: 600;
  margin-bottom: 8px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 10px;
    border: 1px solid #ebeef5;
  }

  th {
    background-color: #f5f7fa;
  }
}

view {
  padding-left: 20px;

  view {
    margin: 8px 0;
  }
}

code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
</style>
