import Vue from 'vue'
import BaiduMap from 'vue-baidu-map'

Vue.use(BaiduMap, {
  /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
  ak: '5xgp3ZvfCRpviD8Kpz5vvBBkfY1qDNUS' // 测试为个人测试key，上线需替换
})

// export function baiduMap(ak) {
//   return new Promise(function (resolve, reject) {
//     window.onload = function () {
//       resolve()
//     }
//     const script = document.createElement('script')
//     script.type = 'text/javascript'
//     script.src = `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${ak}`
//     script.onerror = reject
//     document.head.appendChild(script)
//   })
// }
