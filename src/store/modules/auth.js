import getters from '../getters/authGetters';
import actions from '../actions/authActions';
import mutations from '../mutations/authMutations';

const state = {
  user: JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user')) || null,
  errorMessage: '',
  storeUserSession: null,
  loading: false
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
