import { createSelector } from "reselect";

const filtersSelector = state => state.filters;

const getFiltersSelector = createSelector(filtersSelector, state => {
  return state;
});

export { getFiltersSelector };
