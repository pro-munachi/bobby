import { Category, CategoriesActionTypes, CategoriesTypes } from "./types";

export const fetchCategories = (): CategoriesActionTypes => {
  return { type: CategoriesTypes.FETCH_CATEGORIES_START };
};

export const fetchCategoriesSuccess = (
  categories: Category[]
): CategoriesActionTypes => {
  return {
    type: CategoriesTypes.FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const fetchCategoriesFail = (error: string): CategoriesActionTypes => {
  return {
    type: CategoriesTypes.FETCH_CATEGORIES_FAIL,
    error
  };
};
