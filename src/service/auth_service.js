// firebase 로그인 구현
import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider); //initialized firebase = firebaseApp 사용
  }
}

export default AuthService;
