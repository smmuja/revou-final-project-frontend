/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { User } from "../api/getUserDetail";
const initialState = {
  user: {} as User,
};
type Actions = {
  setUser: (values: User) => void;
};
type State = typeof initialState;
export const useUser = create<State & Actions>((set) => ({
  ...initialState,
  setUser: (values) => set({ user: values }),
}));
