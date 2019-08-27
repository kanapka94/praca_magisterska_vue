<template>
  <transition name="fade">
    <div v-if="showed" class="cookies">
      <button class="button" @click="handleClose">&times;</button>
      This site uses cookies.
      <a
        href="https://www.aboutcookies.org/legal-notices/cookies/"
        target="_blank"
        rel="noopener"
        class="link"
      >
        Learn more
      </a> about cookies.
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Cookies',
  data () {
    return {
      showed: false
    }
  },
  created () {
    const permission = !!localStorage.getItem('cookies')
    if (permission) {
      this.showed = true
    }
  },
  methods: {
    handleClose () {
      localStorage.setItem('cookies', true)
      this.showed = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .cookies {
    @include font-secondary(12px);
    position: fixed;
    bottom: 20px;
    left: 20px;
    max-width: 340px;
    width: 100%;
    padding: 25px;
    background-color: white;
    box-shadow: 0 0 16px rgba(150,156,170,.2);
    border-radius: 5px;
    line-height: 20px;

    @include mobile {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .button {
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: 20px;
  }
</style>
