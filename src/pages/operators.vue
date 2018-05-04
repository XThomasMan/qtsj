<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/operators";
</style>

<template>
  <div class="page">
    <div class="panel">
      <div class="panel-label">手机号</div>
      <input type="text" class="panel-input" placeholder="请输入手机号">
      <div class="panel-label">服务密码</div>
      <input type="password" class="panel-input" placeholder="请输入服务密码">
      <div class="panel-label">验证码</div>
      <div class="panel-wrap">
        <a href="javascript:void (0);" class="panel-wrap-btn">获取验证码</a>
        <input type="text" class="panel-input" placeholder="请输入验证码">
      </div>
    </div>
    <div class="form-item">
      <label class="form-item-label">
        <input type="radio" />
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
