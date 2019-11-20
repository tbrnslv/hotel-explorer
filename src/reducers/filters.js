import { INITIAL_FILTERS } from "../constants/initial";
import { SET_FILTERS } from "../constants/actions";

const filters = (state = INITIAL_FILTERS, action) => {
  switch (action.type) {
    case SET_FILTERS: {
      let newState = { ...state };
      if (action.payload) {
        if (action.payload.currentPage) {
          if (Number.isInteger(parseInt(action.payload.currentPage)))
            newState.currentPage = parseInt(action.payload.currentPage);
        }
        if (action.payload.paginationSize) {
          if (["5", "10", "15", "20"].includes(action.payload.paginationSize))
            newState.paginationSize = parseInt(action.payload.paginationSize);
        }
        if (action.payload.searchString) {
          newState.searchString = action.payload.searchString;
        } else {
          newState.searchString = INITIAL_FILTERS.searchString;
        }
        if (action.payload.orderBy) {
          if (
            [
              "name",
              "city",
              "country",
              "stars",
              "rating",
              "date_created"
            ].includes(action.payload.orderBy)
          )
            newState.orderBy = action.payload.orderBy;
        }
        if (action.payload.direction) {
          if (["asc", "des"].includes(action.payload.direction))
            newState.direction = action.payload.direction;
        }
        return { ...newState };
      }
      return state;
    }
    default:
      return state;
  }
};

export default filters;
