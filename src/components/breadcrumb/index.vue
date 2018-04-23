<template>
  <ol :class="classes">
    <li v-for="(v,i) in breadcrumb" :key="i" @click="handleItemClick(v,i)">
      <lc-button type="text">{{v.label||v}}</lc-button>
      <span v-html="separator"></span>
    </li>
    <li>{{last.label||last}}</li>
  </ol>
</template>
<script>
  const prefixCls = 'lc-breadcrumb'

  export default {
    name: 'lcBreadcrumb',
    props: {
      breadcrumb: {
        default: []
      },
      separator:{
        default:'/'
      },
      handleItemClick: {
        type: Function,
        default: () => {}
      }
    },
    data () {
      return {
        last: null
      }
    },
    created () {
      this.last = this.breadcrumb.pop()
    },
    computed: {
      classes () {
        return [
          `${prefixCls}`
        ]
      }
    }
  }
</script>
