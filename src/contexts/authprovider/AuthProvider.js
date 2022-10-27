import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const[user, setUser]= useState();
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider;
    const createUser=(email, password)=>{
      setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName = name => {
       setLoading(true)
        return updateProfile(auth.currentUser, { displayName: name })
      }
      const emailVerify =()=>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
      }
      const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
      }
      const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
      }
      const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      }
      useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
          setLoading(false)
        })
    
        return () => {
          
          unsubscribe()
        }
      }, [])
    
    const authInfo ={user, createUser, updateName, emailVerify, signInWithGoogle, logOut,signIn, loading}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;