<template>
  <view class="tabs-page">
    <view class="page-header">
      <view class="header-badge">
        布局组件
      </view>
      <view id="tabs-标签" class="page-title">
        Tabs 标签
      </view>
      <view class="page-desc">
        该组件，是一个tabs标签组件，在标签多的时候，可以配置为左右滑动，标签少的时候，可以禁止滑动。 该组件的一个特点是配置为滚动模式时，激活的tab会自动移动到组件的中间位置。
      </view>
    </view>

    <view class="section">
      <view id="平台差异说明" class="section-title">
        平台差异说明
      </view>
      <view class="table-wrapper">
        <table class="platform-table">
          <thead>
            <tr>
              <th>App（vue）</th>
              <th>App（nvue）</th>
              <th>H5</th>
              <th>小程序</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <view class="check-icon">
                  ✓
                </view>
              </td>
              <td>
                <view class="check-icon">
                  ✓
                </view>
              </td>
              <td>
                <view class="check-icon">
                  ✓
                </view>
              </td>
              <td>
                <view class="check-icon">
                  ✓
                </view>
              </td>
            </tr>
          </tbody>
        </table>
      </view>
    </view>

    <view class="section">
      <view id="基本使用" class="section-title">
        基本使用
      </view>
      <view class="section-desc">
        通过设置<code>scrollable</code>（默认为<code>true</code>），配置tabs组件的内容是否可以左右拖动。
      </view>
      <view class="notice-card tip">
        <view class="notice-icon">
          !
        </view>
        <view class="notice-content">
          <text class="notice-title">说明</text>
          <text><code>scrollable</code>参数很重要，如果您的tabs项只有几个，且不想tabs导航栏可以被左右滑动的话，请一定要设置<code>scrollable</code>为<code>false</code>，因为它默认为<code>true</code>。</text>
        </view>
      </view>
      <view class="demo-container">
        <up-tabs :list="list" @click="click" />
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="粘性布局" class="section-title">
        粘性布局
      </view>
      <view class="section-desc">
        通过加上<code>up-sticky</code>来使tabs滑动浮动在最顶部。
      </view>
      <view class="demo-container">
        <up-sticky>
          <up-tabs :list="list" @click="click" />
        </up-sticky>
      </view>
      <CodeBlock title="粘性布局" language="html" :code="stickyCode" />
    </view>

    <view class="section">
      <view id="显示徽标" class="section-title">
        显示徽标
      </view>
      <view class="section-desc">
        可以通过在列表对象中加入<code>badge</code>来设置徽标。
      </view>
      <CodeBlock title="显示徽标" language="html" :code="badgeCode" />
    </view>

    <view class="section">
      <view id="禁用" class="section-title">
        禁用
      </view>
      <view class="section-desc">
        可以通过在列表对象中加入<code>disabled = true</code>来设置禁用。
      </view>
      <CodeBlock title="禁用" language="html" :code="disabledCode" />
    </view>

    <view class="section">
      <view id="自定义样式" class="section-title">
        自定义样式
      </view>
      <view class="section-desc">
        通过使用<code>activeStyle</code>、<code>inactiveStyle</code>、<code>itemStyle</code>来设置tabs的样式。
      </view>
      <CodeBlock title="自定义样式" language="html" :code="styleCode" />
    </view>

    <view class="section">
      <view id="滑块设置背景图" class="section-title">
        滑块设置背景图 <view class="version-badge">
          2.0.30
        </view>
      </view>
      <view class="section-desc">
        通过使用<code>lineColor</code>来设置滑块背景图。
      </view>
      <CodeBlock title="滑块设置背景图" language="html" :code="lineColorCode" />
    </view>

    <view class="section">
      <view id="tab内容自定义插槽" class="section-title">
        Tab内容自定义插槽
      </view>
      <CodeBlock title="Tab内容自定义插槽" language="html" :code="tabSlotCode" />
    </view>

    <view class="section">
      <view id="右侧自定义插槽" class="section-title">
        右侧自定义插槽
      </view>
      <CodeBlock title="右侧自定义插槽" language="html" :code="rightSlotCode" />
    </view>

    <view class="section">
      <view id="api" class="section-title">
        API
      </view>

      <view id="props" class="subsection-title">
        Props
      </view>
      <view class="table-wrapper">
        <table class="api-table">
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
              <td>duration</td>
              <td>滑块移动一次所需的时间，单位ms</td>
              <td>String | Number</td>
              <td>300</td>
              <td>-</td>
            </tr>
            <tr>
              <td>list</td>
              <td>标签数组，元素为对象，如[{name: '推荐'}]</td>
              <td>Array</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lineColor</td>
              <td>滑块颜色</td>
              <td>String</td>
              <td>#3c9cff</td>
              <td>-</td>
            </tr>
            <tr>
              <td>activeStyle</td>
              <td>菜单选择中时的样式</td>
              <td>String | Object</td>
              <td>{ color: '#303133' }</td>
              <td>-</td>
            </tr>
            <tr>
              <td>inactiveStyle</td>
              <td>菜单非选中时的样式</td>
              <td>String | Object</td>
              <td>{ color: '#606266' }</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lineWidth</td>
              <td>滑块长度</td>
              <td>String | Number</td>
              <td>20</td>
              <td>-</td>
            </tr>
            <tr>
              <td>lineHeight</td>
              <td>滑块高度</td>
              <td>String | Number</td>
              <td>3</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                lineBgSize <view class="version-badge">
                  2.0.30
                </view>
              </td>
              <td>滑块背景显示大小，当滑块背景设置为图片时使用</td>
              <td>String</td>
              <td>cover</td>
              <td>-</td>
            </tr>
            <tr>
              <td>itemStyle</td>
              <td>菜单item的样式</td>
              <td>String | Object</td>
              <td>{ height: '44px' }</td>
              <td>-</td>
            </tr>
            <tr>
              <td>scrollable</td>
              <td>菜单是否可滚动</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>current</td>
              <td>当前选中标签的索引</td>
              <td>String | Number</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>keyName</td>
              <td>从list元素对象中读取的键名</td>
              <td>String</td>
              <td>name</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                iconStyle <view class="version-badge">
                  3.3.72
                </view>
              </td>
              <td>左侧图标样式自定义</td>
              <td>Object</td>
              <td>{ color: '#303133' }</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="slot" class="subsection-title">
        Slot
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>名称</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>-</td>
              <td>整体左侧插槽</td>
            </tr>
            <tr>
              <td>-</td>
              <td>整体右侧插槽</td>
            </tr>
            <tr>
              <td>-</td>
              <td>自定义每个tab内容 #content="{item, keyName, index}"</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="events" class="subsection-title">
        Events
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>点击标签时触发</td>
              <td>index: 标签索引值，item: 传入的其他值（见下方类型声明）</td>
            </tr>
            <tr>
              <td>change</td>
              <td>标签索引改变时触发(disabled时不会触发)</td>
              <td>tabItem: { index: 标签索引值, ...item: 传入的其他值 }</td>
            </tr>
            <tr>
              <td>longPress</td>
              <td>长按标签时触发</td>
              <td>index: 标签索引值，item: 传入的其他值</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view class="mt-20rpx">
        <CodeBlock title="点击事件传参类型声明" language="typescript" :code="clickEventCode" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
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
<\/script>`
const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' },
])

function click(index) {
  console.log(`点击了第${index}个tab`)
}

const stickyCode = `<template>
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
<\/script>`

const badgeCode = `<template>
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
<\/script>`

const disabledCode = `<template>
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
<\/script>`

const styleCode = `<template>
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
<\/script>`

const lineColorCode = `<template>
  <up-tabs :list="list" lineColor="#2979ff"></up-tabs>
