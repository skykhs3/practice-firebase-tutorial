import app from 'firebase/app';

// const firebaseConfig = {
//     apiKey: process.env.apiKey,
//     authDomain: process.env.authDomain,
//     databaseURL: process.env.databaseURL,
//     projectId: process.env.projectId,
//     storageBucket: process.env.storageBucket,
//     messagingSenderId: process.env.messagingSenderId,
//     appId: process.env.appId,
//     measurementId: process.env.messagingSenderId
//   };
const firebaseConfig = {
  apiKey: "AIzaSyB2U5HcUXfL0Rg891lDHFthV29XzzSIfxw",
  authDomain: "hyeonsu1984.firebaseapp.com",
  databaseURL: "https://hyeonsu1984.firebaseio.com",
  projectId: "hyeonsu1984",
  storageBucket: "hyeonsu1984.appspot.com",
  messagingSenderId: "30317301704",
  appId: "1:30317301704:web:45d061c7e02278fdf63afd",
  measurementId: "G-HRL0X3LR43"
};

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  export default Firebase;