<template>
  <div class="page">
    <h1 class="title">
      List of ingredients
      <img src="/svg/ingredients.svg" alt="Ingredients" class="title-icon">
    </h1>
    <p class="description">
      Click on an ingredient to learn more about it
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link :to="`/ingredient/${ingredient.strIngredient1}`" class="link">
          {{ ingredient.strIngredient1 }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageIngredients',
    head () {
      return {
        title: 'Cocktails ingredients - FunnyDrinks',
        meta: [
          { hid: 'description', name: 'description', content: 'Get recipes for great, light and tasty cocktails. With the help of these ingredients, you can prepare cocktails that are perfect for parties or at home.' },
          { hid: 'og:title', property: 'og:title', content: 'Cocktails ingredients - FunnyDrinks' },
          { hid: 'og:description', property: 'og:description', content: 'Get recipes for great, light and tasty cocktails. With the help of these ingredients, you can prepare cocktails that are perfect for parties or at home.' }
        ],
        link: [
          { rel: 'canonical', href: 'https://otejporze.pl/lists/ingredients' }
        ]
      }
    },
    async asyncData ({ app }) {
      const response = await app.$service.getList.ingredients()
      return {
        ingredients: response.drinks
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    @include font-primary(36px);
    margin-bottom: 10px;
  }

  .description {
    margin-bottom: 20px;
    line-height: 20px;
    color: $gray-dark;
  }

  .item {
    margin-bottom: 10px;
    cursor: pointer;

    .link {
      text-decoration: none;
      color: inherit;

      &:hover {
        color: $pink;
      }
    }
  }
</style>
