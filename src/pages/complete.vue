<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/complete";
</style>

<template>
  <div class="page">
    <div class="icon"></div>
    <div class="title">{{title}}</div>
    <div class="desc">
      <p>审核完成后</p>
      <p>将申请结果发送至您的手机<mark>{{phone}}</mark></p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        title: '提交成功',
        phone: '134****4321'
      }
    },
    components: {},
    methods: {},
    computed: {},
    created(){

    }
  }
</script>
