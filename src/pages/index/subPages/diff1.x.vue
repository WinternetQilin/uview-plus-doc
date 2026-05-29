<template>
  <view class="diff1.x-page">
    <view class="theme-default-content content__default">
      <text id="对比uview">
        <text href="diff1.x.html#对比uview" class="header-anchor">#</text>
        对比uView
      </text>
      <text>uview-plus对比uView2.x，目前除了支持vue3，其他共接口我们将尽量保持兼容，最大减少大家的学习和迁移成本。</text>
      <text>下面列出一些uview-plus与uView2.x的差异（同时保留了uView1.x与uView2.x的差异方便大家查看，但是uView1.x并不支持升级到uview-plus），让您能更好的对<code>element-plus</code>有整体的认识，了解该使用哪个版本，以及是否值得升级到<code>uview-plus</code>版本。</text>
      <text id="_1-对nvue的支持">
        <text href="diff1.x.html#_1-对nvue的支持" class="header-anchor">#</text>
        1. 对nvue的支持
      </text>
      <text>
        众所周知，uView2.x是兼容nvue的，目前uview-plus也继承了这一优点也全面实现了兼容<code>nvue</code>。<br>
        我们也知道，<code>nvue</code>的背后其实是<code>weex</code>，在渲染上有出色的效果，但是其也有很多无法填平的兼容问题，导致某些情况下费尽心思依然无法实现理想的效果。
      </text>
      <text id="_2-form表单校验的加强">
        <text href="diff1.x.html#_2-form表单校验的加强" class="header-anchor">#</text>
        2. form表单校验的加强
      </text>
      <text>在<code>1.x</code>中，<code>prop</code>参数不支持<code>text.b.c</code>的写法，<code>2.x</code>实现了支持，同时对<code>form</code>组件引入了<code>validateField、resetFields、clearValidate</code>等方法，从各个方面对表单功能进行了加强，让您在移动端依然能对表单校验游刃有余。</text>
      <text id="_3-优化popup弹窗组件">
        <text href="diff1.x.html#_3-优化popup弹窗组件" class="header-anchor">#</text>
        3. 优化popup弹窗组件
      </text>
      <text>在<code>2.x</code>中，我们对弹窗进行了优化，有如下：</text>
      <view>
        <view>修复了<code>1.x</code>中快速切换可能会卡死；</view>
        <view>移除了内置的<code>scroll-view</code>组件，让<code>popup</code>内的内容可以超出边界；</view>
        <view>优化弹窗的响应速度</view>
        <view>处理了由于uni-app的问题，导致微信小程序内，弹窗内无法准确获取元素尺寸而导致某些内嵌组件失效的问题；</view>
        <view>提供一个<code>bgColor</code>参数，设置为<code>transparent</code>可以方便去掉背景色，实现个性化的中部弹窗；</view>
      </view>
      <text id="_4-提供通用性的customstyle参数">
        <text href="diff1.x.html#_4-提供通用性的customstyle参数" class="header-anchor">#</text>
        4. 提供通用性的customStyle参数
      </text>
      <text>我们为每个组件都提供了一个<code>customStyle</code>，一般作用于组件内部的根节点，可以方便设置一些基础样式，它同时能接受对象或者字符串的样式形式，如下：</text>
      <pre><code>// 对象形式
&lt;up-badge :customStyle="{backgroundColor: 'red'}"&gt;&lt;/up-badge&gt;

// 字符串形式
&lt;up-badge customStyle="background-color: red;"&gt;&lt;/up-badge&gt;</code></pre>
      <text id="_5-优化在微信小程序上的差异">
        <text href="diff1.x.html#_5-优化在微信小程序上的差异" class="header-anchor">#</text>
        5. 优化在微信小程序上的差异
      </text>
      <text>微信小程序中，默认情况下，自定义组件本身的那个节点是一个"普通"的节点，使用时可以在这个节点上设置<code>class style 、动画、 flex</code>布局等，但是在复杂的布局下，这可能会导致我们无法控制组件的整体布局，所以在<code>2.x</code>中，我们统一将所有组件设置为"虚拟的"，让其能更好的按我们的预期进行工作。</text>
      <pre><code>// #ifdef MP-WEIXIN
