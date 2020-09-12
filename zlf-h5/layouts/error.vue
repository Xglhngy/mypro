<template>
  <div class="container">
    <section>
      <div class="flex flex-col justify-center items-center">
        <!-- <img src="/img/warning-error.svg" class="error-icon" /> -->
        <h3 class="text-28px">系统错误</h3>
        <p class="text-26px">系统繁忙，请稍后再试，感谢您对周六福的支持</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;

  position: relative;
  section {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      padding: 30px 0;
    }
  }
}
</style>