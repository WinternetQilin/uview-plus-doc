import{s as f,a as i,w as n,b as o,f as _,g as t,i as p,u as l,j as h,k as e,t as g,h as b}from"./index-C-vHpWRU.js";const m={};function x(c,y){const a=h,d=p,u=b,s=o("layout-default-uni"),r=o("global-ku-root");return _(),i(r,null,{default:n(()=>[t(s,null,{default:n(()=>[t(d,{class:"code-page"},{default:n(()=>[t(d,{class:"theme-default-content content__default"},{default:n(()=>[t(a,{id:"code-验证码输入框"},{default:n(()=>[t(a,{href:"code.html#code-验证码输入框",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" Code 验证码输入框 ")]),_:1}),t(a,null,{default:n(()=>[e(" 考虑到用户实际发送验证码的场景，可能是一个按钮，也可能是一段文字，提示语各有不同，所以本组件不提供界面显示，只提供提示语，由用户将提示语嵌入到具体的场景 ")]),_:1}),t(a,{id:"平台差异说明"},{default:n(()=>[t(a,{href:"code.html#平台差异说明",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 平台差异说明 ")]),_:1}),l("table",null,[l("thead",null,[l("tr",null,[l("th",{style:{"text-align":"center"}}," App（vue） "),l("th",{style:{"text-align":"center"}}," App（nvue） "),l("th",{style:{"text-align":"center"}}," H5 "),l("th",{style:{"text-align":"center"}}," 小程序 ")])]),l("tbody",null,[l("tr",null,[l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ "),l("td",{style:{"text-align":"center"}}," √ ")])])]),t(a,{id:"基本使用"},{default:n(()=>[t(a,{href:"code.html#基本使用",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 基本使用 ")]),_:1}),t(a,null,{default:n(()=>[e("通过ref获取组件对象，再执行后面的操作，见下方示例。")]),_:1}),t(d,null,{default:n(()=>[t(d,null,{default:n(()=>[e("通过"),l("code",null,"seconds"),e("设置需要倒计的秒数(默认"),l("code",null,"60"),e(")")]),_:1}),t(d,null,{default:n(()=>[e("通过ref调用组件内部的"),l("code",null,"start"),e("方法，开始倒计时")]),_:1}),t(d,null,{default:n(()=>[e(" 通过监听"),l("code",null,"change"),e('事件(从开始到结束之间，每秒触发一次)获得提示的文字，可能值如"获取验证码|12秒后重新获取|重新获取"，可以自定义 ')]),_:1})]),_:1}),t(a,null,{default:n(()=>[e(" 注意：用户可能在倒计时的过程中点击获取验证码的按钮，组件内部提供了通过ref获取的"),l("code",null,"canGetCode"),e("变量，在倒计时 过程中，该值为"),l("code",null,"false"),e("，如果为"),l("code",null,"false"),e("应该给予提示并不要再次向后端请求验证码，如果为"),l("code",null,"true"),e("，则为获取验证码 之前，或者倒计结束之后，可以再次向后端请求验证码。 ")]),_:1}),t(a,null,{default:n(()=>[e("以下为完整示例，见如下：")]),_:1}),l("pre",null,[l("code",null,`<template>
  <view class="wrap">
    <up-toast ref="uToastRef"></up-toast>
    <up-code :seconds="seconds" @end="end" @start="start" ref="uCodeRef"
      @change="codeChange"></up-code>
    <up-button @tap="getCode">`+g(c.tips)+`</up-button>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const tips = ref('');
const seconds = ref(10);
const uCodeRef = ref(null);

const codeChange = (text) => {
  tips.value = text;
};

const getCode = () => {
  if (uCodeRef.canGetCode) {
    // 模拟向后端请求验证码
    uni.showLoading({
      title: '正在获取验证码',
    });
    setTimeout(() => {
      uni.hideLoading();
      // 这里此提示会被start()方法中的提示覆盖
      uni.$u.toast('验证码已发送');
      // 通知验证码组件内部开始倒计时
      uCodeRef.start();
    }, 2000);
  } else {
    uni.$u.toast('倒计时结束后再发送');
  }
};

const end = () => {
  uni.$u.toast('倒计时结束');
};

const start = () => {
  uni.$u.toast('倒计时开始');
};
<\/script>

<style lang="scss">
.wrap {
  padding: 24rpx;
}
</style>`,1)]),t(a,{id:"自定义提示语"},{default:n(()=>[t(a,{href:"code.html#自定义提示语",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 自定义提示语 ")]),_:1}),t(a,null,{default:n(()=>[e(' 组件内部有内置的提示语，如获取验证码前的提示语为"获取验证码"，用户可以通过参数配置自定义的提示： ')]),_:1}),t(d,null,{default:n(()=>[t(d,null,{default:n(()=>[e("获取前，参数为"),l("code",null,"start-text"),e('，默认值为"获取验证码"')]),_:1}),t(d,null,{default:n(()=>[e(" 倒计时期间，参数为"),l("code",null,"change-text"),e('，默认为"X秒重新获取"，这里的"x"(大小写均可)，将会被倒计的秒数替代 ')]),_:1}),t(d,null,{default:n(()=>[e("倒计时结束，参数为"),l("code",null,"end-text"),e('，默认值为"重新获取"')]),_:1})]),_:1}),t(a,{id:"保持倒计时"},{default:n(()=>[t(a,{href:"code.html#保持倒计时",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 保持倒计时 ")]),_:1}),t(a,null,{default:n(()=>[e(" 一般情况下，在H5刷新浏览器，或者各端返回再进入时，倒计时会消失，导致用户可以再次尝试获取验证码，虽然后端还会对此进行进一步的判断。"),l("br"),e(' 某些业务场景，我们需要在用户刷新或者重新进入时，保持倒计时状态，也叫"本地"记录倒计时状态，这是需要结合 '),l("code",null,"uni.setStorageSync"),e("和"),l("code",null,"uni.getStorageSync"),e("进行处理。 ")]),_:1}),t(a,{id:"右侧演示页面源代码地址"},{default:n(()=>[t(a,{href:"code.html#右侧演示页面源代码地址",class:"header-anchor"},{default:n(()=>[e("#")]),_:1}),e(" 右侧演示页面源代码地址 ")]),_:1}),t(d,{class:"custom-block tip"},{default:n(()=>[t(a,{class:"custom-block-title"},{default:n(()=>[e("点击以下链接以查看右侧演示页面的源码")]),_:1}),l("br"),t(a,{href:"https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/code/code.nvue",target:"_blank",style:{display:"flex","align-items":"center"}},{default:n(()=>[t(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png",title:"github",width:"30"}),e(" github ")]),_:1}),t(a,{href:"https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsB/code/code.nvue",target:"_blank",style:{display:"flex","align-items":"center","margin-top":"10px"}},{default:n(()=>[t(u,{height:"30",src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png",title:"github",width:"30"}),e(" gitee ")]),_:1}),l("br")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}const C=f(m,[["render",x],["__scopeId","data-v-ba6bbf8f"]]);export{C as default};
