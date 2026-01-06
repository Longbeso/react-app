import axios from "../utils/axiosCustomize.jsx";

const login = async (email, password) => {
  const formData = new URLSearchParams();
  formData.append("email", email);
  formData.append("password", password);

  const res = await axios.post("http://localhost:8081/api/v1/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.DT;
};

const postCreateNewUser = (email, passWord, userName, role, image) => {
  const form = new FormData();
  form.append("email", email);
  form.append("password", passWord);
  form.append("username", userName);
  form.append("role", role);
  form.append("userImage", image);
  return axios.post("api/v1/participant", form);
};

const getAllUser = () => {
  return axios.get("api/v1/participant/all");
};

const putUpdateUser = (id, userName, role, image) => {
  const form = new FormData();

  form.append("id", id);
  form.append("username", userName);
  form.append("role", role);
  form.append("userImage", image);
  return axios.put(`api/v1/participant`, form);
};

const deleteUser = (userId) => {
  return axios.delete("api/v1/participant", { data: { id: userId } });
};
const res = await login("user@gmail.com", "123456");

localStorage.setItem("access_token", res.access_token);
const token = localStorage.getItem("access_token");

const getUserWithPaginate = async (page, limit) => {
  return axios.get(`api/v1/participant/?page=${page}&limit=${limit}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const postLogin = (email, password) => {
  return axios.post("api/v1/login", { email, password });
};
const postRegister = (email, username, password) => {
  return axios.post("api/v1/register", { email, username, password });
};

export {
  postCreateNewUser,
  getAllUser,
  putUpdateUser,
  deleteUser,
  getUserWithPaginate,
  postLogin,
  postRegister,
};
