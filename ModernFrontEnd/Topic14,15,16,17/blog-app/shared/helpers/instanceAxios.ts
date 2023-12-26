import axios, { AxiosInstance } from "axios";

export const instanceAxios: AxiosInstance = axios.create({
  baseURL: "https://blog-api-t6u0.onrender.com/",
  timeout: 15000,
  // headers:{

  // }
});

// instanceAxios.interceptors.request.use(
//   (config) => {
//     return config;
//   },

//   (err) => {
//     console.log("err", err);

//     return err;
//   }
// );
