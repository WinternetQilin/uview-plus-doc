<template>
  <view class="lazyload-page">
    <view class="theme-default-content content__default">
      <text id="lazyload-图片懒加载">
        <text href="#lazyload-图片懒加载" class="header-anchor">#</text>
        LazyLoad 图片懒加载
      </text>

      <text>懒加载使用的场景为：页面有很多图片时，APP会同时加载所有的图片，导致页面卡顿，各个位置的图片出现前后不一致等</text>

      <text id="平台差异说明">
        <text href="#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>
      <table>
        <thead>
          <tr>
            <th style="text-align: center">
              App
            </th>
            <th style="text-align: center">
              H5
            </th>
            <th style="text-align: center">
              微信小程序
            </th>
            <th style="text-align: center">
              支付宝小程序
            </th>
            <th style="text-align: center">
              百度小程序
            </th>
            <th style="text-align: center">
              头条小程序
            </th>
            <th style="text-align: center">
              QQ小程序
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
        <text href="#基本使用" class="header-anchor">#</text>
        基本使用
      </text>
      <text>通过<code>image</code>参数传入图片的<code>src</code>路径即可</text>

      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <text>由于uni-app默认给了image组件的height为225px，同时也只有在uni-app image组件的mode参数为widthFix时，image才会自动计算出一个高度值</text>
      </view>

      <text id="配置占位图">
        <text href="#配置占位图" class="header-anchor">#</text>
        配置占位图
      </text>
      <text>占位图有两种情况：</text>
      <view>
        <view>一种是正常预加载时显示的，通过<code>loading-image</code>配置类似"正在加载"的占位图。</view>
        <view>另一种是图片加载失败(如图片不存在，路径不完整等)，通过<code>error-image</code>参数配置类似"图片加载错误"的占位图</view>
      </view>

      <text id="图片加载位置">
        <text href="#图片加载位置" class="header-anchor">#</text>
        图片加载位置
      </text>
      <text>可以通过<code>threshold</code>参数设置图片距离屏幕底部多少距离时触发图片加载，单位rpx，说明：</text>
      <view>
        <view>如果取负值(如-300)，为尚未到达屏幕底部，距离300rpx时触发</view>
        <view>如果取正数(如300)，为图片超出屏幕底部300rpx时触发</view>
      </view>

      <text id="api">
        <text href="#api" class="header-anchor">#</text>
        API
      </text>

      <text id="props">
        <text href="#props" class="header-anchor">#</text>
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
              index
            </td>
            <td style="text-align: left">
              用户自定义值，在事件触发时回调，用以区分是哪个图片
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              image
            </td>
            <td style="text-align: left">
              图片路径
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              loading-image
            </td>
            <td style="text-align: left">
              预加载时的占位图
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              error-image
            </td>
            <td style="text-align: left">
              图片加载出错时的占位图
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              -
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              threshold
            </td>
            <td style="text-align: left">
              触发加载时的位置，单位 rpx
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              100
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              duration
            </td>
            <td style="text-align: left">
              图片加载成功时，淡入淡出时间，单位ms
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              500
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              effect
            </td>
            <td style="text-align: left">
              图片加载成功时，淡入淡出的css动画效果
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              ease-in-out
            </td>
            <td style="text-align: left">
              linear / ease / ease-in / ease-out
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              is-effect
            </td>
            <td style="text-align: left">
              图片加载成功时，是否启用淡入淡出效果
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
              border-radius
            </td>
            <td style="text-align: left">
              图片圆角值，单位rpx
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
              height
            </td>
            <td style="text-align: left">
              图片高度，注意：实际高度可能受img-mode参数影响
            </td>
            <td style="text-align: left">
              String | Number
            </td>
            <td style="text-align: left">
              450
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              image-mode
            </td>
            <td style="text-align: left">
              图片的裁剪模式
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              widthFix
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
        </tbody>
      </table>

      <text id="events">
        <text href="#events" class="header-anchor">#</text>
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
              click
            </td>
            <td style="text-align: left">
              点击图片时触发
            </td>
            <td style="text-align: left">
              index：用户通过props传递的index值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              load
            </td>
            <td style="text-align: left">
              图片加载成功时触发
            </td>
            <td style="text-align: left">
              index：用户通过props传递的index值
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              error
            </td>
            <td style="text-align: left">
              图片加载失败时触发
            </td>
            <td style="text-align: left">
              index：用户通过props传递的index值
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.lazyload-page {
  padding: 20px;
}

.theme-default-content {
  max-width: 1000px;
  margin: 0 auto;
}

text {
  font-size: 28px;
  color: #333;
  margin: 30px 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

text {
  font-size: 22px;
  color: #333;
  margin: 25px 0 15px;
}

text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 10px 0;
}

code {
  background: #f5f5f5;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
  color: #e83e8c;
}

view {
  margin: 10px 0;
  padding-left: 20px;

  view {
    font-size: 15px;
    line-height: 1.8;
    color: #555;
    margin: 5px 0;
  }
}

.custom-block {
  padding: 15px;
  margin: 15px 0;
  border-radius: 4px;

  &.warning {
    background: #fdf6ec;
    border-left: 4px solid #e6a23c;

    .custom-block-title {
      color: #e6a23c;
      font-weight: 600;
      margin-bottom: 10px;
    }
  }
}

.header-anchor {
  color: #999;
  margin-right: 5px;

  &:hover {
    color: #0066cc;
    text-decoration: none;
  }
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 15px 0;

  th,
  td {
    padding: 10px 15px;
    border: 1px solid #eee;
  }

  th {
    background: #f8f9fa;
    font-weight: 600;
    color: #333;
  }

  td {
    color: #555;
    font-size: 14px;
  }
}
</style>
