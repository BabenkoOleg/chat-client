import instance from '../axios-instance';

const endpoints = {
  SHOW: '/auth',
  CREATE: '/auth',
};

export const actionTypes = {
  SIGN_IN: 'SIGN_IN',
  CURRENT_USER: 'CURRENT_USER',
};

export const mutationTypes = {
  SET_JWT: 'SET_JWT',
  SET_IS_LOGGED_IN: 'SET_IS_LOGGED_IN',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  CLEAR_JWT: 'CLEAR_JWT',
};

export default {
  namespaced: true,

  state: {
    currentUser: null,
    isLoggedIn: false,
  },

  actions: {
    [actionTypes.SIGN_IN]({ commit }, { auth }) {
      return instance.post(endpoints.CREATE, auth)
        .then((data) => {
          commit(mutationTypes.SET_CURRENT_USER, data);
          return Promise.resolve();
        });
    },

    [actionTypes.CURRENT_USER]({ commit }) {
      return instance.get(endpoints.SHOW)
        .then(data => {
          commit(mutationTypes.SET_CURRENT_USER, data);
          return Promise.resolve();
        })
        .catch(error => {
          commit(mutationTypes.SET_CURRENT_USER, null);
          return Promise.reject(error);
        });
    },
  },

  mutations: {
    [mutationTypes.SET_JWT](state, accessToken) {
      localStorage.setItem('accessToken', accessToken);
    },

    [mutationTypes.SET_CURRENT_USER](state, currentUser) {
      state.currentUser = currentUser;
    },

    [mutationTypes.CLEAR_JWT]() {
      localStorage.removeItem('accessToken');
    },
  },
};
