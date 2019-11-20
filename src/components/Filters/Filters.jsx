import React from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import {
  Wrapper,
  InnerWrapper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Search,
  Delete
} from "./styles";

const Filters = ({ activeFilters, initialFilters }) => {
  const [filters, setFilters] = React.useState(initialFilters);

  const history = useHistory();

  React.useEffect(() => {
    setFilters({ ...initialFilters, ...activeFilters });
  }, [activeFilters, initialFilters]);

  const handleChange = event => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value
    });
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  const handleApply = () => {
    history.push(`?${queryString.stringify({ ...filters, currentPage: 1 })}`);
  };

  return (
    <Wrapper>
      <InnerWrapper>
        <FormControl>
          <InputLabel>Sort By</InputLabel>
          <Select
            name="orderBy"
            value={filters.orderBy}
            onChange={handleChange}
          >
            <MenuItem value={"name"}>Name</MenuItem>
            <MenuItem value={"city"}>City</MenuItem>
            <MenuItem value={"country"}>Country</MenuItem>
            <MenuItem value={"stars"}>Stars</MenuItem>
            <MenuItem value={"rating"}>Rating</MenuItem>
            <MenuItem value={"date_created"}>Date</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel>Sort Direction</InputLabel>
          <Select
            name="direction"
            value={filters.direction}
            onChange={handleChange}
          >
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"des"}>Descending</MenuItem>
          </Select>
        </FormControl>
        <TextField
          type="text"
          label="Search"
          margin="normal"
          placeholder="search"
          name="searchString"
          value={filters.searchString}
          onChange={handleChange}
        />
      </InnerWrapper>
      <InnerWrapper>
        <Button
          variant="contained"
          color="primary"
          startIcon={<Search />}
          onClick={handleApply}
        >
          Apply Filters
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={resetFilters}
          startIcon={<Delete />}
        >
          Reset Filters
        </Button>
      </InnerWrapper>
    </Wrapper>
  );
};

export default Filters;
