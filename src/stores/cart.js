import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])

  const totalItems = computed(() => items.value.reduce((sum, i) => (sum += i.quantity), 0))

  const totalPrice = computed(() =>
    Number(items.value.reduce((sum, i) => (sum += i.price * i.quantity), 0)),
  )

  const addItem = ([drink, activeDrinkKey]) => {
    let price
    let volume
    if (activeDrinkKey === `${drink.id}-${drink.prices.small?.price}`)
      ((price = drink.prices.small.price), (volume = drink.prices.small.volume))
    if (activeDrinkKey === `${drink.id}-${drink.prices.medium?.price}`)
      ((price = drink.prices.medium.price), (volume = drink.prices.medium.volume))
    if (activeDrinkKey === `${drink.id}-${drink.prices.large?.price}`)
      ((price = drink.prices.large.price), (volume = drink.prices.large.volume))

    const newItem = {
      id: drink.id + activeDrinkKey,
      callsign: drink.id,
      name: drink.name,
      activeDrinkKey: activeDrinkKey,
      price: price,
      volume: volume,
      quantity: 1,
    }

    const existing = items.value.find(
      (i) => i.id === newItem.id && i.activeDrinkKey === newItem.activeDrinkKey,
    )

    if (existing) {
      existing.quantity++
    } else {
      items.value.push(newItem)
    }
  }

  const removeItem = ([id, activeDrinkKey]) => {
    items.value = items.value.filter((i) => !(i.id === id && i.activeDrinkKey === activeDrinkKey))
  }

  const updateQuantity = ([id, quantity, activeDrinkKey]) => {
    const item = items.value.find((i) => i.id === id && i.activeDrinkKey === activeDrinkKey)
    if (item) {
      if (quantity > 0) item.quantity = quantity
    }
  }

  const clearCart = () => {
    items.value = []
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
})
