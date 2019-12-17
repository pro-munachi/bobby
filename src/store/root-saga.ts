import { all, call } from "redux-saga/effects";

import { categoriesSagas } from "./categories/sagas";
import { packsSagas } from "./packs/sagas";
import { knacksSagas } from "./knacks/sagas";

export function* rootSaga() {
  yield all([call(categoriesSagas), call(packsSagas), call(knacksSagas)]);
}
