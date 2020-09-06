import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyD_-F-Kg73BXk3grKn_ohkadtgzdIYvBIM",
  authDomain: "auth-test-app-e68f8.firebaseapp.com",
  databaseURL: "https://auth-test-app-e68f8.firebaseio.com",
  projectId: "auth-test-app-e68f8",
  storageBucket: "auth-test-app-e68f8.appspot.com",
  messagingSenderId: "630633760278",
  appId: "1:630633760278:web:cd5ed9d724f45bd472d737"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')

export {
  db,
  auth,
  usersCollection
}
