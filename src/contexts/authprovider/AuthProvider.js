import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const[user, setUser]= useState();
    const googleProvider = new GoogleAuthProvider;
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName = name => {
       
        return updateProfile(auth.currentUser, { displayName: name })
      }
      const emailVerify =()=>{
        return sendEmailVerification(auth.currentUser)
      }
      const signInWithGoogle =()=>{
        return signInWithPopup(auth, googleProvider)
      }
      const logOut = ()=>{
        return signOut(auth)
      }
      const signIn = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
      }
      useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
          setUser(currentUser)
         
        })
    
        return () => {
          
          unsubscribe()
        }
      }, [])
    
    const authInfo ={user, createUser, updateName, emailVerify, signInWithGoogle, logOut,signIn}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;