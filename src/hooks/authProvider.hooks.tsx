import React, { useEffect, useMemo, useState } from "react";
import { Auth, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, FC } from "react";
import { IUser, TypeSetState } from "../types/task.types";

interface IContext {
  user: IUser | null,
  setUser: TypeSetState<IUser | null>
  ga: Auth,
}

interface Props {
  children: React.ReactElement | JSX.Element | null
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = (props: Props): JSX.Element => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga: Auth = getAuth();

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, authUser => {
      setUser(authUser ? {
        id: authUser.uid,
        email: authUser.email
      } : null)
    })
    return () => {
      unListen()
    }
  }, [])

  const values = useMemo(() => ({
    user,
    setUser,
    ga,
  }), [user])

  return (
    <AuthContext.Provider value={{ user, setUser, ga }}>
      {props.children}
    </AuthContext.Provider>
  )
}
