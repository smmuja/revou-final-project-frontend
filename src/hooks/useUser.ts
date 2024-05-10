/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
import { UserPostEdit } from "@/api/User";
const initialState = {
  user: {} as UserPostEdit,
};
type Actions = {
  setUser: (values: UserPostEdit) => void;
};
type State = typeof initialState;
export const useUser = create<State & Actions>((set) => ({
  ...initialState,
  setUser: (values) => set({ user: values }),
}));
