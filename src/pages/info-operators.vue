<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/info-operators";
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
        <input type="checkbox" v-model="protocol" />
      </label>
      <div class="form-item-text">
        我已阅读并同意<a href="#">《拳头认证协议》</a>
      </div>
    </div>
    <button :disabled="!protocol" @click="submit" class="form-btn">完成</button>
    <Dialog :showDialog="showDialog" @update:showDialog="val => showDialog = val" :title="dialogTitle" :desc="dialogDesc" :confirmBtn="confirmBtn" :cancelBtn="cancelBtn"></Dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import Dialog from '../components/dialog.vue';
  export default{
    data(){
      return {
        protocol: false,
        showDialog: false,
        dialogTitle: '提示',
        dialogDesc: '',
        confirmBtn () {
        },
        cancelBtn (){
        }
      }
    },
    components: {Dialog},
    methods: {
      alert(dialogDesc, dialogTitle, confirmBtn, cancelBtn){
        this.showDialog = true;
        this.dialogTitle = dialogTitle || '提示';
        this.dialogDesc = dialogDesc;
        this.confirmBtn = confirmBtn || function () {
          };
        this.cancelBtn = cancelBtn || function () {
          };
      },
      submit(){

      }
    },
    computed: {},
    created(){

    }
  }
</script>
