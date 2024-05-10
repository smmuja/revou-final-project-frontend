import { create } from "zustand";
import { AllBusiness, BusinessPublic } from "@/api/Business"
import { MergeTwoArray } from "@/utils";
import axios from "axios";
import { getCookies } from "@/utils/cookie"

const initialState = {
    businessList: [] as AllBusiness[],
    page: 0,
    limit: 0,
    total_page: 0,
    total_data: 0,
};

const API_URL = import.meta.env.VITE_BASE_URL
const APIHandler = axios.create({
    baseURL: API_URL,
    headers: { Authorization: `Bearer ${getCookies()}`}

})

type Actions = {
    initBusinessList: (businessResponse: BusinessPublic ) => void;
    setMoreBusinessList: (businessResponse: BusinessPublic) => void;
    getMoreBusiness: () => void;
};

type State = typeof initialState;
    export const useBusinessList = create<State & Actions>((set) => ({
        ...initialState,
        initBusinessList: (businessResponse) => {
            console.log(businessResponse)
            set({
                businessList: businessResponse.data,
                limit: businessResponse.limit,
                page: businessResponse.page,
                total_data: businessResponse.total_data,
                total_page: businessResponse.total_page,
            });
        },
        setMoreBusinessList: (businessResponse) => {
            const { businessList } = useBusinessList.getState();
            const currentBusinessList = businessList as AllBusiness[];
            set({
                businessList: MergeTwoArray(currentBusinessList, businessResponse.data),
                limit: businessResponse.limit,
                page: businessResponse.page,
                total_data: businessResponse.total_data,
                total_page: businessResponse.total_page,
            })
        },
        getMoreBusiness: async () => {
            const { setMoreBusinessList, page } = useBusinessList.getState();
            console.log("hit this", page)
            await APIHandler.get<BusinessPublic>(
                `/business?page=${page + 1}`
            ).then((d) => {
                setMoreBusinessList(d.data)
            })
            }
        }
    )
)