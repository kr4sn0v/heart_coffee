// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA24x7tfXeKQxm1RzbrjZeoRRlUsEKXBKM',
  authDomain: 'heart-coffee-store.firebaseapp.com',
  projectId: 'heart-coffee-store',
  storageBucket: 'heart-coffee-store.firebasestorage.app',
  messagingSenderId: '307866652312',
  appId: '1:307866652312:web:04985b6c9c86129628caed',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
