import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

class AuthService {
  constructor(){
    this.auth = getAuth();
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
}

export default AuthService;