<template>
  <view class="alert-page">
    <view class="theme-default-content content__default">
      <text id="alert-警告提示">
        <text href="alert.html#alert-警告提示" class="header-anchor">#</text>
        Alert 警告提示
        <text href="alert.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>
      <text>警告提示，展现需要关注的信息。</text>
      <text id="使用场景">
        <text href="alert.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>当某个页面需要向用户显示警告的信息时。</view>
        <view>
          非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。
        </view>
      </view>
      <text id="平台差异说明">
        <text href="alert.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="alert.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>
          通过<code>title</code>和<code>description</code>设置组件的标题和描述内容
        </view>
        <view>
          通过<code>type</code>设置主题类型，有<code>primary</code>,<code>success</code>,<code>error</code>,<code>warning</code>,<code>info</code>可选值
        </view>
        <view>
          通过<code>effect</code>设置主题浅或深色调，有<code>light</code>(浅色 默认),<code>dark</code>(深色)可选值
        </view>
      </view>
      <view class="language-html extra-class">
        <pre class="language-html"><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-alert</text> <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>title<text class="token punctuation">"</text></text> <text class="token attr-name">type</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>warning<text class="token punctuation">"</text></text> <text class="token attr-name">:description</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>description<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-alert</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-alert</text> <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>title<text class="token punctuation">"</text></text> <text class="token attr-name">type</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>warning<text class="token punctuation">"</text></text> <text class="token attr-name">effect</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>dark<text class="token punctuation">"</text></text> <text class="token attr-name">:description</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>description<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-alert</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token comment">// 响应式数据  </text>
<text class="token keyword">const</text> title <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'uview-plus的目标是成为uni-app生态最优秀的UI框架'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> description <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'uview-plus是uni-app生态专用的UI框架'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>

<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="options-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code>
<text class="token operator">&lt;</text>script<text class="token operator">&gt;</text>
<text class="token keyword">export</text> <text class="token keyword">default</text> <text class="token punctuation">{</text>
	<text class="token function">data</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text>
		<text class="token keyword">return</text> <text class="token punctuation">{</text>
			<text class="token literal-property property">title</text><text class="token operator">:</text><text class="token string">'uview-plus的目标是成为uni-app生态最优秀的UI框架'</text><text class="token punctuation">,</text>,
			<text class="token literal-property property">description</text><text class="token operator">:</text><text class="token string">'uview-plus是uni-app生态专用的UI框架'</text>
		<text class="token punctuation">}</text><text class="token punctuation">;</text>;
	<text class="token punctuation">}</text><text class="token punctuation">,</text>,
	<text class="token function">onLoad</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text><text class="token punctuation">}</text><text class="token punctuation">,</text>,
	<text class="token literal-property property">methods</text><text class="token operator">:</text> <text class="token punctuation">{</text>
	<text class="token punctuation">}</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>;
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="图标">
        <text href="alert.html#图标" class="header-anchor">#</text>
        图标
      </text>
      <text>通过<code>showIcon</code>设置是否显示图标，作用是让信息类型更加醒目。</text>
      <text>
        <strong>注意</strong>：当前版本图标为uview-plus内置图标，根据<code>type</code>参数显示不同的图标，无法自定义。
      </text>
      <view class="language-html extra-class">
        <pre class="language-html"><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-alert</text> <text class="token attr-name">type</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>warning<text class="token punctuation">"</text></text> <text class="token attr-name">:show-icon</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>true<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-alert</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <text id="可关闭的警告提示">
        <text href="alert.html#可关闭的警告提示" class="header-anchor">#</text>
        可关闭的警告提示
      </text>
      <text>显示关闭按钮，点击可关闭警告提示。</text>
      <view>
        <view><code>closable</code>参数配置是否可关闭</view>
      </view>
      <view class="language-html extra-class">
        <pre class="language-html"><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-alert</text> <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>title<text class="token punctuation">"</text></text>  <text class="token attr-name">type</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>warning<text class="token punctuation">"</text></text> <text class="token attr-name">:closable</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>closable<text class="token punctuation">"</text></text> <text class="token attr-name">:description</text> <text class="token attr-value"><text class="token punctuation attr-equals"> =</text> <text class="token punctuation">"</text>description<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-alert</text><text class="token punctuation">&gt;</text></text>

	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> onLoad, onShow <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'@dcloudio/uni-app'</text><text class="token punctuation">;</text>

<text class="token comment">// 定义响应式数据  </text>
<text class="token keyword">const</text> title <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'uview-plus的目标是成为uni-app生态最优秀的UI框架'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> description <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'uview-plus是uni-app生态专用的UI框架'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> closable <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token boolean">true</text><text class="token punctuation">)</text><text class="token punctuation">;</text>

