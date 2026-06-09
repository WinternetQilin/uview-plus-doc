<template>
  <view class="checkbox-page">
    <view class="page-header">
      <view class="header-badge">
        表单组件
      </view>
      <view id="checkbox-复选框" class="page-title">
        Checkbox 复选框
      </view>
      <view class="page-desc">
        复选框组件一般用于需要多个选择的场景，该组件功能完整，使用方便
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
                  √
                </view>
              </td>
              <td>
                <view class="check-icon">
                  √
                </view>
              </td>
              <td>
                <view class="check-icon">
                  √
                </view>
              </td>
              <td>
                <view class="check-icon">
                  √
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
        通过
        <code>v-model</code>
        绑定选中的值，
        <code>up-checkbox</code>
        需要配合
        <code>up-checkbox-group</code>
        使用
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
    </view>

    <view class="section">
      <view id="独立使用up-checkbox" class="section-title">
        独立使用 up-checkbox
      </view>
      <view class="section-desc">
        通过
        <code>usedAlone</code>
        可以设置独立使用，如果不使用
        <code>usedAlone</code>
        ，需配合
        <code>up-checkbox-group</code>
        组件使用
      </view>
      <view class="section-desc">
        独立使用
        <code>up-checkbox</code>
        时，必须通过
        <code>v-model</code>
        绑定一个布尔值的变量，否则无法操作
      </view>
      <CodeBlock title="独立使用 up-checkbox" language="html" :code="usedAloneCode" />
    </view>

    <view class="section">
      <view id="自定义形状" class="section-title">
        自定义形状
      </view>
      <view class="section-desc">
        通过
        <code>shape</code>
        可以设置选择形状
      </view>
      <CodeBlock title="自定义形状" language="html" :code="shapeCode" />
    </view>

    <view class="section">
      <view id="禁用checkbox" class="section-title">
        禁用 checkbox
      </view>
      <view class="section-desc">
        设置
        <code>disabled</code>
        为
        <code>true</code>
        ，即可禁用某个组件，让用户无法点击，禁用分为两种状态：一是未勾选前禁用，这时只显示一个灰色的区域；二是已勾选后禁用（选中状态），会显示一个灰色的勾选图标。
      </view>
      <CodeBlock title="禁用 checkbox" language="html" :code="disabledCode" />
    </view>

    <view class="section">
      <view id="自定义颜色" class="section-title">
        自定义颜色
      </view>
      <view class="section-desc">
        此处所指的颜色，为
        <code>checkbox</code>
        选中时的背景颜色，参数为
        <code>activeColor</code>
      </view>
      <CodeBlock title="自定义颜色" language="html" :code="customColorCode" />
    </view>

    <view class="section">
      <view id="横向排列形式" class="section-title">
        横向排列形式
      </view>
      <view class="section-desc">
        可以通过设置
        <code>placement</code>
        为
        <code>row</code>
        或者
        <code>column</code>
        ，将复选框设置为横向排列或者竖向排列
      </view>
      <CodeBlock title="横向排列形式" language="html" :code="placementCode" />
    </view>

    <view class="section">
      <view id="自定义样式" class="section-title">
        自定义样式
      </view>
      <view class="section-desc">
        组件支持多种自定义样式，您可以通过传递对应的属性来自定义复选框和标签的样式
      </view>
      <view class="list-items">
        <view>
          通过
          <code>shape</code>
          设置复选框的形状
        </view>
        <view>
          通过
          <code>size</code>
          设置整体的大小
        </view>
        <view>
          通过
          <code>activeColor</code>
          设置选中状态下的颜色
        </view>
        <view>
          通过
          <code>inactiveColor</code>
          设置未选中的颜色
        </view>
        <view>
          通过
          <code>label</code>
          来设置 label 提示文字
        </view>
      </view>
      <CodeBlock title="自定义样式" language="html" :code="customStyleCode" />
    </view>

    <view class="section">
      <view id="右侧演示页面源代码地址" class="section-title">
        右侧演示页面源代码地址
      </view>
      <view class="link-card">
        <view class="link-content">
          <image
            class="link-icon"
            height="24"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            width="24"
          />
          <text>点击以下链接以查看右侧演示页面的源码</text>
        </view>
        <view class="link-actions">
          <text
            href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.vue"
            target="_blank"
          >
            GitHub
          </text>
          <text
            href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsA/checkbox/checkbox.nvue"
            target="_blank"
          >
            Gitee
          </text>
        </view>
      </view>
    </view>

    <view class="section">
      <view id="api" class="section-title">
        API
      </view>

      <view id="checkbox-props" class="subsection-title">
        Checkbox Props
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
              <td>name</td>
              <td>checkbox 的名称</td>
              <td>String | Number | Boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>形状，square 为方形，circle 为圆型</td>
              <td>String</td>
              <td>square</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>size</td>
              <td>整体的大小</td>
              <td>String | Number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>checked</td>
              <td>是否默认选中</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>String | Boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>activeColor</td>
              <td>选中状态下的颜色，如设置此值，将会覆盖 parent 的 activeColor 值</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>inactiveColor</td>
              <td>未选中的颜色</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>iconSize</td>
              <td>图标的大小，单位 px</td>
              <td>String | Number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>iconColor</td>
              <td>图标颜色</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>label</td>
              <td>
                label 提示文字，因为 nvue 下，直接 slot 进来的文字，由于特殊的结构，无法修改样式
              </td>
              <td>String | Number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelSize</td>
              <td>label 的字体大小，px 单位</td>
              <td>String | Number</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelColor</td>
              <td>label 的颜色</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelDisabled</td>
              <td>是否禁止点击提示语选中复选框</td>
              <td>String | Boolean</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>usedAlone</td>
              <td>是否独立使用复选框</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="checkboxgroup-props" class="subsection-title">
        CheckboxGroup Props
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
              <td>name</td>
              <td>标识符</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>modelValue</td>
              <td>绑定的值</td>
              <td>Array</td>
              <td>[]</td>
              <td>-</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>形状，circle-圆形，square-方形</td>
              <td>String</td>
              <td>square</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用全部 checkbox</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>activeColor</td>
              <td>选中状态下的颜色，如子 Checkbox 组件设置此值，将会覆盖本值</td>
              <td>String</td>
              <td>#2979ff</td>
              <td>-</td>
            </tr>
            <tr>
              <td>inactiveColor</td>
              <td>未选中的颜色</td>
              <td>String</td>
              <td>#c8c9cc</td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>整个组件的尺寸，默认 px</td>
              <td>String</td>
              <td>18</td>
              <td>-</td>
            </tr>
            <tr>
              <td>label</td>
              <td>文本</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelColor</td>
              <td>label 的字体颜色</td>
              <td>String</td>
              <td>#303133</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelSize</td>
              <td>label 的字体大小，px 单位</td>
              <td>String | Number</td>
              <td>14</td>
              <td>-</td>
            </tr>
            <tr>
              <td>labelDisabled</td>
              <td>是否禁止点击文本操作</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>iconColor</td>
              <td>图标颜色</td>
              <td>String</td>
              <td>#ffffff</td>
              <td>-</td>
            </tr>
            <tr>
              <td>iconSize</td>
              <td>图标的大小，单位 px</td>
              <td>String | Number</td>
              <td>12</td>
              <td>-</td>
            </tr>
            <tr>
              <td>iconPlacement</td>
              <td>勾选图标的对齐方式，left-左边，right-右边</td>
              <td>String</td>
              <td>left</td>
              <td>right</td>
            </tr>
            <tr>
              <td>borderBottom</td>
              <td>竖向配列时，是否显示下划线</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="checkbox-slot" class="subsection-title">
        Checkbox Slot
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
              <td>
                icon
                <text class="version-badge">3.2.25</text>
              </td>
              <td>自定义 icon 内容</td>
            </tr>
            <tr>
              <td>
                label
                <text class="version-badge">3.2.25</text>
              </td>
              <td>自定义 label 内容</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="checkboxgroup-event" class="subsection-title">
        CheckboxGroup Event
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
              <td>change</td>
              <td>任一个 checkbox 状态发生变化时触发，回调为一个对象</td>
              <td>
                detail = array( [元素为被选中的 checkbox 的 name], object { name: 当前点击的
                checkbox 的 name, isChecked: 当前点击的 checkbox 是否选中 } )
              </td>
            </tr>
          </tbody>
        </table>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
    <up-checkbox-group
        v-model="checkboxValue1"
        placement="column"
        @change="checkboxChange"
    >
        <up-checkbox
            :customStyle="{marginBottom: '10px'}"
            v-for="(item, index) in checkboxList1"
            :key="index"
            :label="item.name"
            :name="item.name"
        >
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);

