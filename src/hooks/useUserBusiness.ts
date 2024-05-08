/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
// import { AllBusiness as Business } from "../api/getBusinessAll";
import { Business } from "../api/getUserDetail";

const initialState = {
  business: [] as Business[],
  currentBusinessId: "",
};
type Actions = {
  setCurrentBusinessId: (values: string) => void;
  resetCurrentBusinessId: () => void;

  setAllBusiness: (allBusiness: Business[]) => void;
};
type State = typeof initialState;
export const useBusiness = create<State & Actions>((set) => ({
  ...initialState,
  resetCurrentBusinessId: () => set({ currentBusinessId: "" }),
  setCurrentBusinessId: (values: string) => set({ currentBusinessId: values }),
  setAllBusiness: (allBusiness) => set({ business: allBusiness }),
}));
