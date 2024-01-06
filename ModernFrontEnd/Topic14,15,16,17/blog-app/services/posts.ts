import { GetProducts, PostDataType } from "../interface/data";
import { ENDPOINTS } from "../shared/constants/endpoints";
import { instanceAxios } from "../shared/helpers/instanceAxios";

export const getPosts: GetProducts = () =>
  instanceAxios({ method: "GET", url: ENDPOINTS.POSTS });

export const getPostID = (id: number | string) =>
  instanceAxios({ method: "GET", url: ENDPOINTS.POST_ID(id) });

// export const addUser = (form) =>
//   instanceAxios({ method: "POST", url: ENDPOINTS.USERS, data: form });

// export const uptPost = (id: number, form: Omit<PostDataType, "id">) =>
export const uptPost = ({ id, ...data }: PostDataType) =>
  instanceAxios({ method: "PUT", url: ENDPOINTS.POST_ID(id), data });

export const rmvPost = (id: string | number) =>
  instanceAxios({ method: "DELETE", url: ENDPOINTS.POST_ID(id) });

export const addPost = (data: PostDataType) =>
  instanceAxios({ method: "POST", url: ENDPOINTS.POSTS, data });

// export const rmvUser = (id) =>
//   instanceAxios({ method: "DELETE", url: ENDPOINTS.USER_ID(id) });
