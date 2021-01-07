import axios from "axios";
import { BACKEND_LINK } from "../constants"

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: `${BACKEND_LINK}`,
        headers: {
            Authorization: token
        }
    });
}