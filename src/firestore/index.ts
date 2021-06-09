import firebase from 'firebase/app';
import 'firebase/database';

import 'firebase/firestore'
import 'firebase/auth';
import firebaseConfig from '../private';



firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;

