import { ref, toValue, watchEffect } from 'vue'

export function useFetch(url) {
  const data = ref()
  const error = ref('')
  const loading = ref(false)

  const fetchSections = async () => {
    error.value = ''
    loading.value = true

    try {
      const response = await fetch(toValue(url))
      if (!response) {
        throw new Error(`Ошибка получения данных! Статус: ${response.status}`)
      }
      data.value = await response.json()
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    fetchSections()
  })

  return { data, error, loading }
}
