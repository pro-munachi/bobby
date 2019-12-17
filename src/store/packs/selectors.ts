import { createSelector } from "reselect";
import { AppState } from "../root-reducer";

const packs = (state: AppState) => state.packs;

export const selectpacks = createSelector([packs], packs => packs.packs);

export const selectpacksLoading = createSelector(
  [packs],
  packs => packs.isLoading
);
