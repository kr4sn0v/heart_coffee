<template>
  <Form
    class="sign-in-form-cup__form"
    :validation-schema="signInSchema"
    autocomplete="off"
    @submit="login"
  >
    <section class="sign-in-form-cup__view">
      <div class="sign-in-form-cup__input-container">
        <label class="sign-in-form-cup__label" for="email">Почта</label>
        <Field name="email" type="text" id="email" class="sign-in-form-cup__input" />
        <ErrorMessage class="sign-in-form-cup__error" name="email" />
      </div>
      <div class="sign-in-form-cup__input-container">
        <label class="sign-in-form-cup__label" for="password">Пароль</label>
        <Field name="password" type="password" id="password" class="sign-in-form-cup__input" />

        <ErrorMessage class="sign-in-form-cup__error" name="password" />
      </div>
    </section>

    <button class="sign-in-form-cup__button" type="submit">
      <p v-show="!loading">Войти</p>
      <div v-show="loading" class="loader"></div>
    </button>

    <div class="sign-in-form-cup__error-bottom" v-if="error">
      Произошли технические шоколадки: {{ error }}
    </div>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { signInSchema } from '../../composables/useSchemas.js'
import { login, error, loading } from '../../composables/useSignIn.js'
</script>

<style scoped>
.sign-in-form-cup__form {
  font-size: 1.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin-inline: 1.5em;
}

.sign-in-form-cup__view {
  display: grid;
  font-weight: 600;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5em 5em;
}

.sign-in-form-cup__input-container {
  display: flex;
  flex-direction: column;
  max-width: 40em;
}

.sign-in-form-cup__label {
  font-size: 1.35em;
  padding: 0.5em;
}

.sign-in-form-cup__input {
  background: transparent;
  font-weight: 600;
  border: 2px solid rgba(250, 250, 250, 0.5);
  border-radius: var(--border-radius);
  font-size: 1.35em;
  color: var(--light-color);
  padding: 1em;
}

.sign-in-form-cup__input:focus {
  outline: none;
  transition: var(--transition);
  border: 2px solid var(--light-color);
}

.sign-in-form-cup__error {
  font-size: 1.35em;
  opacity: 0.7;
  font-weight: 600;
  padding: 0.5em;
}

.sign-in-form-cup__error-bottom {
  font-size: 1.35em;
  opacity: 0.7;
  padding: 0.5em;
  text-align: center;
}

.sign-in-form-cup__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.35em;
  border: none;
  border-radius: var(--border-radius);
  background: var(--accent-color-dark);
  color: var(--light-color);
  font-weight: 700;
  font-size: 1.55em;
  cursor: pointer;
  white-space: nowrap;
}

.sign-in-form-cup__button:hover {
  background: var(--accent-color-hover);
  transition: var(--transition);
}

.loader {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, var(--accent-color-light) 90%, #0000) 0 /
    calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}

@keyframes l1 {
  to {
    clip-path: inset(0 -34% 0 0);
  }
}
</style>
