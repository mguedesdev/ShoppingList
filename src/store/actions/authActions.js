import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import notyf from '@/utils/notyf';
import { SET_USER, SET_ERROR_MESSAGE } from '../types/mutationTypes';
import router from '@/router';

export default {
  async registerUser ({ commit }, { email, password }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      commit(SET_USER, userCredential.user);
      notyf.success('Cadastro realizado com sucesso!');
      router.push('/shoppingList')
    } catch (error) {
      commit(SET_ERROR_MESSAGE, error.message);
      notyf.error('Erro ao cadastrar usuário.');
    }
  },

  async loginUser ({ commit }, { email, password }) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      commit(SET_USER, userCredential.user);
      notyf.success('Login realizado com sucesso!');
      router.push('/shoppingList')
    } catch (error) {
      commit(SET_ERROR_MESSAGE, 'E-mail ou senha inválidos.');
      notyf.error('Erro ao realizar login.');
    }
  },

  async logoutUser ({ commit }) {
    try {
      await signOut(auth);
      commit(SET_USER, null);
      notyf.success('Logout realizado com sucesso!');
      router.push('/');
    } catch (error) {
      commit(SET_ERROR_MESSAGE, error.message);
      notyf.error('Erro ao realizar logout.');
    }
  },

  setErrorMessage ({ commit }, message) {
    commit(SET_ERROR_MESSAGE, message);
  },

}