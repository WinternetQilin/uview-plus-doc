<template>
  <view class="actionsheet-page">
    <view class="theme-default-content content__default">
      <text id="actionsheet-操作菜单">
        <text href="actionSheet.html#actionsheet-操作菜单" class="header-anchor">
          #
        </text>
        ActionSheet 操作菜单
        <text href="actionSheet.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>
      <text>
        本组件用于从底部弹出一个操作菜单，供用户选择并返回结果。<br>
        本组件功能类似于uni的<code>uni.showActionSheet</code>API，配置更加灵活，所有平台都表现一致。
      </text>
      <text id="平台差异说明">
        <text href="actionSheet.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="actionSheet.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <view>
        <view>
          通过<code>title</code>(设置标题)，<code>cancelText</code>(取消按钮的文字，不为空时显示按钮)，<code>description</code>(选项上方的描述信息)
        </view>
        <view>
          通过<code>actions</code>设置需要显示的菜单，该值为一个数组，元素为对象，对象至少要提供<code>name</code>属性，另外可选的有<code>subname</code>(描述)，<code>disabled</code>(是否禁用)，<code>loading</code>(加载动画)，
          <code>color</code>(字体颜色)，<code>fontSize</code>(字体大小)，
        </view>
        <view>
          通过<code>show</code>绑定一个值为布尔值的变量控制组件的弹出与收起，<code>show</code>的值是双向绑定的
        </view>
      </view>
      <view class="language-html extra-class">
        <pre
          class="language-html"
        ><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-action-sheet</text> <text class="token attr-name">:actions</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>list<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>title<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:show</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-action-sheet</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-button</text> <text class="token attr-name">@click</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show = true<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text>打开ActionSheet<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-button</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token comment">// 使用 ref 创建响应式数据  </text>
<text class="token keyword">const</text> title <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'标题'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> list <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token punctuation">[</text>
  <text class="token punctuation">{</text>
    <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项一'</text><text class="token punctuation">,</text>
    <text class="token literal-property property">subname</text><text class="token operator">:</text> <text class="token string">"选项一描述"</text><text class="token punctuation">,</text>
    <text class="token literal-property property">color</text><text class="token operator">:</text> <text class="token string">'#ffaa7f'</text><text class="token punctuation">,</text>
    <text class="token literal-property property">fontSize</text><text class="token operator">:</text> <text class="token string">'20'</text>
  <text class="token punctuation">}</text><text class="token punctuation">,</text>
  <text class="token punctuation">{</text>
    <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二禁用'</text><text class="token punctuation">,</text>
    <text class="token literal-property property">disabled</text><text class="token operator">:</text> <text class="token boolean">true</text>
  <text class="token punctuation">}</text><text class="token punctuation">,</text>
  <text class="token punctuation">{</text>
    <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'开启load加载'</text><text class="token punctuation">,</text> <text class="token comment">// 开启后文字不显示  </text>
    <text class="token literal-property property">loading</text><text class="token operator">:</text> <text class="token boolean">true</text>
  <text class="token punctuation">}</text>
