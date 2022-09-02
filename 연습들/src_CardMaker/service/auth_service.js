// application에서 사용자가 로그인하거나 로그아웃을 하는 등
// authentication에 관련된 일을 하는 클래스
// 그 역할만 담당! firebase가 필요하니 import 해야한다.
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";

class AuthService {
  constructor(){
    this.firebaseAuth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }
  login(providerName) {
    // google, github 제공업체 객체의 인스턴스 생성
    const authProvider = this.getProvider(providerName);
    // 팝업 창을 사용하여 로그인하려면 signInWithPopup(auth, provider) 호출
    return signInWithPopup(this.firebaseAuth, authProvider);
  }
  
  logout(){
    this.firebaseAuth.signOut();
  }

  getProvider(providerName){
    switch(providerName) {
      case 'Google':
        return this.googleProvider;
      case 'Github':
        return this.githubProvider;
      default:
        throw new Error(`not supported provider : ${providerName}`);
    }
  }
}

export default AuthService;