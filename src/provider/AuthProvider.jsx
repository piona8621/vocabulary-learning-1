// import React, { createContext, useEffect, useState } from 'react';
// import app from '../Firebase/FireBase.config';
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children}) => {

// const [user, setUser] = useState(null);
// console.log(user);



// const createNewUser = (email, password) => {
//   return createUserWithEmailAndPassword(auth, email, password);
// };

// const userLogIn = (email, password) => {
//   return signInWithEmailAndPassword(auth, email, password);
// }


// const LogOut = () => {
//  return signOut(auth);
// }


// const authInfo = {
//   user,
//   setUser,
//   createNewUser,
//   LogOut,
//   userLogIn,
// }

// useEffect(() => {
//      const unsubscribe=  onAuthStateChanged(auth, currentUser => {
//         setUser(currentUser);
//       });
//       return() => {
//           unsubscribe();
//       }
// }, [])


//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;   










// import React, { createContext, useEffect, useState } from 'react';
// import app from '../Firebase/FireBase.config';
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from 'firebase/auth';


// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Create a new user with email and password
//   const createNewUser = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

//   // Login user with email and password
//   const userLogIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };




//   // Login user with Google
//   const googleLogin = () => {
//     const provider = new GoogleAuthProvider();
//     return signInWithPopup(auth, provider);
//   };

//   // Logout user
//   const logOut = () => {
//     return signOut(auth);
//   };

//   // Manage user state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   // Provide authentication context values
//   const authInfo = {
//     user,
//     loading,
//     setUser,
//     createNewUser,
//     userLogIn,
//     googleLogin,
//     logOut,
    
//   };

//   return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
// };

// export default AuthProvider;





// 3r time

import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/FireBase.config';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create a new user with email and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user with email and password
  const userLogIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login user with Google
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Logout user
  const logOut = () => {
    return signOut(auth);
  };

  // Manage user state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Provide authentication context values
  const authInfo = {
    user,
    loading,
    setUser,
    createNewUser,
    userLogIn,
    googleLogin,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;   






