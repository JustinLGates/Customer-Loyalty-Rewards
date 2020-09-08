import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./Components/Example/Slice";

export default configureStore({
  reducer: {
    customer: customerReducer,
  },
});
