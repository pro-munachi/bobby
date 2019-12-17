import { PacksState, PacksActionTypes, PacksTypes } from "./types";

const initialState: PacksState = {
  packs: [],
  isLoading: false
};

export const packsReducer = (
  state = initialState,
  action: PacksActionTypes
): PacksState => {
  switch (action.type) {
    case PacksTypes.FETCH_PACKS_START:
      return {
        ...state,
        isLoading: true
      };
    case PacksTypes.FETCH_PACKS_SUCCESS:
      return {
        packs: action.payload,
        isLoading: false
      };
    case PacksTypes.FETCH_PACKS_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
