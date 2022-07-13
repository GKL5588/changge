<template>
    <div>
        <div>
            <MusicListView title="推荐歌单" :recommend="recommend"/>
            <MusicRecommend title="推荐歌曲" :recommend="musiclist"/>
        </div>
    </div>
</template>

<script>
import MusicListView from "./MusicListView";
import MusicRecommend from "./MusicRecommend"

export default {
    name: "MusicList",
    data() {
        return {
            recommend:[],
            musiclist:[]
        };
    },
    mounted() {
        this.$api.getRecommend().then(res => {
            this.recommend = res.recommend
        });

        this.$api.getMusic().then(res =>{
            this.musiclist = res.result
        })

    },
    components: {
        MusicListView,
        MusicRecommend
    }
};
</script>

<style>
</style>