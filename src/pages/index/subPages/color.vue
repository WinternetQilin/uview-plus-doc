<template>
  <view class="color-page">
    <view class="theme-default-content content__default">
      <text id="color-色彩">
        <text href="color.html#color-色彩" class="header-anchor">#</text>
        Color 色彩
      </text>

      <text>
        uview-plus经过大量调试和研究，得出一套专有的调色板，在各个组件内部，使用统一的配色，为您的产品带来统一又鲜明的视觉效果。
      </text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意</text>
        <text>
          uview-plus为了更好编写css，使用了scss预处理器，使用uview-plus之前，请确认您的Hbuilder
          X已经安装了scss预处理器，一般情况下，相信您已经安装了。如果没有安装，请在
          Hbuilder X-&gt;工具-&gt;插件安装中找到"scss/sass编译"安装即可，安装完毕如果不生效，请重启Hbuilder
          X。
        </text>
      </view>
      <text id="平台差异说明">
        <text href="color.html#平台差异说明" class="header-anchor">#</text>
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
      <text id="主题色">
        <text href="color.html#主题色" class="header-anchor">#</text> 主题色
      </text>
      <text>
        <code>primary</code>，<code>success</code>，<code>error</code>，<code>warning</code>，<code>info</code>是uview-plus的主题色，他们给人在视觉感受上分别对应于蓝色，绿色，红色，黄色，灰色。而他们又有对应的<code>disabled</code>、<code>dark</code>和<code>light</code>状态，分别表示对应的禁止，加深和变浅的对应颜色。举例uview-plus的<code>button</code>组件来说：
      </text>
      <view>
        <view>
          设置<code>type</code>参数为<code>primary</code>时，按钮显示蓝色。
        </view>
        <view>
          按钮被按下时，使用的是<code>primary</code>的加深颜色，也即<code>dark</code>状态。
        </view>
        <view>
          按钮设置为镂空状态(<code>plain</code>为<code>true</code>)时，背景色为<code>primary</code>的变浅颜色，也即<code>light</code>状态。
        </view>
        <view>
          按钮处于禁止状态时，使用的是<code>primary</code>的稍浅颜色，也即<code>disabled</code>状态。
        </view>
      </view>
      <text id="主色">
        <text href="color.html#主色" class="header-anchor">#</text> 主色
      </text>
      <text>蓝色作为uview-plus主色调，表示一种鲜明，积极的态度</text>
      <view class="color-box">
        <view class="color-item" style="background: #2979ff; color: #fff">
          Primary<br>
          #2979ff
          <view class="color-sub">
            <view class="sub-item" style="background: #2b85e4; color: #fff">
              Dark<br>
              #2b85e4
            </view>
            <view class="sub-item" style="background: #a0cfff; color: #606266">
              Disabled<br>
              #a0cfff
            </view>
            <view class="sub-item" style="background: #ecf5ff; color: #606266">
              Light<br>
              #ecf5ff
            </view>
          </view>
        </view>
      </view>
      <text>
        我们在全局样式中，通过<code>scss</code>提供了对应的颜色变量名，方便您在任何可写css的地方，调用这些变量，如下：
      </text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意</text>
        <text>注意，以下为3.x版本，4.x版本前缀为$up-。</text>
      </view>
      <pre><code>/* 变量的定义，该部分uview-plus已全局引入，无需您编写 */
$u-primary: #3c9cff;
$u-warning: #f9ae3d;
$u-success: #5ac725;
$u-error: #f56c6c;
$u-info: #909399;

