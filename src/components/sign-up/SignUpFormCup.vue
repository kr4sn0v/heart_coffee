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

    <section class="sign-in-form-cup__checkbox-view">
      <div class="sign-up-form-cup__checkbox-container">
        <Field
          name="checkbox"
          type="checkbox"
          id="checkbox"
          :value="true"
          class="sign-up-form-cup__checkbox"
        />
        <label>
          Согласен с
          <router-link to="/sign-up/documents/terms" class="sign-up-form-cup__router-link">
            условиями</router-link
          >
          использования сервиса и
          <router-link to="/sign-up/documents/processing" class="sign-up-form-cup__router-link">
            обработки</router-link
          >
          персональных данных
        </label>
      </div>
      <ErrorMessage class="sign-up-form-cup__error" name="checkbox" />
    </section>

    <button class="sign-up-form-cup__button" type="submit" v-show="!loading">
      Зарегистрироваться
      <div v-show="loading" class="loader"></div>
    </button>
    <div class="sign-up-form-cup__error-bottom" v-if="error">
      Произошли технические шоколадки: {{ error }}
    </div>
  </Form>
</template>

<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate'
import { signUpSchema } from '../../composables/useSchemas'
import { register, error, loading } from '../../composables/useSignUp.js'
</script>

<style scoped>
.sign-up-form-cup__form {
  font-size: 1.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
  gap: 3em;
  margin-inline: 1.5em;
}

.sign-up-form-cup__view {
  display: grid;
  font-weight: 600;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5em 5em;
}

.sign-up-form-cup__input-container {
  display: flex;
  flex-direction: column;
  max-width: 40em;
}

.sign-up-form-cup__label {
  font-size: 1.35em;
  padding: 0.5em;
}

.sign-up-form-cup__input {
  background: transparent;
  font-weight: 600;
  border: 2px solid rgba(250, 250, 250, 0.5);
  border-radius: var(--border-radius);
  font-size: 1.35em;
  color: var(--light-color);
  padding: 1em;
}

.sign-up-form-cup__input:focus {
  outline: none;
  transition: var(--transition);
  border: 2px solid var(--light-color);
}

.sign-up-form-cup__error {
  font-size: 1.35em;
  opacity: 0.7;
  font-weight: 600;
  padding: 0.5em;
}

.sign-in-form-cup__checkbox-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.sign-up-form-cup__checkbox-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25em;
}

.sign-up-form-cup__checkbox {
  appearance: none;
  width: 1.5em;
  height: 1.5em;
  border: 1.85px solid var(--light-color);
  border-radius: 0.25em;
  background-color: transparent;
  cursor: pointer;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

.sign-up-form-cup__checkbox:checked {
  background-color: var(--light-color);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23334cdb' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}

.sign-up-form-cup__checkbox-container label {
  font-weight: 400;
  font-size: 2rem;
  flex-wrap: wrap;
}

.sign-up-form-cup__router-link {
  color: inherit;
  text-decoration: none;
  opacity: 0.5;
  text-decoration: none;
  background-image: linear-gradient(var(--light-color), var(--light-color));
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: 0% 2px;
  transition: background-size var(--transition) ease;
}

.sign-up-form-cup__router-link:hover {
  opacity: 1;
  background-size: 100% 2px;
  transition: var(--transition);
}

.sign-up-form-cup__error-bottom {
  font-size: 1.35em;
  opacity: 0.7;
  padding: 0.5em;
  text-align: center;
}

.sign-up-form-cup__button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.35em;
  border: none;
  border-radius: var(--border-radius);
  background: var(--light-color);
  color: var(--accent-color);
  font-weight: 700;
  font-size: 1.55em;
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
