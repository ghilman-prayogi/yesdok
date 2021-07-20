<template>
    <div>
        <div v-for="(list, index) in listArticleCovid" :key="index" class="max-w-md mx-auto mt-8 overflow-hidden md:max-w-2xl">
            <div class="md:flex">
            <div class="md:flex-shrink-0">
                <img class="h-20 w-full object-cover md:w-20" :src="list.urlToImage" :alt="list.title">
            </div>
            <div class="p-4 pt-0 pb-0">
                <a :href="list.url" class="line-clamp-3 block text-sm leading-tight font-medium text-black hover:underline">{{ list.title }}</a>
                <div class="flex inline-flex text-xs text-gray-400 mt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{{ list.publishedAt.slice(0, 10) }}</span>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed: {
        listArticleCovid () {
            return this.$store.getters['getListNewsCovid']
        },
    },
    mounted() {
        this.$store.dispatch('getNewsCovid')
    }
}
</script>