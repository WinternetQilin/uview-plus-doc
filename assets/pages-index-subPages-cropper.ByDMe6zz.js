import{s as c,a as p,w as e,b as a,f as s,g as n,i as h,u as l,j as f,k as t}from"./index-C-vHpWRU.js";const i={};function _(m,g){const u=f,r=h,d=a("layout-default-uni"),o=a("global-ku-root");return s(),p(o,null,{default:e(()=>[n(d,null,{default:e(()=>[n(r,{class:"cropper-page"},{default:e(()=>[n(r,{class:"theme-default-content content__default"},{default:e(()=>[n(u,{id:"cropper-图片裁剪"},{default:e(()=>[n(u,{href:"cropper.html#cropper-图片裁剪",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" Cropper 图片裁剪 "),n(u,{class:"badge tip"},{default:e(()=>[t("3.4.85")]),_:1})]),_:1}),n(u,null,{default:e(()=>[t("图片裁剪组件，支持手势操作、旋转、缩放、裁剪等功能，适用于头像裁剪等场景。")]),_:1}),n(u,{id:"平台差异说明"},{default:e(()=>[n(u,{href:"cropper.html#平台差异说明",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 平台差异说明 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),n(u,{id:"基本使用"},{default:e(()=>[n(u,{href:"cropper.html#基本使用",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 基本使用 ")]),_:1}),n(u,null,{default:e(()=>[t("通过"),l("code",null,"ref"),t("获取组件实例，调用"),l("code",null,"chooseImage"),t("方法选择图片进行裁剪。")]),_:1}),l("pre",null,[l("code",null,`<template>
    <up-cropper ref="cropperRef" @confirm="confirm">
        <view class="cropper-btn">选择图片</view>
    </up-cropper>
</template>

<script setup>
import { ref } from 'vue';

const cropperRef = ref(null);

const confirm = (e) => {
    console.log('裁剪结果：', e.avatar);
};
<\/script>`)]),n(u,{id:"头像裁剪模式"},{default:e(()=>[n(u,{href:"cropper.html#头像裁剪模式",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 头像裁剪模式 ")]),_:1}),n(u,null,{default:e(()=>[t("设置固定裁剪区域大小，适用于头像裁剪等场景。")]),_:1}),l("pre",null,[l("code",null,`<template>
    <up-cropper
        ref="cropperRef"
        :areaWidth="300"
        :areaHeight="300"
        :exportWidth="260"
        :exportHeight="260"
        @confirm="confirm"
    >
        <view class="avatar-wrapper">
            <image src="/static/avatar.png" mode="aspectFill" />
        </view>
    </up-cropper>
</template>`)]),n(u,{id:"可变裁剪区域"},{default:e(()=>[n(u,{href:"cropper.html#可变裁剪区域",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 可变裁剪区域 ")]),_:1}),n(u,null,{default:e(()=>[t("允许用户调整裁剪区域大小，适用于需要自定义裁剪区域的场景。")]),_:1}),l("pre",null,[l("code",null,`<template>
    <up-cropper
        ref="cropperRef"
        :canChangeSize="true"
        :areaWidth="300"
        :areaHeight="300"
        @confirm="confirm"
    >
        <view class="cropper-btn">调整裁剪区域</view>
    </up-cropper>
</template>`)]),n(u,{id:"props"},{default:e(()=>[n(u,{href:"cropper.html#props",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" Props ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"canChangeSize"),l("td",null,"是否允许调整裁剪区域大小"),l("td",null,"boolean"),l("td",null,"false"),l("td",null,"true/false")]),l("tr",null,[l("td",null,"areaWidth"),l("td",null,"裁剪区域宽度"),l("td",null,"string"),l("td",null,"300rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"areaHeight"),l("td",null,"裁剪区域高度"),l("td",null,"string"),l("td",null,"300rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"exportWidth"),l("td",null,"导出图片宽度"),l("td",null,"string"),l("td",null,"260rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"exportHeight"),l("td",null,"导出图片高度"),l("td",null,"string"),l("td",null,"260rpx"),l("td",null,"-")]),l("tr",null,[l("td",null,"minScale"),l("td",null,"最小缩放比例"),l("td",null,"number"),l("td",null,"0.3"),l("td",null,"-")]),l("tr",null,[l("td",null,"maxScale"),l("td",null,"最大缩放比例"),l("td",null,"number"),l("td",null,"4"),l("td",null,"-")]),l("tr",null,[l("td",null,"canScale"),l("td",null,"是否允许缩放"),l("td",null,"boolean"),l("td",null,"true"),l("td",null,"true/false")]),l("tr",null,[l("td",null,"canRotate"),l("td",null,"是否允许旋转"),l("td",null,"boolean"),l("td",null,"true"),l("td",null,"true/false")]),l("tr",null,[l("td",null,"quality"),l("td",null,"图片质量"),l("td",null,"number"),l("td",null,"0.9"),l("td",null,"0-1")]),l("tr",null,[l("td",null,"noTab"),l("td",null,"是否隐藏底部操作栏"),l("td",null,"boolean"),l("td",null,"true"),l("td",null,"true/false")])])]),n(u,{id:"events"},{default:e(()=>[n(u,{href:"cropper.html#events",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" Events ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"confirm"),l("td",null,"裁剪完成时触发"),l("td",null,"{ avatar, path, index, data }")]),l("tr",null,[l("td",null,"avtinit"),l("td",null,"组件初始化完成时触发"),l("td",null,"-")])])]),n(u,{id:"slots"},{default:e(()=>[n(u,{href:"cropper.html#slots",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" Slots ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"default"),l("td",null,"触发裁剪的元素，点击该插槽内容时会打开裁剪界面")])])]),n(u,{id:"方法"},{default:e(()=>[n(u,{href:"cropper.html#方法",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 方法 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"方法名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"chooseImage"),l("td",null,"打开图片选择器并开始裁剪"),l("td",null,[t(" (index, params, data)"),l("br"),t(" index: 索引标识"),l("br"),t(" params: 配置参数对象"),l("br"),t(" data: 自定义数据 ")])]),l("tr",null,[l("td",null,"close"),l("td",null,"关闭裁剪界面"),l("td",null,"-")]),l("tr",null,[l("td",null,"rotate"),l("td",null,"旋转图片"),l("td",null,"-")]),l("tr",null,[l("td",null,"preview"),l("td",null,"预览裁剪结果"),l("td",null,"-")])])]),n(u,{id:"注意事项"},{default:e(()=>[n(u,{href:"cropper.html#注意事项",class:"header-anchor"},{default:e(()=>[t("#")]),_:1}),t(" 注意事项 ")]),_:1}),n(r,null,{default:e(()=>[n(r,null,{default:e(()=>[t("使用"),l("code",null,"chooseImage"),t("方法时，可以通过第二个参数传入配置项来临时改变裁剪区域大小等属性")]),_:1}),n(r,null,{default:e(()=>[t("裁剪完成后会返回临时文件路径，可用于上传或展示")]),_:1}),n(r,null,{default:e(()=>[t("支持手势操作：单指拖动图片，双指缩放图片")]),_:1}),n(r,null,{default:e(()=>[t("可通过"),l("code",null,"canChangeSize"),t("属性控制是否允许调整裁剪区域大小")]),_:1}),n(r,null,{default:e(()=>[t("在H5平台可能需要处理跨域图片问题")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const x=c(i,[["render",_],["__scopeId","data-v-932bca62"]]);export{x as default};
