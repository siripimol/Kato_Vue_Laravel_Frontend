import axios from "axios";

let token = ''

if (localStorage.getItem('token')) {
    token = localStorage.getItem('token')
} else {
    token = ''
}


const authService = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
    headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${token}`
    }
})

export default authService