</template>

<script setup>
import { ref } from 'vue';

const list = ref([
  { name: '关注' },
  { name: '推荐' },
  { name: '热榜' }
]);
<\/script>`

const tabSlotCode = `<template>
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
<\/script>`

const rightSlotCode = `<template>
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
<\/script>`

const clickEventCode = `interface TabClickEvent {
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
}`
</script>

<style lang="scss" scoped>
.tabs-page {
  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
}

.header-badge {
  display: inline-block;
  padding: 4px 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 12px;
}

.page-title {
  font-size: 32px;
  font-weight: 700;
  color: #1f2329;
  margin-bottom: 12px;
}

.page-desc {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
}

.notice-card {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid;

  &.tip {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-color: #bae6fd;
  }
}

.notice-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #0ea5e9;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
}

.notice-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.notice-title {
  font-weight: 600;
  color: #075985;
  font-size: 14px;
}

.notice-content text:last-child {
  font-size: 14px;
  color: #0c4a6e;
  line-height: 1.6;
}

.section {
  margin-bottom: 40px;

  .demo-container {
    background-color: #f5f5f5;
    margin-bottom: 40rpx;
    padding: 24rpx;
    border-radius: 12rpx;
  }
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: #1f2329;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.version-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e0f2fe;
  color: #0284c7;
  font-weight: 500;
}

.section-desc {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.6;
}

.subsection-title {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 24px 0 12px;
}

.table-wrapper {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.platform-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;

  th {
    background: #f9fafb;
    color: #374151;
    font-weight: 600;
    padding: 14px 20px;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    font-size: 13px;
  }

  td {
    padding: 14px 20px;
    text-align: center;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
    font-size: 13px;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: #f9fafb;
  }
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;

  th {
    background: #f9fafb;
    color: #374151;
    font-weight: 600;
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    font-size: 13px;
  }

  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
    font-size: 13px;
    line-height: 1.5;
    user-select: text;
    -webkit-user-select: text;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: #f9fafb;
  }
}

.code-block-title {
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 8px;
}

.check-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #dcfce7;
  color: #16a34a;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 600;
}

.link-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
}

.link-content {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #374151;
  font-size: 14px;
}

.link-icon {
  border-radius: 6px;
}

.link-actions {
  display: flex;
  gap: 16px;

  text {
    color: #1890ff;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #40a9ff;
      text-decoration: underline;
    }
  }
}

code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  color: #c7254e;
  font-size: 0.9em;
}
</style>
