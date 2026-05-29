<template>
  <view class="waterfall-page">
    <view class="theme-default-content content__default">
      <text id="waterfall-瀑布流">
        <text href="waterfall.html#waterfall-瀑布流" class="header-anchor">#</text>
        Waterfall 瀑布流
      </text>

      <text>这是一个瀑布流形式的组件，内容支持多列，结合<code>懒加载</code>组件效果更佳。</text>

      <view class="custom-block warning">
        <text class="custom-block-title">注意</text>
        <view>
          <view>在微信小程序中，需要hx2.8.11才支持在懒加载中结合其他组件</view>
          <view>由于hx的问题，支付宝小程序需要hx2.8.2版本及以上才支持本组件</view>
          <view>3.4.77版本开始瀑布流组件升级改造，目前仍然兼容老的用法，建议逐步迁移至新用法。</view>
        </view>
      </view>

      <text id="平台差异说明">
        <text href="waterfall.html#平台差异说明" class="header-anchor">#</text>
        平台差异说明
      </text>

      <table>
        <thead>
          <tr>
            <th style="text-align:center;">
              App
            </th>
            <th style="text-align:center;">
              H5
            </th>
            <th style="text-align:center;">
              微信小程序
            </th>
            <th style="text-align:center;">
              支付宝小程序
            </th>
            <th style="text-align:center;">
              百度小程序
            </th>
            <th style="text-align:center;">
              头条小程序
            </th>
            <th style="text-align:center;">
              QQ小程序
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
            <td style="text-align:center;">
              √
            </td>
          </tr>
        </tbody>
      </table>

      <text id="基本使用">
        <text href="waterfall.html#基本使用" class="header-anchor">#</text>
        基本使用
      </text>

      <text>
        本组件利用了vue的作用域插槽(<text href="https://cn.vuejs.org/v2/guide/components-slots.html#%E4%BD%9C%E7%94%A8%E5%9F%9F%E6%8F%92%E6%A7%BD" target="_blank">详见vue文档</text>)特性，
        将传入<code>waterfall</code>内部的数据，通过<code>slot</code>(作用域插槽)让用户能在父组件中引用和配置对应的数据，这样做的
        原因是可以让用户自定义列表<code>item</code>的结构和样式，达到真正的组件化。
      </text>

      <text>
        需要注意的是，组件内部导出的数据，需要使用<code>template</code>元素接收，同时通过<code>v-slot</code>指定列插槽，如
        <code>v-slot:column="{colList, colIndex}"</code>，这里的<code>colList</code>是当前列的数据列表)，见如下完整示例：
      </text>

      <text id="核心代码">
        <text href="waterfall.html#核心代码" class="header-anchor">#</text>
        核心代码
      </text>

      <CodeBlock
        code="<up-waterfall v-model=&quot;flowList&quot; columns=&quot;2&quot;>
	<template v-slot:column=&quot;{colList, colIndex}&quot;>
		<view v-for=&quot;(item, index) in colList&quot; :key=&quot;index&quot;>
			<!-- 这里编写您的内容，item为您传递给v-model的数组元素 -->
		</view>
	</template>
</up-waterfall>"
        language="html"
        title="核心代码"
      />

      <text id="移除或清空数据">
        <text href="waterfall.html#移除或清空数据" class="header-anchor">#</text>
        移除或清空数据
      </text>

      <text>移除或者清空，都需要通过<code>ref</code>调用组件内部的方法。</text>

      <view>
        <view>移除数据</view>
      </view>

      <text>组件内部方法名为<code>remove</code>，需要传入"id"值，这个"id"键值的名称配置参数为<code>idKey</code>(默认<code>id</code>)，如下：</text>

      <text>假设您的数据为:</text>

      <CodeBlock
        code="let arr = [
	{idx: 1, name: 'lisa'},
	{idx: 2, name: 'mary'}
]"
        language="js"
        title="数据示例"
      />

      <text>那么您应该配置<code>idKey</code>为<code>idx</code>。</text>

      <view start="2">
        <view>清空数据</view>
      </view>

      <text>通过<code>ref</code>手动调用组件内部的<code>clear</code>方法，可以清空左右两列的数据。</text>

      <text>说明：具体实现方法，请见下方的示例代码</text>

      <text id="完整应用示例">
        <text href="waterfall.html#完整应用示例" class="header-anchor">#</text>
        完整应用示例
      </text>

      <CodeBlock
        code="<template>
	<view class=&quot;wrap&quot;>
		<up-button @click=&quot;clear&quot;>清空列表</up-button>
		<up-waterfall v-model=&quot;flowList&quot; ref=&quot;uWaterfallRef&quot; columns=&quot;2&quot;>
			<template v-slot:column=&quot;{colList, colIndex}&quot;>
				<view class=&quot;demo-warter&quot; v-for=&quot;(item, index) in colList&quot; :key=&quot;index&quot;>
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<up-lazy-load threshold=&quot;-450&quot; border-radius=&quot;10&quot; :image=&quot;item.image&quot; :index=&quot;index&quot;></up-lazy-load>
					<view class=&quot;demo-title&quot;>
						{{item.title}}
					</view>
				</view>
			</template>
		</up-waterfall>
	</view>
