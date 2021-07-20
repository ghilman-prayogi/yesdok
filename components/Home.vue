<template>
    <div class="">
        <Headline />
        <Articles />
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        listNews () {
            return this.$store.getters['getListNews']
        },
    },
    mounted() {
        this.$store.dispatch('getNews')
    }
}
</script>
