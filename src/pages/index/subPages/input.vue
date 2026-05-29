<template>
  <view class="input-page">
    <view class="page-header">
      <view class="header-badge">
        表单组件
      </view>
      <view id="input-输入框" class="page-title">
        Input 输入框
      </view>
      <view class="page-desc">
        去除<code>fixed</code>、<code>showWordLimit</code>、<code>showConfirmBar</code>、<code>disableDefaultPadding</code>、<code>autosize</code>字段。此组件为一个输入框，默认没有边框和样式，是专门为配合表单组件<code>up-form</code>而设计的。
      </view>
    </view>

    <view class="notice-card warning">
      <view class="notice-icon">
        !
      </view>
      <view class="notice-content">
        <text class="notice-title">注意</text>
        <text>由于在<code>nvue</code>下，<code>u-input</code>名称被uni-app官方占用，在uview2中官方使用<code>u--input</code>的方式解决，uview-plus则统一将前缀改为形如<code>up-input</code>既兼容nvue也兼容vue。</text>
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
        通过<code>type</code>设置输入框的类型，默认text
      </view>
      <view class="section-desc">
        通过<code>placeholder</code>设置输入框为空时的占位符
      </view>
      <view class="section-desc">
        通过<code>border</code>配置是否显示输入框的边框
      </view>
      <view class="section-desc">
        绑定<code>@change</code>事件
      </view>
    </view>

    <view class="section">
      <view id="输入框的类型" class="section-title">
        输入框的类型
      </view>
      <view class="section-desc">
        综述：输入框的类型可通过配置<code>type</code>来设置：
      </view>
      <view class="list-items">
        <view>text-文本输入键盘。</view>
        <view>number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数。</view>
        <view>idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序。</view>
        <view>digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序。</view>
        <view>password-等同于设置<code>password</code>为<code>true</code>的效果</view>
      </view>
    </view>

    <view class="section">
      <view id="可清空字符" class="section-title">
        可清空字符
      </view>
      <view class="section-desc">
        将<code>clearable</code>设置为<code>true</code>，会在输入框后方增加一个清空按钮。
      </view>
    </view>

    <view class="section">
      <view id="下划线" class="section-title">
        下划线
      </view>
      <view class="section-desc">
        通过设置属性<code>border</code>为<code>bottom</code>即可变成一个下划线
      </view>
    </view>

    <view class="section">
      <view id="前后图标" class="section-title">
        前后图标
      </view>
      <view class="section-desc">
        全后置图标可自由设置样式信息。
      </view>
    </view>

    <view class="section">
      <view id="前后插槽" class="section-title">
        前后插槽
      </view>
      <view class="section-desc">
        通过设置<code>slot</code>为<code>prefix</code>或<code>suffix</code>来指定前后插槽
      </view>
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
              <td>onlyClearableOnFocused</td>
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
              <td>最大输入长度，设置为 -1 的时候不限制最大长度</td>
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
              <td>指定placeholder的样式类</td>
              <td>String</td>
              <td>input-placeholder</td>
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
              <td>showWordLimit</td>
              <td>是否显示输入字数统计</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>confirmType</td>
              <td>设置右下角按钮的文字</td>
              <td>String</td>
              <td>done</td>
              <td>send | search | next | go | done</td>
            </tr>
            <tr>
              <td>confirmHold</td>
              <td>点击键盘右下角按钮时是否保持键盘不收起</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>holdKeyboard</td>
              <td>focus时，点击页面的时候不收起键盘</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>focus</td>
              <td>自动获取焦点</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>autoBlur</td>
              <td>键盘收起时，是否自动失去焦点</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>disableDefaultPadding</td>
              <td>是否去掉 iOS 下的默认内边距</td>
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
              <td>cursorColor</td>
              <td>输入框光标颜色</td>
              <td>String</td>
              <td>-</td>
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
              <td>光标起始位置，自动聚集时有效</td>
              <td>String | Number</td>
              <td>-1</td>
              <td>-</td>
            </tr>
            <tr>
              <td>selectionEnd</td>
              <td>光标结束位置，自动聚集时有效</td>
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
              <td>边框类型</td>
              <td>String</td>
              <td>surround</td>
              <td>bottom | none</td>
            </tr>
            <tr>
              <td>readonly</td>
              <td>是否只读</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>输入框形状</td>
              <td>String</td>
              <td>square</td>
              <td>circle</td>
            </tr>
            <tr>
              <td>formatter</td>
              <td>输入过滤或格式化函数</td>
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
              <td>passwordVisibilityToggle</td>
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
              <td>为兼容微信小程序而暴露的内部方法</td>
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
              <td>输入框前置插槽</td>
            </tr>
            <tr>
              <td>suffix</td>
              <td>输入框后置插槽</td>
            </tr>
          </tbody>
        </table>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.input-page {
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

code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  color: #c7254e;
  font-size: 0.9em;
}
</style>
