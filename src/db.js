import firebase from "firebase";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDSJ0oVCVFn33hsRP66o8CDKS5pnikP4ao",
    authDomain: "calendar-a41be.firebaseapp.com",
    databaseURL: "https://calendar-a41be.firebaseio.com",
    projectId: "calendar-a41be",
    storageBucket: "calendar-a41be.appspot.com",
    messagingSenderId: "446517952910",
    appId: "1:446517952910:web:352ecdc029a245849ee4df"
};

var db = firebase.initializeApp(firebaseConfig).database()
export default db;


