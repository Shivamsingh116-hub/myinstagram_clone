import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL
const axiosInstance = axios.create({
    baseURL: `${apiUrl}/api`
})
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    }
    ,
    (error) => Promise.reject(error)


)
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error?.response?.status === 440 || error?.response?.status === 498) {
            localStorage.removeItem("token");
            window.location.href = "/login";
        }
          return Promise.reject(error);
    }
)
export default axiosInstance
