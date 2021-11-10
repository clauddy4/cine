import axios from "axios";

export default {
    namespaced: true,

    state: {
        // articles: [],
        articles: [
            {
                id: 1,
                title: 'Статья 1',
                author: {
                    name: 'Иван',
                    lastname: 'Петров'
                },
                createdAt: '20/08/2021'
            },
            {
                id: 2,
                title: 'Статья 2',
                author: {
                    name: 'Пётр',
                    lastname: 'Иванов'
                },
                createdAt: '21/08/2021'
            },
            {
                id: 3,
                title: 'Статья 3',
                author: {
                    name: 'Иван',
                    lastname: 'Петров'
                },
                createdAt: '22/08/2021'
            },
            {
                id: 4,
                title: 'Статья 4',
                author: {
                    name: 'Пётр',
                    lastname: 'Иванов'
                },
                createdAt: '23/08/2021'
            },
        ]
    },

    mutations: {
        SET_ARTICLES(state, data) {
            state.articles = data;
        },
    },

    actions: {
        // метод отправляет запрос к беку, потом вызывает мутацию,
        // которая обновляет стейт
        getArticles({commit}) {
            return axios.get('/api/method/for/get/articles/here/').then(({data}) => {
                commit('SET_ARTICLES', data);
                return data;
            })
        },
    }
}