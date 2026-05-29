<template>
  <view class="changelog-page">
    <view class="theme-default-content content__default">
      <text id="更新日志">
        <text href="changelog.html#更新日志" class="header-anchor">#</text> 更新日志
      </text>
      <text>更新日志及升级指导</text>
      <text>
        为减少重复工作，后续API变更等重大的日志（升级时请关注这些重大变化）在这里可以查看，常规更新日志请访问此链接查看
        <text target="_blank" href="https://gitee.com/jry/uview-plus/blob/3.x/src/uni_modules/uview-plus/changelog.md">
          更新日志
        </text>。
      </text>
      <view class="doc-update">
        <view class="u-timeline u-timeline-pending">
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>4.X(预计2025年08月发布)</text>
              </view>
              <text>
                <code>2024-2025</code>出于兼容性及uni-app-x兼容需求，3.x升级到4.x请注意一下几点：
              </text>
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
                <view>
                  <text class="add">新增</text>新增部分uni-app-x组件支持
                </view>
              </view>
            </view>
          </view>
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>3.4.X</text>
              </view>
              <text><code>2025</code></text>
              <view>
                <view>
                  <text class="optimize">变更</text>新setConfig机制确保http在nvue等环境下生效
                </view>
                <view>
                  <text class="add">新增</text>step组件增加title插槽及增加辅助class便于自定义样式
                </view>
                <view>
                  <text class="add">新增</text>modal增加异步操作进行中点击取消弹出提示特性防止操作被中断
                </view>
                <view>
                  <text class="add">新增</text>tag组件新增textSize/height/padding/borderRadius属性
                </view>
                <view>
                  <text class="add">新增</text>新增genLightColor自动计算浅色方法及tag组件支持autoBgColor自动计算背景色
                </view>
                <view>
                  <text class="add">新增</text>upload组件支持服务器本机和阿里云OSS自动上传功能及上传进度条
                </view>
                <view>
                  <text class="add">新增</text>upload组件支持视频预览及oss上传时获取视频封面图
                </view>
                <view>
                  <text class="add">新增</text>新增up-action-sheet-data快捷组件
                </view>
                <view>
                  <text class="add">新增</text>新增up-picker-data快捷组件
                </view>
                <view>
                  <text class="fix">修复</text>dropdown关闭后遮挡页面内容 #653
                </view>
                <view>
                  <text class="add">新增</text>支持自托管内置图标及扩展自定义图标
                </view>
                <view>
                  <text class="add">新增</text>优化全局导入组件，增加App环境下全自动导入。
                </view>
                <view>
                  <text class="fix">修复</text>up-form编译在微信小程序里样式缺失 #640
                </view>
              </view>
            </view>
          </view>
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>3.3.X</text>
              </view>
              <text><code>2024</code></text>
              <view>
                <view>
                  <text class="optimize">变更</text>form-item的rule属性变更为rules
                </view>
                <view>
                  <text class="optimize">优化</text>公共mixin改造为按需导入语法
                </view>
                <view>
                  <text class="optimize">优化</text>slider组件重构优化
                </view>
                <view>
                  <text class="optimize">优化</text>index-list组件重构优化
                </view>
                <view>
                  <text class="optimize">优化</text>input组件maxlength默认中从-1改为140
                </view>
                <view>
                  <text class="optimize">优化</text>小程序下steps和grid都统一采用css的grid布局
                </view>
              </view>
            </view>
          </view>
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>3.2.X</text>
              </view>
              <text><code>2024</code></text>
              <view>
                <view>
                  <text class="add">新增</text>增加瀑布流与图片懒加载组件
                </view>
                <view>
                  <text class="fix">修复</text>去除安卓steps提示不支持
                </view>
                <view>
                  <text class="add">新增</text>typescript支持
                </view>
                <view>
                  <text class="optimize">优化</text>组件内uni.$u用法改为import引入
                </view>
              </view>
            </view>
          </view>
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>3.1.X</text>
              </view>
              <text><code>2022-2024</code></text>
              <view>
                <view>
                  <text class="optimize">优化</text>日常修复
                </view>
              </view>
            </view>
          </view>
          <view class="u-timeline-item">
            <view class="u-timeline-item-tail" />
            <view class="u-timeline-item-head u-timeline-item-head-blue" />
            <view class="u-timeline-item-content">
              <view class="anchor">
                <text>3.0.0</text>
              </view>
              <text><code>2022-07-09</code></text>
              <view>
                <view>
                  <text class="fix">修改</text>
                  修改原版uview2的代码使其支持vue3模式下运行
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.changelog-page {
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
text {
  color: #409eff;
  text-decoration: none;
}
.optimize {
  color: #e6a23c;
  font-weight: bold;
  margin-right: 5px;
}
.add {
  color: #67c23a;
  font-weight: bold;
  margin-right: 5px;
}
.fix {
  color: #f56c6c;
  font-weight: bold;
  margin-right: 5px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
.doc-update {
  margin-top: 20px;
}
.u-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
}
.u-timeline-item {
  position: relative;
  padding-bottom: 20px;
  padding-left: 20px;
}
.u-timeline-item-tail {
  position: absolute;
  left: 4px;
  top: 6px;
  height: 100%;
  border-left: 2px solid #e4e7ed;
}
.u-timeline-item-head {
  position: absolute;
  left: 0;
  top: 6px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #e4e7ed;
}
.u-timeline-item-head-blue {
  background: #409eff;
}
.u-timeline-item-content {
  padding-left: 20px;
}
.anchor text {
  margin: 0 0 10px;
  font-size: 18px;
  font-weight: 600;
}
</style>
