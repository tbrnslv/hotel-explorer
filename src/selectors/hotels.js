import { createSelector } from "reselect";

const hotelsSelector = state => state.hotels;
const filtersSelector = state => state.filters;

const getHotelsSelector = createSelector(hotelsSelector, state => {
  return state;
});

const getFilteredHotelResultsSelector = createSelector(
  hotelsSelector,
  filtersSelector,
  (
    hotels,
    { searchString, direction, orderBy, currentPage, paginationSize }
  ) => {
    if (hotels.data) {
      const searchStringFiltered = Object.keys(hotels.data.entities.hotel)
        .filter(key =>
          hotels.data.entities.hotel[key].name
            .toLowerCase()
            .includes(searchString.toLowerCase())
        )
        .sort((a, b) => {
          return hotels.data.entities.hotel[a][orderBy] >
            hotels.data.entities.hotel[b][orderBy]
            ? direction === "asc"
              ? 1
              : -1
            : hotels.data.entities.hotel[a][orderBy] ===
              hotels.data.entities.hotel[b][orderBy]
            ? hotels.data.entities.hotel[a][orderBy] >
              hotels.data.entities.hotel[b][orderBy]
              ? direction === "asc"
                ? 1
                : -1
              : direction === "asc"
              ? -1
              : 1
            : direction === "asc"
            ? -1
            : 1;
        });

      const filteredLength = searchStringFiltered.length;

      const paginatedResults = searchStringFiltered.filter(
        (_, index) =>
          (currentPage - 1) * paginationSize <= index &&
          index < currentPage * paginationSize
      );

      return { filteredLength: filteredLength, paginated: paginatedResults };
    } else {
      return null;
    }
  }
);

export { getHotelsSelector, getFilteredHotelResultsSelector };
