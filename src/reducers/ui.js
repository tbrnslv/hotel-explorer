import { SET_UI_MODE } from "../constants/actions";

const initialState = {
  mode: "light"
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case SET_UI_MODE: {
      return { ...state, mode: action.payload };
    }
    default:
      return state;
  }
};

export default ui;
