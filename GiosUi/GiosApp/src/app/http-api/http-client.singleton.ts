import axios from "axios";

export const httpClientSingleton: AxiosInstance = axios.create({
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});