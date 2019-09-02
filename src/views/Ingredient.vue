<template>
  <div class="page">
    <router-link to="/lists/ingredients" class="navigation">
      <img src="/svg/arrow_left.svg" alt="Return to ingredients list" class="icon">
    </router-link>
    <img
      :src="image"
      :alt="ingredient.strIngredient"
      class="image"
    >
    <p class="title">
      {{ ingredient.strIngredient }}
    </p>
    <p class="subheader">Description</p>
    <p class="description">
      {{ ingredient.strDescription || 'No description' }}
    </p>
    <p class="subheader">Cocktail type</p>
    <p class="type">
      {{ ingredient.strType || 'No type' }}
    </p>
    <p class="subheader">
      A list of drinks containing this ingredient
    </p>
    <drinks-list :drinks="drinks"/>
  </div>
</template>

<script>
import DrinksList from '@/components/general/DrinksList'
export default {
  name: 'PageIngredient',
  components: { DrinksList },
  data () {
    return {
      ingredient: {},
      drinks: []
    }
  },
  metaInfo () {
    return {
      title: `${this.ingredient.strIngredient} - Ingredient Details - FunnyDrinks`,
      meta: [
        { vmid: 'description', name: 'description', content: `Read the information about ${this.ingredient.strIngredient} ingredient and select the most interesting ones to include in your drinks with great accuracy!` },
        { vmid: 'og:title', property: 'og:title', content: `${this.ingredient.strIngredient} - Ingredient Details - FunnyDrinks` },
        { vmid: 'og:description', property: 'og:description', content: `Read the information about ${this.ingredient.strIngredient} ingredient and select the most interesting ones to include in your drinks with great accuracy!` }
      ],
      link: [
        { rel: 'canonical', href: `https://otejporze.pl/ingredient/${this.ingredient.strIngredient}` }
      ]
    }
  },
  async created () {
    const params = this.$route.params
    let response = await this.$service.ingredients.getIngredientByName(params.id)
    if (response.ingredients === null) {
      response = await this.$service.ingredients.getIngredientById(params.id)
      if (response === '') {
        this.$router.push({
          name: 'error',
          params: {
            error: {
              status: 404,
              message: 'Ingredient not found!'
            }
          }
        })
        return
      }
    }
    const ingredient = response.ingredients[0]
    const filteredDrinks = await this.$service.filter.ingredients(ingredient.strIngredient)

    this.ingredient = ingredient
    this.drinks = filteredDrinks.drinks
  },
  computed: {
    image () {
      if (this.ingredient.strIngredient) {
        return `https://www.thecocktaildb.com/images/ingredients/${this.ingredient.strIngredient}-Medium.png`
      }
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .subheader {
    @include font-primary(18px, $pink);
    margin: 40px 0 20px;
  }

  .image {
    max-width: 380px;
    width: 100%;
    height: auto;
    display: block;
    margin: 20px auto;
    border: 3px solid #010101;

    @include mobile {
      max-width: 240px;
    }
  }

  .title {
    @include font-primary(48px);
    margin-bottom: 15px;

    @include mobile {
      font-size: 32px;
    }
  }

  .description {
    line-height: 22px;

    &:first-letter {
      @include font-primary(32px, $violet);
    }
  }
</style>
