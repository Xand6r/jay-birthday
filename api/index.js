const axios = require("axios");
const BASE_URL = "https://jay-birthday-27.vercel.app/api";
// const BASE_URL = "http://localhost:3000/api";

export const getRequest = (path) => {
  return axios.get(`${BASE_URL}${path}`);
};


export const postRequest = (path, data) => {
  return axios.post(`${BASE_URL}${path}`, data)
}
