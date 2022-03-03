import axios from "axios";

let token = ''

if (localStorage.getItem('token')) {
    token = localStorage.getItem('token')
} else {
    token = ''
}


const authService = axios.create({
    baseURL: 'https://stormy-hollows-48222.herokuapp.com/',
    withCredentials: true,
    headers: {
        "Content-type": 'application/json',
        "Accept": 'application/json',
        "Authorization": `Bearer ${token}`
    }
})

export default authService