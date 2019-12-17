import {
  CategoriesState,
  CategoriesActionTypes,
  CategoriesTypes
} from "./types";

const initialState: CategoriesState = {
  categories: [],
  isLoading: false
};

export const categoriesReducer = (
  state = initialState,
  action: CategoriesActionTypes
): CategoriesState => {
  switch (action.type) {
    case CategoriesTypes.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true
      };
    case CategoriesTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        categories: action.payload,
        isLoading: false
      };
    case CategoriesTypes.FETCH_CATEGORIES_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
