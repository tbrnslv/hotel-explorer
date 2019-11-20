import React from "react";
import PropTypes from "prop-types";
import { Rating as MuiRating } from "@material-ui/lab";
import Tooltip from "@material-ui/core/Tooltip";

const IconContainer = props => {
  const { value, ...other } = props;
  return (
    <Tooltip title={`${value}` || ""}>
      <span {...other} />
    </Tooltip>
  );
};

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

const Stars = ({ value }) => {
  return (
    <MuiRating
      readOnly
      name="hover-tooltip"
      value={parseInt(value)}
      precision={1}
      IconContainerComponent={IconContainer}
    />
  );
};

export default Stars;
