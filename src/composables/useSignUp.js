import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '@/firebase'
import { ref } from 'vue'

const loading = ref(false)
const error = ref('')

const register = async (values) => {
  try {
    loading.value = true
    const newUser = {
      id: Date.now().toString(),
      role: 'Пользователь',
      name: values.name,
      date: values.date,
      email: values.email,
      password: values.password,
    }
    const userCollection = collection(db, 'users')
    const usersSnapshot = await getDocs(userCollection)
    const exitingUser = usersSnapshot.docs.find((doc) => doc.data().email === newUser.email)
    if (exitingUser) {
      throw new Error('Данный email уже используется другим пользователем')
    } else {
      const userRef = doc(db, 'users', newUser.id)
      setDoc(userRef, newUser)
    }
  } catch (err) {
    error.value = err.message
  } finally {
    setTimeout(() => {
      loading.value = false
    }, 5000)
  }
}

export { register, loading, error }
