import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  myName: "Leo",
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.count = state.count + 1;
    },
    decreaseCounter: (state, action) => {
      state.count = state.count - 1;
    },
    plusCounter: (state, action) => {
      state.count = state.count + action?.payload;
    },
  },
});
// Một action là một object có dạng:
// {
//   type: "counter/increase",
//   payload: 1
// }

// type → mô tả hành động gì xảy ra

// payload → dữ liệu kèm theo (nếu có)

console.log(counterSlice);
console.log(counterSlice.reducer);
export const { increaseCounter, decreaseCounter, plusCounter } =
  counterSlice.actions;
export default counterSlice.reducer;
