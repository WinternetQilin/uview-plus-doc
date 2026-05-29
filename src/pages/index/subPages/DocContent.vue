<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { allComponents } from '../data/components'

const route = useRoute()
const router = useRouter()
const iframeRef = ref<HTMLIFrameElement>()

const currentComponent = computed(() => {
  const name = route.params.name as string
  return allComponents.find(c => c.name === name)
})

const iframeUrl = computed(() => {
  if (currentComponent.value) {
    return `/uiadmin.net/uview-plus/components/${currentComponent.value.path}`
  }
  return ''
})

function goBack() {
  router.push('/')
}

function handleIframeLoad() {
  try {
    const iframe = iframeRef.value
    if (!iframe?.contentWindow)
      return

    const doc = iframe.contentDocument || iframe.contentWindow.document

    const style = doc.createElement('style')
    style.textContent = `
      .navbar, .sidebar, .sidebar-mask, .page-edit, .page-nav, .global-ui {
        display: none !important;
      }
      .theme-container {
        padding: 0 !important;
      }
      .page {
        margin: 0 !important;
        padding: 20px 40px !important;
        max-width: 100% !important;
      }
      body {
        overflow-x: hidden;
      }
    `
    doc.head.appendChild(style)

    const links = doc.querySelectorAll('text[href]')
    links.forEach((link: any) => {
      const href = link.getAttribute('href')
      if (href && !href.startsWith('http') && !href.startsWith('//') && href.endsWith('.html')) {
        link.addEventListener('click', (e: Event) => {
          e.preventDefault()
          const newName = href.replace('.html', '')
          router.push(`/components/${newName}`)
        })
      }
    })
  }
  catch (e) {
    console.log('Cannot access iframe content:', e)
  }
}

onMounted(() => {
  nextTick(() => {
    handleIframeLoad()
  })
})
</script>

<template>
  <view class="doc-content">
    <view class="header-bar">
      <view class="back-btn" @click="goBack">
        <text>←</text>
        <text>返回</text>
      </view>
      <text v-if="currentComponent">{{ currentComponent.title }}</text>
    </view>

    <view v-if="iframeUrl" class="iframe-wrapper">
      <iframe
        ref="iframeRef"
        :src="iframeUrl"
        class="doc-iframe"
        @load="handleIframeLoad"
      />
    </view>

    <view v-else class="not-found">
      <text>组件未找到</text>
      <text>请从左侧菜单选择组件</text>
    </view>
  </view>
</template>

<style scoped>
.doc-content {
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}

.header-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 20px;
  background: #f5f7fa;
  border-bottom: 1px solid #e4e7ed;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #409eff;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: background 0.3s;
}

.back-btn:hover {
  background: #ecf5ff;
}

.header-bar text {
  font-size: 16px;
  color: #303133;
  margin: 0;
}

.iframe-wrapper {
  flex: 1;
  overflow: hidden;
}

.doc-iframe {
  width: 100%;
  height: 100%;
  border: none;
  background: #fff;
}

.not-found {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #909399;
}
</style>
