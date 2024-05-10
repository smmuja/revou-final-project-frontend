/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
// import { User } from "../api/getUserDetail";
const initialState = {
  errorMessage: "",
};
type Actions = {
  setErrorMessage: (values: string) => void;
};
type State = typeof initialState;
export const useError = create<State & Actions>((set) => ({
  ...initialState,
  setErrorMessage: (values) => set({ errorMessage: values }),
}));
