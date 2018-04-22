<template>
  <button :class="classes" :disabled="disabled">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
  const prefixCls = 'lc-btn'
  export default {
    name: 'lcButton',
    props: {
      type: {
        validator: v => ['primary', 'danger', 'success', 'info', 'warning', 'light', 'dark', 'secondary'].includes(v),
        default: 'primary'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      size: {
        validator: v = ['mini', 'small', 'large'].includes(v),
        default: 'small'
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
