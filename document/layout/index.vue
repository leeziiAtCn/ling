<template>
  <div class="layout">
    <div class="header"></div>
    <div class="content">
      <div class="nav">
        <p>
          <lc-button type="text" @click.native="$router.push('/button')">Button</lc-button>
        </p>
        <p>
          <lc-button type="text" @click.native="$router.push('/alert')">Alert</lc-button>
        </p>
        <p>
          <lc-button type="text" @click.native="$router.push('/breadcrumb')">Breadcrumb</lc-button>
        </p>
      </div>
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    .header {
      line-height: 60px;
      height: 60px;
      background: red;
    }
    .content {
      flex: 1;
      display: flex;
    }
    .nav {
      width: 200px;
      background: yellow;
    }
    .main {
      flex: 1;
      padding: 16px;
    }
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
