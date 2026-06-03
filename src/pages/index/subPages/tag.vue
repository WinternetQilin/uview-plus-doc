<template>
  <view class="tag-page">
    <view class="page-header">
      <view class="header-badge">
        基础组件
      </view>
      <view id="tag-标签" class="page-title">
        Tag 标签
      </view>
      <view class="page-desc">
        tag组件一般用于标记和选择，我们提供了更加丰富的表现形式，能够较全面的涵盖您的使用场景
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
      <view class="list-items">
        <view>
          通过
          <code>type</code>
          参数设置主题类型，默认为
          <code>primary</code>
        </view>
        <view>
          属性
          <code>text</code>
          设置标签内容
        </view>
      </view>
      <up-tag text="标签" plain size="mini" type="warning" />
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="自定义主题" class="section-title">
        自定义主题
      </view>
      <up-tag text="标签" />
      <up-tag text="标签" type="success" />
      <up-tag text="标签" type="error" />
      <up-tag text="标签" type="warning" />
      <up-tag text="标签" type="info" />
      <CodeBlock title="自定义主题" language="html" :code="themeCode" />
    </view>

    <view class="section">
      <view id="圆形标签" class="section-title">
        圆形标签
      </view>
      <view class="section-desc">
        类似胶囊形状
      </view>
      <CodeBlock title="圆形标签" language="html" :code="circleCode" />
    </view>

    <view class="section">
      <view id="镂空标签" class="section-title">
        镂空标签
      </view>
      <CodeBlock title="镂空标签" language="html" :code="plainCode" />
    </view>

    <view class="section">
      <view id="镂空带背景色" class="section-title">
        镂空带背景色
      </view>
      <view class="section-desc">
        添加
        <code>plainFill</code>
        属性镂空带背景色
      </view>
      <CodeBlock title="镂空带背景色" language="html" :code="plainFillCode" />
    </view>

    <view class="section">
      <view id="镂空带背景色不带边框" class="section-title">
        镂空带背景色不带边框
      </view>
      <view class="section-desc">
        添加
        <code>plainFill</code>
        属性镂空带背景色
      </view>
      <CodeBlock title="镂空带背景色不带边框" language="html" :code="plainFillBorderCode" />
    </view>

    <view class="section">
      <view id="镂空自动计算背景色" class="section-title">
        镂空自动计算背景色
      </view>
      <view class="section-desc">
        <up-tag text="3.4.5" size="mini" type="warning" />
        以上
      </view>
      <view class="section-desc">
        添加
        <code>color</code>
        属性，会自动计算对应的镂空背景色
      </view>
      <CodeBlock title="镂空自动计算背景色" language="html" :code="colorCode" />
    </view>

    <view class="section">
      <view id="点击事件" class="section-title">
        点击事件
      </view>
      <view class="section-desc">
        设置
        <code>click</code>
        事件，可以使用标签的点击事件
      </view>
      <CodeBlock title="点击事件" language="html" :code="clickCode" />
    </view>

    <view class="section">
      <view id="禁用" class="section-title">
        禁用
      </view>
      <view class="section-desc">
        设置
        <code>disabled</code>
        属性禁用标签
      </view>
      <CodeBlock title="禁用" language="html" :code="disabledCode" />
    </view>

    <view class="section">
      <view id="api" class="section-title">
        API
      </view>

      <view id="props" class="api-subtitle">
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
              <td>type</td>
              <td>主题类型</td>
              <td><code>String</code></td>
              <td><code>primary</code></td>
              <td>success / info / warning / error</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>不可用</td>
              <td><code>Boolean | String</code></td>
              <td><code>false</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>size</td>
              <td>标签大小</td>
              <td><code>String</code></td>
              <td><code>medium</code></td>
              <td>large、mini</td>
            </tr>
            <tr>
              <td>shape</td>
              <td>标签形状</td>
              <td><code>String</code></td>
              <td><code>square</code></td>
              <td>circle</td>
            </tr>
            <tr>
              <td>text</td>
              <td>标签的文字内容</td>
              <td><code>String | Number</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>bgColor</td>
              <td>背景颜色，默认为空字符串，即不处理</td>
              <td><code>String</code></td>
              <td><code>#C6C7CB</code></td>
              <td>-</td>
            </tr>
            <tr>
              <td>color</td>
              <td>标签字体颜色，默认为空字符串，即不处理</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>borderColor</td>
              <td>标签的边框颜色</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>closeColor</td>
              <td>关闭按钮图标的颜色</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>name</td>
              <td>点击时返回的索引值，用于区分例遍的数组哪个元素被点击了</td>
              <td><code>String | Number</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>plainFill</td>
              <td>镂空时是否填充背景色</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>plain</td>
              <td>是否镂空</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>closable</td>
              <td>是否可关闭，设置为 true ，文字右边会出现一个关闭图标</td>
              <td><code>Boolean</code></td>
              <td><code>false</code></td>
              <td><code>true</code></td>
            </tr>
            <tr>
              <td>show</td>
              <td>标签显示与否</td>
              <td><code>Boolean</code></td>
              <td><code>true</code></td>
              <td><code>false</code></td>
            </tr>
            <tr>
              <td>icon</td>
              <td>内置图标，或绝对路径的图片</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                textSize
                <view class="version-tag">
                  3.4.5
                </view>
              </td>
              <td>文字大小</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                height
                <view class="version-tag">
                  3.4.5
                </view>
              </td>
              <td>自定义高度</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                padding
                <view class="version-tag">
                  3.4.5
                </view>
              </td>
              <td>自定义内间距</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                borderRadius
                <view class="version-tag">
                  3.4.5
                </view>
              </td>
              <td>自定义圆角</td>
              <td><code>String</code></td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                autoBgColor
                <view class="version-tag">
                  3.4.5
                </view>
              </td>
              <td>自动根据color计算浅色背景色</td>
              <td><code>Number</code></td>
              <td><code>85</code></td>
              <td>0-100</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="events" class="api-subtitle">
        Event
      </view>
      <view class="table-wrapper">
        <table class="api-table">
          <thead>
            <tr>
              <th>事件名</th>
              <th>说明</th>
              <th>回调参数</th>
              <th>版本</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>click</td>
              <td>点击标签触发</td>
              <td>index: 传递的 index 参数值</td>
              <td>-</td>
            </tr>
            <tr>
              <td>close</td>
              <td>closable 为 true 时，点击标签关闭按钮触发</td>
              <td>index: 传递的 index 参数值</td>
              <td>-</td>
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
  <up-tag text="标签" plain size="mini" type="warning"></up-tag>
