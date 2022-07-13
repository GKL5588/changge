<template>
  <div class="th-back-top" v-show="show" @click="clickTopHandle">
      <span class="bg-back2top2"></span>
  </div>
</template>

<script>
export default {
    name:"BackTop",
    data(){
        return{
            show:false
        }
    },
    created(){
        // 滚动超过屏幕高度显示
        const winHeight = document.documentElement.clientHeight
        window.addEventListener("scroll",() =>{
            let scrollHeight = document.documentElement.scrollTop;
            if(winHeight < scrollHeight){
                this.show = true;
            }else{
                this.show = false;
            }
        })
    },
    methods:{
        clickTopHandle(){
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<style scoped>

.th-back-top {
    position: fixed;
    right: 15px;
    bottom: 104px;
    height: 39px;
    width: 80px;
    z-index: 0;
    opacity: 0.8;
    text-align: right;
}

.bg-back2top2 {
    display: inline-block;
    background: url(//static1.qianqian.com/web/st/images/icon-back2top2.af69f845890e1a53.png)
        no-repeat 0 0;
    -webkit-background-size: 39px 39px;
    background-size: 39px 39px;
    width: 39px;
    height: 39px;
}

</style>