import { takeEvery, put } from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  GET_PRODUCTS,
  SEARCH_PRODUCTS,
} from "../types/actionTypes";

function* fetchProducts() {
  const res = yield fetch("http://localhost:4000/products");
  const data = yield res.json();
  yield put({ type: FETCH_PRODUCTS, data });
}

function* searchProducts(data) {
  const searchData = yield fetch(
    `http://localhost:4000/products?q=${data.payload}`
  );
  const result = yield searchData.json();
  console.log("saga search products", result);
  yield put({ type: FETCH_PRODUCTS, data: result });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, fetchProducts);
  yield takeEvery(SEARCH_PRODUCTS, searchProducts);
}

export default productSaga;