<text class="token punctuation">]</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> show <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token boolean">false</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="options-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script<text class="token operator">&gt;</text>
<text class="token keyword">export</text> <text class="token keyword">default</text> <text class="token punctuation">{</text>
	<text class="token function">data</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text>
		<text class="token keyword">return</text> <text class="token punctuation">{</text>
			<text class="token literal-property property">title</text><text class="token operator">:</text><text class="token string">'标题'</text><text class="token punctuation">,</text>
			<text class="token literal-property property">list</text><text class="token operator">:</text> <text class="token punctuation">[</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text><text class="token string">'选项一'</text><text class="token punctuation">,</text>
					<text class="token literal-property property">subname</text><text class="token operator">:</text><text class="token string">"选项一描述"</text><text class="token punctuation">,</text>
					<text class="token literal-property property">color</text><text class="token operator">:</text><text class="token string">'#ffaa7f'</text><text class="token punctuation">,</text>
					<text class="token literal-property property">fontSize</text><text class="token operator">:</text><text class="token string">'20'</text>
				<text class="token punctuation">}</text><text class="token punctuation">,</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二禁用'</text><text class="token punctuation">,</text>
					<text class="token literal-property property">disabled</text><text class="token operator">:</text><text class="token boolean">true</text>
				<text class="token punctuation">}</text><text class="token punctuation">,</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'开启load加载'</text><text class="token punctuation">,</text> <text class="token comment">//开启后文字不显示</text>
					<text class="token literal-property property">loading</text><text class="token operator">:</text><text class="token boolean">true</text>
				<text class="token punctuation">}</text>
			<text class="token punctuation">]</text><text class="token punctuation">,</text>
			<text class="token literal-property property">show</text><text class="token operator">:</text> <text class="token boolean">false</text>
		<text class="token punctuation">}</text><text class="token punctuation">;</text>
	<text class="token punctuation">}</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="配置点击遮罩关闭和点击某个菜单项时关闭弹窗">
        <text
          href="actionSheet.html#配置点击遮罩关闭和点击某个菜单项时关闭弹窗"
          class="header-anchor"
        >
          #
        </text>
        配置点击遮罩关闭和点击某个菜单项时关闭弹窗
      </text>
      <view>
        <view>
          通过<code>closeOnClickAction</code>参数来配置点击某个菜单项时是否关闭弹窗。
        </view>
        <view>
          通过<code>closeOnClickOverlay</code>参数配置点击遮罩是否允许关闭（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
        </view>
      </view>
      <view class="language-html extra-class">
        <pre
          class="language-html"
        ><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-action-sheet</text> <text class="token attr-name">:actions</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>list<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:closeOnClickOverlay</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>true<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:closeOnClickAction</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>true<text class="token punctuation">&quot;</text></text>  <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>title<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:show</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-action-sheet</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-button</text> <text class="token attr-name">@click</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show = true<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text>打开ActionSheet<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-button</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref<text class="token punctuation">,</text> onMounted <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token keyword">const</text> title <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'标题'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> list <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token punctuation">[</text>
  <text class="token punctuation">{</text> <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项一'</text> <text class="token punctuation">}</text><text class="token punctuation">,</text>
  <text class="token punctuation">{</text> <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二'</text> <text class="token punctuation">}</text>
<text class="token punctuation">]</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> show <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token boolean">false</text><text class="token punctuation">)</text><text class="token punctuation">;</text>

<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="options-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script<text class="token operator">&gt;</text>
<text class="token keyword">export</text> <text class="token keyword">default</text> <text class="token punctuation">{</text>
	<text class="token function">data</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text>
		<text class="token keyword">return</text> <text class="token punctuation">{</text>
			<text class="token literal-property property">title</text><text class="token operator">:</text><text class="token string">'标题'</text><text class="token punctuation">,</text>
			<text class="token literal-property property">list</text><text class="token operator">:</text> <text class="token punctuation">[</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text><text class="token string">'选项一'</text>
				<text class="token punctuation">}</text><text class="token punctuation">,</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二'</text>
				<text class="token punctuation">}</text>
			<text class="token punctuation">]</text><text class="token punctuation">,</text>
			<text class="token literal-property property">show</text><text class="token operator">:</text> <text class="token boolean">false</text>
		<text class="token punctuation">}</text><text class="token punctuation">;</text>
	<text class="token punctuation">}</text><text class="token punctuation">,</text>
	<text class="token function">onLoad</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text><text class="token punctuation">}</text><text class="token punctuation">,</text>
	<text class="token literal-property property">methods</text><text class="token operator">:</text> <text class="token punctuation">{</text>
	<text class="token punctuation">}</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="点击获取所点击选项name">
        <text href="actionSheet.html#点击获取所点击选项name" class="header-anchor">
          #
        </text>
        点击获取所点击选项name
      </text>
      <text>
        <code>select</code>回调事件带有一个<code>object</code>值，这个索引值为传递的<code>select</code>数组的name值，根据回调事件，能获得点击了
        该项的内容
      </text>
      <view class="language-html extra-class">
        <pre
          class="language-html"
        ><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-action-sheet</text> <text class="token attr-name">:actions</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>list<text class="token punctuation">&quot;</text></text> <text class="token attr-name">@select</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>selectClick<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>title<text class="token punctuation">&quot;</text></text> <text class="token attr-name">:show</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-action-sheet</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-button</text> <text class="token attr-name">@click</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>show = true<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text>打开ActionSheet<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-button</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref<text class="token punctuation">,</text> onMounted <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token comment">// 响应式数据  </text>
