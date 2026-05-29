<template>
  <view class="readMore-page">
    <view class="theme-default-content content__default">
      <text id="readmore-展开阅读更多">ReadMore 展开阅读更多</text>
      <view class="demo-placeholder">
        <text>此处应展示 ReadMore 展开阅读更多 组件的交互式演示</text>
        <text class="placeholder-tip">
          演示地址：<text
            href="https://ijry.github.io/uview-plus/text/#/pages/componentsC/readMore/readMore"
            target="_blank"
          >
            https://ijry.github.io/uview-plus/text/#/pages/componentsC/readMore/readMore
          </text>
        </text>
      </view>
      <text>该组件一般用于内容较长，预先收起一部分，点击展开全部内容的场景。</text>
      <text id="平台差异说明">平台差异说明</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App（vue）
            </th>
            <th style="text-align: center">
              App（nvue）
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
            <td style="text-align: center">
              √
            </td>
          </tr>
        </tbody>
      </table>
      <text id="基本使用">基本使用</text>
      <text>通过slot传入正文内容</text>
      <CodeBlock title="基本使用" language="html" :code="basicUsageCode" />
      <text id="兼容性">兼容性</text>
      <text>
        由于一些微信小程序平台的渲染能力的问题，在解析up-parse组件内容时会比较耗时，导致read-more组件内部无法准确得知内容的高度，而出现计算错误，这种情况下，我们需要借助up-parse组件的@load(内容多为文字时)或者@ready(内容多为图片时，可能会有较大延时)事件，通过ref重新初始化read-more组件的高度，如下：
      </text>
      <CodeBlock title="兼容性处理" language="html" :code="compatibilityCode" />
      <text id="展开收起">展开收起</text>
      <text>配置toggle为true，展开后可以收起，否则展开后没有收起的按钮</text>
      <CodeBlock title="展开收起" language="html" :code="toggleCode" />
      <text id="配置展开高度">配置展开高度</text>
      <text>
        可以配置一个高度，单位rpx，只有slot传入的内容高度超出这个值，才会出现"展开阅读全文"字样的按钮
      </text>
      <CodeBlock title="配置展开高度" language="html" :code="showHeightCode" />
      <text id="异步初始化">异步初始化</text>
      <text>
        有时候需要展示的内容是从后端获取的，组件内部的mounted生命周期初始化时，请求尚未回来，会导致组件无法获取内容的高度，这种情况下，我们可以延时一定的时间后再初始化组件，或者在获取到内容后调用组件的init方法。
      </text>
      <CodeBlock title="异步初始化" language="html" :code="asyncInitCode" />
      <text id="自定义样式">自定义样式</text>
      <text>
        此组件上边部分有一个白色虚化的阴影，用以将点击区域与文字内容进行融合，如果您不想要这个阴影，可以调整shadowStyle对象
      </text>
      <CodeBlock
        title="自定义样式"
        language="javascript"
        :code="customStyleCode"
      />
      <text id="右侧演示页面源代码地址">右侧演示页面源代码地址</text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsC/readMore/readMore.nvue"
          target="_blank"
          style="display: flex; align-items: center"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/4b2bf3e5-68ad-4a15-b0d1-00b7a5246eab.png"
            title="github"
            width="30"
          />
          github
        </text>
        <text
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsC/readMore/readMore.nvue"
          target="_blank"
          style="display: flex; align-items: center; margin-top: 10px"
        >
          <image
            height="30"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8f7e1d02-dcb1-46ba-90db-ae32fea44f22/0d0bc2dc-64e3-4ea1-a641-9c23d198e36d.png"
            title="github"
            width="30"
          />
          gitee
        </text>
        <br>
      </view>
      <text id="api">API</text>
      <text id="props">Props</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              参数
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              类型
            </th>
            <th style="text-align: left">
              默认值
            </th>
            <th style="text-align: left">
              可选值
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              showHeight
            </td>
            <td style="text-align: left">
              内容超出此高度才会显示展开全文按钮，单位rpx
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              400
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              toggle
            </td>
            <td style="text-align: left">
              展开后是否显示收起按钮
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              false
            </td>
            <td style="text-align: left">
              true
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              closeText
            </td>
            <td style="text-align: left">
              关闭时的提示文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              展开阅读全文
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              openText
            </td>
            <td style="text-align: left">
              展开时的提示文字
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              收起
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              color
            </td>
            <td style="text-align: left">
              文字颜色
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              #3eaf7c
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              fontSize
            </td>
            <td style="text-align: left">
              文字大小
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              14
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              shadowStyle
            </td>
            <td style="text-align: left">
              阴影样式对象
            </td>
            <td style="text-align: left">
              Object
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="events">Events</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              事件名
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              click
            </td>
            <td style="text-align: left">
              点击"展开"或"收起"按钮时触发
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="methods">Methods</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              方法名
            </th>
            <th style="text-align: left">
              说明
            </th>
            <th style="text-align: left">
              回调参数
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              init
            </td>
            <td style="text-align: left">
              手动初始化组件高度
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const basicUsageCode = `<template>
    <up-read-more>
        <rich-text :nodes="content"></rich-text>
    <\/up-read-more>
<\/template>

<script setup lang="ts">
import { ref } from 'vue';

const content = ref(\`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`);
/<\/script>`

const compatibilityCode = `<template>
    <up-read-more ref="uReadMoreRef">
        <up-parse :content="content" @load="load"></up-parse>
    <\/up-read-more>
<\/template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const content = ref(\`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`);

const uReadMoreRef = ref(null);

function load() {
    if (uReadMoreRef.value) {
        uReadMoreRef.value.init();
    }
}

onMounted(() => {
    load();
});
<\/script>`

const toggleCode = `<template>
    <up-read-more :toggle="true">
        <rich-text :nodes="content"></rich-text>
    <\/up-read-more>
<\/template>`

const showHeightCode = `<template>
    <up-read-more showHeight="600">
        <rich-text :nodes="content"></rich-text>
    <\/up-read-more>
<\/template>`

const asyncInitCode = `<template>
    <up-read-more ref="uReadMoreRef">
        <rich-text :nodes="content"></rich-text>
    <\/up-read-more>
<\/template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const content = ref('');

const uReadMoreRef = ref(null);

onMounted(() => {
    setTimeout(() => {
        content.value = \`山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。  
苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。  
无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？\`;
        
        if (uReadMoreRef.value) {
            uReadMoreRef.value.init();
        }
    }, 1000);
});
<\/script>`

const customStyleCode = `const shadowStyle = {
    backgroundImage: 'linear-gradient(-180deg, rgba(255,255,255,0) 0%, #fff 100%)',
}`
</script>

<style lang="scss" scoped>
.readMore-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
.demo-placeholder {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 10px 0;
  text {
    margin: 5px 0;
  }
  .placeholder-tip {
    font-size: 12px;
    color: #666;
  }
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
table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;
  th,
  td {
    border: 1px solid #eee;
    padding: 8px 12px;
  }
  th {
    background: #f5f5f5;
    font-weight: 600;
  }
}
.custom-block {
  background: #f3f5f7;
  border-left: 4px solid #3eaf7c;
  padding: 10px 15px;
  margin: 15px 0;
  .custom-block-title {
    font-weight: 600;
    margin-bottom: 5px;
  }
  text {
    color: #3eaf7c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  image {
    margin-right: 8px;
  }
}
</style>
