import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-ehe2.onrender.com",
});
export { axiosInstance };
