import axios from "axios";

const instance = axios.create({
  baseURL: "https://netback.herokuapp.com/",
  // baseURL: "https://netback.herokuapp.com"
});

export default instance;
