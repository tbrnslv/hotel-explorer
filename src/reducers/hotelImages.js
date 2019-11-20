import {
  FETCH_HOTEL_IMAGES_REQUEST,
  FETCH_HOTEL_IMAGES_SUCCESS,
  FETCH_HOTEL_IMAGES_FAILURE
} from "../constants/actions";

const initialState = {};

const hotelImages = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTEL_IMAGES_REQUEST:
      return {
        ...state,
        ...action.payload
      };

    case FETCH_HOTEL_IMAGES_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case FETCH_HOTEL_IMAGES_FAILURE:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default hotelImages;
