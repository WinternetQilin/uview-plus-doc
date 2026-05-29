<template>
  <view class="cityLocate-page">
    <view class="theme-default-content content__default">
      <text id="citylocate-城市定位选择">
        <text href="cityLocate.html#citylocate-城市定位选择" class="header-anchor">#</text>
        CityLocate 城市定位选择
        <text class="badge tip">3.4.55</text>
      </text>

      <text>
        <code>city-locate</code>
        是一个城市定位与选择组件，集成了城市定位、热门城市展示和城市列表索引功能，适用于需要城市选择功能的场景。
      </text>
      <text id="平台差异说明">
        <text href="cityLocate.html#平台差异说明" class="header-anchor">#</text>
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
        <text href="cityLocate.html#基本使用" class="header-anchor">#</text> 基本使用
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-city-locate /&gt;
&lt;/template&gt;</code></pre>
      <text id="组件特性">
        <text href="cityLocate.html#组件特性" class="header-anchor">#</text> 组件特性
      </text>
      <view>
        <view>
          <strong>自动定位</strong>：组件加载后自动获取用户当前位置
        </view>
        <view>
          <strong>热门城市展示</strong>：支持自定义热门城市列表
        </view>
        <view>
          <strong>字母索引</strong>：支持右侧字母导航快速定位
        </view>
        <view>
          <strong>自定义数据结构</strong>：灵活适配不同后端数据格式
        </view>
        <view>
          <strong>多平台支持</strong>：兼容uni-app所有平台
        </view>
      </view>
      <text id="使用示例">
        <text href="cityLocate.html#使用示例" class="header-anchor">#</text> 使用示例
      </text>
      <text id="自定义数据结构">
        <text href="cityLocate.html#自定义数据结构" class="header-anchor">#</text>
        自定义数据结构
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-city-locate
    :cityList="customData"
    nameKey="cityName"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const customData = ref([
  [
    { cityName: '北京', value: 'beijing' },
    { cityName: '上海', value: 'shanghai' }
  ]
]);
&lt;/script&gt;</code></pre>
      <text id="外部控制当前城市">
        <text href="cityLocate.html#外部控制当前城市" class="header-anchor">#</text>
        外部控制当前城市
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-city-locate
    :currentCity="userCity"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
import { ref } from 'vue';

const userCity = ref('北京');
&lt;/script&gt;</code></pre>
      <text id="设置定位类型">
        <text href="cityLocate.html#设置定位类型" class="header-anchor">#</text>
        设置定位类型
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-city-locate
    locationType="gcj02"
  /&gt;
&lt;/template&gt;</code></pre>
      <text id="监听定位结果">
        <text href="cityLocate.html#监听定位结果" class="header-anchor">#</text>
        监听定位结果
      </text>
      <pre><code>&lt;template&gt;
  &lt;up-city-locate
    @location-success="handleLocationResult"
  /&gt;
&lt;/template&gt;

&lt;script setup&gt;
const handleLocationResult = (res) => {
  console.log('定位结果:', res);
};
&lt;/script&gt;</code></pre>
      <text id="api">
        <text href="cityLocate.html#api" class="header-anchor">#</text> API
      </text>
      <text id="props-属性">
        <text href="cityLocate.html#props-属性" class="header-anchor">#</text> Props 属性
      </text>
      <table>
        <thead>
          <tr>
            <th>属性名</th>
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
            <th>可选值</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>indexList</td>
            <td>索引列表，用于右侧字母导航</td>
            <td>Array</td>
            <td><code>['城市']</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>cityList</td>
            <td>城市数据列表，数组第一项为热门城市</td>
            <td>Array</td>
            <td><code>[[{name: '北京', value: 'beijing'}, ...]]</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>locationType</td>
            <td>定位类型</td>
            <td>String</td>
            <td><code>'wgs84'</code></td>
            <td><code>gcj02</code> 等</td>
          </tr>
          <tr>
            <td>currentCity</td>
            <td>当前城市名称（外部传入）</td>
            <td>String</td>
            <td><code>''</code></td>
            <td>-</td>
          </tr>
          <tr>
            <td>nameKey</td>
            <td>城市对象中用于显示名称的键名</td>
            <td>String</td>
            <td><code>'name'</code></td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <text id="events-事件">
        <text href="cityLocate.html#events-事件" class="header-anchor">#</text> Events
        事件
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
            <td>location-success</td>
            <td>定位成功时触发</td>
            <td><code>{...res, locationCity: string}</code></td>
          </tr>
          <tr>
            <td>select-city</td>
            <td>用户选择城市时触发</td>
            <td><code>{locationCity: string}</code></td>
          </tr>
        </tbody>
      </table>
      <text id="slots-插槽">
        <text href="cityLocate.html#slots-插槽" class="header-anchor">#</text> Slots
        插槽
      </text>
      <table>
        <thead>
          <tr>
            <th>插槽名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>header</td>
            <td>组件顶部自定义内容</td>
          </tr>
          <tr>
            <td>footer</td>
            <td>组件底部自定义内容</td>
          </tr>
        </tbody>
      </table>
      <text id="注意事项">
        <text href="cityLocate.html#注意事项" class="header-anchor">#</text> 注意事项
      </text>
      <view>
        <view>组件会在 mounted 生命周期自动触发定位功能</view>
        <view>定位失败时会显示"定位失败，请点击重试"，用户可以点击重试</view>
        <view>
          城市列表数据结构：
          <view>
            <view>第一维数组：字母分类</view>
            <view>第二维数组：该分类下的城市列表</view>
            <view>第一项（index=0）为热门城市</view>
          </view>
        </view>
      </view>
      <text id="右侧演示页面源代码地址">
        <text href="cityLocate.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">
          点击以下链接以查看右侧演示页面的源码
        </text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsD/cityLocate/cityLocate.nvue"
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
          href="https://gitee.com/jry/uview-plus/blob/3.x/src/pages/componentsD/cityLocate/cityLocate.nvue"
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
      <text id="常见问题">
        <text href="cityLocate.html#常见问题" class="header-anchor">#</text> 常见问题
      </text>
      <text id="如何获取用户选择的城市">
        <text href="cityLocate.html#如何获取用户选择的城市" class="header-anchor">#</text>
        如何获取用户选择的城市？
      </text>
      <text>
        通过监听 <code>select-city</code> 事件获取用户选择的城市：
      </text>
      <pre><code>const handleSelectCity = (city) => {
  console.log('用户选择的城市:', city.locationCity);
}</code></pre>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cityLocate-page {
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
}

.model-content {
  width: 375px;
  height: 667px;
  margin: 0 auto;
  position: relative;
  top: 33px;
}
.iframe {
  width: 100%;
  height: 100%;
}
.custom-block {
  background: #f0f9eb;
  border-left: 4px solid #67c23a;
  padding: 10px 15px;
  margin: 10px 0;
}
.custom-block-title {
  font-weight: bold;
  margin-bottom: 10px;
}
.custom-block text {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #67c23a;
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
.badge.tip {
  background: #67c23a;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  vertical-align: top;
  margin-left: 5px;
}
</style>
