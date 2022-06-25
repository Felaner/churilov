import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCDa5jBWgn3Kd5CohwPLJYsHiwc-lsjBD4',
  authDomain: 'churilov-pro.firebaseapp.com',
  projectId: 'churilov-pro',
  storageBucket: 'churilov-pro.appspot.com',
  messagingSenderId: '234500930339',
  appId: '1:234500930339:web:f60a322203e0ae67196a96',
  measurementId: 'G-6238PRH8EH'
}
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const auth = getAuth(app)

export {
  app,
  db,
  auth
}