// 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
options: {
    virtualHost: true
}
// #endif</code></pre>
      <text id="_6-加强calendar日历组件">
        <text href="diff1.x.html#_6-加强calendar日历组件" class="header-anchor">#</text>
        6. 加强calendar日历组件
      </text>
      <text>在<code>2.x</code>中，我们加入了多个控制参数，让您能够对日历进行各个方面进行细致的操作，如通过<code>formatter</code>参数，可以自定义日历提示语，角标等；允许控制日期最大和最小范围；可以通过滚动的形式，同时展示多个月份；总之，相比<code>1.x</code>，我们从每个方面进行了细致的考虑，并提供了对应的处理方法。</text>
      <text id="_7-picker组件的调整">
        <text href="diff1.x.html#_7-picker组件的调整" class="header-anchor">#</text>
        7. picker组件的调整
      </text>
      <text>在<code>1.x</code>中，我们提供了<code>picker</code>和<code>select</code>组件，这些组件存在一些不足与混乱，同时可能无法配置出我们想要的场景，在<code>2.x</code>中，我们对此进行了梳理，拆分为典型的<code>picker</code>组件，用于普通的非时间类型选择，同时提供<code>datetime-picker</code>组件，用于专门的时间选择，并针对时间的格式化，最小和最大时间等方面，提供了多样化的控制参数。</text>
      <text id="_8-加强numberbox组件">
        <text href="diff1.x.html#_8-加强numberbox组件" class="header-anchor">#</text>
        8. 加强numberBox组件
      </text>
      <text>在<code>1.x</code>上，由于历史原因，此组件存在更新值时可能会有异常的问题。在<code>2.x</code>中，我们对此组件进行了重构和加强，加入异步控制，以及样式完全自定义的特性，让它能适用于任何您需要它的场景。</text>
      <text id="_9-优化upload组件">
        <text href="diff1.x.html#_9-优化upload组件" class="header-anchor">#</text>
        9. 优化upload组件
      </text>
      <text>
        在<code>1.x</code>中，我们将上传的核心功能集成在组件内，导致在某些特殊返回状态，以及有前端直传<code>oss</code>时，可能会操作不方便的问题。<br>
        所以，在<code>2.x</code>中，我们重构了此组件，此后，组件内部只提供图片(新增了视频和文件类型)的选择与展示，将上传的步骤交由外部用户自定义的逻辑进行操作，实现更好的解耦。
      </text>
      <text id="_10-优化radio和checkbox组件">
        <text href="diff1.x.html#_10-优化radio和checkbox组件" class="header-anchor">#</text>
        10. 优化radio和checkbox组件
      </text>
      <text>在<code>1.x</code>中，我们没法控制这两个组件的排列形式，所以在<code>2.x</code>中，我们提供了一个<code>placement</code>参数，可以对调图片与文本的位置，用于在特殊场景的布局，同时我们在组件内部进行了特殊处理，让他们能更好的配合<code>form</code>组件进行表单校验。</text>
      <text id="_11-switch组件细节优化">
        <text href="diff1.x.html#_11-switch组件细节优化" class="header-anchor">#</text>
        11. switch组件细节优化
      </text>
      <text>在<code>1.x</code>中，该组件能够满足正常使用，在<code>2.x</code>中，我们对它进行优化，比如加入更好的<code>loading</code>效果、切换动画、以及提供<code>space</code>参数让您配置出另一种风格的样式。</text>
      <text id="_12-优化countdown倒计时组件">
        <text href="diff1.x.html#_12-优化countdown倒计时组件" class="header-anchor">#</text>
        12. 优化countDown倒计时组件
      </text>
      <text>在<code>2.x</code>中，我们对此组件进行如下优化：</text>
      <view>
        <view>加入毫秒级的功能</view>
        <view>提供完全自定义的样式配置，让它能适用于任何场景。</view>
      </view>
      <text id="_13-优化swipeaction滑动单元格组件">
        <text href="diff1.x.html#_13-优化swipeaction滑动单元格组件" class="header-anchor">#</text>
        13. 优化swipeAction滑动单元格组件
      </text>
      <text>在<code>2.x</code>中，我们针对不同的平台，采用不同的方案去实现此组件的效果，在<code>nvue</code>上，我们采用了<code>BindingX</code>方案，在APP和微信小程序，H5上，我们采用了<code>wxs</code>的方案，这些优化，能让我们滑动单元格时，有丝滑和细腻的效果。</text>
      <text id="_14-组件内部获取尺寸时机的优化">
        <text href="diff1.x.html#_14-组件内部获取尺寸时机的优化" class="header-anchor">#</text>
        14. 组件内部获取尺寸时机的优化
      </text>
      <text>
        在<code>1.x</code>中，普遍的做法是在组件初始化完成后获取内部元素的尺寸，这导致在内容变化而导致尺寸变化后，可能导致不准确，或者需要通过调用组件的方法重新进行初始化。<br>
        而在<code>2.x</code>中，我们对此进行了反思，采用的方法为每次需要进行操作的时候，重新获取元素的尺寸，典型的为<code>collapse</code>折叠面板组件，在每次打开的时候，组件都会重新计算该展示的高度。
      </text>
      <text id="_15-父子嵌套组件调用的优化">
        <text href="diff1.x.html#_15-父子嵌套组件调用的优化" class="header-anchor">#</text>
        15. 父子嵌套组件调用的优化
      </text>
      <text>在uview-plus中，有很多组件都采用父子嵌套的做法，比如<code>radio</code>组件，就由<code>up-radio-group</code>和<code>up-radio</code>组件，<code>1.x</code>中对类似的组件采用了统一的处理方法，该方法存在一定的缺陷，导致反复操作一些子组件时，重复加入一些实例到管理状态中，从而导致卡顿或者混乱。在<code>2.x</code>中，我们对类似的问题进行了优化，保证了状态的正确性，以及在组件被卸载的时候，进行移除。</text>
      <text id="_16-骨架屏组件重构">
        <text href="diff1.x.html#_16-骨架屏组件重构" class="header-anchor">#</text>
        16. 骨架屏组件重构
      </text>
      <text>
        在<code>1.x</code>中，我们需要给骨架屏组件提供类名，以及初始的模拟数据，让组件内部进行尺寸获取以及在对应的位置绘制占位图，在便捷性的同时，舍弃了可控性。<br>
        所以，在<code>2.x</code>中，我们采用了另一种实现方式，让用户可以通过参数的形式，配置出想要的占位图信息，可以获得更强的自定义性。
      </text>
      <text id="_17-加强http请求">
        <text href="diff1.x.html#_17-加强http请求" class="header-anchor">#</text>
        17. 加强http请求
      </text>
      <text>
        在<code>1.x</code>中，我们提供了基本可用的<code>http</code>支持，它也存在一些缺陷，比如不支持<code>upload、download</code>，其他各项配置不够细化等。<br>
        在<code>2.x</code>中，我们引入更专业的<code>luch-request</code>插件，它能全面的支持一个企业应用在各种复杂场景下的请求配置需求，我们对此插件进行了进一步的封装，并提供了详细实践用例。
      </text>
      <text id="_18-提供全局性的组件默认参数配置">
        <text href="diff1.x.html#_18-提供全局性的组件默认参数配置" class="header-anchor">#</text>
        18. 提供全局性的组件默认参数配置
      </text>
      <text>
        我们知道，每个组件都有很多的<code>props</code>参数，在调用组件的时候，通过修改对应的参数，可以覆盖组件的默认值。但是在对于某个常用的组件来说，如果组件的某个参数默认值不符合自己的需求，就需要在每次调用的时候，都去覆盖它。<br>
        在<code>2.x</code>中，我们对此提供了一个解决方案，假设<code>u-text</code>的<code>color</code>为<code>#333333</code>，而您应用的默认色值为<code>#555555</code>，就需要每次使用<code>u-text</code>组件时，都去修改它，如下：
      </text>
      <pre><code>&lt;!-- 列表页 --&gt;
