import { SET_UI_MODE } from "../constants/actions";

export const setUiMode = mode => ({
  type: SET_UI_MODE,
  payload: mode
});
