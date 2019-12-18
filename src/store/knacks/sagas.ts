import { takeLatest, all, put, call } from "redux-saga/effects";
import Axios from "axios";

import { KnacksTypes, Knack } from "./types";
import { fetchKnacksSuccess, fetchKnacksFail } from "./actions";

Axios.defaults.baseURL = "https://knack-v2.herokuapp.com/";

function* fetchKnacksAsync() {
  try {
    const { data } = yield Axios.get("/knacks");
    console.log(data);
    const knacks = yield data.data.map((knack: any) => {
      return {
        id: knack.id,
        title: knack.attributes.name,
        imgUrl: knack.attributes.img || "/assets/img/people.png",
        subTitle: knack.links.self
      } as Knack;
    });
    yield put(fetchKnacksSuccess(knacks));
  } catch (error) {
    yield put(fetchKnacksFail(error.message));
  }
}

function* watchFetchKnacks() {
  yield takeLatest(KnacksTypes.FETCH_KNACKS_START, fetchKnacksAsync);
}

export function* knacksSagas() {
  yield all([call(watchFetchKnacks)]);
}
