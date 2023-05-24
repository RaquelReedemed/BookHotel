import { createContext } from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";


export const AuthContext = createContext()


/* const mock = {
    email: 'admin@coder.com',
    password: 'coder123'
} */

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        email: null,
        logged: false
   });
   console.log(user)

   const login = (values) => {
    /* if (values.email === mock.email && values.password === mock.password) {
      setUser({
         email: values.email,
         logged: true
      })
    } */

    signInWithEmailAndPassword(auth, values.email, values.password)
       .then((userCredential) => {
           const { user } = userCredential

           setUser({
            email: user.email,
            logged: true
           })
       })
 }

   const register = (values) => {
     createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential)
       
        const { user } = userCredential
        setUser({
            email: user.email,
            logged: true
        })
      })
      .catch(e => console.log(e))
   }

    return(
        <AuthContext.Provider value={{
            user,
            login,
            register
        }}>
           {children} 
        </AuthContext.Provider>
    )
}