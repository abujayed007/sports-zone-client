import React, { createContext } from 'react';
import app from '../../Firebase/Firebase/firebase.config';
import {getAuth} from 'firebase/auth'

const auth = getAuth(app)

export const AuthContext = createContext()
const AuthProvider = () => {

    return (
        <div>
            <AuthContext.Provider>
                
            </AuthContext.Provider>
        </div>
    );
};


export default AuthProvider;