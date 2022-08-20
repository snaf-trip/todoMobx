import { createUserWithEmailAndPassword, signInWithEmailAndPassword, Auth } from "firebase/auth";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { IUserData } from "../pages/signPages/authTypes.pages";


export const signUpApi = (
  userData: IUserData,
  ga: Auth,
  navigate: NavigateFunction,
  fromPage: string,
) => {
  createUserWithEmailAndPassword(ga, userData.email, userData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("token", JSON.stringify(user));
      navigate(fromPage, { replace: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export const signInApi = (
  userData: IUserData,
  ga: Auth,
  navigate: NavigateFunction,
  fromPage: string,
) => {
  signInWithEmailAndPassword(ga, userData.email, userData.password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      localStorage.setItem("token", JSON.stringify(user));
      navigate(fromPage, { replace: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}