const checkboxList1 = reactive([
  {
    name: '苹果',
    disabled: false,
  },
  {
    name: '香蕉',
    disabled: false,
  },
  {
    name: '橙子',
    disabled: false,
  },
]);

const checkboxChange = (n) => {
  console.log('change', n);
}
<\/script>`

const usedAloneCode = `<template>
    <up-checkbox
        v-model="checked"
        label="我已同意"
        iconPlacement="right"
        @change="change"
    >
    </up-checkbox>
</template>

<script setup>
import { ref } from 'vue';

const checked = ref(false);

const change = (e) => {
    console.log('change', e);
}
<\/script>`

const shapeCode = `<template>
    <up-checkbox-group v-model="checkboxValue1">
        <up-checkbox
            shape="circle"
            label="圆形"
            name="1"
        >
        </up-checkbox>
        <up-checkbox
            shape="square"
            label="方形"
            name="2"
        >
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`

const disabledCode = `<template>
    <up-checkbox-group v-model="checkboxValue1">
        <up-checkbox
            :disabled="true"
            label="禁用"
            name="1"
        >
        </up-checkbox>
        <up-checkbox
            label="未禁用"
            name="2"
        >
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive([]);
<\/script>`

const customColorCode = `<template>
    <up-checkbox-group v-model="checked" activeColor="#ff0000">
        <up-checkbox label="红色" name="1">
        </up-checkbox>
        <up-checkbox label="绿色" name="2">
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checked = reactive(['1']);
<\/script>`

const placementCode = `<template>
    <up-checkbox-group v-model="checkboxValue1" placement="row">
        <up-checkbox label="横向排列" name="1">
        </up-checkbox>
        <up-checkbox label="横向排列" name="2">
        </up-checkbox>
    </up-checkbox-group>
</template>

<script setup>
import { ref, reactive } from 'vue';

const checkboxValue1 = reactive(['1']);
<\/script>`

const customStyleCode = `<template>
    <up-checkbox-group v-model="checkboxValue1">
        <up-checkbox
            shape="circle"
            activeColor="#ff0000"
            label="自定义颜色"
            name="1"
        >
        </up-checkbox>
        <up-checkbox
            size="24"
            label="自定义大小"
            name="2"
        >
        </up-checkbox>
    </up-checkbox-group>
</template>`
</script>

<style lang="scss" scoped>
.checkbox-page {
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
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-desc {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.6;
}

.section {
  margin-bottom: 32px;
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

.list-items {
  margin-bottom: 16px;

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
}

code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  color: #c7254e;
  font-size: 0.9em;
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

.version-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e0f2fe;
  color: #0284c7;
  font-weight: 500;
  margin-left: 4px;
}
</style>
