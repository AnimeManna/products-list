import axios, { AxiosResponse } from "axios";

const apiAxiosClient = axios.create({
  baseURL: "http://localhost:5000/",
});

apiAxiosClient.interceptors.request.use(
  (config) => {
    config.headers.Authorization =
      "Bearer " + localStorage.getItem("tokenAccess");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Когда появится refreshToken
// apiAxiosClient.interceptors.response.use(
//   undefined,
//   async (response: AxiosResponse<any>) => {
//     const { status } = response;
//     if (status === 401) {
//       const accesToken = localStorage.getItem("accessToken");
//     }
//     return Promise.reject(response);
//   }
// );

export default apiAxiosClient;
