// utils/authToken.js
export const saveToken = (token) => {
  localStorage.setItem("userToken", token);
};

export const getToken = () => {
  return localStorage.getItem("userToken");
};

export const removeToken = () => {
  localStorage.removeItem("userToken");
};
