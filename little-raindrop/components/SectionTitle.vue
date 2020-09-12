<template>
  <div>
    <h3 :style="{ fontSize, color: fontColor }">{{ fontText }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    fontText: {
      type: String,
      default: ''
    },
    fontSize: {
      type: String,
      default: '32px'
    },
    fontColor: {
      type: String,
      default: '#000'
    }
  }
}
</script>
