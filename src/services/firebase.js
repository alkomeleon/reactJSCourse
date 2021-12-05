import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAwziOpDjx7kLElARnbiIKauak_bF8blaE",
    authDomain: "project-t-f7dc9.firebaseapp.com",
    databaseURL: "https://project-t-f7dc9-default-rtdb.firebaseio.com",
    projectId: "project-t-f7dc9",
    storageBucket: "project-t-f7dc9.appspot.com",
    messagingSenderId: "644673424189",
    appId: "1:644673424189:web:993dfe158a8e9924f69354"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebase.database();