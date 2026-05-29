import{d as f,a as g,w as l,b as i,f as c,g as e,i as p,u as t,j as x,k as n,h as y,s as _}from"./index-CRHsRVm2.js";import{_ as d}from"./CodeBlock.BlRjy5Lx.js";const m=`<template>
    <up-read-more>
        <rich-text :nodes="content"></rich-text>
    </up-read-more>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref(\`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`);
/<\/script>`,h=`<template>
    <up-read-more ref="uReadMoreRef">
        <up-parse :content="content" @load="load"></up-parse>
    </up-read-more>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const content = ref(\`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`);

const uReadMoreRef = ref(null);

function load() {
    if (uReadMoreRef.value) {
        uReadMoreRef.value.init();
    }
}

onMounted(() => {
    load();
});
<\/script>`,b=`<template>
    <up-read-more :toggle="true">
        <rich-text :nodes="content"></rich-text>
    </up-read-more>
</template>`,v=`<template>
    <up-read-more showHeight="600">
        <rich-text :nodes="content"></rich-text>
    </up-read-more>
</template>`,M=`<template>
    <up-read-more ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
    </up-read-more>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const content = ref('');

const uReadMoreRef = ref(null);

onMounted(() => {
    setTimeout(() => {
        content.value = \`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`;
        
        if (uReadMoreRef.value) {
            uReadMoreRef.value.init();
        }
    }, 1000);
});
<\/script>`,R=`const shadowStyle = {
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0) 0%, #fff 100%)',
}`,w=f({__name:"readMore",setup(C){return(k,S)=>{const a=x,o=p,s=y,r=i("layout-default-uni"),u=i("global-ku-root");return c(),g(u,null,{default:l(()=>[e(r,null,{default:l(()=>[e(o,{class:"readMore-page"},{default:l(()=>[e(o,{class:"theme-default-content content__default"},{default:l(()=>[e(a,{id:"readmore-展开阅读更多"},{default:l(()=>[n("ReadMore 展开阅读更多")]),_:1}),e(o,{class:"demo-placeholder"},{default:l(()=>[e(a,null,{default:l(()=>[n("此处应展示 ReadMore 展开阅读更多 组件的交互式演示")]),_:1}),e(a,{class:"placeholder-tip"},{default:l(()=>[n(" 演示地址："),e(a,{href:"https://ijry.github.io/uview-plus/text/#/pages/componentsC/readMore/readMore",target:"_blank"},{default:l(()=>[n(" https://ijry.github.io/uview-plus/text/#/pages/componentsC/readMore/readMore ")]),_:1})]),_:1})]),_:1}),e(a,null,{default:l(()=>[n("该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。")]),_:1}),e(a,{id:"平台差异说明"},{default:l(()=>[n("平台差异说明")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App（vue） "),t("th",{style:{"text-align":"center"}}," App（nvue） "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),e(a,{id:"基本使用"},{default:l(()=>[n("基本使用")]),_:1}),e(a,null,{default:l(()=>[n("通过slot传入正文内容")]),_:1}),e(d,{title:"基本使用",language:"html",code:m}),e(a,{id:"兼容性"},{default:l(()=>[n("兼容性")]),_:1}),e(a,null,{default:l(()=>[n(" 由于一些微信小程序平台的渲染能力的问题，在解析up-parse组件内容时会比较耗时，导致read-more组件内部无法准确得知内容的高度，而出现计算错误，这种情况下，我们需要借助up-parse组件的@load(内容多为文字时)或者@ready(内容多为图片时，可能会有较大延时)事件，通过ref重新初始化read-more组件的高度，如下： ")]),_:1}),e(d,{title:"兼容性处理",language:"html",code:h}),e(a,{id:"展开收起"},{default:l(()=>[n("展开收起")]),_:1}),e(a,null,{default:l(()=>[n("配置toggle为true，展开后可以收起，否则展开后没有收起的按钮")]),_:1}),e(d,{title:"展开收起",language:"html",code:b}),e(a,{id:"配置展开高度"},{default:l(()=>[n("配置展开高度")]),_:1}),e(a,null,{default:l(()=>[n(' 可以配置一个高度，单位rpx，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮 ')]),_:1}),e(d,{title:"配置展开高度",language:"html",code:v}),e(a,{id:"异步初始化"},{default:l(()=>[n("异步初始化")]),_:1}),e(a,null,{default:l(()=>[n(" 有时候需要展示的内容是从后端获取的，组件内部的mounted生命周期初始化时，请求尚未回来，会导致组件无法获取内容的高度，这种情况下，我们可以延时一定的时间后再初始化组件，或者在获取到内容后调用组件的init方法。 ")]),_:1}),e(d,{title:"异步初始化",language:"html",code:M}),e(a,{id:"自定义样式"},{default:l(()=>[n("自定义样式")]),_:1}),e(a,null,{default:l(()=>[n(" 此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整shadowStyle对象 ")]),_:1}),e(d,{title:"自定义样式",language:"javascript",code:R}),e(a,{id:"右侧演示页面源代码地址"},{default:l(()=>[n("右侧演示页面源代码地址")]),_:1}),e(o,{class:"custom-block tip"},{default:l(()=>[e(a,{class:"custom-block-title"},{default:l(()=>[n("点击以下链接以查看右侧演示页面的源码")]),_:1}),t("br"),e(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/readMore/readMore.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:l(()=>[e(s,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),n(" github ")]),_:1}),e(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/readMore/readMore.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:l(()=>[e(s,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),n(" gitee ")]),_:1}),t("br")]),_:1}),e(a,{id:"api"},{default:l(()=>[n("API")]),_:1}),e(a,{id:"props"},{default:l(()=>[n("Props")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 参数 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 类型 "),t("th",{style:{"text-align":"left"}}," 默认值 "),t("th",{style:{"text-align":"left"}}," 可选值 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," showHeight "),t("td",{style:{"text-align":"left"}}," 内容超出此高度才会显示展开全文按钮，单位rpx "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 400 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," toggle "),t("td",{style:{"text-align":"left"}}," 展开后是否显示收起按钮 "),t("td",{style:{"text-align":"left"}}," Boolean "),t("td",{style:{"text-align":"left"}}," false "),t("td",{style:{"text-align":"left"}}," true ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," closeText "),t("td",{style:{"text-align":"left"}}," 关闭时的提示文字 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," 展开阅读全文 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," openText "),t("td",{style:{"text-align":"left"}}," 展开时的提示文字 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," 收起 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," color "),t("td",{style:{"text-align":"left"}}," 文字颜色 "),t("td",{style:{"text-align":"left"}}," String "),t("td",{style:{"text-align":"left"}}," #3eaf7c "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," fontSize "),t("td",{style:{"text-align":"left"}}," 文字大小 "),t("td",{style:{"text-align":"left"}}," String | Number "),t("td",{style:{"text-align":"left"}}," 14 "),t("td",{style:{"text-align":"left"}}," - ")]),t("tr",null,[t("td",{style:{"text-align":"left"}}," shadowStyle "),t("td",{style:{"text-align":"left"}}," 阴影样式对象 "),t("td",{style:{"text-align":"left"}}," Object "),t("td",{style:{"text-align":"left"}}," - "),t("td",{style:{"text-align":"left"}}," - ")])])]),e(a,{id:"events"},{default:l(()=>[n("Events")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 事件名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," click "),t("td",{style:{"text-align":"left"}},' 点击"展开"或"收起"按钮时触发 '),t("td",{style:{"text-align":"left"}}," - ")])])]),e(a,{id:"methods"},{default:l(()=>[n("Methods")]),_:1}),t("table",null,[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}}," 方法名 "),t("th",{style:{"text-align":"left"}}," 说明 "),t("th",{style:{"text-align":"left"}}," 回调参数 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}," init "),t("td",{style:{"text-align":"left"}}," 手动初始化组件高度 "),t("td",{style:{"text-align":"left"}}," - ")])])])]),_:1})]),_:1})]),_:1})]),_:1})}}}),U=_(w,[["__scopeId","data-v-5cb8b281"]]);export{U as default};
