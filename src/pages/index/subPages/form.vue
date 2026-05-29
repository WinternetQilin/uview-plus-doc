<template>
  <view class="form-page">
    <view class="theme-default-content content__default">
      <text id="form-表单">
        <text href="form.html#form-表单" class="header-anchor">#</text>
        Form 表单
      </text>
      <text>此组件一般用于表单场景，可以配置Input输入框，Select弹出框，进行表单验证等。</text>
      <view class="custom-block danger">
        <text class="custom-block-title">注意：</text>
        <text>由于在<code>nvue</code>下，<code>u-form</code>名称被uni-app官方占用，在<code>nvue</code>页面中请使用<code>up-form</code>名称，在<code>vue</code>页面中使用<code>up-form</code>或者<code>u-form</code>均可。</text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意：</text>
        <text>注意:borderBottom="true"需要完整写法才生效，不能简写为borderBottom。</text>
      </view>
      <view class="custom-block danger">
        <text class="custom-block-title">注意：</text>
        <text>如绑定ref建议不要使用form等容易与uni-app内置组件冲突的关键字，建议使用如formRef等明显不会有冲突风险的名称，比如ref="formRef"，不要使用ref="form"已经发现会导致双向绑定失效。</text>
      </view>
      <text id="平台差异说明">
        <text href="form.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App（vue）
            </th>
            <th style="text-align: center">
              App（nvue）
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本使用">
        <text href="form.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>此组件一般是用于表单验证使用，每一个表单域由一个<code>up-form-item</code>组成，表单域中可以放置<code>up-input</code>、<code>up-checkbox</code>、<code>up-radio</code>、<code>up-switch</code>等。</text>
      <view>
        <view>在表单组中，通过<code>model</code>参数绑定一个对象，这个对象的属性为各个<code>up-form-item</code>内组件的对应变量。</view>
        <view>由于表单验证和绑定表单规则时，需要通过<code>ref</code>操作，故这里需要给<code>form</code>组件声明<code>ref="form1"</code>属性。</view>
        <view>关于<code>up-form-item</code>内其他可能包含的诸如<code>input</code>、<code>radio</code>等组件，请见各自组件的相关文档说明。</view>
      </view>
      <text id="验证规则">
        <text href="form.html#验证规则" class="header-anchor">#</text>
        验证规则
      </text>
      <text>组件验证部分采用了<text href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</text>，一个字段可以设置多个内置规则，以及自定义规则，触发方式等，</text>
      <text>rules规则是一个对象，对象的属性名为验证的字段名，属性值为规则数组，如下：</text>
      <pre><code>const rules = {
  'model1.userInfo.name': {
    rules: [{
      required: true,
      errorMessage: '请输入姓名',
    }]
  }
}</code></pre>
      <text>上方中，由于表单数据是嵌套的<code>model1.userInfo.name</code>，这里<b>必须写字符串(属性名)，而不是一个变量。</b></text>
      <text id="form-item组件说明">
        <text href="form.html#form-item组件说明" class="header-anchor">#</text>
        Form-item组件说明
      </text>
      <text>此组件一般需要搭配<code>Form</code>组件使用，也可以单独搭配<code>Input</code>等组件使用，由于此组件参数较多，这里只对其中参数最简要介绍，其余请见底部的API说明：</text>
      <view>
        <view><code>prop</code>为传入<code>Form</code>组件的<code>model</code>中的属性字段，如果需要表单验证，此属性是必填的。</view>
        <view><code>labelPosition</code>可以配置左侧"label"的对齐方式，可选为<code>left</code>和<code>top</code>。</view>
        <view><code>borderBottom</code>是否显示表单域的下划线，如果给<code>Input</code>组件配置了边框，可以将此属性设置为<code>false</code>，从而隐藏默认的下划线。</view>
        <view>如果想在表单域配置左右的图标或小图片，可以通过<code>leftIcon</code>和<code>rightIcon</code>参数实现。</view>
      </view>
      <text id="验证规则">
        <text href="form.html#验证规则" class="header-anchor">#</text>
        验证规则
      </text>
      <text>组件验证部分采用了async-validator，一个字段可以设置多个内置规则，以及自定义规则，触发方式等。</text>
      <text id="右侧演示页面源代码地址">
        <text href="form.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/form/form.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            &nbsp;github
          </image>
        </text>
        <text href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/form/form.nvue" target="_blank" style="display:flex;align-items:center;margin-top:10px;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png" title="github" width="30">
            &nbsp;gitee
          </image>
        </text>
        <br>
      </view>
      <text id="api">
        <text href="form.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="form-props">
        <text href="form.html#form-props" class="header-anchor">#</text>
        Form Props
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              类型
            </th>
            <th style="text-align: left">
              默认值
            </th>
            <th style="text-align: left">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              model
            </td>
            <td style="text-align: left">
              表单数据对象
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              rules
            </td>
            <td style="text-align: left">
              通过ref设置，如果rules中有自定义方法等，需要使用setRules方法设置规则
            </td>
            <td style="text-align: left">
              Object|Function|Array
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              errorType
            </td>
            <td style="text-align: left">
              错误的提示方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              message
            </td>
            <td style="text-align: left">
              none|toast|border-bottom
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              borderBottom
            </td>
            <td style="text-align: left">
              是否显示表单域的下划线边框
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelPosition
            </td>
            <td style="text-align: left">
              表单域提示文字的位置，left-左侧，top-上方
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              top
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelWidth
            </td>
            <td style="text-align: left">
              提示文字的宽度，单位px
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              45
            </td>
            <td style="text-align: left">
              数值 / auto
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelAlign
            </td>
            <td style="text-align: left">
              lable字体的对齐方式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              left
            </td>
            <td style="text-align: left">
              center / right
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelStyle
            </td>
            <td style="text-align: left">
              lable的样式，对象形式
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="form-methods">
        <text href="form.html#form-methods" class="header-anchor">#</text>
        Form Methods
      </text>
      <text>此方法如要通过ref手动调用</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              validate
            </td>
            <td style="text-align: left">
              对整个表单进行校验的方法
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              setRules
            </td>
            <td style="text-align: left">
              如果有自定义方法等，需要用此方法设置rules规则，否则微信小程序无效
            </td>
            <td style="text-align: left">
              Function(rules)
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              validateField
            </td>
            <td style="text-align: left">
              对部分表单字段进行校验
            </td>
            <td style="text-align: left">
              Function(value, Function(errorsRes))
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              resetFields
            </td>
            <td style="text-align: left">
              对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              clearValidate
            </td>
            <td style="text-align: left">
              清空校验结果
            </td>
            <td style="text-align: left">
              Function(props)
            </td>
          </tr>
        </tbody>
      </table>
      <text id="form-item-props">
        <text href="form.html#form-item-props" class="header-anchor">#</text>
        Form-item Props
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              类型
            </th>
            <th style="text-align: left">
              默认值
            </th>
            <th style="text-align: left">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              左侧提示文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              prop
            </td>
            <td style="text-align: left">
              表单域model对象的属性名，在使用 validate、resetFields 方法的情况下，该属性是必填的
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              rules
            </td>
            <td style="text-align: left">
              标单项验证规则
            </td>
            <td style="text-align: left">
              Array
            </td>
            <td style="text-align: left">
              []
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              borderBottom
            </td>
            <td style="text-align: left">
              是否显示下边框，如不需要下边框，需同时将u-form的同名参数设置为false
            </td>
            <td style="text-align: left">
              String | Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              true / false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelPosition
            </td>
            <td style="text-align: left">
              表单域提示文字的位置，left-左侧，top-上方
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              labelWidth
            </td>
            <td style="text-align: left">
              提示文字的宽度，单位rpx，如设置，将覆盖u-form的同名参数
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              rightIcon
            </td>
            <td style="text-align: left">
              右侧自定义字体图标(限uview-plus内置图标)或图片地址
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              leftIcon
            </td>
            <td style="text-align: left">
              左侧自定义字体图标(限uview-plus内置图标)或图片地址
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              leftIconStyle
            </td>
            <td style="text-align: left">
              左侧自定义字体图标的样式
            </td>
            <td style="text-align: left">
              String | Object
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              required
            </td>
            <td style="text-align: left">
              是否显示左边的"*"号，这里仅起展示作用，如需校验必填，请通过rules配置必填规则
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
        </tbody>
      </table>
      <text id="form-item-methods">
        <text href="form.html#form-item-methods" class="header-anchor">#</text>
        Form-item Methods
      </text>
      <text>此方法如要通过ref手动调用</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              setRules
            </td>
            <td style="text-align: left">
              如果有自定义方法等，需要用此方法设置rules规则，否则微信小程序无效
            </td>
            <td style="text-align: left">
              Function(rules)
            </td>
          </tr>
        </tbody>
      </table>
      <text id="form-item-slot">
        <text href="form.html#form-item-slot" class="header-anchor">#</text>
        Form-item Slot
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              Form Item 的内容
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              right
            </td>
            <td style="text-align: left">
              右侧自定义内容，可以在此传入一个按钮，用于获取验证码等场景
            </td>
          </tr>
        </tbody>
      </table>
      <text id="form-item-events">
        <text href="form.html#form-item-events" class="header-anchor">#</text>
        Form-item Events
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              事件名
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              回调参数
            </th>
            <th style="text-align: left">
              版本
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              click
            </td>
            <td style="text-align: left">
              点击时触发
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.form-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text,
text {
  margin: 20px 0 10px;
}
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  font-size: 16px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
table th,
table td {
  border: 1px solid #eee;
  padding: 8px;
}
view,
view {
  padding-left: 20px;
  margin: 10px 0;
}
view {
  margin: 5px 0;
}
pre {
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block.danger {
  border-left-color: #f56c6c;
  background: #fef0f0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
</style>
