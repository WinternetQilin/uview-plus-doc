<template>
  <view class="text-page">
    <view class="page-header">
      <view class="header-badge">
        基础组件
      </view>
      <view id="text-文本" class="page-title">
        Text 文本
      </view>
      <view class="page-desc">
        此组件集成了文本类在项目中的常用功能，包括状态，拨打电话，格式化日期，*替换，超链接...等功能。您大可不必在使用特殊文本时自己定义，text组件几乎涵盖您能使用的大部分场景。
      </view>
    </view>

    <view class="notice-card warning">
      <view class="notice-icon">
        !
      </view>
      <view class="notice-content">
        <text class="notice-title">注意</text>
        <text>由于在<code>nvue</code>下，<code>u-text</code>名称被uni-app官方占用，在<code>nvue</code>页面中请使用<code>up-text</code>名称，在<code>vue</code>页面中使用<code>up-text</code>或者<code>u-text</code>均可。</text>
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
        通过<code>text</code>参数设置文本内容。推荐您使用<code>:text='value'</code>的形式
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="设置主题" class="section-title">
        设置主题
      </view>
      <view class="section-desc">
        通过<code>type</code>参数设置文本主题，我们提供了五类属性。
      </view>
      <view class="section-desc">
        <code>primary error success warning info</code>
      </view>
      <CodeBlock title="设置主题" language="html" :code="themeCode" />
    </view>

    <view class="section">
      <view id="拨打电话" class="section-title">
        拨打电话
      </view>
      <view class="section-desc">
        通过将<code>mode</code>属性设置为<code>phone</code>即可调用拨打电话，提供加密值<code>encrypt</code>
      </view>
      <view class="section-desc">
        除此之外还有格式化日期，姓名脱敏，超链接，千分位金额等属性，将在以下实例中展示
      </view>
      <CodeBlock title="拨打电话" language="html" :code="phoneCode" />
    </view>

    <view class="section">
      <view id="日期格式化" class="section-title">
        日期格式化
      </view>
      <CodeBlock title="日期格式化" language="html" :code="dateCode" />
    </view>

    <view class="section">
      <view id="姓名脱敏" class="section-title">
        姓名脱敏
      </view>
      <CodeBlock title="姓名脱敏" language="html" :code="nameCode" />
    </view>

    <view class="section">
      <view id="超链接" class="section-title">
        超链接
      </view>
      <CodeBlock title="超链接" language="html" :code="linkCode" />
    </view>

    <view class="section">
      <view id="千分位格式化" class="section-title">
        千分位格式化
      </view>
      <CodeBlock title="千分位格式化" language="html" :code="priceCode" />
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
              <td>输入的值</td>
              <td>Number | String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>输入框类型，见上方说明</td>
              <td>String</td>
              <td>text</td>
              <td>number | idcard | digit | password</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用输入框</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>disabledColor</td>
              <td>禁用状态时的背景色</td>
              <td>String</td>
              <td>#f5f7fa</td>
              <td>-</td>
            </tr>
            <tr>
              <td>clearable</td>
              <td>是否显示清除控件</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>onlyClearableOnFocused <up-tag text="3.5.7" size="mini" type="warning" /></td>
              <td>clearabled开启时是否仅聚焦时才显示清除控件</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>password</td>
              <td>是否密码类型</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>maxlength</td>
              <td>最大输入长度，设置为 -1 的时候不限制最大长度（在支付宝小程序存在问题不推推荐用-1）</td>
              <td>String | Number</td>
              <td>140</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>输入框为空时的占位符</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholderClass</td>
              <td>指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/</td>
              <td>String</td>
              <td>input-placeholder</td>
              <td>-</td>
            </tr>
            <tr>
              <td>placeholderStyle</td>
              <td>指定placeholder的样式，字符串/对象形式，如"color: red;"</td>
              <td>String | Object</td>
              <td>color: #c0c4cc</td>
              <td>-</td>
            </tr>
            <tr>
              <td>showWordLimit</td>
              <td>是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>confirmType</td>
              <td>设置右下角按钮的文字，兼容性详见uni-app文档</td>
              <td>String</td>
              <td>done</td>
              <td>send | search | next | go | done</td>
            </tr>
            <tr>
              <td>confirmHold</td>
              <td>点击键盘右下角按钮时是否保持键盘不收起，H5无效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>holdKeyboard</td>
              <td>focus时，点击页面的时候不收起键盘，微信小程序有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>自动获取焦点，在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用doFocus()、doBlur() 方法控制焦点</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>autoBlur</td>
              <td>键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>disableDefaultPadding</td>
              <td>是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>cursor</td>
              <td>指定focus时光标的位置</td>
              <td>String | Number</td>
              <td>-1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>cursorColor <up-tag text="3.4.74" size="mini" type="warning" /></td>
              <td>输入框光标颜色【微信小程序 3.1.0+、H5(4.0+)、App-Vue(4.0+)】</td>
              <td>String</td>
              <td>''</td>
              <td>-</td>
            </tr>
            <tr>
              <td>cursorSpacing</td>
              <td>输入框聚焦时底部与键盘的距离</td>
              <td>String | Number</td>
              <td>30</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selectionStart</td>
              <td>光标起始位置，自动聚集时有效，需与selection-end搭配使用</td>
              <td>String | Number</td>
              <td>-1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selectionEnd</td>
              <td>光标结束位置，自动聚集时有效，需与selection-start搭配使用</td>
              <td>String | Number</td>
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
              <td>inputAlign</td>
              <td>输入框内容对齐方式</td>
              <td>String</td>
              <td>left</td>
              <td>left | center | right</td>
            </tr>
            <tr>
              <td>fontSize</td>
              <td>输入框字体的大小</td>
              <td>String | Number</td>
              <td>15px</td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>输入框字体颜色</td>
              <td>String</td>
              <td>#303133</td>
              <td>-</td>
            </tr>
            <tr>
              <td>prefixIcon</td>
              <td>输入框前置图标</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>prefixIconStyle</td>
              <td>前置图标样式，对象或字符串</td>
              <td>String | Object</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffixIcon</td>
              <td>输入框后置图标</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>suffixIconStyle</td>
              <td>后置图标样式，对象或字符串</td>
              <td>String | Object</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>border</td>
              <td>边框类型，surround-四周边框，bottom-底部边框，none-无边框</td>
              <td>String</td>
              <td>surround</td>
              <td>bottom | none</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>输入框形状，circle-圆形，square-方形</td>
              <td>String</td>
              <td>square</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>formatter</td>
              <td>输入过滤或格式化函数(如需兼容微信小程序，则只能通过 setFormatter 方法)</td>
              <td>Function</td>
              <td>null</td>
              <td>-</td>
            </tr>
            <tr>
              <td>customStyle</td>
              <td>定义需要用到的外部样式</td>
              <td>Object</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>passwordVisibilityToggle <up-tag text="3.4.107" size="mini" type="warning" /></td>
              <td>是否显示右侧密码显示切换图标</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
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
              <td>blur</td>
              <td>输入框失去焦点时触发</td>
              <td>value：内容值</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>输入框聚焦时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>confirm</td>
              <td>点击完成按钮时触发</td>
              <td>value：内容值</td>
            </tr>
            <tr>
              <td>keyboardheightchange</td>
              <td>键盘高度发生变化的时候触发此事件</td>
              <td>-</td>
            </tr>
            <tr>
              <td>update:modelValue</td>
              <td>内容发生变化触发此事件</td>
              <td>value：内容值</td>
            </tr>
            <tr>
              <td>change</td>
              <td>内容发生变化触发此事件</td>
              <td>value：内容值</td>
            </tr>
            <tr>
              <td>clear</td>
              <td>点击清空内容</td>
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
            <tr>
              <td>doFocus</td>
              <td>手动聚焦</td>
            </tr>
            <tr>
              <td>doBlur</td>
              <td>手动Blur</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="slots" class="subsection-title">
        Slots
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>插槽名</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>prefix</td>
              <td>输入框前置内容，nuve环境需up-input有效，非nveu都可</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>输入框后置内容，nuve环境需up-input有效，非nveu都可</td>
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
  <up-text text="我用十年青春,赴你最后之约"></up-text>
