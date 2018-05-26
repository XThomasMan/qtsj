<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/components/loading";
</style>

<template>
  <div v-show="showLoading">
    <div class="mask mask_transparent"></div>
    <div class="toast">
      <i class="loading icon_toast"></i>
      <p class="toast__content">{{desc}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    props: {
      showLoading: Boolean,
      desc: String
    },
    data () {
      return {
      }
    },
    computed: {
    },
    created () {
    },
    methods: {

    },
    watch: {}
  }
</script>
