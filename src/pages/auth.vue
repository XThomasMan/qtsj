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
      <input type="text" class="panel-input" v-model="name" placeholder="请输入姓名">
      <div class="panel-label">身份证号</div>
      <input type="text" class="panel-input" v-model="identification" placeholder="请输入身份证号">
      <div class="panel-label">手机号</div>
      <input type="text" class="panel-input" v-model="phoneNum" placeholder="请输入手机号">
      <div class="panel-label">验证码</div>
      <div class="panel-wrap">
        <a href="javascript:void (0);" @click="sendCode" class="panel-wrap-btn" :class="isSend ? 'disabled' : ''">{{sendText}}</a>
        <input type="text" class="panel-input" v-model="code" placeholder="请输入验证码">
      </div>
      <div class="form-item panel-item">
        <label class="form-item-label">
          <input type="checkbox" v-model="protocol"/>
        </label>
        <div class="form-item-text">
          我已阅读并同意<a href="#">《拳头认证协议》</a>
        </div>
      </div>
      <button class="form-btn panel-btn" :disabled="!protocol" @click="submit">完成</button>
    </div>
    <Dialog :showDialog="showDialog" @update:showDialog="val => showDialog = val" :title="dialogTitle" :desc="dialogDesc" :confirmBtn="confirmBtn" :cancelBtn="cancelBtn"></Dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import Dialog from '../components/dialog.vue';
  export default{
    data(){
      return {
        name: '',
        identification: '',
        sendText: '获取验证码',
        isSend: false,
        phoneNum: '',
        code: '',
        showDialog: false,
        dialogTitle: '提示',
        dialogDesc: '',
        confirmBtn () {
        },
        cancelBtn (){
        },
        protocol: false
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
      countdown(timeOver){
        let self = this;
        let time = timeOver;
        let countdown = setInterval(function () {
          if (0 === time) {
            clearInterval(countdown);
            self.sendText = '重新获取验证码'
          }
          self.sendText = time + 's';
          time--;
        }, 1000)
      },
      sendCode(){
        let self = this;
        let phoneReg = /^[1][3-9][0-9]{9}$/;
        let phoneNum = this.phoneNum;
        let time = +new Date();
        if (phoneNum.length === 11 && phoneReg.test(phoneNum)) {
          //图片验证码
          this.alert(`<div class="image-code"><input id="imageCodeText" type="text"><img src="/api/v1.0/imagecode/${time}" alt=""></div>`, '请输入图片验证码', function () {
            let text = document.querySelector('#imageCodeText').value;
            axios.get('/api/v1.0/smscode/' + phoneNum, {
                params: {
                  text: text,
                  id: time
                }
            }).then(function (response) {
                let result = response.data;
                if (result.errno == 0) {
                  self.isSend = true;
                  self.countdown(120);
                }else{
                  self.alert(result.errmsg);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          });
        } else {
          self.alert('请输入正确手机号！');
        }
      },
      submit(){
        let self = this;
        let phoneNum = this.phoneNum;
        let phoneReg = /^[1][3-9][0-9]{9}$/;
        let identificationReg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (this.code.length < 4) {
          this.alert('请输入验证码!');
        } else if (this.name === '') {
          this.alert('请输入姓名!');
        } else if (phoneNum.length !== 11 && !phoneReg.test(phoneNum)) {
          this.alert('请输入正确手机号!');
        } else if (!identificationReg.test(this.identification)) {
          this.alert('请输入正确身份证号!');
        } else {
          axios.post('/api/v1.0/auth/auth', {
              name: this.name,
              mobile: phoneNum,
              sms_code: this.code,
              id_card: this.identification
            })
            .then(function (response) {
              let result = response.data;
              if (result.errno == 0) {
                location.href = '/#/information';
              }else{
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
