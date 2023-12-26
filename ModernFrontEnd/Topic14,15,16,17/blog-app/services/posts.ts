import { ENDPOINTS } from "../shared/constants/endpoints";
import { instanceAxios } from "../shared/helpers/instanceAxios";

export const getPosts = () =>
  instanceAxios({ method: "GET", url: ENDPOINTS.POSTS });

export const getPostID = (id: number | string) =>
  instanceAxios({ method: "GET", url: ENDPOINTS.POST_ID(id) });

// export const addUser = (form) =>
//   instanceAxios({ method: "POST", url: ENDPOINTS.USERS, data: form });

// export const uptUser = (id, form) =>
//   instanceAxios({ method: "PUT", url: ENDPOINTS.USER_ID(id), data: form });

// export const rmvUser = (id) =>
//   instanceAxios({ method: "DELETE", url: ENDPOINTS.USER_ID(id) });
