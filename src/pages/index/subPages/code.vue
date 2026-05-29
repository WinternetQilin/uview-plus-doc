<template>
  <view class="code-page">
    <view class="theme-default-content content__default">
      <text id="code-验证码输入框">
        <text href="code.html#code-验证码输入框" class="header-anchor">#</text>
        Code 验证码输入框
      </text>
      <text>
        考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语各有不同，所以本组件不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景
      </text>
      <text id="平台差异说明">
        <text href="code.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="code.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <text>通过ref获取组件对象，再执行后面的操作，见下方示例。</text>
      <view>
        <view>通过<code>seconds</code>设置需要倒计的秒数(默认<code>60</code>)</view>
        <view>通过ref调用组件内部的<code>start</code>方法，开始倒计时</view>
        <view>
          通过监听<code>change</code>事件(从开始到结束之间，每秒触发一次)获得提示的文字，可能值如"获取验证码|12秒后重新获取|重新获取"，可以自定义
        </view>
      </view>
      <text>
        注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的<code>canGetCode</code>变量，在倒计时
        过程中，该值为<code>false</code>，如果为<code>false</code>应该给予提示并不要再次向后端请求验证码，如果为<code>true</code>，则为获取验证码
        之前，或者倒计结束之后，可以再次向后端请求验证码。
      </text>
      <text>以下为完整示例，见如下：</text>
      <pre><code>&lt;template&gt;
  &lt;view class="wrap"&gt;
    &lt;up-toast ref="uToastRef"&gt;&lt;/up-toast&gt;
    &lt;up-code :seconds="seconds" @end="end" @start="start" ref="uCodeRef"
      @change="codeChange"&gt;&lt;/up-code&gt;
    &lt;up-button @tap="getCode"&gt;{{ tips }}&lt;/up-button&gt;
  &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const tips = ref('');
const seconds = ref(10);
const uCodeRef = ref(null);

const codeChange = (text) => {
  tips.value = text;
};

const getCode = () => {
  if (uCodeRef.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    });
    setTimeout(() => {
      uni.hideLoading();
      // 这里此提示会被start()方法中的提示覆盖
      uni.$u.toast('验证码已发送');
      // 通知验证码组件内部开始倒计时
      uCodeRef.start();
    }, 2000);
  } else {
    uni.$u.toast('倒计时结束后再发送');
  }
};

const end = () => {
  uni.$u.toast('倒计时结束');
};

const start = () => {
  uni.$u.toast('倒计时开始');
};
&lt;/script&gt;

&lt;style lang="scss"&gt;
.wrap {
  padding: 24rpx;
}
&lt;/style&gt;</code></pre>
      <text id="自定义提示语">
        <text href="code.html#自定义提示语" class="header-anchor">#</text>
        自定义提示语
      </text>
      <text>
        组件内部有内置的提示语，如获取验证码前的提示语为"获取验证码"，用户可以通过参数配置自定义的提示：
      </text>
      <view>
        <view>获取前，参数为<code>start-text</code>，默认值为"获取验证码"</view>
        <view>
          倒计时期间，参数为<code>change-text</code>，默认为"X秒重新获取"，这里的"x"(大小写均可)，将会被倒计的秒数替代
        </view>
        <view>倒计时结束，参数为<code>end-text</code>，默认值为"重新获取"</view>
      </view>
      <text id="保持倒计时">
        <text href="code.html#保持倒计时" class="header-anchor">#</text>
        保持倒计时
      </text>
      <text>
        一般情况下，在H5刷新浏览器，或者各端返回再进入时，倒计时会消失，导致用户可以再次尝试获取验证码，虽然后端还会对此进行进一步的判断。<br>
        某些业务场景，我们需要在用户刷新或者重新进入时，保持倒计时状态，也叫"本地"记录倒计时状态，这是需要结合
        <code>uni.setStorageSync</code>和<code>uni.getStorageSync</code>进行处理。
      </text>
      <text id="右侧演示页面源代码地址">
        <text href="code.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/code/code.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/code/code.nvue"
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
.code-page {
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
