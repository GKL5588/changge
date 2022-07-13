<template>
    <div class="tabs">
        <tabs :defaultActiveKey="defaultActiveKey" @callback="setActiveKey">
            <tab
                :label="title[index].title"
                :index="(index+1).toString()"
                v-for="(item,index) in djsData"
                :key="index"
            >
                <div class="panel hotsongs on">
                    <ul class="list">
                        <li class="song url" v-for="(dj,index) in item.djRadios" :key="index">
                            <div class="poster">
                                <img :src="dj.picUrl" alt />
                            </div>
                            <div class="info">
                                <div class="name">{{ dj.desc }}</div>
                                <div class="author">{{ dj.name }}</div>
                            </div>
                        </li>
                    </ul>
                    <router-link :to="{name:'DJMore',params:{id:title[index].id}}" tag="div" class="more-songs">加载更多</router-link>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script>
import axios from "../../utils/request";
export default {
    data() {
        return {
            defaultActiveKey: "1",
            djsData: [],
            title: [
                {
                    id:2,
                    title:"情感故事"
                },
                {
                    id:3,
                    title:"情感调频"
                },
                {
                    id:4,
                    title:"娱乐影视"
                }
            ]
        };
    },
    mounted() {
        /**
         * 合并网络请求
         */
        const that = this;
        function getDj2() {
            return that.$api.getDjCatetory({ type: 2 });
        }
        function getDj3() {
            return that.$api.getDjCatetory({ type: 3 });
        }
        function getDj4() {
            return that.$api.getDjCatetory({ type: 4 });
        }
        axios.all([getDj2(), getDj3(), getDj4()]).then(
            axios.spread((dj2, dj3, dj4) => {
                this.djsData.push(dj2, dj3, dj4);
            })
        );
    },
    methods: {
        setActiveKey(index) {
            this.defaultActiveKey = index;
        }
    }
};
</script>

<style scoped>
.tabs {
    padding: 10px;
    background: #fff;
}
.musictop {
    background: #fff;
    padding: 10px;
}

.panel {
    border-top: 1px solid #eee;
    position: relative;
    top: -1px;
    display: block;
    background: #fff;
}

.list {
    padding-top: 0;
    height: 450px;
}

.panel .list li {
    height: 60px;
    border-bottom: 1px solid #eee;
    padding-left: 0;
    display: flex;
    padding-top: 10px;
}

.panel .list li .poster {
    position: relative;
    width: 45px;
    margin-right: 8px;
}

.panel .list li .poster img {
    border: 1px solid #eee;
}
.info {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.info .name {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    color: #333;
}

.info .author {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #999;
    margin-top: 2px;
}

.more-songs {
    color: #999;
    margin-top: 9px;
    font-size: 12px;
    text-align: center;
    height: 32px;
    line-height: 32px;
}
</style>