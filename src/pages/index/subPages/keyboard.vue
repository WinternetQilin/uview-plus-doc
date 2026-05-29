<template>
  <view class="keyboard-page">
    <view class="theme-default-content content__default">
      <text id="keyboard-键盘">
        <text href="#keyboard-键盘" class="header-anchor">#</text>
        Keyboard 键盘
      </text>

      <text>此为uview-plus自定义的键盘面板，内含了数字键盘，车牌号键，身份证号键盘3种模式，都有可以打乱按键顺序的选项。</text>

      <text id="平台差异说明">
        <text href="#平台差异说明" class="header-anchor">#</text>
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
        <text href="#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>mode</code>参数定义键盘的类型，<code>show</code>绑定一个值为布尔值的变量控制键盘的弹出与收起：</text>
      <view>
        <view>mode = car (默认值)为汽车键盘，此时顶部工具条中间的提示文字为"车牌号键盘"</view>
        <view>mode = number为数字键盘，此时顶部工具条中间的提示文字为"数字键盘"</view>
        <view>mode = card 为身份证键盘，此时顶部工具条中间的提示文字为"身份证键盘"</view>
      </view>

      <text id="隐藏键盘-符号">
        <text href="#隐藏键盘-符号" class="header-anchor">#</text>
        隐藏键盘"."符号
      </text>
      <view>
        <view>通过<code>dotDisabled</code>参数配置是否显示键盘"."符号，默认为<code>false</code>，只在"mode = number"时生效</view>
      </view>

      <text id="是否打乱按键的顺序">
        <text href="#是否打乱按键的顺序" class="header-anchor">#</text>
        是否打乱按键的顺序
      </text>
      <text>如果配置<code>random</code>参数为<code>true</code>的话，<strong>每次</strong>打开键盘，按键的顺序都是随机的，该功能默认是关闭的</text>

      <text id="如何控制键盘的打开和关闭">
        <text href="#如何控制键盘的打开和关闭" class="header-anchor">#</text>
        如何控制键盘的打开和关闭？
      </text>
      <text>通过<code>show</code>绑定变量来控制键盘的弹出和收起，请参见上方示例代码。</text>

      <text id="如何监听键盘按键被点击">
        <text href="#如何监听键盘按键被点击" class="header-anchor">#</text>
        如何监听键盘按键被点击？
      </text>
      <view>
        <view>输入值是通过组件的<code>change</code>事件返回的，见下方示例</view>
      </view>

      <text id="api">
        <text href="#api" class="header-anchor">#</text>
        API
      </text>

      <text id="props">
        <text href="#props" class="header-anchor">#</text>
        Props
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
              mode
            </td>
            <td style="text-align: left">
              键盘的类型，number-数字键盘，card-身份证键盘，car-车牌号键盘
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              car
            </td>
            <td style="text-align: left">
              number / card
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              dotDisabled
            </td>
            <td style="text-align: left">
              是否显示"."按键，只在mode=number时有效
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
          <tr>
            <td style="text-align: left">
              tooltip
            </td>
            <td style="text-align: left">
              是否显示键盘顶部工具条
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showTips
            </td>
            <td style="text-align: left">
              是否显示工具条中间的提示
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              tips
            </td>
            <td style="text-align: left">
              工具条中间的提示文字
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
              showCancel
            </td>
            <td style="text-align: left">
              是否显示工具条左边的"取消"按钮
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              showConfirm
            </td>
            <td style="text-align: left">
              是否显示工具条右边的"完成"按钮
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              random
            </td>
            <td style="text-align: left">
              是否打乱键盘按键的顺序
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
          <tr>
            <td style="text-align: left">
              safeAreaInsetBottom
            </td>
            <td style="text-align: left">
              是否开启底部安全区适配
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
          <tr>
            <td style="text-align: left">
              closeOnClickOverlay
            </td>
            <td style="text-align: left">
              是否允许点击遮罩收起键盘
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              show
            </td>
            <td style="text-align: left">
              控制键盘的弹出与收起
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              overlay
            </td>
            <td style="text-align: left">
              是否显示遮罩
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              zIndex
            </td>
            <td style="text-align: left">
              弹出键盘的z-index值
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              1075
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirmText
            </td>
            <td style="text-align: left">
              确认按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              确认
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancelText
            </td>
            <td style="text-align: left">
              取消按钮的文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              取消
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              customStyle
            </td>
            <td style="text-align: left">
              自定义样式，对象形式
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              {}
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              autoChange
            </td>
            <td style="text-align: left">
              mode为car下，输入文字后，是否自动切换为字母模式
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

      <text id="events">
        <text href="#events" class="header-anchor">#</text>
        Events
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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              change
            </td>
            <td style="text-align: left">
              按键被点击(不包含退格键被点击)
            </td>
            <td style="text-align: left">
              按键的值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              close
            </td>
            <td style="text-align: left">
              键盘关闭
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              confirm
            </td>
            <td style="text-align: left">
              键盘顶部工具条右边的"完成"按钮被点击
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              cancel
            </td>
            <td style="text-align: left">
              键盘顶部工具条左边的"取消"按钮被点击
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              backspace
            </td>
            <td style="text-align: left">
              键盘退格键被点击
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>

      <text id="slot">
        <text href="#slot" class="header-anchor">#</text>
        Slot
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
              default
            </td>
            <td style="text-align: left">
              内容将会显示键盘的工具条上面
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.keyboard-page {
  padding: 20px;
}

.theme-default-content {
  max-width: 1000px;
  margin: 0 auto;
}

text {
  font-size: 28px;
  color: #333;
  margin: 30px 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

text {
  font-size: 22px;
  color: #333;
  margin: 25px 0 15px;
}

text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 10px 0;
}

code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e83e8c;
}

view {
  margin: 10px 0;
  padding-left: 20px;

  view {
    font-size: 15px;
    line-height: 1.8;
    color: #555;
    margin: 5px 0;
  }
}

strong {
  color: #333;
  font-weight: 600;
}

.header-anchor {
  color: #999;
  margin-right: 5px;

  &:hover {
    color: #0066cc;
    text-decoration: none;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;

  th,
  td {
    padding: 10px 15px;
    border: 1px solid #eee;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    color: #333;
  }

  td {
    color: #555;
    font-size: 14px;
  }
}
</style>
