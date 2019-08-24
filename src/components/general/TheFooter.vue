<template>
  <footer class="footer">
    FunnyDrinks 2019
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
  .footer {
    @include font-secondary(14px, $violet-light);
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: $footer-height;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 70px;

    @include mobile {
      padding: 0;
      justify-content: center;
    }
  }
</style>
