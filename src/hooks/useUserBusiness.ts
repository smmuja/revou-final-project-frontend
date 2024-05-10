/* eslint-disable react-hooks/rules-of-hooks */
import { create } from "zustand";
// import { AllBusiness as Business } from "../api/getBusinessAll";
import { Business } from "@/api/Business";

const initialState = {
  business: [] as Business[],
  currentBusinessId: "",
  currentBusiness: {} as Business,
};
type Actions = {
  setAllBusiness: (business: Business[]) => void;
  setCurrentBusinessId: (id: string) => void;
  setCurrentBusiness: (business: Business) => void;
};

type State = typeof initialState;

export const useBusiness = create<State & Actions>((set) => ({
  ...initialState,
  setAllBusiness: (business) => {
    set({ business: business });
  },
  setCurrentBusinessId: (id) => {
    set({ currentBusinessId: id });
  },
  setCurrentBusiness: (business) => {
    set({ currentBusiness: business });
    set({ currentBusinessId: business.id });
  },
}));
// export default useBusiness;
