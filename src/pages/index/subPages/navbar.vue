<template>
  <view class="navbar-page">
    <view class="page-header">
      <view class="header-badge">
        布局组件
      </view>
      <view id="navbar-自定义导航栏" class="page-title">
        Navbar 自定义导航栏
      </view>
      <view class="page-desc">
        此组件一般用于在特殊情况下，需要自定义导航栏的时候用到，一般建议使用uni-app带的导航栏。
      </view>
    </view>

    <view class="notice-card tip">
      <view class="notice-icon">
        !
      </view>
      <view class="notice-content">
        <text class="notice-title">提示</text>
        <text>右侧的演示中，导航栏上方有圆角，也有顶部的手机模型状态栏内容，以及返回图标和文字不对齐的情况。这是因为网页演示导致，实际中无此情况，请通过右上角的"演示"扫码查看实际效果。</text>
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
        默认情况下，该组件只有向左的箭头，<strong>点击</strong>可以返回上一页，如果您想将自定义导航栏用在tabbar(不存在要返回的逻辑)页面，这样会隐藏左边的返回图标区域。
      </view>
      <view class="list-items">
        <view>如果想在返回箭头的右边自定义类似"返回"字样，可以将<code>left-text</code>设置为"返回"</view>
        <view>通过<code>title</code>参数传入需要显示的标题，通过<code>title-width</code>设置标题区域的宽度，文字超出会通过省略号隐藏</view>
        <view>通过<code>fixed</code>配置是否将导航栏固定在顶部</view>
      </view>
      <view class="notice-card tip">
        <view class="notice-icon">
          !
        </view>
        <view class="notice-content">
          <text class="notice-title">说明</text>
          <view>在小程序中，导航栏会自动适配导航栏右侧的胶囊位置，避开该区域</view>
          <view>组件底部默认有一条下边框，如您不需要，可以设置<code>border</code>为<code>false</code>即可</view>
        </view>
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
    </view>

    <view class="section">
      <view id="注意事项" class="section-title">
        注意事项
      </view>
      <view class="section-desc">
        既然是要自定义导航栏，那么首先就要取消系统自带的导航栏，需要在uni-app目的根目录的"pages.json"中设置，同时在此设置状态栏字体的颜色(H5无效)，自定义导航栏后，如果想通过"uni.setNavigationBarColor"动态设置导航栏颜色相关参数，是可能会出问题的，请勿使用此方式。
      </view>
      <CodeBlock title="pages.json配置" language="javascript" :code="pagesJsonCode" />
    </view>

    <view class="section">
      <view id="导航栏高度" class="section-title">
        导航栏高度
      </view>
      <view class="section-desc">
        可以通过<code>height</code>(单位<strong>px</strong>，默认44，和uni-app统导航栏高度一致)配置导航栏的高度，此高度为导航栏内容的高度，不含状态栏的高度，组件内部会自动加上状态栏的高度，并填充状态栏的占位区域。
      </view>
      <view class="section-desc">
        注意上方说的uni-app方的高度，这里指的是H5，和APP。至于各家小程序，由于受导航栏右侧胶囊的影响，目前组件内部给安卓设定的导航栏高度为<code>48px</code>，iOS设定的导航栏高度为<code>44</code>，这是结合了大量的实践的出来的结果，具备完好的兼容性。
      </view>
    </view>

    <view class="section">
      <view id="自定义导航栏内容" class="section-title">
        自定义导航栏内容
      </view>
      <view class="section-desc">
        通过自定义<code>slot</code>传入的内容
      </view>
      <CodeBlock title="自定义导航栏内容" language="html" :code="slotContentCode" />
    </view>

    <view class="section">
      <view id="自定义导航栏背景颜色" class="section-title">
        自定义导航栏背景颜色
      </view>
      <view class="section-desc">
        uview-plus提供了一个<code>bgColor</code>参数，可以自定义导航栏的背景颜色：
      </view>
      <CodeBlock title="自定义导航栏背景颜色" language="html" :code="bgColorCode" />
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
              <td>safeAreaInsetTop</td>
              <td>是否开启顶部安全区适配</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>placeholder</td>
              <td>固定在顶部时，是否生成一个等高元素，以防止塌陷</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>fixed</td>
              <td>导航栏是否固定在顶部</td>
              <td>Boolean</td>
              <td>true</td>
              <td>false</td>
            </tr>
            <tr>
              <td>border</td>
              <td>导航栏底部是否显示下边框</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>leftIcon</td>
              <td>左边返回图标的名称，只能为uview-plus自带的图标</td>
              <td>String</td>
              <td>arrow-left</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftText</td>
              <td>左边的提示文字</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rightText</td>
              <td>右边的提示文字</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>rightIcon</td>
              <td>右边返回图标的名称，只能为uview-plus自带的图标</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>title</td>
              <td>导航栏标题，如设置为空字符，将会隐藏标题占位区域</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>导航栏背景设置</td>
              <td>String</td>
              <td>#ffffff</td>
              <td>-</td>
            </tr>
            <tr>
              <td>titleWidth</td>
              <td>导航栏标题的最大宽度，内容超出会以省略号隐藏，单位rpx</td>
              <td>String | Number</td>
              <td>400rpx</td>
              <td>-</td>
            </tr>
            <tr>
              <td>height</td>
              <td>导航栏高度(不包括状态栏高度在内，内部自动加上)，单位px</td>
              <td>String | Number</td>
              <td>44px</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftIconSize</td>
              <td>左侧返回图标的大小</td>
              <td>String | Number</td>
              <td>20px</td>
              <td>-</td>
            </tr>
            <tr>
              <td>leftIconColor</td>
              <td>左侧返回图标的颜色</td>
              <td>String</td>
              <td>#303133</td>
              <td>-</td>
            </tr>
            <tr>
              <td>autoBack <up-tag text="2.0.19" size="mini" type="warning" /></td>
              <td>点击左侧区域(返回图标)，是否自动返回上一页</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true</td>
            </tr>
            <tr>
              <td>titleStyle <up-tag text="2.0.23" size="mini" type="warning" /></td>
              <td>标题的样式，对象或字符串形式</td>
              <td>String | Object</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="event" class="subsection-title">
        Event
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>名称</th>
              <th>说明</th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>leftClick</td>
              <td>点击左侧区域</td>
              <td>Handler</td>
            </tr>
            <tr>
              <td>rightClick</td>
              <td>点击右侧区域</td>
              <td>Handler</td>
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
              <td>left</td>
              <td>自定义左侧部分内容</td>
            </tr>
            <tr>
              <td>right</td>
              <td>自定义右侧部分内容</td>
            </tr>
            <tr>
              <td>center <up-tag text="2.0.17" size="mini" type="warning" /></td>
              <td>自定义中部内容</td>
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
	<view>
		<!-- 2.0.19支持autoBack，默认为false -->
        <up-navbar
            title="个人中心"
            @rightClick="rightClick"
            :autoBack="true"
        ></up-navbar>
	</view>
