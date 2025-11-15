import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref } from 'vue'

const loading = ref(false)
const error = ref('')

const login = async (values) => {
  try {
    loading.value = true
    const user = {
      role: 'Пользователь',
      email: values.email,
      password: values.password,
    }
    const userCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(userCollection)
    const exitingUser = usersSnapshot.docs.find(
      (doc) => doc.data().email === user.email && doc.data().password === user.password,
    )
    if (!exitingUser) {
      throw new Error('Неверный email или пароль')
    } else {
      alert('Добро пожаловать!')
    }
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

export { login, error }
