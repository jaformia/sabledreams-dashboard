import { axiosClient } from "@/lib/axios";

export const api = {
  get: axiosClient.get,
  post: axiosClient.post,
  put: axiosClient.put,
  patch: axiosClient.patch,
  delete: axiosClient.delete,
};
