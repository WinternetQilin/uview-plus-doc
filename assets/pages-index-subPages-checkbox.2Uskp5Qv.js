import{d as r,a as b,w as t,b as o,f as p,g as e,i as h,k as u,u as l,h as f,j as m,s as k}from"./index-C-vHpWRU.js";import{_ as c}from"./CodeBlock.WuTHDaQt.js";const x=`<template>
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
<\/script>`,_=`<template>
    <up-checkbox
        v-model="checked"
        label="我已同意"
        iconPlacement="right"
        @change="change"
    >
    </up-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);

const change = (e) => {
    console.log('change', e);
}
<\/script>`,g=`<template>
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
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`,v=`<template>
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
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);
<\/script>`,C=`<template>
    <up-checkbox-group v-model="checked" activeColor="#ff0000">
        <up-checkbox label="红色" name="1">
        </up-checkbox>
        <up-checkbox label="绿色" name="2">
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checked = reactive(['1']);
<\/script>`,S=`<template>
    <up-checkbox-group v-model="checkboxValue1" placement="row">
        <up-checkbox label="横向排列" name="1">
        </up-checkbox>
        <up-checkbox label="横向排列" name="2">
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`,y=`<template>
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
</template>`,V=r({__name:"checkbox",setup(w){return(B,A)=>{const n=h,d=f,a=m,s=o("layout-default-uni"),i=o("global-ku-root");return p(),b(i,null,{default:t(()=>[e(s,null,{default:t(()=>[e(n,{class:"checkbox-page"},{default:t(()=>[e(n,{class:"page-header"},{default:t(()=>[e(n,{class:"header-badge"},{default:t(()=>[u(" 表单组件 ")]),_:1}),e(n,{id:"checkbox-复选框",class:"page-title"},{default:t(()=>[u(" Checkbox 复选框 ")]),_:1}),e(n,{class:"page-desc"},{default:t(()=>[u(" 复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便 ")]),_:1})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"平台差异说明",class:"section-title"},{default:t(()=>[u(" 平台差异说明 ")]),_:1}),e(n,{class:"table-wrapper"},{default:t(()=>[l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",null,"App（vue）"),l("th",null,"App（nvue）"),l("th",null,"H5"),l("th",null,"小程序")])]),l("tbody",null,[l("tr",null,[l("td",null,[e(n,{class:"check-icon"},{default:t(()=>[u(" √ ")]),_:1})]),l("td",null,[e(n,{class:"check-icon"},{default:t(()=>[u(" √ ")]),_:1})]),l("td",null,[e(n,{class:"check-icon"},{default:t(()=>[u(" √ ")]),_:1})]),l("td",null,[e(n,{class:"check-icon"},{default:t(()=>[u(" √ ")]),_:1})])])])])]),_:1})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"基本使用",class:"section-title"},{default:t(()=>[u(" 基本使用 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 通过 "),l("code",null,"v-model"),u(" 绑定选中的值， "),l("code",null,"up-checkbox"),u(" 需要配合 "),l("code",null,"up-checkbox-group"),u(" 使用 ")]),_:1}),e(c,{title:"基本使用",language:"html",code:x})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"独立使用up-checkbox",class:"section-title"},{default:t(()=>[u(" 独立使用 up-checkbox ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 通过 "),l("code",null,"usedAlone"),u(" 可以设置独立使用，如果不使用 "),l("code",null,"usedAlone"),u(" ，需配合 "),l("code",null,"up-checkbox-group"),u(" 组件使用 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 独立使用 "),l("code",null,"up-checkbox"),u(" 时，必须通过 "),l("code",null,"v-model"),u(" 绑定一个布尔值的变量，否则无法操作 ")]),_:1}),e(c,{title:"独立使用 up-checkbox",language:"html",code:_})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"自定义形状",class:"section-title"},{default:t(()=>[u(" 自定义形状 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 通过 "),l("code",null,"shape"),u(" 可以设置选择形状 ")]),_:1}),e(c,{title:"自定义形状",language:"html",code:g})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"禁用checkbox",class:"section-title"},{default:t(()=>[u(" 禁用 checkbox ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 设置 "),l("code",null,"disabled"),u(" 为 "),l("code",null,"true"),u(" ，即可禁用某个组件，让用户无法点击，禁用分为两种状态：一是未勾选前禁用，这时只显示一个灰色的区域；二是已勾选后禁用（选中状态），会显示一个灰色的勾选图标。 ")]),_:1}),e(c,{title:"禁用 checkbox",language:"html",code:v})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"自定义颜色",class:"section-title"},{default:t(()=>[u(" 自定义颜色 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 此处所指的颜色，为 "),l("code",null,"checkbox"),u(" 选中时的背景颜色，参数为 "),l("code",null,"activeColor")]),_:1}),e(c,{title:"自定义颜色",language:"html",code:C})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"横向排列形式",class:"section-title"},{default:t(()=>[u(" 横向排列形式 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 可以通过设置 "),l("code",null,"placement"),u(" 为 "),l("code",null,"row"),u(" 或者 "),l("code",null,"column"),u(" ，将复选框设置为横向排列或者竖向排列 ")]),_:1}),e(c,{title:"横向排列形式",language:"html",code:S})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"自定义样式",class:"section-title"},{default:t(()=>[u(" 自定义样式 ")]),_:1}),e(n,{class:"section-desc"},{default:t(()=>[u(" 组件支持多种自定义样式，您可以通过传递对应的属性来自定义复选框和标签的样式 ")]),_:1}),e(n,{class:"list-items"},{default:t(()=>[e(n,null,{default:t(()=>[u(" 通过 "),l("code",null,"shape"),u(" 设置复选框的形状 ")]),_:1}),e(n,null,{default:t(()=>[u(" 通过 "),l("code",null,"size"),u(" 设置整体的大小 ")]),_:1}),e(n,null,{default:t(()=>[u(" 通过 "),l("code",null,"activeColor"),u(" 设置选中状态下的颜色 ")]),_:1}),e(n,null,{default:t(()=>[u(" 通过 "),l("code",null,"inactiveColor"),u(" 设置未选中的颜色 ")]),_:1}),e(n,null,{default:t(()=>[u(" 通过 "),l("code",null,"label"),u(" 来设置 label 提示文字 ")]),_:1})]),_:1}),e(c,{title:"自定义样式",language:"html",code:y})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"右侧演示页面源代码地址",class:"section-title"},{default:t(()=>[u(" 右侧演示页面源代码地址 ")]),_:1}),e(n,{class:"link-card"},{default:t(()=>[e(n,{class:"link-content"},{default:t(()=>[e(d,{class:"link-icon",height:"24",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",width:"24"}),e(a,null,{default:t(()=>[u("点击以下链接以查看右侧演示页面的源码")]),_:1})]),_:1}),e(n,{class:"link-actions"},{default:t(()=>[e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.vue",target:"_blank"},{default:t(()=>[u(" GitHub ")]),_:1}),e(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.nvue",target:"_blank"},{default:t(()=>[u(" Gitee ")]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{class:"section"},{default:t(()=>[e(n,{id:"api",class:"section-title"},{default:t(()=>[u(" API ")]),_:1}),e(n,{id:"checkbox-props",class:"subsection-title"},{default:t(()=>[u(" Checkbox Props ")]),_:1}),e(n,{class:"table-wrapper"},{default:t(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"name"),l("td",null,"checkbox 的名称"),l("td",null,"String | Number | Boolean"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"shape"),l("td",null,"形状，square 为方形，circle 为圆型"),l("td",null,"String"),l("td",null,"square"),l("td",null,"circle")]),l("tr",null,[l("td",null,"size"),l("td",null,"整体的大小"),l("td",null,"String | Number"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"checked"),l("td",null,"是否默认选中"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"disabled"),l("td",null,"是否禁用"),l("td",null,"String | Boolean"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"activeColor"),l("td",null,"选中状态下的颜色，如设置此值，将会覆盖 parent 的 activeColor 值"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"inactiveColor"),l("td",null,"未选中的颜色"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"iconSize"),l("td",null,"图标的大小，单位 px"),l("td",null,"String | Number"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"iconColor"),l("td",null,"图标颜色"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"label"),l("td",null," label 提示文字，因为 nvue 下，直接 slot 进来的文字，由于特殊的结构，无法修改样式 "),l("td",null,"String | Number"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelSize"),l("td",null,"label 的字体大小，px 单位"),l("td",null,"String | Number"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelColor"),l("td",null,"label 的颜色"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelDisabled"),l("td",null,"是否禁止点击提示语选中复选框"),l("td",null,"String | Boolean"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"usedAlone"),l("td",null,"是否独立使用复选框"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")])])])]),_:1}),e(n,{id:"checkboxgroup-props",class:"subsection-title"},{default:t(()=>[u(" CheckboxGroup Props ")]),_:1}),e(n,{class:"table-wrapper"},{default:t(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"name"),l("td",null,"标识符"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"modelValue"),l("td",null,"绑定的值"),l("td",null,"Array"),l("td",null,"[]"),l("td",null,"-")]),l("tr",null,[l("td",null,"shape"),l("td",null,"形状，circle-圆形，square-方形"),l("td",null,"String"),l("td",null,"square"),l("td",null,"circle")]),l("tr",null,[l("td",null,"disabled"),l("td",null,"是否禁用全部 checkbox"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"activeColor"),l("td",null,"选中状态下的颜色，如子 Checkbox 组件设置此值，将会覆盖本值"),l("td",null,"String"),l("td",null,"#2979ff"),l("td",null,"-")]),l("tr",null,[l("td",null,"inactiveColor"),l("td",null,"未选中的颜色"),l("td",null,"String"),l("td",null,"#c8c9cc"),l("td",null,"-")]),l("tr",null,[l("td",null,"size"),l("td",null,"整个组件的尺寸，默认 px"),l("td",null,"String"),l("td",null,"18"),l("td",null,"-")]),l("tr",null,[l("td",null,"label"),l("td",null,"文本"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelColor"),l("td",null,"label 的字体颜色"),l("td",null,"String"),l("td",null,"#303133"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelSize"),l("td",null,"label 的字体大小，px 单位"),l("td",null,"String | Number"),l("td",null,"14"),l("td",null,"-")]),l("tr",null,[l("td",null,"labelDisabled"),l("td",null,"是否禁止点击文本操作"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"iconColor"),l("td",null,"图标颜色"),l("td",null,"String"),l("td",null,"#ffffff"),l("td",null,"-")]),l("tr",null,[l("td",null,"iconSize"),l("td",null,"图标的大小，单位 px"),l("td",null,"String | Number"),l("td",null,"12"),l("td",null,"-")]),l("tr",null,[l("td",null,"iconPlacement"),l("td",null,"勾选图标的对齐方式，left-左边，right-右边"),l("td",null,"String"),l("td",null,"left"),l("td",null,"right")]),l("tr",null,[l("td",null,"borderBottom"),l("td",null,"竖向配列时，是否显示下划线"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")])])])]),_:1}),e(n,{id:"checkbox-slot",class:"subsection-title"},{default:t(()=>[u(" Checkbox Slot ")]),_:1}),e(n,{class:"table-wrapper"},{default:t(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"名称"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,[u(" icon "),e(a,{class:"version-badge"},{default:t(()=>[u("3.2.25")]),_:1})]),l("td",null,"自定义 icon 内容")]),l("tr",null,[l("td",null,[u(" label "),e(a,{class:"version-badge"},{default:t(()=>[u("3.2.25")]),_:1})]),l("td",null,"自定义 label 内容")])])])]),_:1}),e(n,{id:"checkboxgroup-event",class:"subsection-title"},{default:t(()=>[u(" CheckboxGroup Event ")]),_:1}),e(n,{class:"table-wrapper"},{default:t(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"change"),l("td",null,"任一个 checkbox 状态发生变化时触发，回调为一个对象"),l("td",null," detail = array( [元素为被选中的 checkbox 的 name], object { name: 当前点击的 checkbox 的 name, isChecked: 当前点击的 checkbox 是否选中 } ) ")])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),q=k(V,[["__scopeId","data-v-b9d3329d"]]);export{q as default};
