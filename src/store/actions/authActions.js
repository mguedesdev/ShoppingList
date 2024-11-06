import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import notyf from '@/utils/notyf';
import { SET_USER, SET_ERROR_MESSAGE, SET_LOADING } from '../types/mutationTypes';
import router from '@/router';

export default {
  async registerUser({ commit, dispatch }, { email, password, rememberMe }) {
    commit(SET_LOADING, true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      commit(SET_USER, userCredential.user);
      dispatch('storeUserSession', { user: userCredential.user, rememberMe });
      notyf.success('Cadastro realizado com sucesso!');
      router.push('/shoppingList')
    } catch (error) {
      commit(SET_ERROR_MESSAGE, error.message);
      notyf.error('Erro ao cadastrar usuário.');
    } finally {
      commit(SET_LOADING, false);
    }

  },

  async loginUser({ commit, dispatch }, { email, password, rememberMe }) {
    commit(SET_LOADING, true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      commit(SET_USER, userCredential.user);
      dispatch('storeUserSession', { user: userCredential.user, rememberMe });
      notyf.success('Login realizado com sucesso!');
      router.push('/shoppingList')
    } catch (error) {
      commit(SET_ERROR_MESSAGE, 'E-mail ou senha inválidos.');
      notyf.error('Erro ao realizar login.');
    } finally {
      commit(SET_LOADING, false);
    }
  },

  async logoutUser({ commit }) {
    commit(SET_LOADING, true);
    try {
      await signOut(auth);
      commit(SET_USER, null);
      localStorage.removeItem('user');
      sessionStorage.removeItem('user');
      notyf.success('Logout realizado com sucesso!');
      router.push('/');
    } catch (error) {
      commit(SET_ERROR_MESSAGE, error.message);
      notyf.error('Erro ao realizar logout.');
    } finally {
      commit(SET_LOADING, false);
    }
  },

  setErrorMessage ({ commit }, message) {
    commit(SET_ERROR_MESSAGE, message);
  },

  storeUserSession(_, { user, rememberMe }) {
    const userData = JSON.stringify(user);
    if (rememberMe) {
      localStorage.setItem('user', userData);
    } else {
      sessionStorage.setItem('user', userData);
    }
  },

}