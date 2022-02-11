const { default: Axios } = require("axios");

Axios.defaults.baseURL = "http://localhost:8000/api";

export default Axios;