<text class="token keyword">const</text> title <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token string">'标题'</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> list <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token punctuation">[</text>
  <text class="token punctuation">{</text> <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项一'</text> <text class="token punctuation">}</text><text class="token punctuation">,</text>
  <text class="token punctuation">{</text> <text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二'</text> <text class="token punctuation">}</text>
<text class="token punctuation">]</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> show <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token boolean">false</text><text class="token punctuation">)</text><text class="token punctuation">;</text>

<text class="token comment">// 方法  </text>
<text class="token keyword">const</text> <text class="token function-variable function">selectClick</text> <text class="token operator">=</text> <text class="token punctuation">(</text><text class="parameter">index</text><text class="token punctuation">)</text> <text class="token operator">=&gt;</text> <text class="token punctuation">{</text>
  console<text class="token punctuation">.</text><text class="token function">log</text><text class="token punctuation">(</text>index<text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="options-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script<text class="token operator">&gt;</text>
<text class="token keyword">export</text> <text class="token keyword">default</text> <text class="token punctuation">{</text>
	<text class="token function">data</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text>
		<text class="token keyword">return</text> <text class="token punctuation">{</text>
			<text class="token literal-property property">title</text><text class="token operator">:</text><text class="token string">'标题'</text><text class="token punctuation">,</text>
			<text class="token literal-property property">list</text><text class="token operator">:</text> <text class="token punctuation">[</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text><text class="token string">'选项一'</text>
				<text class="token punctuation">}</text><text class="token punctuation">,</text>
				<text class="token punctuation">{</text>
					<text class="token literal-property property">name</text><text class="token operator">:</text> <text class="token string">'选项二'</text>
				<text class="token punctuation">}</text>
			<text class="token punctuation">]</text><text class="token punctuation">,</text>
			<text class="token literal-property property">show</text><text class="token operator">:</text> <text class="token boolean">false</text>
		<text class="token punctuation">}</text><text class="token punctuation">;</text>
	<text class="token punctuation">}</text><text class="token punctuation">,</text>
	<text class="token function">onLoad</text><text class="token punctuation">(</text><text class="token punctuation">)</text> <text class="token punctuation">{</text><text class="token punctuation">}</text><text class="token punctuation">,</text>
	<text class="token literal-property property">methods</text><text class="token operator">:</text> <text class="token punctuation">{</text>
		<text class="token function">selectClick</text><text class="token punctuation">(</text><text class="parameter">index</text><text class="token punctuation">)</text><text class="token punctuation">{</text>
			console<text class="token punctuation">.</text><text class="token function">log</text><text class="token punctuation">(</text>index<text class="token punctuation">)</text>
		<text class="token punctuation">}</text>
	<text class="token punctuation">}</text>
<text class="token punctuation">}</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="快捷组件使用">
        <text href="actionSheet.html#快捷组件使用" class="header-anchor">#</text>
        快捷组件使用
      </text>
      <text>
        为了在up-form表单等场景下更方便的使用，减少代码量，可以使用up-action-sheet-data快捷组件，快捷组件由数据驱动，更贴近Vue组件的使用方式。
        <text class="badge tip" style="vertical-align: top">3.4.6</text>以上版本
      </text>
      <view class="language-html extra-class">
        <pre
          class="language-html"
        ><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-action-sheet-data</text>
			<text class="token attr-name">v-model</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>info.gender<text class="token punctuation">&quot;</text></text>
			<text class="token attr-name">title</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>请选择性别<text class="token punctuation">&quot;</text></text>
			<text class="token attr-name">:options</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">&quot;</text>[
				{
					name: '男',
					value: 1,
				},
				{
					name: '女',
					value: 2,
				},
			]<text class="token punctuation">&quot;</text></text><text class="token punctuation">&gt;</text></text>
		<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-action-sheet-data</text><text class="token punctuation">&gt;</text></text>
	<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre
            class="language-js"
          ><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> reactive <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> info <text class="token operator">=</text> <text class="token function">reactive</text><text class="token punctuation">(</text><text class="token punctuation">{</text>
	gender: <text class="token number">1</text>
<text class="token punctuation">}</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="右侧演示页面源代码地址">
        <text href="actionSheet.html#右侧演示页面源代码地址" class="header-anchor">
          #
        </text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/actionSheet/actionSheet.nvue"
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
        <text href="actionSheet.html#api" class="header-anchor">#</text> API
      </text>
      <text id="props">
        <text href="actionSheet.html#props" class="header-anchor">#</text> Props
      </text>
      <text>
        注意：props中没有控制组件弹出与收起的参数，因为这是通过show绑定变量实现的，见上方说明。
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
              show
            </td>
            <td style="text-align: left">
              是否展示
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
              title
            </td>
            <td style="text-align: left">
              设置标题
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
              description
            </td>
            <td style="text-align: left">
              选项上方的描述信息，见上方文档示例
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
              actions
            </td>
            <td style="text-align: left">
              按钮的文字数组，见上方文档示例
            </td>
            <td style="text-align: left">
              Array&lt;Object&gt;
            </td>
            <td style="text-align: left">
              [ ]
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              nameKey <text class="badge tip">3.7.11</text>
            </td>
            <td style="text-align: left">
              选项名称key
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              name
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              subnameKey <text class="badge tip">3.7.11</text>
            </td>
            <td style="text-align: left">
              选项子名称key
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              subname
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancelText
            </td>
            <td style="text-align: left">
              取消按钮的文字，不为空时显示按钮
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
              closeOnClickAction
            </td>
            <td style="text-align: left">
              点击某个菜单项时是否关闭弹窗，见上方文档示例
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
              safeAreaInsetBottom
            </td>
            <td style="text-align: left">
              是否开启底部安全区适配
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
              openType
            </td>
            <td style="text-align: left">
              小程序的打开方式
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
              closeOnClickOverlay
            </td>
            <td style="text-align: left">
              点击遮罩是否允许关闭，见上方文档示例（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
            </td>
            <td style="text-align: left">
              Boolean
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
              round
            </td>
            <td style="text-align: left">
              圆角值，默认无圆角
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              0
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              wrapMaxHeight
            </td>
            <td style="text-align: left">
              选项列表区域最大高度，支持列表过长滚动。
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              600px
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              lang
            </td>
            <td style="text-align: left">
              指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              en
            </td>
            <td style="text-align: left">
              zh_CN | zh_TW | en
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              sessionFrom
            </td>
            <td style="text-align: left">
              会话来源，open-type="contact"时有效。只微信小程序有效
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
              sendMessageTitle
            </td>
            <td style="text-align: left">
              会话内消息卡片标题，openType="contact"时有效
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
              sendMessagePath
            </td>
            <td style="text-align: left">
              会话内消息卡片点击跳转小程序路径，openType="contact"时有效
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
              sendMessageImg
            </td>
            <td style="text-align: left">
              会话内消息卡片图片，openType="contact"时有效
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
              showMessageCard
            </td>
            <td style="text-align: left">
              是否显示会话内消息卡片，设置此参数为
              true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，用户点击后可以快速发送小程序消息，openType="contact"时有效
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
              appParameter
            </td>
            <td style="text-align: left">
              打开 APP 时，向 APP 传递的参数，openType=launchApp 时有效
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
        </tbody>
      </table>
      <text id="event">
        <text href="actionSheet.html#event" class="header-anchor">#</text> Event
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
            <th style="text-align: left">
              版本
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              select
            </td>
            <td style="text-align: left">
              点击ActionSheet列表项时触发
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
              close
            </td>
            <td style="text-align: left">
              点击取消按钮时触发
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
              getuserinfo
            </td>
            <td style="text-align: left">
              用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与
              wx.getUserInfo 返回的一致，openType="getUserInfo"时有效
            </td>
            <td style="text-align: left">
              detail
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              contact
            </td>
            <td style="text-align: left">
              客服消息回调，openType="contact"时有效
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
              getphonenumber
            </td>
            <td style="text-align: left">
              获取用户手机号回调，openType="getPhoneNumber"时有效
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
              error
            </td>
            <td style="text-align: left">
              当使用开放能力时，发生错误的回调，openType="error"时有效
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
              launchapp
            </td>
            <td style="text-align: left">
              打开 APP 成功的回调，openType="launchApp"时有效
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
              opensetting
            </td>
            <td style="text-align: left">
              在打开授权设置页后回调，openType="openSetting"时有效
            </td>
            <td style="text-align: left">
              -
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

<script setup lang="ts"></script>

<style lang="scss" scoped>
.actionsheet-page {
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
  background: #f6f8fa;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
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
  background: #fef0f0;
  border-left: 4px solid #f56c6c;
  padding: 10px 15px;
  margin: 10px 0;
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
.badge.tip {
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  background-color: #ecf5ff;
  color: #409eff;
  border-radius: 4px;
  vertical-align: middle;
  margin-left: 5px;
}
.language-html {
  margin: 10px 0;
}
.composition-api,
.options-api {
  margin: 10px 0;
}
</style>
