import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const signUp = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() =>{
        return signOut(auth)
    }

    const googleLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
    const githubLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }
  
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        });
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {user, logIn, signUp, googleLogin, githubLogin, logOut}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;