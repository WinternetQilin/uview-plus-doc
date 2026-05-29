<template>
  <view class="picker-page">
    <view class="theme-default-content content__default">
      <text id="picker-选择器">Picker 选择器</text>
      <view class="demo-placeholder">
        <text>此处应展示 Picker 选择器 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsC/picker/picker"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsC/picker/picker
          </text>
        </text>
      </view>
      <text>
        此选择器用于单列，多列，多列联动的选择场景。3.4.38以上版本现已经支持v-model双向绑定值。
      </text>
      <text id="平台差异说明">平台差异说明</text>
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
      <text id="基本使用">基本使用</text>
      <view>
        <view>
          通过<code>show</code>绑定一个布尔值变量，用于控制组件的弹出与收起。
        </view>
        <view>都通过传入数组<code>columns</code>配置选择项。</view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="单选快捷组件使用">单选快捷组件使用</text>
      <text>
        为了在up-form表单等场景下更方便的使用，减少代码量，可以使用up-picker-data快捷组件(目前适用于单选，类似下拉框的功能)，快捷组件由数据驱动，更贴近Vue组件的使用方式。
      </text>
      <text><text class="badge tip">3.4.6</text>以上版本</text>
      <CodeBlock
        title="单选快捷组件"
        language="html"
        :code="singleSelectCode"
      />
      <text id="多列模式与多列联动">多列模式与多列联动</text>
      <text>
        此模式通过传入<code>columns</code>参数，此参数为二维数组，通过<code>change</code>事件完成联动操作。
      </text>
      <CodeBlock
        title="多列模式与多列联动"
        language="html"
        :code="multiColumnCode"
      />
      <text id="加载状态">加载状态</text>
      <text>
        由于需要多列联动，此模式和上面的"多列模式"基本相同，在加载之前将<code>loading</code>设置为<code>true</code>，数据获取完成之后再置为<code>false</code>即可。
      </text>
      <CodeBlock title="加载状态" language="html" :code="loadingCode" />
      <text id="自定义选项值">自定义选项值</text>
      <text>
        参数<code>columns</code>可以传入自定义选项值，可以通过<code>keyName</code>和<code>valueName</code>参数控制对应的显示属性及双向绑定值属性。
      </text>
      <CodeBlock title="自定义选项值" language="html" :code="customValueCode" />
      <text id="默认值">默认值</text>
      <text>
        此组件的所有模式，都可以设置默认值，通过<code>defaultIndex</code>数组参数配置，数组元素的0表示选中每列的哪个值(从0开始)，下面分别对几种模式进行说明：
      </text>
      <text>
        <strong>注意：</strong>
        <code>defaultIndex</code>数组的长度，必须与列数相同，否则无效。
      </text>
      <view>
        <view>单列模式</view>
      </view>
      <text>
        如设置<code>defaultIndex</code>为<code>[1]</code>表示默认选中第2个(从0开始)，<code>[5]</code>表示选中第6个。
      </text>
      <view start="2">
        <view>多列模式</view>
      </view>
      <text>
        如设置<code>defaultIndex</code>为<code>[1, 3]</code>表示第一列默认选中第2个，第二列默认选中第4个。
      </text>
      <br>
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/picker/picker.nvue"
          target="_blank"
          class="github-link"
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
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/picker/picker.nvue"
          target="_blank"
          class="github-link"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
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
              hasInput
            </td>
            <td style="text-align: left">
              是否自带input输入框
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
              inputProps <text class="badge tip">3.4.38</text>
            </td>
            <td style="text-align: left">
              输入框props，便于传递更多up-input的props
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              {}
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              v-model <text class="badge tip">3.4.38</text>
            </td>
            <td style="text-align: left">
              双向绑定值（注意非index索引而是valueName字段或者元素本身的text）
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left" />
          </tr>
          <tr>
            <td style="text-align: left">
              v-model:show
            </td>
            <td style="text-align: left">
              用于控制选择器的弹出与收起
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
              showToolbar
            </td>
            <td style="text-align: left">
              是否显示顶部的操作栏
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
              title
            </td>
            <td style="text-align: left">
              顶部中间的标题
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
              columns
            </td>
            <td style="text-align: left">
              设置每一列的数据，见上方说明
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
              loading
            </td>
            <td style="text-align: left">
              加载状态
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
              itemHeight
            </td>
            <td style="text-align: left">
              各列中，单个选项的高度
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              44
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
              取消按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              取消
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirmText
            </td>
            <td style="text-align: left">
              确认按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              确认
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancelColor
            </td>
            <td style="text-align: left">
              取消按钮的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #909193
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirmColor
            </td>
            <td style="text-align: left">
              确认按钮的颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #3c9cff
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              visibleItemCount
            </td>
            <td style="text-align: left">
              每列中可见选项的数量
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              5
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
              自定义需要展示的<code>text</code>属性键名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              text
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              valueName <text class="badge tip">2.0.22</text>
            </td>
            <td style="text-align: left">
              自定义需要双向绑定的值的键名
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              value
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
              是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调）
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
              defaultIndex
            </td>
            <td style="text-align: left">
              各列的默认索引(建议不要与v-model同时使用)
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
              immediateChange <text class="badge tip">2.0.22</text>
            </td>
            <td style="text-align: left">
              是否在手指松开时立即触发<code>change</code>事件。若不开启则会在滚动动画结束后触发<code>change</code>事件，只在微信<code>2.21.1</code>及以上有效
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
              pageInline <text class="badge tip">3.5.5</text>
            </td>
            <td style="text-align: left">
              页面内插入模式
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
      <text id="methods">Methods</text>
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
              setIndexs
            </td>
            <td style="text-align: left">
              (index, setLastIndex) 设置对应列的选择值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              setColumnValues
            </td>
            <td style="text-align: left">
              多列联动时需要用到，见上方说明，注意<code>微信小程序</code>的特殊用法
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">Events</text>
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
              close
            </td>
            <td style="text-align: left">
              关闭选择器时触发
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
              confirm
            </td>
            <td style="text-align: left">
              点击确定按钮，返回当前选择的值
            </td>
            <td style="text-align: left">
              Array: 见上方"回调参数"部分说明
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              change
            </td>
            <td style="text-align: left">
              当选择值变化时触发
            </td>
            <td style="text-align: left">
              Array: 见上方"回调参数"部分说明
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancel
            </td>
            <td style="text-align: left">
              点击取消按钮
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
      <text id="slots">Slots</text>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>toolbar-right</td>
            <td>
              工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。
            </td>
          </tr>
          <tr>
            <td>toolbar-bottom</td>
            <td>输入框下方自定义区域</td>
          </tr>
          <tr>
            <td>trigger <text class="badge tip">3.4.25</text></td>
            <td>hasInput模式时自定义触发和显示区域scope={value: ''}</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
  <view>
    <up-picker 
      :show="show" 
      :columns="columns"
      @confirm="confirm"
      @close="close"
      @change="change"
    ></up-picker>
    <up-button @click="show = true">打开</up-button>
  </view>
