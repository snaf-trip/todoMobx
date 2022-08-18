import React from "react";
import { NavLink } from "react-router-dom";
import "./signForm.components.scss";

interface Props {
  isRegPage: boolean,
}

export const SignForm = (props: Props) => {
  return (
    <div className="signForm">
      <h1 className="signForm__logo">todos.</h1>

      <input type="text" placeholder="email" className="signForm__input" />
      <input type="text" placeholder="password" className="signForm__input" />

      {props.isRegPage ?
        <input type="text" placeholder="repeat password" className="signForm__input" />
        :
        null
      }

      <button className="signForm__buttonAuth">
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
