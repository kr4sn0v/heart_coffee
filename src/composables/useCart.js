import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

export const useCart = () => {
  const store = useCartStore()
  const { items, totalItems, totalPrice } = storeToRefs(store)

  const { addItem, removeItem, updateQuantity, clearCart } = store

  const safeAddItem = ([drink, activeDrinkKey]) => {
    if (
      (activeDrinkKey === `${drink.id}-${drink.prices.small?.price}` && !drink?.id) ||
      !drink?.name ||
      drink?.prices.small?.price <= 0 ||
      drink?.prices.small?.volume <= 0
    ) {
      alert('Ошибка в свойствах товара, пожалуйста напишите нам на почту')
      return
    }
    if (
      (activeDrinkKey === `${drink.id}-${drink.prices.medium?.price}` && !drink?.id) ||
      !drink?.name ||
      drink?.prices.medium?.price <= 0 ||
      drink?.prices.medium?.volume <= 0
    ) {
      alert('Ошибка в свойствах товара, пожалуйста напишите нам на почту')
      return
    }
    if (
      (activeDrinkKey === `${drink.id}-${drink.prices.large?.price}` && !drink?.id) ||
      !drink?.name ||
      drink?.prices.large?.price <= 0 ||
      drink?.prices.large?.volume <= 0
    ) {
      alert('Ошибка в свойствах товара, пожалуйста напишите нам на почту')
      return
    }
    addItem([drink, activeDrinkKey])
  }

  return {
    items,
    totalItems,
    totalPrice,
    addItem: safeAddItem,
    removeItem,
    updateQuantity,
    clearCart,
  }
}
