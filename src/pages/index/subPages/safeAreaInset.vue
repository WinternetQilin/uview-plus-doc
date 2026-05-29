<template>
  <view class="safeAreaInset-page">
    <view class="theme-default-content content__default">
      <text id="安全区适配">安全区适配</text>
      <text id="底部安全区">底部安全区</text>
      <text>
        这个适配，主要是针对IPhone X等一些底部带指示条的机型，指示条的操作区域与页面底部存在重合，容易导致用户误操作，因此我们需要针对这些机型进行底部安全区适配。
        <br>
        在APP上，即使您保留了原生安全区占位(<code>offset</code>设置为<code>auto</code>)，也不会导致底部出现双倍的空白区域，也即APP上<code>offset</code>设置为<code>auto</code>时。
      </text>
      <CodeBlock title="底部安全区" language="html" :code="bottomSafeAreaCode" />
      <text id="顶部安全区">顶部安全区</text>
      <text>
        由于我们在做页面布局时经常会使用顶部位置，uview-plus提供了一个组件<code>up-status-bar</code>，如<code>up-popup</code>从顶部弹出时，可以考虑使用此组件。
      </text>
      <CodeBlock title="顶部安全区" language="html" :code="topSafeAreaCode" />
      <text id="关于uview-plus某些组件safe-area-inset参数的说明">
        关于uview-plus某些组件<code>safe-area-inset</code>参数的说明
      </text>
      <text>
        在uview-plus中，一些组件如<code>up-popup</code>、<code>up-keyboard</code>组件等，提供了一个<code>safeAreaInsetBottom</code>参数(布尔类型)，如果设置为<code>true</code>，就会在组件内部对安全区进行适配，
        从而避免安全区指示条引起的问题，以下为uview-plus的<code>up-keyboard</code>组件在<code>微信浏览器</code>中分别设置<code>safeAreaInsetBottom</code>参数
        为<code>false</code>和<code>true</code>的表现：
      </text>
      <view>
        <!-- <image src="../common/keyboard.png" alt="uview-plus" class="logo" /> -->
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const bottomSafeAreaCode = `<template>
    <view>
        .....
        <up-safe-bottom><\/up-safe-bottom>
    <\/view>
<\/template>`

const topSafeAreaCode = `<template>
    <view>
        <up-status-bar><\/up-status-bar>
        .....
    <\/view>
<\/template>`
</script>

<style lang="scss" scoped>
.safeAreaInset-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.logo {
  max-width: 100%;
  height: auto;
  margin: 15px 0;
}
</style>
