import { normalize, schema } from "normalizr";

import {
  FETCH_HOTEL_COMMENTS_REQUEST,
  FETCH_HOTEL_COMMENTS_SUCCESS,
  FETCH_HOTEL_COMMENTS_FAILURE
} from "../constants/actions";

import handleErrors from "../utils/handleErrors";

import { API_HOTEL_COMMENTS } from "../constants/api";

const comments = [new schema.Entity("comment")];

export const fetchHotelCommentsRequest = id => ({
  type: FETCH_HOTEL_COMMENTS_REQUEST,
  payload: {
    [id]: {
      loading: true,
      error: null
    }
  }
});

export const fetchHotelCommentsSuccess = data => ({
  type: FETCH_HOTEL_COMMENTS_SUCCESS,
  payload: data
});

export const fetchHotelCommentsFailure = (id, error) => ({
  type: FETCH_HOTEL_COMMENTS_FAILURE,
  payload: { [id]: { loading: false, error } }
});

export const fetchHotelComments = id => {
  return dispatch => {
    dispatch(fetchHotelCommentsRequest(id));
    return fetch(`${API_HOTEL_COMMENTS}${id}`)
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        const normalizedData = normalize(json, comments);

        dispatch(
          fetchHotelCommentsSuccess({
            [id]: {
              comments: normalizedData,
              loading: false,
              error: null
            }
          })
        );
      })
      .catch(error => dispatch(fetchHotelCommentsFailure(id, error)));
  };
};
