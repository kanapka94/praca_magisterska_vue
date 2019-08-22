<template>
  <div class="hello">
    <button @click="handleClick">Załaduj więcej danych</button>
    <pre>{{ response }}</pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      response: null
    }
  },
  methods: {
    handleClick () {
      axios.get('https://www.thecocktaildb.com/api/json/v2/8673533/random.php').then(res => {
        this.response = res.data
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