<text class="token comment">// 使用 uni-app 的 onLoad 生命周期钩子  </text>
<text class="token function">onLoad</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token operator">=&gt;</text> <text class="token punctuation">{</text>
  <text class="token comment">// 组件加载时执行的逻辑  </text>
  console<text class="token punctuation">.</text><text class="token function">log</text><text class="token punctuation">(</text><text class="token string">'组件加载了'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token punctuation">}</text><text class="token punctuation">)</text>;

<text class="token comment">// 使用 uni-app 的 onShow 生命周期钩子  </text>
<text class="token function">onShow</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token operator">=&gt;</text> <text class="token punctuation">{</text>
  <text class="token comment">// 组件显示时执行的逻辑  </text>
  console<text class="token punctuation">.</text><text class="token function">log</text><text class="token punctuation">(</text><text class="token string">'组件显示了'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token punctuation">}</text><text class="token punctuation">)</text>;
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="options-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code><text class="token operator">&lt;</text>script<text class="token operator">&gt;</text>
<text class="token keyword">export</text> <text class="token keyword">default</text> <text class="token punctuation">{</text>
	<text class="token function">data</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text>
		<text class="token keyword">return</text> <text class="token punctuation">{</text>
			<text class="token literal-property property">title</text><text class="token operator">:</text><text class="token string">'uview-plus的目标是成为uni-app生态最优秀的UI框架'</text><text class="token punctuation">,</text>,
			<text class="token literal-property property">description</text><text class="token operator">:</text><text class="token string">'uview-plus是uni-app生态专用的UI框架'</text><text class="token punctuation">,</text>,
			<text class="token literal-property property">closable</text><text class="token operator">:</text><text class="token boolean">true</text>
		<text class="token punctuation">}</text><text class="token punctuation">;</text>;
	<text class="token punctuation">}</text><text class="token punctuation">,</text>,
	<text class="token function">onLoad</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text><text class="token punctuation">}</text><text class="token punctuation">,</text>,
	<text class="token literal-property property">methods</text><text class="token operator">:</text> <text class="token punctuation">{</text>
	<text class="token punctuation">}</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>;
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="右侧演示页面源代码地址">
        <text href="alert.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">
          点击以下链接以查看右侧演示页面的源码
        </text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/alert/alert.nvue"
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
        <br>
      </view>
      <text id="api">
        <text href="alert.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="alert.html#props" class="header-anchor">#</text>
        Props
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              类型
            </th>
            <th style="text-align: left">
              默认值
            </th>
            <th style="text-align: left">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              title
            </td>
            <td style="text-align: left">
              显示的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              type
            </td>
            <td style="text-align: left">
              使用预设的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              warning
            </td>
            <td style="text-align: left">
              success | primary | error | info
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              description
            </td>
            <td style="text-align: left">
              辅助性文字，颜色比<code>title</code>浅一点，字号也小一点，可选
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              closable
            </td>
            <td style="text-align: left">
              关闭按钮(默认为叉号icon图标)
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showIcon
            </td>
            <td style="text-align: left">
              是否显示左边的辅助图标
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              effect
            </td>
            <td style="text-align: left">
              多图时，图片缩放裁剪的模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              light(浅色)
            </td>
            <td style="text-align: left">
              dark(深色)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              center
            </td>
            <td style="text-align: left">
              文字是否居中
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              fontSize
            </td>
            <td style="text-align: left">
              字体大小
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              14
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="event">
        <text href="alert.html#event" class="header-anchor">#</text>
        Event
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              事件名
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              点击关闭按钮时触发
            </td>
            <td style="text-align: left">
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
.alert-page {
  padding: 20px;
}

.theme-default-content {
  max-width: 100%;
}

text {
  font-size: 24px;
  font-weight: 600;
  margin: 20px 0 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaecef;
}

text .header-anchor {
  color: #409eff;
  text-decoration: none;
  margin-right: 8px;
}

text {
  font-size: 18px;
  font-weight: 600;
  margin: 20px 0 10px;
}

text .header-anchor {
  color: #409eff;
  text-decoration: none;
  margin-right: 8px;
}

text {
  line-height: 1.8;
  margin: 10px 0;
}

view {
  padding-left: 20px;
  margin: 10px 0;
}

view {
  line-height: 1.8;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 14px;
}

table th,
table td {
  border: 1px solid #eaecef;
  padding: 8px 12px;
  text-align: left;
}

table th {
  background: #f5f7fa;
  font-weight: 600;
}

code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.language-html,
.language-js,
.language-css {
  margin: 10px 0;
}

.extra-class {
  margin: 10px 0;
}

.custom-block {
  padding: 12px 16px;
  border-radius: 4px;
  margin: 10px 0;
}

.custom-block.tip {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
}

.custom-block-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.composition-api,
.options-api {
  margin: 10px 0;
}

.anchor image {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  margin-left: 5px;
}
</style>
