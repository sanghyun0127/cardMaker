// firebase 로그인 구현
import {
  firebaseAuth,
  googleProvider,
  githubProvider,
} from "./firebaseSetting";

class AuthService {
  getProvider(providerName) {
    switch (providerName) {
      case "Google":
        return googleProvider;
      case "Github":
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }

  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider); //initialized firebase = firebaseApp 사용
  }

  //logout
  logout() {
    firebaseAuth.signOut();
  }

  // 사용자가 바뀔 때마다 사용자 정보를 전달
  onAuthChange(onUserChanged) {
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
