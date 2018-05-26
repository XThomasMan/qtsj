<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/info-operators";
</style>

<template>
  <div class="page">
    <div class="panel">
      <div class="panel-label">淘宝账户名</div>
      <input type="text" class="panel-input" v-model="username" placeholder="请输入账号名">
      <div class="panel-label">手机号</div>
      <input type="text" class="panel-input" v-model="phoneNum" placeholder="请输入手机号">
      <div class="panel-label">验证码</div>
      <div class="panel-wrap">
        <a href="javascript:void (0);" @click="sendCode" class="panel-wrap-btn">获取验证码</a>
        <input type="text" class="panel-input" v-model="code" placeholder="请输入验证码">
      </div>
    </div>
    <div class="form-item">
      <label class="form-item-label">
        <input type="checkbox" v-model="protocol"/>
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
        username: '',
        phoneNum: '',
        code: '',
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
      sendCode(){
        let self = this;
        let phoneReg = /^[1][3-9][0-9]{9}$/;
        let phoneNum = this.phoneNum;
        if (this.username == '') {
          self.alert('请输入用户名！');
        } else if (phoneNum.length !== 11 || !phoneReg.test(phoneNum)) {
          self.alert('请输入正确手机号！');
        } else {
          axios.post('/api/v1.0/auth/tao/smscode/', {
              mobile: phoneNum,
              userName: this.username
            })
            .then(function (response) {
              let result = response.data;
              if (result.errno != '0') {
                self.alert(result.errmsg);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      },
      submit(){
        let self = this;
        if (this.code !== '') {
          axios.post('/api/v1.0/auth/tao/login/', {
              ident_code: this.code
            })
            .then(function (response) {
              let result = response.data;
              if (result.errno == '0') {
                location.href = '/#/complete';
              } else {
                self.alert(result.errmsg);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        } else {
          self.alert('请输入验证码！');
        }
      }
    },
    computed: {},
    created(){

    }
  }
</script>
