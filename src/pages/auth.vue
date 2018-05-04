<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/auth";
</style>

<template>
  <div class="page">
    <div class="banner">
      <div class="banner-title">拳头背调</div>
      <div class="banner-desc">智能场景化背调服务平台</div>
    </div>
    <div class="panel">
      <div class="panel-label">姓名</div>
      <input type="text" class="panel-input" placeholder="请输入姓名">
      <div class="panel-label">身份证号</div>
      <input type="text" class="panel-input" placeholder="请输入身份证号">
      <div class="panel-label">手机号</div>
      <input type="text" class="panel-input" placeholder="请输入手机号">
      <div class="panel-label">验证码</div>
      <div class="panel-wrap">
        <a href="javascript:void (0);" class="panel-wrap-btn">获取验证码</a>
        <input type="text" class="panel-input" placeholder="请输入验证码">
      </div>
      <div class="form-item panel-item">
        <label class="form-item-label">
          <input type="radio" />
        </label>
        <div class="form-item-text">
          我已阅读并同意<a href="#">《拳头认证协议》</a>
        </div>
      </div>
      <button class="form-btn panel-btn">完成</button>
    </div>
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
