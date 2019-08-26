<template>
  <div class="page">
    <p class="status">
      {{ error.status }}
    </p>
    <p class="message">
      {{ error.message }}
    </p>
    <nuxt-link to="/" class="link">
      Return to home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PageError',
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .status {
    font-size: 72px;
    font-weight: bold;
    color: $violet;
    margin-bottom: 5px;
  }

  .message {
    font-size: 24px;
  }

  .link {
    color: orange;
    display: block;
    margin-top: 70px;
  }
</style>
