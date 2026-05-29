<template>
  <view class="install-page">
    <view class="theme-default-content content__default">
      <text id="安装">
        <text href="install.html#安装" class="header-anchor">#</text>
        安装
      </text>
      <text id="sass报警-import">
        <text href="install.html#sass报警-import" class="header-anchor">#</text>
        Sass报警@import
      </text>
      <text>在sass1.8.0以上版本报错Deprecation Warning: Sass @import rules are deprecated and will be removed in Dart Sass 3.0.0.</text>
      <text id="安装遇到问题">
        <text href="install.html#安装遇到问题" class="header-anchor">#</text>
        安装遇到问题？
      </text>
      <text>为了方便更快的体验uview-plus，不被各种环境问题sdk问题所困扰，特提供了云端一键生成模板，只需要点击一次即可自动生成演示项目，坐等即可。</text>
      <view class="custom-block warning">
        <text class="custom-block-title">关于组件前缀说明</text>
        <text>uview2使用u-和u--前缀，其中u--前缀的出现是为了防止与uni-app官方sdk中的组件重名冲突，uview-plus为了尽量降低大家升级迁移成本，目前也是兼容这两个前缀的。不过需要注意的是对easycom的修改可能不会实时生效，遇到不生效时建议重启项目。</text>
      </view>
      <text id="官方模板项目">
        <text href="install.html#官方模板项目" class="header-anchor">#</text>
        官方模板项目
      </text>
      <text>官方提供了一个集成好uview-plus加unocss的模板项目，下载解压后HBulderX直接打开即可，无需下面的步骤。https://pan.baidu.com/s/12m7aX8N3WdPfIYA0kOt2xw?pwd=n4d8</text>
      <text id="hbuilder-x方式">
        <text href="install.html#hbuilder-x方式" class="header-anchor">#</text>
        Hbuilder X方式
      </text>
      <text><text href="downloadSetting.html">下载方式配置文档</text></text>
      <text>如果您是使用<code>Hbuilder X</code>开发的用户，您可以在<code>uni-app</code>插件市场通过<code>uni_modules</code>的形式进行安装，此安装方式可以方便您后续在<code>uni_modules</code>对uview-plus进行一键升级。</text>
      <view>
        <view>在uni-app插件市场右上角选择<code>uni_modules版本</code>下的<code>使用HBuilderX导入插件</code>，导入到对应的项目中即可。</view>
      </view>
      <text><strong>注意：</strong> 此安装方式必须要按照<text href="downloadSetting.html">下载方式安装的配置</text>中的说明配置了才可用。</text>
      <text>下载地址：<text target="_blank" href="https://ext.dcloud.net.cn/plugin?name=uview-plus">https://ext.dcloud.net.cn/plugin?name=uview-plus</text></text>
      <text id="npm方式">
        <text href="install.html#npm方式" class="header-anchor">#</text>
        NPM方式
      </text>
      <text><text href="npmSetting.html">npm方式配置文档</text></text>
      <text>在项目根目录执行如下命令即可：</text>
      <pre><code>// 如果您的根目录没有package.json文件的话，请先执行如下命令：
// npm init -y

npm install uview-plus

// npm update uview-plus</code></pre>
      <text><strong>注意：</strong> 此安装方式必须要按照<text href="npmSetting.html">npm方式安装的配置</text>中的说明配置了才可用，且项目名称不能有<strong>中文</strong>字符。</text>
      <text id="版本查询">
        <text href="install.html#版本查询" class="header-anchor">#</text>
        版本查询
      </text>
      <text>有两种方式可以查询到正在使用的uview-plus的版本：</text>
      <pre><code>// 通过`console.log`打印的形式
console.log($u?.$vueApp?.config?.globalProperties?.uviewPlus?.version)

// 或者通过npm查询
npm list uview-plus</code></pre>
      <text id="常见问题">
        <text href="install.html#常见问题" class="header-anchor">#</text>
        常见问题
      </text>
      <text id="intlify-message-compiler-dist-message-compiler-esm-bundler-js">
        <text href="install.html#intlify-message-compiler-dist-message-compiler-esm-bundler-js" class="header-anchor">#</text>
        @intlify/message-compiler/dist/message-compiler.esm-bundler.js
      </text>
      <text>此错误一般是由于pnpm与vue-i18n不兼容导致，建议使用npm或者安装 vue-i18n@9.1.9版本。</text>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.install-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text,
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
pre {
  background: #f6f8fa;
  padding: 10px;
  border-radius: 4px;
  overflow-x: auto;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.custom-block {
  background: #fdf6ec;
  border-left: 4px solid #e6a23c;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.header-anchor {
  margin-right: 5px;
  text-decoration: none;
  color: inherit;
}
text {
  color: #409eff;
  text-decoration: none;
}
text:hover {
  text-decoration: underline;
}
</style>
