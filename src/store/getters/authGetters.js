export default {
  isAuthenticated: (state) => !!state.user,
  currentUser: (state) => state.user,
};