<\/template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  ['中国', '美国', '日本']
]);
<\/script>`

const singleSelectCode = `<template>
  <view>
    <up-picker-data
      v-model="info.cate"
      title="请选择文章分类"
      :options="cateList"
      valueKey="id"
      labelKey="name"
    ></up-picker-data>
  </view>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const cateList = ref([
  { id: 1, name: '分类1' },
  { id: 2, name: '分类2' }
]);
<\/script>`

const multiColumnCode = `<template>
  <view>
    <up-picker 
      :show="show" 
      ref="uPickerRef"
      :columns="columns" 
      @confirm="confirm"
      @change="changeHandler"
    ></up-picker>
  </view>
<\/template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const show = ref(true);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);
const columnData = reactive([
  ['深圳', '厦门', '上海', '拉萨'],
  ['得州', '华盛顿', '纽约', '阿拉斯加']
]);

const uPickerRef = ref(null);
const changeHandler = (e) => {
  const { columnIndex, value, values, index } = e;
  if (columnIndex === 0) {
    columns[1] = columnData[index];
  }
};
<\/script>`

const loadingCode = `<template>
  <view>
    <up-picker 
      :show="show" 
      :loading="loading"
      :columns="columns" 
    ></up-picker>
  </view>
<\/template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const loading = ref(true);
const show = ref(true);
const columns = reactive([
  ['中国', '美国'],
  ['深圳', '厦门', '上海', '拉萨']
]);

setTimeout(() => {
  loading.value = false;
}, 1000);
<\/script>`

const customValueCode = `<template>
  <view>
    <up-picker 
      :show="show" 
      :columns="columns" 
      keyName="name"
    ></up-picker>
  </view>
<\/template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  [
    { name: '中国', code: 'zh' },
    { name: '美国', code: 'us' },
    { name: '日本', code: 'jp' }
  ]
]);
<\/script>`
</script>

<style lang="scss" scoped>
.picker-page {
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
.badge.tip {
  background-color: #3eaf7c;
  color: white;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  vertical-align: middle;
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
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.demo-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px dashed #ccc;
}
.demo-placeholder text {
  color: #666;
  font-size: 14px;
}
.placeholder-tip {
  margin-top: 10px;
}
.placeholder-tip text {
  color: #3eaf7c;
  text-decoration: none;
}
.placeholder-tip text:hover {
  text-decoration: underline;
}
.custom-block {
  background-color: #f6f8fa;
  border-radius: 6px;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.tip {
  border-left: 4px solid #3eaf7c;
}
.custom-block-title {
  font-weight: 600;
  margin-bottom: 5px;
}
.github-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  text-decoration: none;
  margin-top: 10px;
}
.github-link:hover {
  color: #3eaf7c;
}
</style>
