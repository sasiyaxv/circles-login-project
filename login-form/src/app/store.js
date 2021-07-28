import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/counter/userSlice";

import userNewReducer from "../features/userLogin/userNewReducer";

export default configureStore({
  reducer: {
    user: userNewReducer,
  },
});
