import React from "react";
import { useLocation } from "react-router";
import queryString from "query-string";

// Hook to get JS Object from query strings in URL

export const useParsedQueryString = () => {
  const [currentQuery, setCurrentQuery] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    setCurrentQuery(queryString.parse(location.search));
  }, [location]);
  return currentQuery;
};
