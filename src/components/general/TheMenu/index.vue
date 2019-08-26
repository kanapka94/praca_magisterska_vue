<template>
  <div class="container">
    <router-link to="/" class="header-link">
      <img src="/svg/logo.svg" alt="Page logo" class="logo">
    </router-link>
    <burger v-model="opened"/>
    <sidebar :opened="opened" @click="opened = false"/>
  </div>
</template>

<script>
import Burger from './Burger'
import Sidebar from './Sidebar'

export default {
  name: 'TheMenu',
  components: { Sidebar, Burger },
  data () {
    return {
      opened: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
  }

  .header-link {
    position: relative;

    &::before {
      content: 'Home Page';
      position: absolute;
      z-index: 0;
      color: $gray-dark;
      transform: translateX(-100%);
      transition: transform .3s cubic-bezier(0.77,0.2,0.05,1.0);
    }
  }

  .header-link:hover::before {
    transform: translate(110%, 40%);
  }

  .logo {
    position: relative;
    z-index: 2;
    width: 64px;
    height: 64px;
    padding: 10px;
    background-color: #f3faf3;
    animation: pulse 2s infinite cubic-bezier(.77, .2, .05, 1);
  }

  .burger {
    top: 10px;
    right: 10px;
    z-index: 5;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 #efefef;
    }
    50% {
      box-shadow: 0 0 5px #cbefc7;
    }
    100% {
      box-shadow: 0 0 0 #efefef;
    }
  }
</style>
