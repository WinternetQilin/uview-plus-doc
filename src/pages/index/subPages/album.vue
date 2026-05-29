<template>
  <view class="album-page">
    <view class="theme-default-content content__default">
      <text id="album-相册">
        <text href="album.html#album-相册" class="header-anchor">#</text>
        Album 相册
        <text href="album.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>
      <text>
        本组件提供一个类似相册的功能，让开发者开发起来更加得心应手。减少重复的模板代码
      </text>
      <text id="平台差异说明">
        <text href="album.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="album.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>
          通过<code>urls</code>设置相册的图片地址，搭配image等做出更棒的效果！
        </view>
      </view>
      <view class="language-html extra-class">
        <pre class="language-html"><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
  <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-page<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
    <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>text</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block__title<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>基本使用<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>text</text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block__content<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
        <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-album</text> <text class="token attr-name">:urls</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>urls1<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-album</text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
    <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
  <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token comment">// 响应式数据  </text>
<text class="token keyword">const</text> urls1 <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token punctuation">[</text><text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg'</text><text class="token punctuation">]</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
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
                <text class="token literal-property property">urls1</text><text class="token operator">:</text> <text class="token punctuation">[</text><text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg'</text><text class="token punctuation">]</text><text class="token punctuation">,</text>
            <text class="token punctuation">}</text>
        <text class="token punctuation">}</text>
    <text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <text id="多图模式">
        <text href="album.html#多图模式" class="header-anchor">#</text>
        多图模式
      </text>
      <view>
        <view>通过<code>urls</code>传入更多的图片地址形成图片列表</view>
      </view>
      <view class="language-html extra-class">
        <pre class="language-html"><code><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>template</text><text class="token punctuation">&gt;</text></text>
  <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-page<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
    <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>text</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block__title<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>多图模式<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>text</text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>u-demo-block__content<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
        <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>album<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
          <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>album__avatar<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
            <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>image</text>
              <text class="token attr-name">src</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>/static/uview/common/logo.png<text class="token punctuation">"</text></text>
              <text class="token attr-name">mode</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text><text class="token punctuation">"</text></text>
              <text class="token special-attr"><text class="token attr-name">style</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text><text class="token value css language-css"><text class="token property">width</text><text class="token punctuation">:</text> 32px<text class="token punctuation">;</text><text class="token property">height</text><text class="token punctuation">:</text> 32px<text class="token punctuation">;</text></text><text class="token punctuation">"</text></text></text>
            <text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>image</text><text class="token punctuation">&gt;</text></text>
          <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
          <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>view</text> <text class="token attr-name">class</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>album__content<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text>
            <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-text</text>
              <text class="token attr-name">text</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>uview-plus UI<text class="token punctuation">"</text></text>
              <text class="token attr-name">type</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>primary<text class="token punctuation">"</text></text>
              <text class="token attr-name">bold</text>
              <text class="token attr-name">size</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>17<text class="token punctuation">"</text></text>
            <text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-text</text><text class="token punctuation">&gt;</text></text>
            <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-text</text>
              <text class="token attr-name">margin</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>0 0 8px 0<text class="token punctuation">"</text></text>
              <text class="token attr-name">text</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>全面的组件和便捷的工具会让您信手拈来，如鱼得水<text class="token punctuation">"</text></text>
            <text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-text</text><text class="token punctuation">&gt;</text></text>
            <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;</text>up-album</text> <text class="token attr-name">:urls</text><text class="token attr-value"><text class="token punctuation attr-equals">=</text><text class="token punctuation">"</text>urls2<text class="token punctuation">"</text></text><text class="token punctuation">&gt;</text></text><text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>up-album</text><text class="token punctuation">&gt;</text></text>
          <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
        <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
      <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
    <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
  <text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>view</text><text class="token punctuation">&gt;</text></text>
<text class="token tag"><text class="token tag"><text class="token punctuation">&lt;/</text>template</text><text class="token punctuation">&gt;</text></text>
</code></pre>
      </view>
      <view class="composition-api">
        <view class="language-js extra-class">
          <pre class="language-js"><code><text class="token operator">&lt;</text>script setup<text class="token operator">&gt;</text>
<text class="token keyword">import</text> <text class="token punctuation">{</text> ref <text class="token punctuation">}</text> <text class="token keyword">from</text> <text class="token string">'vue'</text><text class="token punctuation">;</text>

