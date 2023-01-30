import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfiguration";
export const AuthContext = createContext();

//special hook to invoke context and useContext at the same time 
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context
}

export const AuthProvider = ({ children }) => {
  const signUp = async(email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }
  
  return(
    <AuthContext.Provider value={{signUp}}>
      {children}
    </AuthContext.Provider>
  )
}