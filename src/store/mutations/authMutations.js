import { SET_USER, CLEAR_USER, SET_ERROR_MESSAGE } from '../types/mutationTypes';

export default {
  [SET_USER](state, user) {
    state.user = user;
  },
  [CLEAR_USER](state) {
    state.user = null;
  },
  [SET_ERROR_MESSAGE](state, message) {
    state.errorMessage = message;
  }
};
