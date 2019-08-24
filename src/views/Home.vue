<template>
  <div class="page">
    <random-drink :drink="drink" @reload="getRandom"/>
    <section class="search">
      <h2 class="title">
        Search for information about a drink
        <img src="/svg/magnificial.svg" alt="magnifying glass" class="title-icon">
      </h2>
      <p class="subtitle">Get recipes for best cocktails</p>
      <search-bar
        v-model="text"
        placeholder="Type drink name..."
        @search="handleSearch"
      />
    </section>
    <p class="info">
      Language version of the search engine: English
    </p>
    <section class="lists">
      <p class="subtitle">See also <span class="focus">filter</span> lists</p>
      <link-component href="/lists/ingredients">
        Ingredients
      </link-component>
      <link-component href="/lists/glasses">
        Types of glasses
      </link-component>
      <link-component href="/lists/alcohol">
        Alcohol
      </link-component>
      <link-component href="/lists/categories">
        Cocktails categories
      </link-component>
    </section>
  </div>
</template>

<script>
import SearchBar from '../components/home/SearchBar/index'
import LinkComponent from '../components/general/Link'
import RandomDrink from '../components/home/RandomDrink/index'

export default {
  name: 'PageIndex',
  components: { RandomDrink, LinkComponent, SearchBar },
  data () {
    return {
      text: '',
      drink: {}
    }
  },
  async created () {
    await this.getRandom()
  },
  methods: {
    handleSearch () {
      const query = {
        query: this.text,
        criteria: 'name'
      }
      this.$router.push({ path: '/search', query })
    },
    async getRandom () {
      const response = await this.$service.drinks.getRandom()
      this.drink = response.drinks[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  .page {
    position: relative;
  }

  .random-drink {
    position: absolute;
    top: 0;
    right: 10px;

    @include tablet {
      display: none;
    }
  }

  .search {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .info {
    @include font-secondary(12px);
    text-align: center;
  }

  .title {
    @include font-primary(36px);
    margin-bottom: 20px;
  }

  .lists {
    margin-top: 60px;
  }

  .subtitle {
    @include font-primary;
    margin-bottom: 20px;
  }

  .focus {
    color: $pink;
  }

  .link {
    margin-right: 20px;
    margin-bottom: 10px;
  }
</style>
