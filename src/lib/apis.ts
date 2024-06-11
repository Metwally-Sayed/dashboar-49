import axios from "axios";

export default axios.create({
  baseURL: "https://49dev.com/api/v1",
});

export const axiosPrivate = axios.create({
  baseURL: "https://49dev.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
