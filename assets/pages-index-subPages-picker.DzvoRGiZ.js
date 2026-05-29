import{d as c,a as g,w as n,b as u,f as r,g as l,i as x,u as t,j as y,k as e,h as p,s as m}from"./index-CRHsRVm2.js";import{_ as i}from"./CodeBlock.BlRjy5Lx.js";const _=`<template>
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
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const show = ref(false);
const columns = reactive([
  ['中国', '美国', '日本']
]);
<\/script>`,h=`<template>
  <view>
    <up-picker-data
      v-model="info.cate"
      title="请选择文章分类"
      :options="cateList"
      valueKey="id"
      labelKey="name"
    ></up-picker-data>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cateList = ref([
  { id: 1, name: '分类1' },
  { id: 2, name: '分类2' }
]);
<\/script>`,b=`<template>
  <view>
    <up-picker 
      :show="show" 
      ref="uPickerRef"
      :columns="columns" 
      @confirm="confirm"
      @change="changeHandler"
    ></up-picker>
  </view>
</template>

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
<\/script>`,v=`<template>
  <view>
    <up-picker 
      :show="show" 
      :loading="loading"
      :columns="columns" 
    ></up-picker>
  </view>
</template>

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
<\/script>`,k=`<template>
  <view>
    <up-picker 
      :show="show" 
      :columns="columns" 
      keyName="name"
    ></up-picker>
  </view>
</template>

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
<\/script>`,w=c({__name:"picker",setup(C){return(I,S)=>{const a=y,s=x,d=p,o=u("layout-default-uni"),f=u("global-ku-root");return r(),g(f,null,{default:n(()=>[l(o,null,{default:n(()=>[l(s,{class:"picker-page"},{default:n(()=>[l(s,{class:"theme-default-content content__default"},{default:n(()=>[l(a,{id:"picker-选择器"},{default:n(()=>[e("Picker 选择器")]),_:1}),l(s,{class:"demo-placeholder"},{default:n(()=>[l(a,null,{default:n(()=>[e("此处应展示 Picker 选择器 组件的交互式演示")]),_:1}),l(a,{class:"placeholder-tip"},{default:n(()=>[e(" 演示地址："),l(a,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsC/picker/picker",target:"_blank"},{default:n(()=>[e(" https://ijry.github.io/uview-plus/text/#/pages/componentsC/picker/picker ")]),_:1})]),_:1})]),_:1}),l(a,null,{default:n(()=>[e(" 此选择器用于单列，多列，多列联动的选择场景。3.4.38以上版本现已经支持v-model双向绑定值。 ")]),_:1}),l(a,{id:"平台差异说明"},{default:n(()=>[e("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"基本使用"},{default:n(()=>[e("基本使用")]),_:1}),l(s,null,{default:n(()=>[l(s,null,{default:n(()=>[e(" 通过"),t("code",null,"show"),e("绑定一个布尔值变量，用于控制组件的弹出与收起。 ")]),_:1}),l(s,null,{default:n(()=>[e("都通过传入数组"),t("code",null,"columns"),e("配置选择项。")]),_:1})]),_:1}),l(i,{title:"基本使用",language:"html",code:_}),l(a,{id:"单选快捷组件使用"},{default:n(()=>[e("单选快捷组件使用")]),_:1}),l(a,null,{default:n(()=>[e(" 为了在up-form表单等场景下更方便的使用，减少代码量，可以使用up-picker-data快捷组件(目前适用于单选，类似下拉框的功能)，快捷组件由数据驱动，更贴近Vue组件的使用方式。 ")]),_:1}),l(a,null,{default:n(()=>[l(a,{class:"badge tip"},{default:n(()=>[e("3.4.6")]),_:1}),e("以上版本")]),_:1}),l(i,{title:"单选快捷组件",language:"html",code:h}),l(a,{id:"多列模式与多列联动"},{default:n(()=>[e("多列模式与多列联动")]),_:1}),l(a,null,{default:n(()=>[e(" 此模式通过传入"),t("code",null,"columns"),e("参数，此参数为二维数组，通过"),t("code",null,"change"),e("事件完成联动操作。 ")]),_:1}),l(i,{title:"多列模式与多列联动",language:"html",code:b}),l(a,{id:"加载状态"},{default:n(()=>[e("加载状态")]),_:1}),l(a,null,{default:n(()=>[e(' 由于需要多列联动，此模式和上面的"多列模式"基本相同，在加载之前将'),t("code",null,"loading"),e("设置为"),t("code",null,"true"),e("，数据获取完成之后再置为"),t("code",null,"false"),e("即可。 ")]),_:1}),l(i,{title:"加载状态",language:"html",code:v}),l(a,{id:"自定义选项值"},{default:n(()=>[e("自定义选项值")]),_:1}),l(a,null,{default:n(()=>[e(" 参数"),t("code",null,"columns"),e("可以传入自定义选项值，可以通过"),t("code",null,"keyName"),e("和"),t("code",null,"valueName"),e("参数控制对应的显示属性及双向绑定值属性。 ")]),_:1}),l(i,{title:"自定义选项值",language:"html",code:k}),l(a,{id:"默认值"},{default:n(()=>[e("默认值")]),_:1}),l(a,null,{default:n(()=>[e(" 此组件的所有模式，都可以设置默认值，通过"),t("code",null,"defaultIndex"),e("数组参数配置，数组元素的0表示选中每列的哪个值(从0开始)，下面分别对几种模式进行说明： ")]),_:1}),l(a,null,{default:n(()=>[t("strong",null,"注意："),t("code",null,"defaultIndex"),e("数组的长度，必须与列数相同，否则无效。 ")]),_:1}),l(s,null,{default:n(()=>[l(s,null,{default:n(()=>[e("单列模式")]),_:1})]),_:1}),l(a,null,{default:n(()=>[e(" 如设置"),t("code",null,"defaultIndex"),e("为"),t("code",null,"[1]"),e("表示默认选中第2个(从0开始)，"),t("code",null,"[5]"),e("表示选中第6个。 ")]),_:1}),l(s,{start:"2"},{default:n(()=>[l(s,null,{default:n(()=>[e("多列模式")]),_:1})]),_:1}),l(a,null,{default:n(()=>[e(" 如设置"),t("code",null,"defaultIndex"),e("为"),t("code",null,"[1, 3]"),e("表示第一列默认选中第2个，第二列默认选中第4个。 ")]),_:1}),t("br"),l(a,{id:"右侧演示页面源代码地址"},{default:n(()=>[e("右侧演示页面源代码地址")]),_:1}),l(s,{class:"custom-block tip"},{default:n(()=>[l(a,{class:"custom-block-title"},{default:n(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),l(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/picker/picker.nvue",target:"_blank",class:"github-link"},{default:n(()=>[l(d,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),e(" github ")]),_:1}),t("br"),l(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/picker/picker.nvue",target:"_blank",class:"github-link"},{default:n(()=>[l(d,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),e(" gitee ")]),_:1}),t("br")]),_:1}),l(a,{id:"api"},{default:n(()=>[e("API")]),_:1}),l(a,{id:"props"},{default:n(()=>[e("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," hasInput "),t("td",{style:{"text-align":"left"}}," 是否自带input输入框 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" inputProps "),l(a,{class:"badge tip"},{default:n(()=>[e("3.4.38")]),_:1})]),t("td",{style:{"text-align":"left"}}," 输入框props，便于传递更多up-input的props "),t("td",{style:{"text-align":"left"}}," Object "),t("td",{style:{"text-align":"left"}}," {} "),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" v-model "),l(a,{class:"badge tip"},{default:n(()=>[e("3.4.38")]),_:1})]),t("td",{style:{"text-align":"left"}}," 双向绑定值（注意非index索引而是valueName字段或者元素本身的text） "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}}," v-model:show "),t("td",{style:{"text-align":"left"}}," 用于控制选择器的弹出与收起 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," showToolbar "),t("td",{style:{"text-align":"left"}}," 是否显示顶部的操作栏 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," title "),t("td",{style:{"text-align":"left"}}," 顶部中间的标题 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," columns "),t("td",{style:{"text-align":"left"}}," 设置每一列的数据，见上方说明 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," loading "),t("td",{style:{"text-align":"left"}}," 加载状态 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," itemHeight "),t("td",{style:{"text-align":"left"}}," 各列中，单个选项的高度 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 44 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," cancelText "),t("td",{style:{"text-align":"left"}}," 取消按钮的文字 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," 取消 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," confirmText "),t("td",{style:{"text-align":"left"}}," 确认按钮的文字 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," 确认 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," cancelColor "),t("td",{style:{"text-align":"left"}}," 取消按钮的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #909193 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," confirmColor "),t("td",{style:{"text-align":"left"}}," 确认按钮的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #3c9cff "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," visibleItemCount "),t("td",{style:{"text-align":"left"}}," 每列中可见选项的数量 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 5 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," keyName "),t("td",{style:{"text-align":"left"}},[e(" 自定义需要展示的"),t("code",null,"text"),e("属性键名 ")]),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," text "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" valueName "),l(a,{class:"badge tip"},{default:n(()=>[e("2.0.22")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自定义需要双向绑定的值的键名 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," value "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," closeOnClickOverlay "),t("td",{style:{"text-align":"left"}}," 是否允许点击遮罩关闭选择器（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," defaultIndex "),t("td",{style:{"text-align":"left"}}," 各列的默认索引(建议不要与v-model同时使用) "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" immediateChange "),l(a,{class:"badge tip"},{default:n(()=>[e("2.0.22")]),_:1})]),t("td",{style:{"text-align":"left"}},[e(" 是否在手指松开时立即触发"),t("code",null,"change"),e("事件。若不开启则会在滚动动画结束后触发"),t("code",null,"change"),e("事件，只在微信"),t("code",null,"2.21.1"),e("及以上有效 ")]),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" pageInline "),l(a,{class:"badge tip"},{default:n(()=>[e("3.5.5")]),_:1})]),t("td",{style:{"text-align":"left"}}," 页面内插入模式 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")])])]),l(a,{id:"methods"},{default:n(()=>[e("Methods")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," setIndexs "),t("td",{style:{"text-align":"left"}}," (index, setLastIndex) 设置对应列的选择值 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," setColumnValues "),t("td",{style:{"text-align":"left"}},[e(" 多列联动时需要用到，见上方说明，注意"),t("code",null,"微信小程序"),e("的特殊用法 ")])])])]),l(a,{id:"events"},{default:n(()=>[e("Events")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 "),t("th",{style:{"text-align":"left"}}," 版本 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," close "),t("td",{style:{"text-align":"left"}}," 关闭选择器时触发 "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," confirm "),t("td",{style:{"text-align":"left"}}," 点击确定按钮，返回当前选择的值 "),t("td",{style:{"text-align":"left"}},' Array: 见上方"回调参数"部分说明 '),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," change "),t("td",{style:{"text-align":"left"}}," 当选择值变化时触发 "),t("td",{style:{"text-align":"left"}},' Array: 见上方"回调参数"部分说明 '),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," cancel "),t("td",{style:{"text-align":"left"}}," 点击取消按钮 "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")])])]),l(a,{id:"slots"},{default:n(()=>[e("Slots")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"toolbar-right"),t("td",null,' 工具栏右侧内容，自定义右侧内容，因为微信小程序限制，需要同时设置:toolbarRightSlot="true"生效。 ')]),t("tr",null,[t("td",null,"toolbar-bottom"),t("td",null,"输入框下方自定义区域")]),t("tr",null,[t("td",null,[e("trigger "),l(a,{class:"badge tip"},{default:n(()=>[e("3.4.25")]),_:1})]),t("td",null,"hasInput模式时自定义触发和显示区域scope={value: ''}")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),A=m(w,[["__scopeId","data-v-abae4936"]]);export{A as default};
