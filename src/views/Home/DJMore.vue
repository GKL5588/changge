<template>
    <div class="list clearfix">
        <div
            class="item"
            v-for="(item,index) in DJRecommend"
            :key="index"
            :class="{ 'clear-padding': index%3 !== 1 }"
        >
            <div class="img-warpper">
                <img :src="item.picUrl" alt />
            </div>
            <div class="main">{{ item.name }}</div>
            <div class="gray">{{ item.desc }}</div>
        </div>
        <div class="more" ref="more">{{ more }}</div>
    </div>
</template>

<script>
/**
 * 加载更多：
 *
 */

export default {
    name: "DJMore",
    data() {
        return {
            DJRecommend: [],
            hasMore: false,
            more: "加载更多"
        };
    },
    mounted() {
        this.http();
        const winHeight = document.documentElement.clientHeight;
        let timer = null;
        window.addEventListener("scroll", () => {
            // 获取元素距离顶部相对位置
            if (this.$refs.more) {
                let scrollHeight = this.$refs.more.getBoundingClientRect().top;
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    if (winHeight > scrollHeight) {
                        // 不能加载多次
                        if (this.hasMore) {
                            this.http();
                        } else {
                            // 没有更多数据了
                            this.more = "没有数据了";
                        }
                    }
                }, 300);
            }
        });
    },
    methods: {
        http() {
            this.$api
                .getDjCatetory({
                    type: this.$route.params.id
                })
                .then(res => {
                    // 数组和对象的重点。是否可以响应UI刷新
                    this.DJRecommend.push(...res.djRadios);
                    this.hasMore = res.hasMore;
                });
        }
    }
};
</script>

<style scoped>
.list {
    width: 100%;
}

.list .item {
    width: 100%;
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

.more {
}
</style>