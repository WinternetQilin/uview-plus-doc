<template>
  <view class="countDown-page">
    <view class="theme-default-content content__default">
      <text id="countdown-倒计时">
        <text href="countDown.html#countdown-倒计时" class="header-anchor">#</text>
        CountDown 倒计时
      </text>
      <text>
        该组件一般使用于某个活动的截止时间上，通过数字的变化，给用户明确的时间感受，提示用户进行某一个行为操作。
      </text>
      <text id="平台差异说明">
        <text href="countDown.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
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
      <text id="基本使用">
        <text href="countDown.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <view>
        <view>通过<code>time</code>参数设置倒计时间，单位为<code>ms</code></view>
      </view>
      <CodeBlock
        code="
<template>
    <up-count-down :time=&quot;30 * 60 * 60 * 1000&quot; format=&quot;HH:mm:ss&quot;></up-count-down>
</template>"
        language="html"
        title="基本使用"
      />
      <text id="自定义格式">
        <text href="countDown.html#自定义格式" class="header-anchor">#</text>
        自定义格式
      </text>
      <view>
        <view>说明：通过绑定<code>change</code>回调的值，进行自定义格式</view>
      </view>
      <CodeBlock
        code="<template>
    <up-count-down
        :time='30 * 60 * 60 * 1000'
        format='DD:HH:mm:ss'
        autoStart
        millisecond
        @change='onChange'
    >
        <view class='time'>
            <text class='time__item'>{{ timeData.days }} 天</text>
            <text class='time__item'>{{ timeData.hours>10?timeData.hours:'0'+timeData.hours }} 时</text>
            <text class='time__item'>{{ timeData.minutes }} 分</text>
            <text class='time__item'>{{ timeData.seconds }} 秒</text>
        </view>
    </up-count-down>
</template>

<script setup>
import { ref } from 'vue';

const timeData = ref({});

const onChange = (e) => {
    timeData.value = e;
};
</script>"
        language="html"
        title="自定义格式"
      />
      <text id="毫秒级渲染">
        <text href="countDown.html#毫秒级渲染" class="header-anchor">#</text>
        毫秒级渲染
      </text>
      <view>
        <view>通过配置<code>millisecond</code>来开启毫秒级倒计时</view>
      </view>
      <CodeBlock
        code="<up-count-down :time='30 * 60 * 60 * 1000' format='HH:mm:ss:SSS' autoStart millisecond></up-count-down>"
        language="html"
        title="毫秒级渲染"
      />
      <text id="自定义样式">
        <text href="countDown.html#自定义样式" class="header-anchor">#</text>
        自定义样式
      </text>
      <view>
        <view>说明：通过绑定<code>change</code>回调的值，进行自定义格式</view>
      </view>
      <CodeBlock
        code="<template>
    <up-count-down
            :time='30 * 60 * 60 * 1000'
            format='HH:mm:ss'
            autoStart
            millisecond
            @change='onChange'
    >
        <view class='time'>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.hours>10?timeData.hours:'0'+timeData.hours }}</text>
            </view>
            <text class='time__doc'>:</text>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.minutes }}</text>
            </view>
            <text class='time__doc'>:</text>
            <view class='time__custom'>
                <text class='time__custom__item'>{{ timeData.seconds }}</text>
            </view>
        </view>
    </up-count-down>
</template>

<script setup>
import { ref } from 'vue';

const timeData = ref({});

const onChange = (e) => {
    timeData.value = e;
};
</script>"
        language="html"
        title="自定义样式"
      />
      <text id="手动控制">
        <text href="countDown.html#手动控制" class="header-anchor">#</text>
        手动控制
      </text>
      <view>
        <view>说明：通过绑定<code>ref</code>进行手动控制重置、开始、暂停</view>
      </view>
      <CodeBlock
        code="<template>
    <up-count-down
        ref='countDownRef'
        :time='3000'
        format='ss:SSS'
        :autoStart='false'
        millisecond
        @finish='finish'
    />
    <button class='btn' @click='start'>开始</button>
    <button class='btn' @click='pause'>暂停</button>
    <button class='btn' @click='reset'>重置</button>
</template>

<script setup>
import { ref } from 'vue';

const countDownRef = ref(null);

const start = () => {
    countDownRef.value.start();
};

const pause = () => {
    countDownRef.value.pause();
};

const reset = () => {
    countDownRef.value.reset();
};

const finish = () => {
    console.log('结束');
};
</script>"
        language="html"
        title="手动控制"
      />
      <text id="右侧演示页面源代码地址">
        <text href="countDown.html#右侧演示页面源代码地址" class="header-anchor">
          #
        </text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsB/countDown/countDown.nvue"
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
        <br>
      </view>
      <text id="api">
        <text href="countDown.html#api" class="header-anchor">#</text>
        API
      </text>
      <text id="props">
        <text href="countDown.html#props" class="header-anchor">#</text>
        Props
      </text>
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
              time
            </td>
            <td style="text-align: left">
              倒计时时长，单位ms
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              0
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              format
            </td>
            <td style="text-align: left">
              时间格式，DD-日，HH-时，mm-分，ss-秒，SSS-毫秒
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              HH:mm:ss
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              autoStart
            </td>
            <td style="text-align: left">
              是否自动开始倒计时
            </td>
            <td style="text-align: left">
              Boolean
            </td>
            <td style="text-align: left">
              true
            </td>
            <td style="text-align: left">
              false
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              millisecond
            </td>
            <td style="text-align: left">
              是否展示毫秒倒计时
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
        </tbody>
      </table>
      <text id="events">
        <text href="countDown.html#events" class="header-anchor">#</text>
        Events
      </text>
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
              change
            </td>
            <td style="text-align: left">
              过程中，倒计时变化时触发
            </td>
            <td style="text-align: left">
              time: 剩余的时间
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              finish
            </td>
            <td style="text-align: left">
              倒计时结束
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>
      <text id="methods">
        <text href="countDown.html#methods" class="header-anchor">#</text>
        Methods
      </text>
      <text>需要通过ref获取倒计时组件才能调用</text>
      <table>
        <thead>
          <tr>
            <th style="text-align: left">
              名称
            </th>
            <th style="text-align: left">
              说明
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align: left">
              start
            </td>
            <td style="text-align: left">
              开始倒计时
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              pause
            </td>
            <td style="text-align: left">
              暂停倒计时
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              reset
            </td>
            <td style="text-align: left">
              重置倒计时
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
</script>

<style lang="scss" scoped>
.countDown-page {
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
text {
  font-size: 24px;
}
text {
  font-size: 20px;
}
text {
  font-size: 16px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
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
pre {
  background: #1e1e1e;
  color: #fff;
  padding: 15px;
  border-radius: 6px;
  overflow-x: auto;
  margin: 10px 0;
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e6a23c;
}
.custom-block {
  background: #f0f9ff;
  border-left: 4px solid #409eff;
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
</style>
