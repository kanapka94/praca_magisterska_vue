<template>
  <div
    class="sidebar"
    :class="{ opened: openedMenu }"
    @click="$emit('click')"
  >
    <links/>
  </div>
</template>

<script>
import Links from './Links'

export default {
  name: 'Sidebar',
  components: { Links },
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      openedMenu: this.opened
    }
  },
  watch: {
    opened: {
      immediate: true,
      handler (value) {
        this.openedMenu = value
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sidebar {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(118, 20, 255, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: .3s cubic-bezier(0.77,0.2,0.05,1.0);

    &.opened {
      opacity: 1;
      visibility: visible;

      .wrapper {
        transform: none;
      }
    }
  }

  .wrapper {
    transform: translate(100%, 0);
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    transition-delay: .1s;
  }
</style>
