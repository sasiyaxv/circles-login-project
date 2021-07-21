import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
