// firebase 로그인 구현
import firebase from "firebase";
import firebaseApp from "./firebaseSetting";

class AuthService {
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider); //initialized firebase = firebaseApp 사용
  }

  //logout
  logout() {
    firebase.auth().signOut();
  }

  // 사용자가 바뀔 때마다 사용자 정보를 전달
  onAuthChange(onUserChanged) {
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
