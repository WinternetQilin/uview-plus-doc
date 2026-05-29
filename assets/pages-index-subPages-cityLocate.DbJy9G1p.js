import{s as r,a as i,w as e,b as d,f as h,g as l,i as f,u as t,j as _,k as n,h as p}from"./index-CRHsRVm2.js";const y={};function m(g,b){const a=_,u=f,c=p,o=d("layout-default-uni"),s=d("global-ku-root");return h(),i(s,null,{default:e(()=>[l(o,null,{default:e(()=>[l(u,{class:"cityLocate-page"},{default:e(()=>[l(u,{class:"theme-default-content content__default"},{default:e(()=>[l(a,{id:"citylocate-城市定位选择"},{default:e(()=>[l(a,{href:"cityLocate.html#citylocate-城市定位选择",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" CityLocate 城市定位选择 "),l(a,{class:"badge tip"},{default:e(()=>[n("3.4.55")]),_:1})]),_:1}),l(a,null,{default:e(()=>[t("code",null,"city-locate"),n(" 是一个城市定位与选择组件，集成了城市定位、热门城市展示和城市列表索引功能，适用于需要城市选择功能的场景。 ")]),_:1}),l(a,{id:"平台差异说明"},{default:e(()=>[l(a,{href:"cityLocate.html#平台差异说明",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"基本使用"},{default:e(()=>[l(a,{href:"cityLocate.html#基本使用",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),t("pre",null,[t("code",null,`<template>
  <up-city-locate />
</template>`)]),l(a,{id:"组件特性"},{default:e(()=>[l(a,{href:"cityLocate.html#组件特性",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 组件特性 ")]),_:1}),l(u,null,{default:e(()=>[l(u,null,{default:e(()=>[t("strong",null,"自动定位"),n("：组件加载后自动获取用户当前位置 ")]),_:1}),l(u,null,{default:e(()=>[t("strong",null,"热门城市展示"),n("：支持自定义热门城市列表 ")]),_:1}),l(u,null,{default:e(()=>[t("strong",null,"字母索引"),n("：支持右侧字母导航快速定位 ")]),_:1}),l(u,null,{default:e(()=>[t("strong",null,"自定义数据结构"),n("：灵活适配不同后端数据格式 ")]),_:1}),l(u,null,{default:e(()=>[t("strong",null,"多平台支持"),n("：兼容uni-app所有平台 ")]),_:1})]),_:1}),l(a,{id:"使用示例"},{default:e(()=>[l(a,{href:"cityLocate.html#使用示例",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 使用示例 ")]),_:1}),l(a,{id:"自定义数据结构"},{default:e(()=>[l(a,{href:"cityLocate.html#自定义数据结构",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 自定义数据结构 ")]),_:1}),t("pre",null,[t("code",null,`<template>
  <up-city-locate
    :cityList="customData"
    nameKey="cityName"
  />
</template>

<script setup>
import { ref } from 'vue';

const customData = ref([
  [
    { cityName: '北京', value: 'beijing' },
    { cityName: '上海', value: 'shanghai' }
  ]
]);
<\/script>`)]),l(a,{id:"外部控制当前城市"},{default:e(()=>[l(a,{href:"cityLocate.html#外部控制当前城市",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 外部控制当前城市 ")]),_:1}),t("pre",null,[t("code",null,`<template>
  <up-city-locate
    :currentCity="userCity"
  />
</template>

<script setup>
import { ref } from 'vue';

const userCity = ref('北京');
<\/script>`)]),l(a,{id:"设置定位类型"},{default:e(()=>[l(a,{href:"cityLocate.html#设置定位类型",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 设置定位类型 ")]),_:1}),t("pre",null,[t("code",null,`<template>
  <up-city-locate
    locationType="gcj02"
  />
</template>`)]),l(a,{id:"监听定位结果"},{default:e(()=>[l(a,{href:"cityLocate.html#监听定位结果",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 监听定位结果 ")]),_:1}),t("pre",null,[t("code",null,`<template>
  <up-city-locate
    @location-success="handleLocationResult"
  />
</template>

<script setup>
const handleLocationResult = (res) => {
  console.log('定位结果:', res);
};
<\/script>`)]),l(a,{id:"api"},{default:e(()=>[l(a,{href:"cityLocate.html#api",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" API ")]),_:1}),l(a,{id:"props-属性"},{default:e(()=>[l(a,{href:"cityLocate.html#props-属性",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Props 属性 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"可选值")])]),t("tbody",null,[t("tr",null,[t("td",null,"indexList"),t("td",null,"索引列表，用于右侧字母导航"),t("td",null,"Array"),t("td",null,[t("code",null,"['城市']")]),t("td",null,"-")]),t("tr",null,[t("td",null,"cityList"),t("td",null,"城市数据列表，数组第一项为热门城市"),t("td",null,"Array"),t("td",null,[t("code",null,"[[{name: '北京', value: 'beijing'}, ...]]")]),t("td",null,"-")]),t("tr",null,[t("td",null,"locationType"),t("td",null,"定位类型"),t("td",null,"String"),t("td",null,[t("code",null,"'wgs84'")]),t("td",null,[t("code",null,"gcj02"),n(" 等")])]),t("tr",null,[t("td",null,"currentCity"),t("td",null,"当前城市名称（外部传入）"),t("td",null,"String"),t("td",null,[t("code",null,"''")]),t("td",null,"-")]),t("tr",null,[t("td",null,"nameKey"),t("td",null,"城市对象中用于显示名称的键名"),t("td",null,"String"),t("td",null,[t("code",null,"'name'")]),t("td",null,"-")])])]),l(a,{id:"events-事件"},{default:e(()=>[l(a,{href:"cityLocate.html#events-事件",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Events 事件 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"location-success"),t("td",null,"定位成功时触发"),t("td",null,[t("code",null,"{...res, locationCity: string}")])]),t("tr",null,[t("td",null,"select-city"),t("td",null,"用户选择城市时触发"),t("td",null,[t("code",null,"{locationCity: string}")])])])]),l(a,{id:"slots-插槽"},{default:e(()=>[l(a,{href:"cityLocate.html#slots-插槽",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" Slots 插槽 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"插槽名"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"header"),t("td",null,"组件顶部自定义内容")]),t("tr",null,[t("td",null,"footer"),t("td",null,"组件底部自定义内容")])])]),l(a,{id:"注意事项"},{default:e(()=>[l(a,{href:"cityLocate.html#注意事项",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 注意事项 ")]),_:1}),l(u,null,{default:e(()=>[l(u,null,{default:e(()=>[n("组件会在 mounted 生命周期自动触发定位功能")]),_:1}),l(u,null,{default:e(()=>[n('定位失败时会显示"定位失败，请点击重试"，用户可以点击重试')]),_:1}),l(u,null,{default:e(()=>[n(" 城市列表数据结构： "),l(u,null,{default:e(()=>[l(u,null,{default:e(()=>[n("第一维数组：字母分类")]),_:1}),l(u,null,{default:e(()=>[n("第二维数组：该分类下的城市列表")]),_:1}),l(u,null,{default:e(()=>[n("第一项（index=0）为热门城市")]),_:1})]),_:1})]),_:1})]),_:1}),l(a,{id:"右侧演示页面源代码地址"},{default:e(()=>[l(a,{href:"cityLocate.html#右侧演示页面源代码地址",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 右侧演示页面源代码地址 ")]),_:1}),l(u,{class:"custom-block tip"},{default:e(()=>[l(a,{class:"custom-block-title"},{default:e(()=>[n(" 点击以下链接以查看右侧演示页面的源码 ")]),_:1}),t("br"),l(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/cityLocate/cityLocate.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:e(()=>[l(c,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),n(" github ")]),_:1}),l(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/cityLocate/cityLocate.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:e(()=>[l(c,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),n(" gitee ")]),_:1}),t("br")]),_:1}),l(a,{id:"常见问题"},{default:e(()=>[l(a,{href:"cityLocate.html#常见问题",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 常见问题 ")]),_:1}),l(a,{id:"如何获取用户选择的城市"},{default:e(()=>[l(a,{href:"cityLocate.html#如何获取用户选择的城市",class:"header-anchor"},{default:e(()=>[n("#")]),_:1}),n(" 如何获取用户选择的城市？ ")]),_:1}),l(a,null,{default:e(()=>[n(" 通过监听 "),t("code",null,"select-city"),n(" 事件获取用户选择的城市： ")]),_:1}),t("pre",null,[t("code",null,`const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}`)])]),_:1})]),_:1})]),_:1})]),_:1})}const x=r(y,[["render",m],["__scopeId","data-v-f8afe505"]]);export{x as default};
