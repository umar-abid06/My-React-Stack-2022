import { put, call, takeEvery } from "redux-saga/effects";
import { getCatsSuccess } from "./catSlice";

function* workGetCatsFetch() {
  const cats = yield call(() => fetch("https://api.thecatapi.com/v1/breeds"));
  const formattedCats = yield cats.json();
  const formattedShortenedCats = formattedCats.slice(0, 10);
  yield put(getCatsSuccess(formattedShortenedCats));
}

function* catSaga() {
  yield takeEvery("cats/getCatsFetch", workGetCatsFetch);
}

export default catSaga;
