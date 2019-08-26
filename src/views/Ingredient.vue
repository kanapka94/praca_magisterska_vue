<template>
  <div class="page">
    <router-link to="/lists/ingredients" class="navigation">
      <img src="/svg/arrow_left.svg" alt="Return to ingredients list" class="icon">
    </router-link>
    <img
      :src="`https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient}-Medium.png`"
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
      title: `Ingredient Details - ${this.ingredient.strIngredient} - FunnyDrinks`,
      meta: [
        { vmid: 'description', name: 'description', content: 'Read the information about the ingredient and select the most interesting ones to include in your drinks with great accuracy!' },
        { vmid: 'og:title', property: 'og:title', content: `Ingredient Details - ${this.ingredient.strIngredient} - FunnyDrinks` },
        { vmid: 'og:description', property: 'og:description', content: 'Read the information about the ingredient and select the most interesting ones to include in your drinks with great accuracy!' }
      ]
    }
  },
  async created () {
    const params = this.$route.params
    let response = await this.$service.ingredients.getIngredientByName(params.id)
    if (response.ingredients === null) {
      response = await this.$service.ingredients.getIngredientById(params.id)
      if (response.ingredients === null) {
        this.$router.push({
          name: 'error',
          params: {
            status: 404,
            message: 'Ingredient not found!'
          }
        })
      }
    }
    const ingredient = response.ingredients[0]
    const filteredDrinks = await this.$service.filter.ingredients(ingredient.strIngredient)

    this.ingredient = ingredient
    this.drinks = filteredDrinks.drinks
  }
}
</script>

<style lang="scss" scoped>
  .subheader {
    @include font-primary(18px, $pink);
    margin: 40px 0 20px;
  }

  .image {
    display: block;
    margin: 20px auto;
    border: 4px solid #000;
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
