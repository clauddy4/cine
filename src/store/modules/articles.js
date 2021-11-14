import axios from "axios";

export default {
    namespaced: true,

    state: {
        articles: [],
        reviews: [],
        // articles: [
        //     {
        //         id: 1,
        //         title: 'Статья 1',
        //         author: {
        //             name: 'Иван',
        //             lastname: 'Петров'
        //         },
        //         createdAt: '20/08/2021'
        //     },
        //     {
        //         id: 2,
        //         title: 'Статья 2',
        //         author: {
        //             name: 'Пётр',
        //             lastname: 'Иванов'
        //         },
        //         createdAt: '21/08/2021'
        //     },
        //     {
        //         id: 3,
        //         title: 'Статья 3',
        //         author: {
        //             name: 'Иван',
        //             lastname: 'Петров'
        //         },
        //         createdAt: '22/08/2021'
        //     },
        //     {
        //         id: 4,
        //         title: 'Статья 4',
        //         author: {
        //             name: 'Пётр',
        //             lastname: 'Иванов'
        //         },
        //         createdAt: '23/08/2021'
        //     },
        // ]
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
            return axios.get('https://localhost:5001/api/article/new/').then(({data}) => {
                commit('SET_ARTICLES', data.articles);
                commit('SET_REVIEWS', data.reviews);
                return data;
            })
        },

        getArticles({commit}) {
            return axios.get('https://localhost:5001/api/article/category?type=1').then(({data}) => {
                commit('SET_ARTICLES', data.articles);
                return data;
            })
        },

        getReviews({commit}) {
            return axios.get('https://localhost:5001/api/article/category?type=0').then(({data}) => {
                commit('SET_REVIEWS', data.reviews);
                return data;
            })
        },
    }
}