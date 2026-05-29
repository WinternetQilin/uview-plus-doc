import{_ as s}from"./CodeBlock.BlRjy5Lx.js";import{s as i,a as f,w as n,b as o,f as _,g as e,i as h,u as l,j as m,k as t}from"./index-CRHsRVm2.js";const p={};function x(g,w){const a=m,u=h,d=s,r=o("layout-default-uni"),c=o("global-ku-root");return _(),f(c,null,{default:n(()=>[e(r,null,{default:n(()=>[e(u,{class:"waterfall-page"},{default:n(()=>[e(u,{class:"theme-default-content content__default"},{default:n(()=>[e(a,{id:"waterfall-瀑布流"},{default:n(()=>[e(a,{href:"waterfall.html#waterfall-瀑布流",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" Waterfall 瀑布流 ")]),_:1}),e(a,null,{default:n(()=>[t("这是一个瀑布流形式的组件，内容支持多列，结合"),l("code",null,"懒加载"),t("组件效果更佳。")]),_:1}),e(u,{class:"custom-block warning"},{default:n(()=>[e(a,{class:"custom-block-title"},{default:n(()=>[t("注意")]),_:1}),e(u,null,{default:n(()=>[e(u,null,{default:n(()=>[t("在微信小程序中，需要hx2.8.11才支持在懒加载中结合其他组件")]),_:1}),e(u,null,{default:n(()=>[t("由于hx的问题，支付宝小程序需要hx2.8.2版本及以上才支持本组件")]),_:1}),e(u,null,{default:n(()=>[t("3.4.77版本开始瀑布流组件升级改造，目前仍然兼容老的用法，建议逐步迁移至新用法。")]),_:1})]),_:1})]),_:1}),e(a,{id:"平台差异说明"},{default:n(()=>[e(a,{href:"waterfall.html#平台差异说明",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" 平台差异说明 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 微信小程序 "),l("th",{style:{"text-align":"center"}}," 支付宝小程序 "),l("th",{style:{"text-align":"center"}}," 百度小程序 "),l("th",{style:{"text-align":"center"}}," 头条小程序 "),l("th",{style:{"text-align":"center"}}," QQ小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:n(()=>[e(a,{href:"waterfall.html#基本使用",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" 基本使用 ")]),_:1}),e(a,null,{default:n(()=>[t(" 本组件利用了vue的作用域插槽("),e(a,{href:"https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD",target:"_blank"},{default:n(()=>[t("详见vue文档")]),_:1}),t(")特性， 将传入"),l("code",null,"waterfall"),t("内部的数据，通过"),l("code",null,"slot"),t("(作用域插槽)让用户能在父组件中引用和配置对应的数据，这样做的 原因是可以让用户自定义列表"),l("code",null,"item"),t("的结构和样式，达到真正的组件化。 ")]),_:1}),e(a,null,{default:n(()=>[t(" 需要注意的是，组件内部导出的数据，需要使用"),l("code",null,"template"),t("元素接收，同时通过"),l("code",null,"v-slot"),t("指定列插槽，如 "),l("code",null,'v-slot:column="{colList, colIndex}"'),t("，这里的"),l("code",null,"colList"),t("是当前列的数据列表)，见如下完整示例： ")]),_:1}),e(a,{id:"核心代码"},{default:n(()=>[e(a,{href:"waterfall.html#核心代码",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" 核心代码 ")]),_:1}),e(d,{code:`<up-waterfall v-model="flowList" columns="2">
	<template v-slot:column="{colList, colIndex}">
		<view v-for="(item, index) in colList" :key="index">
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
</up-waterfall>`,language:"html",title:"核心代码"}),e(a,{id:"移除或清空数据"},{default:n(()=>[e(a,{href:"waterfall.html#移除或清空数据",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" 移除或清空数据 ")]),_:1}),e(a,null,{default:n(()=>[t("移除或者清空，都需要通过"),l("code",null,"ref"),t("调用组件内部的方法。")]),_:1}),e(u,null,{default:n(()=>[e(u,null,{default:n(()=>[t("移除数据")]),_:1})]),_:1}),e(a,null,{default:n(()=>[t("组件内部方法名为"),l("code",null,"remove"),t('，需要传入"id"值，这个"id"键值的名称配置参数为'),l("code",null,"idKey"),t("(默认"),l("code",null,"id"),t(")，如下：")]),_:1}),e(a,null,{default:n(()=>[t("假设您的数据为:")]),_:1}),e(d,{code:`let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]`,language:"js",title:"数据示例"}),e(a,null,{default:n(()=>[t("那么您应该配置"),l("code",null,"idKey"),t("为"),l("code",null,"idx"),t("。")]),_:1}),e(u,{start:"2"},{default:n(()=>[e(u,null,{default:n(()=>[t("清空数据")]),_:1})]),_:1}),e(a,null,{default:n(()=>[t("通过"),l("code",null,"ref"),t("手动调用组件内部的"),l("code",null,"clear"),t("方法，可以清空左右两列的数据。")]),_:1}),e(a,null,{default:n(()=>[t("说明：具体实现方法，请见下方的示例代码")]),_:1}),e(a,{id:"完整应用示例"},{default:n(()=>[e(a,{href:"waterfall.html#完整应用示例",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" 完整应用示例 ")]),_:1}),e(d,{code:`<template>
	<view class="wrap">
		<up-button @click="clear">清空列表</up-button>
		<up-waterfall v-model="flowList" ref="uWaterfallRef" columns="2">
			<template v-slot:column="{colList, colIndex}">
				<view class="demo-warter" v-for="(item, index) in colList" :key="index">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<up-lazy-load threshold="-450" border-radius="10" :image="item.image" :index="index"></up-lazy-load>
					<view class="demo-title">
						{{item.title}}
					</view>
				</view>
			</template>
		</up-waterfall>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const flowList = ref([])
const uWaterfallRef = ref(null)

// 模拟数据请求
const getFlowList = () => {
	for (let i = 0; i < 10; i++) {
		flowList.value.push({
			id: i,
			title: '标题' + i,
			image: 'https://via.placeholder.com/200x300?text=Image' + i
		})
	}
}

// 清空数据
const clear = () => {
	uWaterfallRef.value.clear();
}
<\/script>

<style scoped>
.wrap {
	padding: 10px;
}
.demo-warter {
	margin-bottom: 10px;
}
.demo-title {
	font-size: 14px;
	padding: 5px;
}
</style>`,language:"vue",title:"完整应用示例"}),e(a,{id:"api"},{default:n(()=>[e(a,{href:"waterfall.html#api",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" API ")]),_:1}),e(a,{id:"indexbar-props"},{default:n(()=>[e(a,{href:"waterfall.html#indexbar-props",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" Props ")]),_:1}),e(a,null,{default:n(()=>[t("注意：通过"),l("code",null,"v-model"),t("双向绑定传递参数，因为组件内部需要修改父组件的值。")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"columns"),l("td",null,"瀑布流列数量"),l("td",null,"String | Number"),l("td",null,"2"),l("td",null,"支持数字和auto自动响应式判断")]),l("tr",null,[l("td",null,"columnsMin"),l("td",null,"瀑布流最小列数"),l("td",null,"String | Number"),l("td",null,"2"),l("td",null,"在auto模式下最小列数判断")]),l("tr",null,[l("td",null,"minColumnWidth"),l("td",null,"瀑布流最小列宽"),l("td",null,"Number"),l("td",null,"230"),l("td",null,"在auto模式下计算列数量")]),l("tr",null,[l("td",null,"add-time"),l("td",null,"单条数据添加到队列的时间间隔，单位ms"),l("td",null,"String | Number"),l("td",null,"200"),l("td",null,"-")]),l("tr",null,[l("td",null,"idKey"),l("td",null,"数据的唯一值的键名"),l("td",null,"String"),l("td",null,"id"),l("td",null,"-")])])]),e(a,{id:"methods"},{default:n(()=>[e(a,{href:"waterfall.html#methods",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" Methods ")]),_:1}),e(a,null,{default:n(()=>[t("这些为组件内部的方法，需要通过"),l("code",null,"ref"),t("调用")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"方法名"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"clear"),l("td",null,"清空列表数据")]),l("tr",null,[l("td",null,"remove(id)"),l("td",null,[l("code",null,"id"),t('为唯一的"id"值')])])])]),e(a,{id:"events-事件说明"},{default:n(()=>[e(a,{href:"waterfall.html#events-事件说明",class:"header-anchor"},{default:n(()=>[t("#")]),_:1}),t(" Events 事件说明 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"@after-add-one"),l("td",null,"单个节点添加后触发"),l("td",null,"-")]),l("tr",null,[l("td",null,"@after-add-all"),l("td",null,"所有节点添加后触发"),l("td",null,"-")])])])]),_:1})]),_:1})]),_:1})]),_:1})}const b=i(p,[["render",x],["__scopeId","data-v-22b09e8c"]]);export{b as default};