<text class="token comment">// 响应式数据  </text>
<text class="token keyword">const</text> albumWidth <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token number">0</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
<text class="token keyword">const</text> urls2 <text class="token operator">=</text> <text class="token function">ref</text><text class="token punctuation">(</text><text class="token punctuation">[</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/2.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/3.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/4.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/5.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/6.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/7.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/8.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/9.jpg'</text><text class="token punctuation">,</text>
    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/10.jpg'</text><text class="token punctuation">,</text>
<text class="token punctuation">]</text><text class="token punctuation">)</text><text class="token punctuation">;</text>
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
                <text class="token literal-property property">albumWidth</text><text class="token operator">:</text> <text class="token number">0</text><text class="token punctuation">,</text>
                <text class="token literal-property property">urls2</text><text class="token operator">:</text> <text class="token punctuation">[</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/1.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/2.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/3.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/4.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/5.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/6.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/7.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/8.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/9.jpg'</text><text class="token punctuation">,</text>
                    <text class="token string">'https://uview-plus.jiangruyi.com/uview-plus/album/10.jpg'</text><text class="token punctuation">,</text>
                <text class="token punctuation">]</text><text class="token punctuation">,</text>,
            <text class="token punctuation">}</text>
        <text class="token punctuation">}</text>
    <text class="token operator">&lt;</text><text class="token operator">/</text>script<text class="token operator">&gt;</text>
</code></pre>
        </view>
      </view>
      <view class="language-css extra-class">
        <pre class="language-css"><code><text class="token selector">&lt;style lang="scss"&gt;
    .album</text> <text class="token punctuation">{</text>
        <text class="token atrule"><text class="token rule">@include</text> flex<text class="token punctuation">;</text></text>
        <text class="token property">align-items</text><text class="token punctuation">:</text> flex-start<text class="token punctuation">;</text>

        <text class="token selector">&amp;__avatar</text> <text class="token punctuation">{</text>
             <text class="token property">background-color</text><text class="token punctuation">:</text> $u-bg-color<text class="token punctuation">;</text>
             <text class="token property">padding</text><text class="token punctuation">:</text> 5px<text class="token punctuation">;</text>
             <text class="token property">border-radius</text><text class="token punctuation">:</text> 3px<text class="token punctuation">;</text>
         <text class="token punctuation">}</text>

        <text class="token selector">&amp;__content</text> <text class="token punctuation">{</text>
             <text class="token property">margin-left</text><text class="token punctuation">:</text> 10px<text class="token punctuation">;</text>
             <text class="token property">flex</text><text class="token punctuation">:</text> 1<text class="token punctuation">;</text>
         <text class="token punctuation">}</text>
    <text class="token punctuation">}</text>
&lt;/style&gt;
</code></pre>
      </view>
      <text id="右侧演示页面源代码地址">
        <text href="album.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">
          点击以下链接以查看右侧演示页面的源码
        </text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/album/album.nvue"
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
        <text href="album.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="album.html#props" class="header-anchor">#</text>
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
              urls
            </td>
            <td style="text-align: left">
              图片地址列表 支持 Array&lt;String&gt; | Array&lt;Object&gt;形式
            </td>
            <td style="text-align: left">
              Array
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
              keyName
            </td>
            <td style="text-align: left">
              指定从数组的对象元素中读取哪个属性作为图片地址
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
              singleSize
            </td>
            <td style="text-align: left">
              单图时，图片长边的长度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              180
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              multipleSize
            </td>
            <td style="text-align: left">
              多图时，图片边长
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              70
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              space
            </td>
            <td style="text-align: left">
              多图时，图片水平和垂直之间的间隔
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              6
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              singleMode
            </td>
            <td style="text-align: left">
              单图时，图片缩放裁剪的模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              scaleToFill
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              multipleMode
            </td>
            <td style="text-align: left">
              多图时，图片缩放裁剪的模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              aspectFill
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              maxCount
            </td>
            <td style="text-align: left">
              最多展示的图片数量，超出时最后一个位置将会显示剩余图片数量
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              9
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              previewFullImage
            </td>
            <td style="text-align: left">
              是否可以预览图片
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              rowCount
            </td>
            <td style="text-align: left">
              每行展示图片数量，如设置，singleSize和multipleSize将会无效
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              3
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showMore
            </td>
            <td style="text-align: left">
              超出maxCount时是否显示查看更多的提示
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              autoWrap
            </td>
            <td style="text-align: left">
              自适应换行模式，不受rowCount限制。
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
              unit
            </td>
            <td style="text-align: left">
              图片宽度单位
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              px
            </td>
            <td style="text-align: left">
              rpx
            </td>
          </tr>
        </tbody>
      </table>
      <text id="event">
        <text href="album.html#event" class="header-anchor">#</text>
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
              albumWidth
            </td>
            <td style="text-align: left">
              某些特殊的情况下，需要让文字与相册的宽度相等，这里事件的形式对外发送
            </td>
            <td style="text-align: left">
              width
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
.album-page {
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
