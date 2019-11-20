import { createSelector } from "reselect";

const hotelCommentsSelector = state => state.hotelComments;

const getHotelCommentsSelector = createSelector(
  hotelCommentsSelector,
  state => {
    return state;
  }
);

export { getHotelCommentsSelector };
