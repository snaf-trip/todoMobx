import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { IUserData } from "../pages/signPages/authTypes.pages";


export const signUpApi = (
  userData: IUserData
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, userData.email, userData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

