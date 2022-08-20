import React from "react";
import { Navigate } from "react-router-dom";
import { SignForm } from "../../components/signForm/signForm.components";

export const SignUpPage = () => {
  if (localStorage.getItem("token") === null) {
    return <SignForm isRegPage={true} />
  } else {
    return <Navigate to="/" />
  }
}
