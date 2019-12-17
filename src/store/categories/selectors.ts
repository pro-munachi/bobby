import { createSelector } from "reselect";
import { AppState } from "../root-reducer";

const categories = (state: AppState) => state.categories;

export const selectCategories = createSelector(
  [categories],
  categories => categories.categories
);

export const selectCategoriesLoading = createSelector(
  [categories],
  categories => categories.isLoading
);
