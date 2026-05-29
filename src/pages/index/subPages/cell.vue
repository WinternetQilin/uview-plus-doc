<template>
  <view class="cell-page">
    <view class="theme-default-content content__default">
      <text id="cell-单元格">
        <text href="cell.html#cell-单元格" class="header-anchor">#</text> Cell 单元格
        <text href="cell.html#api" class="anchor">
          <image src="https://uview-plus.jiangruyi.com/common/to_api.png" />
        </text>
      </text>

      <text>cell单元格一般用于一组列表的情况，比如个人中心页，设置页等。</text>
      <text id="平台差异说明">
        <text href="cell.html#平台差异说明" class="header-anchor">#</text>
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
      <text id="基础功能">
        <text href="cell.html#基础功能" class="header-anchor">#</text> 基础功能
      </text>
      <view>
        <view>
          该组件需要搭配<code>cell-group</code>使用，并由它实现列表组的上下边框，如不需要上下边框，配置<code>cellGroup</code>的<code>border</code>参数为<code>false</code>即可。
        </view>
        <view>
          通过<code>title</code>设置左侧标题，<code>value</code>设置右侧内容。
        </view>
        <view>
          通过<code>icon</code>字段设置图标，，或者图片链接(本地文件建议使用绝对地址)。
        </view>
      </view>
      <text>
        <strong>注意：</strong>
        由于<code>cell</code>组件需要由<code>cellGroup</code>组件提供参数值，这些父子组件间通过Vue的"provide/inject"特性注入依赖，
        所以您必须使用<code>cellGroup</code>包裹<code>cell</code>组件才能正常使用。
      </text>
      <pre><code>&lt;template&gt;
	&lt;up-cell-group&gt;
		&lt;up-cell icon="setting-fill" title="个人设置"&gt;&lt;/up-cell&gt;
		&lt;up-cell icon="integral-fill" title="会员等级" value="新版本"&gt;&lt;/up-cell&gt;
	&lt;/up-cell-group&gt;
&lt;/template&gt;</code></pre>
      <text id="自定义内容">
        <text href="cell.html#自定义内容" class="header-anchor">#</text> 自定义内容
      </text>
      <view>
        <view>
          通过插槽<code>icon</code>可以自定义图标，内容会替换左边图标位置
        </view>
        <view>通过插槽<code>title</code>定义左边标题部分</view>
        <view>通过插槽<code>right-icon</code>定义右边内容部分</view>
      </view>
      <pre><code>&lt;up-cell-group&gt;
	&lt;up-cell  title="夕阳无限好" arrow-direction="down"&gt;
		&lt;template #icon&gt;
			&lt;up-icon size="32" name="search"&gt;&lt;/up-icon&gt;
		&lt;/template&gt;
		&lt;!-- &lt;up-badge count="99" :absolute="false" slot="right-icon"&gt;&lt;/up-badge&gt; --&gt;
		&lt;template #right-icon&gt;
			&lt;up-switch v-model="checked"&gt;&lt;/up-switch&gt;
		&lt;/template&gt;
	&lt;/up-cell&gt;
	&lt;up-cell icon="setting-fill" title="只是近黄昏"&gt;&lt;/up-cell&gt;
&lt;/up-cell-group&gt;</code></pre>
      <text>
        如上所示，可以给<code>cell</code>组件通过<code>slot="right-icon"</code>设定右边uview-plus自带的<code>badge</code>或者<code>switch</code>组件：
      </text>
      <view>
        <view>
          如果搭配的是<code>badge</code>组件，注意设置<code>absolute</code>参数为<code>false</code>去掉绝对定位，否则其位于右侧的恰当位置，详见<text href="badge.html">Badge 徽标数</text>。
        </view>
        <view>
          如果搭配的是<code>switch</code>组件，注意要通过<code>v-model</code>绑定一个内容为布尔值的变量，否则无法操作<code>switch</code>，详见<text href="switch.html">Switch 开关选择器</text>。
        </view>
      </view>
      <text id="自定义大小">
        <text href="cell.html#自定义大小" class="header-anchor">#</text> 自定义大小
      </text>
      <text>设置<code>size</code>可自定义大小</text>
      <pre><code>&lt;up-cell-group&gt;
	&lt;up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    isLink
	&gt;&lt;/up-cell&gt;
	&lt;up-cell
	    size="large"
	    title="单元格"
	    value="内容"
	    label="描述信息"
	&gt;&lt;/up-cell&gt;
&lt;/up-cell-group&gt;</code></pre>
      <text id="展示右箭头">
        <text href="cell.html#展示右箭头" class="header-anchor">#</text> 展示右箭头
      </text>
      <text>
        设置<code>isLink</code>为<code>true</code>，将会显示右侧的箭头，可以通过arrow-direction控制箭头的方向
      </text>
      <pre><code>&lt;up-cell-group&gt;
	&lt;up-cell icon="share" title="停车坐爱枫林晚" :isLink="true" arrow-direction="down"&gt;&lt;/up-cell&gt;
