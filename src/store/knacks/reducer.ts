import { KnacksState, KnacksActionTypes, KnacksTypes } from "./types";

const initialState: KnacksState = {
  knacks: [],
  isLoading: false
};

export const knacksReducer = (
  state = initialState,
  action: KnacksActionTypes
): KnacksState => {
  switch (action.type) {
    case KnacksTypes.FETCH_KNACKS_START:
      return {
        ...state,
        isLoading: true
      };
    case KnacksTypes.FETCH_KNACKS_SUCCESS:
      return {
        knacks: action.payload,
        isLoading: false
      };
    case KnacksTypes.FETCH_KNACKS_FAIL:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
