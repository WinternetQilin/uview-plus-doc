import{d,a as c,w as u,b as i,f as r,g as o,i as f,j as _,k as e,u as n,s as g}from"./index-Bt5U6C3y.js";import{_ as s}from"./CodeBlock.C3t72IAG.js";const m=`// main.js，注意要在use方法之后执行
import uviewPlus, { setConfig } from 'uview-plus'
app.use(uviewPlus)`,x=`// main.js，注意要在use方法之后执行
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
	})`,v=`// main.js
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

app.use(uviewPlus)`,w=`// main.js，注意要在use方法之后执行
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
	})`,C=d({__name:"setting",setup($){return(j,b)=>{const l=_,t=f,a=i("layout-default-uni"),p=i("global-ku-root");return r(),c(p,null,{default:u(()=>[o(a,null,{default:u(()=>[o(t,{class:"setting-page"},{default:u(()=>[o(t,{class:"theme-default-content content__default"},{default:u(()=>[o(l,{id:"配置"},{default:u(()=>[e("配置")]),_:1}),o(l,{id:"安装配置"},{default:u(()=>[e("安装配置")]),_:1}),o(l,null,{default:u(()=>[e("由于uview-plus支持"),n("code",null,"npm"),e("和"),n("code",null,"下载"),e("的方式安装，二者配置几乎一致，因为某些平台的兼容性，在配置easycom稍有不同，为了不造成混淆，这里将两种方式分开说明：")]),_:1}),o(t,null,{default:u(()=>[o(t,null,{default:u(()=>[o(l,{href:"/npmSetting"},{default:u(()=>[e("NPM方式安装的配置")]),_:1})]),_:1}),o(t,null,{default:u(()=>[o(l,{href:"/downloadSetting"},{default:u(()=>[e("下载方式安装的配置")]),_:1})]),_:1})]),_:1}),o(l,{id:"默认单位配置"},{default:u(()=>[e(" 默认单位配置 "),o(l,{class:"badge tip"},{default:u(()=>[e("3.0.0")]),_:1})]),_:1}),o(l,null,{default:u(()=>[e(" 在uview1.x中，组件参数如果为数值的话，默认为"),n("code",null,"rpx"),e("单位，但是"),n("code",null,"rpx"),e("在平板上会导致尺寸超大，为了更高的可用性，所以uview-plus将单位默认改为"),n("code",null,"px"),e("，如果您出于 某些需求，需要将单位改为"),n("code",null,"rpx"),e("，可以在"),n("code",null,"main.js"),e("中进行如下配置即可： ")]),_:1}),o(l,null,{default:u(()=>[n("strong",null,"温馨提示："),e(" 3.0.0-3.3.74版本，通过下方的"),n("code",null,"setConfig"),e("方法进行设置。 ")]),_:1}),o(s,{title:"setConfig配置",language:"javascript",code:m}),o(l,null,{default:u(()=>[n("strong",null,"温馨提示："),e(" 3.4.0以上版本，通过下方的"),n("code",null,"options"),e("参数进行设置。 ")]),_:1}),o(s,{title:"options配置",language:"javascript",code:x}),o(l,{id:"修改uview-plus内置配置方案"},{default:u(()=>[e(" 修改uview-plus内置配置方案 "),o(l,{class:"badge tip"},{default:u(()=>[e("3.2.7")]),_:1})]),_:1}),o(l,null,{default:u(()=>[e(" 我们可以通过"),n("code",null,"setConfig"),e("方法配置uview-plus内部的各项内置配置，目前可配置的有"),n("code",null,"config"),e("、"),n("code",null,"props"),e("、"),n("code",null,"zIndex"),e("、"),n("code",null,"color"),e("属性，目前只建议修改"),n("code",null,"config"),e("、"),n("code",null,"props"),e("属性， 除非您清楚知道自己的修改所带来的影响。 ")]),_:1}),o(l,null,{default:u(()=>[n("strong",null,"温馨提示："),e(" 3.0.0-3.3.74版本，通过下方的"),n("code",null,"setConfig"),e("方法进行设置。 ")]),_:1}),o(s,{title:"setConfig示例",language:"javascript",code:v}),o(l,null,{default:u(()=>[n("strong",null,"温馨提示："),e(" 3.4.0以上版本，通过下方的"),n("code",null,"options"),e("参数进行设置。 ")]),_:1}),o(s,{title:"options示例",language:"javascript",code:w})]),_:1})]),_:1})]),_:1})]),_:1})}}}),k=g(C,[["__scopeId","data-v-49ba03e8"]]);export{k as default};
