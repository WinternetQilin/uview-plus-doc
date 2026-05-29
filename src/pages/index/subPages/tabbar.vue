<template>
  <view class="tabbar-page">
    <view class="page-header">
      <view class="header-badge">
        布局组件
      </view>
      <view id="tabbar-底部导航栏" class="page-title">
        Tabbar 底部导航栏
      </view>
      <view class="page-desc">
        此组件提供了自定义tabbar的能力，具有如下特点：
      </view>
      <view class="list-items">
        <view>图标可以使用字体图标(内置图标和扩展图标)或者图片</view>
        <view>可以动态切换菜单的数量以及配置</view>
        <view>切换菜单之前，可以进行回调鉴权</view>
        <view>可以设置角标或数字化提示</view>
        <view>有效防止组件区域高度塌陷，无需给父元素额外的内边距或者外边距来避开导航的区域</view>
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
        推荐您使用list数组遍历循环，案例使用基础方式构建，请根据<code>click</code>事件回调进行后续逻辑操作。
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="显示徽标" class="section-title">
        显示徽标
      </view>
      <view class="section-desc">
        使用<code>dot</code>属性添加小点类型徽标，使用<code>badge</code>属性添加数字类型徽标。您也可以使用<code>:badge='badge'</code>动态设置徽标数量。
      </view>
      <CodeBlock title="显示徽标" language="html" :code="badgeCode" />
    </view>

    <view class="section">
      <view id="匹配标签的名称" class="section-title">
        匹配标签的名称
      </view>
      <CodeBlock title="匹配标签的名称" language="html" :code="matchNameCode" />
    </view>

    <view class="section">
      <view id="自定义图标-颜色" class="section-title">
        自定义图标/颜色
      </view>
      <view class="section-desc">
        如您需要自定义图标/颜色，在<code>up-tabbar-item</code>标签中使用插槽<code>active-icon</code>和<code>inactive-icon</code>来定义图标和颜色。
      </view>
      <CodeBlock title="自定义图标/颜色" language="html" :code="iconCode" />
    </view>

    <view class="section">
      <view id="拦截切换事件-点击第二个标签" class="section-title">
        拦截切换事件(点击第二个标签)
      </view>
      <view class="section-desc">
        在切换事件中，处理拦截事件或者您其他js操作逻辑。
      </view>
      <CodeBlock title="拦截切换事件" language="html" :code="interceptCode" />
    </view>

    <view class="section">
      <view id="边框" class="section-title">
        边框
      </view>
      <view class="section-desc">
        组件默认带了顶部边框，如果不需要，配置<code>border</code>为<code>false</code>即可。
      </view>
      <CodeBlock title="边框" language="html" :code="borderCode" />
    </view>

    <view class="section">
      <view id="固定在底部" class="section-title">
        固定在底部
      </view>
      <view class="section-desc">
        与原生效果无异，但您可以按照api配置您需要的其他配置，如徽标，边框等。
      </view>
      <CodeBlock title="固定在底部" language="html" :code="fixedCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
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
<\/script>`

const badgeCode = `<template>
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
<\/script>`

const matchNameCode = `<template>
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
<\/script>`

const iconCode = `<template>
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
<\/script>`

const interceptCode = `<template>
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
<\/script>`

const borderCode = `<template>
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
<\/script>`

const fixedCode = `<template>
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
<\/script>`
</script>

<style lang="scss" scoped>
.tabbar-page {
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
  margin-bottom: 12px;
}

.list-items {
  view {
    font-size: 14px;
    color: #4b5563;
    line-height: 1.8;
    padding-left: 16px;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: 0;
      color: #9ca3af;
    }
  }
  margin-bottom: 16px;
}

.section {
  margin-bottom: 40px;
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

.section-desc {
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 12px;
  line-height: 1.6;
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
