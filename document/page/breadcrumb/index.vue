<template>
  <div>
    <lc-breadcrumb :breadcrumb="breadcrumb" :handleItemClick="handleItemClick"/>
    <lc-breadcrumb :breadcrumb="breadcrumb2" separator="*" :handleItemClick="handleItemClick"/>
    <lc-breadcrumb :breadcrumb="breadcrumb3" :handleItemClick="handleItemClick"/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        breadcrumb: [
          {
            label: '首页',
            value: '/path1'
          },
          {
            label: '部门',
            value: '/path2'
          },
          {
            label: '人员',
            value: '/path3'
          }
        ],
        breadcrumb2:['label1','label2'],
        breadcrumb3:['label1']
      }
    },
    methods: {
      handleItemClick (v, i) {
        console.log(v)
        console.log(i)
      }
    }
  }
</script>
