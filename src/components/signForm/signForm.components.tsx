import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signForm.components.scss";
import { signInApi, signUpApi } from "../../api/auth.api";
import { IUserData } from "../../pages/signPages/authTypes.pages";

interface Props {
  isRegPage: boolean,
}

export const SignForm = (props: Props) => {
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
    repeatPassword: ""
  } as IUserData);

  return (
    <div className="signForm">
      <h1 className="signForm__logo">todos.</h1>

      <input
        type="text"
        placeholder="email"
        className="signForm__input"
        value={userData.email}
        onChange={e => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        className="signForm__input"
        value={userData.password}
        onChange={e => setUserData({ ...userData, password: e.target.value })}
      />

      {props.isRegPage ?
        <input
          type="text"
          placeholder="repeat password"
          className="signForm__input"
          value={userData.repeatPassword}
          onChange={e => setUserData({ ...userData, repeatPassword: e.target.value })}
        />
        :
        null
      }

      <button
        className="signForm__buttonAuth"
        onClick={() => props.isRegPage ? signUpApi(userData) : signInApi(userData)}
      >
        {props.isRegPage ? "sign up" : "sing in"}
      </button>

      <p className="signForm__otherAuth" >
        {
          props.isRegPage ?
            <>
              "Already have an account?"
              <NavLink to="/signin" className="signForm__otherAuthLink" >sing in</NavLink>
            </>
            :
            <>
              "Don`t have an account?"
              <NavLink to="/signup" className="signForm__otherAuthLink">sing up</NavLink>
            </>
        }
      </p>
    </div >
  )
}
