import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
