import firebase from 'firebase/app';
import 'firebase/database';

import 'firebase/firestore'
import 'firebase/auth';
import firebaseConfig from '../private';



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;


// export const admin = require("firebase-admin");

// const serviceAccount = require("./serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://myapp-10aec-default-rtdb.europe-west1.firebasedatabase.app"
// });
