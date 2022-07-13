import { get } from "../utils/request"

const api = {
    /**
     * 获取推荐歌单
     */
    getRecommend(){
        return get("/api/recommend/resource");
    },
    /**
     * 登陆接口
     */
    login(params){
        return get("/api/login/cellphone",params)
    },
    /**
     * 推荐歌曲
     */
    getMusic(){
        return get("/api/personalized/newsong")
    },
    /**
     * 歌单详情
     */
    getMusicDetails(params){
        return get("/api/playlist/detail",params)
    },
    /**
     * 播放
     */
    getPlayer(params){
        return get("/api/song/url",params)
    },
    /**
     * 电台分类
     */
    getDjCatetory(params){
        return get("/api/dj/recommend/type",params)
    },
    /**
     * 获取歌词
     */
    getLRC(params){
        return get("/api/lyric",params)
    },
    /**
     * 搜索接口
     */
    getSearch(params){
        return get("/api/search",params)
    }
}

export default api