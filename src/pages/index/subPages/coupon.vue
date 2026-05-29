<template>
  <view class="coupon-page">
    <view class="theme-default-content content__default">
      <text id="coupon-优惠券">
        <text href="coupon.html#coupon-优惠券" class="header-anchor">#</text>
        Coupon 优惠券
        <text class="badge tip">3.5.18</text>
      </text>
      <text>优惠券组件，用于展示各种类型的优惠券信息。</text>
      <text id="使用场景">
        <text href="coupon.html#使用场景" class="header-anchor">#</text>
        使用场景
      </text>
      <view>
        <view>在电商或营销场景中展示优惠券信息</view>
        <view>展示折扣、满减等促销活动</view>
        <view>用户领取或使用优惠券的界面展示</view>
      </view>
      <text id="平台差异说明">
        <text href="coupon.html#平台差异说明" class="header-anchor">#</text>
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
              x
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
        <text href="coupon.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>amount</code>设置优惠券金额</view>
        <view>通过<code>title</code>设置优惠券标题</view>
        <view>通过<code>limit</code>设置使用条件</view>
        <view>通过<code>time</code>设置有效期</view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;up-coupon
        :amount="100"
        title="满100减50"
        limit="满100元可用"
        time="2024.01.01-2024.12.31"
    /&gt;
&lt;/template&gt;</code></pre>
      <text id="尺寸">
        <text href="coupon.html#尺寸" class="header-anchor">#</text>
        尺寸
      </text>
      <text>通过[size]参数设置优惠券尺寸，可选值为[small]、<code>medium</code>(默认)、<code>large</code>。</text>
      <pre><code>&lt;up-coupon :amount="100" title="满100减50" size="small" /&gt;
&lt;up-coupon :amount="100" title="满100减50" size="medium" /&gt;
&lt;up-coupon :amount="100" title="满100减50" size="large" /&gt;</code></pre>
      <text id="自定义样式">
        <text href="coupon.html#自定义样式" class="header-anchor">#</text>
        自定义样式
      </text>
      <text>
        通过[type]参数设置优惠券主题类型，可选值为<code>primary</code>、<code>success</code>、<code>error</code>、<code>warning</code>、<code>info</code>。
      </text>
      <pre><code>&lt;up-coupon :amount="100" title="满100减50" type="primary" /&gt;
&lt;up-coupon :amount="100" title="满100减50" type="success" /&gt;
&lt;up-coupon :amount="100" title="满100减50" type="error" /&gt;
&lt;up-coupon :amount="100" title="满100减50" type="warning" /&gt;
&lt;up-coupon :amount="100" title="满100减50" type="info" /&gt;</code></pre>
      <text id="形状">
        <text href="coupon.html#形状" class="header-anchor">#</text>
        形状
      </text>
      <text>通过[shape]参数设置优惠券形状，可选值为<code>round</code>、<code>square</code>、<code>envelope</code>、<code>card</code>。</text>
      <pre><code>&lt;up-coupon :amount="100" title="满100减50" shape="round" /&gt;
&lt;up-coupon :amount="100" title="满100减50" shape="square" /&gt;
&lt;up-coupon :amount="100" title="满100减50" shape="envelope" /&gt;
&lt;up-coupon :amount="100" title="满100减50" shape="card" /&gt;</code></pre>
      <text id="禁用状态">
        <text href="coupon.html#禁用状态" class="header-anchor">#</text>
        禁用状态
      </text>
      <text>通过[disabled]参数设置优惠券是否禁用。</text>
      <pre><code>&lt;up-coupon :amount="100" title="满100减50" :disabled="true" /&gt;</code></pre>
      <text id="插槽使用">
        <text href="coupon.html#插槽使用" class="header-anchor">#</text>
        插槽使用
      </text>
      <text>通过插槽可以自定义优惠券的各个部分。</text>
      <pre><code>&lt;template&gt;
    &lt;up-coupon :amount="100" title="满100减50"&gt;
        &lt;template #amount&gt;
            &lt;text&gt;¥&lt;/text&gt;
            &lt;text class="amount"&gt;100&lt;/text&gt;
        &lt;/template&gt;
    &lt;/up-coupon&gt;
&lt;/template&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="coupon.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/coupon/coupon.nvue"
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
        <text href="coupon.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="coupon.html#props" class="header-anchor">#</text>
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
              amount
            </td>
            <td style="text-align: left">
              优惠券金额
            </td>
            <td style="text-align: left">
              String | Number
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
              unit
            </td>
            <td style="text-align: left">
              金额单位
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
              title
            </td>
            <td style="text-align: left">
              优惠券标题
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
              desc
            </td>
            <td style="text-align: left">
              优惠券描述
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
              limit
            </td>
            <td style="text-align: left">
              使用条件
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
              time
            </td>
            <td style="text-align: left">
              有效期
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
              size
            </td>
            <td style="text-align: left">
              优惠券尺寸
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              medium
            </td>
            <td style="text-align: left">
              small | medium | large
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              type
            </td>
            <td style="text-align: left">
              主题类型
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              primary
            </td>
            <td style="text-align: left">
              primary | success | error | warning | info
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              shape
            </td>
            <td style="text-align: left">
              优惠券形状
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              round
            </td>
            <td style="text-align: left">
              round | square | envelope | card
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              color
            </td>
            <td style="text-align: left">
              字体颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #333
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              circle
            </td>
            <td style="text-align: left">
              按钮是否圆形
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
              disabled
            </td>
            <td style="text-align: left">
              是否禁用
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
              actionText
            </td>
            <td style="text-align: left">
              操作按钮文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              立即使用
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="slots">
        <text href="coupon.html#slots" class="header-anchor">#</text>
        Slots
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              SlotProps
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              amount
            </td>
            <td style="text-align: left">
              自定义金额区域
            </td>
            <td style="text-align: left">
              { amount }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              unit
            </td>
            <td style="text-align: left">
              自定义单位区域
            </td>
            <td style="text-align: left">
              { unit }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              title
            </td>
            <td style="text-align: left">
              自定义标题区域
            </td>
            <td style="text-align: left">
              { title }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              desc
            </td>
            <td style="text-align: left">
              自定义描述区域
            </td>
            <td style="text-align: left">
              { desc }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              limit
            </td>
            <td style="text-align: left">
              自定义条件区域
            </td>
            <td style="text-align: left">
              { limit }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              time
            </td>
            <td style="text-align: left">
              自定义时间区域
            </td>
            <td style="text-align: left">
              { time }
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              action
            </td>
            <td style="text-align: left">
              自定义操作区域
            </td>
            <td style="text-align: left">
              { circle }
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
.coupon-page {
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
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 10px;
  vertical-align: middle;
  background: #67c23a;
  color: #fff;
}
</style>
