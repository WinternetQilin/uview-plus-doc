import{_ as h}from"./CodeBlock.C3t72IAG.js";import{s as i,a as f,w as t,b as o,f as p,g as l,i as _,u as e,j as m,k as n,h as b}from"./index-Bt5U6C3y.js";const g={};function k(x,y){const d=m,c=b,a=h,u=_,r=o("layout-default-uni"),s=o("global-ku-root");return p(),f(s,null,{default:t(()=>[l(r,null,{default:t(()=>[l(u,{class:"tree-page"},{default:t(()=>[l(u,{class:"theme-default-content content__default"},{default:t(()=>[l(d,{id:"tree-树形组件"},{default:t(()=>[l(d,{href:"tree.html#tree-树形组件",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" Tree 树形组件 "),l(d,{href:"tree.html#api",class:"anchor"},{default:t(()=>[l(c,{src:"https://uview-plus.jiangruyi.com/common/to_api.png"})]),_:1}),l(d,{class:"badge tip"},{default:t(()=>[n("3.4.47")]),_:1})]),_:1}),l(d,null,{default:t(()=>[n("树形组件用于展示具有层级结构的数据，支持复选框、展开/折叠、节点点击等交互行为。")]),_:1}),l(d,{id:"平台差异说明"},{default:t(()=>[l(d,{href:"tree.html#平台差异说明",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 平台差异说明 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}}," App "),e("th",{style:{"text-align":"center"}}," H5 "),e("th",{style:{"text-align":"center"}}," 微信小程序 "),e("th",{style:{"text-align":"center"}}," 支付宝小程序 "),e("th",{style:{"text-align":"center"}}," 百度小程序 "),e("th",{style:{"text-align":"center"}}," 头条小程序 "),e("th",{style:{"text-align":"center"}}," QQ小程序 ")])]),e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ "),e("td",{style:{"text-align":"center"}}," √ ")])])]),l(d,{id:"基本使用"},{default:t(()=>[l(d,{href:"tree.html#基本使用",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 基本使用 ")]),_:1}),l(a,{code:`<template>
  <up-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick" />
</template>

<script setup>
import { ref } from 'vue';

const defaultProps = ref({
  children: 'children',
  label: 'label',
  nodeKey: 'id'
});

const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 2,
        label: '二级 1-1',
        children: [
          { id: 3, label: '三级 1-1-1' },
          { id: 4, label: '三级 1-1-2' }
        ]
      }
    ]
  }
]);

const handleNodeClick = (node) => {
  console.log('节点被点击:', node);
};
<\/script>`,language:"vue",title:"基本使用"}),l(d,{id:"复选框及自定义内容"},{default:t(()=>[l(d,{href:"tree.html#复选框及自定义内容",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 复选框及自定义内容 ")]),_:1}),l(a,{code:`<template>
  <up-tree
    :data="treeData"
    :props="defaultProps"
    show-checkbox
    default-expand-all
    @node-click="handleNodeClick"
    @check-change="handleCheckChange">
    <template #default="{ node, level }">
        <view class="custom-tree-node">
            <text style="color: red">{{ node.label }}*{{level}}</text>
        </view>
    </template>
  </up-tree>
</template>

<script setup>
import { ref } from 'vue';

const defaultProps = ref({
  children: 'children',
  label: 'label',
  nodeKey: 'id'
});

const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 2,
        label: '二级 1-1',
        children: [
          { id: 3, label: '三级 1-1-1' },
          { id: 4, label: '三级 1-1-2' }
        ]
      }
    ]
  }
]);

const handleNodeClick = (node) => {
  console.log('节点被点击:', node);
};

const handleCheckChange = (node, checked) => {
  console.log('节点勾选状态变化:', node, checked);
};
<\/script>`,language:"vue",title:"复选框及自定义内容"}),l(d,{id:"自定义节点内容"},{default:t(()=>[l(d,{href:"tree.html#自定义节点内容",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 自定义节点内容 ")]),_:1}),l(a,{code:`<template>
  <up-tree :data="treeData" :props="defaultProps">
    <template #default="{ node }">
      <view class="custom-node">
        <text>{{ node.label }}</text>
      </view>
    </template>
  </up-tree>
</template>

<script setup>
import { ref } from 'vue';

const defaultProps = ref({
  children: 'children',
  label: 'label',
  nodeKey: 'id'
});

const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      { id: 2, label: '二级 1-1' }
    ]
  }
]);
<\/script>`,language:"vue",title:"自定义节点内容"}),l(d,{id:"获取选中节点"},{default:t(()=>[l(d,{href:"tree.html#获取选中节点",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 获取选中节点 ")]),_:1}),l(a,{code:`<template>
  <up-tree
    ref="treeRef"
    :data="treeData"
    :props="defaultProps"
    show-checkbox
    @check-change="handleCheckChange" />
  <up-button @click="getCheckedNodes">获取选中节点</up-button>
</template>

<script setup>
import { ref } from 'vue';

const treeRef = ref(null);
const defaultProps = ref({
  children: 'children',
  label: 'label',
  nodeKey: 'id'
});

const treeData = ref([
  {
    id: 1,
    label: '一级 1',
    children: [
      { id: 2, label: '二级 1-1', children: [] }
    ]
  }
]);

const handleCheckChange = (node, checked) => {
  console.log('勾选状态变化:', checked);
};

const getCheckedNodes = () => {
  const checkedNodes = treeRef.value?.getCheckedNodes();
  console.log('选中的节点:', checkedNodes);
};
<\/script>`,language:"vue",title:"获取选中节点"}),l(d,{id:"api"},{default:t(()=>[l(d,{href:"tree.html#api",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" API ")]),_:1}),l(d,{id:"props-参数说明"},{default:t(()=>[l(d,{href:"tree.html#props-参数说明",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" Props 参数说明 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"参数"),e("th",null,"说明"),e("th",null,"类型"),e("th",null,"默认值"),e("th",null,"可选值")])]),e("tbody",null,[e("tr",null,[e("td",null,"data"),e("td",null,"树的数据源"),e("td",null,[e("code",null,"Array")]),e("td",null,[e("code",null,"[]")]),e("td",null,"-")]),e("tr",null,[e("td",null,"props"),e("td",null,"配置节点字段映射（如 label、children）"),e("td",null,[e("code",null,"Object")]),e("td",null,[e("code",null,"{ label: 'label', children: 'children', nodeKey: 'id' }")]),e("td",null,"-")]),e("tr",null,[e("td",null,"show-checkbox"),e("td",null,"是否显示复选框"),e("td",null,[e("code",null,"Boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,[e("code",null,"true / false")])]),e("tr",null,[e("td",null,"default-expand-all"),e("td",null,"是否默认展开所有节点"),e("td",null,[e("code",null,"Boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,[e("code",null,"true / false")])]),e("tr",null,[e("td",null,"expand-on-click-node"),e("td",null,"是否在点击节点时展开或折叠"),e("td",null,[e("code",null,"Boolean")]),e("td",null,[e("code",null,"true")]),e("td",null,[e("code",null,"true / false")])]),e("tr",null,[e("td",null,"check-strictly"),e("td",null,"是否启用父子节点不关联选择"),e("td",null,[e("code",null,"Boolean")]),e("td",null,[e("code",null,"false")]),e("td",null,[e("code",null,"true / false")])]),e("tr",null,[e("td",null,"node-key"),e("td",null,"每个节点的唯一标识字段名"),e("td",null,[e("code",null,"String")]),e("td",null,[e("code",null,"'id'")]),e("td",null,"-")])])]),l(d,{id:"events-事件说明"},{default:t(()=>[l(d,{href:"tree.html#events-事件说明",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" Events 事件说明 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"事件名"),e("th",null,"说明"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"@node-click"),e("td",null,"点击节点时触发"),e("td",null,[e("code",null,"(node: object) => void")])]),e("tr",null,[e("td",null,"@check-change"),e("td",null,"节点勾选状态变化时触发"),e("td",null,[e("code",null,"(node: object, checked: boolean) => void")])])])]),l(d,{id:"ref-事件说明"},{default:t(()=>[l(d,{href:"tree.html#ref-事件说明",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" Ref 事件说明 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"说明"),e("th",null,"返回值")])]),e("tbody",null,[e("tr",null,[e("td",null,"getCheckedNodes()"),e("td",null,"获取当前所有选中的节点列表"),e("td",null,[e("code",null,"nodes[]")])])])]),l(d,{id:"插槽说明-slot"},{default:t(()=>[l(d,{href:"tree.html#插槽说明-slot",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 插槽说明（Slot） ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"插槽名"),e("th",null,"说明"),e("th",null,"参数")])]),e("tbody",null,[e("tr",null,[e("td",null,"default"),e("td",null,"自定义节点内容插槽"),e("td",null,[e("code",null,"{ node, level }")])])])]),l(d,{id:"支持的功能特性"},{default:t(()=>[l(d,{href:"tree.html#支持的功能特性",class:"header-anchor"},{default:t(()=>[n("#")]),_:1}),n(" 支持的功能特性 ")]),_:1}),e("table",null,[e("thead",null,[e("tr",null,[e("th",null,"功能"),e("th",null,"说明")])]),e("tbody",null,[e("tr",null,[e("td",null,"展开/折叠"),e("td",null,[n("支持点击箭头或配置 "),e("code",null,"expand-on-click-node"),n(" 控制展开逻辑")])]),e("tr",null,[e("td",null,"复选框联动"),e("td",null,[n("父子节点自动同步勾选状态（除非开启 "),e("code",null,"check-strictly"),n("）")])]),e("tr",null,[e("td",null,"数据初始化"),e("td",null,[n("自动注入 "),e("code",null,"expanded"),n(" 和 "),e("code",null,"checked"),n(" 字段")])]),e("tr",null,[e("td",null,"自定义渲染"),e("td",null,"通过插槽实现节点内容高度定制")]),e("tr",null,[e("td",null,"获取选中节点"),e("td",null,[n("提供 "),e("code",null,"getCheckedNodes()"),n(" 方法获取当前选中数据")])])])])]),_:1})]),_:1})]),_:1})]),_:1})}const N=i(g,[["render",k],["__scopeId","data-v-a7c69e04"]]);export{N as default};
