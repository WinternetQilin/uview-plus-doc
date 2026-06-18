import{d as o,a as r,w as u,b as n,f as _,g as l,i,u as t,j as h,k as e,s as f}from"./index-Bt5U6C3y.js";import{_ as p}from"./CodeBlock.C3t72IAG.js";const g=`<template>
  <up-table>
    <up-tr>
      <up-th>姓名</up-th>
      <up-th>年龄</up-th>
      <up-th>性别</up-th>
    </up-tr>
    <up-tr>
      <up-td>张三</up-td>
      <up-td>22</up-td>
      <up-td>男</up-td>
    </up-tr>
    <up-tr>
      <up-td>李四</up-td>
      <up-td>24</up-td>
      <up-td>女</up-td>
    </up-tr>
  </up-table>
</template>`,b=`<template>
  <up-table>
    <up-tr class="up-tr">
      <up-th class="up-th">姓名</up-th>
      <up-th class="up-th">年龄</up-th>
      <up-th class="up-th">性别</up-th>
    </up-tr>
    <up-tr class="up-tr">
      <up-td class="up-td">张三</up-td>
      <up-td class="up-td">22</up-td>
      <up-td class="up-td">男</up-td>
    </up-tr>
    <up-tr class="up-tr">
      <up-td class="up-td">李四</up-td>
      <up-td class="up-td">24</up-td>
      <up-td class="up-td">女</up-td>
    </up-tr>
  </up-table>
</template>`,m=o({__name:"table",setup(x){return(y,k)=>{const a=h,d=i,c=n("layout-default-uni"),s=n("global-ku-root");return _(),r(s,null,{default:u(()=>[l(c,null,{default:u(()=>[l(d,{class:"table-page"},{default:u(()=>[l(d,{class:"theme-default-content content__default"},{default:u(()=>[l(a,{id:"table-表格"},{default:u(()=>[e(" Table 表格 "),l(a,{class:"badge tip"},{default:u(()=>[e("3.4.28")]),_:1})]),_:1}),l(a,null,{default:u(()=>[e("表格组件一般用于展示结构化数据的场景")]),_:1}),l(a,{id:"平台差异说明"},{default:u(()=>[e("平台差异说明")]),_:1}),t("table",{class:"platform-table"},[t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}}," App "),t("th",{style:{"text-align":"center"}}," H5 "),t("th",{style:{"text-align":"center"}}," 微信小程序 "),t("th",{style:{"text-align":"center"}}," 支付宝小程序 "),t("th",{style:{"text-align":"center"}}," 百度小程序 "),t("th",{style:{"text-align":"center"}}," 头条小程序 "),t("th",{style:{"text-align":"center"}}," QQ小程序 ")])]),t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ "),t("td",{style:{"text-align":"center"}}," √ ")])])]),l(a,{id:"基本使用"},{default:u(()=>[e("基本使用")]),_:1}),l(a,null,{default:u(()=>[e("本组件标签类似HTML的table表格，由"),t("code",null,"table"),e("、"),t("code",null,"tr"),e("、"),t("code",null,"th"),e("、"),t("code",null,"td"),e("四个组件组成")]),_:1}),l(d,null,{default:u(()=>[l(d,null,{default:u(()=>[t("code",null,"table"),e("组件裹在最外层，可以配置一些基础参数")]),_:1}),l(d,null,{default:u(()=>[t("code",null,"tr"),e('组件用于显示"行"数据')]),_:1}),l(d,null,{default:u(()=>[t("code",null,"th"),e("组件用于显示表头内容，类似"),t("code",null,"td"),e("，不同之处在于字体加粗了，也带有背景颜色，也可以直接用"),t("code",null,"td"),e("替代"),t("code",null,"th")]),_:1}),l(d,null,{default:u(()=>[t("code",null,"td"),e("组件不是最小单位，为了合并单元格时，内部可以嵌入"),t("code",null,"tr"),e("和"),t("code",null,"td"),e("组件")]),_:1})]),_:1}),l(p,{title:"基本使用",language:"html",code:g}),l(a,{id:"兼容性"},{default:u(()=>[e("兼容性")]),_:1}),l(a,null,{default:u(()=>[e("由于"),t("code",null,"头条小程序"),e("的兼容性问题，您需要给表格相关的组件("),t("code",null,"up-tr"),e("、"),t("code",null,"up-th"),e("、"),t("code",null,"up-td"),e(")写上对应的类名才有效，如下：")]),_:1}),l(p,{title:"兼容性",language:"html",code:b})]),_:1})]),_:1})]),_:1})]),_:1})}}}),w=f(m,[["__scopeId","data-v-6e0bf176"]]);export{w as default};
