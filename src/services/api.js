import config from "@/config.js"
import axios from "axios"

const api = axios.create({
  baseURL: config.api.baseUrl,
})

export default api
