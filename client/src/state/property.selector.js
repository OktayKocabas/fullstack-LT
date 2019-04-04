import { createSelector } from "reselect";

const selector = state => state.properties;

export const selectProperties = createSelector(
  selector,
  state => state.properties
);
export const selectMaxValue = createSelector(
  selector,
  state => state.maxValue
);
export const selectLoading = createSelector(
  selector,
  state => state.loading
);
