import axios from "axios";

export default {
    namespaced: true,

    state: {
        articles: [],
        reviews: [],
        author: Object
    },

    mutations: {
        SET_ARTICLES(state, articles) {
            state.articles = articles ? articles : [];
        },
        SET_REVIEWS(state, reviews) {
            state.reviews = reviews;
        },
        SET_AUTHOR(state, author) {
            state.author = author;
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
                return data;
            })
        },

        getArticlesByAuthor({commit}) {
            return axios.get('https://localhost:5001/api/user/articles').then(({data}) => {
                commit('SET_ARTICLES', data.articles);
                commit('SET_REVIEWS', data.reviews);
                commit('SET_AUTHOR', data.user)
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

        addArticle({dispatch}, articleData) {
            return axios.post('/api/admin/article/create', articleData)
                .then(() => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    dispatch('getArticlesByAuthor')
                })
        },

        editArticle({dispatch}, articleData) {
            return axios.put('/api/admin/article/edit', articleData)
                .then(() => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                    dispatch('getArticlesByAuthor')
                })
        },

        deleteArticle({dispatch}, id) {
            return axios.delete('https://localhost:5001/api/admin/article/delete?id=' + id).then(() => {
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;
                dispatch('getArticlesByAuthor')
            });
        },

        search({commit}, name) {
            return axios.get('/api/article/search?Name=' + name)
                .then(({data}) => {
                    commit('SET_ARTICLES', data.articles);
                    return data;
                })
        }
    }
}