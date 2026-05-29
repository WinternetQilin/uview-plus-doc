<template>
  <view class="common-page">
    <view class="theme-default-content content__default">
      <text id="内置样式">
        <text href="common.html#内置样式" class="header-anchor">#</text>
        内置样式
      </text>
      <text id="说明">
        <text href="common.html#说明" class="header-anchor">#</text>
        说明
      </text>
      <text>
        uview-plus组件功能的实现，并不依赖全局样式，内置的一些类名，只是提供一些基础且常用的样式，仅此而已。
        <br>
        注意：请根据<text href="quickstart.html">快速上手</text>中的说明，引入uview-plus提供的scss文件。
      </text>
      <view class="custom-block warning">
        <text class="custom-block-title">温馨提示</text>
        <text>
          由于uview-plus的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的<code>style</code>标签加上<code>lang="scss"</code>属性，否则可能会报错。
          <br>
        </text>
      </view>
      <text id="文字省略">
        <text href="common.html#文字省略" class="header-anchor">#</text>
        文字省略
      </text>
      <text>
        <code>up-line-1</code>,<code>up-line-2</code>,<code>up-line-3</code>,<code>up-line-4</code>,<code>up-line-5</code>五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行+省略号。
      </text>
      <pre><code>&lt;text class="up-line-1"&gt;是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛&lt;/text&gt;</code></pre>
      <text id="重置按钮样式">
        <text href="common.html#重置按钮样式" class="header-anchor">#</text>
        重置按钮样式
      </text>
      <text>
        我们知道，uni-app和微信小程序的<code>button</code>按钮是自带样式的，比如边框，内边距，行高等。在某些特殊场景，我们可能会需要清除这些样式，仅仅只留下按钮文本，就像
        单纯的<code>view</code>元素一样，不带预置样式，场景：
        <br>
        在微信小程序中，我们知道<code>button</code>设置<code>open-type</code>参数为<code>getUserInfo</code>(或者分享场景)，点击按钮可以弹出让用户授权的系统弹窗，有时候我们可能需要按钮形式展现，但也有时候我们仅仅需要
        "点击登录/授权/分享"几个字，同时具备获取相应的功能，就需要清除按钮的样式了，只需要给<code>button</code>加上<code>up-reset-button</code>类名即可。
      </text>
      <pre><code>&lt;button class="up-reset-button"&gt;点击登录&lt;/button&gt;</code></pre>
      <text>提示：</text>
      <view>
        <view>
          此种场景，不建议使用uview-plus的<code>up-button</code>组件，使用原生的<code>button</code>即可
        </view>
        <view>
          有时候，我们可能弹出询问用户是否想授权，可以用<code>up-modal</code>组件，此组件有一个<code>confirm-button</code>的<code>slot</code>用于替换<code>确定</code>按钮，用户点击确定，即可授权。
        </view>
      </view>
      <pre><code>&lt;!-- 请在微信开发工具中运行此代码 --&gt;
&lt;template&gt;
  &lt;view&gt;
    &lt;up-modal v-model:visible="show" content="点击确定进行授权"&gt;
      &lt;template #confirm-button&gt;
        &lt;button open-type="getUserInfo" class="up-reset-button" @getuserinfo="getuserinfo"&gt;确定&lt;/button&gt;
      &lt;/template&gt;
    &lt;/up-modal&gt;
    &lt;up-button @click="show = true"&gt;打开modal&lt;/up-button&gt;
  &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const show = ref(true);

const getuserinfo = (res) =&gt; {
  console.log(res);
};
&lt;/script&gt;</code></pre>
      <text id="边框">
        <text href="common.html#边框" class="header-anchor">#</text>
        边框
      </text>
      <text>
        uni-app，iOS和少数设备使用<code>1rpx</code>是能够得到类似<code>0.5px</code>的半像素宽度的，但是某些情况下是不兼容的，
        故uview-plus提供了一套兼容的css类名，方便用户使用。
        <br>
        <code>up-border</code>表示给元素添加四周的边框，<code>up-border-top</code>为上边框，<code>up-border-right</code>为右边框，
        <code>up-border-bottom</code>为下边框，<code>up-border-left</code>为左边框。
        <br>
        说明：如果想调整边框与内容的距离，修改元素的内边距即可。
      </text>
      <pre><code>&lt;view class="up-border-bottom"&gt;
	夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外
&lt;/view&gt;</code></pre>
      <text id="文字颜色">
        <text href="common.html#文字颜色" class="header-anchor">#</text>
        文字颜色
      </text>
      <text>uview-plus提供了四个关于文字的颜色，具体详见文档的<text href="color.html">Color 色彩</text>部分，分别是：</text>
      <view>
        <view><code>main-color</code>主要颜色，可以用于标题等需要重颜色的场景</view>
        <view><code>content-color</code>内容颜色，可以用于一般性内容的场景</view>
        <view><code>tips-color</code>提示颜色，可以用于浅颜色的提示语的场景</view>
        <view><code>light-color</code>为比<code>tips-color</code>更浅的颜色，可以和<code>tips-color</code>搭配使用</view>
      </view>
      <text>举个例子：</text>
      <pre><code>&lt;style lang="scss" scoped&gt;
view {
	.main-color {
		color: #303133;
	}
	.content-color {
		color: #606266;
	}
	.tips-color {
		color: #909399;
	}
	.light-color {
		color: #c0c4cc;
	}
}
&lt;/style&gt;</code></pre>
      <text id="主题色">
        <text href="common.html#主题色" class="header-anchor">#</text>
        主题色
      </text>
      <text>uview-plus提供五个关于主题的scss颜色变量，如有需要，可合理使用。具体详见文档的<text href="color.html">Color 色彩</text>部分，分别是：</text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意</text>
        <text>注意，以下为3.x版本，4.x版本前缀为$up-。</text>
      </view>
      <view>
        <view><code>$u-primary</code>为蓝色，uview-plus的主色彩，代表热情，友好，积极，向上之意。</view>
        <view><code>$u-warning</code>为黄色，代表警告之意。</view>
        <view><code>$u-success</code>为绿色，代表成功之意。</view>
        <view><code>$u-error</code>为红色，代表错误之意。</view>
        <view><code>$u-info</code>为灰色，代表一般信息之意。</view>
      </view>
      <pre><code>&lt;style lang="scss" scoped&gt;
view {
	/* 重要，颜色展示 */
	.color-primary {
		color: $u-primary;
	}
	.color-success {
		color: $u-success;
	}
	.color-warning {
		color: $u-warning;
	}
	.color-error {
		color: $u-error;
	}
	.color-info {
		color: $u-info;
	}
}
&lt;/style&gt;</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.common-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
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
  color: #e6a23c;
}
.custom-block {
  background: #fdf6ec;
  border-left: 4px solid #e6a23c;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.warning {
  background: #fdf6ec;
  border-left: 4px solid #e6a23c;
}
.custom-block.danger {
  background: #fef0f0;
  border-left: 4px solid #f56c6c;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
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
