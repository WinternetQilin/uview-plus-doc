<template>
  <view class="icon-page">
    <view class="icon-layout">
      <view class="icon-main">
        <view class="page-header">
          <view class="header-badge">
            基础组件
          </view>
          <view id="icon-图标" class="page-title">
            Icon 图标
          </view>
          <view class="page-desc">
            基于字体的图标集，包含了大多数常见场景的图标。
          </view>
        </view>

        <view class="section">
          <view id="新版本全局加载兼容性" class="section-title">
            新版本全局加载兼容性
          </view>
          <view class="section-desc">
            默认不再加载一次，需要只加载一次可以配置如下参数：
          </view>
          <CodeBlock language="javascript" :code="loadFontOnceCode" />
        </view>

        <view class="section">
          <view id="自定义默认字体图标自托管资源" class="section-title">
            自定义默认字体图标自托管资源
          </view>
          <view class="section-desc">
            受限于uni.loadFontFace，目前仅在APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台支持自定义。
          </view>
          <view class="section-desc">
            因公共CDN存在不稳定等问题，建议将图标放在自己的服务器上，然后在uview-plus初始化时如下配置加载字体图标：
          </view>
          <view class="notice-card tip">
            <view class="notice-icon">
              !
            </view>
            <view class="notice-content">
              <view class="notice-item">
                字体链接需要是下载类型
              </view>
              <view class="notice-item">
                字体文件返回的content-type参考font，格式不正确时会解析失败
              </view>
              <view class="notice-item">
                字体链接必须是https（ios不支持http)
              </view>
              <view class="notice-item">
                建议格式为TTF和WOFF，WOFF2在低版本的iOS上会不兼容
              </view>
              <view class="notice-item">
                字体链接必须是同源下的，或开启了cors支持，小程序的域名是servicewechat.com
              </view>
            </view>
          </view>
          <CodeBlock language="javascript" :code="iconUrlCode" />
        </view>

        <view class="section">
          <view id="扩充自定义字体图标" class="section-title">
            扩充自定义字体图标
          </view>
          <view class="section-desc">
            如果内置图标不够用可以使用如下方式扩展
          </view>
          <view class="section-desc">
            APP-VUE/APP-UVUE/微信小程序/支付宝小程序/H5平台如下示例：
          </view>
          <CodeBlock language="javascript" :code="customIconCode" />
          <view class="section-desc">
            其他平台如抖音/QQ/百度小程序请直接在App.vue定一个一个css示例如下：
          </view>
          <CodeBlock language="scss" :code="fontFaceCode" />
          <view class="section-desc">
            扩展图标使用方式
          </view>
          <CodeBlock language="html" :code="customIconUseCode" />
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
            通过<code>&lt;up-icon&gt;</code>形式来调用，设置<code>name</code>参数为图标名即可。其中<code>color</code>默认为<code>#606266</code>，<code>size</code>默认为<code>16px</code>
          </view>
          <view class="demo-container">
            <up-icon name="photo" />
          </view>
          <CodeBlock language="html" :code="basicUseCode" />
        </view>

        <view class="section">
          <view id="修改图标的样式" class="section-title">
            修改图标的样式
          </view>
          <view class="demo-container">
            <up-icon name="photo" color="#2979ff" size="28" />
          </view>
          <view class="section-desc">
            通过<code>color</code>参数修改图标的颜色
          </view>
          <view class="section-desc">
            通过<code>size</code>参数修改图标的大小，单位为px
          </view>
          <CodeBlock language="html" :code="iconStyleCode" />
        </view>

        <view class="section">
          <view id="图片图标" class="section-title">
            图片图标
          </view>
          <view class="section-desc">
            这里说的图片图标，指的是小图标，起作用定位为"icon"图标作用，而非大尺寸的图片展示场景，理论上，这个小图标应该为<code>png</code>格式的正方形图标。
          </view>
          <view class="section-desc">
            上面说到，给组件的<code>name</code>参数传入一个图片的名称即可显示字体图标，这些名称中不能带有<code>/</code>斜杠符号，否则会被认为是传入了图片图标，同时，<code>size</code>参数也被设置为这个图片图标的宽度，由于是图片，诸如颜色<code>color</code>等参数都会失效。
          </view>
          <view class="demo-container">
            <up-icon label="uview-plus" size="40" name="https://cdn.uviewui.com/uview/example/button.png" />
          </view>
          <CodeBlock language="html" :code="imageIconCode" />
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
                  <td>name</td>
                  <td>图标名称，见示例图标集，如名称带有<code>/</code>，会被认为是图片图标</td>
                  <td>String</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>color</td>
                  <td>图标颜色</td>
                  <td>String</td>
                  <td>color['up-content-color']</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>size</td>
                  <td>图标字体大小，单位默认px</td>
                  <td>String | Number</td>
                  <td>16px</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>bold</td>
                  <td>是否显示粗体</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>index</td>
                  <td>一个用于区分多个图标的值，点击图标时通过<code>click</code>事件传出</td>
                  <td>String | Number</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>hoverClass</td>
                  <td>图标按下去的样式类，用法同uni的<code>view</code>组件的<code>hover-class</code>参数</td>
                  <td>String</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>customPrefix</td>
                  <td>自定义字体图标扩展时配置的值</td>
                  <td>String</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>label</td>
                  <td>图标旁的文字</td>
                  <td>String</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>labelSize</td>
                  <td>图标旁文字的大小，单位px</td>
                  <td>String | Number</td>
                  <td>14px</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>labelColor</td>
                  <td>图标旁文字的颜色</td>
                  <td>String</td>
                  <td>#606266</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>labelMargin</td>
                  <td>图标与文字的间距，单位px</td>
                  <td>String | Number</td>
                  <td>6px</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>imgMode</td>
                  <td>图片图标mode参数</td>
                  <td>String</td>
                  <td>aspectFit</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>width</td>
                  <td>图片图标的宽度</td>
                  <td>String | Number</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>height</td>
                  <td>图片图标的高度</td>
                  <td>String | Number</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>stop</td>
                  <td>是否阻止事件冒泡</td>
                  <td>Boolean</td>
                  <td>false</td>
                  <td>-</td>
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
                  <td>点击图标时触发</td>
                  <td>index: 通过 props 传递的 index 值</td>
                </tr>
              </tbody>
            </table>
          </view>
        </view>
      </view>

      <view class="icon-aside">
        <view class="aside-sticky">
          <view class="flex justify-between px-40rpx">
            <view id="图标集列表" class="section-title">
              图标集
            </view>
            <view class="icon-copy-toggle">
              <view>点击复制</view>
              <up-switch v-model="copyMode" size="18" />
              <view>{{ copyMode ? '组件标签' : '图标名称' }}</view>
            </view>
          </view>
          <view class="icon-grid">
            <view v-for="iconName in iconList" :key="iconName" class="icon-item" @click="copyIconName(iconName)">
              <up-icon :name="iconName" size="24" color="#606266" />
              <text class="icon-name">{{ iconName }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'

const copyMode = ref(false)

const iconList = [
  'arrow-right',
  'arrow-left',
  'arrow-up',
  'arrow-down',
  'checkmark',
  'close',
  'plus',
  'minus',
  'home',
  'search',
  'scan',
  'camera',
  'photo',
  'map',
  'clock',
  'calendar',
  'setting-fill',
  'setting',
  'more-dot-fill',
  'info',
  'info-circle',
  'info-circle-fill',
  'question',
  'question-circle',
  'question-circle-fill',
  'checkmark-circle',
  'checkmark-circle-fill',
  'close-circle',
  'close-circle-fill',
  'heart',
  'heart-fill',
  'star',
  'star-fill',
  'bell',
  'bell-fill',
  'eye',
  'eye-fill',
  'lock',
  'lock-fill',
  'trash',
  'trash-fill',
  'edit-pen',
  'edit-pen-fill',
  'download',
  'reload',
  'play-circle',
  'play-circle-fill',
  'pause',
  'pause-circle',
  'pause-circle-fill',
  'mic',
  'volume',
  'volume-fill',
  'volume-off',
  'volume-off-fill',
  'chat',
  'chat-fill',
  'phone',
  'phone-fill',
  'email',
  'email-fill',
  'account',
  'account-fill',
  'man',
  'woman',
  'shopping-cart',
  'shopping-cart-fill',
  'coupon',
  'coupon-fill',
  'gift',
  'gift-fill',
  'bag',
  'bag-fill',
  'folder',
  'bookmark',
  'bookmark-fill',
  'thumb-up',
  'thumb-up-fill',
  'thumb-down',
  'thumb-down-fill',
  'share',
  'share-fill',
  'wifi',
  'rmb',
  'grid',
  'grid-fill',
  'list',
]

function copyIconName(name: string) {
  const data = copyMode.value ? `<up-icon name="${name}" />` : name
  uni.setClipboardData({
    data,
    success: () => {
      uni.showToast({
        title: copyMode.value ? `已复制标签` : `已复制 ${name}`,
        icon: 'success',
        duration: 2000,
      })
    },
  })
}

const loadFontOnceCode = `app.use(store)
.use(i18n)
.use(uviewPlus, () => {
    return {
        options: {
            config: {
                loadFontOnce: true
            }
        }
    }
})`

const iconUrlCode = `app.use(store)
.use(i18n)
.use(uviewPlus, () => {
    return {
        options: {
            config: {
                iconUrl: 'https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf'
            }
        }
    }
})`

const customIconCode = `app.use(store)
.use(i18n)
.use(uviewPlus, () => {
    return {
        options: {
            config: {
                customIcon: {
                    family: 'xyicon',
                    url: 'https://at.alicdn.com/t/c/font_1305928_egvk3tbr3fs.ttf?t=1744189362601'
                },
                customIcons: {
                    'light-mode': '\\\\ue66c'
                }
            }
        }
    }
})`

const fontFaceCode = `@font-face {
    font-family: 'xyicon';
    src: url('https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf') format('truetype');
}`

const customIconUseCode = `<up-icon customPrefix="xyicon" name="light-mode"></up-icon>`

const basicUseCode = `<up-icon name="photo"></up-icon>`

const iconStyleCode = `<up-icon name="photo" color="#2979ff" size="28"></up-icon>`

const imageIconCode = `<up-icon label="uview-plus" size="40" name="https://cdn.uviewui.com/uview/example/button.png"></up-icon>`
</script>

<style lang="scss" scoped>
.icon-page {
  padding: 32px 24px;
  padding-right: 0;
  max-width: 1500px;
  margin: 0 auto;
}

.icon-layout {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.icon-main {
  flex: 1;
  min-width: 0;
}

.icon-aside {
  flex: 0 0 520px;
  width: 520px;
}

.aside-sticky {
  position: sticky;
  top: 20px;
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

.notice-item {
  font-size: 14px;
  color: #0c4a6e;
  line-height: 1.6;
}

.demo-container {
  background-color: #f5f5f5;
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 12px;
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

.icon-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  height: 74vh;
  overflow: auto;
}

.icon-copy-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f0f9ff;
    border-color: #1890ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(24, 144, 255, 0.15);
  }
}

.icon-name {
  margin-top: 8px;
  font-size: 12px;
  color: #6b7280;
  text-align: center;
  word-break: break-all;
  line-height: 1.4;
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
