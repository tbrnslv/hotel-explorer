import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE
} from "../constants/actions";

const initialState = {
  data: null,
  loading: false,
  error: null
};

const hotels = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTELS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_HOTELS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case FETCH_HOTELS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
};

export default hotels;
