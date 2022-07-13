<template>
    <div>
        <div class="list clearfix">
            <router-link
                tag="div"
                :to="{name:'Player',params:{id:item.id,name:item.name,image:encodeURIComponent(item.al.picUrl)}}"
                class="item"
                v-for="(item,index) in detailsData"
                :key="index"
                :class="{ 'clear-padding': index%3 !== 1 }"
            >
                <div class="img-warpper">
                    <img :src="item.al.picUrl" alt />
                </div>
                <div class="main">{{ item.name }}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Details",
    data(){
        return{
            detailsData:[]
        }
    },
    mounted() {
        this.$api
            .getMusicDetails({
                id: this.$route.params.id
            })
            .then(res => {
                this.detailsData = res.playlist.tracks
            });
    }
};
</script>

<style scoped>

.list {
    width: 100%;
}

.list .item {
    float: left;
    width: 31.33%;
    padding: 0 10px;
    margin-bottom: 10px;
}

.clear-padding {
    padding: 0 !important;
}

.main {
    margin-top: 4px;
    font-size: 12px;
}

.gray {
    font-size: 12px;
    color: #999;
}

.btn-more {
    font-size: 12px;
    text-align: right;
    color: #333;
}

</style>