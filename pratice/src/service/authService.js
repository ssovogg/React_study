import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

class AuthService {
  constructor(){
    this.auth = getAuth();
    this.googleProvider = new GoogleAuthProvider();
    this.githubProvider = new GithubAuthProvider();
  }

  createAccount(email, password){
    createUserWithEmailAndPassword(this.auth, email, password);
  }

  logIn(email, password){
    signInWithEmailAndPassword(this.auth, email, password);
  }

  logOut(){
    signOut(this.auth);
  }

  confirmUser(user){
    onAuthStateChanged(this.auth, user);
  }

  socialLogin(provider){
    if(provider === "google"){
      signInWithPopup(this.auth, this.googleProvider);
    } else if (provider === "github") {
      signInWithPopup(this.auth, this.githubProvider);
    }
  }
}

export default AuthService;