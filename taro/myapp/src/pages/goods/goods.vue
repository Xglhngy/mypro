<template>
  <view class="index">
    <text>{{ msg }}</text>
  </view>
</template>

<script>
import './goods.scss'

export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  onReady () {
    console.log('onReady')
  }

}
</script>
