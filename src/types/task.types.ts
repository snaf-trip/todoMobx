import { Dispatch, SetStateAction } from "react"

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;

export interface IUser {
  id: string,
  email: string,
}

export type TaskType = {
  id: number,
  title: string,
  description: string,
  completed: boolean,
  createDate: string,
}
