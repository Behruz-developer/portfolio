import axios from "axios";

const axiosClient = axios.create({
    baseURL: `https://dummyjson.com/c/0c96-6602-4afa-bd08`,
});
axiosClient.interceptors.request.use(async (config) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        } else {
            return response;
        }
    },
    (error) => {
        throw error;
    }
);

export default axiosClient;