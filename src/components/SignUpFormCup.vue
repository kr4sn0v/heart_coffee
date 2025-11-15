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
        <Field name="password" type="text" id="password" class="sign-up-form-cup__input" />
        <ErrorMessage class="sign-up-form-cup__error" name="password" />
      </div>
    </section>

    <button class="sign-up-form-cup__button" type="submit">Подружиться</button>
    <div class="sign-up-form-cup__error-bottom" v-if="error">
      Произошли технические шоколадки: {{ error }}
    </div>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { signUpSchema } from '../composables/useSchemas.js'
import { register, error } from '../composables/useSignIn.js'
</script>

<style scoped>
.sign-up-form-cup__form {
  display: grid;
  margin-inline: 50px;
}

.sign-up-form-cup__view {
  display: grid;
  font-family: var(--font-body);
  font-weight: 600;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px 100px;
  margin-bottom: 65px;
}

.sign-up-form-cup__input-container {
  display: flex;
  flex-direction: column;
}

.sign-up-form-cup__label {
  font-size: 2.25rem;
  padding: 10px;
}

.sign-up-form-cup__input {
  background: transparent;
  font-family: var(--font-body);
  font-weight: 600;
  border: 2px solid var(--color-text-light);
  border-radius: 25px;
  font-size: 2.5rem;
  color: var(--color-text-light);
  padding: 20px;
}

.sign-up-form-cup__input:focus {
  outline: none;
}

.sign-up-form-cup__error {
  font-size: 2.15rem;
  color: var(--color-text-light);
  opacity: 0.7;
  padding: 10px;
}

.sign-up-form-cup__error-bottom {
  font-family: var(--font-body);
  font-size: 2.15rem;
  color: var(--color-text-light);
  opacity: 0.7;
  padding: 10px;
  text-align: center;
}

.sign-up-form-cup__button {
  text-align: center;
  margin-top: 10px;
  height: 75px;
  background: var(--color-text-light);
  border: none;
  border-radius: 50px;
  color: var(--accent-color);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 2.5rem;
  cursor: pointer;
  white-space: nowrap;
}

::-webkit-calendar-picker-indicator {
  display: none;
}
</style>
