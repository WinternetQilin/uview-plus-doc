<template>
  <view class="textarea-page">
    <view class="page-header">
      <view class="header-badge">
        表单组件
      </view>
      <view id="textarea-文本域" class="page-title">
        Textarea 文本域
      </view>
      <view class="page-desc">
        文本域此组件满足了可能出现的表单信息补充，编辑等实际逻辑的功能，内置了字数校验等
      </view>
    </view>

    <view class="notice-card danger">
      <view class="notice-icon">
        !
      </view>
      <view class="notice-content">
        <text class="notice-title">注意事项</text>
        <text>由于在<code>nvue</code>下，<code>u-textarea</code>名称被uni-app官方占用，在<code>nvue</code>页面中请使用<code>up-textarea</code>名称，在<code>vue</code>页面中使用<code>up-textarea</code>或者<code>u-textarea</code>均可。</text>
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
      <view class="demo-container">
        <up-textarea v-model="value1" placeholder="请输入内容" />
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="字数统计" class="section-title">
        字数统计
      </view>
      <view class="section-desc">
        设置<code>count</code>属性实现字数统计
      </view>
      <view class="demo-container">
        <up-textarea v-model="value2" placeholder="请输入内容" count />
      </view>
      <CodeBlock title="字数统计" language="html" :code="countCode" />
    </view>

    <view class="section">
      <view id="自动增高" class="section-title">
        自动增高
      </view>
      <view class="section-desc">
        设置<code>autoHeight</code>属性实现自动增高，设置<code>maxlength</code>为-1时取消字数限制（默认140字无法展示出自动增高效果）
      </view>
      <view class="demo-container">
        <up-textarea v-model="value3" placeholder="请输入内容" auto-height maxlength="-1" />
      </view>
      <CodeBlock title="自动增高" language="html" :code="autoHeightCode" />
    </view>

    <view class="section">
      <view id="禁用" class="section-title">
        禁用
      </view>
      <view class="section-desc">
        设置<code>disabled</code>属性禁用文本域
      </view>
      <view class="demo-container">
        <up-textarea v-model="value4" placeholder="请输入内容" disabled />
      </view>
      <CodeBlock title="禁用" language="html" :code="disabledCode" />
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
              <td>modelValue</td>
              <td>输入框的内容</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框为空时占位符</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>height</td>
              <td>输入框高度</td>
              <td>String | Number</td>
              <td>70</td>
              <td>-</td>
            </tr>
            <tr>
              <td>confirmType</td>
              <td>设置键盘右下角按钮的文字，仅微信小程序、App-vue和H5有效</td>
              <td>String</td>
              <td>done</td>
              <td>send | search | next | go | done | return</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>count</td>
              <td>是否显示统计字数</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>是否自动获取焦点，nvue不支持，H5取决于浏览器的实现</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>autoHeight</td>
              <td>是否自动增加高度</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>如果textarea是在一个position:fixed的区域，需要显示指定属性fixed为true</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>cursorSpacing</td>
              <td>指定光标与键盘的距离</td>
              <td>Number</td>
              <td>0</td>
              <td>-</td>
            </tr>
            <tr>
              <td>cursor</td>
              <td>指定focus时的光标位置</td>
              <td>Number | String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showConfirmBar</td>
              <td>是否显示键盘上方带有"完成"按钮那一栏</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>selectionStart</td>
              <td>光标起始位置，自动聚焦时有效，需与selection-end搭配使用</td>
              <td>Number</td>
              <td>-1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selectionEnd</td>
              <td>光标结束位置，自动聚焦时有效，需与selection-start搭配使用</td>
              <td>Number</td>
              <td>-1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>adjustPosition</td>
              <td>键盘弹起时，是否自动上推页面</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>disableDefaultPadding</td>
              <td>是否去掉iOS下的默认内边距，只微信小程序有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>holdKeyboard</td>
              <td>focus时，点击页面的时候不收起键盘，只微信小程序有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>最大输入长度，设置为-1的时候不限制最大长度</td>
              <td>String | Number</td>
              <td>140</td>
              <td>-</td>
            </tr>
            <tr>
              <td>border</td>
              <td>边框类型</td>
              <td>String</td>
              <td>surround</td>
              <td>surround / none / bottom</td>
            </tr>
            <tr>
              <td>placeholderClass</td>
              <td>指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/</td>
              <td>String</td>
              <td>textarea-placeholder</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholderStyle</td>
              <td>指定placeholder的样式，字符串/对象形式</td>
              <td>String | Object</td>
              <td>color: #c0c4cc</td>
              <td>-</td>
            </tr>
            <tr>
              <td>formatter</td>
              <td>输入过滤或格式化函数(需兼容微信小程序，则只能通过setFormatter方法)</td>
              <td>Function</td>
              <td>null</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="methods" class="subsection-title">
        Methods
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>方法名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>setFormatter</td>
              <td>为兼容微信小程序而暴露的内部方法，见上方说明</td>
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
              <td>focus</td>
              <td>输入框聚焦时触发</td>
              <td>e.detail = { value, height }，height为键盘高度</td>
            </tr>
            <tr>
              <td>blur</td>
              <td>输入框失去焦点时触发</td>
              <td>e.detail = { value, cursor }</td>
            </tr>
            <tr>
              <td>linechange</td>
              <td>输入框行数变化时调用</td>
              <td>e.detail = { height, heightRpx, lineCount }</td>
            </tr>
            <tr>
              <td>update:modelValue</td>
              <td>当键盘输入时，触发input事件</td>
              <td>e.detail.value</td>
            </tr>
            <tr>
              <td>confirm</td>
              <td>点击完成时，触发confirm事件</td>
              <td>e</td>
            </tr>
            <tr>
              <td>keyboardheightchange</td>
              <td>键盘高度发生变化的时候触发此事件</td>
              <td>e</td>
            </tr>
          </tbody>
        </table>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <up-textarea v-model="value1" placeholder="请输入内容"></up-textarea>
</template>

<script setup>
import { ref } from 'vue';

const value1 = ref('');
<\/script>`
const value1 = ref<string>('')

const countCode = `<template>
  <up-textarea v-model="value2" placeholder="请输入内容" count></up-textarea>
</template>

<script setup>
import { ref } from 'vue';

const value2 = ref('');
<\/script>`
const value2 = ref<string>('')

const autoHeightCode = `<template>
  <up-textarea v-model="value3" placeholder="请输入内容" autoHeight maxlength="-1" ></up-textarea>
</template>

<script setup>
import { ref } from 'vue';

const value3 = ref('');
<\/script>`
const value3 = ref<string>('')

const disabledCode = `<template>
  <up-textarea v-model="value4" placeholder="请输入内容" disabled></up-textarea>
</template>

<script setup>
import { ref } from 'vue';

const value4 = ref('');
<\/script>`
const value4 = ref<string>('')
</script>

<style lang="scss" scoped>
.textarea-page {
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

.notice-card {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 32px;
  border: 1px solid;

  &.danger {
    background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
    border-color: #fecaca;
  }
}

.notice-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #dc2626;
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
  color: #991b1b;
  font-size: 14px;
}

.notice-content text:last-child {
  font-size: 14px;
  color: #7f1d1d;
  line-height: 1.6;
}

.section {
  margin-bottom: 40rpx;

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
</style>
