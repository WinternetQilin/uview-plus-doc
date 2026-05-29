<script setup lang="ts">
import type { ComponentItem } from '../data/components'
import { computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { allComponents } from '../data/components'

const props = withDefaults(defineProps<{
  componentName?: string
}>(), {
  componentName: '',
})

const currentComponent = computed<ComponentItem | undefined>(() => {
  return allComponents.find(c => c.name === props.componentName)
})

const basicUsageCode = computed(() => {
  if (!currentComponent.value)
    return ''
  const tag = `up-${currentComponent.value.name}`
  return `<template>
  <${tag} />
</template>`
})

const importCode = computed(() => {
  if (!currentComponent.value)
    return ''
  return `<!-- uview-plus 组件无需手动引入，easycom 自动注册 -->
<template>
  <up-${currentComponent.value.name} />
</template>`
})
</script>

<template>
  <view class="component-doc-page">
    <view v-if="currentComponent" class="doc-content">
      <view class="page-header">
        <view class="header-badge">
          组件
        </view>
        <view class="page-title">
          {{ currentComponent.title }}
        </view>
        <view class="page-desc">
          以下是 <code>{{ currentComponent.name }}</code> 组件的基本使用方式。
        </view>
      </view>

      <view class="section">
        <view class="section-title">
          基本使用
        </view>
        <view class="section-desc">
          uview-plus 组件支持 easycom 自动引入，无需手动注册，直接在模板中使用即可。
        </view>
        <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      </view>

      <view class="section">
        <view class="section-title">
          完整示例
        </view>
        <CodeBlock title="完整示例" language="html" :code="importCode" />
      </view>

      <view class="section">
        <view class="link-card">
          <view class="link-content">
            <view class="link-icon-box">
              <text class="link-icon-text">📖</text>
            </view>
            <text>查看 {{ currentComponent.title }} 完整文档</text>
          </view>
        </view>
      </view>
    </view>

    <view v-else class="not-found">
      <view class="not-found-icon">
        ?
      </view>
      <text class="not-found-title">组件未找到</text>
      <text class="not-found-desc">请从左侧菜单选择一个组件查看文档</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.component-doc-page {
  --color-primary: #1890ff;
  --color-text-title: #1f2329;
  --color-text-body: #4b5563;
  --color-text-muted: #6b7280;
  --color-bg-page: #ffffff;
  --color-bg-card: #f9fafb;
  --color-border: #e5e7eb;
  --radius-card: 12px;

  padding: 32px 24px;
  max-width: 900px;
  margin: 0 auto;
}

.doc-content {
  animation: fadeInUp 0.35s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-header {
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border);
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
  color: var(--color-text-title);
  margin-bottom: 12px;
}

.page-desc {
  font-size: 15px;
  color: var(--color-text-body);
  line-height: 1.6;

  code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'SF Mono', Monaco, Consolas, monospace;
    color: #c7254e;
    font-size: 0.9em;
  }
}

.section {
  margin-bottom: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text-title);
  margin-bottom: 16px;
}

.section-desc {
  font-size: 14px;
  color: var(--color-text-muted);
  margin-bottom: 12px;
  line-height: 1.6;
}

.link-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  transition:
    border-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    border-color: var(--color-primary);
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.08);
  }
}

.link-content {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-title);
  font-size: 14px;
  font-weight: 500;
}

.link-icon-box {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%);
  border-radius: 8px;
}

.link-icon-text {
  font-size: 18px;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 12px;
}

.not-found-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-bg-card);
  border: 2px dashed var(--color-border);
  border-radius: 50%;
  font-size: 28px;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.not-found-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-title);
}

.not-found-desc {
  font-size: 14px;
  color: var(--color-text-muted);
}
</style>
