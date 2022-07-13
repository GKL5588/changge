<template>
    <div class="home">
        <MusicList />
        <MusicTabs />
    </div>
</template>

<script>
import MusicList from "./MusicList";
import MusicTabs from "./MusicTabs";

export default {
    name: "Home",
    components: {
        MusicList,
        MusicTabs
    }
};
</script>
