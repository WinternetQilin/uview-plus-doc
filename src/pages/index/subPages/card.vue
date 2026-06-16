<template>
  <view class="card-page">
    <view class="page-header">
      <view class="header-badge">
        布局组件
      </view>
      <view id="card-卡片" class="page-title">
        <text href="card.html#card-卡片" class="header-anchor">#</text>
        Card 卡片
      </view>
      <view class="page-desc">
        卡片组件一般用于多个列表条目，且风格统一的场景。
      </view>
    </view>

    <view class="section">
      <view id="平台差异说明" class="section-title">
        <text href="card.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </view>
      <view class="table-wrapper">
        <table class="platform-table">
          <thead>
            <tr>
              <th>App</th>
              <th>H5</th>
              <th>微信小程序</th>
              <th>支付宝小程序</th>
              <th>百度小程序</th>
              <th>头条小程序</th>
              <th>QQ小程序</th>
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
        <text href="card.html#基本使用" class="header-anchor">#</text>
        基本使用
      </view>
      <view class="section-desc">
        组件的头部信息可以通过参数配置，其他主体和底部的信息，需要通过
        <code>slot</code>
        传入。
      </view>
      <view class="list-items">
        <view>
          <code>title</code>
          配置标题
        </view>
        <view>
          <code>sub-title</code>
          配置副标题
        </view>
      </view>
      <up-card title="Card 标题" sub-title="Card 副标题">
        <view>卡片主体内容</view>
        <template #foot>
          <view>卡片底部内容</view>
        </template>
      </up-card>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
    </view>

    <view class="section">
      <view id="配置卡片间距" class="section-title">
        <text href="card.html#配置卡片间距" class="header-anchor">#</text>
        配置卡片间距
      </view>
      <view class="section-desc">
        可以通过
        <code>margin</code>
        参数配置卡片与屏幕左右的边距，以及上下卡片之间的距离，如:
        <code>20rpx 30rpx</code>
        、
        <code>20rpx 30rpx 30rpx 20rpx</code>
        。
      </view>
      <up-card title="卡片标题" margin="20rpx 30rpx">
        <view>卡片内容</view>
      </up-card>
      <CodeBlock title="配置卡片间距" language="html" :code="marginCode" />
    </view>

    <view class="section">
      <view id="配置卡片左上角的缩略图" class="section-title">
        <text href="card.html#配置卡片左上角的缩略图" class="header-anchor">#</text>
        配置卡片左上角的缩略图
      </view>
      <view class="section-desc">
        这个缩略图是可选的，显示在卡片的左上角位置，如果配置了
        <code>thumb</code>
        参数(图片路径)，就会显示图片。
      </view>
      <view class="list-items">
        <view>
          <code>thumb</code>
          缩略图路径
        </view>
        <view>
          <code>thumb-width</code>
          缩略图宽度，高等于宽
        </view>
        <view>
          <code>thumb-circle</code>
          缩略图是否为圆形
        </view>
      </view>
      <up-card title="卡片标题" thumb="https://example.com/thumb.png" thumb-width="80" thumb-circle>
        <view>卡片内容</view>
      </up-card>
      <CodeBlock title="配置缩略图" language="html" :code="thumbCode" />
    </view>

    <view class="section">
      <view id="配置卡片边框" class="section-title">
        <text href="card.html#配置卡片边框" class="header-anchor">#</text>
        配置卡片边框
      </view>
      <view class="section-desc">
        这里说的边框，有3个：
      </view>
      <view class="list-items">
        <view>
          <code>border</code>
          配置是否显示整个卡片的外边框
        </view>
        <view>
          <code>head-border-bottom</code>
          配置是否显示卡片内部头部的下边框
        </view>
        <view>
          <code>foot-border-top</code>
          配置是否显示卡片内部底部的上边框
        </view>
      </view>
      <up-card title="卡片标题" :border="true" :head-border-bottom="true" :foot-border-top="true">
        <view>卡片内容</view>
      </up-card>
      <CodeBlock title="配置卡片边框" language="html" :code="borderCode" />
    </view>

    <view class="section">
      <view id="设置内边距" class="section-title">
        <text href="card.html#设置内边距" class="header-anchor">#</text>
        设置内边距
      </view>
      <view class="section-desc">
        默认下，卡片内部的头部，主体，底部都有一个内边距，可以通过配置
        <code>padding</code>
        参数去覆盖。
      </view>
      <up-card title="卡片标题" padding="30rpx 40rpx">
        <view>卡片内容</view>
      </up-card>
      <CodeBlock title="设置内边距" language="html" :code="paddingCode" />
    </view>

    <view class="section">
      <view id="api" class="section-title">
        <text href="card.html#api" class="header-anchor">#</text>
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
              <td>title</td>
              <td>卡片标题</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>subTitle</td>
              <td>副标题</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>thumb</td>
              <td>缩略图路径</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>thumbWidth</td>
              <td>缩略图宽度，高等于宽</td>
              <td>String / Number</td>
              <td>100</td>
              <td>-</td>
            </tr>
            <tr>
              <td>thumbCircle</td>
              <td>缩略图是否为圆形</td>
              <td>Boolean</td>
              <td>false</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>margin</td>
              <td>卡片与屏幕左右的边距，以及上下卡片之间的距离</td>
              <td>String</td>
              <td>30rpx</td>
              <td>-</td>
            </tr>
            <tr>
              <td>border</td>
              <td>是否显示外边框</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>borderRadius</td>
              <td>圆角</td>
              <td>String / Number</td>
              <td>16</td>
              <td>-</td>
            </tr>
            <tr>
              <td>headBorderBottom</td>
              <td>是否显示头部下边框</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>footBorderTop</td>
              <td>是否显示底部上边框</td>
              <td>Boolean</td>
              <td>true</td>
              <td>true / false</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>卡片内部的内边距</td>
              <td>String</td>
              <td>24rpx 30rpx</td>
              <td>-</td>
            </tr>
            <tr>
              <td>boxShadow</td>
              <td>卡片阴影</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
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
              <td>default</td>
              <td>卡片主体内容</td>
            </tr>
            <tr>
              <td>foot</td>
              <td>卡片底部内容</td>
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
    <up-card
        title="Card 标题"
        sub-title="Card 副标题"
    >
        <view>卡片主体内容</view>
        <template #foot>
            <view>卡片底部内容</view>
        </template>
    </up-card>
</template>`

const marginCode = `<template>
    <up-card
        title="卡片标题"
        margin="20rpx 30rpx"
    >
        <view>卡片内容</view>
    </up-card>
</template>`

const thumbCode = `<template>
    <up-card
        title="卡片标题"
        thumb="https://example.com/thumb.png"
        thumb-width="80"
        thumb-circle
    >
        <view>卡片内容</view>
    </up-card>
</template>`

const borderCode = `<template>
    <up-card
        title="卡片标题"
        :border="true"
        :head-border-bottom="true"
        :foot-border-top="true"
    >
        <view>卡片内容</view>
    </up-card>
</template>`

const paddingCode = `<template>
    <up-card
        title="卡片标题"
        padding="30rpx 40rpx"
    >
        <view>卡片内容</view>
    </up-card>
</template>`
</script>

<style lang="scss" scoped>
.card-page {
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

  .header-anchor {
    text-decoration: none;
    color: #1890ff;
    font-weight: normal;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .header-anchor {
    opacity: 1;
  }
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
