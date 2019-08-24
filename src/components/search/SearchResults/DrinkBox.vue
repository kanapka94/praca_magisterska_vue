<template>
  <div class="drink">
    <pre>{{ drink }}</pre>
  </div>
</template>

<script>
export default {
  name: 'DrinkBox',
  props: {
    drink: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
