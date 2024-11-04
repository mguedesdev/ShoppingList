<template>
  <div class="right-side">
    <div class="main-container">
      <div class="title-container">
        <div class="icon-square">
          <font-awesome-icon icon="list-check" class="list-icon" />
        </div>
        <h1>{{ isRegister ? 'Register' : 'Login' }}</h1>
      </div>
      <div class="form-container">
        <form @submit.prevent="handleSubmit">

          <FormInput label="E-mail" type="email" name="email" placeholder="email@example.com" v-model="form.email"
            @input="clearErrorMessage" />

          <FormInput label="Senha" type="password" name="password" placeholder="•••••••••••" v-model="form.password"
            @input="clearErrorMessage" />

          <FormInput v-if="isRegister" label="Confirmar Senha" type="password" name="confirmPassword"
            placeholder="•••••••••••" v-model="form.confirmPassword" @input="clearErrorMessage" />
          <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
          </div>

          <button class="submit-button" type="submit">{{ isRegister ? 'Cadastrar' : 'Entrar' }}</button>
        </form>


        <div class="register-container">
          <p>{{ isRegister ? 'Já tem uma conta?' : 'Não tem uma conta?' }} </p>
          <span class="register-button" @click="toggleForm">{{ isRegister ? 'Entre' : 'Cadastre-se' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import FormInput from './FormInput.vue';
import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import notyf from '@/notyf';


export default {
  name: 'RightSide',
  components: {
    FormInput
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
      },
      isRegister: false,
      errorMessage: '',
    };
  },
  methods: {
    validatePassword(password) {
      const minLength = 6;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumber = /\d/.test(password);

      if (password.length < minLength) {
        return `A senha deve ter pelo menos ${minLength} caracteres.`;
      }
      if (!hasUpperCase) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
      }
      if (!hasLowerCase) {
        return "A senha deve conter pelo menos uma letra minúscula.";
      }
      if (!hasNumber) {
        return "A senha deve conter pelo menos um número.";
      }
      return '';
    },

    async handleSubmit() {
      this.errorMessage = '';
      if (this.isRegister) {

        if (this.form.password !== this.form.confirmPassword) {
          this.errorMessage = "As senhas não coincidem.";
          return;
        }

        const passwordError = this.validatePassword(this.form.password);

        if (passwordError) {
          this.errorMessage = passwordError;
          return;
        }

        try {
          const userCredential = await createUserWithEmailAndPassword(auth, this.form.email, this.form.password);
          console.log('Usuário cadastrado:', userCredential.user);
          notyf.success('Cadastro realizado com sucesso!');
          router.push('/shoppingList');
        } catch (error) {
          console.error("Erro ao cadastrar:", error.message);
          this.errorMessage = error.message;
        }
      } else {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, this.form.email, this.form.password);
          console.log('Usuário logado:', userCredential.user);
          notyf.success('Login realizado com sucesso!');
          router.push('/shoppingList');
        } catch (error) {
          console.error("Erro ao logar:", error.message);
          this.errorMessage = "E-mail ou senha inválidos.";
        }
      }
    },

    toggleForm() {
      this.isRegister = !this.isRegister;
      this.clearForm();
    },

    clearForm() {
      this.form.email = '';
      this.form.password = '';
      this.form.confirmPassword = '';
      this.errorMessage = '';
    },
    clearErrorMessage() {
      this.errorMessage = '';
    },
  },

}
</script>

<style scoped>
.right-side {
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-direction: column;
}

.main-container {
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 10px;
}

.title-container {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.list-icon {
  color: var(--white);
  font-size: 24px;
}

.title-container h1 {
  font-weight: bold;
  color: var(--secondary);
  font-size: 24px;
}

.icon-square {
  width: 40px;
  height: 40px;
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-right: 10px;
}

.form-container {
  width: 100%;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: var(--secondary);
  color: var(--white);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  font-weight: 500;
}

.submit-button:hover {
  background-color: var(--primary-hover);
}

.register-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
}

.register-container p {
  font-size: 14px;
  color: var(--secondary);
  margin-right: 5px;
}

.register-button {
  background-color: transparent;
  color: var(--primary);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.register-button:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

.error-message {
  background-color: #ff746c;
  color: white;
  font-size: 14px;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  width: 100%;
  margin-bottom: 10px;
}
</style>
