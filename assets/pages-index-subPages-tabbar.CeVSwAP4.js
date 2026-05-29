import{d as u,a as d,w as e,b as o,f as p,g as t,i as r,k as a,u as c,s as f}from"./index-CRHsRVm2.js";import{_ as i}from"./CodeBlock.BlRjy5Lx.js";const m=`<template>
  <up-tabbar :list="list" @change="change"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
  },
  {
    icon: 'photo',
    title: '影集',
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
  }
]);

const change = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,b=`<template>
  <up-tabbar :list="list" @change="change"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
    dot: true,
  },
  {
    icon: 'photo',
    title: '影集',
    badge: 3,
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
    badge: 99,
  }
]);

const change = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,_=`<template>
  <up-tabbar :list="list" value="music" @change="change" matchName="name"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    name: 'home',
    icon: 'home',
    title: '首页',
  },
  {
    name: 'photo',
    icon: 'photo',
    title: '影集',
  },
  {
    name: 'music',
    icon: 'play-circle',
    title: '音乐',
  },
  {
    name: 'chat',
    icon: 'chat',
    title: '消息',
  }
]);

const change = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,h=`<template>
  <up-tabbar :list="list" @change="change">
    <up-tabbar-item v-for="(item, index) in list" :key="index">
      <template #active-icon>
        <up-icon name="photo" color="#2979ff"></up-icon>
      </template>
      <template #inactive-icon>
        <up-icon name="photo"></up-icon>
      </template>
    </up-tabbar-item>
  </up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
  },
  {
    icon: 'photo',
    title: '影集',
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
  }
]);

const change = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,g=`<template>
  <up-tabbar :list="list" @change="change"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
  },
  {
    icon: 'photo',
    title: '影集',
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
  }
]);

const change = (index) => {
  if (index === 1) {
    console.log('点击了第二个tab，拦截');
    return false;
  }
}
<\/script>`,x=`<template>
  <up-tabbar :list="list" :border="false"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
  },
  {
    icon: 'photo',
    title: '影集',
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
  }
]);
<\/script>`,v=`<template>
  <up-tabbar :list="list" :fixed="true"></up-tabbar>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    icon: 'home',
    title: '首页',
  },
  {
    icon: 'photo',
    title: '影集',
  },
  {
    icon: 'play-circle',
    title: '音乐',
  },
  {
    icon: 'chat',
    title: '消息',
  }
]);
<\/script>`,k=u({__name:"tabbar",setup(y){return(C,N)=>{const l=r,s=o("layout-default-uni"),n=o("global-ku-root");return p(),d(n,null,{default:e(()=>[t(s,null,{default:e(()=>[t(l,{class:"tabbar-page"},{default:e(()=>[t(l,{class:"page-header"},{default:e(()=>[t(l,{class:"header-badge"},{default:e(()=>[a(" 布局组件 ")]),_:1}),t(l,{id:"tabbar-底部导航栏",class:"page-title"},{default:e(()=>[a(" Tabbar 底部导航栏 ")]),_:1}),t(l,{class:"page-desc"},{default:e(()=>[a(" 此组件提供了自定义tabbar的能力，具有如下特点： ")]),_:1}),t(l,{class:"list-items"},{default:e(()=>[t(l,null,{default:e(()=>[a("图标可以使用字体图标(内置图标和扩展图标)或者图片")]),_:1}),t(l,null,{default:e(()=>[a("可以动态切换菜单的数量以及配置")]),_:1}),t(l,null,{default:e(()=>[a("切换菜单之前，可以进行回调鉴权")]),_:1}),t(l,null,{default:e(()=>[a("可以设置角标或数字化提示")]),_:1}),t(l,null,{default:e(()=>[a("有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域")]),_:1})]),_:1})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"平台差异说明",class:"section-title"},{default:e(()=>[a(" 平台差异说明 ")]),_:1}),t(l,{class:"table-wrapper"},{default:e(()=>[c("table",{class:"platform-table"},[c("thead",null,[c("tr",null,[c("th",null,"App（vue）"),c("th",null,"App（nvue）"),c("th",null,"H5"),c("th",null,"小程序")])]),c("tbody",null,[c("tr",null,[c("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),c("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),c("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})]),c("td",null,[t(l,{class:"check-icon"},{default:e(()=>[a(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"基本使用",class:"section-title"},{default:e(()=>[a(" 基本使用 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 推荐您使用list数组遍历循环，案例使用基础方式构建，请根据"),c("code",null,"click"),a("事件回调进行后续逻辑操作。 ")]),_:1}),t(i,{title:"基本使用",language:"html",code:m})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"显示徽标",class:"section-title"},{default:e(()=>[a(" 显示徽标 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 使用"),c("code",null,"dot"),a("属性添加小点类型徽标，使用"),c("code",null,"badge"),a("属性添加数字类型徽标。您也可以使用"),c("code",null,":badge='badge'"),a("动态设置徽标数量。 ")]),_:1}),t(i,{title:"显示徽标",language:"html",code:b})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"匹配标签的名称",class:"section-title"},{default:e(()=>[a(" 匹配标签的名称 ")]),_:1}),t(i,{title:"匹配标签的名称",language:"html",code:_})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"自定义图标-颜色",class:"section-title"},{default:e(()=>[a(" 自定义图标/颜色 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 如您需要自定义图标/颜色，在"),c("code",null,"up-tabbar-item"),a("标签中使用插槽"),c("code",null,"active-icon"),a("和"),c("code",null,"inactive-icon"),a("来定义图标和颜色。 ")]),_:1}),t(i,{title:"自定义图标/颜色",language:"html",code:h})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"拦截切换事件-点击第二个标签",class:"section-title"},{default:e(()=>[a(" 拦截切换事件(点击第二个标签) ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 在切换事件中，处理拦截事件或者您其他js操作逻辑。 ")]),_:1}),t(i,{title:"拦截切换事件",language:"html",code:g})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"边框",class:"section-title"},{default:e(()=>[a(" 边框 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 组件默认带了顶部边框，如果不需要，配置"),c("code",null,"border"),a("为"),c("code",null,"false"),a("即可。 ")]),_:1}),t(i,{title:"边框",language:"html",code:x})]),_:1}),t(l,{class:"section"},{default:e(()=>[t(l,{id:"固定在底部",class:"section-title"},{default:e(()=>[a(" 固定在底部 ")]),_:1}),t(l,{class:"section-desc"},{default:e(()=>[a(" 与原生效果无异，但您可以按照api配置您需要的其他配置，如徽标，边框等。 ")]),_:1}),t(i,{title:"固定在底部",language:"html",code:v})]),_:1})]),_:1})]),_:1})]),_:1})}}}),V=f(k,[["__scopeId","data-v-78364146"]]);export{V as default};
