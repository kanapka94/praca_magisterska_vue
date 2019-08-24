<template>
  <div class="page">
    <h1 class="title">
      Cocktail categories list
      <img src="/svg/category.svg" alt="Categories" class="title-icon">
    </h1>
    <p class="description">
      Discover your tastes and choose drinks from the categories best suited to you!
      <br>Click on a category to search for drinks from that category.
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link
          :to="`/search?query=${ingredient.strCategory}&criteria=categories`"
          class="link"
        >
          {{ ingredient.strCategory }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageCategories',
    head () {
      return {
        title: 'Cocktails categories - FunnyDrinks',
        meta: [
          { hid: 'description', name: 'description', content: 'Discover your tastes and choose drinks from the categories best suited to you!' },
          { hid: 'og:title', property: 'og:title', content: 'Cocktails categories - FunnyDrinks' },
          { hid: 'og:description', property: 'og:description', content: 'Discover your tastes and choose drinks from the categories best suited to you!' }
        ],
        link: [
          { rel: 'canonical', href: 'https://otejporze.pl/lists/categories' }
        ]
      }
    },
    async asyncData ({ app }) {
      const response = await app.$service.getList.categories()
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
