<template>
  <div>
    <p>
      <lc-button type="primary">primary</lc-button>
      <lc-button type="secondary">secondary</lc-button>
      <lc-button type="info">info</lc-button>
      <lc-button type="success">success</lc-button>
      <lc-button type="dark">dark</lc-button>
      <lc-button type="light">light</lc-button>
      <lc-button type="warning">warning</lc-button>
      <lc-button type="danger">danger</lc-button>
      <lc-button type="primary" :disabled="true">disabled</lc-button>
      <lc-button type="text">text</lc-button>
    </p>
    <p>
      <lc-button type="primary" size="mini">mini-button</lc-button>
      <lc-button type="primary" size="small">small-button</lc-button>
      <lc-button type="primary" size="large">large-button</lc-button>
    </p>
    <p>
      <lc-button outline type="primary">primary</lc-button>
      <lc-button outline type="secondary">secondary</lc-button>
      <lc-button outline type="info">info</lc-button>
      <lc-button outline type="success">success</lc-button>
      <lc-button outline type="dark">dark</lc-button>
      <lc-button outline type="light">light</lc-button>
      <lc-button outline type="warning">warning</lc-button>
      <lc-button outline type="danger">danger</lc-button>
      <lc-button outline type="primary" :disabled="true">disabled</lc-button>
      <lc-button outline type="text">text</lc-button>
    </p>
  </div>
</template>
<style scoped>
  p {
    line-height: 60px;
  }
</style>
