<template>
  <view class="intro-page">
    <view class="theme-default-content">
      <text id="介绍">介绍</text>

      <view class="intro-logo">
        <image src="@/static/logo.png" alt="uview-plus" class="logo" />
        <text>uview-plus</text>
        <text class="slogan">多平台快速开发的UI框架</text>
      </view>

      <text id="一键云端体验">
        <text href="#一键云端体验" class="header-anchor">#</text>
        一键云端体验
      </text>
      <text>为了方便更快的体验uview-plus，不被各种环境问题sdk问题所困扰，特提供了云端一键生成模板，只需要点击一次即可自动生成演示项目，坐等即可。</text>
      <text>点击以下链接体验：<text href="https://club.cloudstudio.net/261753/11943789224931328" target="_blank">Cloud Studio</text></text>

      <text id="来由">
        <text href="#来由" class="header-anchor">#</text>
        来由
      </text>
      <text>uview-plus3.0是基于uView2.x修改的vue3版本，感谢uView2.x开发者。</text>

      <text id="适用领域">
        <text href="#适用领域" class="header-anchor">#</text>
        适用领域
      </text>
      <text>
        uview-plus是uni-app生态专用的UI框架，uni-app 是一个使用 Vue.js
        开发所有前端应用的框架，开发者编写一套代码，
        可发布到iOS、Android、H5、以及各种小程序(微信/支付宝/百度/头条/QQ/钉钉)等多个平台(引言自uni-app网)。但目前除微信小程序，其它小程序平台的兼容可能存在一些问题，后续会针对这方面持续优化。
      </text>

      <text id="预览">
        <text href="#预览" class="header-anchor">#</text>
        预览
      </text>
      <text>您可以通过<strong>微信</strong>扫码，查看最佳的演示效果。</text>

      <view class="demo-wrap row">
        <view class="col-md-3 col-sm-6 col-xs-12">
          <view class="demo-item">
            <image
              src="https://uview-plus.jiangruyi.com/common/weixin_mini_qrcode.jpg"
            />
            <view class="platform-name">
              微信小程序
              <text class="platform-tips">只能微信扫码</text>
            </view>
          </view>
        </view>

        <view class="col-md-3 col-sm-6 col-xs-12">
          <view class="demo-item">
            <image src="https://uview-plus.jiangruyi.com/common/h5_qrcode.png" />
            <view class="platform-name">
              H5
              <text class="platform-tips">微信或浏览器扫码</text>
            </view>
          </view>
        </view>

        <view class="col-md-3 col-sm-6 col-xs-12">
          <view class="demo-item">
            <image
              src="https://uview-plus.jiangruyi.com/common/android_qrcode.png"
            />
            <view class="platform-name">
              安卓App
              <text class="platform-tips">浏览器扫码安装</text>
            </view>
          </view>
        </view>
      </view>

      <view class="qrcode-tool">
        <text target="_blank" href="https://qr.lingyun.net/">二维码在线制作工具</text>
      </view>

      <text id="关于pr">
        <text href="#关于pr" class="header-anchor">#</text>
        关于PR
      </text>
      <blockquote>
        <text>
          我们非常乐意接受各位的优质PR，但在此之前我希望您了解uview-plus是一个需要兼容多个平台的（小程序、text、ios
          app、android app）包括nvue页面、vue页面。
          所以希望在您修复bug并提交之前尽可能的去这些平台测试一下兼容性。最好能携带测试截图以方便审核。非常感谢！（为了方便管理，目前只接受Github
          Pull Request）
        </text>
      </blockquote>

      <text id="版权信息">
        <text href="#版权信息" class="header-anchor">#</text>
        版权信息
      </text>
      <text>
        uview-plus遵循<text
          href="https://baike.baidu.com/item/MIT/10772952"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT开源协议
        </text>，意味着您无需支付任何费用，也无需授权，即可将uview-plus应用到您的产品中。
      </text>
      <text>
        注意：这并不意味着您可以将uview-plus应用到非法的领域，比如涉及赌博，暴力等方面。如因此产生纠纷或法律问题，uview-plus相关方及言信科技不承担任何责任。
      </text>

      <text id="捐赠uview-plus的研发">
        <text href="#捐赠uview-plus的研发" class="header-anchor">#</text>
        捐赠uview-plus的研发
      </text>
      <text class="donate-text">
        做一个UI框架是一项庞大的工作，尤其是要多端适配，并且迅速跟进uniapp官方的更新，uview-plus作者经常为此工作到深夜……
      </text>
    </view>
  </view>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.intro-page {
  max-width: 1000px;
  margin: 0 auto;
}

.theme-default-content {
  padding: 20px;
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
  font-size: 18px;
  color: #333;
  margin: 20px 0 12px;
  font-weight: 600;
}

text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
  margin: 10px 0;
}

strong {
  color: #333;
  font-weight: 600;
}

text {
  color: #0066cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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

.intro-logo {
  text-align: center;
  padding: 40px 0;
  margin: 30px 0;
  background: #f9fafc;
  border-radius: 12px;

  .logo {
    width: 120px;
    height: 120px;
    margin-bottom: 20px;
  }

  text {
    font-size: 32px;
    color: #333;
    margin: 10px 0;
  }

  .slogan {
    font-size: 18px;
    color: #666;
    margin-top: 10px;
  }
}

.demo-wrap {
  margin: 20px 0;

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  .col-md-3 {
    float: left;
    width: 25%;
    padding: 10px;
    box-sizing: border-box;
  }

  .col-sm-6 {
    @media (max-width: 992px) {
      width: 50%;
    }
  }

  .col-xs-12 {
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .demo-item {
    text-align: center;
    padding: 15px;
    background: #f9fafc;
    border-radius: 8px;

    image {
      width: 180px;
      height: 180px;
      object-fit: contain;
    }

    .platform-name {
      margin-top: 10px;
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }

    .platform-tips {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
    }
  }
}

.qrcode-tool {
  margin-top: 20px;

  text {
    font-size: 14px;
  }
}

blockquote {
  margin: 15px 0;
  padding: 15px 20px;
  background: #f9fafc;
  border-left: 4px solid #0066cc;
  border-radius: 0 8px 8px 0;

  text {
    margin: 0;
    font-size: 14px;
    line-height: 1.7;
    color: #555;
  }
}

.donate-text {
  font-size: 15px;
  line-height: 1.8;
  color: #555;
}
</style>
