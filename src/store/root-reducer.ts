import { PacksState } from "./packs/types";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { categoriesReducer } from "./categories/reducer";
import { CategoriesState } from "./categories/types";
import { packsReducer } from "./packs/reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

export interface AppState {
  categories: CategoriesState;
  packs: PacksState;
}

export const rootReducer = persistReducer<AppState>(
  persistConfig,
  combineReducers({
    categories: categoriesReducer,
    packs: packsReducer
  })
);
