<template>
    <div>
        <input type="text" v-model="search" />
        <button @click="searchHandle">搜索</button>
        <ul>
          <router-link 
            tag="li"
            :to="{name:'Player',params:{id:item.id,name:item.name,image:encodeURIComponent(item.album.artist.img1v1Url)}}" 
            v-for="(item,index) in searchData" 
            :key="index">
            {{ item.name }}
          </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            search: "",
            searchData:[]
        };
    },
    mounted() {},
    methods: {
        searchHandle() {
            this.$api.getSearch({
                keywords: this.search
            }).then(res =>{
              this.searchData = res.result.songs
            })
        }
    }
};
</script>

<style>
</style>