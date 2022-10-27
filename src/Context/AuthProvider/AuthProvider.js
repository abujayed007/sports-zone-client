import React, { Children, createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)


    const signUp = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const logIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }

    const logOut =() =>{
        setLoading(true)
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
            setLoading(false)
        });
        return () =>{
            unsubscribe()
        }
    },[])
    const authInfo = {user, 
        logIn, 
        signUp, 
        googleLogin, 
        githubLogin, 
        logOut, 
        updateUserProfile,
        loading}

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;