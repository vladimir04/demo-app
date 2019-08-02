<template>
  <div class="spinner">
    <div class="spinner__bounce spinner__bounce--first"></div>
    <div class="spinner__bounce spinner__bounce--second"></div>
    <div class="spinner__bounce"></div>
  </div>
</template>

<script>
export default {
  name: "VpLoading"
};
</script>

<style scoped lang="less">
.spinner {
  margin: 0 auto;
  width: 7rem;
  text-align: center;
}
.spinner__bounce {
  display: inline-block;
  width: 1rem;
  height: 1rem;
  background-color: @--color-primary;
  border-radius: 100%;
  animation: bouncedelay 1.4s infinite ease-in-out both;
}
.spinner__bounce--first {
  animation-delay: -0.32s;
}
.spinner__bounce--second {
  animation-delay: -0.16s;
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
</style>
