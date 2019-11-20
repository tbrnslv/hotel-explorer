import {
  FETCH_HOTEL_COMMENTS_REQUEST,
  FETCH_HOTEL_COMMENTS_SUCCESS,
  FETCH_HOTEL_COMMENTS_FAILURE
} from "../constants/actions";

const initialState = {};

const hotelComments = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTEL_COMMENTS_REQUEST:
      return {
        ...state,
        ...action.payload
      };

    case FETCH_HOTEL_COMMENTS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case FETCH_HOTEL_COMMENTS_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default hotelComments;
