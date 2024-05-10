import axios from "axios";
import { getCookies } from "../utils/cookie";


const baseApi = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { Authorization: "Bare " + getCookies() },
});

// baseApi.interceptors.request.use(apiConfig)

export default baseApi;
