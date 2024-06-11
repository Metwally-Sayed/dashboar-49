import axios from "axios";
import { OperationHttpPaths } from "./enums";

const API_URL = import.meta.env.VITE_APP_API_URL;

export function login(model: any) {
  return axios.post(`${API_URL}${OperationHttpPaths.API_LOGIN}`, model);
}
