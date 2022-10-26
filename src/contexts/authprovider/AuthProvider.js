import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';
export const AuthContext = createContext()

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const[user, setUser]= useState();
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateName = name => {
       
        return updateProfile(auth.currentUser, { displayName: name })
      }
      const emailVerify =()=>{
        return sendEmailVerification(auth.currentUser)
      }
    
    const authInfo ={user, createUser, updateName, emailVerify}
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;