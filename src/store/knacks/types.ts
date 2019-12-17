export enum KnacksTypes {
  FETCH_KNACKS_START = "FETCH_KNACKS_START",
  FETCH_KNACKS_SUCCESS = "FETCH_KNACKS_SUCCESS",
  FETCH_KNACKS_FAIL = "FETCH_KNACKS_FAIL"
}

export interface Knack {
  id: string;
  title: string;
  imgUrl: string;
  link: string;
}

export interface KnacksState {
  knacks: Knack[];
  isLoading: boolean;
}

export interface FetchKnacksStartAction {
  type: typeof KnacksTypes.FETCH_KNACKS_START;
}

export interface FetchKnacksSuccessAction {
  type: typeof KnacksTypes.FETCH_KNACKS_SUCCESS;
  payload: Knack[];
}

export interface FetchKnacksFailAction {
  type: typeof KnacksTypes.FETCH_KNACKS_FAIL;
  error: string;
}

export type KnacksActionTypes =
  | FetchKnacksStartAction
  | FetchKnacksSuccessAction
  | FetchKnacksFailAction;
