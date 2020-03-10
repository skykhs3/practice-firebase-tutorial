import app from 'firebase/app';
import 'firebase/auth'
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
    console.log(firebaseConfig.apiKey);
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
}
export default Firebase;