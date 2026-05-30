import axios from "axios";

// const API_URL = "http://localhost:8000";
const API_URL = "https://nspl-backend.vercel.app/";

function getToken(){
    const data=localStorage && localStorage.getItem("tokenAuth");
    return data;
}

const Api = axios.create({
    baseURL: API_URL,
    headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
        Accept: "*/*",
    },
});

export default Api;