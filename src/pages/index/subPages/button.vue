<template>
  <view class="button-page">
    <view class="page-header">
      <view class="header-badge">
        表单组件
      </view>
      <view id="button-按钮" class="page-title">
        Button 按钮
      </view>
      <view class="page-desc">
        该组件内部实现以uni-app<code>button</code>组件为基础，进行二次封装，主要区别在于按钮<code>type</code>值有更多的主题颜色，按钮<code>size</code>值有更多的尺寸可选。
      </view>
    </view>

    <view class="notice-card warning">
      <view class="notice-icon">
        !
      </view>
      <view class="notice-content">
        <text class="notice-title">注意</text>
        <text>此组件内部使用uni-app<code>button</code>组件为基础，除了开头中所说的增加的功能，另外暴露出来的props属性和官方组件的属性完全一致。</text>
        <text>由于微信小程序的限制，在微信小程序中设置了<code>form-type</code>的<code>up-button</code>无法触发<code>form</code>组件的<code>submit</code>事件(H5和APP正常)。</text>
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
        文字内容通过<code>text</code>传入
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="设置按钮的多种形态" class="section-title">
        设置按钮的多种形态
      </view>
      <view class="section-desc">
        <code>type</code>值可选的有<code>default</code>(默认)、<code>primary</code>、<code>success</code>、<code>info</code>、<code>warning</code>、<code>error</code>
      </view>
      <view class="list-items">
        <view>通过<code>plain</code>值设置是否镂空</view>
        <view>通过<code>hairline</code>值设置是否细边</view>
        <view>通过<code>disabled</code>值设置是否禁用</view>
        <view>通过<code>loading</code>值设置是否开启加载图标，<code>loadingText</code>设置加载中文字</view>
        <view>通过<code>icon</code>值设置是否显示图标</view>
        <view>通过<code>shape</code>值设置按钮形状，circle为圆角</view>
        <view>通过<code>color</code>值设置按钮渐变颜色</view>
        <view>通过<code>size</code>值设置按钮的大小</view>
      </view>
      <CodeBlock title="多种形态按钮" language="html" :code="shapeCode" />
    </view>

    <view class="section">
      <view id="定义需要用到的外部样式" class="section-title">
        定义需要用到的外部样式
      </view>
      <view class="notice-card tip">
        <view class="notice-icon">
          !
        </view>
        <view class="notice-content">
          <text class="notice-title">说明</text>
          <text>我们提供了一个<code>custom-style</code>参数，推荐用户可以用对象形式传递样式给组件内部，注意驼峰命名。</text>
        </view>
      </view>
      <CodeBlock title="自定义样式" language="html" :code="customStyleCode" />
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
              <td>text</td>
              <td>按钮文字</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>type</td>
              <td>按钮类型</td>
              <td>String</td>
              <td>default</td>
              <td>default / primary / success / warning / error / info</td>
            </tr>
            <tr>
              <td>size</td>
              <td>按钮大小</td>
              <td>String</td>
              <td>normal</td>
              <td>normal / small / mini</td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否镂空</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>hairline</td>
              <td>是否显示细边框</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>loading</td>
              <td>是否显示加载图标</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>loadingText</td>
              <td>加载状态下的文字</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>是否禁用</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>按钮形状</td>
              <td>String</td>
              <td>square</td>
              <td>square / circle</td>
            </tr>
            <tr>
              <td>color</td>
              <td>按钮颜色，支持传入 linear-gradient 渐变色</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>icon</td>
              <td>图标</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>ripple</td>
              <td>是否开启点击水波纹</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>rippleBgColor</td>
              <td>水波纹的背景色</td>
              <td>String</td>
              <td>#c7c7c7</td>
              <td>-</td>
            </tr>
            <tr>
              <td>customStyle</td>
              <td>自定义样式，对象形式</td>
              <td>Object</td>
              <td>{}</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="open-type" class="subsection-title">
        开放能力 (openType)
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>值</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>contact</td>
              <td>打开客服会话</td>
            </tr>
            <tr>
              <td>share</td>
              <td>触发用户转发</td>
            </tr>
            <tr>
              <td>getPhoneNumber</td>
              <td>获取用户手机号</td>
            </tr>
            <tr>
              <td>getUserInfo</td>
              <td>获取用户信息</td>
            </tr>
            <tr>
              <td>launchApp</td>
              <td>打开APP</td>
            </tr>
            <tr>
              <td>openSetting</td>
              <td>打开设置页</td>
            </tr>
            <tr>
              <td>feedback</td>
              <td>打开意见反馈</td>
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
              <td>点击按钮时触发</td>
              <td>-</td>
            </tr>
            <tr>
              <td>getuserinfo</td>
              <td>用户点击该按钮时返回用户信息</td>
              <td>detail: {userInfo}</td>
            </tr>
            <tr>
              <td>contact</td>
              <td>open-type="contact"时有效</td>
              <td>detail: {errMsg}</td>
            </tr>
            <tr>
              <td>getphonenumber</td>
              <td>open-type="getPhoneNumber"时有效</td>
              <td>detail: {errMsg, encryptedData, iv}</td>
            </tr>
            <tr>
              <td>error</td>
              <td>open-type="launchApp"时有效</td>
              <td>detail: {errMsg}</td>
            </tr>
            <tr>
              <td>opensetting</td>
              <td>open-type="openSetting"时有效</td>
              <td>detail: {errMsg, authSetting}</td>
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
              <th>名称</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>default</td>
              <td>默认插槽，用于放置按钮内容</td>
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
  <up-button text="默认按钮"></up-button>
  <up-button text="主要按钮" type="primary"></up-button>
</template>`

const shapeCode = `<template>
  <up-button text="默认" type="primary"></up-button>
  <up-button text="镂空" type="primary" plain></up-button>
  <up-button text="细边" type="primary" hairline></up-button>
  <up-button text="禁用" type="primary" disabled></up-button>
  <up-button text="加载中" type="primary" loading></up-button>
  <up-button text="圆角" type="primary" shape="circle"></up-button>
</template>`

const customStyleCode = `<template>
  <up-button
    text="自定义样式"
    type="primary"
    :customStyle="{
      width: '200px',
      marginTop: '10px'
    }"
  ></up-button>
</template>`
</script>

<style lang="scss" scoped>
.button-page {
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
  margin-bottom: 32px;
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
</style>
