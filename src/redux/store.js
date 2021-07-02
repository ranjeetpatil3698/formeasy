import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formReducer"
import renderReducer from "./reducers/renderReducer";
import userReducer from "./reducers/userReducer";

export default configureStore({
  reducer: {
    formlist:formReducer,
    formrender:renderReducer,
    user:userReducer
  }
});
