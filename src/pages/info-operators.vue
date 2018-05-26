<style lang="less" rel="stylesheet/less" scoped>
  @import "../styles/info-operators";
</style>

<template>
  <div class="page">
    <div class="panel">
      <div class="panel-label">手机号</div>
      <input type="text" class="panel-input" v-model="phoneNum" placeholder="请输入手机号">
      <div class="panel-label">服务密码</div>
      <input type="password" class="panel-input" v-model="password" placeholder="请输入服务密码">
      <div class="panel-label" v-show="isShowCode">验证码</div>
      <div class="panel-wrap" v-show="isShowCode">
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
    <Loading :showLoading="showLoading" @update:showLoading="val => showLoading = val" :desc="loadingDesc"></Loading>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import Dialog from '../components/dialog.vue';
  import Loading from '../components/loading.vue';
  export default{
    data(){
      return {
        phoneNum: '',
        password: '',
        code: '',
        status: '',
        isShowCode: false,
        protocol: false,
        showLoading: false,
        loadingDesc: '正在获取,请稍后',
        showDialog: false,
        dialogTitle: '提示',
        dialogDesc: '',
        confirmBtn () {
        },
        cancelBtn (){
        }
      }
    },
    components: {Dialog, Loading},
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
        let self = this;
        let phoneReg = /^[1][3-9][0-9]{9}$/;
        let phoneNum = this.phoneNum;
        if (phoneNum.length !== 11 || !phoneReg.test(phoneNum)) {
          this.alert('请输入正确手机号!');
        } else if (this.password === '') {
          this.alert('请输入服务密码!');
        } else {
          let param = {
            mobile: phoneNum,
            pwd: self.password
          };
          if(self.code != ''){
            param.errno = self.status;
            param.smsCode = self.code;
          }
          axios.post('/api/v1.0/auth/telecom/login', param)
            .then(function (response) {
              let result = response.data;
              if (result.errno == '0') {
                axios.get('/api/v1.0/auth/status')
                  .then(function (response) {
                    let result = response.data;
                    if (result.errno == '0') {
                      if(result.status[2] === 1){
                        location.href = '/#/complete';
                      }else{
                        location.href = '/#/information';
                      }
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
              } else if (result.errno == '3069' || result.errno == '3014') {
                self.status = result.errno;
                self.isShowCode = true;
                self.code = '';
                self.alert(result.errmsg);
              } else {
                self.isShowCode = false;
                self.alert(result.errmsg);
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
    },
    computed: {},
    created(){

    }
  }
</script>
