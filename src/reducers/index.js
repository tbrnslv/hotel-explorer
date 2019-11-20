import { combineReducers } from "redux";
import hotelsReducer from "./hotels";
import hotelImagesReducer from "./hotelImages";
import hotelCommentsReducer from "./hotelComments";
import uiReducer from "./ui";
import filtersReducer from "./filters";

export default combineReducers({
  ui: uiReducer,
  hotels: hotelsReducer,
  hotelImages: hotelImagesReducer,
  hotelComments: hotelCommentsReducer,
  filters: filtersReducer
});
