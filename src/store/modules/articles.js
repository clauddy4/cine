import axios from "axios";

export default {
    namespaced: true,

    state: {
        articles: [],
        reviews: [],
    },

    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles;
        },
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews;
        },
    },

    actions: {
        getNew({commit}) {
            return axios.get('/api/article/new/').then(({data}) => {
                commit('SET_ARTICLES', data.articles);
                commit('SET_REVIEWS', data.reviews);
                return data;
            })
        },

        getArticles({commit}) {
            return axios.get('/api/article/category?type=Article').then(({data}) => {
                commit('SET_ARTICLES', data.articles);
                console.log(data)
                return data;
            })
        },

        getReviews({commit}) {
            return axios.get('/api/article/category?type=Review').then(({data}) => {
                commit('SET_REVIEWS', data.articles);
                console.log(data.articles);
                return data;
            })
        },
    }
}