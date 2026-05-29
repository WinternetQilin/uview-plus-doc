<template>
  <view class="signature-page">
    <view class="theme-default-content content__default">
      <text id="signature-签名">
        Signature 签名
        <text class="badge tip">3.1.86</text>
      </text>
      <text>Signature 签名组件，支持自定义颜色、粗细、背景色，可用于用户签名场景。</text>
      <text id="平台差异说明">平台差异说明</text>
      <table class="platform-table">
        <thead>
          <tr>
            <th style="text-align:center;">
              App（vue）
            </th>
            <th style="text-align:center;">
              App（nvue）
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基础用法">基础用法</text>
      <CodeBlock title="基础用法" language="html" :code="basicUseCode" />
      <text id="自定义样式">自定义样式</text>
      <CodeBlock title="自定义样式" language="html" :code="customStyleCode" />
      <text id="隐藏工具栏">隐藏工具栏</text>
      <CodeBlock title="隐藏工具栏" language="html" :code="hideToolbarCode" />
      <text id="完整示例">完整示例</text>
      <CodeBlock title="完整示例" language="html" :code="fullExampleCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<template>
  <view>
    <up-signature
      ref="signature"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`

const customStyleCode = `<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      color="#ff0000"
      thickness="6"
      bg-color="#f5f5f0"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`

const hideToolbarCode = `<template>
  <view>
    <up-signature 
      ref="signature" 
      :width="300" 
      :height="200" 
      bg-color="#ffffff"
      :show-toolbar="false"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>`

const fullExampleCode = `<template>
  <view class="signature-container">
    <up-signature
      ref="signature"
      :width="700"
      :height="500"
      color="#000000"
      :stroke-width="5"
      bg-color="#FFFFFF"
      :show-toolbar="true"
      @confirm="onConfirm"
      @error="onError"
    ></up-signature>
    
    <view class="btn-group">
      <up-button @click="handleClear">清除签名</up-button>
      <up-button type="primary" @click="handleConfirm">确认签名</up-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';

const signature = ref(null);

const handleClear = () => {
  signature.value.clear();
};

const onConfirm = (tempFilePath) => {
  console.log('签名图片路径:', tempFilePath);
  uni.showToast({
    title: '签名成功',
    icon: 'success'
  });
};

const onError = (err) => {
  console.error('签名导出错误:', err);
  uni.showToast({
    title: '签名导出失败',
    icon: 'none'
  });
};
<\/script>

<style lang="scss" scoped>
.signature-container {
  padding: 20rpx;
}

.btn-group {
  display: flex;
  justify-content: space-around;
  margin-top: 30rpx;
}
</style>`
</script>

<style lang="scss" scoped>
.signature-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
view {
  margin: 10px 0;
  padding-left: 20px;
  view {
    margin: 5px 0;
    line-height: 1.6;
  }
}
text {
  color: #3eaf7c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e6f7ff;
  color: #1890ff;
  margin-left: 8px;
  vertical-align: middle;
}
.platform-table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
  th,
  td {
    border: 1px solid #e8e8e8;
    padding: 8px;
  }
  th {
    background: #f5f5f5;
  }
}
</style>
