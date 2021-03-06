<style lang="less" rel="stylesheet/less">
  @import "../styles/info-basic";
</style>

<template>
  <div class="page">
    <div class="desc">填写真实有效的个人信息，有助于信用评估</div>
    <div class="label label-1">个人信息</div>
    <div class="panel">
      <div class="panel-label">居住地址</div>
      <input type="text" class="panel-input" v-model="homeAddress" placeholder="请输入居住地址">
      <div class="panel-label">工作地址</div>
      <input type="text" class="panel-input" v-model="workAddress" placeholder="请输入工作地址">
      <div class="panel-label">个人收入</div>
      <div class="panel-select" :class="wages.id === 0 ? 'placeholder' : ''" @click="wagesPickerShow = true">{{wages.name}}</div>
    </div>
    <div class="label label-2">紧急联系人</div>
    <div class="panel">
      <div class="panel-label">关系</div>
      <div class="panel-select" :class="urgent.id === 0 ? 'placeholder' : ''" @click="urgentPickerShow = true">{{urgent.name}}</div>
      <div class="panel-label">姓名</div>
      <input type="text" class="panel-input" v-model="urgentName" placeholder="请输入姓名">
      <div class="panel-label">联系电话</div>
      <input type="text" class="panel-input" v-model="urgentPhone" placeholder="请输入联系电话">
    </div>
    <div class="label label-3">其他联系人</div>
    <div class="panel">
      <div class="panel-label">关系</div>
      <div class="panel-select" :class="other.id === 0 ? 'placeholder' : ''" @click="otherPickerShow = true">{{other.name}}</div>
      <div class="panel-label">姓名</div>
      <input type="text" class="panel-input" v-model="otherName" placeholder="请输入姓名">
      <div class="panel-label">联系电话</div>
      <input type="text" class="panel-input" v-model="otherPhone" placeholder="请输入联系电话">
    </div>
    <div class="form-item">
      <label class="form-item-label">
        <input type="checkbox" v-model="protocol" />
      </label>
      <div class="form-item-text">
        我已阅读并同意<a href="#">《拳头个人信贷平台服务协议》</a><a href="#">《用户授权协议》</a>，点击“<mark>完成</mark>”表示你同意遵守相关协议内容
      </div>
    </div>
    <button class="form-btn" :disabled="!protocol" @click="submit">完成</button>
    <Picker
      :visible.sync="wagesPickerShow"
      :columns="wagesColumns"
      value-key="name"
      @confirm="confirmWages">
    </Picker>
    <Picker
      :visible.sync="urgentPickerShow"
      :columns="urgentColumns"
      value-key="name"
      @confirm="confirmUrgent">
    </Picker>
    <Picker
      :visible.sync="otherPickerShow"
      :columns="otherColumns"
      value-key="name"
      @confirm="confirmOther">
    </Picker>
    <Dialog :showDialog="showDialog" @update:showDialog="val => showDialog = val" :title="dialogTitle" :desc="dialogDesc" :confirmBtn="confirmBtn" :cancelBtn="cancelBtn"></Dialog>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  import Dialog from '../components/dialog.vue';
  import Picker from '../components/picker.vue';
  export default{
    data(){
      return {
        homeAddress: '',
        workAddress: '',
        urgentName: '',
        urgentPhone: '',
        otherName: '',
        otherPhone: '',
        protocol: false,
        showDialog: false,
        dialogTitle: '提示',
        dialogDesc: '',
        confirmBtn () {
        },
        cancelBtn (){
        },
        wages: {name: '请选择收入', id: 0},
        urgent: {name: '请选择关系', id: 0},
        other: {name: '请选择关系', id: 0},
        wagesPickerShow: false,
        urgentPickerShow: false,
        otherPickerShow: false,
        wagesColumns: [
          {
            values: [
              {
                name: '2K以下',
                id: 1
              },
              {
                name: '2K ~ 5K',
                id: 2
              },
              {
                name: '5K ~ 10K',
                id: 3
              },
              {
                name: '10K ~ 15K',
                id: 4
              },
              {
                name: '20K以上',
                id: 5
              }
            ]
          }
        ],
        urgentColumns: [
          {
            values: [
              {
                name: '父母',
                id: 1
              },
              {
                name: '配偶',
                id: 2
              },
              {
                name: '兄弟姐妹',
                id: 3
              },
              {
                name: '朋友',
                id: 4
              }
            ]
          }
        ],
        otherColumns: [
          {
            values: [
              {
                name: '父母',
                id: 1
              },
              {
                name: '配偶',
                id: 2
              },
              {
                name: '兄弟姐妹',
                id: 3
              },
              {
                name: '朋友',
                id: 4
              }
            ]
          }
        ]
      }
    },
    components: {Picker, Dialog},
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
      confirmWages (picker) {
        this.wages = picker.getValues()[0]
      },
      confirmUrgent (picker) {
        this.urgent = picker.getValues()[0]
      },
      confirmOther (picker) {
        this.other = picker.getValues()[0]
      },
      submit(){
        if (this.homeAddress === '') {
          this.alert('请输入居住地址!');
        } else if (this.workAddress === '') {
          this.alert('请输入工作地址!');
        } else if (this.wages.id === 0) {
          this.alert('请选择个人收入!');
        } else if (this.urgent.id === 0) {
          this.alert('请选择与紧急联系人关系!');
        } else if (this.urgentName === '') {
          this.alert('请输入紧急联系人名字!');
        } else if (this.urgentPhone === '') {
          this.alert('请输入紧急联系人电话!');
        } else if (this.other.id === 0) {
          this.alert('请选择与其他联系人关系!');
        } else if (this.otherName === '') {
          this.alert('请输入其他联系人名字!');
        } else if (this.otherPhone === '') {
          this.alert('请输入其他联系人电话!');
        } else {
          axios.post('/api/v1.0/auth/essential_info', {
              address: this.homeAddress,
              workAddress: this.workAddress,
              wages: this.wages.name,
              emeJcontacRelationship: this.urgent.name,
              emeJcontactName: this.urgentName,
              emeJcontactPhone: this.urgentPhone,
              otherContactRelationship: this.other.name,
              otherContactName: this.otherName,
              otherContactPhone: this.otherPhone
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
