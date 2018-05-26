<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/components/dialog";
</style>

<template>
  <div v-show="showDialog">
    <div class="mask"></div>
    <div class="dialog">
      <div class="dialog__hd"><strong class="dialog__title">{{title}}</strong></div>
      <div class="dialog__bd" v-html="desc"></div>
      <div class="dialog__ft">
        <a href="javascript:;" class="dialog__btn dialog__btn_default" @click="cancel">取消</a>
        <a href="javascript:;" class="dialog__btn dialog__btn_primary" @click="confirm">确定</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    components: {},
    props: {
      showDialog: Boolean,
      title: String,
      desc: String,
      confirmBtn: Function,
      cancelBtn: Function
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
      confirm(){
        this.$emit('update:showDialog', false);
        this.confirmBtn();
      },
      cancel(){
        this.$emit('update:showDialog', false);
        this.cancelBtn();
      }
    },
    watch: {}
  }
</script>
