<template>
    <div class="collection-block">
        <div class="block-padding">
            <div class="title">
                <h3>{{ title }}</h3>
            </div>
            <div class="list clearfix">
                <router-link 
                    tag="div"
                    :to="`/details/${item.id}`"
                    class="item" 
                    v-for="(item,index) in recommend" 
                    :key="index"
                    :class="{ 'clear-padding': index%3 !== 1 }"
                >
                    <div class="img-warpper">
                        <img :src="item.picUrl" alt />
                    </div>
                    <div class="main">{{ cutString(item.name) }}</div>
                    <div class="gray">{{ cutString(item.copywriter) }}</div>
                </router-link >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MusicListView",
    data() {
        return {};
    },
    props: {
        recommend: {
            type: Array,
            default: function() {
                return [];
            }
        },
        title:{
            type:String,
            default:""
        }
    },
    methods:{
        cutString(str){
            if(str.length >8){
                return str.substring(0,8)+"..."
            }
            return str;
        }
    }
};
</script>

<style scoped>
.collection-block {
    background-color: #f8f8f8;
    padding: 5px 0;
}

.block-padding {
    padding: 10px 17px;
    background-color: #fff;
}

.title {
    display: flex;
    margin: 14px 0 18px;
}

.title h3 {
    flex: 1 1 0%;
    display: block;
    font-weight: 700;
    font-size: 20px;
}

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