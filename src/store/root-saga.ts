import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./categories/sagas";

export function* rootSaga() {
  yield all([call(categoriesSagas)]);
}
