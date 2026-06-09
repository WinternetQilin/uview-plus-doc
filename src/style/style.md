# 组件文档页面样式设计指南

本文档定义了组件文档页面的视觉设计规范，确保各组件文档页面风格统一。

## 设计理念

- **简洁专业**：以内容为核心，避免过度装饰
- **清晰层次**：通过间距、字号、颜色建立视觉层次
- **现代感**：采用圆角、渐变、阴影等现代设计元素
- **一致性**：所有组件页面遵循相同的结构模式

## 页面结构

```
页面容器 (textarea-page)
├── page-header (页面头部)
│   ├── header-badge (组件分类徽章)
│   ├── page-title (页面大标题)
│   └── page-desc (页面描述)
├── notice-card (注意事项卡片)
├── section (内容区块)
│   ├── section-title (区块标题)
│   ├── section-desc (区块描述，可选)
│   ├── demo-container (组件演示容器，可选)
│   └── CodeBlock (代码示例)
└── link-card (源码链接卡片)
```

## 字体系统

| 元素       | 字号 | 字重 | 颜色    |
| ---------- | ---- | ---- | ------- |
| 页面大标题 | 32px | 700  | #1f2329 |
| 区块标题   | 20px | 600  | #1f2329 |
| 页面描述   | 15px | 400  | #4b5563 |
| 区块描述   | 14px | 400  | #6b7280 |
| 正文       | 14px | 400  | #4b5563 |

## 间距系统

使用 8px 倍数系统：

- `padding: 32px 24px` 页面容器
- `margin-bottom: 32px` 区块间距
- `gap: 8px / 12px / 16px` 元素间距
- `margin-bottom: 12px / 16px` 标题与内容间距

## 组件样式

### 1. header-badge (分类徽章)

```scss
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
```

### 2. section-title (区块标题)

```scss
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
```

### 3. notice-card (注意事项卡片)

```scss
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
```

### 4. platform-table (平台差异表格)

````scss
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

### 5. subsection-title (API 章节小标题) ```scss .subsection-title {
  font-size: 16px;
  font-weight: 600;
  color: #374151;
  margin: 24px 0 12px;
}
````

### 6. demo-container (演示容器)

```scss
.demo-container {
  background-color: #f5f5f5;
  margin-bottom: 16px;
  padding: 24px;
  border-radius: 12px;
}
```

### 7. api-table (API 参数表格)

```scss
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
```

### 8. link-card (源码链接卡片)

```scss
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
```

### 9. version-badge (版本徽章)

```scss
.version-badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e0f2fe;
  color: #0284c7;
  font-weight: 500;
}
```

### 10. notice-card (提示卡片)

```scss
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
```

### 11. list-items (列表项)

```scss
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
```

### 12. code (行内代码)

```scss
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  font-family: 'SF Mono', Monaco, Consolas, monospace;
  color: #c7254e;
  font-size: 0.9em;
}
```

### 13. demo-placeholder (演示占位卡)

> ⚠️ **状态：已废弃**，从 `checkbox.vue` 等文档页移除（参见 [checkbox.vue#9-20](file:///Users/happy/Documents/uview-plus-doc/src/pages/index/subPages/checkbox.vue) 原占位块）。若后续要在其他页面复用，请直接删除本节并在对应页面同步清理 `.demo-placeholder` / `.placeholder-tip` 标签与样式。

用于文档页中嵌入"实际演示入口"（跳转到 H5 演示站），区别于 `.demo-container`（容器里放真实组件）。

```scss
.demo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
  border: 1px dashed #e5e7eb;
  border-radius: 12px;
  margin-bottom: 32px;
  min-height: 160px;
  gap: 8px;

  text {
    color: #6b7280;
    font-size: 14px;
    margin: 0;
    line-height: 1.6;
  }
}

.placeholder-tip {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.placeholder-tip text {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;

  &:hover {
    color: #40a9ff;
    text-decoration: underline;
  }
}
```

## 颜色系统

### 主色调

- **Primary**: `#1890ff` (链接、hover 状态)
- **Success**: `#16a34a` (对勾图标背景)
- **Danger**: `#dc2626` (警告图标)

### 背景色

- **页面背景**: `#ffffff`
- **表格表头**: `#f9fafb`
- **卡片背景**: `#f9fafb`
- **hover 背景**: `#f9fafb`

### 边框色

- **默认边框**: `#e5e7eb`
- **危险边框**: `#fecaca`

### 文字色

- **标题**: `#1f2329`
- **正文**: `#374151`
- **辅助文字**: `#4b5563`
- **次要文字**: `#6b7280`

## 圆角系统

| 元素      | 圆角值            |
| --------- | ----------------- |
| 徽章/标签 | 20px (pill shape) |
| 卡片      | 12px              |
| 表格      | 12px              |
| 代码      | 4px               |
| 图标      | 50% (圆形)        |

## 阴影系统

```scss
// 轻微阴影 (用于卡片)
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
```

## 过渡动画

```scss
transition: opacity 0.2s; // 锚点链接
transition: color 0.2s; // 链接 hover
```

## 代码示例模板

```vue
<template>
  <view class="textarea-page">
    <view class="page-header">
      <view class="header-badge">表单组件</view>
      <view id="组件名" class="page-title">
        <text href="组件名.html#组件名" class="header-anchor">#</text>
        组件名称
      </view>
      <view class="page-desc">组件描述文字</view>
    </view>

    <view class="notice-card danger">
      <view class="notice-icon">!</view>
      <view class="notice-content">
        <text class="notice-title">注意事项</text>
        <text>注意事项内容</text>
      </view>
    </view>

    <view class="section">
      <view id="平台差异说明" class="section-title">
        <text href="组件名.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </view>
      <view class="table-wrapper">
        <table class="platform-table">
          <!-- 表格内容 -->
        </table>
      </view>
    </view>

    <view class="section">
      <view id="基本使用" class="section-title">
        <text href="组件名.html#基本使用" class="header-anchor">#</text>
        基本使用
      </view>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
    </view>

    <view class="section">
      <view id="右侧演示页面源代码地址" class="section-title">
        <text href="组件名.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </view>
      <view class="link-card">
        <view class="link-content">
          <image class="link-icon" height="24" src="github-icon-url" width="24" />
          <text>查看右侧演示页面的源码</text>
        </view>
        <view class="link-actions">
          <text href="github-link" target="_blank">GitHub</text>
          <text href="gitee-link" target="_blank">Gitee</text>
        </view>
      </view>
    </view>

    <view class="section">
      <view id="api" class="section-title">
        <text href="组件名.html#api" class="header-anchor">#</text>
        API
      </view>

      <view id="props" class="subsection-title">Props</view>
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
              <td>参数说明</td>
              <td>String</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </view>

      <view id="events" class="subsection-title">Events</view>
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
              <td>点击时触发</td>
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

// 代码示例常量...
</script>

<style lang="scss" scoped>
/* 使用上述规范中的样式 */
</style>
```

## 注意事项

1. **始终使用 CodeBlock 组件**展示代码，不要使用原生 `<code>` 或 `<pre>`
2. **平台差异表格**使用绿色对勾图标 `#dcfce7` 背景
3. **危险警告卡片**使用红色渐变背景
4. **锚点链接**在标题 hover 时显示
5. **避免重复样式**：只保留页面实际使用的样式
