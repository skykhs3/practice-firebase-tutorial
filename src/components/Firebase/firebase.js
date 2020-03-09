import app from 'firebase/app';
const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.messagingSenderId
  };
  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
  export default Firebase;