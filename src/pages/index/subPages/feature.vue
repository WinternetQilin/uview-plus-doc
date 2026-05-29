<template>
  <view class="feature-page">
    <view class="theme-default-content content__default">
      <text id="注意事项">
        <text href="feature.html#注意事项" class="header-anchor">#</text>
        注意事项
      </text>
      <text>
        由于uni-app支持多端开发，而各端，特别是各小程序平台，没有统一的标准，加重了开发者和企业的成本，幸好uni-app使用Vue标准，对各端进行了写法的统一，
        帮助到uni-app开发者。
      </text>
      <text id="运行报错uncaught-syntaxerror-unexpected-identifier-plus-v-lbl-r-lbr-plus-at-marked-esm-js-8-28527">
        <text href="feature.html#运行报错uncaught-syntaxerror-unexpected-identifier-plus-v-lbl-r-lbr-plus-at-marked-esm-js-8-28527" class="header-anchor">#</text>
        运行报错Uncaught SyntaxError: Unexpected identifier '_plus_V_lbl_r_lbr_plus' (at marked.esm.js:8:28527)
      </text>
      <text>系unocss与marked库存在冲突，解决方式参见这里，exclude里排除一下。https://github.com/ijry/uiadmin/blob/master/front-end/uiadmin-uniapp/unocss.config.ts</text>
      <text id="组件无法加载-手动引入缺有效。">
        <text href="feature.html#组件无法加载-手动引入缺有效。" class="header-anchor">#</text>
        组件无法加载，手动引入缺有效。
      </text>
      <text>经过调试发现，uni-app核心框架某些版本存在easycom及组件加载问题，cli版本请使用<code>npx @dcloudio/uvm@latest</code>更新至最新版本，HBuilderX从官网下载最新版本。</text>
      <text id="ref名称冲突导致各种异常">
        <text href="feature.html#ref名称冲突导致各种异常" class="header-anchor">#</text>
        ref名称冲突导致各种异常
      </text>
      <text>
        在组件上绑定ref时，建议不要使用form/toast/uToast等等各种与容易与uni-app内置组件和uview-plus内置组件冲突的关键字，
        建议使用如formRef/upToastRef等明显绝对不会有冲突风险的名称，比如ref="formRef"，不要使用ref="form"已经发现会导致双向绑定失效。
      </text>
      <text id="cannot-assign-to-read-only-property-of-object">
        <text href="feature.html#cannot-assign-to-read-only-property-of-object" class="header-anchor">#</text>
        Cannot assign to read only property '_' of object
      </text>
      <text>该错误一般时uni-app核心老版本问题，参考https://ask.dcloud.net.cn/question/194973帖子进行处理。</text>
      <text id="可选链支持">
        <text href="feature.html#可选链支持" class="header-anchor">#</text>
        可选链支持
      </text>
      <text>出现报错{message: "Unexpected token ."}是因为HBuilderX内置的浏览器版本太低导致，不要使用内置浏览器即可。</text>
      <text id="微信小程序">
        <text href="feature.html#微信小程序" class="header-anchor">#</text>
        微信小程序
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">注意</text>
        <text>微信小程序基础库需要设置在2.19.2及以上</text>
      </view>
      <text id="支付宝小程序">
        <text href="feature.html#支付宝小程序" class="header-anchor">#</text>
        支付宝小程序
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">注意</text>
        <text>uview-plus需要开启了<code>component2</code>模式才支持支付宝小程序</text>
      </view>
      <view>
        <view>
          支付宝在很早前，已升级为<code>component2</code>模式，此模式支持更多的功能和特性，uni-app上，很多的特性，如<code>provide/inject</code>、<code>$slots</code>等，需要开启此模式才能支持，
          而此模式在uni-app新建项目中默认是关闭的，因而需要在项目根目录的<code>manifest.json</code>中开启，如没有<code>mp-alipay</code>属性节点，新增即可：
        </view>
      </view>
      <pre><code>......
