import{d as c,a as r,w as l,b as n,f as d,g as t,i as m,j as _,k as e,u as o,s as f}from"./index-Bt5U6C3y.js";import{_ as u}from"./CodeBlock.C3t72IAG.js";const x=`<template>
    <view>
        <up-button>按钮</up-button>
    </view>
</template>`,g=`<template>
    <up-action-sheet :actions="list" v-model="show"></up-action-sheet>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    text: '点赞',
    color: 'blue',
    fontSize: 28
  },
  {
    text: '分享'
  },
  {
    text: '评论'
  }
]);

const show = ref(true);
<\/script>`,h=`<template>
    <up-action-sheet :actions="list" v-model="show"></up-action-sheet>
</template>

<script>
export default {
    data() {
        return {
            list: [{
                text: '点赞',
                color: 'blue',
                fontSize: 28
            }, {
                text: '分享'
            }, {
                text: '评论'
            }],
            show: true
        }
    }
}
<\/script>`,v=`<template>
    <up-parse :content="xxx"></up-parse>
</template>`,P=`<script setup>
import uParse from '@/components/gaoyia-parse/parse.vue';
<\/script>`,w=`<script>
import uParse from '@/components/gaoyia-parse/parse.vue'
export default {
    components: {
        uParse
    }
}
<\/script>`,C=`<template>
    <text-parse :content="xxx"></text-parse>
</template>`,y=`<script setup>
import aParse from '@/components/gaoyia-parse/parse.vue';
<\/script>`,b=`<script>
// 记得同时修改引入的名称，以及components中的名称
import aParse from '@/components/gaoyia-parse/parse.vue'
export default {
    components: {
        aParse
    }
}
<\/script>`,I=c({__name:"quickstart",setup(k){return(j,A)=>{const a=_,s=m,p=n("layout-default-uni"),i=n("global-ku-root");return d(),r(i,null,{default:l(()=>[t(p,null,{default:l(()=>[t(s,{class:"quickstart-page"},{default:l(()=>[t(s,{class:"theme-default-content content__default"},{default:l(()=>[t(a,{id:"快速上手"},{default:l(()=>[e("快速上手")]),_:1}),t(s,{class:"demo-placeholder"},{default:l(()=>[t(a,null,{default:l(()=>[e("此处应展示 uview-plus 快速上手的交互式演示")]),_:1}),t(a,{class:"placeholder-tip"},{default:l(()=>[e(" 演示地址："),t(a,{href:"https://ijry.github.io/uview-plus/text/#/",target:"_blank"},{default:l(()=>[e(" https://ijry.github.io/uview-plus/text/#/ ")]),_:1})]),_:1})]),_:1}),t(a,{id:"如何使用"},{default:l(()=>[e("如何使用")]),_:1}),t(a,null,{default:l(()=>[e(" 通过npm和下载方式的配置之后，在某个页面可以直接使用组件，无需通过"),o("code",null,"import"),e("引入组件。 ")]),_:1}),t(u,{title:"如何使用",language:"html",code:x}),t(a,{id:"关于uni-u"},{default:l(()=>[e("关于uni.$u")]),_:1}),t(a,null,{default:l(()=>[e(" 从"),o("code",null,"1.7.9"),e("开始，uview-plus将"),o("code",null,"$u"),e("对象同时挂载到了"),o("code",null,"uni"),e("对象上，这意味着您可以在外部的"),o("code",null,"js"),e("文件中，通过"),o("code",null,"uni.$u.xxx"),e("的形式去调用uview-plus提供的一些工具方法，而不再像从前一样必须在"),o("code",null,"*.vue"),e("中通过"),o("code",null,"uni.$u.xxx"),e("的形式调用。 ")]),_:1}),t(a,{id:"如何不使用easycom而单独引用某一个组件"},{default:l(()=>[e("如何不使用easycom而单独引用某一个组件")]),_:1}),t(a,null,{default:l(()=>[e(" 某些情况下，您可能不想通过easycom引用组件(虽然我们极力推荐您使用easycom)，那么您可以使用"),o("code",null,"import"),e("这个常规的引入方式，如下： ")]),_:1}),t(u,{title:"单独引用组件 (Composition API)",language:"html",code:g}),t(u,{title:"单独引用组件 (Options API)",language:"html",code:h}),t(a,{id:"关于uview-plus组件的esaycom规则可能和其他组件引入名称冲突的问题-4-x无此问题"},{default:l(()=>[e(" 关于uview-plus组件的esaycom规则可能和其他组件引入名称冲突的问题(4.x无此问题) ")]),_:1}),t(a,null,{default:l(()=>[e(" uview-plus的组件引入是通过easycom形式的，写在pages.json中，以"),o("code",null,"up-"),e("开头，这可能和其他UI组件，或者uni-app插件市场的uParse修复版-html富文本加载组件名冲突而"),o("strong",null,"报错"),e("， 原因是此"),o("code",null,"uParse"),e("的组件引用名为"),o("code",null,"u-parse"),e("，也是"),o("code",null,"u-"),e("开头，即使您在页面中显式地配置了组件引入，但uni-app仍认为easycom配置的规则优先级比页面引入的组件规则高。 ")]),_:1}),t(a,null,{default:l(()=>[e("以下为"),o("code",null,"uParse"),e("第三方插件的官方写法：")]),_:1}),t(u,{title:"uParse 官方写法 (template)",language:"html",code:v}),t(u,{title:"uParse 官方写法 (Composition API)",language:"html",code:P}),t(u,{title:"uParse 官方写法 (Options API)",language:"html",code:w}),t(a,null,{default:l(()=>[e(" 可以看到，上方虽然通过"),o("code",null,"import"),e("声明了此组件，最终引用的组件名称为"),o("code",null,"<up-parse>"),e('("u-"开头)，但是uni-app仍然忽视了，而认为uview-plus在'),o("code",null,"pages.json"),e("配置的easycom规则的优先级更高，因而去uview-plus的组件库 中查找"),o("code",null,"u-parse"),e("，因为找不到而报错，这是不合理的。 ")]),_:1}),t(a,null,{default:l(()=>[e("解决办法也很简单，给冲突的插件换一个名字即可，比如上面的"),o("code",null,"uParse"),e("插件，我们在"),o("code",null,"import"),e("和"),o("code",null,"components"),e("声明的时候换一个名字即可，比如这里让其为字母"),o("code",null,"text"),e("开头：")]),_:1}),t(u,{title:"解决冲突 - 改名 (template)",language:"html",code:C}),t(u,{title:"解决冲突 - 改名 (Composition API)",language:"html",code:y}),t(u,{title:"解决冲突 - 改名 (Options API)",language:"html",code:b})]),_:1})]),_:1})]),_:1})]),_:1})}}}),T=f(I,[["__scopeId","data-v-c123aad9"]]);export{T as default};
