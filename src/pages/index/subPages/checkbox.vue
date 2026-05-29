<template>
  <view class="checkbox-page">
    <view class="theme-default-content content__default">
      <text id="checkbox-复选框">
        <text href="checkbox.html#checkbox-复选框" class="header-anchor">#</text> Checkbox 复选框
        <text href="checkbox.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>

      <text>复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便</text>
      <text id="平台差异说明">
        <text href="checkbox.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="checkbox.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        &gt;
            &lt;up-checkbox
                :customStyle="{marginBottom: '10px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            &gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);

const checkboxList1 = reactive([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
]);

const checkboxChange = (n) => {
  console.log('change', n);
}
&lt;/script&gt;</code></pre>
      <text id="独立使用up-checkbox">
        <text href="checkbox.html#独立使用up-checkbox" class="header-anchor">#</text>
        独立使用up-checkbox
      </text>
      <view>
        <view>
          通过<code>usedAlone</code>可以设置独立使用，如果不使用<code>usedAlone</code>，需配合<code>up-checkbox-group</code>组件使用
        </view>
        <view>
          独立使用<code>up-checkbox</code>时，必须通过<code>v-model</code>绑定一个布尔值的变量，否则无法操作
        </view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox
            v-model="checked"
            label="我已同意"
            iconPlacement="right"
            @change="change"
        &gt;
        &lt;/up-checkbox&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const checked = ref(false);

const change = (e) => {
    console.log('change', e);
}
&lt;/script&gt;</code></pre>
      <text id="自定义形状">
        <text href="checkbox.html#自定义形状" class="header-anchor">#</text> 自定义形状
      </text>
      <view>
        <view>通过<code>shape</code>可以设置选择形状</view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group v-model="checkboxValue1"&gt;
            &lt;up-checkbox
                shape="circle"
                label="圆形"
                name="1"
            &gt;
            &lt;/up-checkbox&gt;
            &lt;up-checkbox
                shape="square"
                label="方形"
                name="2"
            &gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
&lt;/script&gt;</code></pre>
      <text id="禁用checkbox">
        <text href="checkbox.html#禁用checkbox" class="header-anchor">#</text> 禁用checkbox
      </text>
      <text>设置<code>disabled</code>为<code>true</code>，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后禁用(选中状态)，会显示一个灰色的勾选图标。</text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group v-model="checkboxValue1"&gt;
            &lt;up-checkbox
                :disabled="true"
                label="禁用"
                name="1"
            &gt;
            &lt;/up-checkbox&gt;
            &lt;up-checkbox
                label="未禁用"
                name="2"
            &gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);
&lt;/script&gt;</code></pre>
      <text id="自定义颜色">
        <text href="checkbox.html#自定义颜色" class="header-anchor">#</text> 自定义颜色
      </text>
      <text>此处所指的颜色，为<code>checkbox</code>选中时的背景颜色，参数为<code>activeColor</code></text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group v-model="checked" activeColor="#ff0000"&gt;
            &lt;up-checkbox label="红色" name="1"&gt;
            &lt;/up-checkbox&gt;
            &lt;up-checkbox label="绿色" name="2"&gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue';

const checked = reactive(['1']);
&lt;/script&gt;</code></pre>
      <text id="横向排列形式">
        <text href="checkbox.html#横向排列形式" class="header-anchor">#</text> 横向排列形式
      </text>
      <text>可以通过设置<code>placement</code>为<code>row</code>或者<code>column</code>，将复选框设置为横向排列或者竖向排列</text>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group v-model="checkboxValue1" placement="row"&gt;
            &lt;up-checkbox label="横向排列" name="1"&gt;
            &lt;/up-checkbox&gt;
            &lt;up-checkbox label="横向排列" name="2"&gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
&lt;/script&gt;</code></pre>
      <text id="自定义样式">
        <text href="checkbox.html#自定义样式" class="header-anchor">#</text> 自定义样式
      </text>
      <text>
        组件支持多种自定义样式，您可以通过传递对应的属性来自定义复选框和标签的样式，如下所示：
      </text>
      <view>
        <view>通过<code>shape</code>设置复选框的形状</view>
        <view>通过<code>size</code>设置整体的大小</view>
        <view>通过<code>activeColor</code>设置选中状态下的颜色</view>
        <view>通过<code>inactiveColor</code>设置未选中的颜色</view>
        <view>通过<code>label</code>来设置label提示文字</view>
      </view>
      <pre><code>&lt;template&gt;
    &lt;view&gt;
        &lt;up-checkbox-group v-model="checkboxValue1"&gt;
            &lt;up-checkbox
                shape="circle"
                activeColor="#ff0000"
                label="自定义颜色"
                name="1"
            &gt;
            &lt;/up-checkbox&gt;
            &lt;up-checkbox
                size="24"
                label="自定义大小"
                name="2"
            &gt;
            &lt;/up-checkbox&gt;
        &lt;/up-checkbox-group&gt;
    &lt;/view&gt;