<\/template>

<script setup lang="ts">
const rightClick = () => {  
    console.log('rightClick');
};  
  
const leftClick = () => {  
    console.log('leftClick');
};  
<\/script>`

const pagesJsonCode = `// pages.json

"pages": [
	// navbar-自定义导航栏
	{
		"path": "/pages/navbar/index",
		"style": {
			"navigationStyle": "custom", // 隐藏系统导航栏
			"navigationBarTextStyle": "white" // 状态栏字体为白色，只能为 white-白色，black-黑色 二选一
		}
	}
]`

const slotContentCode = `<template>
	<view>
        <up-navbar
            leftText="返回"
            title="个人中心"
            :safeAreaInsetTop="false"
        >
            <template #left>
                <view class="u-nav-slot">
                    <up-icon
                        name="arrow-left"
                        size="19"
                    ></up-icon>
                    <up-line
                        direction="column"
                        :hairline="false"
                        length="16"
                        margin="0 8px"
                    ></up-line>
                    <up-text text="返回"></up-text>
                </view>
            </template>
        </up-navbar>
	</view>
<\/template>

<script setup lang="ts">
<\/script>

<style>
.u-nav-slot {
    display: flex;
    align-items: center;
}
</style>`

const bgColorCode = `<template>
	<view>
		<up-navbar 
			title="title" 
			:bgColor="'bgColor'"
		></up-navbar>
	</view>
<\/template>

<script setup lang="ts">
<\/script>`
</script>

<style lang="scss" scoped>
.navbar-page {
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

.demo-model {
  position: relative;
  width: 100%;
  height: 700px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px 0;
  background-image: url(/common/iPhone13.png);
}

.model-content {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  position: relative;
  top: 33px;
}

.iframe {
  width: 100%;
  height: 100%;
}

.open-link {
  position: absolute;
  right: 20px;
  top: 60px;
  color: #1890ff;
  font-size: 14px;
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

  &.tip {
    background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
    border-color: #bae6fd;
  }
}

.notice-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  background: #1890ff;
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
  color: #0369a1;
  font-size: 14px;
}

.notice-content text {
  font-size: 14px;
  color: #075985;
  line-height: 1.6;
}

.notice-content view {
  font-size: 14px;
  color: #075985;
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
