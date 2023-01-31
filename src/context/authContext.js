import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfiguration";
export const AuthContext = createContext();

//special hook to invoke context and useContext at the same time 
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context
}

export const AuthProvider = ({ children }) => { 
  const signUp = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password)
  }
  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  return(
    <AuthContext.Provider value={{signUp, login}}>
      {children}
    </AuthContext.Provider>
  )
}