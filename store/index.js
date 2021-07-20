import axios from "axios"

export const state = () => ({
    listNews: [],
    listNewsCategory: [],
    listNewsCovid: [],
    listNewsPopular: [],
})

export const getters = {
    getListNews (state) {
        return state.listNews
    },
    getListNewsCategory (state) {
        return state.listNewsCategory
    },
    getListNewsCovid (state) {
        return state.listNewsCovid
    },
    getListNewsPopular (state) {
        return state.listNewsPopular
    }
}

export const actions = {
    async getNews({ commit }) {
        const news = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=452ca09158554d059321aa538b2afb24')
        const data = news.data.articles.slice(0,2)
        commit('setListNews', data)
        //console.log(data)
        return data
    },
    async getNewsCategory({ commit }, category) {
        const categories = category != '' ? '&category='+category : ''
        const news = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=452ca09158554d059321aa538b2afb24'+categories)
        console.log(category, 'https://newsapi.org/v2/top-headlines?country=id&apiKey=452ca09158554d059321aa538b2afb24'+categories)
        const data = news.data.articles.slice(0,5)
        commit('setListNewsCategory', data)
        console.log(data)
        return data
    },
    async getNewsCovid({ commit }) {
        const news = await axios.get('https://newsapi.org/v2/top-headlines?q=covid&country=id&apiKey=452ca09158554d059321aa538b2afb24')
        const data = news.data.articles.slice(0,4)
        commit('setListNewsCovid', data)
        return data
    },
    async getNewsPopular({ commit }) {
        const news = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=452ca09158554d059321aa538b2afb24')
        const data = news.data.articles.slice(0,4)
        commit('setListNewsPopular', data)
        return data
    },
}

export const mutations = {
    setListNews (state, list) {
        state.listNews = list
    },
    setListNewsCategory (state, listCat) {
        state.listNewsCategory = listCat
    },
    setListNewsCovid (state, listCov) {
        state.listNewsCovid = listCov
    },
    setListNewsPopular (state, listPopular) {
        state.listNewsPopular = listPopular
    }
}