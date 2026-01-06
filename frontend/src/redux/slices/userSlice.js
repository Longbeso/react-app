// 1️⃣ Import hàm tạo slice từ Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

/*
  2️⃣ Khai báo state ban đầu
  → Đây là dữ liệu Redux sẽ quản lý
*/
const initialState = {
  userName: "",
  image: "",
  role: "USER",
};

/*
  3️⃣ Tạo slice
  → Nơi gom: state + logic thay đổi state + action
*/
const userSlice = createSlice({
  // Tên slice
  // → dùng để tạo action type: "user/setUserName"
  name: "user",

  // State ban đầu
  initialState,

  /*
    4️⃣ Reducers
    → Mỗi hàm = 1 cách thay đổi state
    → Redux Toolkit tự tạo action tương ứng
  */
  reducers: {
    // setUserName("Long")
    setUserName(state, action) {
      state.userName = action.payload;
    },

    // setImage("abc.png")
    setImage(state, action) {
      state.image = action.payload;
    },

    // setRole("ADMIN")
    setRole(state, action) {
      state.role = action.payload;
    },

    // resetForm()
    resetForm(state) {
      state.userName = "";
      state.image = "";
      state.role = "USER";
    },
  },
});

/*
  5️⃣ Export action
  → Component sẽ import mấy hàm này để dispatch
*/
export const { setUserName, setImage, setRole, resetForm } = userSlice.actions;

/*
  6️⃣ Export reducer
  → Đưa vào store để Redux quản lý
*/
export default userSlice.reducer;
console.log(userSlice);
