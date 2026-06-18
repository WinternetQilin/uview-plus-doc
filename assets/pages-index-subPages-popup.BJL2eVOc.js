import{d as i,a as r,w as l,b as n,f,g as e,i as _,u as o,j as m,k as t,h,s as g}from"./index-Bt5U6C3y.js";import{_ as s}from"./CodeBlock.C3t72IAG.js";const w=`<template>
    <view>
        <up-popup :show="show" @close="close" @open="open">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
        </up-popup>
        <up-popup v-model:show="show">
            <view>
                <text>出淤泥而不染，濯清涟而不妖</text>
            </view>
        </up-popup>
        <up-button @click="show = true">打开</up-button>
    </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

function open() {
    show.value = true;
}

function close() {
    show.value = false;
}
<\/script>`,b=`<template>
    <up-popup :show="show" mode="top" @close="close" @open="open">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
    </up-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);

function open() {
    show.value = true;
}

function close() {
    show.value = false;
}
<\/script>`,v=`<template>
    <up-popup mode="bottom" round="10">
        <view>
            <text>人生若只如初见，何事秋风悲画扇</text>
        </view>
    </up-popup>
</template>`,x=`<template>
    <up-popup :show="show" mode="bottom" round="10" height="300">
        <scroll-view scroll-y="true" class="scroll-view">
            <view style="padding: 20px;">
                <text>内容区域</text>
                <view v-for="i in 20" :key="i" style="padding: 10px 0;">{{ i }}</view>
            </view>
        </scroll-view>
    </up-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>

<style scoped>
.scroll-view {
    height: 100%;
}
</style>`,y=`<template>
    <up-popup :show="show" mode="bottom" round="10">
        <view style="padding: 20px;">
            <text>这里是弹窗内容</text>
        </view>
        <template #bottom>
            <view style="padding: 10px; text-align: center;" @click="show = false">
                <text>关闭</text>
            </view>
        </template>
    </up-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const show = ref(false);
<\/script>`,k=i({__name:"popup",setup(C){return(A,j)=>{const p=m,u=_,a=h,c=n("layout-default-uni"),d=n("global-ku-root");return f(),r(d,null,{default:l(()=>[e(c,null,{default:l(()=>[e(u,{class:"popup-page"},{default:l(()=>[e(u,{class:"theme-default-content content__default"},{default:l(()=>[e(p,{id:"popup-弹出层"},{default:l(()=>[t("Popup 弹出层")]),_:1}),e(u,{class:"demo-placeholder"},{default:l(()=>[e(p,null,{default:l(()=>[t("此处应展示 Popup 弹出层 组件的交互式演示")]),_:1}),e(p,{class:"placeholder-tip"},{default:l(()=>[t(" 演示地址："),e(p,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsA/popup/popup",target:"_blank"},{default:l(()=>[t(" https://ijry.github.io/uview-plus/text/#/pages/componentsA/popup/popup ")]),_:1})]),_:1})]),_:1}),e(p,null,{default:l(()=>[t(" 弹出层容器，用于展示弹窗、信息提示等内容，支持上、下、左、右和中部弹出。组件只提供容器，内部内容由用户自定义。 ")]),_:1}),e(p,{id:"平台差异说明"},{default:l(()=>[t("平台差异说明")]),_:1}),o("table",null,[o("thead",null,[o("tr",null,[o("th",{style:{"text-align":"center"}}," App（vue） "),o("th",{style:{"text-align":"center"}}," App（nvue） "),o("th",{style:{"text-align":"center"}}," H5 "),o("th",{style:{"text-align":"center"}}," 小程序 ")])]),o("tbody",null,[o("tr",null,[o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ "),o("td",{style:{"text-align":"center"}}," √ ")])])]),e(p,{id:"基本使用"},{default:l(()=>[t("基本使用")]),_:1}),e(u,null,{default:l(()=>[e(u,null,{default:l(()=>[t("弹出层的内容通过"),o("code",null,"slot"),t("传入，由用户自定义")]),_:1}),e(u,null,{default:l(()=>[t("通过"),o("code",null,"show"),t("绑定一个布尔值的变量控制弹出层的打开和收起，通过v-model:show双向绑定简化使用。")]),_:1})]),_:1}),e(s,{title:"基本使用",language:"html",code:w}),e(p,{id:"设置弹出层的方向"},{default:l(()=>[t("设置弹出层的方向")]),_:1}),e(u,null,{default:l(()=>[e(u,null,{default:l(()=>[t("可以通过"),o("code",null,"mode"),t("参数设置，可以设置为"),o("code",null,"left"),t("、"),o("code",null,"top"),t("、"),o("code",null,"right"),t("、"),o("code",null,"bottom"),t("、"),o("code",null,"center")]),_:1})]),_:1}),e(s,{title:"设置弹出层的方向",language:"html",code:b}),e(p,{id:"设置弹出层的圆角"},{default:l(()=>[t("设置弹出层的圆角")]),_:1}),e(p,null,{default:l(()=>[t("需要将"),o("code",null,"round"),t("设置为圆角值(仅对"),o("code",null,"mode = top | bottom | center"),t("有效)。")]),_:1}),e(s,{title:"设置弹出层的圆角",language:"html",code:v}),e(p,{id:"弹窗中内容滚动"},{default:l(()=>[t("弹窗中内容滚动")]),_:1}),e(u,null,{default:l(()=>[e(u,null,{default:l(()=>[t("可以通过"),o("code",null,"scroll-view"),t("来支持内容滚动，。")]),_:1})]),_:1}),e(s,{title:"弹窗中内容滚动",language:"html",code:x}),e(p,{id:"底部追加内容"},{default:l(()=>[t(" 底部追加内容"),e(p,{class:"badge tip"},{default:l(()=>[t("3.4.30")]),_:1})]),_:1}),e(u,null,{default:l(()=>[e(u,null,{default:l(()=>[t("可以通过"),o("code",null,"bottom"),t("插槽设置除了内容外的追加内容，典型的如一个悬浮的关闭按钮。")]),_:1})]),_:1}),e(s,{title:"底部追加内容",language:"html",code:y}),e(p,{id:"右侧演示页面源代码地址"},{default:l(()=>[t("右侧演示页面源代码地址")]),_:1}),e(u,{class:"custom-block tip"},{default:l(()=>[e(p,{class:"custom-block-title"},{default:l(()=>[t("点击以下链接以查看右侧演示页面的源码")]),_:1}),o("br"),e(p,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/popup/popup.nvue",target:"_blank",class:"github-link"},{default:l(()=>[e(a,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),t(" github ")]),_:1}),o("br"),e(p,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/popup/popup.nvue",target:"_blank",class:"github-link"},{default:l(()=>[e(a,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"gitee",width:"30"}),t(" gitee ")]),_:1}),o("br")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),B=g(k,[["__scopeId","data-v-3818d629"]]);export{B as default};