</template>`

const themeCode = `<template>
  <up-text type="primary" text="主色"></up-text>
  <up-text type="success" text="成功"></up-text>
  <up-text type="error" text="错误"></up-text>
  <up-text type="warning" text="警告"></up-text>
  <up-text type="info" text="信息"></up-text>
</template>`

const phoneCode = `<template>
  <up-text mode="phone" text="15019479320"></up-text>
</template>`

const dateCode = `<template>
  <up-text mode="date" text="1612959739"></up-text>
</template>`

const nameCode = `<template>
  <up-text mode="name" text="张三三" format="encrypt"></up-text>
</template>`

const linkCode = `<template>
  <up-text mode="link" text="uview-plus官网" href="https://uview-plus.jiangruyi.com"></up-text>
</template>`

const priceCode = `<template>
  <up-text mode="price" text="10000"></up-text>
</template>`
</script>

<style lang="scss" scoped>
.text-page {
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

.subsection-title {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 24px 0 12px;
}

.notice-card {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid;

  &.warning {
    background: linear-gradient(135deg, #fef3cd 0%, #fde79a 100%);
    border-color: #f6d860;
  }

  &.tip {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-color: #bae6fd;
  }
}

.notice-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #d97706;
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
  color: #92400e;
  font-size: 14px;
}

.notice-content text {
  font-size: 14px;
  color: #78350f;
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
