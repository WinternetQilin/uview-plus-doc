<template>
  <view class="dropdown-page">
    <view class="theme-default-content content__default">
      <text id="dropdown-下拉菜单">
        <text href="dropdown.html#dropdown-下拉菜单" class="header-anchor">#</text>
        Dropdown 下拉菜单
        <text class="badge tip">3.2.2</text>
      </text>
      <text>该组件一般用于向下展开菜单，同时可切换多个选项卡的场景。</text>
      <text id="平台差异说明">
        <text href="dropdown.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              微信小程序
            </th>
            <th style="text-align: center">
              支付宝小程序
            </th>
            <th style="text-align: center">
              百度小程序
            </th>
            <th style="text-align: center">
              头条小程序
            </th>
            <th style="text-align: center">
              QQ小程序
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
        <text href="dropdown.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>使用前说明：</text>
      <view>
        <view>该组件必须结合<code>up-dorpdown</code>和<code>up-dropdown-item</code>一起使用，展开的内容由<code>up-dropdown-item</code>通过传递参数或者<code>slot</code>提供</view>
        <view>组件的菜单栏标题由<code>up-dropdown-item</code>通过<code>title</code>参数提供</view>
        <view><code>up-dropdown-item</code>带有默认的单选展示功能，通过<code>options</code>(见下方说明)配置，传入<code>slot</code>则会覆盖默认功能，通过<code>v-model</code>双向绑定<code>options</code>选中项的<code>value</code>值</view>
      </view>
      <pre><code>&lt;template&gt;
  &lt;view class=""&gt;
    &lt;up-dropdown&gt;
      &lt;up-dropdown-item v-model="value1" title="距离" :options="options1"&gt;&lt;/up-dropdown-item&gt;
      &lt;up-dropdown-item v-model="value2" title="温度" :options="options2"&gt;&lt;/up-dropdown-item&gt;
    &lt;/up-dropdown&gt;
  &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const value1 = ref(1);
const value2 = ref(2);

const options1 = ref([
  {
    label: '默认排序',
    value: 1,
  },
  {
    label: '距离优先',
    value: 2,
  },
  {
    label: '价格优先',
    value: 3,
  }
]);

