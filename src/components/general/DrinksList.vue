<template>
  <div class="drinks">
    <router-link
      v-for="drink in drinks"
      :key="drink.idDrink"
      :to="`/drink/${drink.idDrink}`"
      class="item"
    >
      <img :src="drink.strDrinkThumb" :alt="drink.strDrink" class="image">
      <p class="name">
        {{ drink.strDrink }}
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'DrinksList',
  props: {
    drinks: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
  .drinks {
    display: flex;
    flex-wrap: wrap;

    @include mobile {
      justify-content: center;
    }
  }

  .item {
    margin-right: 15px;
    margin-bottom: 15px;
    text-decoration: none;
    text-align: center;
    color: inherit;
    transition: transform .3s cubic-bezier(0.77,0.2,0.05,1.0);

    &:hover {
      transform: scale(1.04);
    }
  }

  .image {
    width: 160px;
    height: 160px;
    border: 4px solid #000;
  }

  .name {
    @include font-primary(16px);
    margin-top: 15px;
  }
</style>
