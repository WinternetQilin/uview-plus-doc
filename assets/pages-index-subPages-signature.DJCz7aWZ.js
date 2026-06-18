import{d as c,a as p,w as o,b as s,f,g as e,i as g,u as t,j as d,k as r,s as m}from"./index-Bt5U6C3y.js";import{_ as l}from"./CodeBlock.C3t72IAG.js";const _=`<template>
  <view>
    <up-signature
      ref="signature"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`,h=`<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      color="#ff0000"
      thickness="6"
      bg-color="#f5f5f0"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`,w=`<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      bg-color="#ffffff"
      :show-toolbar="false"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`,v=`<template>
  <view class="signature-container">
    <up-signature
      ref="signature"
      :width="700"
      :height="500"
      color="#000000"
      :stroke-width="5"
      bg-color="#FFFFFF"
      :show-toolbar="true"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
    
    <view class="btn-group">
      <up-button @click="handleClear">清除签名</up-button>
      <up-button type="primary" @click="handleConfirm">确认签名</up-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const handleClear = () => {
  signature.value.clear();
};

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
  uni.showToast({
    title: '签名成功',
    icon: 'success'
  });
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>

<style lang="scss" scoped>
.signature-container {
  padding: 20rpx;
}

.btn-group {
  display: flex;
  justify-content: space-around;
  margin-top: 30rpx;
}
</style>`,b=c({__name:"signature",setup(x){return(y,C)=>{const n=d,a=g,i=s("layout-default-uni"),u=s("global-ku-root");return f(),p(u,null,{default:o(()=>[e(i,null,{default:o(()=>[e(a,{class:"signature-page"},{default:o(()=>[e(a,{class:"theme-default-content content__default"},{default:o(()=>[e(n,{id:"signature-签名"},{default:o(()=>[r(" Signature 签名 "),e(n,{class:"badge tip"},{default:o(()=>[r("3.1.86")]),_:1})]),_:1}),e(n,null,{default:o(()=>[r("Signature 签名组件，支持自定义颜色、粗细、背景色，可用于用户签名场景。")]),_:1}),e(n,{id:"平台差异说明"},{default:o(()=>[r("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(n,{id:"基础用法"},{default:o(()=>[r("基础用法")]),_:1}),e(l,{title:"基础用法",language:"html",code:_}),e(n,{id:"自定义样式"},{default:o(()=>[r("自定义样式")]),_:1}),e(l,{title:"自定义样式",language:"html",code:h}),e(n,{id:"隐藏工具栏"},{default:o(()=>[r("隐藏工具栏")]),_:1}),e(l,{title:"隐藏工具栏",language:"html",code:w}),e(n,{id:"完整示例"},{default:o(()=>[r("完整示例")]),_:1}),e(l,{title:"完整示例",language:"html",code:v})]),_:1})]),_:1})]),_:1})]),_:1})}}}),E=m(b,[["__scopeId","data-v-99c7329b"]]);export{E as default};
