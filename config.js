//firebase config key setup
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyAOHgiyh4Gbq3DAIKMzI-d-6fjaWja-0Iw",
    authDomain: "pikfresh-5949b.firebaseapp.com",
    projectId: "pikfresh-5949b",
    storageBucket: "pikfresh-5949b.appspot.com",
    messagingSenderId: "246340882963",
    appId: "1:246340882963:web:1063d406b96c9e376625e6",
    measurementId: "G-S4DXDT7SCW"
}

if(!firebase.apps.length)
{
    firebase.initializeApp(firebaseConfig);

}
export { firebase };