import { createSelector } from "reselect";
import { AppState } from "../root-reducer";

const knacks = (state: AppState) => state.knacks;

export const selectKnacks = createSelector([knacks], knacks => knacks.knacks);

export const selectpacksLoading = createSelector(
  [knacks],
  knacks => knacks.isLoading
);