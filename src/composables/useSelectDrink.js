import { ref } from 'vue'

const activeDrinkKey = ref('')

const selectDrink = ([id, price]) => {
  if (activeDrinkKey.value === `${id}-${price}`) {
    activeDrinkKey.value = ''
  } else {
    activeDrinkKey.value = `${id}-${price}`
  }
  console.log(activeDrinkKey.value)
}

export { activeDrinkKey, selectDrink }
