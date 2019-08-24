<template>
  <button class="button">
    <slot v-if="!loading"/>
    <loader-component v-else :dark="darkLoader"/>
  </button>
</template>

<script>
import LoaderComponent from './Loader'

export default {
  name: 'ButtonComponent',
  components: { LoaderComponent },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    darkLoader: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    @include font-secondary;
    padding: 10px;
    height: 46px;
    background: #fff;
    border: 2px solid $gray-light;
    border-radius: 15px;
    color: $gray-dark;
    transition: .3s;

    &:hover {
      background-color: #d7ddec;
    }
  }
</style>
