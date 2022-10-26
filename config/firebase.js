import  firebase from "firebase"
import 'firebase/storage';
import {API_URL, API_KEY, API_DOMAIN, API_ID, APP_ID, API_BUCKET, SENDER_ID} from "@env"
 
var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: API_DOMAIN,
  databaseURL: API_URL,
  projectId: API_ID,
  storageBucket: API_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();
export default database