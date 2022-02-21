const { default: axios } = require("axios");
let instance = axios.create({
    withCredentials: true,
});

instance.interceptors.request.use(request => {
    request.headers.common['Accept'] = 'application/json';
    request.headers.common['Content-Type'] = 'application/json';
    return request;
});

instance.interceptors.response.use(
    response => { return response; },
    error => {
        if (error.response.status === 401) {
            // sessionStorage.removeItem('user');
            // window.location.reload();
        }

        return Promise.reject(error);
    }
);
// Axios.defaults.baseURL = "https://app-name-backend-kato.herokuapp.com/api";
instance.defaults.baseURL = "http://127.0.0.1:8000/";

// export default Axios;
export default instance;
