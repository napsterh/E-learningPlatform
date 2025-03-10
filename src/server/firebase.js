import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCq0se2sBq3x-g7vg5KANsu1NfBeeAMVeM",
    authDomain: "imedlyreact.firebaseapp.com",
    databaseURL: "https://imedlyreact.firebaseio.com",
    projectId: "imedlyreact",
    storageBucket: "imedlyreact.appspot.com",
    messagingSenderId: "800788935616",
    appId: "1:800788935616:web:6c32e727b3739509a0ce25",
    measurementId: "G-JKF4BM6RD9"
};

class Firebase {
    
    constructor(){
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    estaIniciado(){
        return new Promise(resolve =>{
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default Firebase;