&lt;/up-cell-group&gt;</code></pre>
      <text id="右侧演示页面源代码地址">
        <text href="cell.html#右侧演示页面源代码地址" class="header-anchor">#</text>
        右侧演示页面源代码地址
      </text>
      <view class="custom-block tip">
        <text class="custom-block-title">点击以下链接以查看右侧演示页面的源码</text>
        <br>
        <text
          href="https://github.com/ijry/uview-plus/blob/3.x/src/pages/componentsA/cell/cell.vue"
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
        <text href="cell.html#api" class="header-anchor">#</text> API
      </text>
      <text id="cellgroup-props">
        <text href="cell.html#cellgroup-props" class="header-anchor">#</text> CellGroup
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
              title
            </td>
            <td style="text-align: left">
              分组标题
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
              border
            </td>
            <td style="text-align: left">
              是否显示外边框
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
              customStyle
            </td>
            <td style="text-align: left">
              用户自定义外部样式，对象形式，如{'font-size': '12px'} 或
              {'fontSize': '12px'}
            </td>
            <td style="text-align: left">
              object
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
      <text id="cell-props">
        <text href="cell.html#cell-props" class="header-anchor">#</text> Cell Props
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
              title
            </td>
            <td style="text-align: left">
              左侧标题
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
              label
            </td>
            <td style="text-align: left">
              标题下方的描述信息
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
              value
            </td>
            <td style="text-align: left">
              右侧的内容
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
              icon
            </td>
            <td style="text-align: left">
              左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
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
              disabled
            </td>
            <td style="text-align: left">
              是否禁用cell
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
              border
            </td>
            <td style="text-align: left">
              是否显示下边框
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
              center
            </td>
            <td style="text-align: left">
              内容是否垂直居中(主要是针对右侧的value部分)
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
              url
            </td>
            <td style="text-align: left">
              点击后跳转的URL地址
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
              linkType
            </td>
            <td style="text-align: left">
              链接跳转的方式，内部使用的是uview-plus封装的route方法，可能会进行拦截操作
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              navigateTo
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              clickable
            </td>
            <td style="text-align: left">
              是否开启点击反馈(表现为点击时加上灰色背景)
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
              isLink
            </td>
            <td style="text-align: left">
              是否展示右侧箭头并开启点击反馈
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
              required
            </td>
            <td style="text-align: left">
              是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
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
              rightIcon
            </td>
            <td style="text-align: left">
              右侧的图标箭头
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              arrow-right
            </td>
            <td style="text-align: left">
              -
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              arrowDirection
            </td>
            <td style="text-align: left">
              右侧箭头的方向，可选值为：left，up，down
            </td>
            <td style="text-align: left">
              String
            </td>
            <td style="text-align: left">
              right
            </td>
            <td style="text-align: left">
              left|up|down
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              iconStyle
            </td>
            <td style="text-align: left">
              左侧图标样式
            </td>
            <td style="text-align: left">
              Object | String
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
              rightIconStyle
            </td>
            <td style="text-align: left">
              右侧箭头图标的样式
            </td>
            <td style="text-align: left">
              Object | String
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
              titleStyle
            </td>
            <td style="text-align: left">
              标题的样式
            </td>
            <td style="text-align: left">
              Object | String
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
              size
            </td>
            <td style="text-align: left">
              单位元的大小，可选值为large
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
              stop
            </td>
            <td style="text-align: left">
              点击cell是否阻止事件传播
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
              name
            </td>
            <td style="text-align: left">
              标识符，用于在<code>click</code>事件中进行返回
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
        </tbody>
      </table>
      <text id="cell-slot">
        <text href="cell.html#cell-slot" class="header-anchor">#</text> Cell Slot
      </text>
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
              title
            </td>
            <td style="text-align: left">
              自定义左侧标题部分的内容，如需使用，请勿定义<code>title</code>参数，或赋值<code>null</code>即可
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              value
            </td>
            <td style="text-align: left">
              自定义右侧标题部分的内容，如需使用，请勿定义<code>value</code>参数，或赋值<code>null</code>即可
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              icon
            </td>
            <td style="text-align: left">
              自定义左侧的图标
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              right-icon
            </td>
            <td style="text-align: left">
              自定义右侧图标内容，需设置<code>arrow</code>为<code>false</code>才起作用
            </td>
          </tr>
          <tr>
            <td style="text-align: left">
              label
            </td>
            <td style="text-align: left">
              自定义<code>label</code>内容
            </td>
          </tr>
        </tbody>
      </table>
      <text id="cell-event">
        <text href="cell.html#cell-event" class="header-anchor">#</text> Cell Event
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
              点击cell列表时触发
            </td>
            <td style="text-align: left">
              name: <code>props</code>的<code>name</code>参数标识符
            </td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.cell-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
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
</style>
