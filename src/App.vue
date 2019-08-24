<template>
  <div id="app">
    <the-menu />
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheMenu from '@/components/general/TheMenu/index'
import TheFooter from '@/components/general/TheFooter'

export default {
  components: {
    TheFooter,
    TheMenu
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
@import "@/assets/scss/_transitions.scss";
</style>
