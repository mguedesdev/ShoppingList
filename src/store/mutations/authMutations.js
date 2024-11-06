import { SET_USER, SET_ERROR_MESSAGE, SET_LOADING } from '../types/mutationTypes';

export default {
  [SET_USER](state, user) {
    state.user = user;
  },
  [SET_ERROR_MESSAGE](state, message) {
    state.errorMessage = message;
  },
  [SET_LOADING](state, loading) {
    state.loading = loading;
  }
};
