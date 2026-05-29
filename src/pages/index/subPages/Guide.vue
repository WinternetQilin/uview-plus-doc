<script setup lang="ts">
import type { ComponentItem } from '../data/components'
import { computed } from 'vue'
import CodeBlock from '@/components/CodeBlock.vue'
import { guideItems } from '../data/components'

const props = withDefaults(defineProps<{
  guideName?: string
}>(), {
  guideName: '',
})

const currentGuide = computed<ComponentItem | undefined>(() => {
  return guideItems.find(g => g.name === props.guideName)
})

const quickStartCode = `// pages.config.ts 路由配置示例
export default defineUniPages({
  globalStyle: {
    navigationStyle: 'default',
    navigationBarTitleText: 'uview-plus',
  },
})`

const installCode = `# 安装 uview-plus
npm install uview-plus

# 或使用 pnpm
pnpm add uview-plus`

const configCode = `// main.ts
import uviewPlus from 'uview-plus'
import 'uview-plus/index.scss'

const app = createSSRApp(App)
app.use(uviewPlus)`
</script>

<template>
  <view class="guide-doc-page">
    <view v-if="currentGuide" class="doc-content">
      <view class="page-header">
        <view class="header-badge guide-badge">
          起步
        </view>
        <view class="page-title">
          {{ currentGuide.title }}
        </view>
        <view class="page-desc">
          以下是 <code>{{ currentGuide.name }}</code> 的相关说明，帮助你快速了解和使用 uview-plus。
        </view>
      </view>

      <view class="notice-card tip">
        <view class="notice-icon">
          i
        </view>
        <view class="notice-content">
          <text class="notice-title">提示</text>
          <text>uview-plus 是一个全面兼容 nvue / 鸿蒙 / uni-app-x 的 uni-app 生态 UI 框架，提供了丰富的组件和便捷的工具函数。</text>
        </view>
      </view>

      <view v-if="currentGuide.name === 'install'" class="section">
        <view class="section-title">
          安装方式
        </view>
        <view class="section-desc">
          推荐使用 <code>pnpm</code> 作为包管理工具，执行以下命令即可完成安装。
        </view>
        <CodeBlock title="安装命令" language="bash" :code="installCode" />
      </view>

      <view v-if="currentGuide.name === 'setting'" class="section">
        <view class="section-title">
          基础配置
        </view>
        <view class="section-desc">
          在项目的入口文件中引入 uview-plus 并注册为全局组件库。
        </view>
        <CodeBlock title="main.ts 配置" language="typescript" :code="configCode" />
      </view>

      <view v-if="currentGuide.name === 'quickstart'" class="section">
        <view class="section-title">
          快速开始
        </view>
        <view class="section-desc">
          完成安装和配置后，即可在页面中直接使用 uview-plus 的组件。
        </view>
        <CodeBlock title="路由配置" language="typescript" :code="quickStartCode" />
      </view>

      <view class="section">
        <view class="link-card">
          <view class="link-content">
            <view class="link-icon-box">
              <text class="link-icon-text">📖</text>
            </view>
            <text>查看 {{ currentGuide.title }} 完整文档</text>
          </view>
        </view>
      </view>
    </view>

    <view v-else class="not-found">
      <view class="not-found-icon">
        ?
      </view>
      <text class="not-found-title">文档未找到</text>
      <text class="not-found-desc">请从左侧菜单选择一个文档查看</text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.guide-doc-page {
  --color-primary: #1890ff;
  --color-text-title: #1f2329;
  --color-text-body: #4b5563;
  --color-text-muted: #6b7280;
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
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  margin-bottom: 12px;
}

.guide-badge {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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

.notice-card {
  display: flex;
  gap: 16px;
  padding: 16px 20px;
  border-radius: var(--radius-card);
  margin-bottom: 32px;
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
  background: #0284c7;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  font-style: italic;
}

.notice-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.notice-title {
  font-weight: 600;
  color: #075985;
  font-size: 14px;
}

.notice-content text {
  font-size: 14px;
  color: #0c4a6e;
  line-height: 1.6;
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

  code {
    background: #f0f0f0;
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'SF Mono', Monaco, Consolas, monospace;
    color: #c7254e;
    font-size: 0.9em;
  }
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
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
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
