<template>
  <div>
    <lc-button type="danger" class="a" text="asdasd" @click.native="test"></lc-button>
  </div>
</template>
<style scoped>
  .a {
  }
</style>
<script>
  export default {
    methods: {
      test () {
        console.log(1)
      }
    }
  }
</script>
