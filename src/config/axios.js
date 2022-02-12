const { default: Axios } = require("axios");

Axios.defaults.baseURL = "https://app-name-backend-kato.herokuapp.com/api";

export default Axios;
