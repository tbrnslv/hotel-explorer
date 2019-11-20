import { createSelector } from "reselect";

const hotelImagesSelector = state => state.hotelImages;

const getHotelImagesSelector = createSelector(hotelImagesSelector, state => {
  return state;
});

export { getHotelImagesSelector };
