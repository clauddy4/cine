import axios from "axios";

export default {
    namespaced: true,

    state: {
        movies: [],
    },

    mutations: {
        SET_MOVIES(state, data) {
            state.movies = data;
        },
    },

    actions: {
        getMovies({commit}) {
            return axios.get('/api/method/for/get/movies/here/').then(({data}) => {
                commit('SET_MOVIES', data);
                return data;
            })
        },
    }
}