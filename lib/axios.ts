import axios from "axios";
import { APP_CONFIG } from "@/constants/config";

export const axiosClient = axios.create({
  baseURL: APP_CONFIG.apiBaseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
