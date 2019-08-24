<template>
  <router-link :to="href" class="link">
    <slot/>
  </router-link>
</template>

<script>
export default {
  name: 'LinkComponent',
  props: {
    href: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .link {
    @include font-secondary;
    display: inline-block;
    text-decoration: none;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      margin-top: 4px;
      background-color: $green;
      transform: translate(-100%, 0);
      transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    }
  }

  .link:hover {
    &::after {
      transform: none;
    }
  }
</style>
