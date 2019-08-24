<template>
  <div class="detail">
    <p class="title">
      {{ detail.title }}
    </p>
    <p class="description" :class="{ italic: detail.italic }">
      {{ detail.description }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'DetailItem',
  props: {
    detail: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
  .detail {
    @include font-secondary;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .title {
    margin-right: 15px;
    margin-bottom: 5px;
    color: $violet;
  }

  .description {
    &:first-letter {
      text-transform: uppercase;
    }

    &.italic {
      font-style: italic;
    }
  }
</style>
