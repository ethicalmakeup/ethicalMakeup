import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCuAzCiIfuNXY_JNuGKDSu8fjt6Zi-4PLI",
    authDomain: "ethicalmakeup-6bf80.firebaseapp.com",
    databaseURL: "https://ethicalmakeup-6bf80.firebaseio.com",
    projectId: "ethicalmakeup-6bf80",
    storageBucket: "ethicalmakeup-6bf80.appspot.com",
    messagingSenderId: "75744406236"
};

firebase.initializeApp(config);

export default firebase;