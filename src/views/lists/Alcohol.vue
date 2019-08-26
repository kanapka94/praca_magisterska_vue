<template>
  <div class="page">
    <h1 class="title">
      List of categories of drinks by alcohol content
      <img src="/svg/magnificial.svg" alt="Magnifying glass" class="title-icon">
    </h1>
    <p class="description">
      Choose the perfect alcohol saturation in your drink and discover the list of great cocktails!
      <br>Click on a category to find suitable drinks
    </p>
    <ul class="ingredients">
      <li
        v-for="(ingredient, index) in ingredients"
        :key="`ingredient_${index}`"
        class="item"
      >
        <router-link
          :to="`/search?query=${ingredient.strAlcoholic}&criteria=alcohol`"
          class="link"
        >
          {{ ingredient.strAlcoholic }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageSaturation',
  metaInfo: {
    title: 'Cocktails alcohol saturation - FunnyDrinks',
    meta: [
      { vmid: 'description', name: 'description', content: 'Choose the perfect alcohol saturation in your drink and discover the list of great cocktails!' },
      { vmid: 'og:title', property: 'og:title', content: 'Cocktails alcohol saturation - FunnyDrinks' },
      { vmid: 'og:description', property: 'og:description', content: 'Choose the perfect alcohol saturation in your drink and discover the list of great cocktails!' }
    ],
    link: [
      { rel: 'canonical', href: 'https://otejporze.pl/lists/alcohol' }
    ]
  },
  data () {
    return {
      ingredients: []
    }
  },
  async created () {
    const response = await this.$service.getList.alcohol()
    this.ingredients = response.drinks
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
