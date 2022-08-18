// import React, { SyntheticEvent, useState } from "react";
// import { IUserData } from "./authTypes.pages";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// export const AuthPage = () => {
//   // const [isRegForm, setIsRegForm] = useState(false);
//   const [userData, setUserData] = useState<IUserData>({
//     email: "",
//     password: "",
//   } as IUserData);

//   const handleLogin = async (isRegForm: boolean) => {

//     const auth = getAuth();

//     if (isRegForm) {
//       try {
//         await createUserWithEmailAndPassword(auth, userData.email, userData.password)
//       } catch (error) {
//         console.log(error.message);
//       }
//     } else {
//       console.log('auth');
//     }
//   }

//   return (
//     <>
//       {props.isRegForm ? <div>SignUp</div> : <div>SignIn</div>}
//     </>

//     // <div>
//     //   <input
//     //     type="text"
//     //     placeholder="email"
//     //     value={userData.email}
//     //     onChange={e => setUserData({ ...userData, email: e.target.value })}
//     //   />
//     //   <input
//     //     type="text"
//     //     placeholder="password"
//     //     value={userData.password}
//     //     onChange={e => setUserData({ ...userData, password: e.target.value })}
//     //   />
//     //   <button onClick={() => handleLogin(false)}>Login</button>
//     //   <button onClick={() => handleLogin(true)}>Sign Up</button>
//     // </div >
//   )
// }
