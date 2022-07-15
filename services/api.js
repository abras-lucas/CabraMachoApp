import axios from "axios";

const api = axios.create({
    baseURL:'http://10.1.57.217:3333'
});

export default api;