import { normalize, schema } from "normalizr";

import handleErrors from "../utils/handleErrors";

import { API_HOTELS } from "../constants/api";

import {
  FETCH_HOTELS_REQUEST,
  FETCH_HOTELS_SUCCESS,
  FETCH_HOTELS_FAILURE
} from "../constants/actions";

const hotels = [new schema.Entity("hotel")];

export const fetchHotelsRequest = () => ({
  type: FETCH_HOTELS_REQUEST
});

export const fetchHotelsSuccess = data => ({
  type: FETCH_HOTELS_SUCCESS,
  payload: data
});

export const fetchHotelsFailure = error => ({
  type: FETCH_HOTELS_FAILURE,
  payload: { error }
});

export const fetchHotels = () => {
  return dispatch => {
    dispatch(fetchHotelsRequest());
    return fetch(API_HOTELS)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const normalizedData = normalize(json, hotels);
        dispatch(fetchHotelsSuccess(normalizedData));
      })
      .catch(error => dispatch(fetchHotelsFailure(error)));
  };
};
