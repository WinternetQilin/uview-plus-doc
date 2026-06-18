import{d as i,a as p,w as o,b as n,f as _,g as l,i as r,u as t,j as m,k as e,s as f}from"./index-Bt5U6C3y.js";import{_ as d}from"./CodeBlock.C3t72IAG.js";const v=`<template>
  <up-slider v-model="value"></up-slider>
</template>

<script setup>
import { ref } from 'vue';

const value = ref(30);
<\/script>`,g='<up-slider v-model="value" min="30" max="80"></up-slider>',x='<up-slider v-model="value" step="20" min="30" max="100"></up-slider>',h=`<up-popup v-model:show="popupShow">
  <view class="popup-content">
    <up-slider v-if="popupShow" v-model="value"></up-slider>
  </view>
</up-popup>

<script setup>
import { ref } from 'vue';

const popupShow = ref(false);
const value = ref(50);
<\/script>`,b='<up-slider v-model="value" disabled></up-slider>',k=i({__name:"slider",setup(y){return(w,C)=>{const u=m,a=r,s=n("layout-default-uni"),c=n("global-ku-root");return _(),p(c,null,{default:o(()=>[l(s,null,{default:o(()=>[l(a,{class:"slider-page"},{default:o(()=>[l(a,{class:"theme-default-content content__default"},{default:o(()=>[l(u,{id:"slider-滑动选择器"},{default:o(()=>[e(" Slider 滑动选择器 ")]),_:1}),l(u,null,{default:o(()=>[e("该组件一般用于表单中，手动选择一个区间范围的场景。")]),_:1}),l(a,{class:"custom-block tip"},{default:o(()=>[l(u,{class:"custom-block-title"},{default:o(()=>[e("说明")]),_:1}),l(u,null,{default:o(()=>[e(" 该组件在"),t("code",null,"H5"),e("，"),t("code",null,"微信小程序"),e("和"),t("code",null,"APP-VUE"),e("等平台上使用了"),t("code",null,"WXS"),e("技术，在"),t("code",null,"NVUE"),e("平台使用了"),t("code",null,"BindingX"),e("技术， 故在滑动过程中可以获得细腻流畅的跟随效果。 ")]),_:1})]),_:1}),l(u,{id:"平台差异说明"},{default:o(()=>[e("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(u,{id:"基本使用"},{default:o(()=>[e("基本使用")]),_:1}),l(u,null,{default:o(()=>[e("需要通过"),t("code",null,"v-model"),e("绑定一个值，来初始化滑块的选择值(0到100之间)，这个值是双向绑定的，您可以通过这个值，实时地得知内部的滑动结果。")]),_:1}),l(d,{title:"基本使用",language:"html",code:v}),l(u,{id:"设置最大和最小值"},{default:o(()=>[e("设置最大和最小值")]),_:1}),l(u,null,{default:o(()=>[e("通过"),t("code",null,"min"),e("和"),t("code",null,"max"),e("，可以设置滑块所能选择的最大和最小值")]),_:1}),l(d,{title:"设置最大和最小值",language:"html",code:g}),l(u,{id:"设置步进值"},{default:o(()=>[e("设置步进值")]),_:1}),l(u,null,{default:o(()=>[e("通过"),t("code",null,"step"),e("参数设置步进值，这个步进值为每次跳变的值，具体表现请见示例。")]),_:1}),l(a,{class:"custom-block tip"},{default:o(()=>[l(u,{class:"custom-block-title"},{default:o(()=>[e("提示")]),_:1}),l(u,null,{default:o(()=>[e("需要注意的是，这个"),t("code",null,"step"),e("必须要被"),t("code",null,"max"),e("值整除，否则会出现无法无法滑动到最大值的情况")]),_:1})]),_:1}),l(d,{title:"设置步进值",language:"html",code:x}),l(u,{id:"在弹窗等初始化不显示的容器中使用"},{default:o(()=>[e("在弹窗等初始化不显示的容器中使用")]),_:1}),l(a,{class:"custom-block tip"},{default:o(()=>[l(u,{class:"custom-block-title"},{default:o(()=>[e("提示")]),_:1}),l(u,null,{default:o(()=>[e("需要注意的是，在此场景中使用要注意给slider同时一个v-if让它随着弹窗的显示再渲染，这样才能计算出滑块的正确尺寸。")]),_:1})]),_:1}),l(d,{title:"弹窗中使用",language:"html",code:h}),l(u,{id:"禁用状态"},{default:o(()=>[e("禁用状态")]),_:1}),l(d,{title:"禁用状态",language:"html",code:b})]),_:1})]),_:1})]),_:1})]),_:1})}}}),B=f(k,[["__scopeId","data-v-02be505c"]]);export{B as default};
