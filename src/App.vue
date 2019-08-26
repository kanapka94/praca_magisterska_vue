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
  metaInfo: {
    meta: [
      { vmid: 'description', name: 'description', content: 'Find the best cocktails and recipes with best ingredients for their creation. Have fun! Funny drinks!' },
      { vmid: 'og:title', property: 'og:title', content: 'Great list of drink recipes - FunnyDrinks' },
      { vmid: 'og:description', property: 'og:description', content: 'Find the best cocktails and recipes with best ingredients for their creation. Have fun! Funny drinks!' }
    ]
  },
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
