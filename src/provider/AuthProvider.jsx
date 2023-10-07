import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null)



const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const googleProvider = new GoogleAuthProvider

    // crate user
    const createUser =(email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // login user

    const loginUser =(email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

  

    // onauthState
    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
        })
    },[])
    console.log(user)




      // update profile
      const handleUpdateprofile =(name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // logout
    const logout =() =>{
        return signOut(auth)
    }

    // googleLogin

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }







    const info ={
        createUser,
        loginUser,
        logout,
        user,
        googleLogin,
        handleUpdateprofile
    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;