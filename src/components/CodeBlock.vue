<template>
  <view class="code-block-container">
    <view v-if="title" class="code-header">
      <text class="code-title-text">{{ title }}</text>
    </view>
    <view class="code-actions">
      <up-button class="action-btn" :text="isCopying ? '复制成功' : '复制代码'" size="mini" @click="handleCopy" />
      <up-button class="action-btn" :text="isExpanded ? '收起' : '展开'" size="mini" @click="handleToggle" />
    </view>
    <view class="code-body" :class="{ collapsed: !isExpanded }">
      <scroll-view class="code-scroll" scroll-x>
        <rich-text class="code-richtext" :nodes="highlightedCode" />
      </scroll-view>
    </view>
  </view>
</template>

<script setup lang="ts">
import Prism from 'prismjs'
import { computed, ref } from 'vue'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-tomorrow.css'

interface Props {
  code: string
  language?: 'javascript' | 'typescript' | 'html' | 'scss' | 'bash' | 'vue'
  title?: string
}

const props = withDefaults(defineProps<Props>(), {
  language: 'html',
  title: '',
})

const isCopying = ref(false)
const isExpanded = ref(true)

function handleToggle() {
  isExpanded.value = !isExpanded.value
}

const languageMap: Record<string, string> = {
  html: 'markup',
  vue: 'markup',
}

function getPrismLanguage(lang: string) {
  return languageMap[lang] || lang
}

function formatCode(code: string, language: string): string {
  if (language === 'html' || language === 'vue') {
    return formatHTML(code)
  }
  if (language === 'javascript' || language === 'typescript') {
    return formatJS(code)
  }
  return code
}

function formatHTML(code: string): string {
  let formatted = ''
  let indent = 0
  const indentStr = '    '

  const tagRegex = /<[^>]+>|<\/[^>]+>|[^<]+/g
  const tokens = code.match(tagRegex) || [code]

  for (const token of tokens) {
    const trimmed = token.trim()
    if (!trimmed)
      continue

    if (trimmed.startsWith('</')) {
      indent = Math.max(0, indent - 1)
      formatted += `${indentStr.repeat(indent) + trimmed}\n`
    }
    else if (
      trimmed.startsWith('<')
      && !trimmed.endsWith('/>')
      && !trimmed.includes('</')
    ) {
      formatted += `${indentStr.repeat(indent) + trimmed}\n`
      indent++
    }
    else if (trimmed.startsWith('<') && trimmed.endsWith('/>')) {
      formatted += `${indentStr.repeat(indent) + trimmed}\n`
    }
    else {
      if (trimmed) {
        formatted += `${indentStr.repeat(indent) + trimmed}\n`
      }
    }
  }

  return formatted.trim()
}

function formatJS(code: string): string {
  let formatted = ''
  let indent = 0
  const indentStr = '    '

  const lines = code.split('\n')
  for (let line of lines) {
    line = line.trim()
    if (!line) {
      formatted += '\n'
      continue
    }

    if (line.includes('}')) {
      indent = Math.max(0, indent - 1)
    }

    formatted += `${indentStr.repeat(indent) + line}\n`

    if (line.includes('{') || line.endsWith('{')) {
      indent++
    }
  }

  return formatted.trim()
}

const formattedCode = computed(() => formatCode(props.code, props.language))

const highlightedCode = computed(() => {
  const lang = getPrismLanguage(props.language)
  const grammar = Prism.languages[lang]
  if (grammar) {
    return Prism.highlight(formattedCode.value, grammar, lang)
  }
  return formattedCode.value
})

async function handleCopy() {
  try {
    await navigator.clipboard.writeText(formattedCode.value)
    isCopying.value = true
    setTimeout(() => (isCopying.value = false), 1500)
  }
  catch (err) {
    console.error('复制失败：', err)
    uni.showToast({
      title: '复制失败，请手动复制',
      icon: 'none',
    })
  }
}
</script>

<style scoped lang="scss">
.code-block-container {
  position: relative;
  // margin: 32rpx 0;
  border-radius: 16rpx;
  overflow: hidden;
  box-shadow: 0 4rpx 16rpx rgba(0, 0, 0, 0.1);
  background-color: #1d1d1d;

  .code-header {
    padding: 16rpx 32rpx;
    background-color: #2d2d2d;

    .code-title-text {
      color: #fff;
      font-size: 28rpx;
    }
  }

  .code-actions {
    position: absolute;
    top: 20rpx;
    right: 16rpx;
    z-index: 10;
    display: flex;
    gap: 12rpx;

    .action-btn {
      padding: 8rpx 20rpx;
      border-radius: 6rpx;
      background-color: rgba(58, 58, 58, 0.9);
      color: #ccc;
      font-size: 22rpx;
    }
  }

  .code-body {
    padding: 32rpx;
    max-height: 800rpx;
    transition: all 0.3s ease;

    &.collapsed {
      padding: 0 32rpx;
      max-height: 100rpx;
    }

    .code-scroll {
      width: 100%;
      overflow: auto;
    }

    .code-richtext {
      font-family: Consolas, Monaco, 'Courier New', monospace;
      font-size: 26rpx;
      line-height: 1.6;
      color: #ccc;
      white-space: pre;
      user-select: text;
      -webkit-user-select: text;
    }
  }
}
</style>
