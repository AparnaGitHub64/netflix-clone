// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { createUserWithEmailAndPassword,
//      getAuth,
//       signInWithEmailAndPassword, 
//       signOut} from "firebase/auth";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCY7XBAkXs6iA6rAWFZ7Qo2Xl-0kZtZ_8k",
//   authDomain: "netflix-clone-60928.firebaseapp.com",
//   projectId: "netflix-clone-60928",
//   storageBucket: "netflix-clone-60928.appspot.com",
//   messagingSenderId: "876067250587",
//   appId: "1:876067250587:web:093370453b446583ccc13e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// const db = getFirestore(app);

// const signup = async (name, email, password) => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, email, password);
//     const user = res.user;
//     await addDoc(collection(db, "user"), {
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (error) {
//     console.log(error);
//     alert(error);
//   }
// };


// const login =async(email, password)=>{
//     try {
//         await signInWithEmailAndPassword(auth,email,password)
//     } catch (error) {
//         console.log(error);
//     alert(error);
//     }
// }



// const logout = ()=>{
//     signOut(auth);
// }


// export {auth,db,login,signup,logout};


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY7XBAkXs6iA6rAWFZ7Qo2Xl-0kZtZ_8k",
  authDomain: "netflix-clone-60928.firebaseapp.com",
  projectId: "netflix-clone-60928",
  storageBucket: "netflix-clone-60928.appspot.com",
  messagingSenderId: "876067250587",
  appId: "1:876067250587:web:093370453b446583ccc13e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Signup function
const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    // Add user to Firestore collection
    await addDoc(collection(db, "users"), {  // changed "user" to "users"
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    console.log("User signed up successfully");
  } catch (error) {
    console.error("Signup error:", error.message);
    // alert(error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Login function
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in successfully");
  } catch (error) {
    console.error("Login error:", error.message);
    // alert(error.message);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

// Logout function
const logout = () => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully");
    })
    .catch((error) => {
      console.error("Logout error:", error.message);
      alert(error.message);
    });
};

export { auth, db, login, signup, logout };
