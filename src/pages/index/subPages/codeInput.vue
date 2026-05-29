<template>
  <view class="codeInput-page">
    <view class="theme-default-content content__default">
      <text id="codeinput-验证码输入">
        <text href="codeInput.html#codeinput-验证码输入" class="header-anchor">#</text>
        CodeInput 验证码输入
      </text>

      <text>
        该组件一般用于验证用户短信验证码的场景，也可以结合uview-plus的<text
          href="keyboard.html"
        >
          键盘组件
        </text>使用
      </text>
      <text id="平台差异说明">
        <text href="codeInput.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
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
      <text id="基本使用">
        <text href="codeInput.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <view>
        <view>通过<code>mode</code>参数模式，可取如下值：</view>
        <view><code>box</code>(默认)-输入位置位一个方框</view>
        <view><code>bottomLine</code>-底部显示一条横线</view>
        <view><code>middleLine</code>-中部显示一条横线</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-code-input v-model="value"&gt;&lt;/up-code-input&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue'

const value = ref('')
&lt;/script&gt;</code></pre>
      <text id="横线模式">
        <text href="codeInput.html#横线模式" class="header-anchor">#</text>
        横线模式
      </text>
      <view>
        <view>通过<code>mode="line"</code>可设置显示为横线模式</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-code-input v-model="value2" mode="line"&gt;&lt;/up-code-input&gt;
&lt;/template&gt;</code></pre>
      <text id="设置长度">
        <text href="codeInput.html#设置长度" class="header-anchor">#</text> 设置长度
      </text>
      <view>
        <view>
          通过<code>maxlength</code>参数配置可输入的方框个数，如6位验证码，该值设置为6即可
        </view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-code-input v-model="value3" :maxlength="6"&gt;&lt;/up-code-input&gt;
&lt;/template&gt;</code></pre>
      <text id="横线间距">
        <text href="codeInput.html#横线间距" class="header-anchor">#</text>
        横线间距
      </text>
      <view>
        <view>通过<code>space</code>可设置显示为横线模式</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-code-input v-model="value4" :space="0"&gt;&lt;/up-code-input&gt;
&lt;/template&gt;</code></pre>
      <text id="细边框">
        <text href="codeInput.html#细边框" class="header-anchor">#</text> 细边框
      </text>
      <view>
        <view>通过<code>hairline</code>可设置细边框</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;up-code-input v-model="value5" mode="box" :space="0" :maxlength="4" hairline&gt;&lt;/up-code-input&gt;
&lt;/template&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text
          href="codeInput.html#右侧演示页面源代码地址"
          class="header-anchor"
        >
          #
        </text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">
          点击以下链接以查看右侧演示页面的源码
        </text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/codeInput/codeInput.nvue"
          target="_blank"
          style="display: flex; align-items: center"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="github"
            width="30"
          />
          github
        </text>
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/codeInput/codeInput.nvue"
          target="_blank"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
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
</script>

<style lang="scss" scoped>
.codeInput-page {
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
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
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
.custom-block {
  background: #f0f9eb;
  border-left: 4px solid #67c23a;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.custom-block text {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #67c23a;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
</style>
