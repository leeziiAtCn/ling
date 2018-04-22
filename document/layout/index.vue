<template>
  <div>
    <lc-button type="primary">primary</lc-button>
    <lc-button type="secondary" @click.native="test">secondary</lc-button>
    <lc-button type="info" @click.native="test">info</lc-button>
    <lc-button type="success" @click.native="test">success</lc-button>
    <lc-button type="dark" @click.native="test">dark</lc-button>
    <lc-button type="light" @click.native="test">light</lc-button>
    <lc-button type="warning" @click.native="test">warning</lc-button>
    <lc-button type="danger" @click.native="test">danger</lc-button>
    <lc-button type="primary" :disabled="true">disabled</lc-button>

  </div>
</template>
<style scoped>

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
