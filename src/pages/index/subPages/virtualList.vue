<template>
  <view class="virtualList-page">
    <view class="theme-default-content content__default">
      <text id="virtuallist-虚拟列表">
        <text href="virtualList.html#virtuallist-虚拟列表" class="header-anchor">#</text>
        VirtualList 虚拟列表 <text class="badge tip">3.1.80</text>
      </text>

      <text>虚拟列表是一种高性能的列表渲染技术，适用于需要渲染大量数据的场景。它通过只渲染可视区域内的元素，大大减少了DOM节点数量，提升了页面性能。</text>

      <text id="平台差异说明">
        <text href="virtualList.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>

      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
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
          </tr>
        </tbody>
      </table>

      <text id="基本使用">
        <text href="virtualList.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>

      <text>通过 listData 传入需要渲染的数据列表，通过插槽自定义列表项内容。</text>

      <CodeBlock
        code="<template>
  <view>
    <up-virtual-list :list-data=&quot;list&quot; :item-height=&quot;50&quot;>
      <template #item=&quot;{ item }&quot;>
        <view class=&quot;list-item&quot;>
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 10000 }, (_, index) => ({
  id: index + 1,
  name: `Item ${index + 1}`
})));
</script>"
        language="vue"
        title="基本使用"
      />

      <text id="设置列表高度">
        <text href="virtualList.html#设置列表高度" class="header-anchor">#</text>
        设置列表高度
      </text>

      <text>通过 height 设置虚拟列表容器的高度。</text>

      <CodeBlock
        code="<template>
  <view>
    <up-virtual-list
      :list-data=&quot;list&quot;
      :height=&quot;400&quot;
      :item-height=&quot;50&quot;
    >
      <template #item=&quot;{ item }&quot;>
        <view class=&quot;list-item&quot;>
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>"
        language="vue"
        title="设置列表高度"
      />

      <text id="自定义缓冲区">
        <text href="virtualList.html#自定义缓冲区" class="header-anchor">#</text>
        自定义缓冲区
      </text>

      <text>通过 buffer 设置可视区域外的缓冲区大小，提升滚动体验。</text>

      <CodeBlock
        code="<template>
  <view>
    <up-virtual-list
      :list-data=&quot;list&quot;
      :item-height=&quot;60&quot;
      :buffer=&quot;10&quot;
    >
      <template #item=&quot;{ item }&quot;>
        <view class=&quot;list-item&quot;>
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 5000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));
</script>"
        language="vue"
        title="自定义缓冲区"
      />

      <text id="props">
        <text href="virtualList.html#props" class="header-anchor">#</text>
        Props
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
            <td>listData</td>
            <td>列表数据</td>
            <td>Array</td>
            <td>[]</td>
            <td>-</td>
          </tr>
          <tr>
            <td>itemHeight</td>
            <td>列表项高度</td>
            <td>Number</td>
            <td>50</td>
            <td>-</td>
          </tr>
          <tr>
            <td>height</td>
            <td>列表容器高度</td>
            <td>String | Number</td>
            <td>100%</td>
            <td>-</td>
          </tr>
          <tr>
            <td>buffer</td>
            <td>缓冲区大小(可视区域外的渲染数量)</td>
            <td>Number</td>
            <td>4</td>
            <td>-</td>
          </tr>
          <tr>
            <td>keyField</td>
            <td>唯一标识字段名</td>
            <td>String</td>
            <td>id</td>
            <td>-</td>
          </tr>
          <tr>
            <td>scrollTop</td>
            <td>当前滚动位置</td>
            <td>Number</td>
            <td>0</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <text id="events">
        <text href="virtualList.html#events" class="header-anchor">#</text>
        Events
      </text>

      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>update:scrollTop</td>
            <td>滚动时更新scrollTop值</td>
            <td>scrollTop</td>
          </tr>
          <tr>
            <td>scroll</td>
            <td>滚动时触发</td>
            <td>scrollTop</td>
          </tr>
        </tbody>
      </table>

      <text id="slots">
        <text href="virtualList.html#slots" class="header-anchor">#</text>
        Slots
      </text>

      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
            <th>SlotProps</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>列表项内容</td>
            <td>{ item, index }</td>
          </tr>
        </tbody>
      </table>

      <text id="方法">
        <text href="virtualList.html#方法" class="header-anchor">#</text>
        方法
      </text>

      <text>通过 ref 可以获取到虚拟列表实例并调用方法：</text>

      <table>
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>getVisibleRange()</td>
            <td>获取可见项范围</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <text id="监听滚动事件">
        <text href="virtualList.html#监听滚动事件" class="header-anchor">#</text>
        监听滚动事件
      </text>

      <CodeBlock
        code="<template>
  <view>
    <up-virtual-list
      :list-data=&quot;list&quot;
      :item-height=&quot;50&quot;
      @scroll=&quot;handleScroll&quot;
    >
      <template #item=&quot;{ item }&quot;>
        <view class=&quot;list-item&quot;>
          <text>{{ item.name }}</text>
        </view>
      </template>
    </up-virtual-list>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const list = ref(Array.from({ length: 1000 }, (_, index) => ({
  id: index,
  name: `Item ${index}`
})));

const handleScroll = (scrollTop) => {
  console.log('Current scroll position:', scrollTop);
};
</script>"
        language="vue"
        title="监听滚动事件"
      />

      <text id="注意事项">
        <text href="virtualList.html#注意事项" class="header-anchor">#</text>
        注意事项
      </text>

      <view>
        <view>每个列表项的高度必须固定且一致，通过<code>itemHeight</code>属性设置</view>
        <view>数据量越大，虚拟列表的性能优势越明显</view>
        <view>如果需要动态高度的列表项，请使用其他解决方案</view>
        <view>使用<code>keyField</code>指定唯一标识字段，避免渲染异常</view>
        <view>可通过 buffer 调整缓冲区大小以平衡性能和体验</view>
        <view>组件会自动测量容器高度，也可以通过 height 属性手动指定</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.virtualList-page {
  padding: 20px;
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
    font-weight: 600;
  }
}

code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.badge.tip {
  background-color: #67c23a;
  color: #fff;
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

view,
view {
  padding-left: 20px;

  view {
    margin: 8px 0;
  }
}

text,
text {
  margin-top: 24px;
  margin-bottom: 16px;
}
</style>
