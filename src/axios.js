import axios from "axios";

const instance = axios.create({
    baseURL:"https://coursebuild3r.herokuapp.com"
});

export default instance;