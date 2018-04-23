<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
  const prefixCls = 'lc-alert'

  export default {
    name: 'lcAlert',
    props: {
      type: {
        validator: v =>
          ['primary', 'danger', 'success', 'info', 'warning', 'light', 'dark', 'secondary', 'text'].includes(v),
        default: 'primary'
      },
    },
    computed: {
      classes () {
        return [
          prefixCls,
          {
            [`${prefixCls}-${this.type}`]: !!this.type,
          }
        ]
      }
    }
  }
</script>
