import React, { SyntheticEvent, useState } from "react";
import { IUserData } from "./authTypes.pages";

export const AuthPage = () => {
  const [userData, setUserData] = useState<IUserData>({
    email: "",
    password: "",
  } as IUserData);

  const handleLogin = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userData.email, userData.password);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="email"
        value={userData.email}
        onChange={e => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="password"
        value={userData.email}
        onChange={e => setUserData({ ...userData, password: e.target.value })}
      />
      <button>Login</button>
    </div >
  )
}
