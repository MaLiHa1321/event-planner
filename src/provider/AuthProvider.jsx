import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider

    // crate user
    const createUser =(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const loginUser =(email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

  

    // onauthState
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
    },[])
    console.log(user)




      // update profile
      const handleUpdateprofile =(name,photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
           
        })
    }

    // logout
    const logout =() =>{
        setLoading(true)
        return signOut(auth)
    }

    // googleLogin

    const googleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }







    const info ={
        createUser,
        loginUser,
        logout,
        user,
        googleLogin,
        handleUpdateprofile,
        loading
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;