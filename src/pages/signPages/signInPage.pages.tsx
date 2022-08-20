import React from "react";
import { Navigate } from "react-router-dom";
import { SignForm } from "../../components/signForm/signForm.components";

export const SignInPage = () => {
  if (localStorage.getItem("token") === null) {
    return <SignForm isRegPage={false} />
  } else {
    return <Navigate to="/tasks" />
  }
}
