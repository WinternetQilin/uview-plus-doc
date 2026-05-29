<template>
  <view class="setting-page">
    <view class="theme-default-content content__default">
      <text id="配置">配置</text>
      <text id="安装配置">安装配置</text>
      <text>由于uview-plus支持<code>npm</code>和<code>下载</code>的方式安装，二者配置几乎一致，因为某些平台的兼容性，在配置easycom稍有不同，为了不造成混淆，这里将两种方式分开说明：</text>
      <view>
        <view><text href="/npmSetting">NPM方式安装的配置</text></view>
        <view><text href="/downloadSetting">下载方式安装的配置</text></view>
      </view>
      <text id="默认单位配置">
        默认单位配置
        <text class="badge tip">3.0.0</text>
      </text>
      <text>
        在uview1.x中，组件参数如果为数值的话，默认为<code>rpx</code>单位，但是<code>rpx</code>在平板上会导致尺寸超大，为了更高的可用性，所以uview-plus将单位默认改为<code>px</code>，如果您出于
        某些需求，需要将单位改为<code>rpx</code>，可以在<code>main.js</code>中进行如下配置即可：
      </text>
      <text>
        <strong>温馨提示：</strong> 3.0.0-3.3.74版本，通过下方的<code>setConfig</code>方法进行设置。
      </text>
      <CodeBlock title="setConfig配置" language="javascript" :code="setConfigCode" />
      <text>
        <strong>温馨提示：</strong> 3.4.0以上版本，通过下方的<code>options</code>参数进行设置。
      </text>
      <CodeBlock title="options配置" language="javascript" :code="optionsCode" />
      <text id="修改uview-plus内置配置方案">
        修改uview-plus内置配置方案
        <text class="badge tip">3.2.7</text>
      </text>
      <text>
        我们可以通过<code>setConfig</code>方法配置uview-plus内部的各项内置配置，目前可配置的有<code>config</code>、<code>props</code>、<code>zIndex</code>、<code>color</code>属性，目前只建议修改<code>config</code>、<code>props</code>属性，
        除非您清楚知道自己的修改所带来的影响。
      </text>
      <text>
        <strong>温馨提示：</strong> 3.0.0-3.3.74版本，通过下方的<code>setConfig</code>方法进行设置。
      </text>
      <CodeBlock title="setConfig示例" language="javascript" :code="setConfigExampleCode" />
      <text>
        <strong>温馨提示：</strong> 3.4.0以上版本，通过下方的<code>options</code>参数进行设置。
      </text>
      <CodeBlock title="options示例" language="javascript" :code="optionsExampleCode" />
    </view>
  </view>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'

const setConfigCode = `// main.js，注意要在use方法之后执行
import uviewPlus, { setConfig } from 'uview-plus'
app.use(uviewPlus)`

const optionsCode = `// main.js，注意要在use方法之后执行
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改$u.config对象的属性
				config: {
					// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
					unit: 'rpx'
				}
			}
		}
	})`

const setConfigExampleCode = `// main.js
import uviewPlus, {setConfig} from 'uview-plus'

// 下面的在特殊场景下才需要配置，通常不用配置即可直接使用uvire-plus框架。
// 调用setConfig方法，方法内部会进行对象属性深度合并，可以放心嵌套配置
// 需要在app.use(uview-plus)之后执行
setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		// 组件的很多单位仍然为px并非配置不生效，而是rpx配置目前无法做到修改Vue单文件组件中的Css/Sass中写死的px单位。
		// 这个配置主要用于prop传参时的单位修改，比如<up-image width="80"></up-image>中的80会是rpx单位。
		// 如果需要全局组件样式变为rpx，可以尝试使用postcss等第三方插件转换。
		unit: 'px'
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			// size: 20 
		}
		// 其他组件属性配置
		// ......
	}
})

app.use(uviewPlus)`

const optionsExampleCode = `// main.js，注意要在use方法之后执行
app.use(store)
	.use(i18n)
	.use(uviewPlus, () => {
		return {
			options: {
				// 修改$u.config对象的属性
				config: {
					// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
					unit: 'rpx',
					interceptor: {
						navbarLeftClick:() => {
							console.log('全局拦截')
						}
					}
				},
				// 修改$u.props对象的属性
				props: {
					// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
					alert: {
						type: 'error'
					}
					// 其他组件属性配置
					// ......
				}
			}
		}
	})`
</script>

<style lang="scss" scoped>
.setting-page {
  padding: 20px;
}
.theme-default-content {
  max-width: 100%;
}
text {
  margin: 20px 0 10px;
}
text,
text {
  margin: 20px 0 10px;
}
text {
  margin: 10px 0;
  line-height: 1.6;
}
view {
  margin: 10px 0;
  padding-left: 20px;
  view {
    margin: 5px 0;
    line-height: 1.6;
  }
}
text {
  color: #3eaf7c;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
code {
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 3px;
  font-family: monospace;
}
.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 12px;
  border-radius: 4px;
  background: #e6f7ff;
  color: #1890ff;
  margin-left: 8px;
  vertical-align: middle;
}
</style>