&lt;up-text color="#555555" text="列表内容"&gt;&lt;/up-text&gt;

&lt;!-- 详情页 --&gt;
&lt;up-text color="#555555" text="详情内容"&gt;&lt;/up-text&gt;</code></pre>
      <text>在<code>2.x</code>中，我们可以通过<code>uni.$u.props.组件名.参数名</code>的形去对组件的某个默认参数进行全局覆盖，比如我们我要修改<code>u-text</code>组件<code>color</code>参数：</text>
      <pre><code>// 建议在main.js中(初始化uview-plus之后)引入外部配置文件中进行统一处理
uni.$u.props.text.color = '#555555'</code></pre>
      <text>在进行如上设置后，整个应用中，任意调用<code>up-text</code>的地方，<code>color</code>参数的默认值都成为了<code>#555555</code>。</text>
      <text id="_19-优化demo演示效果-以及移除了模板和js的模块">
        <text href="diff1.x.html#_19-优化demo演示效果-以及移除了模板和js的模块" class="header-anchor">#</text>
        19. 优化demo演示效果，以及移除了模板和js的模块
      </text>
      <text>
        为了让组件库更加专注和简洁，我们在演示demo中，移除了<code>1.x</code>中关于<code>模板</code>和<code>js</code>的模块，同时优化了组件的演示效果，不再使用<code>1.x</code>切换按钮的形式去动态切换效果，而是提供更直观的形式对组件的重要效果进行罗列演示。<br>
        同时，在官网中，我们也移除了<code>模板</code>模块。
      </text>
      <text id="_20-加强tag组件">
        <text href="diff1.x.html#_20-加强tag组件" class="header-anchor">#</text>
        20. 加强tag组件
      </text>
      <text>在<code>2.x</code>中，我们对<code>tag</code>组件进行了加强，相较<code>1.x</code>，它具有如下优势：</text>
      <view>
        <view>可以配置关闭功能</view>
        <view>可以配置图标</view>
        <view>可以适用于进行多选和单选的场景</view>
      </view>
      <text id="_21-加强swiper轮播图组件">
        <text href="diff1.x.html#_21-加强swiper轮播图组件" class="header-anchor">#</text>
        21. 加强swiper轮播图组件
      </text>
      <text>在<code>2.x</code>中，我们对<code>swiper</code>组件进行了加强，让它可以配置出更加灵活的指示器样式，同时加入加载中的状态，以及可以嵌入视频播放的特性。</text>
      <text id="_22-优化sticky吸顶组件">
        <text href="diff1.x.html#_22-优化sticky吸顶组件" class="header-anchor">#</text>
        22. 优化sticky吸顶组件
      </text>
      <text>在<code>1.x</code>中，我们采用的是监听元素状态的形式，通过<code>js</code>方案进行吸顶，但是随着时代的进步以及设备的升级，大部分设备以及某些平台已经实现了对<code>css sticky</code>支持，<code>2.x</code>中，我们对此组件进行了重构，采用css sticky方案进行吸顶。</text>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.diff1\.x-page {
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
