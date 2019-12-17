import { Knack, KnacksTypes, KnacksActionTypes } from "./types";

export const fetchKnacks = (): KnacksActionTypes => {
  return { type: KnacksTypes.FETCH_KNACKS_START };
};

export const fetchKnacksSuccess = (Knacks: Knack[]): KnacksActionTypes => {
  return {
    type: KnacksTypes.FETCH_KNACKS_SUCCESS,
    payload: Knacks
  };
};

export const fetchKnacksFail = (error: string): KnacksActionTypes => {
  return {
    type: KnacksTypes.FETCH_KNACKS_FAIL,
    error
  };
};
