import{d as f,a as r,w as l,b as u,f as m,g as e,i as _,u as t,j as h,k as n,h as g,s as x}from"./index-CRHsRVm2.js";import{_ as o}from"./CodeBlock.BlRjy5Lx.js";const p=f({__name:"countDown",setup(y){return(w,D)=>{const a=h,s=_,i=g,c=u("layout-default-uni"),d=u("global-ku-root");return m(),r(d,null,{default:l(()=>[e(c,null,{default:l(()=>[e(s,{class:"countDown-page"},{default:l(()=>[e(s,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"countdown-倒计时"},{default:l(()=>[e(a,{href:"countDown.html#countdown-倒计时",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" CountDown 倒计时 ")]),_:1}),e(a,null,{default:l(()=>[n(" 该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。 ")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[e(a,{href:"countDown.html#平台差异说明",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:l(()=>[e(a,{href:"countDown.html#基本使用",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("通过"),t("code",null,"time"),n("参数设置倒计时间，单位为"),t("code",null,"ms")]),_:1})]),_:1}),e(o,{code:`
<template>
    <up-count-down :time="30 * 60 * 60 * 1000" format="HH:mm:ss"></up-count-down>
</template>`,language:"html",title:"基本使用"}),e(a,{id:"自定义格式"},{default:l(()=>[e(a,{href:"countDown.html#自定义格式",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 自定义格式 ")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("说明：通过绑定"),t("code",null,"change"),n("回调的值，进行自定义格式")]),_:1})]),_:1}),e(o,{code:`<template>
    <up-count-down
        :time='30 * 60 * 60 * 1000'
        format='DD:HH:mm:ss'
        autoStart
        millisecond
        @change='onChange'
    >
        <view class='time'>
            <text class='time__item'>{{ timeData.days }} 天</text>
            <text class='time__item'>{{ timeData.hours>10?timeData.hours:'0'+timeData.hours }} 时</text>
            <text class='time__item'>{{ timeData.minutes }} 分</text>
            <text class='time__item'>{{ timeData.seconds }} 秒</text>
        </view>
    </up-count-down>
</template>

<script setup>
import { ref } from 'vue';

const timeData = ref({});

const onChange = (e) => {
    timeData.value = e;
};
<\/script>`,language:"html",title:"自定义格式"}),e(a,{id:"毫秒级渲染"},{default:l(()=>[e(a,{href:"countDown.html#毫秒级渲染",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 毫秒级渲染 ")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("通过配置"),t("code",null,"millisecond"),n("来开启毫秒级倒计时")]),_:1})]),_:1}),e(o,{code:"<up-count-down :time='30 * 60 * 60 * 1000' format='HH:mm:ss:SSS' autoStart millisecond></up-count-down>",language:"html",title:"毫秒级渲染"}),e(a,{id:"自定义样式"},{default:l(()=>[e(a,{href:"countDown.html#自定义样式",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 自定义样式 ")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("说明：通过绑定"),t("code",null,"change"),n("回调的值，进行自定义格式")]),_:1})]),_:1}),e(o,{code:`<template>
    <up-count-down
            :time='30 * 60 * 60 * 1000'
            format='HH:mm:ss'
            autoStart
            millisecond
            @change='onChange'
    >
        <view class='time'>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.hours>10?timeData.hours:'0'+timeData.hours }}</text>
            </view>
            <text class='time__doc'>:</text>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.minutes }}</text>
            </view>
            <text class='time__doc'>:</text>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.seconds }}</text>
            </view>
        </view>
    </up-count-down>
</template>

<script setup>
import { ref } from 'vue';

const timeData = ref({});

const onChange = (e) => {
    timeData.value = e;
};
<\/script>`,language:"html",title:"自定义样式"}),e(a,{id:"手动控制"},{default:l(()=>[e(a,{href:"countDown.html#手动控制",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" 手动控制 ")]),_:1}),e(s,null,{default:l(()=>[e(s,null,{default:l(()=>[n("说明：通过绑定"),t("code",null,"ref"),n("进行手动控制重置、开始、暂停")]),_:1})]),_:1}),e(o,{code:`<template>
    <up-count-down
        ref='countDownRef'
        :time='3000'
        format='ss:SSS'
        :autoStart='false'
        millisecond
        @finish='finish'
    />
    <button class='btn' @click='start'>开始</button>
    <button class='btn' @click='pause'>暂停</button>
    <button class='btn' @click='reset'>重置</button>
</template>

<script setup>
import { ref } from 'vue';

const countDownRef = ref(null);

const start = () => {
    countDownRef.value.start();
};

const pause = () => {
    countDownRef.value.pause();
};

const reset = () => {
    countDownRef.value.reset();
};

const finish = () => {
    console.log('结束');
};
<\/script>`,language:"html",title:"手动控制"}),e(a,{id:"右侧演示页面源代码地址"},{default:l(()=>[e(a,{href:"countDown.html#右侧演示页面源代码地址",class:"header-anchor"},{default:l(()=>[n(" # ")]),_:1}),n(" 右侧演示页面源代码地址 ")]),_:1}),e(s,{class:"custom-block tip"},{default:l(()=>[e(a,{class:"custom-block-title"},{default:l(()=>[n("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/countDown/countDown.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[e(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),n(" github ")]),_:1}),t("br")]),_:1}),e(a,{id:"api"},{default:l(()=>[e(a,{href:"countDown.html#api",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" API ")]),_:1}),e(a,{id:"props"},{default:l(()=>[e(a,{href:"countDown.html#props",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," time "),t("td",{style:{"text-align":"left"}}," 倒计时时长，单位ms "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 0 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," format "),t("td",{style:{"text-align":"left"}}," 时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," HH:mm:ss "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," autoStart "),t("td",{style:{"text-align":"left"}}," 是否自动开始倒计时 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," millisecond "),t("td",{style:{"text-align":"left"}}," 是否展示毫秒倒计时 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")])])]),e(a,{id:"events"},{default:l(()=>[e(a,{href:"countDown.html#events",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Events ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," change "),t("td",{style:{"text-align":"left"}}," 过程中，倒计时变化时触发 "),t("td",{style:{"text-align":"left"}}," time: 剩余的时间 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," finish "),t("td",{style:{"text-align":"left"}}," 倒计时结束 "),t("td",{style:{"text-align":"left"}}," - ")])])]),e(a,{id:"methods"},{default:l(()=>[e(a,{href:"countDown.html#methods",class:"header-anchor"},{default:l(()=>[n("#")]),_:1}),n(" Methods ")]),_:1}),e(a,null,{default:l(()=>[n("需要通过ref获取倒计时组件才能调用")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," start "),t("td",{style:{"text-align":"left"}}," 开始倒计时 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," pause "),t("td",{style:{"text-align":"left"}}," 暂停倒计时 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," reset "),t("td",{style:{"text-align":"left"}}," 重置倒计时 ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),S=x(p,[["__scopeId","data-v-28fee6f5"]]);export{S as default};
