import{s as u,a as f,w as n,b as s,f as x,g as l,i as r,u as t,j as g,k as e,h}from"./index-CRHsRVm2.js";const y={};function b(p,m){const a=g,i=h,c=r,d=s("layout-default-uni"),o=s("global-ku-root");return x(),f(o,null,{default:n(()=>[l(d,null,{default:n(()=>[l(c,{class:"checkbox-page"},{default:n(()=>[l(c,{class:"theme-default-content content__default"},{default:n(()=>[l(a,{id:"checkbox-复选框"},{default:n(()=>[l(a,{href:"checkbox.html#checkbox-复选框",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" Checkbox 复选框 "),l(a,{href:"checkbox.html#api",class:"anchor"},{default:n(()=>[l(i,{src:"https://uview-plus.jiangruyi.com/common/to_api.png"})]),_:1})]),_:1}),l(a,null,{default:n(()=>[e("复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便")]),_:1}),l(a,{id:"平台差异说明"},{default:n(()=>[l(a,{href:"checkbox.html#平台差异说明",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 平台差异说明 ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"基本使用"},{default:n(()=>[l(a,{href:"checkbox.html#基本使用",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 基本使用 ")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group
            v-model="checkboxValue1"
            placement="column"
            @change="checkboxChange"
        >
            <up-checkbox
                :customStyle="{marginBottom: '10px'}"
                v-for="(item, index) in checkboxList1"
                :key="index"
                :label="item.name"
                :name="item.name"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);

const checkboxList1 = reactive([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
]);

const checkboxChange = (n) => {
  console.log('change', n);
}
<\/script>`)]),l(a,{id:"独立使用up-checkbox"},{default:n(()=>[l(a,{href:"checkbox.html#独立使用up-checkbox",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 独立使用up-checkbox ")]),_:1}),l(c,null,{default:n(()=>[l(c,null,{default:n(()=>[e(" 通过"),t("code",null,"usedAlone"),e("可以设置独立使用，如果不使用"),t("code",null,"usedAlone"),e("，需配合"),t("code",null,"up-checkbox-group"),e("组件使用 ")]),_:1}),l(c,null,{default:n(()=>[e(" 独立使用"),t("code",null,"up-checkbox"),e("时，必须通过"),t("code",null,"v-model"),e("绑定一个布尔值的变量，否则无法操作 ")]),_:1})]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox
            v-model="checked"
            label="我已同意"
            iconPlacement="right"
            @change="change"
        >
        </up-checkbox>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);

const change = (e) => {
    console.log('change', e);
}
<\/script>`)]),l(a,{id:"自定义形状"},{default:n(()=>[l(a,{href:"checkbox.html#自定义形状",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 自定义形状 ")]),_:1}),l(c,null,{default:n(()=>[l(c,null,{default:n(()=>[e("通过"),t("code",null,"shape"),e("可以设置选择形状")]),_:1})]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group v-model="checkboxValue1">
            <up-checkbox
                shape="circle"
                label="圆形"
                name="1"
            >
            </up-checkbox>
            <up-checkbox
                shape="square"
                label="方形"
                name="2"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`)]),l(a,{id:"禁用checkbox"},{default:n(()=>[l(a,{href:"checkbox.html#禁用checkbox",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 禁用checkbox ")]),_:1}),l(a,null,{default:n(()=>[e("设置"),t("code",null,"disabled"),e("为"),t("code",null,"true"),e("，即可禁用某个组件，让用户无法点击，禁用分为两种状态，一是未勾选前禁用，这时只显示一个灰色的区域。二是已勾选后禁用(选中状态)，会显示一个灰色的勾选图标。")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group v-model="checkboxValue1">
            <up-checkbox
                :disabled="true"
                label="禁用"
                name="1"
            >
            </up-checkbox>
            <up-checkbox
                label="未禁用"
                name="2"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);
<\/script>`)]),l(a,{id:"自定义颜色"},{default:n(()=>[l(a,{href:"checkbox.html#自定义颜色",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 自定义颜色 ")]),_:1}),l(a,null,{default:n(()=>[e("此处所指的颜色，为"),t("code",null,"checkbox"),e("选中时的背景颜色，参数为"),t("code",null,"activeColor")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group v-model="checked" activeColor="#ff0000">
            <up-checkbox label="红色" name="1">
            </up-checkbox>
            <up-checkbox label="绿色" name="2">
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checked = reactive(['1']);
<\/script>`)]),l(a,{id:"横向排列形式"},{default:n(()=>[l(a,{href:"checkbox.html#横向排列形式",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 横向排列形式 ")]),_:1}),l(a,null,{default:n(()=>[e("可以通过设置"),t("code",null,"placement"),e("为"),t("code",null,"row"),e("或者"),t("code",null,"column"),e("，将复选框设置为横向排列或者竖向排列")]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group v-model="checkboxValue1" placement="row">
            <up-checkbox label="横向排列" name="1">
            </up-checkbox>
            <up-checkbox label="横向排列" name="2">
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`)]),l(a,{id:"自定义样式"},{default:n(()=>[l(a,{href:"checkbox.html#自定义样式",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 自定义样式 ")]),_:1}),l(a,null,{default:n(()=>[e(" 组件支持多种自定义样式，您可以通过传递对应的属性来自定义复选框和标签的样式，如下所示： ")]),_:1}),l(c,null,{default:n(()=>[l(c,null,{default:n(()=>[e("通过"),t("code",null,"shape"),e("设置复选框的形状")]),_:1}),l(c,null,{default:n(()=>[e("通过"),t("code",null,"size"),e("设置整体的大小")]),_:1}),l(c,null,{default:n(()=>[e("通过"),t("code",null,"activeColor"),e("设置选中状态下的颜色")]),_:1}),l(c,null,{default:n(()=>[e("通过"),t("code",null,"inactiveColor"),e("设置未选中的颜色")]),_:1}),l(c,null,{default:n(()=>[e("通过"),t("code",null,"label"),e("来设置label提示文字")]),_:1})]),_:1}),t("pre",null,[t("code",null,`<template>
    <view>
        <up-checkbox-group v-model="checkboxValue1">
            <up-checkbox
                shape="circle"
                activeColor="#ff0000"
                label="自定义颜色"
                name="1"
            >
            </up-checkbox>
            <up-checkbox
                size="24"
                label="自定义大小"
                name="2"
            >
            </up-checkbox>
        </up-checkbox-group>
    </view>
</template>`)]),l(a,{id:"右侧演示页面源代码地址"},{default:n(()=>[l(a,{href:"checkbox.html#右侧演示页面源代码地址",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 右侧演示页面源代码地址 ")]),_:1}),l(c,{class:"custom-block tip"},{default:n(()=>[l(a,{class:"custom-block-title"},{default:n(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),l(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.vue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:n(()=>[l(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),e(" github ")]),_:1}),l(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:n(()=>[l(i,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"gitee",width:"30"}),e(" gitee ")]),_:1}),t("br")]),_:1}),l(a,{id:"api"},{default:n(()=>[l(a,{href:"checkbox.html#api",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" API ")]),_:1}),l(a,{id:"checkbox-props"},{default:n(()=>[l(a,{href:"checkbox.html#checkbox-props",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" Checkbox Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," name "),t("td",{style:{"text-align":"left"}}," checkbox的名称 "),t("td",{style:{"text-align":"left"}}," String | Number | Boolean "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," shape "),t("td",{style:{"text-align":"left"}}," 形状，square为方形，circle为圆型 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," square "),t("td",{style:{"text-align":"left"}}," circle ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," size "),t("td",{style:{"text-align":"left"}}," 整体的大小 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," checked "),t("td",{style:{"text-align":"left"}}," 是否默认选中 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," disabled "),t("td",{style:{"text-align":"left"}}," 是否禁用 "),t("td",{style:{"text-align":"left"}}," String | Boolean "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," activeColor "),t("td",{style:{"text-align":"left"}}," 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," inactiveColor "),t("td",{style:{"text-align":"left"}}," 未选中的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," iconSize "),t("td",{style:{"text-align":"left"}}," 图标的大小，单位px "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," iconColor "),t("td",{style:{"text-align":"left"}}," 图标颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," label "),t("td",{style:{"text-align":"left"}}," label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelSize "),t("td",{style:{"text-align":"left"}}," label的字体大小，px单位 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelColor "),t("td",{style:{"text-align":"left"}}," label的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelDisabled "),t("td",{style:{"text-align":"left"}}," 是否禁止点击提示语选中复选框 "),t("td",{style:{"text-align":"left"}}," String | Boolean "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," usedAlone "),t("td",{style:{"text-align":"left"}}," 是否独立使用复选框 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")])])]),l(a,{id:"checkboxgroup-props"},{default:n(()=>[l(a,{href:"checkbox.html#checkboxgroup-props",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" CheckboxGroup Props ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," name "),t("td",{style:{"text-align":"left"}}," 标识符 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," modelValue "),t("td",{style:{"text-align":"left"}}," 绑定的值 "),t("td",{style:{"text-align":"left"}}," Array "),t("td",{style:{"text-align":"left"}}," [] "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," shape "),t("td",{style:{"text-align":"left"}}," 形状，circle-圆形，square-方形 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," square "),t("td",{style:{"text-align":"left"}}," circle ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," disabled "),t("td",{style:{"text-align":"left"}}," 是否禁用全部checkbox "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," activeColor "),t("td",{style:{"text-align":"left"}}," 选中状态下的颜色，如子Checkbox组件设置此值，将会覆盖本值 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #2979ff "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," inactiveColor "),t("td",{style:{"text-align":"left"}}," 未选中的颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #c8c9cc "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," size "),t("td",{style:{"text-align":"left"}}," 整个组件的尺寸，默认px "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," 18 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," placement "),t("td",{style:{"text-align":"left"}}," 布局方式，row-横向，column-纵向 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," row "),t("td",{style:{"text-align":"left"}}," column ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelSize "),t("td",{style:{"text-align":"left"}}," label的字体大小，px单位 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 14 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelColor "),t("td",{style:{"text-align":"left"}}," label的字体颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #303133 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," labelDisabled "),t("td",{style:{"text-align":"left"}}," 是否禁止点击文本操作 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," iconColor "),t("td",{style:{"text-align":"left"}}," 图标颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #ffffff "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," iconSize "),t("td",{style:{"text-align":"left"}}," 图标的大小，单位px "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 12 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," iconPlacement "),t("td",{style:{"text-align":"left"}}," 勾选图标的对齐方式，left-左边，right-右边 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," left "),t("td",{style:{"text-align":"left"}}," right ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," borderBottom "),t("td",{style:{"text-align":"left"}}," 竖向配列时，是否显示下划线 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")])])]),l(a,{id:"checkbox-slot"},{default:n(()=>[l(a,{href:"checkbox.html#checkbox-slot",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" Checkbox Slot ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 名称 "),t("th",{style:{"text-align":"left"}}," 说明 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" icon "),l(a,{class:"badge tip"},{default:n(()=>[e("3.2.25")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自定义icon内容 ")]),t("tr",null,[t("td",{style:{"text-align":"left"}},[e(" label "),l(a,{class:"badge tip"},{default:n(()=>[e("3.2.25")]),_:1})]),t("td",{style:{"text-align":"left"}}," 自定义label内容 ")])])]),l(a,{id:"checkboxgroup-event"},{default:n(()=>[l(a,{href:"checkbox.html#checkboxgroup-event",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" CheckboxGroup Event ")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," change "),t("td",{style:{"text-align":"left"}}," 任一个checkbox状态发生变化时触发，回调为一个对象 "),t("td",{style:{"text-align":"left"}}," detail = array( [元素为被选中的checkbox的name], object { name: 当前点击的checkbox的name, isChecked: 当前点击的checkbox是否选中 } ) ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}const _=u(y,[["render",b],["__scopeId","data-v-c595d219"]]);export{_ as default};
