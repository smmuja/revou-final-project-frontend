import axios from "axios";
import { getCookies } from "../utils/cookie";

// const apiConfig = (config: any) => {

//     config.headers = {
//         'Authorization' : ''
//         // 'Accept' :
//     }
// }

const baseApi = axios.create({
  baseURL: "https://revou-finalproject-backend-production.up.railway.app/api/",
  headers: { Authorization: "Bare " + getCookies() },
});

// baseApi.interceptors.request.use(apiConfig)

export default baseApi;
