<template>
  <view class="unocss-page">
    <view class="theme-default-content content__default">
      <text id="安装unocss">
        <text href="unocss.html#安装unocss" class="header-anchor">#</text>
        安装unocss
      </text>

      <text id="使用">
        <text href="unocss.html#使用" class="header-anchor">#</text>
        使用
      </text>

      <CodeBlock
        code="# 使用Vue3/Vite版

npx degit dcloudio/uni-preset-vue#vite-ts my-vue3-project

# 安装unocss
pnpm add -D unocss unocss-preset-weapp"
        language="bash"
        title="安装"
      />

      <view>
        <view>unocss 0.59.* 之后版本 vite.config.ts</view>
      </view>

      <view class="custom-block warning">
        <text>Error [ERR_REQUIRE_ESM]: require() of ES Module, <text href="https://github.com/dcloudio/uni-app/issues/4815" target="_blank">https://github.com/dcloudio/uni-app/issues/4815</text> <text href="https://github.com/unocss/unocss/issues/3776" target="_blank">https://github.com/unocss/unocss/issues/3776</text></text>
      </view>

      <CodeBlock
        code="import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCss = await import('unocss/vite').then(i => i.default)

  return {
    plugins: [
      uni(),

      // https://github.com/unocss/unocss
      UnoCss(),
    ],
  }
})"
        language="ts"
        title="vite.config.ts (unocss 0.59.* 之后版本)"
      />

      <view>
        <view>unocss 0.59.* 之前版本 vite.config.ts</view>
      </view>

      <CodeBlock
        code="import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uni(),
    // https://github.com/antfu/unocss
    Unocss(),
  ],
})"
        language="ts"
        title="vite.config.ts (unocss 0.59.* 之前版本)"
      />

      <view>
        <view>unocss.config.ts</view>
      </view>

      <view class="custom-block tip">
        <text class="custom-block-title">提示</text>
        <text>添加unocss.config.ts文件，搭配 <text href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss" target="_blank">unocss vscode 插件</text>，智能提示</text>
      </view>

      <CodeBlock
        code="import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { presetWeappAttributify, transformerAttributify } = extractorAttributify()

export default {
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp(),
    // attributify autocomplete
    presetWeappAttributify(),
  ],
  shortcuts: [
    {
      'border-base': 'border border-gray-500_10',
      'center': 'flex justify-center items-center',
    },
  ],

  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify(),

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass(),
  ]
}"
        language="ts"
        title="unocss.config.ts"
      />

      <view>
        <view>main.ts</view>
      </view>

      <CodeBlock
        code="import 'uno.css'"
        language="ts"
        title="main.ts"
      />
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.unocss-page {
  padding: 20px;
}

.custom-block {
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;

  &.tip {
    background-color: #f0f9eb;
    border-left: 4px solid #67c23a;
  }

  &.warning {
    background-color: #fdf6ec;
    border-left: 4px solid #e6a23c;
  }
}

.custom-block-title {
  font-weight: 600;
  margin-bottom: 8px;
}

view {
  padding-left: 20px;

  view {
    margin: 8px 0;
  }
}

text {
  color: #409eff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
