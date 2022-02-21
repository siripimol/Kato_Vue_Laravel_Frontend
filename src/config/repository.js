import api from "./axios";

export default {
    createSession() {
        return api.get('http://localhost:8000/sanctum/csrf-cookie');
    },

    login(params) {
        console.log('params :>> ', params);
        return api.post('http://localhost:8000/api/login', params);
    },

    logout() {
        return api.delete('http://localhost/api/logout');
    },

    getPosts() {
        return api.get(`http://localhost/api/posts`);
    },
};