<template>
  <div :class="classes">{{this.text}}</div>
</template>

<script>
  const prefixCls = 'lc-btn'
  export default {
    name: 'lcButton',
    props: {
      type: {
        validator: v => ['primary', 'danger'],
        default: 'primary'
      },
      text: {
        type: String,
        default: 'btn'
      }
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`
        ]
      }
    }
  }
</script>

<style scoped>

</style>
