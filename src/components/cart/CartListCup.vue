<template>
  <section class="cart-list-cup__form">
    <div class="cart-list-cup__drinks" v-for="item in props.items" :key="item.id">
      <CartDrinkCup
        :item="item"
        :get-image="localeImage(item)"
        :active-drink-key="activeDrinkKey"
        @update-quantity="(...args) => emit('update-quantity', args)"
        @remove-item="(...args) => emit('remove-item', args)"
      />
    </div>
  </section>
</template>

<script setup>
import CartDrinkCup from './CartDrinkCup.vue'

const props = defineProps({
  items: {
    type: Object,
    required: true,
  },
  getImage: {
    type: Function,
    required: true,
  },
  activeDrinkKey: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-quantity', 'remove-item'])

const localeImage = (item) => {
  try {
    return props.getImage(item.callsign)
  } catch (err) {
    console.error('Ошибка при получении картинки:', item.callsign, err)
  }
}
</script>

<style scoped>
.cart-list-cup__form {
  font-size: 1.5rem;
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 4.5em 9.5em;
  justify-items: center;
  width: 100%;
}

.cart-list-cup__drinks {
  display: flex;
  flex-direction: column;
}
</style>
