import {
  FETCH_HOTEL_IMAGES_REQUEST,
  FETCH_HOTEL_IMAGES_SUCCESS,
  FETCH_HOTEL_IMAGES_FAILURE
} from "../constants/actions";

import handleErrors from "../utils/handleErrors";

import { API_HOTEL_IMAGES } from "../constants/api";

export const fetchHotelImagesRequest = id => ({
  type: FETCH_HOTEL_IMAGES_REQUEST,
  payload: {
    [id]: {
      loading: true,
      error: null
    }
  }
});

export const fetchHotelImagesSuccess = data => ({
  type: FETCH_HOTEL_IMAGES_SUCCESS,
  payload: data
});

export const fetchHotelImagesFailure = (id, error) => ({
  type: FETCH_HOTEL_IMAGES_FAILURE,
  payload: { [id]: { loading: false, error } }
});

export const fetchHotelImages = id => {
  return dispatch => {
    dispatch(fetchHotelImagesRequest(id));
    return fetch(`${API_HOTEL_IMAGES}${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(
          fetchHotelImagesSuccess({
            [json.hotel_id]: {
              links: [...json.images],
              loading: false,
              error: null
            }
          })
        );
      })
      .catch(error => dispatch(fetchHotelImagesFailure(id, error)));
  };
};
