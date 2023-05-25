import { createContext } from "react";
import { useState, useEffect } from "react";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, proviver } from "../firebase/config";


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
    signInWithEmailAndPassword(auth, values.email, values.password)
      .catch(e => console.log(e))
      /*  .then((userCredential) => {
           const { user } = userCredential

           setUser({
            email: user.email,
            logged: true
           })
       }) */
 }  
   const loginWithGoogle = () => {
       signInWithPopup(auth, proviver)
       .then((result) => {
         console.log(result)
       })
   }

   const register = (values) => {
     createUserWithEmailAndPassword(auth, values.email, values.password)
     .catch(e => console.log(e))
      /* .then((userCredential) => {
        console.log(userCredential)
       
        const { user } = userCredential
        setUser({
            email: user.email,
            logged: true
        })
      }) */
     
   }

   const logout = () => {
      signOut(auth)
       /* setUser({
        email: null,
        logged: false
       }) */
   }


   /* el montaje escucha los cambios de estado de la autentificacion, sobre quien esta logueado, quien se deslogeo  */
   useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        console.log('usuario logueado', user)
        if (user) {
            setUser({
                email: user.email,
                logged: true
            })
        }else{
            setUser({
                email: null,
                logged: false
            })
        }
    })

   }, []);

    return(
        <AuthContext.Provider value={{
            user,
            login,
            register,
            logout,
            loginWithGoogle
        }}>
           {children} 
        </AuthContext.Provider>
    )
}