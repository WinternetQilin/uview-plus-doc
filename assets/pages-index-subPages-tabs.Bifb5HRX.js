var X=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var R=(e,a,r)=>a in e?X(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,w=(e,a)=>{for(var r in a||(a={}))Q.call(a,r)&&R(e,r,a[r]);if(V)for(var r of V(a))Y.call(a,r)&&R(e,r,a[r]);return e},C=(e,a)=>J(e,K(a));var z=(e,a,r)=>new Promise((d,c)=>{var l=f=>{try{p(r.next(f))}catch(g){c(g)}},h=f=>{try{p(r.throw(f))}catch(g){c(g)}},p=f=>f.done?d(f.value):Promise.resolve(f.value).then(l,h);p((r=r.apply(e,a)).next())});import{s as B,a as y,B as U,f as _,w as n,k as i,t as F,U as k,p as N,j as O,W as x,q as T,g as s,i as W,X as v,S as tt,l as j,F as A,m as et,a3 as lt,a4 as st,a5 as nt,d as at,r as it,b as Z,u as t,C as M}from"./index-CRHsRVm2.js";import{d as D,p as u,a as S,m as H,b as P,e as L,f as rt,h as ot,s as ut,i as I,j as q,k as dt,o as E,l as ct,z as pt,n as ht,_ as m}from"./CodeBlock.BlRjy5Lx.js";const ft=D({props:{isDot:{type:Boolean,default:()=>u.badge.isDot},value:{type:[Number,String],default:()=>u.badge.value},modelValue:{type:[Number,String],default:()=>u.badge.modelValue},show:{type:Boolean,default:()=>u.badge.show},max:{type:[Number,String],default:()=>u.badge.max},type:{type:String,default:()=>u.badge.type},showZero:{type:Boolean,default:()=>u.badge.showZero},bgColor:{type:[String,null],default:()=>u.badge.bgColor},color:{type:[String,null],default:()=>u.badge.color},shape:{type:String,default:()=>u.badge.shape},numberType:{type:String,default:()=>u.badge.numberType},offset:{type:Array,default:()=>u.badge.offset},inverted:{type:Boolean,default:()=>u.badge.inverted},absolute:{type:Boolean,default:()=>u.badge.absolute}}}),bt={name:"u-badge",mixins:[H,ft,P],computed:{boxStyle(){return{}},badgeStyle(){const e={};if(this.color&&(e.color=this.color),this.bgColor&&!this.inverted&&(e.backgroundColor=this.bgColor),this.absolute&&(e.position="absolute",this.offset.length)){const a=this.offset[0],r=this.offset[1]||a;e.top=L(a),e.right=L(r)}return e},showValue(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}},methods:{addStyle:S}};function mt(e,a,r,d,c,l){const h=O;return e.show&&(Number(e.value)!==0||e.showZero||e.isDot)?(_(),y(h,{key:0,class:N([[e.isDot?"u-badge--dot":"u-badge--not-dot",e.inverted&&"u-badge--inverted",e.shape==="horn"&&"u-badge--horn",`u-badge--${e.type}${e.inverted?"--inverted":""}`],"u-badge"]),style:k([l.addStyle(e.customStyle),l.badgeStyle])},{default:n(()=>[i(F(e.isDot?"":l.showValue),1)]),_:1},8,["class","style"])):U("",!0)}const _t=B(bt,[["render",mt],["__scopeId","data-v-4434d9cd"]]),gt=D({props:{duration:{type:Number,default:()=>u.tabs.duration},list:{type:Array,default:()=>u.tabs.list},lineColor:{type:String,default:()=>u.tabs.lineColor},activeStyle:{type:[String,Object],default:()=>u.tabs.activeStyle},inactiveStyle:{type:[String,Object],default:()=>u.tabs.inactiveStyle},lineWidth:{type:[String,Number],default:()=>u.tabs.lineWidth},lineHeight:{type:[String,Number],default:()=>u.tabs.lineHeight},lineBgSize:{type:String,default:()=>u.tabs.lineBgSize},itemStyle:{type:[String,Object],default:()=>u.tabs.itemStyle},scrollable:{type:Boolean,default:()=>u.tabs.scrollable},current:{type:[Number,String],default:()=>u.tabs.current},keyName:{type:String,default:()=>u.tabs.keyName},iconStyle:{type:[String,Object],default:()=>u.tabs.iconStyle}}}),yt={name:"u-tabs",mixins:[H,P,gt],data(){return{tabList:[],scrollLeft:0,scrollViewWidth:0,lineOffsetLeft:0,lineShow:!1,tabsRect:{left:0},innerCurrent:0,moving:!1}},watch:{current:{immediate:!0,handler(e,a){e!==this.innerCurrent&&(typeof e=="string"?this.innerCurrent=parseInt(e):this.innerCurrent=e,this.$nextTick(()=>{this.resize()}))}},list:{handler(e,a){this.tabList=dt(e),this.$nextTick(()=>{this.resize()})},immediate:!0,deep:!0}},computed:{textStyle(){return e=>{const a={},r=e==this.innerCurrent?S(this.activeStyle):S(this.inactiveStyle);return this.tabList[e].disabled&&(a.color="#c8c9cc"),q(r,a)}},propsBadge(){return u.badge}},mounted(){return z(this,null,function*(){this.init(),this.windowResizeCallback=e=>{this.init()},st(this.windowResizeCallback)})},beforeUnmount(){lt(this.windowResizeCallback)},emits:["click","longPress","change","update:current"],methods:{addStyle:S,addUnit:L,setLineLeft(){const e=this.tabList[this.innerCurrent];if(!e)return;let a=this.tabList.slice(0,this.innerCurrent).reduce((d,c)=>d+c.rect.width,0);const r=I(this.lineWidth);this.lineOffsetLeft=a+(e.rect.width-r)/2,this.lineShow||(this.lineShow=!0)},animation(e,a=0){},clickHandler(e,a){this.$emit("click",C(w({},e),{index:a}),a),!e.disabled&&this.innerCurrent!=a&&(this.innerCurrent=a,this.$nextTick(()=>{this.resize()}),this.$emit("update:current",a),this.$emit("change",C(w({},e),{index:a}),a))},longPressHandler(e,a){this.$emit("longPress",C(w({},e),{index:a}))},init(){ut().then(()=>{this.resize()})},setScrollLeft(){this.innerCurrent<0&&(this.innerCurrent=0);const e=this.tabList[this.innerCurrent],a=this.tabList.slice(0,this.innerCurrent).reduce((c,l)=>c+l.rect.width,0),r=ot().windowWidth;let d=a-(this.tabsRect.width-e.rect.width)/2-(r-this.tabsRect.right)/2+this.tabsRect.left/2;d=Math.min(d,this.scrollViewWidth-this.tabsRect.width),this.scrollLeft=Math.max(0,d)},resize(){this.tabList.length!==0&&Promise.all([this.getTabsRect(),this.getAllItemRect()]).then(([e,a=[]])=>{e.left>e.width&&(e.right=e.right-Math.floor(e.left/e.width)*e.width,e.left=e.left%e.width),this.tabsRect=e,this.scrollViewWidth=0,a.map((r,d)=>{this.scrollViewWidth+=r.width,this.tabList[d].rect=r}),this.setLineLeft(),this.setScrollLeft()})},getTabsRect(){return new Promise(e=>{this.queryRect("u-tabs__wrapper__scroll-view").then(a=>e(a))})},getAllItemRect(){return new Promise(e=>{const a=this.tabList.map((r,d)=>this.queryRect(`u-tabs__wrapper__nav__item-${d}`,!0));Promise.all(a).then(r=>e(r))})},queryRect(e,a){return new Promise(r=>{this.$uGetRect(`.${e}`).then(d=>{r(d)})})}}};function vt(e,a,r,d,c,l){const h=x(T("up-icon"),rt),p=W,f=O,g=x(T("u-badge"),_t),$=tt;return _(),y(p,{class:N(["u-tabs",[e.customClass]])},{default:n(()=>[s(p,{class:"u-tabs__wrapper"},{default:n(()=>[v(e.$slots,"left",{},void 0,!0),s(p,{class:"u-tabs__wrapper__scroll-view-wrapper"},{default:n(()=>[s($,{"scroll-x":e.scrollable,"scroll-left":c.scrollLeft,"scroll-with-animation":"",class:"u-tabs__wrapper__scroll-view","show-scrollbar":!1,ref:"u-tabs__wrapper__scroll-view"},{default:n(()=>[s(p,{class:"u-tabs__wrapper__nav",ref:"u-tabs__wrapper__nav"},{default:n(()=>[(_(!0),j(A,null,et(c.tabList,(o,b)=>(_(),y(p,{class:N(["u-tabs__wrapper__nav__item",[`u-tabs__wrapper__nav__item-${b}`,o.disabled&&"u-tabs__wrapper__nav__item--disabled",c.innerCurrent==b?"u-tabs__wrapper__nav__item-active":""]]),key:b,onClick:G=>l.clickHandler(o,b),onLongpress:G=>l.longPressHandler(o,b),ref_for:!0,ref:`u-tabs__wrapper__nav__item-${b}`,style:k([l.addStyle(e.itemStyle),{flex:e.scrollable?"":1}])},{default:n(()=>[e.$slots.icon?v(e.$slots,"icon",{key:0,item:o,keyName:e.keyName,index:b},void 0,!0):(_(),j(A,{key:1},[o.icon?(_(),y(p,{key:0,class:"u-tabs__wrapper__nav__item__prefix-icon"},{default:n(()=>[s(h,{name:o.icon,customStyle:l.addStyle(e.iconStyle)},null,8,["name","customStyle"])]),_:2},1024)):U("",!0)],64)),e.$slots.content?v(e.$slots,"content",{key:2,item:o,keyName:e.keyName,index:b},void 0,!0):!e.$slots.content&&(e.$slots.default||e.$slots.$default)?v(e.$slots,"default",{key:3,item:o,keyName:e.keyName,index:b},void 0,!0):(_(),y(f,{key:4,class:N([[o.disabled&&"u-tabs__wrapper__nav__item__text--disabled"],"u-tabs__wrapper__nav__item__text"]),style:k([l.textStyle(b)])},{default:n(()=>[i(F(o[e.keyName]),1)]),_:2},1032,["class","style"])),s(g,{show:!!(o.badge&&(o.badge.show||o.badge.isDot||o.badge.value)),isDot:o.badge&&o.badge.isDot||l.propsBadge.isDot,value:o.badge&&o.badge.value||l.propsBadge.value,max:o.badge&&o.badge.max||l.propsBadge.max,type:o.badge&&o.badge.type||l.propsBadge.type,showZero:o.badge&&o.badge.showZero||l.propsBadge.showZero,bgColor:o.badge&&o.badge.bgColor||l.propsBadge.bgColor,color:o.badge&&o.badge.color||l.propsBadge.color,shape:o.badge&&o.badge.shape||l.propsBadge.shape,numberType:o.badge&&o.badge.numberType||l.propsBadge.numberType,inverted:o.badge&&o.badge.inverted||l.propsBadge.inverted,customStyle:"margin-left: 4px;"},null,8,["show","isDot","value","max","type","showZero","bgColor","color","shape","numberType","inverted"])]),_:2},1032,["onClick","onLongpress","style","class"]))),128)),s(p,{class:"u-tabs__wrapper__nav__line",ref:"u-tabs__wrapper__nav__line",style:k([{width:l.addUnit(e.lineWidth),transform:`translate(${c.lineOffsetLeft}px)`,transitionDuration:`${e.duration}ms`,height:l.addUnit(e.lineHeight),background:e.lineColor,backgroundSize:e.lineBgSize,display:c.lineShow?"block":"none"}])},null,8,["style"])]),_:3},512)]),_:3},8,["scroll-x","scroll-left"])]),_:3}),v(e.$slots,"right",{},void 0,!0)]),_:3})]),_:3},8,["class"])}const kt=B(yt,[["render",vt],["__scopeId","data-v-a7636ac2"]]),St=D({props:{offsetTop:{type:[String,Number],default:()=>u.sticky.offsetTop},customNavHeight:{type:[String,Number],default:44},disabled:{type:Boolean,default:()=>u.sticky.disabled},bgColor:{type:String,default:()=>u.sticky.bgColor},zIndex:{type:[String,Number],default:()=>u.sticky.zIndex},index:{type:[String,Number],default:()=>u.sticky.index}}}),wt={name:"u-sticky",mixins:[H,P,St],data(){return{cssSticky:!1,stickyTop:0,elId:ht(),left:0,width:"auto",height:"auto",fixed:!1}},computed:{style(){const e={};return this.disabled?e.position="static":this.cssSticky?(e.position="sticky",e.zIndex=this.uZindex,e.top=L(this.stickyTop)):e.height=this.fixed?this.height+"px":"auto",e.backgroundColor=this.bgColor,q(S(this.customStyle),e)},stickyContent(){const e={};return this.cssSticky||(e.position=this.fixed?"fixed":"static",e.top=this.stickyTop+"px",e.left=this.left+"px",e.width=this.width=="auto"?"auto":this.width+"px",e.zIndex=this.uZindex),e},uZindex(){return this.zIndex?this.zIndex:pt.sticky}},mounted(){this.init()},watch:{offsetTop(e){this.getStickyTop()}},methods:{init(){this.getStickyTop(),this.checkSupportCssSticky(),this.cssSticky||!this.disabled&&this.initObserveContent()},initObserveContent(){this.$uGetRect("#"+this.elId).then(e=>{this.height=e.height,this.left=e.left,this.width=e.width,this.$nextTick(()=>{this.observeContent()})})},observeContent(){this.disconnectObserver("contentObserver");const e=nt(this,{thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe(`#${this.elId}`,a=>{this.setFixed(a.boundingClientRect.top)}),this.contentObserver=e},setFixed(e){const a=e<=this.stickyTop;this.fixed=a},disconnectObserver(e){const a=this[e];a&&a.disconnect()},getStickyTop(){this.stickyTop=I(this.offsetTop)+I(this.customNavHeight)},checkSupportCssSticky(){return z(this,null,function*(){this.checkCssStickyForH5()&&(this.cssSticky=!0),E()==="android"&&Number(ct().system)>8&&(this.cssSticky=!0),E()==="ios"&&(this.cssSticky=!0)})},checkComputedStyle(){},checkCssStickyForH5(){const e=["","-webkit-","-ms-","-moz-","-o-"],a=e.length,r=document.createElement("div");for(let d=0;d<a;d++)if(r.style.position=e[d]+"sticky",r.style.position!=="")return!0;return!1}},beforeUnmount(){this.disconnectObserver("contentObserver")}};function Ct(e,a,r,d,c,l){const h=W;return _(),y(h,{class:"u-sticky",style:k([l.style])},{default:n(()=>[s(h,{id:c.elId,style:k([l.stickyContent]),class:"u-sticky__content"},{default:n(()=>[v(e.$slots,"default",{},void 0,!0)]),_:3},8,["id","style"])]),_:3},8,["style"])}const Nt=B(wt,[["render",Ct],["__scopeId","data-v-fd39efb0"]]),xt=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,Tt=`<template>
  <up-sticky>
    <up-tabs :list="list" @click="click"></up-tabs>
  </up-sticky>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,Lt=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注', badge: 3 },
  { name: '推荐', badge: 5 },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,Bt=`<template>
  <up-tabs :list="list" @click="click"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注', disabled: true },
  { name: '推荐' },
  { name: '热榜' }
]);

const click = (index) => {
  console.log('点击了第' + index + '个tab');
}
<\/script>`,$t=`<template>
  <up-tabs
    :list="list"
    :activeStyle="{ color: '#2979ff' }"
    :inactiveStyle="{ color: '#7a7e7f' }"
    :itemStyle="{ padding: '0 10px' }"
  ></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,zt=`<template>
  <up-tabs :list="list" lineColor="#2979ff"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,It=`<template>
  <up-tabs :list="list1" keyName="name">
    <template #default="{ item, index }">
      <view class="tab-content">
        这是第{{ index + 1 }}个Tab内容: {{ item.name }}
      </view>
    </template>
  </up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list1 = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,Ot=`<template>
  <up-tabs :list="list">
    <template #right>
      <view class="right-content">
        <up-icon name="search"></up-icon>
      </view>
    </template>
  </up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`,Wt=`interface TabClickEvent {
  index: number;
  name: string;
  rect: {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    id: string;
    dataset: object;
  };
}`,Dt=at({__name:"tabs",setup(e){const a=it([{name:"关注"},{name:"推荐"},{name:"热榜"}]);function r(d){}return(d,c)=>{const l=W,h=O,p=x(T("up-tabs"),kt),f=x(T("up-sticky"),Nt),g=Z("layout-default-uni"),$=Z("global-ku-root");return _(),y($,null,{default:n(()=>[s(g,null,{default:n(()=>[s(l,{class:"tabs-page"},{default:n(()=>[s(l,{class:"page-header"},{default:n(()=>[s(l,{class:"header-badge"},{default:n(()=>[i(" 布局组件 ")]),_:1}),s(l,{id:"tabs-标签",class:"page-title"},{default:n(()=>[i(" Tabs 标签 ")]),_:1}),s(l,{class:"page-desc"},{default:n(()=>[i(" 该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。 ")]),_:1})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"平台差异说明",class:"section-title"},{default:n(()=>[i(" 平台差异说明 ")]),_:1}),s(l,{class:"table-wrapper"},{default:n(()=>[t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",null,"App（vue）"),t("th",null,"App（nvue）"),t("th",null,"H5"),t("th",null,"小程序")])]),t("tbody",null,[t("tr",null,[t("td",null,[s(l,{class:"check-icon"},{default:n(()=>[i(" ✓ ")]),_:1})]),t("td",null,[s(l,{class:"check-icon"},{default:n(()=>[i(" ✓ ")]),_:1})]),t("td",null,[s(l,{class:"check-icon"},{default:n(()=>[i(" ✓ ")]),_:1})]),t("td",null,[s(l,{class:"check-icon"},{default:n(()=>[i(" ✓ ")]),_:1})])])])])]),_:1})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"基本使用",class:"section-title"},{default:n(()=>[i(" 基本使用 ")]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 通过设置"),t("code",null,"scrollable"),i("（默认为"),t("code",null,"true"),i("），配置tabs组件的内容是否可以左右拖动。 ")]),_:1}),s(l,{class:"notice-card tip"},{default:n(()=>[s(l,{class:"notice-icon"},{default:n(()=>[i(" ! ")]),_:1}),s(l,{class:"notice-content"},{default:n(()=>[s(h,{class:"notice-title"},{default:n(()=>[i("说明")]),_:1}),s(h,null,{default:n(()=>[t("code",null,"scrollable"),i("参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置"),t("code",null,"scrollable"),i("为"),t("code",null,"false"),i("，因为它默认为"),t("code",null,"true"),i("。")]),_:1})]),_:1})]),_:1}),s(l,{class:"demo-container"},{default:n(()=>[s(p,{list:M(a),onClick:r},null,8,["list"])]),_:1}),s(m,{title:"基本使用",language:"html",code:xt})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"粘性布局",class:"section-title"},{default:n(()=>[i(" 粘性布局 ")]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 通过加上"),t("code",null,"up-sticky"),i("来使tabs滑动浮动在最顶部。 ")]),_:1}),s(l,{class:"demo-container"},{default:n(()=>[s(f,null,{default:n(()=>[s(p,{list:M(a),onClick:r},null,8,["list"])]),_:1})]),_:1}),s(m,{title:"粘性布局",language:"html",code:Tt})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"显示徽标",class:"section-title"},{default:n(()=>[i(" 显示徽标 ")]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 可以通过在列表对象中加入"),t("code",null,"badge"),i("来设置徽标。 ")]),_:1}),s(m,{title:"显示徽标",language:"html",code:Lt})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"禁用",class:"section-title"},{default:n(()=>[i(" 禁用 ")]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 可以通过在列表对象中加入"),t("code",null,"disabled = true"),i("来设置禁用。 ")]),_:1}),s(m,{title:"禁用",language:"html",code:Bt})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"自定义样式",class:"section-title"},{default:n(()=>[i(" 自定义样式 ")]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 通过使用"),t("code",null,"activeStyle"),i("、"),t("code",null,"inactiveStyle"),i("、"),t("code",null,"itemStyle"),i("来设置tabs的样式。 ")]),_:1}),s(m,{title:"自定义样式",language:"html",code:$t})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"滑块设置背景图",class:"section-title"},{default:n(()=>[i(" 滑块设置背景图 "),s(l,{class:"version-badge"},{default:n(()=>[i(" 2.0.30 ")]),_:1})]),_:1}),s(l,{class:"section-desc"},{default:n(()=>[i(" 通过使用"),t("code",null,"lineColor"),i("来设置滑块背景图。 ")]),_:1}),s(m,{title:"滑块设置背景图",language:"html",code:zt})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"tab内容自定义插槽",class:"section-title"},{default:n(()=>[i(" Tab内容自定义插槽 ")]),_:1}),s(m,{title:"Tab内容自定义插槽",language:"html",code:It})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"右侧自定义插槽",class:"section-title"},{default:n(()=>[i(" 右侧自定义插槽 ")]),_:1}),s(m,{title:"右侧自定义插槽",language:"html",code:Ot})]),_:1}),s(l,{class:"section"},{default:n(()=>[s(l,{id:"api",class:"section-title"},{default:n(()=>[i(" API ")]),_:1}),s(l,{id:"props",class:"subsection-title"},{default:n(()=>[i(" Props ")]),_:1}),s(l,{class:"table-wrapper"},{default:n(()=>[t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",null,"参数"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值"),t("th",null,"可选值")])]),t("tbody",null,[t("tr",null,[t("td",null,"duration"),t("td",null,"滑块移动一次所需的时间，单位ms"),t("td",null,"String | Number"),t("td",null,"300"),t("td",null,"-")]),t("tr",null,[t("td",null,"list"),t("td",null,"标签数组，元素为对象，如[{name: '推荐'}]"),t("td",null,"Array"),t("td",null,"-"),t("td",null,"-")]),t("tr",null,[t("td",null,"lineColor"),t("td",null,"滑块颜色"),t("td",null,"String"),t("td",null,"#3c9cff"),t("td",null,"-")]),t("tr",null,[t("td",null,"activeStyle"),t("td",null,"菜单选择中时的样式"),t("td",null,"String | Object"),t("td",null,"{ color: '#303133' }"),t("td",null,"-")]),t("tr",null,[t("td",null,"inactiveStyle"),t("td",null,"菜单非选中时的样式"),t("td",null,"String | Object"),t("td",null,"{ color: '#606266' }"),t("td",null,"-")]),t("tr",null,[t("td",null,"lineWidth"),t("td",null,"滑块长度"),t("td",null,"String | Number"),t("td",null,"20"),t("td",null,"-")]),t("tr",null,[t("td",null,"lineHeight"),t("td",null,"滑块高度"),t("td",null,"String | Number"),t("td",null,"3"),t("td",null,"-")]),t("tr",null,[t("td",null,[i(" lineBgSize "),s(l,{class:"version-badge"},{default:n(()=>[i(" 2.0.30 ")]),_:1})]),t("td",null,"滑块背景显示大小，当滑块背景设置为图片时使用"),t("td",null,"String"),t("td",null,"cover"),t("td",null,"-")]),t("tr",null,[t("td",null,"itemStyle"),t("td",null,"菜单item的样式"),t("td",null,"String | Object"),t("td",null,"{ height: '44px' }"),t("td",null,"-")]),t("tr",null,[t("td",null,"scrollable"),t("td",null,"菜单是否可滚动"),t("td",null,"Boolean"),t("td",null,"true"),t("td",null,"false")]),t("tr",null,[t("td",null,"current"),t("td",null,"当前选中标签的索引"),t("td",null,"String | Number"),t("td",null,"0"),t("td",null,"-")]),t("tr",null,[t("td",null,"keyName"),t("td",null,"从list元素对象中读取的键名"),t("td",null,"String"),t("td",null,"name"),t("td",null,"-")]),t("tr",null,[t("td",null,[i(" iconStyle "),s(l,{class:"version-badge"},{default:n(()=>[i(" 3.3.72 ")]),_:1})]),t("td",null,"左侧图标样式自定义"),t("td",null,"Object"),t("td",null,"{ color: '#303133' }"),t("td",null,"-")])])])]),_:1}),s(l,{id:"slot",class:"subsection-title"},{default:n(()=>[i(" Slot ")]),_:1}),s(l,{class:"table-wrapper"},{default:n(()=>[t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",null,"名称"),t("th",null,"说明")])]),t("tbody",null,[t("tr",null,[t("td",null,"-"),t("td",null,"整体左侧插槽")]),t("tr",null,[t("td",null,"-"),t("td",null,"整体右侧插槽")]),t("tr",null,[t("td",null,"-"),t("td",null,'自定义每个tab内容 #content="{item, keyName, index}"')])])])]),_:1}),s(l,{id:"events",class:"subsection-title"},{default:n(()=>[i(" Events ")]),_:1}),s(l,{class:"table-wrapper"},{default:n(()=>[t("table",{class:"api-table"},[t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"回调参数")])]),t("tbody",null,[t("tr",null,[t("td",null,"click"),t("td",null,"点击标签时触发"),t("td",null,"index: 标签索引值，item: 传入的其他值（见下方类型声明）")]),t("tr",null,[t("td",null,"change"),t("td",null,"标签索引改变时触发(disabled时不会触发)"),t("td",null,"tabItem: { index: 标签索引值, ...item: 传入的其他值 }")]),t("tr",null,[t("td",null,"longPress"),t("td",null,"长按标签时触发"),t("td",null,"index: 标签索引值，item: 传入的其他值")])])])]),_:1}),s(l,{class:"mt-20rpx"},{default:n(()=>[s(m,{title:"点击事件传参类型声明",language:"typescript",code:Wt})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}}),Rt=B(Dt,[["__scopeId","data-v-4812fbd2"]]);export{Rt as default};
