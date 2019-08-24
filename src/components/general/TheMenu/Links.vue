<template>
  <nav class="wrapper">
    <div class="links">
      <p class="title">General</p>
      <ul>
        <li class="item">
          <link-component href="/">
            Home Page
          </link-component>
        </li>
        <li class="item">
          <link-component href="/search">
            Search 🍹
          </link-component>
        </li>
      </ul>
      <p class="title">Lists</p>
      <ul>
        <li class="item">
          <link-component href="/lists/ingredients">
            Ingredients
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lists/glasses">
            Glasses
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lists/alcohol">
            Alcohol
          </link-component>
        </li>
        <li class="item">
          <link-component href="/lists/categories">
            Categories
          </link-component>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import LinkComponent from '../Link'
export default {
  name: 'Links',
  components: { LinkComponent }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    max-width: 300px;
    width: 100%;
    height: 100vh;
    padding: 40px 30px;
    float: right;
    background-color: #fff;
  }

  .links {
    @include font-primary(22px);
  }

  .title {
    margin: 20px 0;
  }

  .link {
    display: block;
    margin-left: 15px;
    margin-bottom: 10px;
  }
</style>
