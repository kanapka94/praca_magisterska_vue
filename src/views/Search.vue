<template>
  <div class="page">
    <h1 class="title">
      Drinks found
      <span class="number">{{ drinksNumber }}</span>
    </h1>
    <search-bar
      v-model="form.text"
      :placeholder="placeholder"
      @search="handleSearch"
    />
    <search-results :drinks="drinks"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchBar from '@/components/home/SearchBar/index'
import SearchResults from '@/components/search/SearchResults/index'

const PLACEHOLDERS = {
  name: 'Type name of drink',
  id: 'Type drink id',
  ingredient: 'Type name of ingredient',
  glass: 'Type name of glass',
  alcohol: 'Type name of the alcohol saturation',
  category: 'Type category name'
}

export default {
  name: 'PageSearch',
  metaInfo: {
    title: 'Search cocktails - FunnyDrinks',
    meta: [
      { vmid: 'description', name: 'description', content: 'Search for the best drinks and choose the ones that suit you best' },
      { vmid: 'og:title', property: 'og:title', content: 'Search cocktails - FunnyDrinks' },
      { vmid: 'og:description', property: 'og:description', content: 'Search for the best drinks and choose the ones that suit you best' }
    ]
  },
  components: { SearchResults, SearchBar },
  data () {
    return {
      form: {
        text: '',
        criteria: 'name'
      }
    }
  },
  computed: {
    ...mapState({
      drinks: state => state.drinks
    }),
    drinksNumber () {
      return this.$store.state.drinks.length
    },
    placeholder () {
      return PLACEHOLDERS[this.form.criteria || 'name']
    }
  },
  async created () {
    const query = this.$route.query
    const payload = {
      value: query.query,
      criteria: query.criteria
    }
    await this.$store.dispatch('fetchDrinks', payload)
    this.$store.commit('SET_LOADING', false)
  },
  methods: {
    async handleSearch () {
      const query = {
        query: this.form.text,
        criteria: this.form.criteria
      }
      this.$router.replace({ path: '/search', query })
      await this.$store.dispatch('fetchDrinks', {
        value: query.query,
        criteria: query.criteria
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    @include font-primary(32px);
  }

  .number {
    color: $pink;
  }

  .subtitle {
    @include font-primary;
    margin-top: 20px;
  }

  .radio-list {
    margin-top: 20px;
  }
</style>
