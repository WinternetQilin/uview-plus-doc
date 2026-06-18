import{d as r,a as i,w as n,b as s,f as p,g as t,i as f,k as u,u as l,j as _,s as m}from"./index-C-vHpWRU.js";import{_ as d}from"./CodeBlock.WuTHDaQt.js";const h=`<template>
    <up-input
        v-model="value"
        placeholder="请输入内容"
        @change="change"
    ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

const change = (e) => {
    console.log('change', e);
}
<\/script>`,g=`<template>
    <up-input
        v-model="value1"
        type="text"
        placeholder="文本输入"
    ></up-input>
    <up-input
        v-model="value2"
        type="number"
        placeholder="数字输入"
    ></up-input>
    <up-input
        v-model="value3"
        type="password"
        placeholder="密码输入"
    ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
const value2 = ref('');
const value3 = ref('');
<\/script>`,b=`<template>
    <up-input
        v-model="value"
        placeholder="请输入内容"
        :clearable="true"
    ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`,v=`<template>
    <up-input
        v-model="value"
        placeholder="请输入内容"
        border="bottom"
    ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`,S=`<template>
    <up-input
        v-model="value"
        placeholder="请输入内容"
        prefix-icon="search"
        suffix-icon="camera"
    ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`,x=`<template>
    <up-input
        v-model="value"
        placeholder="请输入内容"
    >
        <template #prefix>
            <view class="prefix-slot">前缀</view>
        </template>
        <template #suffix>
            <view class="suffix-slot">后缀</view>
        </template>
    </up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
<\/script>`,w=r({__name:"input",setup(y){return(B,C)=>{const e=f,a=_,o=s("layout-default-uni"),c=s("global-ku-root");return p(),i(c,null,{default:n(()=>[t(o,null,{default:n(()=>[t(e,{class:"input-page"},{default:n(()=>[t(e,{class:"page-header"},{default:n(()=>[t(e,{class:"header-badge"},{default:n(()=>[u(" 表单组件 ")]),_:1}),t(e,{id:"input-输入框",class:"page-title"},{default:n(()=>[u(" Input 输入框 ")]),_:1}),t(e,{class:"page-desc"},{default:n(()=>[u(" 去除 "),l("code",null,"fixed"),u(" 、 "),l("code",null,"showWordLimit"),u(" 、 "),l("code",null,"showConfirmBar"),u(" 、 "),l("code",null,"disableDefaultPadding"),u(" 、 "),l("code",null,"autosize"),u(" 字段。此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件 "),l("code",null,"up-form"),u(" 而设计的。 ")]),_:1})]),_:1}),t(e,{class:"notice-card warning"},{default:n(()=>[t(e,{class:"notice-icon"},{default:n(()=>[u(" ! ")]),_:1}),t(e,{class:"notice-content"},{default:n(()=>[t(a,{class:"notice-title"},{default:n(()=>[u("注意")]),_:1}),t(a,null,{default:n(()=>[u(" 由于在 "),l("code",null,"nvue"),u(" 下， "),l("code",null,"u-input"),u(" 名称被 uni-app 官方占用，在 uview2 中官方使用 "),l("code",null,"u--input"),u(" 的方式解决，uview-plus 则统一将前缀改为形如 "),l("code",null,"up-input"),u(" 既兼容 nvue 也兼容 vue。 ")]),_:1})]),_:1})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"平台差异说明",class:"section-title"},{default:n(()=>[u(" 平台差异说明 ")]),_:1}),t(e,{class:"table-wrapper"},{default:n(()=>[l("table",{class:"platform-table"},[l("thead",null,[l("tr",null,[l("th",null,"App（vue）"),l("th",null,"App（nvue）"),l("th",null,"H5"),l("th",null,"小程序")])]),l("tbody",null,[l("tr",null,[l("td",null,[t(e,{class:"check-icon"},{default:n(()=>[u(" ✓ ")]),_:1})]),l("td",null,[t(e,{class:"check-icon"},{default:n(()=>[u(" ✓ ")]),_:1})]),l("td",null,[t(e,{class:"check-icon"},{default:n(()=>[u(" ✓ ")]),_:1})]),l("td",null,[t(e,{class:"check-icon"},{default:n(()=>[u(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"基本使用",class:"section-title"},{default:n(()=>[u(" 基本使用 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 通过 "),l("code",null,"type"),u(" 设置输入框的类型，默认 text ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 通过 "),l("code",null,"placeholder"),u(" 设置输入框为空时的占位符 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 通过 "),l("code",null,"border"),u(" 配置是否显示输入框的边框 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 绑定 "),l("code",null,"@change"),u(" 事件 ")]),_:1}),t(d,{title:"基本使用",language:"html",code:h})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"输入框的类型",class:"section-title"},{default:n(()=>[u(" 输入框的类型 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 综述：输入框的类型可通过配置 "),l("code",null,"type"),u(" 来设置： ")]),_:1}),t(e,{class:"list-items"},{default:n(()=>[t(e,null,{default:n(()=>[u("text - 文本输入键盘")]),_:1}),t(e,null,{default:n(()=>[u(" number - 数字输入键盘，app-vue 下可以输入浮点数，app-nvue 和小程序平台下只能输入整数 ")]),_:1}),t(e,null,{default:n(()=>[u("idcard - 身份证输入键盘，微信、支付宝、百度、QQ 小程序")]),_:1}),t(e,null,{default:n(()=>[u(" digit - 带小数点的数字键盘，App 的 nvue 页面、微信、支付宝、百度、头条、QQ 小程序 ")]),_:1}),t(e,null,{default:n(()=>[u(" password - 等同于设置 "),l("code",null,"password"),u(" 为 "),l("code",null,"true"),u(" 的效果 ")]),_:1})]),_:1}),t(d,{title:"输入框的类型",language:"html",code:g})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"可清空字符",class:"section-title"},{default:n(()=>[u(" 可清空字符 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 将 "),l("code",null,"clearable"),u(" 设置为 "),l("code",null,"true"),u(" ，会在输入框后方增加一个清空按钮。 ")]),_:1}),t(d,{title:"可清空字符",language:"html",code:b})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"下划线",class:"section-title"},{default:n(()=>[u(" 下划线 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 通过设置属性 "),l("code",null,"border"),u(" 为 "),l("code",null,"bottom"),u(" 即可变成一个下划线 ")]),_:1}),t(d,{title:"下划线样式",language:"html",code:v})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"前后图标",class:"section-title"},{default:n(()=>[u(" 前后图标 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 全后置图标可自由设置样式信息。 ")]),_:1}),t(d,{title:"前后图标",language:"html",code:S})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"前后插槽",class:"section-title"},{default:n(()=>[u(" 前后插槽 ")]),_:1}),t(e,{class:"section-desc"},{default:n(()=>[u(" 通过设置 "),l("code",null,"slot"),u(" 为 "),l("code",null,"prefix"),u(" 或 "),l("code",null,"suffix"),u(" 来指定前后插槽 ")]),_:1}),t(d,{title:"前后插槽",language:"html",code:x})]),_:1}),t(e,{class:"section"},{default:n(()=>[t(e,{id:"api",class:"section-title"},{default:n(()=>[u(" API ")]),_:1}),t(e,{id:"props",class:"subsection-title"},{default:n(()=>[u(" Props ")]),_:1}),t(e,{class:"table-wrapper"},{default:n(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"参数"),l("th",null,"说明"),l("th",null,"类型"),l("th",null,"默认值"),l("th",null,"可选值")])]),l("tbody",null,[l("tr",null,[l("td",null,"modelValue"),l("td",null,"输入的值"),l("td",null,"Number | String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"type"),l("td",null,"输入框类型，见上方说明"),l("td",null,"String"),l("td",null,"text"),l("td",null,"number | idcard | digit | password")]),l("tr",null,[l("td",null,"disabled"),l("td",null,"是否禁用输入框"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"disabledColor"),l("td",null,"禁用状态时的背景色"),l("td",null,"String"),l("td",null,"#f5f7fa"),l("td",null,"-")]),l("tr",null,[l("td",null,"clearable"),l("td",null,"是否显示清除控件"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"onlyClearableOnFocused"),l("td",null,"clearable 开启时是否仅聚焦时才显示清除控件"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")]),l("tr",null,[l("td",null,"password"),l("td",null,"是否密码类型"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"maxlength"),l("td",null,"最大输入长度，设置为 -1 的时候不限制最大长度"),l("td",null,"String | Number"),l("td",null,"140"),l("td",null,"-")]),l("tr",null,[l("td",null,"placeholder"),l("td",null,"输入框为空时的占位符"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"placeholderClass"),l("td",null,"指定 placeholder 的样式类"),l("td",null,"String"),l("td",null,"input-placeholder"),l("td",null,"-")]),l("tr",null,[l("td",null,"placeholderStyle"),l("td",null,"指定 placeholder 的样式，字符串/对象形式"),l("td",null,"String | Object"),l("td",null,"color: #c0c4cc"),l("td",null,"-")]),l("tr",null,[l("td",null,"showWordLimit"),l("td",null,"是否显示输入字数统计"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"confirmType"),l("td",null,"设置右下角按钮的文字"),l("td",null,"String"),l("td",null,"done"),l("td",null,"send | search | next | go | done")]),l("tr",null,[l("td",null,"confirmHold"),l("td",null,"点击键盘右下角按钮时是否保持键盘不收起"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"holdKeyboard"),l("td",null,"focus 时，点击页面的时候不收起键盘"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"focus"),l("td",null,"自动获取焦点"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"autoBlur"),l("td",null,"键盘收起时，是否自动失去焦点"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"disableDefaultPadding"),l("td",null,"是否去掉 iOS 下的默认内边距"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"cursor"),l("td",null,"指定 focus 时光标的位置"),l("td",null,"String | Number"),l("td",null,"-1"),l("td",null,"-")]),l("tr",null,[l("td",null,"cursorColor"),l("td",null,"输入框光标颜色"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"cursorSpacing"),l("td",null,"输入框聚焦时底部与键盘的距离"),l("td",null,"String | Number"),l("td",null,"30"),l("td",null,"-")]),l("tr",null,[l("td",null,"selectionStart"),l("td",null,"光标起始位置，自动聚集时有效"),l("td",null,"String | Number"),l("td",null,"-1"),l("td",null,"-")]),l("tr",null,[l("td",null,"selectionEnd"),l("td",null,"光标结束位置，自动聚集时有效"),l("td",null,"String | Number"),l("td",null,"-1"),l("td",null,"-")]),l("tr",null,[l("td",null,"adjustPosition"),l("td",null,"键盘弹起时，是否自动上推页面"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")]),l("tr",null,[l("td",null,"inputAlign"),l("td",null,"输入框内容对齐方式"),l("td",null,"String"),l("td",null,"left"),l("td",null,"left | center | right")]),l("tr",null,[l("td",null,"fontSize"),l("td",null,"输入框字体的大小"),l("td",null,"String | Number"),l("td",null,"15px"),l("td",null,"-")]),l("tr",null,[l("td",null,"color"),l("td",null,"输入框字体颜色"),l("td",null,"String"),l("td",null,"#303133"),l("td",null,"-")]),l("tr",null,[l("td",null,"prefixIcon"),l("td",null,"输入框前置图标"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"prefixIconStyle"),l("td",null,"前置图标样式，对象或字符串"),l("td",null,"String | Object"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"suffixIcon"),l("td",null,"输入框后置图标"),l("td",null,"String"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"suffixIconStyle"),l("td",null,"后置图标样式，对象或字符串"),l("td",null,"String | Object"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"border"),l("td",null,"边框类型"),l("td",null,"String"),l("td",null,"surround"),l("td",null,"bottom | none")]),l("tr",null,[l("td",null,"readonly"),l("td",null,"是否只读"),l("td",null,"Boolean"),l("td",null,"false"),l("td",null,"true")]),l("tr",null,[l("td",null,"shape"),l("td",null,"输入框形状"),l("td",null,"String"),l("td",null,"square"),l("td",null,"circle")]),l("tr",null,[l("td",null,"formatter"),l("td",null,"输入过滤或格式化函数"),l("td",null,"Function"),l("td",null,"null"),l("td",null,"-")]),l("tr",null,[l("td",null,"customStyle"),l("td",null,"定义需要用到的外部样式"),l("td",null,"Object"),l("td",null,"-"),l("td",null,"-")]),l("tr",null,[l("td",null,"passwordVisibilityToggle"),l("td",null,"是否显示右侧密码显示切换图标"),l("td",null,"Boolean"),l("td",null,"true"),l("td",null,"false")])])])]),_:1}),t(e,{id:"events",class:"subsection-title"},{default:n(()=>[u(" Events ")]),_:1}),t(e,{class:"table-wrapper"},{default:n(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"事件名"),l("th",null,"说明"),l("th",null,"回调参数")])]),l("tbody",null,[l("tr",null,[l("td",null,"blur"),l("td",null,"输入框失去焦点时触发"),l("td",null,"value：内容值")]),l("tr",null,[l("td",null,"focus"),l("td",null,"输入框聚焦时触发"),l("td",null,"-")]),l("tr",null,[l("td",null,"confirm"),l("td",null,"点击完成按钮时触发"),l("td",null,"value：内容值")]),l("tr",null,[l("td",null,"keyboardheightchange"),l("td",null,"键盘高度发生变化的时候触发此事件"),l("td",null,"-")]),l("tr",null,[l("td",null,"update:modelValue"),l("td",null,"内容发生变化触发此事件"),l("td",null,"value：内容值")]),l("tr",null,[l("td",null,"change"),l("td",null,"内容发生变化触发此事件"),l("td",null,"value：内容值")]),l("tr",null,[l("td",null,"clear"),l("td",null,"点击清空内容"),l("td",null,"-")])])])]),_:1}),t(e,{id:"methods",class:"subsection-title"},{default:n(()=>[u(" Methods ")]),_:1}),t(e,{class:"table-wrapper"},{default:n(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"方法名"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"setFormatter"),l("td",null,"为兼容微信小程序而暴露的内部方法")]),l("tr",null,[l("td",null,"doFocus"),l("td",null,"手动聚焦")]),l("tr",null,[l("td",null,"doBlur"),l("td",null,"手动 Blur")])])])]),_:1}),t(e,{id:"slots",class:"subsection-title"},{default:n(()=>[u(" Slots ")]),_:1}),t(e,{class:"table-wrapper"},{default:n(()=>[l("table",{class:"api-table"},[l("thead",null,[l("tr",null,[l("th",null,"插槽名"),l("th",null,"说明")])]),l("tbody",null,[l("tr",null,[l("td",null,"prefix"),l("td",null,"输入框前置插槽")]),l("tr",null,[l("td",null,"suffix"),l("td",null,"输入框后置插槽")])])])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),I=m(w,[["__scopeId","data-v-13c3d9ad"]]);export{I as default};
