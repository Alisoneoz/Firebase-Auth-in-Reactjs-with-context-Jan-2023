import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged,
  signOut } from "firebase/auth";
import { auth } from "../firebaseConfiguration";
export const AuthContext = createContext();

//special hook to invoke context and useContext at the same time 
export const useAuth = () => {
  const context = useContext(AuthContext);
  return context
}

export const AuthProvider = ({ children }) => { 
  const [user, setUser] = useState(null)
  const signUp = (email, password) => {
     return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = ()=>{signOut(auth)}

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser)
    })
    return ()=> unsubcribe()
  }, [])
  
  

  return(
    <AuthContext.Provider value={{signUp, login, user, logout}}>
      {children}
    </AuthContext.Provider>
  )
}