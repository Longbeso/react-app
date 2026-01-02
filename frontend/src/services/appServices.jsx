import axios from "../utils/axiosCustomize.jsx";

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

export { postCreateNewUser, getAllUser };
