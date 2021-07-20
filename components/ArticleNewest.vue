<template>
    <div>
        <div v-for="list in listArticleHealth.slice(0, 5)" class="max-w-md mx-auto mt-8 overflow-hidden md:max-w-2xl">
            <div class="md:flex">
                <div class="md:flex-shrink-0">
                    <img class="h-48 w-full object-cover md:w-48" :src="list.urlToImage" :alt="list.title">
                </div>
                <div class="p-4 pt-0">
                    <div class="uppercase tracking-wide text-xs text-yellow-500 font-semibold">{{ list.source.name }}</div>
                    <a href="#" class="line-clamp-4 block mt-1 text-lg leading-tight font-medium text-black hover:underline">{{ list.title }}</a>
                    <div class="flex inline-flex text-xs text-gray-400 mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{{ list.publishedAt.slice(0, 10) }}</span>
                    </div>
                    <p class="mt-2 text-gray-500">{{ list.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        listArticleHealth () {
            return this.$store.getters['getListNewsCategory']
        },
    },
    mounted() {
        this.$store.dispatch('getNewsCategory', 'health')
    }
}
</script>
