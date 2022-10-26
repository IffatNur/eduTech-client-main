import React, { createContext } from 'react';
import { useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () =>{
      setLoading(true);
      return signOut(auth);
    }

    const updateUser = (name,photo) =>{
      return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo,
      })
    }

    const googleSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    }

    const githubSignIn = () =>{
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    }

    useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
      })
      return () => unsubscribe();
    },[])

    const authInfo = {
      user,
      loading,
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