import { configureStore } from "@reduxjs/toolkit";
// import { createLogger } from "redux-logger";
import { customMiddleware } from "./middelware/middelware";

import thunkMiddleware from "redux-thunk";
import librosReducer from "./reducers/librosReducer";
// const [logger] = createLogger();

export default configureStore({
    reducer: {
      listaLectura: librosReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat( customMiddleware, thunkMiddleware),
  });