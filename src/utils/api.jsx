import axios from "axios";
import toast from "react-hot-toast";

export const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: `${BASE_URL}`,
});

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

const handleRequest = async (method, url, data, showToast = false) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Set Content-Type only for methods that include data
  if (data instanceof FormData) {
    headers["Content-Type"] = "multipart/form-data";
  } else if (
    data &&
    ["post", "put", "patch", "delete"].includes(method.toLowerCase())
  ) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const config = {
      method,
      url: BASE_URL + `/api/v1${url}`,
      headers,
    };

    // Include data only for POST, PUT, and PATCH requests
    if (
      ["post", "put", "patch"].includes(method.toLowerCase()) &&
      data !== undefined &&
      data !== null
    ) {
      config.data = data;
    }

    const response = await api(config);

    if (showToast && response?.data?.message) {
      toast.success(response.data.message);
    }

    return response.data;
  } catch (error) {
    if (
      error?.response?.data?.message ===
      "The client must authenticate itself to get the requested response"
    ) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("userInfo");
      localStorage.removeItem("profileImage");
      window.location.href = "/sign-in";
    }

    const errorMessage =
      error.response?.data?.errors?.name ||
      error.response?.data?.errors?.type ||
      error.response?.data?.message?.error ||
      error.response?.data?.errors?.message ||
      error.response?.data?.message ||
      "An unexpected error occurred.";

    if (showToast) {
      toast.error(errorMessage);
    }
    return Promise.reject(error);
  }
};

const handleRequest2 = async (method, url, data, showToast = false) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  // Set Content-Type only for methods that include data
  if (data instanceof FormData) {
    headers["Content-Type"] = "multipart/form-data";
  } else if (
    data &&
    ["post", "put", "patch", "delete"].includes(method.toLowerCase())
  ) {
    headers["Content-Type"] = "application/json";
  }

  try {
    const config = {
      method,
      url: BASE_URL + url,
      headers,
    };

    // Include data only for DELETE requests
    if (
      ["delete"].includes(method.toLowerCase()) &&
      data !== undefined &&
      data !== null
    ) {
      config.data = data;
    }
    console.log(config.url);

    const response = await api(config);

    if (showToast && response?.data?.message) {
      toast.success(response.data.message);
    }

    return response.data;
  } catch (error) {
    const errorMessage =
      error.response?.data?.errors?.name ||
      error.response?.data?.errors?.type ||
      error.response?.data?.error?.message ||
      error.response?.data?.message ||
      error.response?.data?.errors?.message ||
      "An unexpected error occurred.";

    if (showToast) {
      toast.error(errorMessage);
    }
    return Promise.reject(error);
  }
};

export const getCall = (url, showToast = false) =>
  handleRequest("get", url, undefined, showToast);
export const getById = (url, showToast = false) =>
  handleRequest("get", url, undefined, showToast);
export const postCall = (url, data, showToast = true) =>
  handleRequest("post", url, data, showToast);
export const putCall = (url, data, showToast = true) =>
  handleRequest("put", url, data, showToast);
export const deleteCall = (url, data, showToast = true) =>
  handleRequest("delete", url, data, showToast);
export const getDeleteAll = (url, data, showToast = true) =>
  handleRequest2("delete", url, data, showToast);
