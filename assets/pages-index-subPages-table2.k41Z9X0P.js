import{d,a as u,w as t,b as o,f as _,g as l,i,u as e,j as p,k as n,s as g}from"./index-CRHsRVm2.js";import{_ as m}from"./CodeBlock.BlRjy5Lx.js";const f=`<template>
  <up-table2 :data="tableData" :columns="tableColumns" stripe border></up-table2>
</template>

<script setup>
import { ref } from 'vue';

const tableData = ref([
  { name: '张三', age: 20, address: '北京' },
  { name: '李四', age: 22, address: '上海' },
  { name: '王五', age: 24, address: '广州' },
]);

const tableColumns = ref([
  { type: 'index' },
  { prop: 'name', label: '姓名' },
  { prop: 'age', label: '年龄' },
  { prop: 'address', label: '地址' },
]);
<\/script>`,x=d({__name:"table2",setup(b){return(y,h)=>{const a=p,s=i,c=o("layout-default-uni"),r=o("global-ku-root");return _(),u(r,null,{default:t(()=>[l(c,null,{default:t(()=>[l(s,{class:"table2-page"},{default:t(()=>[l(s,{class:"theme-default-content content__default"},{default:t(()=>[l(a,{id:"table-表格2"},{default:t(()=>[n(" Table 表格2 "),l(a,{class:"badge tip"},{default:t(()=>[n("3.4.28")]),_:1})]),_:1}),l(a,null,{default:t(()=>[n("表格2组件主要为了实现一个兼容element-plus表格API风格的多用途表格，方便开发者使用【部分功能暂未完全实现】。")]),_:1}),l(a,null,{default:t(()=>[n("注意传递Function类型的参数在小程序环境下由于不支持，必须通过setXXX方法手动设置，比如cellStyle对应setCellStyle。")]),_:1}),l(a,{id:"平台差异说明"},{default:t(()=>[n("平台差异说明")]),_:1}),e("table",{class:"platform-table"},[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App(vue) "),e("th",{style:{"text-align":"center"}}," APP(nvue) "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 微信小程序 "),e("th",{style:{"text-align":"center"}}," 支付宝小程序 "),e("th",{style:{"text-align":"center"}}," 百度小程序 "),e("th",{style:{"text-align":"center"}}," 头条小程序 "),e("th",{style:{"text-align":"center"}}," QQ小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," x "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"使用示例"},{default:t(()=>[n("使用示例")]),_:1}),l(m,{title:"使用示例",language:"html",code:f})]),_:1})]),_:1})]),_:1})]),_:1})}}}),k=g(x,[["__scopeId","data-v-e971b077"]]);export{k as default};
