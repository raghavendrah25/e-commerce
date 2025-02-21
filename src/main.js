import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDzLjnRsCJ2CeBjOxBBPHfjpk6qFpiQkKY",
  authDomain: "e-commerce-f2e3f.firebaseapp.com",
  projectId: "e-commerce-f2e3f",
  storageBucket: "e-commerce-f2e3f.firebasestorage.app",
  messagingSenderId: "126514619345",
  appId: "1:126514619345:web:d3489159f82397050db6f0"
};
firebase.initializeApp(firebaseConfig);


createApp(App).mount('#app')
