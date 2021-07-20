<template>
    <section class="bg-gray-100 relative py-8 flex">
        <div class="container max-w-5xl mx-auto">
            <div class="flex flex-wrap">
                <div class="w-12/12 md:w-6/12 lg:w-6/12 px-1">
                    <div class="h-full" v-swiper="swiperOption">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" v-for="(list, index) in headline.slice(0, 4)" :key="index">
                                <div class="relative h-full">
                                    <img :src="list.urlToImage" class="h-full w-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-6 w-full">
                                        <div class="mb-3">
                                            <a class="bg-yellow-500 px-4 py-1 text-xs uppercase font-semibold text-white rounded-md">
                                                {{ list.source.name }}
                                            </a>
                                        </div>
                                        <div class="bg-white bg-opacity-80 py-6 px-6">
                                            <a :href="list.url" class="line-clamp-3 font-semibold text-regal-blue text-lg">
                                                {{ list.title }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-pagination"></div>
                    </div>
                </div>
                <div class="w-12/12 md:w-6/12 lg:w-6/12 px-1">
                    <div class="mb-2 border border-gray-300 relative flex flex-col md:flex-row items-center md:h-40">
                        <div class="z-0 order-1 md:order-1 relative w-full md:w-3/5 h-80 md:h-full overflow-hidden">
                            <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom" style="background-image: url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 ); background-blend-mode: multiply;"></div>
                            <svg class="hidden md:block absolute right-0 inset-y-100 h-full w-24 fill-current text-white -mr-12" style="transform: scaleX(-1);" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polygon points="50,0 100,0 50,100 0,100" />
                            </svg>
                        </div>

                        <div class="z-10 order-1 md:order-2 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                            <div class="p-4 md:pr-18 md:pl-4 mx-2 md:mx-0 h-full bg-white md:shadow-none">
                                <div class="mb-2">
                                    <a href="#" class="bg-yellow-500 px-4 py-1 text-xs uppercase font-semibold text-white rounded-md">
                                        Sehat
                                    </a>
                                </div>
                                <div>
                                    <a href="#" class="font-semibold text-regal-blue text-lg">
                                        English spinners are third-class citizens, says Graeme Swann
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap -mx-1">
                        <template v-for="news in listNews">
                            <div class="w-12/12 md:w-6/12 lg:w-6/12 px-1">
                                <div class="relative h-48 w-full mb-1 md:mb-0">
                                    <img :src="news.urlToImage" class="h-full w-full object-cover">
                                    <div class="absolute bottom-0 left-0 p-3 w-full">
                                        <div class="mb-3">
                                            <a class="bg-yellow-500 px-4 py-1 text-xs uppercase font-semibold text-white rounded-md">
                                                {{ news.source.name }}
                                            </a>
                                        </div>
                                        <div class="bg-white bg-opacity-90 p-3">
                                            <a :href="news.url" class="line-clamp-2 font-semibold text-regal-blue text-sm">
                                                {{ news.title }}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { directive } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination'
                },
            }
        }
    },
    directives: {
    swiper: directive
  },
    computed: {
        headline () {
            return this.$store.getters['getListNewsCategory']
        },
        listNews () {
            return this.$store.getters['getListNews']
        },
        swiper() {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted() {
        this.$store.dispatch('getNews')
        this.$store.dispatch('getNewsCategory', 'health')
    }
}
</script>

<style lang="scss" scooped>
</style>

