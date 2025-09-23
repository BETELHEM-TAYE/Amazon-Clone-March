import axios from"axios"
const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-jf50.onrender.com",
});
export {axiosInstance};