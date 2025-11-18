import * as yup from 'yup'

const signUpSchema = yup.object({
  name: yup.string().required('Имя обязательно для заполнения'),
  email: yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
  date: yup
    .date('Введите корректную дату')
    .min(new Date('01/01/1900'), 'Введите корректную дату')
    .max(Date(), 'Введите корректную дату')
    .required('Дата рождения обязательна для заполнения'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать от 6 до 12 символов')
    .max(12, 'Пароль должен содержать от 6 до 12 символов')
    .required('Пароль обязателен для заполнения'),
  checkbox: yup.boolean(true).required('Для использования сервиса необходимо дать согласие'),
})

const signInSchema = yup.object({
  email: yup.string().email('Введите корректный email').required('Email обязателен для заполнения'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать от 6 до 12 символов')
    .max(12, 'Пароль должен содержать от 6 до 12 символов')
    .required('Пароль обязателен для заполнения'),
})

export { signUpSchema, signInSchema }
