<template>
  <div id="app">
    <the-menu />
    <router-view />
    <the-footer />
    <cookies />
  </div>
</template>

<script>
import TheMenu from '@/components/general/TheMenu/index'
import TheFooter from '@/components/general/TheFooter'
import Cookies from '@/components/general/Cookies'

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
    TheMenu,
    Cookies
  },
  mounted () {
    // eslint-disable-next-line
    console.log('ENV', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'production') {
      const hotjarScriptSrc = '/js/hotjar.js'
      const scriptElement = document.createElement('script')
      scriptElement.setAttribute('src', hotjarScriptSrc)
      document.head.appendChild(scriptElement)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
@import "@/assets/scss/_transitions.scss";
</style>
