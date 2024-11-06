import getters from '../getters/authGetters';
import actions from '../actions/authActions';
import mutations from '../mutations/authMutations';

const state = {
  user: null,
  errorMessage: '',
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
