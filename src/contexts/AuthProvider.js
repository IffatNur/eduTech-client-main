import React, { createContext } from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
      return signOut(auth);
    }

    const updateUser = (name,photo) =>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo,
      })
    }

    const googleSignIn = () =>{
      return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () =>{
      return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
      })
      return () => unsubscribe();
    },[])

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      updateUser,
      googleSignIn,
      githubSignIn,
    };
    return (
      <div>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
      </div>
    );
};

export default AuthProvider;