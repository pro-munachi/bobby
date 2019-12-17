import { Pack, PacksTypes, PacksActionTypes } from "./types";

export const fetchPacks = (): PacksActionTypes => {
  return { type: PacksTypes.FETCH_PACKS_START };
};

export const fetchPacksSuccess = (Packs: Pack[]): PacksActionTypes => {
  return {
    type: PacksTypes.FETCH_PACKS_SUCCESS,
    payload: Packs
  };
};

export const fetchPacksFail = (error: string): PacksActionTypes => {
  return {
    type: PacksTypes.FETCH_PACKS_FAIL,
    error
  };
};
