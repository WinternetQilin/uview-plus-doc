<template>
  <view class="tree-page">
    <view class="theme-default-content content__default">
      <text id="tree-树形组件">
        <text href="tree.html#tree-树形组件" class="header-anchor">#</text>
        Tree 树形组件
        <text href="tree.html#api" class="anchor"><image src="https://uview-plus.jiangruyi.com/common/to_api.png" /></text>
        <text class="badge tip">3.4.47</text>
      </text>
      <text>树形组件用于展示具有层级结构的数据，支持复选框、展开/折叠、节点点击等交互行为。</text>

      <text id="平台差异说明">
        <text href="tree.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              App
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              微信小程序
            </th>
            <th style="text-align:center;">
              支付宝小程序
            </th>
            <th style="text-align:center;">
              百度小程序
            </th>
            <th style="text-align:center;">
              头条小程序
            </th>
            <th style="text-align:center;">
              QQ小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>

      <text id="基本使用">
        <text href="tree.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>

      <CodeBlock
        code="<template>
  <up-tree :data=&quot;treeData&quot; :props=&quot;defaultProps&quot; @node-click=&quot;handleNodeClick&quot; />
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
</script>"
        language="vue"
        title="基本使用"
      />

      <text id="复选框及自定义内容">
        <text href="tree.html#复选框及自定义内容" class="header-anchor">#</text>
        复选框及自定义内容
      </text>

      <CodeBlock
        code="<template>
  <up-tree
    :data=&quot;treeData&quot;
    :props=&quot;defaultProps&quot;
    show-checkbox
    default-expand-all
    @node-click=&quot;handleNodeClick&quot;
    @check-change=&quot;handleCheckChange&quot;>
    <template #default=&quot;{ node, level }&quot;>
        <view class=&quot;custom-tree-node&quot;>
            <text style=&quot;color: red&quot;>{{ node.label }}*{{level}}</text>
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
</script>"
        language="vue"
        title="复选框及自定义内容"
      />

      <text id="自定义节点内容">
        <text href="tree.html#自定义节点内容" class="header-anchor">#</text>
        自定义节点内容
      </text>

      <CodeBlock
        code="<template>
  <up-tree :data=&quot;treeData&quot; :props=&quot;defaultProps&quot;>
    <template #default=&quot;{ node }&quot;>
      <view class=&quot;custom-node&quot;>
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
</script>"
        language="vue"
        title="自定义节点内容"
      />

      <text id="获取选中节点">
        <text href="tree.html#获取选中节点" class="header-anchor">#</text>
        获取选中节点
      </text>

      <CodeBlock
        code="<template>
  <up-tree
    ref=&quot;treeRef&quot;
    :data=&quot;treeData&quot;
    :props=&quot;defaultProps&quot;
    show-checkbox
    @check-change=&quot;handleCheckChange&quot; />
  <up-button @click=&quot;getCheckedNodes&quot;>获取选中节点</up-button>
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
</script>"
        language="vue"
        title="获取选中节点"
      />

      <text id="api">
        <text href="tree.html#api" class="header-anchor">#</text>
        API
      </text>

      <text id="props-参数说明">
        <text href="tree.html#props-参数说明" class="header-anchor">#</text>
        Props 参数说明
      </text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data</td>
            <td>树的数据源</td>
            <td><code>Array</code></td>
            <td><code>[]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>props</td>
            <td>配置节点字段映射（如 label、children）</td>
            <td><code>Object</code></td>
            <td><code>{ label: 'label', children: 'children', nodeKey: 'id' }</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>show-checkbox</td>
            <td>是否显示复选框</td>
            <td><code>Boolean</code></td>
            <td><code>false</code></td>
            <td><code>true / false</code></td>
          </tr>
          <tr>
            <td>default-expand-all</td>
            <td>是否默认展开所有节点</td>
            <td><code>Boolean</code></td>
            <td><code>false</code></td>
            <td><code>true / false</code></td>
          </tr>
          <tr>
            <td>expand-on-click-node</td>
            <td>是否在点击节点时展开或折叠</td>
            <td><code>Boolean</code></td>
            <td><code>true</code></td>
            <td><code>true / false</code></td>
          </tr>
          <tr>
            <td>check-strictly</td>
            <td>是否启用父子节点不关联选择</td>
            <td><code>Boolean</code></td>
            <td><code>false</code></td>
            <td><code>true / false</code></td>
          </tr>
          <tr>
            <td>node-key</td>
            <td>每个节点的唯一标识字段名</td>
            <td><code>String</code></td>
            <td><code>'id'</code></td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <text id="events-事件说明">
        <text href="tree.html#events-事件说明" class="header-anchor">#</text>
        Events 事件说明
      </text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@node-click</td>
            <td>点击节点时触发</td>
            <td><code>(node: object) => void</code></td>
          </tr>
          <tr>
            <td>@check-change</td>
            <td>节点勾选状态变化时触发</td>
            <td><code>(node: object, checked: boolean) => void</code></td>
          </tr>
        </tbody>
      </table>

      <text id="ref-事件说明">
        <text href="tree.html#ref-事件说明" class="header-anchor">#</text>
        Ref 事件说明
      </text>
      <table>
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>返回值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>getCheckedNodes()</td>
            <td>获取当前所有选中的节点列表</td>
            <td><code>nodes[]</code></td>
          </tr>
        </tbody>
      </table>

      <text id="插槽说明-slot">
        <text href="tree.html#插槽说明-slot" class="header-anchor">#</text>
        插槽说明（Slot）
      </text>
      <table>
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>自定义节点内容插槽</td>
            <td><code>{ node, level }</code></td>
          </tr>
        </tbody>
      </table>

      <text id="支持的功能特性">
        <text href="tree.html#支持的功能特性" class="header-anchor">#</text>
        支持的功能特性
      </text>
      <table>
        <thead>
          <tr>
            <th>功能</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>展开/折叠</td>
            <td>支持点击箭头或配置 <code>expand-on-click-node</code> 控制展开逻辑</td>
          </tr>
          <tr>
            <td>复选框联动</td>
            <td>父子节点自动同步勾选状态（除非开启 <code>check-strictly</code>）</td>
          </tr>
          <tr>
            <td>数据初始化</td>
            <td>自动注入 <code>expanded</code> 和 <code>checked</code> 字段</td>
          </tr>
          <tr>
            <td>自定义渲染</td>
            <td>通过插槽实现节点内容高度定制</td>
          </tr>
          <tr>
            <td>获取选中节点</td>
            <td>提供 <code>getCheckedNodes()</code> 方法获取当前选中数据</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.tree-page {
  padding: 20px;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 8px;
  vertical-align: middle;

  &.tip {
    background-color: #67c23a;
    color: white;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 10px;
    border: 1px solid #ebeef5;
  }

  th {
    background-color: #f5f7fa;
  }
}

code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
</style>
