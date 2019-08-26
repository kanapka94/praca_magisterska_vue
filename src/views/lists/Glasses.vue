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
        v-for="(item, index) in items"
        :key="`ingredient_${index}`"
        class="item"
      >
        <router-link
          :to="`/search?query=${item.strGlass}&criteria=glasses`"
          class="link"
        >
          {{ item.strGlass }}
        </router-link>
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
  data () {
    return {
      items: []
    }
  },
  async created () {
    const response = await this.$service.getList.glasses()
    this.items = response.drinks
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
