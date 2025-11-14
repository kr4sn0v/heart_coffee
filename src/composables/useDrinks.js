import { db } from '@/firebase'
import { collection, documentId, getDocs, orderBy, query } from 'firebase/firestore'
import { ref } from 'vue'

const drinks = ref([])

const fetchDrinks = async () => {
  const drinksCollection = query(collection(db, 'drinks'), orderBy(documentId()))
  const drinksSnapshot = await getDocs(drinksCollection)
  drinks.value = drinksSnapshot.docs.map((doc) => doc.data())
}

export { drinks, fetchDrinks }
