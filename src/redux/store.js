import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import productSaga from "./ProductSaga/productSaga";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
