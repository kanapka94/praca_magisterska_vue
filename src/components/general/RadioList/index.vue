<template>
  <div class="radio-list">
    <label
      v-for="item in list"
      :key="`radio_${item.value}`"
      ref="list"
      class="label"
    >
      <input
        v-model="option"
        type="radio"
        class="input"
        :name="item.group"
        :value="item.value"
        @change="handleChange"
      >
      <span class="name">{{ item.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'RadioList',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      option: this.value
    }
  },
  mounted () {
    if (this.list.length <= 0) return
    this.$refs.list[0].click()
    this.$emit('input', this.option)
  },
  methods: {
    handleChange () {
      this.$emit('input', this.option)
    }
  }
}
</script>

<style lang="scss" scoped>
  .radio-list {
    display: flex;
    flex-wrap: wrap;
  }

  .label {
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .input {
    margin-right: 10px;
  }
</style>
