import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers/formReducer"
import renderReducer from "./reducers/renderReducer";

export default configureStore({
  reducer: {
    formlist:formReducer,
    formrender:renderReducer
  }
});
