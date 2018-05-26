<style lang="less" rel="stylesheet/less">
  @import "../styles/information";
</style>

<template>
  <div class="page">
    <div class="title">完善资料</div>
    <div class="desc">完善以下资料，请保证真实有效</div>
    <ul class="cells">
      <li class="cell" @click="jumpLink(0)">
        <div class="cell-hd"><img src="../images/icon/img-icon-1.png" alt=""></div>
        <div class="cell-bd">基础资料</div>
        <div class="cell-ft"><span v-show="status[0] == 1">已完成</span></div>
      </li>
      <li class="cell" @click="jumpLink(1)">
        <div class="cell-hd"><img src="../images/icon/img-icon-2.png" alt=""></div>
        <div class="cell-bd">运营商</div>
        <div class="cell-ft"><span v-show="status[1] == 1">已完成</span></div>
      </li>
      <li class="cell" @click="jumpLink(2)">
        <div class="cell-hd"><img src="../images/icon/img-icon-3.png" alt=""></div>
        <div class="cell-bd">淘宝</div>
        <div class="cell-ft"><span v-show="status[2] == 1">已完成</span></div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios';
  export default{
    data(){
      return {
        status: [0, 0, 0]
      }
    },
    components: {},
    methods: {
      jumpLink(index){
        let linkMap = ['/#/info-basic', '/#/info-operators', '/#/info-taobao'];
        if (this.status[index] === 0) {
          location.href = linkMap[index];
        }
      }
    },
    computed: {},
    created(){
      let self = this;
      axios.get('/api/v1.0/auth/status')
        .then(function (response) {
          let result = response.data;
          if (result.errno == '0') {
            self.status = result.status;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
</script>
