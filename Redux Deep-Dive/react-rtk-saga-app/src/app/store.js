import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import catSlice from "./catSlice";
import catSaga from "./catSaga";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    cats: catSlice,
  },
  middleware: [saga],
});
saga.run(catSaga);

export default store;
