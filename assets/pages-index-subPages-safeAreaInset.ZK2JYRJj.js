import{d as _,a as p,w as o,b as n,f,g as a,i as r,j as i,k as e,u as t,s as m}from"./index-Bt5U6C3y.js";import{_ as s}from"./CodeBlock.C3t72IAG.js";const v=`<template>
    <view>
        .....
        <up-safe-bottom></up-safe-bottom>
    </view>
</template>`,b=`<template>
    <view>
        <up-status-bar></up-status-bar>
        .....
    </view>
</template>`,w=_({__name:"safeAreaInset",setup(g){return(A,x)=>{const l=i,u=r,d=n("layout-default-uni"),c=n("global-ku-root");return f(),p(c,null,{default:o(()=>[a(d,null,{default:o(()=>[a(u,{class:"safeAreaInset-page"},{default:o(()=>[a(u,{class:"theme-default-content content__default"},{default:o(()=>[a(l,{id:"安全区适配"},{default:o(()=>[e("安全区适配")]),_:1}),a(l,{id:"底部安全区"},{default:o(()=>[e("底部安全区")]),_:1}),a(l,null,{default:o(()=>[e(" 这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。 "),t("br"),e(" 在APP上，即使您保留了原生安全区占位("),t("code",null,"offset"),e("设置为"),t("code",null,"auto"),e(")，也不会导致底部出现双倍的空白区域，也即APP上"),t("code",null,"offset"),e("设置为"),t("code",null,"auto"),e("时。 ")]),_:1}),a(s,{title:"底部安全区",language:"html",code:v}),a(l,{id:"顶部安全区"},{default:o(()=>[e("顶部安全区")]),_:1}),a(l,null,{default:o(()=>[e(" 由于我们在做页面布局时经常会使用顶部位置，uview-plus提供了一个组件"),t("code",null,"up-status-bar"),e("，如"),t("code",null,"up-popup"),e("从顶部弹出时，可以考虑使用此组件。 ")]),_:1}),a(s,{title:"顶部安全区",language:"html",code:b}),a(l,{id:"关于uview-plus某些组件safe-area-inset参数的说明"},{default:o(()=>[e(" 关于uview-plus某些组件"),t("code",null,"safe-area-inset"),e("参数的说明 ")]),_:1}),a(l,null,{default:o(()=>[e(" 在uview-plus中，一些组件如"),t("code",null,"up-popup"),e("、"),t("code",null,"up-keyboard"),e("组件等，提供了一个"),t("code",null,"safeAreaInsetBottom"),e("参数(布尔类型)，如果设置为"),t("code",null,"true"),e("，就会在组件内部对安全区进行适配， 从而避免安全区指示条引起的问题，以下为uview-plus的"),t("code",null,"up-keyboard"),e("组件在"),t("code",null,"微信浏览器"),e("中分别设置"),t("code",null,"safeAreaInsetBottom"),e("参数 为"),t("code",null,"false"),e("和"),t("code",null,"true"),e("的表现： ")]),_:1}),a(u)]),_:1})]),_:1})]),_:1})]),_:1})}}}),h=m(w,[["__scopeId","data-v-fc73ee5f"]]);export{h as default};