"mp-alipay" : {
	"component2" : true
},
......</code></pre>
      <view start="2">
        <view>uview-plus的<code>waterfall</code>瀑布流组件使用了<code>$scoped slot</code>特性，由于hx的问题，在hx2.8.2修正了此问题，所以瀑布流组件需要hx2.8.2及以上才支持支付宝小程序。</view>
      </view>
      <text id="vue特性在各平台支持度">
        <text href="feature.html#vue特性在各平台支持度" class="header-anchor">#</text>
        Vue特性在各平台支持度
      </text>
      <view>
        <view>以下特性，uview-plus已对各小程序开发工具，H5浏览器，APP(不含NVUE)进行过实测，均获得支持，其中支付宝小程序需要开启<code>component2</code>模式。</view>
      </view>
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
      <view>
        <view>provide / inject</view>
        <view>$slots</view>
        <view>v-model / sync</view>
        <view>$parent / $children</view>
      </view>
      <text id="设置页面背景颜色">
        <text href="feature.html#设置页面背景颜色" class="header-anchor">#</text>
        设置页面背景颜色
      </text>
      <text>一般情况下，我们给页面的<code>page</code>节点或者给页面的最外层<code>view</code>设置背景颜色，二者分别有如下需要注意点：</text>
      <text id="_1-通过page节点设置">
        <text href="feature.html#_1-通过page节点设置" class="header-anchor">#</text>
        1. 通过<code>page</code>节点设置
      </text>
      <text>
        这个方式全端有效，但是需要注意的是，在微信小程序，或者某些安卓机型上，该节点如果写在带<code>scoped</code>属性的样式标签内是无效的，所以我们建议
        您可以在页面多加一个不带scoped属性的样式标签，如下：
      </text>
      <pre><code>&lt;!-- 如果需要css的支持，还可以添加lang属性 --&gt;
&lt;style lang="scss"&gt;
page {
	background-color: $u-bg-color;
}
&lt;/style&gt;

&lt;!-- 带scoed属性的其他样式 --&gt;
&lt;style lang="scss" scoped&gt;
.box {
	......
}
&lt;/style&gt;</code></pre>
      <text id="_2-通过页面外层view设置">
        <text href="feature.html#_2-通过页面外层view设置" class="header-anchor">#</text>
        2. 通过页面外层<code>view</code>设置
      </text>
      <text>
        相比<code>page</code>节点，<code>view</code>的高度默认为内容高度，所以如果页面内容不足一屏高度时，底部剩余部分依然为默认的白色，所以我们给需要这个<code>view</code>设置一个
        最低高度，让它等于窗口高度：
      </text>
      <pre><code>&lt;template&gt;
	&lt;view class="wrap"&gt;
		......
	&lt;/view&gt;
&lt;/template&gt;

&lt;style scoped lang="scss"&gt;
.wrap {
	background-color: $u-bg-color;
	min-height: 100vh;
}
&lt;/style&gt;</code></pre>
      <text id="全局赋值设备信息的陷阱">
        <text href="feature.html#全局赋值设备信息的陷阱" class="header-anchor">#</text>
        全局赋值设备信息的陷阱
      </text>
      <text>
        我们都知道，可以通过<code>uni.getSystemInfoSync()</code>获取设备信息，但是每次用到时都写一遍是很繁琐的，所以很多同学们都会突发奇想，比如在<code>main.js</code>或者
        在<code>App.vue</code>中将<code>uni.getSystemInfoSync()</code>的结果赋值给<code>Vue.prototype</code>，如下：
      </text>
      <pre><code>// main.js