</template>

<script setup>
import { ref } from 'vue';

const flowList = ref([])
const uWaterfallRef = ref(null)

// 模拟数据请求
const getFlowList = () => {
	for (let i = 0; i < 10; i++) {
		flowList.value.push({
			id: i,
			title: '标题' + i,
			image: 'https://via.placeholder.com/200x300?text=Image' + i
		})
	}
}

// 清空数据
const clear = () => {
	uWaterfallRef.value.clear();
}
</script>

<style>
.wrap {
	padding: 10px;
}
.demo-warter {
	margin-bottom: 10px;
}
.demo-title {
	font-size: 14px;
	padding: 5px;
}
</style>"
        language="vue"
        title="完整应用示例"
      />

      <text id="api">
        <text href="waterfall.html#api" class="header-anchor">#</text>
        API
      </text>

      <text id="indexbar-props">
        <text href="waterfall.html#indexbar-props" class="header-anchor">#</text>
        Props
      </text>

      <text>注意：通过<code>v-model</code>双向绑定传递参数，因为组件内部需要修改父组件的值。</text>

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
            <td>columns</td>
            <td>瀑布流列数量</td>
            <td>String | Number</td>
            <td>2</td>
            <td>支持数字和auto自动响应式判断</td>
          </tr>
          <tr>
            <td>columnsMin</td>
            <td>瀑布流最小列数</td>
            <td>String | Number</td>
            <td>2</td>
            <td>在auto模式下最小列数判断</td>
          </tr>
          <tr>
            <td>minColumnWidth</td>
            <td>瀑布流最小列宽</td>
            <td>Number</td>
            <td>230</td>
            <td>在auto模式下计算列数量</td>
          </tr>
          <tr>
            <td>add-time</td>
            <td>单条数据添加到队列的时间间隔，单位ms</td>
            <td>String | Number</td>
            <td>200</td>
            <td>-</td>
          </tr>
          <tr>
            <td>idKey</td>
            <td>数据的唯一值的键名</td>
            <td>String</td>
            <td>id</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>

      <text id="methods">
        <text href="waterfall.html#methods" class="header-anchor">#</text>
        Methods
      </text>

      <text>这些为组件内部的方法，需要通过<code>ref</code>调用</text>

      <table>
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>clear</td>
            <td>清空列表数据</td>
          </tr>
          <tr>
            <td>remove(id)</td>
            <td><code>id</code>为唯一的"id"值</td>
          </tr>
        </tbody>
      </table>

      <text id="events-事件说明">
        <text href="waterfall.html#events-事件说明" class="header-anchor">#</text>
        Events 事件说明
      </text>

      <table>
        <thead>
          <tr>
            <th>事件名</th>
            <th>说明</th>
            <th>参数</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>@after-add-one</td>
            <td>单个节点添加后触发</td>
            <td>-</td>
          </tr>
          <tr>
            <td>@after-add-all</td>
            <td>所有节点添加后触发</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </view>
  </view>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.waterfall-page {
  padding: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 10px;
    border: 1px solid #ebeef5;
  }

  th {
    background-color: #f5f7fa;
    font-weight: 600;
  }
}

code {
  background-color: #f5f7fa;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}

.custom-block {
  padding: 16px;
  border-radius: 4px;
  margin: 16px 0;

  &.warning {
    background-color: #fdf6ec;
    border-left: 4px solid #e6a23c;
  }
}

.custom-block-title {
  font-weight: 600;
  margin-bottom: 8px;
}

view,
view {
  padding-left: 20px;

  view {
    margin: 8px 0;
  }
}

text,
text {
  margin-top: 24px;
  margin-bottom: 16px;
}
</style>
