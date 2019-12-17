import { takeLatest, all, put, call } from "redux-saga/effects";
import Axios from "axios";

import { CategoriesTypes, Category } from "./types";
import { fetchCategoriesSuccess, fetchCategoriesFail } from "./actions";

Axios.defaults.baseURL = "https://knack-v2.herokuapp.com/";

function* fetchCategoriesAsync() {
  try {
    const { data } = yield Axios.get("/categories");
    const categories = yield data.map((category: any) => {
      return {
        id: category.id,
        title: category.attributes.name,
        imgUrl: category.attributes.img || "/assets/img/people.png",
        link: category.links.self
      } as Category;
    });
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFail(error.message));
  }
}

function* watchFetchCategories() {
  yield takeLatest(
    CategoriesTypes.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSagas() {
  yield all([call(watchFetchCategories)]);
}
