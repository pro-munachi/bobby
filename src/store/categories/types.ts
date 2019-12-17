export enum CategoriesTypes {
  FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START",
  FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
  FETCH_CATEGORIES_FAIL = "FETCH_CATEGORIES_FAIL"
}

export interface Category {
  id: string;
  title: string;
  imgUrl: string;
  link: string;
}

export interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
}

export interface FetchCategoriesStartAction {
  type: typeof CategoriesTypes.FETCH_CATEGORIES_START;
}

export interface FetchCategoriesSuccessAction {
  type: typeof CategoriesTypes.FETCH_CATEGORIES_SUCCESS;
  payload: Category[];
}

export interface FetchCategoriesFailAction {
  type: typeof CategoriesTypes.FETCH_CATEGORIES_FAIL;
  error: string;
}

export type CategoriesActionTypes =
  | FetchCategoriesStartAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailAction;
