import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

class AuthService {
  constructor() {
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  createAccount(email, password) {
    createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email, password) {
    signInWithEmailAndPassword(this.auth, email, password);
  }

  socialLogin(provider) {
    if (provider === "google") {
      signInWithPopup(this.auth, this.googleProvider);
    } else if (provider === "github") {
      signInWithPopup(this.auth, this.githubProvider);
    } else {
      throw new Error(`social login error`);
    }
  }

  logout() {
    signOut(this.auth);
  }
}

export default AuthService;
