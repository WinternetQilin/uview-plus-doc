import{d as i,a as r,w as o,b as c,f as p,g as t,i as f,u as l,j as m,k as e,s as _}from"./index-CRHsRVm2.js";import{_ as s}from"./CodeBlock.BlRjy5Lx.js";const h=`<template>
	<view>
		<up-modal :show="show" :title="title" :content="'content'"></up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
<\/script>`,g=`<template>
	<view>
		<up-modal :show="show" :title="title">
			<view class="slot-content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</up-modal>
		<up-button @click="show = true">打开</up-button>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
const content = ref(\`空山新雨后<br>天气晚来秋\`);
<\/script>`,w=`<template>
	<view>
		<up-modal 
			:show="show" 
			:title="title" 
			:content="content" 
			:async-close="true"
			@confirm="confirm"
			@close="close"
		></up-modal>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const title = ref('标题');
const content = ref('确定要删除吗？');

const confirm = () => {
	console.log('点击了确定');
	setTimeout(() => {
		show.value = false;
	}, 1000);
}

const close = () => {
	show.value = false;
}
<\/script>`,v=`<up-modal 
	:show="show"
	:close-on-click-overlay="true"
></up-modal>`,x=`<up-modal 
	:show="show"
	width="300px"
></up-modal>`,y=i({__name:"modal",setup(b){return(C,k)=>{const n=m,a=f,u=c("layout-default-uni"),d=c("global-ku-root");return p(),r(d,null,{default:o(()=>[t(u,null,{default:o(()=>[t(a,{class:"modal-page"},{default:o(()=>[t(a,{class:"theme-default-content content__default"},{default:o(()=>[t(n,{id:"modal-模态框"},{default:o(()=>[e("Modal 模态框")]),_:1}),t(n,null,{default:o(()=>[e("弹出模态框，常用于消息提示、消息确认、在当前页面内完成特定的交互操作。")]),_:1}),t(a,{class:"demo-model"},{default:o(()=>[t(a,{class:"model-content"},{default:o(()=>[l("iframe",{id:"demo-modal",scrolling:"auto",frameborder:"0",src:"https://ijry.github.io/uview-plus/text/#/pages/componentsC/modal/modal",class:"iframe"})]),_:1}),t(n,{target:"_blank",href:"https://ijry.github.io/uview-plus/text/#",class:"open-link"},{default:o(()=>[e(" 打开 ")]),_:1})]),_:1}),t(n,{id:"平台差异说明"},{default:o(()=>[e("平台差异说明")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(n,{id:"基本使用"},{default:o(()=>[e("基本使用")]),_:1}),t(n,null,{default:o(()=>[e("默认情况下，模态框只有一个"),l("code",null,"确认"),e("按钮：")]),_:1}),t(a,null,{default:o(()=>[t(a,null,{default:o(()=>[e("请至少要配置弹框的内容参数"),l("code",null,"content"),e("。")]),_:1}),t(a,null,{default:o(()=>[e("通过"),l("code",null,"show"),e("绑定一个布尔变量来控制模态框的显示与否。")]),_:1})]),_:1}),t(s,{title:"基本使用",language:"html",code:h}),t(n,{id:"传入富文本内容"},{default:o(()=>[e("传入富文本内容")]),_:1}),t(n,null,{default:o(()=>[e(" 有时候我们需要给模态框的内容，不一定是纯文本的字符串，可能会需要换行，嵌入其他元素等，这时候我们可以使用"),l("code",null,"slot"),e("功能，再结合uni-app"),l("code",null,"richText"),e("组件，就能传入富文本内容了，如下演示： ")]),_:1}),t(s,{title:"传入富文本内容",language:"html",code:g}),t(n,{id:"异步关闭"},{default:o(()=>[e("异步关闭")]),_:1}),t(n,null,{default:o(()=>[e(' 异步关闭只对"确定"按钮起作用，需要设置'),l("code",null,"asyncClose"),e("为"),l("code",null,"true"),e("，当点击确定按钮的时候，按钮的文字变成一个loading动画，此动画的颜色为"),l("code",null,"confirm-color"),e("参数的颜色，同时Modal不会自动关闭，需要手动设置通过"),l("code",null,"show"),e("绑定的变量为"),l("code",null,"false"),e("来实现手动关闭。 ")]),_:1}),t(s,{title:"异步关闭",language:"html",code:w}),t(n,{id:"点击遮罩关闭"},{default:o(()=>[e("点击遮罩关闭")]),_:1}),t(n,null,{default:o(()=>[e(' 有时候我们不显示"关闭"按钮的时候，需要点击遮罩也可以关闭Modal，这时通过配置'),l("code",null,"closeOnClickOverlay"),e("为"),l("code",null,"true"),e("即可（注意：关闭事件需要自行处理，只会在开启closeOnClickOverlay后点击遮罩层执行close回调） ")]),_:1}),t(s,{title:"点击遮罩关闭",language:"html",code:v}),t(n,{id:"控制模态框宽度"},{default:o(()=>[e("控制模态框宽度")]),_:1}),t(n,null,{default:o(()=>[e("可以通过设置"),l("code",null,"width"),e("参数控制模态框的宽度，不支持百分比，可以数值，px，rpx单位")]),_:1}),t(s,{title:"控制模态框宽度",language:"html",code:x})]),_:1})]),_:1})]),_:1})]),_:1})}}}),j=_(y,[["__scopeId","data-v-817f0137"]]);export{j as default};
