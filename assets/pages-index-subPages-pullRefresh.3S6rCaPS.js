import{d,a as c,w as l,b as o,f as g,g as t,i as p,u as e,j as h,k as s,h as m,s as x}from"./index-CRHsRVm2.js";import{_ as i}from"./CodeBlock.BlRjy5Lx.js";const y=`<template>
    <up-pull-refresh
        :refreshing="refreshing"
        :threshold="80"
        @refresh="onRefresh"
    >
        <template #pull="{ distance, threshold }">
            <view class="custom-pull">
                <text>下拉距离: {{ distance }}</text>
            </view>
        </template>
        <template #release>
            <view class="custom-release">
                <text>释放刷新</text>
            </view>
        </template>
        <template #refreshing>
            <view class="custom-refreshing">
                <text>刷新中...</text>
            </view>
        </template>
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>`,_=`<template>
    <up-pull-refresh
        :refreshing="refreshing"
        @refresh="onRefresh"
    >
        <up-virtual-list :list="list" :item-size="50">
            <template #default="{ item }">
                <view class="list-item">{{ item }}</view>
            </template>
        </up-virtual-list>
    </up-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref(Array.from({ length: 1000 }, (_, i) => i + 1));

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>`,v=`<template>
    <up-pull-refresh
        :refreshing="refreshing"
        :show-loadmore="true"
        :loadmore-props="loadmoreConfig"
        @refresh="onRefresh"
        @loadmore="onLoadmore"
    >
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);
const loadmoreConfig = ref({
    status: 'loadmore',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了'
});

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}

function onLoadmore() {
    setTimeout(() => {
        list.value = [...list.value, ...[6, 7, 8]];
    }, 1000);
}
<\/script>`,b=`<template>
    <up-pull-refresh
        :refreshing="refreshing"
        @refresh="onRefresh"
    >
        <template #pull="{ distance, threshold }">
            <view class="custom-indicator">
                <text>下拉中 {{ Math.round(distance / threshold * 100) }}%</text>
            </view>
        </template>
        <template #release>
            <view class="custom-indicator release">
                <text>释放立即刷新</text>
            </view>
        </template>
        <template #refreshing>
            <view class="custom-indicator refreshing">
                <up-loading-icon></up-loading-icon>
                <text>刷新中...</text>
            </view>
        </template>
        <view class="content">
            <view v-for="item in list" :key="item" class="item">
                {{ item }}
            </view>
        </view>
    </up-pull-refresh>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const refreshing = ref(false);
const list = ref([1, 2, 3, 4, 5]);

function onRefresh() {
    refreshing.value = true;
    setTimeout(() => {
        refreshing.value = false;
    }, 2000);
}
<\/script>

<style lang="scss" scoped>
.custom-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
.custom-indicator.release {
    color: #3eaf7c;
}
.custom-indicator.refreshing {
    display: flex;
    gap: 8px;
}
</style>`,w=d({__name:"pullRefresh",setup(R){return(k,C)=>{const a=h,n=p,r=m,u=o("layout-default-uni"),f=o("global-ku-root");return g(),c(f,null,{default:l(()=>[t(u,null,{default:l(()=>[t(n,{class:"pullRefresh-page"},{default:l(()=>[t(n,{class:"theme-default-content content__default"},{default:l(()=>[t(a,{id:"pullrefresh-下拉刷新"},{default:l(()=>[s(" PullRefresh 下拉刷新 "),t(a,{class:"badge tip"},{default:l(()=>[s("3.4.68")]),_:1})]),_:1}),t(n,{class:"demo-placeholder"},{default:l(()=>[t(a,null,{default:l(()=>[s("此处应展示 PullRefresh 下拉刷新 组件的交互式演示")]),_:1}),t(a,{class:"placeholder-tip"},{default:l(()=>[s(" 演示地址："),t(a,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsD/pullRefresh/pullRefresh",target:"_blank"},{default:l(()=>[s(" https://ijry.github.io/uview-plus/text/#/pages/componentsD/pullRefresh/pullRefresh ")]),_:1})]),_:1})]),_:1}),t(a,null,{default:l(()=>[s(" pull-refresh下拉刷新组件，支持自定义下拉刷新状态、结合虚拟列表和上拉加载等功能，适用于各种需要下拉刷新的场景。 ")]),_:1}),t(a,{id:"平台差异说明"},{default:l(()=>[s("平台差异说明")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App（vue） "),e("th",{style:{"text-align":"center"}}," App（nvue） "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," x "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),t(a,{id:"基本参数"},{default:l(()=>[s("基本参数")]),_:1}),t(n,null,{default:l(()=>[t(n,null,{default:l(()=>[s("通过 "),e("code",null,"refreshing"),s(" 控制刷新状态")]),_:1}),t(n,null,{default:l(()=>[s("通过 "),e("code",null,"threshold"),s(" 设置触发刷新的阈值")]),_:1}),t(n,null,{default:l(()=>[s("通过监听 "),e("code",null,"refresh"),s(" 事件处理刷新逻辑")]),_:1})]),_:1}),t(a,{id:"用法示例"},{default:l(()=>[s("用法示例")]),_:1}),t(a,{id:"_1-自定义下拉动画"},{default:l(()=>[s("1. 自定义下拉动画")]),_:1}),t(a,null,{default:l(()=>[s("通过插槽可以自定义下拉过程中的不同状态：下拉状态、释放状态和刷新中状态")]),_:1}),t(i,{title:"自定义下拉动画",language:"html",code:y}),t(a,{id:"_2-结合虚拟列表"},{default:l(()=>[s("2. 结合虚拟列表")]),_:1}),t(a,null,{default:l(()=>[s("与虚拟列表组件up-virtual-list结合使用，优化长列表性能")]),_:1}),t(i,{title:"结合虚拟列表",language:"html",code:_}),t(a,{id:"_3-结合上拉加载"},{default:l(()=>[s("3. 结合上拉加载")]),_:1}),t(a,null,{default:l(()=>[s("通过 "),e("code",null,"showLoadmore"),s(" 和 "),e("code",null,"loadmoreProps"),s(" 属性开启上拉加载功能")]),_:1}),t(i,{title:"结合上拉加载",language:"html",code:v}),t(a,{id:"自定义内容"},{default:l(()=>[s("自定义内容")]),_:1}),t(a,null,{default:l(()=>[s("通过三个插槽可以完全自定义下拉刷新的各个状态：")]),_:1}),t(i,{title:"自定义内容",language:"html",code:b}),t(a,{id:"演示页面源代码地址"},{default:l(()=>[s("演示页面源代码地址")]),_:1}),t(n,{class:"custom-block tip"},{default:l(()=>[t(a,{class:"custom-block-title"},{default:l(()=>[s("点击以下链接以查看演示页面的源码")]),_:1}),e("br"),t(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/pullRefresh/pullRefresh.vue",target:"_blank",class:"github-link"},{default:l(()=>[t(r,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),s(" github ")]),_:1}),e("br"),t(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/pullRefresh/pullRefresh.vue",target:"_blank",class:"github-link"},{default:l(()=>[t(r,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"gitee",width:"30"}),s(" gitee ")]),_:1}),e("br")]),_:1}),t(a,{id:"api"},{default:l(()=>[s("API")]),_:1}),t(a,{id:"props"},{default:l(()=>[s("Props")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}}," 参数 "),e("th",{style:{"text-align":"left"}}," 说明 "),e("th",{style:{"text-align":"left"}}," 类型 "),e("th",{style:{"text-align":"left"}}," 默认值 "),e("th",{style:{"text-align":"left"}}," 可选值 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}}," refreshing "),e("td",{style:{"text-align":"left"}}," 是否正在刷新 "),e("td",{style:{"text-align":"left"}}," Boolean "),e("td",{style:{"text-align":"left"}}," false "),e("td",{style:{"text-align":"left"}}," true/false ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," threshold "),e("td",{style:{"text-align":"left"}}," 下拉刷新阈值 "),e("td",{style:{"text-align":"left"}}," Number "),e("td",{style:{"text-align":"left"}}," 80 "),e("td",{style:{"text-align":"left"}})]),e("tr",null,[e("td",{style:{"text-align":"left"}}," damping "),e("td",{style:{"text-align":"left"}}," 阻尼系数 "),e("td",{style:{"text-align":"left"}}," Number "),e("td",{style:{"text-align":"left"}}," 0.4 "),e("td",{style:{"text-align":"left"}})]),e("tr",null,[e("td",{style:{"text-align":"left"}}," maxDistance "),e("td",{style:{"text-align":"left"}}," 最大下拉距离 "),e("td",{style:{"text-align":"left"}}," Number "),e("td",{style:{"text-align":"left"}}," 120 "),e("td",{style:{"text-align":"left"}})]),e("tr",null,[e("td",{style:{"text-align":"left"}}," showLoadmore "),e("td",{style:{"text-align":"left"}}," 是否显示加载更多 "),e("td",{style:{"text-align":"left"}}," Boolean "),e("td",{style:{"text-align":"left"}}," false "),e("td",{style:{"text-align":"left"}}," true/false ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," loadmoreProps "),e("td",{style:{"text-align":"left"}}," u-loadmore 组件的 props 配置 "),e("td",{style:{"text-align":"left"}}," Object "),e("td",{style:{"text-align":"left"}}," { status: 'loadmore', loadmoreText: '加载更多', loadingText: '正在加载...', nomoreText: '没有更多了' } "),e("td",{style:{"text-align":"left"}})])])]),t(a,{id:"events"},{default:l(()=>[s("Events")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}}," 事件名 "),e("th",{style:{"text-align":"left"}}," 说明 "),e("th",{style:{"text-align":"left"}}," 回调参数 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}}," refresh "),e("td",{style:{"text-align":"left"}}," 下拉刷新时触发 "),e("td",{style:{"text-align":"left"}}," - ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," loadmore "),e("td",{style:{"text-align":"left"}}," 上拉加载时触发 "),e("td",{style:{"text-align":"left"}}," - ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," scroll "),e("td",{style:{"text-align":"left"}}," 滚动时触发 "),e("td",{style:{"text-align":"left"}}," 滚动事件对象 ")])])]),t(a,{id:"slot"},{default:l(()=>[s("Slot")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}}," 名称 "),e("th",{style:{"text-align":"left"}}," 说明 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}}," pull "),e("td",{style:{"text-align":"left"}}," 下拉状态插槽，参数为 { distance, threshold } ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," release "),e("td",{style:{"text-align":"left"}}," 释放状态插槽，参数为 { distance, threshold } ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," refreshing "),e("td",{style:{"text-align":"left"}}," 刷新中状态插槽 ")]),e("tr",null,[e("td",{style:{"text-align":"left"}}," default "),e("td",{style:{"text-align":"left"}}," 内容区域插槽 ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),N=x(w,[["__scopeId","data-v-70716e45"]]);export{N as default};
