import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
        apiKey: "AIzaSyBeTva7pw7SJRkDLVS2xL25DJGUk7aVfCk",
        authDomain: "chatter-890db.firebaseapp.com",
        projectId: "chatter-890db",
        storageBucket: "chatter-890db.appspot.com",
        messagingSenderId: "170711037491",
        appId: "1:170711037491:web:5f6dbd2abbe5ba616ed546"
}).auth();