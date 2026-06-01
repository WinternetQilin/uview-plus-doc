import { createSSRApp } from 'vue'
import App from './App.vue'
import { requestInterceptor } from './http/interceptor'
import { routeInterceptor } from './router/interceptor'
import uviewPlus from 'uview-plus'

import store from './store'
import '@/style/index.scss'
import 'virtual:uno.css'

export function createApp() {
  const app = createSSRApp(App)
  app.use(uviewPlus, () => {
    return {
      options: {
        // 修改$u.config对象的属性
        config: {
          // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
          unit: 'rpx',
          loadFontOnce: true
        }
      }
    }
  })
  app.use(store)
  app.use(routeInterceptor)
  app.use(requestInterceptor)

  return {
    app,
  }
}
