import { ref } from 'vue'

const activeDrinkKey = ref('')

const selectDrink = ([id, price]) => {
  if (activeDrinkKey.value === `${id}-${price}`) {
    activeDrinkKey.value = ''
  } else {
    activeDrinkKey.value = `${id}-${price}`
  }
}

export { activeDrinkKey, selectDrink }
