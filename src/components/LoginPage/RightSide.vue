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
            @input="handlePasswordInput" @showValidate="handleShowValidate" />

          <div v-if="isRegister" :class="{ focused: showValidate }" class="password-validation">
            <div class="validation-item">
              <font-awesome-icon icon="circle-check" :class="{ 'valid-icon': hasMinLength }" />
              <p>A senha deve ter pelo menos 6 caracteres.</p>
            </div>
            <div class="validation-item">
              <font-awesome-icon icon="circle-check" :class="{ 'valid-icon': hasUpperCase }" />
              <p>A senha deve conter pelo menos uma letra maiúscula.</p>
            </div>
            <div class="validation-item">
              <font-awesome-icon icon="circle-check" :class="{ 'valid-icon': hasLowerCase }" />
              <p>A senha deve conter pelo menos uma letra minúscula.</p>
            </div>
            <div class="validation-item">
              <font-awesome-icon icon="circle-check" :class="{ 'valid-icon': hasNumber }" />
              <p>A senha deve conter pelo menos um número.</p>
            </div>
          </div>


          <FormInput v-if="isRegister" label="Confirmar Senha" type="password" name="confirmPassword"
            placeholder="•••••••••••" v-model="form.confirmPassword" @input="clearErrorMessage" />
          <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
          </div>

          <button class="submit-button" type="submit" :disabled="loading">
            <span v-if="!loading">{{ isRegister ? 'Cadastrar' : 'Entrar' }}</span>
            <LoadingSpinner size="small" v-else />
          </button>

        </form>

        <div class="options">


          <div class="remember-me">
            <input type="checkbox" id="rememberMe" v-model="form.rememberMe" />
            <label for="rememberMe">Manter-me conectado</label>
          </div>

          <div class="register-container">
            <p>{{ isRegister ? 'Já tem uma conta?' : 'Não tem uma conta?' }} </p>
            <span class="register-button" @click="toggleForm">{{ isRegister ? 'Entre' : 'Cadastre-se' }}</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import LoadingSpinner from '../LoadingSpinner.vue';
import FormInput from './FormInput.vue';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'RightSide',
  components: {
    FormInput,
    LoadingSpinner,
  },
  data() {
    return {
      form: {
        email: '',
        password: '',
        confirmPassword: '',
        rememberMe: false,
      },
      isRegister: false,
      showValidate: false,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      minLength: 6,
    };
  },
  computed: {
    ...mapState('auth', ['errorMessage', 'loading']),
  },
  methods: {
    ...mapActions('auth', ['registerUser', 'loginUser', 'setErrorMessage']),

    checkPasswordCriteria(password) {
      this.hasMinLength = password.length >= this.minLength;
      this.hasUpperCase = /[A-Z]/.test(password);
      this.hasLowerCase = /[a-z]/.test(password);
      this.hasNumber = /\d/.test(password);
    },

    handlePasswordInput() {
      this.checkPasswordCriteria(this.form.password);
      this.clearErrorMessage();
    },

    validatePassword(password) {

      this.checkPasswordCriteria(password);

      if (password.length < this.minLength) {
        return `A senha deve ter pelo menos ${this.minLength} caracteres.`;
      }
      if (!this.hasUpperCase) {
        return "A senha deve conter pelo menos uma letra maiúscula.";
      }
      if (!this.hasLowerCase) {
        return "A senha deve conter pelo menos uma letra minúscula.";
      }
      if (!this.hasNumber) {
        return "A senha deve conter pelo menos um número.";
      }
      return '';
    },

    async handleSubmit() {
      this.clearErrorMessage();

      if (this.isRegister) {
        if (this.form.password !== this.form.confirmPassword) {
          this.setErrorMessage('As senhas não coincidem.');
          return;
        }

        const passwordError = this.validatePassword(this.form.password);
        if (passwordError) {
          this.setErrorMessage(passwordError);
          return;
        }

        await this.registerUser({
          email: this.form.email,
          password: this.form.password,
          rememberMe: this.form.rememberMe
        });
      } else {
        await this.loginUser({
          email: this.form.email,
          password: this.form.password,
          rememberMe: this.form.rememberMe
        });
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
    },
    clearErrorMessage() {
      this.setErrorMessage('');
    },
    handleShowValidate(show) {
      this.showValidate = show;
    },
  },
};
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
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-button:hover {
  background-color: var(--primary-hover);
}

.submit-button:disabled {
  background-color: var(--secondary);
  cursor: default;
  opacity: 0.5;
}

.register-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
  margin-top: 10px;
}

.validation-item {
  color: var(--secondary);
  display: flex;
  gap: 5px;
  align-items: center;
}

.password-validation {
  padding-left: 10px;
  font-size: 14px;
  color: var(--secondary);
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-height: 0;
  transition: all 0.6s ease;
  overflow: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.password-validation.focused {
  color: var(--primary);
  max-height: 150px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.validation-item .valid-icon {
  color: var(--success);
}

.validation-item font-awesome-icon {
  color: var(--secondary);
  font-size: 16px;
}

.options {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 15px;
}

.remember-me {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--secondary);
  margin-right: auto;
}

.remember-me input {
  margin-right: 5px;
}

.remember-me input[type="checkbox"] {
  margin-right: 5px;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid var(--secondary);
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
}

.remember-me input[type="checkbox"]:checked {
  background-color: var(--primary);
  border-color: var(--primary);
}

.remember-me input[type="checkbox"]:checked::before {
  content: "\2713";
  color: var(--white);
  font-size: 12px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;

}

.remember-me input[type="checkbox"]:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
}
</style>
