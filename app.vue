<template>
  <div class="container">
    <main class="content">
      <header class="header">
        <CanaryMascot class="pinned-mascot" />

        <h1 class="display-heading">Coal Mine Studios</h1>

        <h2 class="display-tag">
          <span>Dream.</span>
          <span>Design.</span>
          <span>Dev.</span>
        </h2>
      </header>

      <p>
        We design and build digital products with UX at their core. Whatever you need to make your
        dream reailty, we're here for you.
      </p>

      <div class="cta">
        <button class="button">Get a quote</button>
      </div>
    </main>
  </div>
</template>

<script>
import CanaryMascot from '~/components/CanaryMascot.vue';

export default {
  components: {
    CanaryMascot,
  },
}
</script>

<style lang="scss" scoped>
.container {
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%;
  margin: 0 auto;
  max-width: 48rem;
}

.content {
  margin: 1.5rem;
}

.header {
  margin-bottom: 5rem;
  position: relative;
}

.display-heading {
  font-family: var(--font-family-headline);
  font-size: 6rem;
  margin-bottom: 4rem;
  margin-top: 0;
  line-height: 6.25rem;
}

.display-tag {
  display: flex;
  justify-content: space-between;
  max-width: 24rem;
  font-family: var(--font-family-headline);
  font-size: 2.25rem;
  font-weight: 300;
}

.pinned-mascot {
  position: absolute;
  right: 1.5rem;
  top: 3rem;
  z-index: -1;
}

.button {
  background-color: transparent;
  border-color: var(--color-text-primary);
  border-radius: 1rem;
  padding: 0.5rem;
}

.cta {
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}
</style>