</template>`

const themeCode = `<template>
  <up-tag text="标签"></up-tag>
  <up-tag text="标签" type="success"></up-tag>
  <up-tag text="标签" type="error"></up-tag>
  <up-tag text="标签" type="warning"></up-tag>
  <up-tag text="标签" type="info"></up-tag>
</template>`

const circleCode = `<template>
  <up-tag text="标签" plain shape="circle"></up-tag>
</template>`

const plainCode = `<template>
  <up-tag text="标签" plain></up-tag>
</template>`

const plainFillCode = `<template>
  <up-tag text="标签" plain plainFill></up-tag>
</template>`

const plainFillBorderCode = `<template>
  <up-tag text="标签" plain plainFill :border="false"></up-tag>
</template>`

const colorCode = `<template>
  <up-tag text="标签" color="#303133" plain></up-tag>
</template>`

const clickCode = `<template>
  <up-tag text="标签" @click="click"></up-tag>
</template>

<script setup>
const click = () => {
  console.log('点击了标签');
}
<\/script>`

const disabledCode = `<template>
  <up-tag text="标签" disabled></up-tag>
</template>`
</script>

<style lang="scss" scoped>
.tag-page {
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

.api-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: #1f2329;
  margin: 24px 0 12px;
  padding-left: 10px;
  border-left: 3px solid #667eea;
}

.api-table {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
  font-size: 13px;

  th {
    background: #f9fafb;
    color: #374151;
    font-weight: 600;
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
  }

  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    color: #4b5563;
    vertical-align: top;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:hover {
    background: #f9fafb;
  }
}

.version-tag {
  display: inline-block;
  margin-left: 6px;
  padding: 1px 6px;
  background: #fef3c7;
  color: #b45309;
  font-size: 11px;
  font-weight: 500;
  border-radius: 4px;
  vertical-align: middle;
}
</style>
