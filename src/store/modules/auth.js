import axios from 'axios'

export default {
    namespaced: true,

    state: {
        user: null
    },

    mutations: {
        SET_USER_DATA (state, userData) {
            state.user = { ...state.user, ...userData.user }

            localStorage.setItem('accessToken', userData.accessToken);
            localStorage.setItem('refreshToken', userData.refreshToken);

            axios.defaults.headers.common['Authorization'] = `Bearer ${userData.accessToken}`;
        },
        CLEAR_USER_DATA (state) {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');

            state.user = null;

            delete axios.defaults.headers.common['Authorization'];
        },
        SET_USER_INFO (state, userInfo) {
            state.user = { ...state.user, ...userInfo };
        }
    },

    actions: {
        registration(_, userData) {
            return axios.post('/api/auth/sign-up', userData)
                .then(({ data }) => { return data })
        },

        login({ commit }, userData) {
            return axios.post('/api/auth/sign-in', userData)
                .then(({ data }) => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

                    commit('SET_USER_DATA', data);
                    return data;
                })
        },
        authUser({commit}) {
            return axios.get('/api/admin/admin-protected' )
                .then(({ data }) => {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;

                    console.log(data)
                    commit('SET_USER_INFO', data);
                    return data;
                })
        },

        logout({ commit }) {
            commit('CLEAR_USER_DATA')
        },
    }
}
