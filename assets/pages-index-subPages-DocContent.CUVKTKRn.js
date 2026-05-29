import{d as b,r as C,c as h,x as w,y as B,a as i,w as e,b as v,z as D,A as N,f as d,g as a,i as W,B as R,j as V,k as l,t as $,u as A,s as E}from"./index-CRHsRVm2.js";import{a as L}from"./components.dP1TBvMg.js";const I=b({__name:"DocContent",setup(S){const k=D(),f=N(),p=C(),c=h(()=>{const t=k.params.name;return L.find(s=>s.name===t)}),m=h(()=>c.value?`/uiadmin.net/uview-plus/components/${c.value.path}`:"");function x(){f.push("/")}function _(){try{const t=p.value;if(!(t!=null&&t.contentWindow))return;const s=t.contentDocument||t.contentWindow.document,n=s.createElement("style");n.textContent=`
      .navbar, .sidebar, .sidebar-mask, .page-edit, .page-nav, .global-ui {
        display: none !important;
      }
      .theme-container {
        padding: 0 !important;
      }
      .page {
        margin: 0 !important;
        padding: 20px 40px !important;
        max-width: 100% !important;
      }
      body {
        overflow-x: hidden;
      }
    `,s.head.appendChild(n),s.querySelectorAll("text[href]").forEach(u=>{const o=u.getAttribute("href");o&&!o.startsWith("http")&&!o.startsWith("//")&&o.endsWith(".html")&&u.addEventListener("click",g=>{g.preventDefault();const y=o.replace(".html","");f.push(`/components/${y}`)})})}catch(t){}}return w(()=>{B(()=>{_()})}),(t,s)=>{const n=V,r=W,u=v("layout-default-uni"),o=v("global-ku-root");return d(),i(o,null,{default:e(()=>[a(u,null,{default:e(()=>[a(r,{class:"doc-content"},{default:e(()=>[a(r,{class:"header-bar"},{default:e(()=>[a(r,{class:"back-btn",onClick:x},{default:e(()=>[a(n,null,{default:e(()=>[l("←")]),_:1}),a(n,null,{default:e(()=>[l("返回")]),_:1})]),_:1}),c.value?(d(),i(n,{key:0},{default:e(()=>[l($(c.value.title),1)]),_:1})):R("",!0)]),_:1}),m.value?(d(),i(r,{key:0,class:"iframe-wrapper"},{default:e(()=>[A("iframe",{ref_key:"iframeRef",ref:p,src:m.value,class:"doc-iframe",onLoad:_},null,40,["src"])]),_:1})):(d(),i(r,{key:1,class:"not-found"},{default:e(()=>[a(n,null,{default:e(()=>[l("组件未找到")]),_:1}),a(n,null,{default:e(()=>[l("请从左侧菜单选择组件")]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}}}),q=E(I,[["__scopeId","data-v-ef77af9f"]]);export{q as default};