&lt;/template&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="checkbox.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.vue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.nvue"
          target="_blank"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="gitee"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">
        <text href="checkbox.html#api" class="header-anchor">#</text> API
      </text>
      <text id="checkbox-props">
        <text href="checkbox.html#checkbox-props" class="header-anchor">#</text> Checkbox Props
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
              name
            </td>
            <td style="text-align: left">
              checkbox的名称
            </td>
            <td style="text-align: left">
              String | Number | Boolean
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
              shape
            </td>
            <td style="text-align: left">
              形状，square为方形，circle为圆型
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              square
            </td>
            <td style="text-align: left">
              circle
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              size
            </td>
            <td style="text-align: left">
              整体的大小
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
              checked
            </td>
            <td style="text-align: left">
              是否默认选中
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
              String | Boolean
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
              activeColor
            </td>
            <td style="text-align: left">
              选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
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
              inactiveColor
            </td>
            <td style="text-align: left">
              未选中的颜色
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
              iconSize
            </td>
            <td style="text-align: left">
              图标的大小，单位px
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
              iconColor
            </td>
            <td style="text-align: left">
              图标颜色
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
              label
            </td>
            <td style="text-align: left">
              label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
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
              labelSize
            </td>
            <td style="text-align: left">
              label的字体大小，px单位
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
              labelColor
            </td>
            <td style="text-align: left">
              label的颜色
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
              labelDisabled
            </td>
            <td style="text-align: left">
              是否禁止点击提示语选中复选框
            </td>
            <td style="text-align: left">
              String | Boolean
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
              usedAlone
            </td>
            <td style="text-align: left">
              是否独立使用复选框
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
        </tbody>
      </table>
      <text id="checkboxgroup-props">
        <text href="checkbox.html#checkboxgroup-props" class="header-anchor">#</text>
        CheckboxGroup Props
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
              name
            </td>
            <td style="text-align: left">
              标识符
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
              modelValue
            </td>
            <td style="text-align: left">
              绑定的值
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              shape
            </td>
            <td style="text-align: left">
              形状，circle-圆形，square-方形
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              square
            </td>
            <td style="text-align: left">
              circle
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              disabled
            </td>
            <td style="text-align: left">
              是否禁用全部checkbox
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
              activeColor
            </td>
            <td style="text-align: left">
              选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #2979ff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              inactiveColor
            </td>
            <td style="text-align: left">
              未选中的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #c8c9cc
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
              整个组件的尺寸，默认px
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              18
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              placement
            </td>
            <td style="text-align: left">
              布局方式，row-横向，column-纵向
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              row
            </td>
            <td style="text-align: left">
              column
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelSize
            </td>
            <td style="text-align: left">
              label的字体大小，px单位
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
          <tr>
            <td style="text-align: left">
              labelColor
            </td>
            <td style="text-align: left">
              label的字体颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #303133
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelDisabled
            </td>
            <td style="text-align: left">
              是否禁止点击文本操作
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
              iconColor
            </td>
            <td style="text-align: left">
              图标颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #ffffff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconSize
            </td>
            <td style="text-align: left">
              图标的大小，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              12
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconPlacement
            </td>
            <td style="text-align: left">
              勾选图标的对齐方式，left-左边，right-右边
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              borderBottom
            </td>
            <td style="text-align: left">
              竖向配列时，是否显示下划线
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
        </tbody>
      </table>
      <text id="checkbox-slot">
        <text href="checkbox.html#checkbox-slot" class="header-anchor">#</text> Checkbox Slot
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              icon <text class="badge tip">3.2.25</text>
            </td>
            <td style="text-align: left">
              自定义icon内容
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label <text class="badge tip">3.2.25</text>
            </td>
            <td style="text-align: left">
              自定义label内容
            </td>
          </tr>
        </tbody>
      </table>
      <text id="checkboxgroup-event">
        <text href="checkbox.html#checkboxgroup-event" class="header-anchor">#</text>
        CheckboxGroup Event
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
              任一个checkbox状态发生变化时触发，回调为一个对象
            </td>
            <td style="text-align: left">
              detail = array( [元素为被选中的checkbox的name], object { name:
              当前点击的checkbox的name, isChecked: 当前点击的checkbox是否选中 } )
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
.checkbox-page {
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
.badge.tip {
  background: #67c23a;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: top;
  margin-left: 5px;
}
</style>
