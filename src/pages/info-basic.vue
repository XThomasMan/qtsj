<style lang="less" rel="stylesheet/less">
  @import "../styles/info-basic";
</style>

<template>
  <div class="page">
    <div class="desc">填写真实有效的个人信息，有助于信用评估</div>
    <div class="label label-1">个人信息</div>
    <div class="panel">
      <div class="panel-label">居住地址</div>
      <input type="text" class="panel-input" placeholder="请输入居住地址">
      <div class="panel-label">工作地址</div>
      <input type="text" class="panel-input" placeholder="请输入工作地址">
      <div class="panel-label">个人收入</div>
      <div class="panel-select" @click="fruitPickerShow = true">{{fruit.name}}</div>
    </div>
    <div class="label label-2">紧急联系人</div>
    <div class="panel">
      <div class="panel-label">关系</div>
      <div class="panel-select" @click="fruitPickerShow = true"></div>
      <div class="panel-label">姓名</div>
      <input type="text" class="panel-input" placeholder="请输入姓名">
      <div class="panel-label">联系电话</div>
      <input type="text" class="panel-input" placeholder="请输入联系电话">
    </div>
    <div class="label label-3">其他联系人</div>
    <div class="panel">
      <div class="panel-label">关系</div>
      <div class="panel-select" @click="fruitPickerShow = true"></div>
      <div class="panel-label">姓名</div>
      <input type="text" class="panel-input" placeholder="请输入姓名">
      <div class="panel-label">联系电话</div>
      <input type="text" class="panel-input" placeholder="请输入联系电话">
    </div>
    <div class="form-item">
      <label class="form-item-label">
        <input type="radio" />
      </label>
      <div class="form-item-text">
        我已阅读并同意<a href="#">《拳头个人信贷平台服务协议》</a><a href="#">《用户授权协议》</a>，点击“<mark>完成</mark>”表示你同意遵守相关协议内容
      </div>
    </div>
    <button class="form-btn">完成</button>
    <picker
      :visible.sync="fruitPickerShow"
      :columns="fruitColumns"
      value-key="name"
      @confirm="confirmPerson"
    />
  </div>
</template>

<script type="text/ecmascript-6">
  import picker from '../components/picker.vue';
  export default{
    data(){
      return {
        fruit: {name: '5K ~ 10K', id: 0},
        fruitPickerShow: false,
        fruitColumns: [
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
              }
            ]
          }
        ]
      }
    },
    components: {picker},
    methods: {
      confirmPerson (picker) {
        this.fruit = picker.getValues()[0]
      }
    },
    computed: {},
    created(){

    }
  }
</script>
