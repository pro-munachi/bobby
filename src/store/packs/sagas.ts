import { takeLatest, all, put, call } from "redux-saga/effects";
import Axios from "axios";

import { PacksTypes, Pack } from "./types";
import { fetchPacksSuccess, fetchPacksFail } from "./actions";

Axios.defaults.baseURL = "https://knack-v2.herokuapp.com/";

function* fetchPacksAsync() {
  try {
    const { data } = yield Axios.get("/packs");
    const packs = yield data.data.map((pack: any) => {
      return {
        id: pack.id,
        title: pack.attributes.name,
        imgUrl: pack.attributes.img || "/assets/img/people.png",
        link: pack.links.self
      } as Pack;
    });
    yield put(fetchPacksSuccess(packs));
  } catch (error) {
    yield put(fetchPacksFail(error.message));
  }
}

function* watchFetchPacks() {
  yield takeLatest(PacksTypes.FETCH_PACKS_START, fetchPacksAsync);
}

export function* categoriesSagas() {
  yield all([call(watchFetchPacks)]);
}
