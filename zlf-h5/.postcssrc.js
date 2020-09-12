const path = require('path');

module.exports = ({ file }) => {
  // 这里使用path.join('node_modules', 'vant')是因为适应不同的操作系统，在mac下结果为node_modules / vant，而在windows下结果为node_modules\vant
  const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 750;

  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth, // 视窗的宽度
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: ['.special'],
        minPixelValue: 1, // 小于或等于1px不转换为视窗单位
        mediaQuery: true, // 允许在媒体查询中转换为‘px’
        // exclude: [/initPx/, /jewelry\/maintain\/index/], // 忽略指定文件夹下的文件或文件夹
        exclude: [/initPx/], // 忽略指定文件夹下的文件或文件夹
        landscape: false
      }
    }
  }
}