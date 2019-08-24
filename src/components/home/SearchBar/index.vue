<template>
  <form class="container" @submit.prevent="handleSubmit">
    <input
      v-model="text"
      type="text"
      class="search"
      :placeholder="placeholder"
      @input="handleInput"
    >
    <button-component type="submit" :loading="loading" dark-loader>
      Search
    </button-component>
  </form>
</template>

<script>
import ButtonComponent from '../../general/Button'

export default {
  name: 'SearchBar',
  components: { ButtonComponent },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Wpisz tekst...'
    }
  },
  data () {
    return {
      text: this.value
    }
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    handleInput () {
      this.$emit('input', this.text)
    },
    handleSubmit () {
      this.$emit('search')
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    max-width: 350px;
    width: 100%;
    margin: 20px 0;
    display: flex;
  }

  .search {
    @include font-secondary;
    width: 100%;
    padding: 10px 40px 10px 10px;
    margin-right: -40px;
    border: 2px solid $gray-light;
    border-radius: 15px;
    outline: none;

    &:focus {
      border-color: $pink;
    }
  }
</style>