/* 在您编写css的地方使用这些变量 */
view {
  color: $u-primary;
}</code></pre>
      <text id="辅助色">
        <text href="color.html#辅助色" class="header-anchor">#</text> 辅助色
      </text>
      <text>
        除了主色外的场景色，需要在不同的场景中使用，如绿色代表成功，红色代表错误，黄色代表警示。
      </text>
      <view class="color-box">
        <view class="color-item" style="background: #fa3534; color: #fff">
          Error<br>
          #fa3534
          <view class="color-sub">
            <view class="sub-item" style="background: #dd6161; color: #fff">
              Dark<br>
              #dd6161
            </view>
            <view class="sub-item" style="background: #fab6b6; color: #606266">
              Disabled<br>
              #fab6b6
            </view>
            <view class="sub-item" style="background: #fef0f0; color: #606266">
              Light<br>
              #fef0f0
            </view>
          </view>
        </view>
        <view class="color-item" style="background: #ff9900; color: #fff">
          Warning<br>
          #ff9900
          <view class="color-sub">
            <view class="sub-item" style="background: #fc9851; color: #fff">
              Dark<br>
              #fc9851
            </view>
            <view class="sub-item" style="background: #ffc069; color: #606266">
              Disabled<br>
              #ffc069
            </view>
            <view class="sub-item" style="background: #fff7e6; color: #606266">
              Light<br>
              #fff7e6
            </view>
          </view>
        </view>
        <view class="color-item" style="background: #18bc37; color: #fff">
          Success<br>
          #18bc37
          <view class="color-sub">
            <view class="sub-item" style="background: #3mb1d8; color: #fff">
              Dark<br>
              #3mb1d8
            </view>
            <view class="sub-item" style="background: #7ee2a8; color: #606266">
              Disabled<br>
              #7ee2a8
            </view>
            <view class="sub-item" style="background: #eafff2; color: #606266">
              Light<br>
              #eafff2
            </view>
          </view>
        </view>
        <view class="color-item" style="background: #909399; color: #fff">
          Info<br>
          #909399
          <view class="color-sub">
            <view class="sub-item" style="background: #636266; color: #fff">
              Dark<br>
              #636266
            </view>
            <view class="sub-item" style="background: #c4c4c4; color: #606266">
              Disabled<br>
              #c4c4c4
            </view>
            <view class="sub-item" style="background: #f4f4f5; color: #606266">
              Light<br>
              #f4f4f5
            </view>
          </view>
        </view>
      </view>
      <text id="文字颜色">
        <text href="color.html#文字颜色" class="header-anchor">#</text> 文字颜色
      </text>
      <text>
        uview-plus中，分别提炼了4种用于文字颜色，分别是：主要文字、常规文字、次要文字、占位文字颜色。
      </text>
      <view>
        <view>主要文字颜色一般用于内容的标题等，如新闻列表的标题</view>
        <view>常规文字颜色一般用于内容的主体，如新闻列表的概要</view>
        <view>次要文字颜色一般用于内容的提示部分，如新闻列表底部的时间，评论数量的提示文字</view>
        <view>占位文字颜色属于更浅的灰色，看场景选择使用</view>
      </view>
      <view class="color-box">
        <view class="color-item" style="background: #303133; color: #fff">
          主要文字<br>
          #303133
        </view>
        <view class="color-item" style="background: #606266; color: #fff">
          常规文字<br>
          #606266
        </view>
        <view class="color-item" style="background: #909399; color: #fff">
          次要文字<br>
          #909399
        </view>
        <view class="color-item" style="background: #c0c4cc; color: #fff">
          占位文字<br>
          #c0c4cc
        </view>
      </view>
      <text id="背景颜色">
        <text href="color.html#背景颜色" class="header-anchor">#</text> 背景颜色
      </text>
      <text>uview-plus中，定义了一个背景颜色，如下：</text>
      <view class="color-box">
        <view class="color-item" style="background: #f3f4f6; color: #909399">
          背景颜色<br>
          #f3f4f6
        </view>
      </view>
      <text id="边框颜色">
        <text href="color.html#边框颜色" class="header-anchor">#</text> 边框颜色
      </text>
      <text>
        uview-plus自定义了一个边框的颜色，值为<code>#e4e7ed</code>，如果想使用，如下：
      </text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意</text>
        <text>注意，以下为3.x版本，4.x版本前缀为$up-。</text>
      </view>
      <pre><code>/* 变量的定义，该部分uview-plus已全局引入，无需您编写 */
$u-border-color: #e4e7ed;

/* 在您编写css的地方使用这个变量 */
.item {
	border: 1px solid $u-border-color;
}</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.color-page {
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
text {
  color: #409eff;
  text-decoration: none;
}
.color-box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
}
.color-item {
  padding: 15px;
  border-radius: 6px;
  min-width: 150px;
  font-size: 14px;
}
.color-sub {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
}
.sub-item {
  padding: 8px;
  border-radius: 4px;
  font-size: 12px;
  min-width: 60px;
  text-align: center;
}
</style>
