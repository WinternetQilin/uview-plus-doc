import{s as u,a as h,w as e,b as r,f as p,g as l,i as g,u as t,j as _,k as n,t as s,h as m}from"./index-Bt5U6C3y.js";const x={};function y(c,b){const o=_,i=m,a=g,f=r("layout-default-uni"),d=r("global-ku-root");return p(),h(d,null,{default:e(()=>[l(f,null,{default:e(()=>[l(a,{class:"colorPicker-page"},{default:e(()=>[l(a,{class:"theme-default-content content__default"},{default:e(()=>[l(o,{id:"colorpicker-颜色选择器"},{default:e(()=>[l(o,{href:"colorPicker.html#colorpicker-颜色选择器",class:"header-anchor"},{default:e(()=>[n(" # ")]),_:1}),n(" ColorPicker 颜色选择器 "),l(o,{class:"badge tip"},{default:e(()=>[n("3.5.15")]),_:1})]),_:1}),l(o,null,{default:e(()=>[n("颜色选择器组件，支持纯色和渐变色选择，可自定义常用颜色。")]),_:1}),l(o,{id:"平台差异说明"},{default:e(()=>[l(o,{href:"colorPicker.html#平台差异说明",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," x "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(o,{id:"基本使用"},{default:e(()=>[l(o,{href:"colorPicker.html#基本使用",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),l(o,null,{default:e(()=>[n("通过"),t("code",null,"v-model"),n("绑定颜色值，支持纯色和渐变色。")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view class="text-4 bg-white">
        <up-color-picker
            v-model="color"
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">`+s(c.color)+`</text>
            </view>
        </up-color-picker>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const color = ref('#ff0000');
const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
<\/script>`,1)]),l(o,{id:"带常用颜色的使用"},{default:e(()=>[l(o,{href:"colorPicker.html#带常用颜色的使用",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 带常用颜色的使用 ")]),_:1}),l(o,null,{default:e(()=>[n("通过"),t("code",null,"commonColors"),n("属性设置常用颜色列表。")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view class="text-4 bg-white">
        <up-color-picker
            v-model="color"
            :commonColors="commonColors"
            @confirm="confirm"
        >
            <view class="color-preview">
                <view class="color-block" :style="{ backgroundColor: color }"></view>
                <text class="color-text">`+s(c.color)+`</text>
            </view>
        </up-color-picker>
    </view>
</template>

<script setup>
import { ref } from 'vue';
const color = ref('#ff0000');
const commonColors = ref([
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
    '#ffffff',
    '#000000'
]);
const confirm = (selectedColor) => {
    console.log('选择的颜色：', selectedColor);
};
<\/script>`,1)]),l(o,{id:"示例演示页面源代码地址"},{default:e(()=>[l(o,{href:"colorPicker.html#示例演示页面源代码地址",class:"header-anchor"},{default:e(()=>[n(" # ")]),_:1}),n(" 示例演示页面源代码地址 ")]),_:1}),l(a,{class:"custom-block tip"},{default:e(()=>[l(o,{class:"custom-block-title"},{default:e(()=>[n("点击以下链接以查看演示页面的源码")]),_:1}),t("br"),l(o,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/colorPicker/colorPicker.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:e(()=>[l(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),n(" github ")]),_:1}),t("br")]),_:1}),l(o,{id:"api"},{default:e(()=>[l(o,{href:"colorPicker.html#api",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" API ")]),_:1}),l(o,{id:"props"},{default:e(()=>[l(o,{href:"colorPicker.html#props",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," v-model "),t("td",{style:{"text-align":"left"}}," 绑定的颜色值，支持纯色和渐变色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}},[t("code",null,"#ff0000")]),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," commonColors "),t("td",{style:{"text-align":"left"}}," 常用颜色列表 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}},[t("code",null,"[]")]),t("td",{style:{"text-align":"left"}}," - ")])])]),l(o,{id:"events"},{default:e(()=>[l(o,{href:"colorPicker.html#events",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Events ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," confirm "),t("td",{style:{"text-align":"left"}}," 确认选择颜色时触发 "),t("td",{style:{"text-align":"left"}},[t("code",null,"color"),n(" (String) ")])]),t("tr",null,[t("td",{style:{"text-align":"left"}}," close "),t("td",{style:{"text-align":"left"}}," 关闭选择器时触发 "),t("td",{style:{"text-align":"left"}}," - ")])])]),l(o,{id:"slot"},{default:e(()=>[l(o,{href:"colorPicker.html#slot",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Slot ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," default "),t("td",{style:{"text-align":"left"}}," 触发颜色选择器的内容区域 ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}const k=u(x,[["render",y],["__scopeId","data-v-1b16ee55"]]);export{k as default};