const options2 = ref([
  {
    label: '去冰',
    value: 1,
  },
  {
    label: '加冰',
    value: 2,
  },
]);
&lt;/script&gt;</code></pre>
      <text id="配置选项卡默认功能">
        <text href="dropdown.html#配置选项卡默认功能" class="header-anchor">#</text>
        配置选项卡默认功能
      </text>
      <text>如上所示，<code>up-dropdown-item</code>具有默认的单选功能，这里主要讲解其<code>options</code>和<code>v-model</code>参数：</text>
      <text><code>options</code>参数为一个数组，元素为对象，其中<code>label</code>为需要展示的提示文字，<code>value</code>为点击时双向绑定给<code>v-model</code>的值，<code>v-model</code>初始化时如果设置某个<code>options</code>中的<code>value</code>，则该条目将会被默认选中</text>
      <text id="配置选项卡自定义功能">
        <text href="dropdown.html#配置选项卡自定义功能" class="header-anchor">#</text>
        配置选项卡自定义功能
      </text>
      <text>在选项卡默认的单选功能无法满足的时候，我们可以给<code>up-dropw-item</code>传递<code>slot</code>来自定义需要展示的内容。</text>
      <text>问：如果自定义内容，如何实现点击其中的按钮关闭下拉菜单？</text>
      <text>答：在<code>up-dropdown</code>中，有一个<code>close()</code>方法，可以通过<code>ref</code>获取实例，并调用方法进行关闭即可。</text>
      <text id="配置选项卡内容可滚动">
        <text href="dropdown.html#配置选项卡内容可滚动" class="header-anchor">#</text>
        配置选项卡内容可滚动
      </text>
      <text>如果我们想给自定义内容的选项中局部内容可滚动，可以通过嵌入<code>scroll-view</code>元素实现，需要注意的是<code>scroll-view</code>必须声明高度才有效</text>
      <text id="如何保持菜单高亮">
        <text href="dropdown.html#如何保持菜单高亮" class="header-anchor">#</text>
        如何保持菜单高亮
      </text>
      <text>有时候，我们可能会希望下拉菜单收起之后，标题部分可以保持高亮，组件内部可以做到这样的要求，但是如果通过自定义<code>slot</code>传入了内容，那么组件就不知道</text>
      <text id="api">
        <text href="dropdown.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="dropdown-props">
        <text href="dropdown.html#dropdown-props" class="header-anchor">#</text>
        Dropdown Props
      </text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>active-color</td>
            <td>标题和选项卡选中的颜色</td>
            <td>String</td>
            <td>#2979ff</td>
            <td>-</td>
          </tr>
          <tr>
            <td>inactive-color</td>
            <td>标题和选项卡未选中的颜色</td>
            <td>String</td>
            <td>#606266</td>
            <td>-</td>
          </tr>
          <tr>
            <td>close-on-click-mask</td>
            <td>点击遮罩是否关闭菜单</td>
            <td>Boolean</td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>close-on-click-self</td>
            <td>点击当前激活项标题是否关闭菜单</td>
            <td>Boolean</td>
            <td>true</td>
            <td>false</td>
          </tr>
          <tr>
            <td>duration</td>
            <td>选项卡展开和收起的过渡时间，单位ms</td>
            <td>String | Number</td>
            <td>300</td>
            <td>-</td>
          </tr>
          <tr>
            <td>height</td>
            <td>标题菜单的高度，单位任意，数值默认为rpx单位</td>
            <td>String | Number</td>
            <td>80</td>
            <td>-</td>
          </tr>
          <tr>
            <td>border-bottom</td>
            <td>标题菜单是否显示下边框</td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>title-size</td>
            <td>标题的字体大小，单位任意，数值默认为rpx单位</td>
            <td>String | Number</td>
            <td>28</td>
            <td>-</td>
          </tr>
          <tr>
            <td>border-radius <text class="badge tip">1.7.2</text></td>
            <td>菜单展开内容下方的圆角值，单位任意</td>
            <td>String | Number</td>
            <td>0</td>
            <td>-</td>
          </tr>
          <tr>
            <td>menu-icon <text class="badge tip">1.7.6</text></td>
            <td>标题菜单右侧的图标</td>
            <td>String</td>
            <td>arrow-down</td>
            <td>arrow-down-fill</td>
          </tr>
          <tr>
            <td>menu-icon-size <text class="badge tip">1.7.6</text></td>
            <td>标题菜单右侧的图标的大小，单位任意，数值默认为rpx单位</td>
            <td>String | Number</td>
            <td>26</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="dropdown-events">
        <text href="dropdown.html#dropdown-events" class="header-anchor">#</text>
        Dropdown Events <text class="badge tip">1.6.5</text>
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
              open
            </td>
            <td style="text-align: left">
              下拉菜单被打开时触发
            </td>
            <td style="text-align: left">
              (index) - 当前被打开菜单的索引
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              下拉菜单被关闭时触发
            </td>
            <td style="text-align: left">
              (index) - 当前被关闭菜单的索引
            </td>
          </tr>
        </tbody>
      </table>
      <text id="dropdown-item-props">
        <text href="dropdown.html#dropdown-item-props" class="header-anchor">#</text>
        Dropdown-item Props
      </text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>v-model</td>
            <td>双向绑定选项卡选择值</td>
            <td>String | Number</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>title</td>
            <td>菜单项标题</td>
            <td>String</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>options</td>
            <td>选项数据，如果传入了默认slot，此参数无效</td>
            <td>Array[Object]</td>
            <td>-</td>
            <td>-</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>是否禁用此选项卡</td>
            <td>Boolean</td>
            <td>false</td>
            <td>true</td>
          </tr>
          <tr>
            <td>height <text class="badge tip">1.7.0</text></td>
            <td>弹窗下拉内容的高度(内容超出将会滚动)，slot自定义内容时无效</td>
            <td>String | Number</td>
            <td>auto</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="dropdown-item-slot">
        <text href="dropdown.html#dropdown-item-slot" class="header-anchor">#</text>
        Dropdown-item Slot
      </text>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-</td>
            <td>自定义选项卡内容</td>
          </tr>
        </tbody>
      </table>
      <text id="dropdown-item-events">
        <text href="dropdown.html#dropdown-item-events" class="header-anchor">#</text>
        Dropdown-item Events
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
              change
            </td>
            <td style="text-align: left">
              每个up-dropdown均有此回调，点击某个options选项时触发
            </td>
            <td style="text-align: left">
              (value) - 点击项绑定的value属性值
            </td>
          </tr>
        </tbody>
      </table>
      <text id="dropdown-item-methods">
        <text href="dropdown.html#dropdown-item-methods" class="header-anchor">#</text>
        Dropdown-item Methods <text class="badge tip">3.2.2</text>
      </text>
      <text>这些为组件内部的方法，需要通过ref调用</text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>highlight(index)</td>
            <td>index为需要设置高亮的菜单项的索引(从0开始)，不写表示清空内部的高亮</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.dropdown-page {
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
  border-radius: 3px;
  margin-left: 10px;
  vertical-align: middle;
}
.badge.tip {
  background: #67c23a;
  color: #fff;
}
</style>
