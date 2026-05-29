import{d as g,a as r,w as l,b as u,f,g as e,i as p,u as t,j as m,k as i,h,s as _}from"./index-CRHsRVm2.js";import{_ as a}from"./CodeBlock.BlRjy5Lx.js";const x=`<template>
    <up-scroll-list>
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' }
]);
<\/script>`,v=`<template>
    <up-scroll-list
        :indicator="indicator"
        indicatorColor="#fff0f0"
        indicatorActiveColor="#f56c6c">
        <view v-for="(item, index) in list" :key="index">
            <image :src="item.thumb"></image>
        </view>
    </up-scroll-list>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' }
]);
<\/script>`,y=`<template>
    <up-scroll-list @right="right" @left="left">
        <view class="scroll-list" style="flex-direction: row;">
            <view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index">
                <image class="scroll-list__goods-item__image" :src="item.thumb"></image>
                <text class="scroll-list__goods-item__text">\${{ item.name }}</text>
            </view>
        </view>
    </up-scroll-list>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const list = reactive([
    { name: 1, thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg' },
    { name: 2, thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg' },
    { name: 3, thumb: 'https://cdn.uviewui.com/uview/goods/3.jpg' },
    { name: 4, thumb: 'https://cdn.uviewui.com/uview/goods/4.jpg' },
    { name: 5, thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg' },
    { name: 6, thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg' },
    { name: 7, thumb: 'https://cdn.uviewui.com/uview/goods/7.jpg' },
    { name: 8, thumb: 'https://cdn.uviewui.com/uview/goods/8.jpg' }
]);

function right() {
    console.log('滑动到最右边');
}

function left() {
    console.log('滑动到最左边');
}
<\/script>`,b=g({__name:"scrollList",setup(w){return(j,C)=>{const s=m,n=p,o=h,d=u("layout-default-uni"),c=u("global-ku-root");return f(),r(c,null,{default:l(()=>[e(d,null,{default:l(()=>[e(n,{class:"scrollList-page"},{default:l(()=>[e(n,{class:"theme-default-content content__default"},{default:l(()=>[e(s,{id:"scrolllist-横向滚动列表"},{default:l(()=>[i("ScrollList 横向滚动列表")]),_:1}),e(n,{class:"demo-placeholder"},{default:l(()=>[e(s,null,{default:l(()=>[i("此处应展示 ScrollList 横向滚动列表 组件的交互式演示")]),_:1}),e(s,{class:"placeholder-tip"},{default:l(()=>[i(" 演示地址："),e(s,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsC/scrollList/scrollList",target:"_blank"},{default:l(()=>[i(" https://ijry.github.io/uview-plus/text/#/pages/componentsC/scrollList/scrollList ")]),_:1})]),_:1})]),_:1}),e(s,null,{default:l(()=>[i(" 该组件一般用于同时展示多个商品、分类的场景，也可以完成左右滑动的列表。 ")]),_:1}),e(s,{id:"平台差异说明"},{default:l(()=>[i("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(s,{id:"基本使用"},{default:l(()=>[i("基本使用")]),_:1}),e(s,null,{default:l(()=>[i("通过slot传入内容")]),_:1}),e(a,{title:"基本使用",language:"html",code:x}),e(s,{id:"指示器的使用"},{default:l(()=>[i("指示器的使用")]),_:1}),e(n,null,{default:l(()=>[e(n,null,{default:l(()=>[t("code",null,"indicator"),i(" 用于控制指示器是否显示")]),_:1}),e(n,null,{default:l(()=>[t("code",null,"indicatorWidth"),i(" 用于控制指示器整体的宽度")]),_:1}),e(n,null,{default:l(()=>[t("code",null,"indicatorBarWidth"),i(" 用于控制指示器滑块的宽度")]),_:1}),e(n,null,{default:l(()=>[t("code",null,"indicatorColor"),i(" 指示器的颜色")]),_:1}),e(n,null,{default:l(()=>[t("code",null,"indicatorActiveColor"),i(" 滑块的颜色")]),_:1}),e(n,null,{default:l(()=>[t("code",null,"indicatorStyle"),i(" 指示器的位置/样式控制")]),_:1})]),_:1}),e(a,{title:"指示器使用",language:"html",code:v}),e(s,{id:"兼容性与性能"},{default:l(()=>[i("兼容性与性能")]),_:1}),e(n,null,{default:l(()=>[e(n,null,{default:l(()=>[i(" 此组件是在nvue中引入bindingx，此库类似于微信小程序wxs，目的是让js运行在视图层，减少视图层和逻辑层的通信折损，在nvue中会有更好的体验。 ")]),_:1}),e(n,null,{default:l(()=>[i("此组件是在APP-VUE、H5、小程序中使用的是wxs。")]),_:1}),e(n,null,{default:l(()=>[i("其他平台则使用js完成。")]),_:1})]),_:1}),e(s,null,{default:l(()=>[i(" 当滑动到最左边/最右边时，uview-plus提供了事件"),t("code",null,"left"),i("和"),t("code",null,"right"),i("可供调用，用于对列表滑动到端点处的业务实现。 ")]),_:1}),e(a,{title:"左右端点事件",language:"html",code:y}),e(s,{id:"右侧演示页面源代码地址"},{default:l(()=>[i("右侧演示页面源代码地址")]),_:1}),e(n,{class:"custom-block tip"},{default:l(()=>[e(s,{class:"custom-block-title"},{default:l(()=>[i("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(s,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/scrollList/scrollList.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[e(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),i(" github ")]),_:1}),e(s,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/scrollList/scrollList.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:l(()=>[e(o,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),i(" gitee ")]),_:1}),t("br")]),_:1}),e(s,{id:"api"},{default:l(()=>[i("API")]),_:1}),e(s,{id:"props"},{default:l(()=>[i("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," indicatorWidth "),t("td",{style:{"text-align":"left"}}," 指示器的整体宽度 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 50 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," indicatorBarWidth "),t("td",{style:{"text-align":"left"}}," 滑块的宽度 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 20 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," indicator "),t("td",{style:{"text-align":"left"}}," 是否显示面板指示器 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," true "),t("td",{style:{"text-align":"left"}}," false ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," indicatorColor "),t("td",{style:{"text-align":"left"}}," 指示器非激活颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #f2f2f2 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," indicatorActiveColor "),t("td",{style:{"text-align":"left"}}," 滑块激活颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #3eaf7c "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," indicatorStyle "),t("td",{style:{"text-align":"left"}}," 指示器样式 "),t("td",{style:{"text-align":"left"}}," Object "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," endSensitive "),t("td",{style:{"text-align":"left"}}," 监听左右端点事件的敏感度 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 0 "),t("td",{style:{"text-align":"left"}}," - ")])])]),e(s,{id:"events"},{default:l(()=>[i("Events")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," left "),t("td",{style:{"text-align":"left"}}," 滑动到最左边时触发 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," right "),t("td",{style:{"text-align":"left"}}," 滑动到最右边时触发 "),t("td",{style:{"text-align":"left"}}," - ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),S=_(b,[["__scopeId","data-v-4d43c264"]]);export{S as default};
