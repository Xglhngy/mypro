<template>
  <baidu-map
    class="bdwindow"
    :dragging="dragging"
    :center="center"
    :zoom="zoom"
    style="height: 390px;"
    :scroll-wheel-zoom="scroll"
    :location-icon="require('~/assets/images/aboutUs/icon-address.svg')"
  >
    <bm-info-window
      :position="{
        lng: 114.13525419649505,
        lat: 22.572125473134825
      }"
      title
      :show="bmInfoWindow"
      @close="bmInfoWindow = false"
    >
      <p v-text="contents"></p>
      <div class="text-right">
        <a
          style="padding: 5px 10px; color: #fff; background-color: #00bbc4;"
          href="http://api.map.baidu.com/geocoder?address=广东省深圳市罗湖区翠竹北路石化水贝工业区1栋&output=html&src=webapp.baidu.openAPIdemo"
          target="_blank"
        >去这里</a>
      </div>
    </bm-info-window>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT" :show-zoom-info="true" />
  </baidu-map>
</template>

<script>
export default {
  name: 'VueBaiduMap',
  components: {},
  data() {
    return {
      jump_path: '',
      center: {
        lng: 114.12640014351653,
        lat: 22.573798357824373
      },
      zoom: 15, // 缩放级别
      title: '标题',
      contents: '深圳市罗湖区翠竹路石化工业区1栋1-4楼', // 标签内容
      show: true, // 显示标签
      scroll: true, // 地图缩放
      dragging: true, // 地图拖拽
      locationIcon: '',
      bmInfoWindow: true
    }
  }
}
</script>
