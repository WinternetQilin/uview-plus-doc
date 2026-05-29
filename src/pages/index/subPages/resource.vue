<template>
  <view class="resource-page">
    <view class="theme-default-content content__default">
      <text id="资源下载">资源下载</text>
      <text>我们会在这里为您提供一些跟uview-plus设计相关的资源和设计工具的下载，更多设计资源正在整理和完善中。</text>
      <text id="设计资源">设计资源</text>
      <text>这里我们提供组件的Sketch和Axure设计资源，您可以根据需要进行下载。</text>
      <view class="cards">
        <view class="container">
          <view>
            <view class="card">
              <!-- <image src="../uview/docs/b4b910e7f5919defa0b936c4fe03f4d.png" alt="" /> -->
              <text>Sketch Template</text>
              <text>通过在Sketch中导入uview-plus组件库，可以在交互设计阶段方便地调用常用的组件(Sketch版本：78)</text>
              <text href="https://uview-plus.jiangruyi.com/resources/uview-plus.sketch" download="">下载</text>
            </view>
          </view>
          <view>
            <view class="card">
              <!-- <image src="../uview/docs/9d24f116e345f13d2fc46734fbcd7a9.png" alt="" /> -->
              <text>Axure Template</text>
              <text>通过在Axure中导入uview-plus组件库，可以在交互设计阶段方便地调用常用的组件(Axure版本：9.0)</text>
              <text href="https://uview-plus.jiangruyi.com/resources/uview-plus.rp" download="">下载</text>
            </view>
          </view>
        </view>
      </view>
      <text id="框架资源">框架资源</text>
      <text>这里我们提供了一些跟组件，或者框架相关的下载资源，您可以根据需求进行下载。</text>
      <view class="cards">
        <view class="container">
          <view>
            <view class="card">
              <!-- <image src="../uview/docs/425b2a05e181894a8e3f09f4d95af4e.png" alt="" /> -->
              <text>Empty组件配套占位图</text>
              <text>我们的专业设计师精心为您做了一套精美的缺省图，涵盖各个场景，文件内含图片和Sketch源文件</text>
              <text href="https://uview-plus.jiangruyi.com/resources/Empty.zip">下载</text>
            </view>
          </view>
          <view>
            <view class="card">
              <!-- <image src="../uview/docs/icon.png" alt="" /> -->
              <text>uview-plus icon</text>
              <text>基于字体的图标集，包含了大多数常见场景的图标。</text>
              <text href="https://at.alicdn.com/t/font_2225171_8kdcwk4po24.ttf">下载</text>
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
.resource-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
.cards {
  margin: 20px 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.card {
  flex: 1;
  min-width: 280px;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease;
}
.card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
.card image {
  width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 15px;
}
.card text {
  margin: 10px 0;
  font-size: 18px;
  color: #333;
}
.card text {
  margin: 10px 0;
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}
.card text {
  display: inline-block;
  margin-top: 15px;
  padding: 8px 20px;
  background: #3eaf7c;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 14px;
  transition: background 0.3s ease;
}
.card text:hover {
  background: #2f8a5f;
}
</style>
