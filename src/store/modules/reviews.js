import axios from "axios";

export default {
    namespaced: true,

    state: {
        reviews: [],
    },

    mutations: {
        SET_REVIEWS(state, data) {
            state.reviews = data;
        },
    },

    actions: {
        getReviews({commit}) {
            return axios.get('/api/method/for/get/reviews/here/').then(({data}) => {
                commit('SET_REVIEWS', data);
                return data;
            })
        },
    }
}