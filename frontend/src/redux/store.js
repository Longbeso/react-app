// sau này cấu hình sau
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/Count";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
