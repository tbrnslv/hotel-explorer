import { createSelector } from "reselect";

const uiSelector = state => state.ui;

const getUiSelector = createSelector(uiSelector, state => {
  return state;
});

export { getUiSelector };