Vue.prototype.system = uni.getSystemInfoSync();</code></pre>
      <text>
        上面的写法没有问题，我们可以任意地方通过<code>this.system</code>得到设备的信息，但是这里有一个陷阱，写在<code>main.js</code>，意味着赋值代码只会被执行一次，且是APP启动的时候，
        但是uni-app中，设备信息的<code>windowHeight</code>属性是不含APP的导航栏和tabbar高度在内的，当我们进入首页时，<code>windowHeight</code>不含tabbar高度在内，高度可能为
        '700px'，但是进入内页后，没有tabbar，这时的<code>windowHeight</code>高度依然为700px(少掉了tabbar的50px高度)，显然是不正确的。<br>
        上面说的只是对<code>windowHeight</code>属性有影响，其他的属性无碍，如果是需要获取高度，建议每次都执行<code>uni.getSystemInfoSync()</code>，或者通过uview-plus提供的快捷工具
        <code>uni.$u.sys()</code>方法获取即可。
      </text>
      <text id="小程序主包太大无法预览和发布">
        <text href="feature.html#小程序主包太大无法预览和发布" class="header-anchor">#</text>
        小程序主包太大无法预览和发布
      </text>
      <text>
        我们都知道微信小程序预览和发布的主包大小都不能超过<code>2M</code>，否则无法真机预览和上传发布，经常有同学反馈刚使用uview-plus，调试时候主包就超过了<code>2M</code>而无法真机预览，
        我们在这里做一个说明，uview-plus是<code>按需引入</code>的，在发行时，HX会自动剔除您没有使用组件，即使您使用了uViwe的全部组件，整个uview-plus的大小也只有500K左右，但是有如下两点前提：
      </text>
      <view>
        <view>
          <strong>调试</strong><br>
          在调试阶段，为了调试的友好效果和编译速度等，HX默认是没有对JS进行压缩和去除注释，也没有进行组件按需引入的，所以会导致JS文件都很大，我们需要在
          HBuilder X进行如下操作，再重新编译即可：
        </view>
      </view>
      <pre><code>HBuilderX   运行-&gt;运行到小程序模拟器-&gt;勾选 运行时是否压缩代码</code></pre>
      <view>
        <view>
          <strong>发布</strong><br>
          在HX中进行发布时，uview-plus的组件会按需引入(使用uview-plus所有组件的情况下，占用空间500k左右)，如果主包依然超出<code>2M</code>，您需要从多个方面着手：
        </view>
      </view>
      <view>
        <view><text href="https://uniapp.dcloud.io/collocation/pages?id=subpackages" target="_blank">小程序分包</text></view>
        <view>将静态资源放到服务器进行引用</view>
        <view>取消"ES6转ES5"设置</view>
      </view>
      <text id="uni-scss的优缺点">
        <text href="feature.html#uni-scss的优缺点" class="header-anchor">#</text>
        uni.scss的优缺点
      </text>
      <text>
        <code>uni.scss</code>为uni-app新建项目自带工程文件，使用的预处理器为<code>sass/scss</code>，由此可见，uni-app官方推荐的是<code>scss</code>，同时我们uview-plus也是<code>scss</code>的坚定推崇者，不建议在
        uni-app中使用<code>less</code>、<code>stylus</code>等。
      </text>
      <text><code>uni.scss</code>具有如下一些特点：</text>
      <view>
        <view>无需引入，uni-app在编译时，会自动引入此文件</view>
        <view>在此中定义的<code>scss</code>变量，可以全局使用，可以在此定义一些颜色，主题，尺寸等变量</view>
        <view><strong><code>uni.scss</code>会编译到每个<code>scss</code>文件中</strong>(请着重理解这一句话)</view>
      </view>
      <text>
        综上所述，我们可以得知，<code>uni.scss</code>主要是利用<code>scss</code>的特性，定义一些全局变量，供各个写了<code>lang=scss</code>的style标签引用，但是这引出了一个重要的问题：<br>
        <code>uni.scss</code>中所写的一切内容，都会注入到每个声明了<code>scss</code>的文件中，这意味着，如果您的<code>uni.scss</code>如果有几百行，大小10k左右，那么这个10k都会被注入所有的
        其他<code>scss</code>文件(页面)中，如果您的应用有50个页面，那么有可能因此导致整体的包体积多了50 * 10 = 500k的大小，这可能会导致小程序包太大而无法预览和发布，
        所以，我们建议您只将<code>scss</code>变量相关的内容放到<code>uni.scss</code>中。
      </text>
      <text id="样式覆盖兼容性">
        <text href="feature.html#样式覆盖兼容性" class="header-anchor">#</text>
        样式覆盖兼容性
      </text>
      <text>为了避免样式被用户覆盖，或者被污染，一般组件或者页面都会给<code>style</code>标签加上<code>scoped</code>属性，如下演示为一个组件的内部构造：</text>
      <pre><code>/* item.vue */
&lt;template&gt;
	&lt;view class="item"&gt;&lt;/view&gt;
&lt;/template&gt;

&lt;style scoped&gt;
	/* 编译器会解析成下面这样 */
	.item[data-v-xxxx] {
		......
	}
&lt;/style&gt;</code></pre>
      <text>
        可以看到，<code>scoped</code>实现原理是给HTML标签添加了一个随机的<code>data-v-xxxx</code>属性标识，然后给CSS选择器也添加了一个同样的属性选择器，这样，
        在HTML中写上样式，只会作用于当前组件，不会影响其他组件和页面。
      </text>
      <text id="如何让样式覆盖生效">
        <text href="feature.html#如何让样式覆盖生效" class="header-anchor">#</text>
        如何让样式覆盖生效
      </text>
      <text>我们在使用uview-plus或者编写自定义组件的时候，会遇到自带的样式不满足需求，需要自定义的请况，这里需要注意以下几点：</text>
      <view>
        <view>需要<code>scoped</code>标签样式能够覆盖组件样式，需要在对应页面写同样名称的类名</view>
        <view>如果您是自定义组件，需要给组件根节点类名，如上例的<code>item</code>，根元素类名必须与组件内<code>scoped</code>的类名一致</view>
        <view>如果您的项目使用的是scss，如果需要覆盖父组件的样式，需要配置<code>/deep/</code>(微信小程序无效)或<code>::v-deep</code>，如下：</view>
      </view>
      <pre><code>&lt;style lang="scss" scoped&gt;
	/deep/ .u-test {
		color: red;
	}
&lt;/style&gt;</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.feature-page {
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
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  font-size: 16px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
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
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
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
text {
  color: #409eff;
  text-decoration: none;
}
</style>
