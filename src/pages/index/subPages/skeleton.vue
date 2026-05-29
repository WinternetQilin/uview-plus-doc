<template>
  <view class="skeleton-page">
    <view class="theme-default-content content__default">
      <text id="skeleton-骨架屏">
        Skeleton 骨架屏
      </text>
      <text>骨架屏一般用于页面在请求远程数据尚未完成时，页面用灰色块预显示本来的页面结构，给用户更好的体验。</text>
      <view class="custom-block tip">
        <text class="custom-block-title">说明</text>
        <text>由于<code>VUE</code>和<code>NVUE</code>的特性不同，组件动画在<code>VUE</code>上为由左到右形式，在<code>NVUE</code>上为明暗显隐的形式。</text>
      </view>
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
      <text id="基本使用">基本使用</text>
      <text>组件由<code>标题</code>，<code>段落</code>和<code>头像</code>组件组件，其中<code>段落</code>需要通过<code>rows</code>参数配置才显示，可以通过<code>title</code>和<code>avatar</code>是否显示<code>标题</code>和<code>头像</code>。</text>
      <CodeBlock title="基本使用" language="html" :code="basicUseCode" />
      <text id="加载中动画">加载中动画</text>
      <text>设置<code>animate</code>为<code>true</code>，加载中的骨架块将会有一个动画效果，用以加强视觉效果。</text>
      <CodeBlock title="加载中动画" language="html" :code="animateCode" />
      <text id="显示头像">显示头像</text>
      <CodeBlock title="显示头像" language="html" :code="avatarCode" />
      <text id="插槽内容">插槽内容</text>
      <text>可以通过插槽写入展示的内容，当请求结束，将<code>loading</code>设置为<code>false</code>，此时会隐藏骨架组件，同时展示插槽内容。</text>
      <CodeBlock title="插槽内容" language="html" :code="slotCode" />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/skeleton/skeleton.nvue" target="_blank" style="display:flex;align-items:center;">
          <image height="30" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png" title="github" width="30">
            github
          </image>
        </text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUseCode = `<up-skeleton :loading="true" :title="true" :rows="3"></up-skeleton>`

const animateCode = `<up-skeleton :loading="true" :animate="true" :title="true" :rows="3"></up-skeleton>`

const avatarCode = `<up-skeleton :loading="true" avatar :rows="1"></up-skeleton>`

const slotCode = `<template>
  <up-skeleton :loading="loading" :title="true" :rows="3">
    <view class="content">
      <view class="item" v-for="i in 3" :key="i">
        <image class="avatar" src="/static/logo.png" />
        <view class="text">这是真实内容</view>
      </view>
    </view>
  </up-skeleton>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(true);

setTimeout(() => {
  loading.value = false;
}, 2000);
<\/script>`
</script>

<style lang="scss" scoped>
.skeleton-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
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
.custom-block {
  background: #f6f8fa;
  border-left: 4px solid #3eaf7c;
  padding: 12px 16px;
  margin: 10px 0;
  border-radius: 4px;
  .custom-block-title {
    font-weight: 600;
    margin: 0 0 5px 0;
  }
  text {
    margin: 5px 0;
  }
}
</style>
