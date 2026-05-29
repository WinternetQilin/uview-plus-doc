<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { allComponents } from '../data/components'

const route = useRoute()
const router = useRouter()

const currentComponent = computed(() => {
  const name = route.params.name as string
  return allComponents.find(c => c.name === name)
})

const iframeUrl = computed(() => {
  if (currentComponent.value) {
    return `${window.location.origin}/uiadmin.net/uview-plus/components/${currentComponent.value.path}`
  }
  return ''
})

function goBack() {
  router.push('/')
}
</script>

<template>
  <view class="component-doc">
    <view class="header">
      <view class="back-btn" @click="goBack">
        <el-icon><ArrowLeft /></el-icon>
        <text>返回首页</text>
      </view>
      <text v-if="currentComponent">{{ currentComponent.title }}</text>
    </view>

    <view v-if="iframeUrl" class="iframe-container">
      <iframe
        :src="iframeUrl"
        class="doc-iframe"
      />
    </view>

    <view v-else class="not-found">
      <text>组件未找到</text>
      <text>请从左侧菜单选择组件</text>
    </view>
  </view>
</template>

<style scoped>
.component-doc {
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f5f7fa;
}

.header {
  padding: 16px 20px;
  background: #fff;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  align-items: center;
  gap: 20px;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #409eff;
  font-size: 14px;
}

.back-btn:hover {
  color: #66b1ff;
}

.header text {
  font-size: 18px;
  color: #303133;
  margin: 0;
}

.iframe-container {
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
