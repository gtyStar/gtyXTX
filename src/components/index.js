// 把 components 下的所有组件进行全局注册
// 通过插件的方式
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'
export const componentPlugin = {
  install(app) {
    app.component('ImageView', ImageView)
    app.component('XtxSku', Sku)
  }
}
