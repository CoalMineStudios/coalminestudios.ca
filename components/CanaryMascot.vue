<template>
  <div class="canary-mascot" />
</template>

<script>
export default {
  name: 'CanaryMascot',
}
</script>

<style lang="scss" scoped>
@use 'sass:color';

.canary-mascot {
  animation: canary-animation 4s ease-in-out 0s infinite alternate both;
  background: radial-gradient(
    50% 50% at center,
    var(--color-canary-yellow) 0%,
    color.change(#ffd540, $alpha: 0) 100%
  );
  height: 102px;
  width: 102px;
}

@keyframes canary-animation {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(0.8);
  }
}
</style>
