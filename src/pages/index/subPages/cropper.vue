<template>
  <view class="cropper-page">
    <view class="theme-default-content content__default">
      <text id="cropper-图片裁剪">
        <text href="cropper.html#cropper-图片裁剪" class="header-anchor">#</text>
        Cropper 图片裁剪
        <text class="badge tip">3.4.85</text>
      </text>
      <text>图片裁剪组件，支持手势操作、旋转、缩放、裁剪等功能，适用于头像裁剪等场景。</text>
      <text id="平台差异说明">
        <text href="cropper.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="cropper.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>ref</code>获取组件实例，调用<code>chooseImage</code>方法选择图片进行裁剪。</text>
      <pre><code>&lt;template&gt;
    &lt;up-cropper ref="cropperRef" @confirm="confirm"&gt;
        &lt;view class="cropper-btn"&gt;选择图片&lt;/view&gt;
    &lt;/up-cropper&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const cropperRef = ref(null);

const confirm = (e) => {
    console.log('裁剪结果：', e.avatar);
};
&lt;/script&gt;</code></pre>
      <text id="头像裁剪模式">
        <text href="cropper.html#头像裁剪模式" class="header-anchor">#</text>
        头像裁剪模式
      </text>
      <text>设置固定裁剪区域大小，适用于头像裁剪等场景。</text>
      <pre><code>&lt;template&gt;
    &lt;up-cropper
        ref="cropperRef"
        :areaWidth="300"
        :areaHeight="300"
        :exportWidth="260"
        :exportHeight="260"
        @confirm="confirm"
    &gt;
        &lt;view class="avatar-wrapper"&gt;
            &lt;image src="/static/avatar.png" mode="aspectFill" /&gt;
        &lt;/view&gt;
    &lt;/up-cropper&gt;
&lt;/template&gt;</code></pre>
      <text id="可变裁剪区域">
        <text href="cropper.html#可变裁剪区域" class="header-anchor">#</text>
        可变裁剪区域
      </text>
      <text>允许用户调整裁剪区域大小，适用于需要自定义裁剪区域的场景。</text>
      <pre><code>&lt;template&gt;
    &lt;up-cropper
        ref="cropperRef"
        :canChangeSize="true"
        :areaWidth="300"
        :areaHeight="300"
        @confirm="confirm"
    &gt;
        &lt;view class="cropper-btn"&gt;调整裁剪区域&lt;/view&gt;
    &lt;/up-cropper&gt;
&lt;/template&gt;</code></pre>
      <text id="props">
        <text href="cropper.html#props" class="header-anchor">#</text>
        Props
      </text>
      <table>
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>canChangeSize</td>
            <td>是否允许调整裁剪区域大小</td>
            <td>boolean</td>
            <td>false</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>areaWidth</td>
            <td>裁剪区域宽度</td>
            <td>string</td>
            <td>300rpx</td>
            <td>-</td>
          </tr>
          <tr>
            <td>areaHeight</td>
            <td>裁剪区域高度</td>
            <td>string</td>
            <td>300rpx</td>
            <td>-</td>
          </tr>
          <tr>
            <td>exportWidth</td>
            <td>导出图片宽度</td>
            <td>string</td>
            <td>260rpx</td>
            <td>-</td>
          </tr>
          <tr>
            <td>exportHeight</td>
            <td>导出图片高度</td>
            <td>string</td>
            <td>260rpx</td>
            <td>-</td>
          </tr>
          <tr>
            <td>minScale</td>
            <td>最小缩放比例</td>
            <td>number</td>
            <td>0.3</td>
            <td>-</td>
          </tr>
          <tr>
            <td>maxScale</td>
            <td>最大缩放比例</td>
            <td>number</td>
            <td>4</td>
            <td>-</td>
          </tr>
          <tr>
            <td>canScale</td>
            <td>是否允许缩放</td>
            <td>boolean</td>
            <td>true</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>canRotate</td>
            <td>是否允许旋转</td>
            <td>boolean</td>
            <td>true</td>
            <td>true/false</td>
          </tr>
          <tr>
            <td>quality</td>
            <td>图片质量</td>
            <td>number</td>
            <td>0.9</td>
            <td>0-1</td>
          </tr>
          <tr>
            <td>noTab</td>
            <td>是否隐藏底部操作栏</td>
            <td>boolean</td>
            <td>true</td>
            <td>true/false</td>
          </tr>
        </tbody>
      </table>
      <text id="events">
        <text href="cropper.html#events" class="header-anchor">#</text>
        Events
      </text>
      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>回调参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>confirm</td>
            <td>裁剪完成时触发</td>
            <td>{ avatar, path, index, data }</td>
          </tr>
          <tr>
            <td>avtinit</td>
            <td>组件初始化完成时触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="slots">
        <text href="cropper.html#slots" class="header-anchor">#</text>
        Slots
      </text>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>default</td>
            <td>触发裁剪的元素，点击该插槽内容时会打开裁剪界面</td>
          </tr>
        </tbody>
      </table>
      <text id="方法">
        <text href="cropper.html#方法" class="header-anchor">#</text>
        方法
      </text>
      <table>
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>chooseImage</td>
            <td>打开图片选择器并开始裁剪</td>
            <td>
              (index, params, data)<br>
              index: 索引标识<br>
              params: 配置参数对象<br>
              data: 自定义数据
            </td>
          </tr>
          <tr>
            <td>close</td>
            <td>关闭裁剪界面</td>
            <td>-</td>
          </tr>
          <tr>
            <td>rotate</td>
            <td>旋转图片</td>
            <td>-</td>
          </tr>
          <tr>
            <td>preview</td>
            <td>预览裁剪结果</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="注意事项">
        <text href="cropper.html#注意事项" class="header-anchor">#</text>
        注意事项
      </text>
      <view>
        <view>使用<code>chooseImage</code>方法时，可以通过第二个参数传入配置项来临时改变裁剪区域大小等属性</view>
        <view>裁剪完成后会返回临时文件路径，可用于上传或展示</view>
        <view>支持手势操作：单指拖动图片，双指缩放图片</view>
        <view>可通过<code>canChangeSize</code>属性控制是否允许调整裁剪区域大小</view>
        <view>在H5平台可能需要处理跨域图片问题</view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cropper-page {
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
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  margin-left: 10px;
  vertical-align: middle;
  background: #67c23a;
  color: #fff;
}
</style>
