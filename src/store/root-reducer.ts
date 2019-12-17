import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoriesReducer } from "./categories/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

export const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    categories: categoriesReducer
  })
);
