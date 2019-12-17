export enum PacksTypes {
  FETCH_PACKS_START = "FETCH_PACKS_START",
  FETCH_PACKS_SUCCESS = "FETCH_PACKS_SUCCESS",
  FETCH_PACKS_FAIL = "FETCH_PACKS_FAIL"
}

export interface Pack {
  id: string;
  title: string;
  imgUrl: string;
  link: string;
}

export interface PacksState {
  packs: Pack[];
  isLoading: boolean;
}

export interface FetchPacksStartAction {
  type: typeof PacksTypes.FETCH_PACKS_START;
}

export interface FetchPacksSuccessAction {
  type: typeof PacksTypes.FETCH_PACKS_SUCCESS;
  payload: Pack[];
}

export interface FetchPacksFailAction {
  type: typeof PacksTypes.FETCH_PACKS_FAIL;
  error: string;
}

export type PacksActionTypes =
  | FetchPacksStartAction
  | FetchPacksSuccessAction
  | FetchPacksFailAction;
