<template>
  <Form
    class="sign-up-form-cup__form"
    :validation-schema="signUpSchema"
    autocomplete="off"
    @submit="register"
  >
    <section class="sign-up-form-cup__view">
      <div class="sign-up-form-cup__input-container">
        <label class="sign-up-form-cup__label" for="name">Ваше имя</label>
        <Field name="name" type="text" id="name" class="sign-up-form-cup__input" />
        <ErrorMessage class="sign-up-form-cup__error" name="name" />
      </div>

      <div class="sign-up-form-cup__input-container">
        <label class="sign-up-form-cup__label" for="email">Почта</label>
        <Field name="email" type="text" id="email" class="sign-up-form-cup__input" />
        <ErrorMessage class="sign-up-form-cup__error" name="email" />
      </div>

      <div class="sign-up-form-cup__input-container">
        <label class="sign-up-form-cup__label" for="date">Когда у вас день рождения?</label>
        <Field name="date" type="date" id="date" class="sign-up-form-cup__input" />
        <ErrorMessage class="sign-up-form-cup__error" name="date" />
      </div>

      <div class="sign-up-form-cup__input-container">
        <label class="sign-up-form-cup__label" for="password">Пароль</label>
        <Field name="password" type="password" id="password" class="sign-up-form-cup__input" />
        <ErrorMessage class="sign-up-form-cup__error" name="password" />
      </div>
    </section>

    <button
      class="sign-up-form-cup__button"
      :class="{ loader, 'sign-up-form-cup__button': loading }"
      type="submit"
    >
      Зарегистрироваться
    </button>
    <div class="sign-up-form-cup__error-bottom" v-if="error">
      Произошли технические шоколадки: {{ error }}
    </div>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { signUpSchema } from '../composables/useSchemas.js'
import { register, error, loading } from '../composables/useSignUp.js'
</script>

<style scoped>
.sign-up-form-cup__form {
  display: grid;
  align-items: center;
  justify-content: center;
  margin-inline: 4rem;
}

.sign-up-form-cup__view {
  display: grid;
  font-family: var(--font-body);
  font-weight: 600;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem 10rem;
  margin-bottom: 6.5rem;
}

.sign-up-form-cup__input-container {
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.sign-up-form-cup__label {
  font-size: 1.85rem;
  padding: 1rem;
}

.sign-up-form-cup__input {
  background: transparent;
  font-family: var(--font-body);
  font-weight: 600;
  border: 2px solid rgba(250, 250, 250, 0.5);
  border-radius: 25px;
  font-size: 2rem;
  color: var(--color-text-light);
  padding: 2rem;
}

.sign-up-form-cup__input:focus {
  outline: none;
  transition: var(--transition);
  border: 2px solid var(--color-text-light);
}

.sign-up-form-cup__error {
  font-size: 1.85rem;
  color: var(--color-text-light);
  opacity: 0.7;
  padding: 1rem;
}

.sign-up-form-cup__error-bottom {
  font-family: var(--font-body);
  font-size: 1.95rem;
  color: var(--color-text-light);
  opacity: 0.7;
  padding: 1rem;
  text-align: center;
}

.sign-up-form-cup__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6.75rem;
  border: none;
  border-radius: 50px;
  color: var(--accent-color);
  background: var(--color-text-light);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 2.15rem;
  cursor: pointer;
  white-space: nowrap;
}

.loader {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, var(--accent-color) 90%, #0000) 0 /
    calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;
}
@keyframes l1 {
  to {
    clip-path: inset(0 -34% 0 0);
  }
}

::-webkit-calendar-picker-indicator {
  display: none;
}
</style>
