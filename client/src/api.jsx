import axios from "axios"

const api = axios.create({
    baseURL : "https://medi-book-wx62.onrender.com/api"
})

export default api