<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/info-operators";
</style>

<template>
  <div class="page">
    <div class="panel">
      <div class="panel-label">账号</div>
      <input type="text" class="panel-input" placeholder="请输入账号">
      <div class="panel-label">密码</div>
      <input type="password" class="panel-input" placeholder="请输入密码">
    </div>
    <div class="form-item">
      <label class="form-item-label">
        <input type="checkbox" />
      </label>
      <div class="form-item-text">
        我已阅读并同意<a href="#">《拳头认证协议》</a>
      </div>
    </div>
    <button disabled class="form-btn">完成</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
      }
    },
    components: {},
    methods: {},
    computed: {},
    created(){

    }
  }
</script>
