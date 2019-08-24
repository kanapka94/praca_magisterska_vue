<template>
  <div class="list">
    <h3 class="title">Search results:</h3>
    <drinks-list :drinks="drinks"/>
  </div>
</template>

<script>
import DrinksList from '@/components/general/DrinksList'

export default {
  name: 'SearchResults',
  components: { DrinksList },
  props: {
    drinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    @include font-primary(22px);
    margin: 40px 0 30px;
  }
</style>
