<template>
  <div :class="classes">
   <slot></slot>
  </div>
</template>
<script>
  const prefixCls = 'lc-btn-group'
  export default {
    name: 'lcButtonGroup',
    computed: {
      classes () {
        return [
          prefixCls,
          []
        ]
      }
    }
  }
</script>
