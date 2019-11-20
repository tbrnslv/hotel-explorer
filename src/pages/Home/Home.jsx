import React from "react";

import queryString from "query-string";

// Constants

import { INITIAL_FILTERS } from "../../constants/initial";

// Hooks

import { useParsedQueryString } from "../../hooks/useParsedQueryString";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Selectors

import { getFiltersSelector } from "../../selectors/filters";
import {
  getHotelsSelector,
  getFilteredHotelResultsSelector
} from "../../selectors/hotels";
import { getHotelImagesSelector } from "../../selectors/hotelImages";
import { getHotelCommentsSelector } from "../../selectors/hotelComments";

// Components

import Filters from "../../components/Filters";
import Card from "../../components/Card";
import Pagination from "../../components/Pagination";

// Actions

import { fetchHotels } from "../../actions/hotels";
import { fetchHotelImages } from "../../actions/hotelImages";
import { fetchHotelComments } from "../../actions/hotelComments";

// Styled Elements

import {
  CardListWrapper,
  CardList,
  CircularProgress,
  Button,
  LoadingWrapper,
  ErrorWrapper,
  LoadingText,
  ErrorText
} from "./styles";

const HomePage = () => {
  // Dependency Hooks

  const query = useParsedQueryString();
  const dispatch = useDispatch();
  const history = useHistory();

  // Initial

  React.useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  React.useEffect(() => {
    query && dispatch({ type: "SET_FILTERS", payload: query });
  }, [dispatch, query]);

  // Selectors

  const activeFilters = useSelector(getFiltersSelector);
  const hotels = useSelector(getHotelsSelector);
  const hotelImages = useSelector(getHotelImagesSelector);
  const hotelComments = useSelector(getHotelCommentsSelector);
  const filteredHotelResults = useSelector(getFilteredHotelResultsSelector);

  // Pagination Handlers

  const onChangePage = page => {
    window.scrollTo(0, 0);
    history.push(
      `?${queryString.stringify({ ...activeFilters, currentPage: page })}`
    );
  };

  const onPaginationChange = event => {
    window.scrollTo(0, 0);
    history.push(
      `?${queryString.stringify({
        ...activeFilters,
        currentPage: 1,
        paginationSize: event.target.value
      })}`
    );
  };

  // Refetch Handler

  const refetchHotels = () => {
    dispatch(fetchHotels());
  };

  // Render Functions

  const renderHotels = () => {
    const { loading, error, data } = hotels;
    if (loading) {
      return (
        <LoadingWrapper>
          <CircularProgress size={120} />
          <LoadingText variant="body1" color="textSecondary" component="p">
            Loading hotels data...
          </LoadingText>
        </LoadingWrapper>
      );
    } else if (error) {
      return (
        <ErrorWrapper>
          <ErrorText variant="body1" color="textSecondary" component="p">
            An error occurred during fetching
          </ErrorText>
          <Button onClick={refetchHotels} variant="contained" color="secondary">
            Try Again
          </Button>
        </ErrorWrapper>
      );
    } else if (data) {
      return filteredHotelResults.paginated.map(id => {
        return (
          <Card
            key={id}
            images={hotelImages[id]}
            fetchHotelImages={fetchHotelImages}
            comments={hotelComments[id]}
            fetchHotelComments={fetchHotelComments}
            {...hotels.data.entities.hotel[id]}
          />
        );
      });
    }
    return null;
  };

  const renderPagination = () => {
    const { currentPage, paginationSize } = activeFilters;
    if (filteredHotelResults && !hotels.error) {
      return (
        <Pagination
          count={filteredHotelResults.filteredLength}
          rowsPerPage={paginationSize}
          page={currentPage - 1}
          onChangePage={onChangePage}
          handlePaginationChange={onPaginationChange}
        />
      );
    }
    return null;
  };

  return (
    <div>
      <Filters activeFilters={activeFilters} initialFilters={INITIAL_FILTERS} />
      <CardListWrapper>
        <CardList>{renderHotels()}</CardList>
        {renderPagination()}
      </CardListWrapper>
    </div>
  );
};

export default HomePage;
