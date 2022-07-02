import { takeEvery, put } from "redux-saga/effects";
import { FETCH_PRODUCTS, GET_PRODUCTS } from "../types/actionTypes";

function* fetchProducts() {
  const res = yield fetch("http://localhost:4000/products");
  const data = yield res.json();
  yield put({ type: FETCH_PRODUCTS, data });
}

function* productSaga() {
  yield takeEvery(GET_PRODUCTS, fetchProducts);
}

export default productSaga;
