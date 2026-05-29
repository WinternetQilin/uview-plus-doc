<template>
  <view class="changeGuide-page">
    <view class="theme-default-content content__default">
      <text id="升级指南">
        <text href="changeGuide.html#升级指南" class="header-anchor">#</text> 升级指南
      </text>
      <text id="_3-x-2-x-4-x升级说明-4-x即将发布">
        <text href="changeGuide.html#_3-x-2-x-4-x升级说明-4-x即将发布" class="header-anchor">#</text>
        3.x(2.x)-4.x升级说明(4.x即将发布)
      </text>
      <text>出于兼容性及uni-app-x兼容需求，3.x(2.x)升级到4.x请注意一下几点：</text>
      <view>
        <view>
          <text class="optimize">变更</text>
          组件class名称包含u-开头改为up-开头，之前存在自定义样式覆盖内置样式的记得替换，比如.u-button
          xxx改为.up-button xxx
        </view>
        <view>
          <text class="optimize">变更</text>sass变量前缀从$u-改为$up-
        </view>
        <view>
          <text class="optimize">变更</text>内置样式u-line-1等前缀从u-改为up-
        </view>
        <view>
          <text class="optimize">变更</text>easycom规则u-$1改为up-$1
        </view>
        <view>
          <text class="optimize">变更</text>图标前缀由uicon改为upicon
        </view>
        <view>
          <text class="optimize">删除</text>u--开头组件已删除，请直接使用up-开头组件
        </view>
      </view>
      <text id="_2-x-3-x升级说明">
        <text href="changeGuide.html#_2-x-3-x升级说明" class="header-anchor">#</text>
        2.x-3.x升级说明
      </text>
      <text>
        uview-plus.3相较于<code>uView2.x</code>版本，目前只是做了对vue3支持的改动，其它接口调用尽量保持一致，因此您在升级老项目到vue3时，除了用uview-plus3替换uview2以及main.js等改写之外，没有其他组件上的修改需要，但是如果您遇到了问题可以联系我们。
      </text>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.changeGuide-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
}
view,
view {
  padding-left: 20px;
  margin: 10px 0;
}
view {
  margin: 5px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.optimize {
  color: #e6a23c;
  font-weight: bold;
  margin-right: 5px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
</style>
