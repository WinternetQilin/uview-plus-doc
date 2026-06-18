import{s as r,a as s,w as n,b as c,f,g as o,i,u as e,j as _,k as l}from"./index-C-vHpWRU.js";const p={};function m(h,b){const t=_,u=i,a=c("layout-default-uni"),d=c("global-ku-root");return f(),s(d,null,{default:n(()=>[o(a,null,{default:n(()=>[o(u,{class:"common-page"},{default:n(()=>[o(u,{class:"theme-default-content content__default"},{default:n(()=>[o(t,{id:"内置样式"},{default:n(()=>[o(t,{href:"common.html#内置样式",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 内置样式 ")]),_:1}),o(t,{id:"说明"},{default:n(()=>[o(t,{href:"common.html#说明",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 说明 ")]),_:1}),o(t,null,{default:n(()=>[l(" uview-plus组件功能的实现，并不依赖全局样式，内置的一些类名，只是提供一些基础且常用的样式，仅此而已。 "),e("br"),l(" 注意：请根据"),o(t,{href:"quickstart.html"},{default:n(()=>[l("快速上手")]),_:1}),l("中的说明，引入uview-plus提供的scss文件。 ")]),_:1}),o(u,{class:"custom-block warning"},{default:n(()=>[o(t,{class:"custom-block-title"},{default:n(()=>[l("温馨提示")]),_:1}),o(t,null,{default:n(()=>[l(" 由于uview-plus的内置样式均是写在scss文件中的，您在使用的时候，请确保要给页面的"),e("code",null,"style"),l("标签加上"),e("code",null,'lang="scss"'),l("属性，否则可能会报错。 "),e("br")]),_:1})]),_:1}),o(t,{id:"文字省略"},{default:n(()=>[o(t,{href:"common.html#文字省略",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 文字省略 ")]),_:1}),o(t,null,{default:n(()=>[e("code",null,"up-line-1"),l(","),e("code",null,"up-line-2"),l(","),e("code",null,"up-line-3"),l(","),e("code",null,"up-line-4"),l(","),e("code",null,"up-line-5"),l("五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行+省略号。 ")]),_:1}),e("pre",null,[e("code",null,'<text class="up-line-1">是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛</text>')]),o(t,{id:"重置按钮样式"},{default:n(()=>[o(t,{href:"common.html#重置按钮样式",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 重置按钮样式 ")]),_:1}),o(t,null,{default:n(()=>[l(" 我们知道，uni-app和微信小程序的"),e("code",null,"button"),l("按钮是自带样式的，比如边框，内边距，行高等。在某些特殊场景，我们可能会需要清除这些样式，仅仅只留下按钮文本，就像 单纯的"),e("code",null,"view"),l("元素一样，不带预置样式，场景： "),e("br"),l(" 在微信小程序中，我们知道"),e("code",null,"button"),l("设置"),e("code",null,"open-type"),l("参数为"),e("code",null,"getUserInfo"),l('(或者分享场景)，点击按钮可以弹出让用户授权的系统弹窗，有时候我们可能需要按钮形式展现，但也有时候我们仅仅需要 "点击登录/授权/分享"几个字，同时具备获取相应的功能，就需要清除按钮的样式了，只需要给'),e("code",null,"button"),l("加上"),e("code",null,"up-reset-button"),l("类名即可。 ")]),_:1}),e("pre",null,[e("code",null,'<button class="up-reset-button">点击登录</button>')]),o(t,null,{default:n(()=>[l("提示：")]),_:1}),o(u,null,{default:n(()=>[o(u,null,{default:n(()=>[l(" 此种场景，不建议使用uview-plus的"),e("code",null,"up-button"),l("组件，使用原生的"),e("code",null,"button"),l("即可 ")]),_:1}),o(u,null,{default:n(()=>[l(" 有时候，我们可能弹出询问用户是否想授权，可以用"),e("code",null,"up-modal"),l("组件，此组件有一个"),e("code",null,"confirm-button"),l("的"),e("code",null,"slot"),l("用于替换"),e("code",null,"确定"),l("按钮，用户点击确定，即可授权。 ")]),_:1})]),_:1}),e("pre",null,[e("code",null,`<!-- 请在微信开发工具中运行此代码 -->
<template>
  <view>
    <up-modal v-model:visible="show" content="点击确定进行授权">
      <template #confirm-button>
        <button open-type="getUserInfo" class="up-reset-button" @getuserinfo="getuserinfo">确定</button>
      </template>
    </up-modal>
    <up-button @click="show = true">打开modal</up-button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(true);

const getuserinfo = (res) => {
  console.log(res);
};
<\/script>`)]),o(t,{id:"边框"},{default:n(()=>[o(t,{href:"common.html#边框",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 边框 ")]),_:1}),o(t,null,{default:n(()=>[l(" uni-app，iOS和少数设备使用"),e("code",null,"1rpx"),l("是能够得到类似"),e("code",null,"0.5px"),l("的半像素宽度的，但是某些情况下是不兼容的， 故uview-plus提供了一套兼容的css类名，方便用户使用。 "),e("br"),e("code",null,"up-border"),l("表示给元素添加四周的边框，"),e("code",null,"up-border-top"),l("为上边框，"),e("code",null,"up-border-right"),l("为右边框， "),e("code",null,"up-border-bottom"),l("为下边框，"),e("code",null,"up-border-left"),l("为左边框。 "),e("br"),l(" 说明：如果想调整边框与内容的距离，修改元素的内边距即可。 ")]),_:1}),e("pre",null,[e("code",null,`<view class="up-border-bottom">
	夫人之相与，俯仰一世，或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外
</view>`)]),o(t,{id:"文字颜色"},{default:n(()=>[o(t,{href:"common.html#文字颜色",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 文字颜色 ")]),_:1}),o(t,null,{default:n(()=>[l("uview-plus提供了四个关于文字的颜色，具体详见文档的"),o(t,{href:"color.html"},{default:n(()=>[l("Color 色彩")]),_:1}),l("部分，分别是：")]),_:1}),o(u,null,{default:n(()=>[o(u,null,{default:n(()=>[e("code",null,"main-color"),l("主要颜色，可以用于标题等需要重颜色的场景")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"content-color"),l("内容颜色，可以用于一般性内容的场景")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"tips-color"),l("提示颜色，可以用于浅颜色的提示语的场景")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"light-color"),l("为比"),e("code",null,"tips-color"),l("更浅的颜色，可以和"),e("code",null,"tips-color"),l("搭配使用")]),_:1})]),_:1}),o(t,null,{default:n(()=>[l("举个例子：")]),_:1}),e("pre",null,[e("code",null,`<style lang="scss" scoped>
view {
	.main-color {
		color: #303133;
	}
	.content-color {
		color: #606266;
	}
	.tips-color {
		color: #909399;
	}
	.light-color {
		color: #c0c4cc;
	}
}
</style>`)]),o(t,{id:"主题色"},{default:n(()=>[o(t,{href:"common.html#主题色",class:"header-anchor"},{default:n(()=>[l("#")]),_:1}),l(" 主题色 ")]),_:1}),o(t,null,{default:n(()=>[l("uview-plus提供五个关于主题的scss颜色变量，如有需要，可合理使用。具体详见文档的"),o(t,{href:"color.html"},{default:n(()=>[l("Color 色彩")]),_:1}),l("部分，分别是：")]),_:1}),o(u,{class:"custom-block danger"},{default:n(()=>[o(t,{class:"custom-block-title"},{default:n(()=>[l("注意")]),_:1}),o(t,null,{default:n(()=>[l("注意，以下为3.x版本，4.x版本前缀为$up-。")]),_:1})]),_:1}),o(u,null,{default:n(()=>[o(u,null,{default:n(()=>[e("code",null,"$u-primary"),l("为蓝色，uview-plus的主色彩，代表热情，友好，积极，向上之意。")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"$u-warning"),l("为黄色，代表警告之意。")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"$u-success"),l("为绿色，代表成功之意。")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"$u-error"),l("为红色，代表错误之意。")]),_:1}),o(u,null,{default:n(()=>[e("code",null,"$u-info"),l("为灰色，代表一般信息之意。")]),_:1})]),_:1}),e("pre",null,[e("code",null,`<style lang="scss" scoped>
view {
	/* 重要，颜色展示 */
	.color-primary {
		color: $u-primary;
	}
	.color-success {
		color: $u-success;
	}
	.color-warning {
		color: $u-warning;
	}
	.color-error {
		color: $u-error;
	}
	.color-info {
		color: $u-info;
	}
}
</style>`)])]),_:1})]),_:1})]),_:1})]),_:1})}const v=r(p,[["render",m],["__scopeId","data-v-c4a6cce7"]]);export{v as default};
