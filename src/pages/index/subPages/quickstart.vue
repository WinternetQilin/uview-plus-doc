<template>
  <view class="quickstart-page">
    <view class="theme-default-content content__default">
      <text id="快速上手">快速上手</text>
      <view class="demo-placeholder">
        <text>此处应展示 uview-plus 快速上手的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text href="https://ijry.github.io/uview-plus/text/#/" target="_blank">
            https://ijry.github.io/uview-plus/text/#/
          </text>
        </text>
      </view>
      <text id="如何使用">如何使用</text>
      <text>
        通过npm和下载方式的配置之后，在某个页面可以直接使用组件，无需通过<code>import</code>引入组件。
      </text>
      <CodeBlock title="如何使用" language="html" :code="howToUseCode" />
      <text id="关于uni-u">关于uni.$u</text>
      <text>
        从<code>1.7.9</code>开始，uview-plus将<code>$u</code>对象同时挂载到了<code>uni</code>对象上，这意味着您可以在外部的<code>js</code>文件中，通过<code>uni.$u.xxx</code>的形式去调用uview-plus提供的一些工具方法，而不再像从前一样必须在<code>*.vue</code>中通过<code>uni.$u.xxx</code>的形式调用。
      </text>
      <text id="如何不使用easycom而单独引用某一个组件">如何不使用easycom而单独引用某一个组件</text>
      <text>
        某些情况下，您可能不想通过easycom引用组件(虽然我们极力推荐您使用easycom)，那么您可以使用<code>import</code>这个常规的引入方式，如下：
      </text>
      <CodeBlock title="单独引用组件 (Composition API)" language="html" :code="singleImportCode" />
      <CodeBlock title="单独引用组件 (Options API)" language="html" :code="singleImportOptionsCode" />
      <text id="关于uview-plus组件的esaycom规则可能和其他组件引入名称冲突的问题-4-x无此问题">
        关于uview-plus组件的esaycom规则可能和其他组件引入名称冲突的问题(4.x无此问题)
      </text>
      <text>
        uview-plus的组件引入是通过easycom形式的，写在pages.json中，以<code>up-</code>开头，这可能和其他UI组件，或者uni-app插件市场的uParse修复版-html富文本加载组件名冲突而<strong>报错</strong>，
        原因是此<code>uParse</code>的组件引用名为<code>u-parse</code>，也是<code>u-</code>开头，即使您在页面中显式地配置了组件引入，但uni-app仍认为easycom配置的规则优先级比页面引入的组件规则高。
      </text>
      <text>以下为<code>uParse</code>第三方插件的官方写法：</text>
      <CodeBlock title="uParse 官方写法 (template)" language="html" :code="uParseTemplateCode" />
      <CodeBlock title="uParse 官方写法 (Composition API)" language="html" :code="uParseCompositionCode" />
      <CodeBlock title="uParse 官方写法 (Options API)" language="html" :code="uParseOptionsCode" />
      <text>
        可以看到，上方虽然通过<code>import</code>声明了此组件，最终引用的组件名称为<code>&lt;up-parse&gt;</code>("u-"开头)，但是uni-app仍然忽视了，而认为uview-plus在<code>pages.json</code>配置的easycom规则的优先级更高，因而去uview-plus的组件库
        中查找<code>u-parse</code>，因为找不到而报错，这是不合理的。
      </text>
      <text>解决办法也很简单，给冲突的插件换一个名字即可，比如上面的<code>uParse</code>插件，我们在<code>import</code>和<code>components</code>声明的时候换一个名字即可，比如这里让其为字母<code>text</code>开头：</text>
      <CodeBlock title="解决冲突 - 改名 (template)" language="html" :code="fixConflictTemplateCode" />
      <CodeBlock title="解决冲突 - 改名 (Composition API)" language="html" :code="fixConflictCompositionCode" />
      <CodeBlock title="解决冲突 - 改名 (Options API)" language="html" :code="fixConflictOptionsCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const howToUseCode = `<template>
    <view>
        <up-button>按钮</up-button>
    </view>
<\/template>`

const singleImportCode = `<template>
    <up-action-sheet :actions="list" v-model="show"></up-action-sheet>
<\/template>

<script setup>
import { ref } from 'vue';

const list = ref([
  {
    text: '点赞',
    color: 'blue',
    fontSize: 28
  },
  {
    text: '分享'
  },
  {
    text: '评论'
  }
]);

const show = ref(true);
<\/script>`

const singleImportOptionsCode = `<template>
    <up-action-sheet :actions="list" v-model="show"></up-action-sheet>
<\/template>

<script>
export default {
    data() {
        return {
            list: [{
                text: '点赞',
                color: 'blue',
                fontSize: 28
            }, {
                text: '分享'
            }, {
                text: '评论'
            }],
            show: true
        }
    }
}
<\/script>`

const uParseTemplateCode = `<template>
    <up-parse :content="xxx"></up-parse>
<\/template>`

const uParseCompositionCode = `<script setup>
import uParse from '@/components/gaoyia-parse/parse.vue';
<\/script>`

const uParseOptionsCode = `<script>
import uParse from '@/components/gaoyia-parse/parse.vue'
export default {
    components: {
        uParse
    }
}
<\/script>`

const fixConflictTemplateCode = `<template>
    <text-parse :content="xxx"></text-parse>
<\/template>`

const fixConflictCompositionCode = `<script setup>
import aParse from '@/components/gaoyia-parse/parse.vue';
<\/script>`

const fixConflictOptionsCode = `<script>
// 记得同时修改引入的名称，以及components中的名称
import aParse from '@/components/gaoyia-parse/parse.vue'
export default {
    components: {
        aParse
    }
}
<\/script>`
</script>

<style lang="scss" scoped>
.quickstart-page {
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
table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}
table th,
table td {
  border: 1px solid #eee;
  padding: 8px;
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
.demo-placeholder {
  position: relative;
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  border: 1px dashed #ccc;
}
.demo-placeholder text {
  color: #666;
  font-size: 14px;
}
.placeholder-tip {
  margin-top: 10px;
}
.placeholder-tip text {
  color: #3eaf7c;
  text-decoration: none;
}
.placeholder-tip text:hover {
  text-decoration: underline;
}
</style>
