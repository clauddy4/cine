import axios from "axios";

export default {
    namespaced: true,

    state: {
        article: ''
    },

    mutations: {
        SET_ARTICLE(state, data) {
            state.article = data;
        },
    },

    actions: {
        getArticle({commit}, [id]) {
            return axios.get('https://localhost:5001/api/article?id=' + id).then(({data}) => {
                commit('SET_ARTICLE', data);
                return data;
            })
        },
    }
}