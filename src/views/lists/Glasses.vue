<template>
  <div class="page">
    <h1 class="title">
      List of types of glasses
      <img src="/svg/glasses.svg" alt="Glasses" class="title-icon">
    </h1>
    <p class="description">
      Click on the name of the glass to find drinks that match the glass. Choose the perfect cocktail for your glass and enjoy a beautiful-looking drink!
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <nuxt-link
          :to="`/search?query=${ingredient.strGlass}&criteria=glasses`"
          class="link"
        >
          {{ ingredient.strGlass }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'PageGlasses',
    head () {
      return {
        title: 'Cocktails glasses - FunnyDrinks',
        meta: [
          { hid: 'description', name: 'description', content: 'Choose the perfect cocktail for your glass and enjoy a beautiful-looking drink!' },
          { hid: 'og:title', property: 'og:title', content: 'Cocktails glasses - FunnyDrinks' },
          { hid: 'og:description', property: 'og:description', content: 'Choose the perfect cocktail for your glass and enjoy a beautiful-looking drink!' }
        ],
        link: [
          { rel: 'canonical', href: 'https://otejporze.pl/lists/glasses' }
        ]
      }
    },
    async asyncData ({ app }) {
      const response = await app.$service.getList.glasses()
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
