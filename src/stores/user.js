import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const isAuthenticated = computed(() => !!user.value)

  const login = (userData) => {
    user.value = userData
  }

  const getUserData = (userData) => {
    let name = userData.name || ''
    let email = userData.email || ''
    return { name, email }
  }

  const logout = () => {
    user.value = null
  }

  return {
    user,
    isAuthenticated,
    login,
    getUserData,
    logout,
  }
})
