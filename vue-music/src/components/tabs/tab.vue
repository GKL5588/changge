<script>
export default {
    name: "Tab",
    props: {
        label: {
            type: String,
            default: "tab"
        },
        index: {
            type: String,
            default: "1"
        }
    },
    mounted(){
        // 在给他push isActive
        // this.$parent.showContent.push(this.$slots.default)
        this.$parent.showContent.push(this)
    },
    computed: {
        isActive() {
            return this.$parent.defaultActiveKey == this.index;
        }
    },
    methods:{
        clickTabHandle(){
            // 获取到父级得defaultActiveKey的变化
            this.$parent.updateDefaultKey(this.index)
        }
    },
    render() {
        const classStyle = {
            "tab":true,
            "active":this.isActive
        }
        return <li onClick={ this.clickTabHandle } class={ classStyle }>{this.label}</li>;
    }
};
</script>

<style scoped>
.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}
</style>