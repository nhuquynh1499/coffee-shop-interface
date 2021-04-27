import Rating from "@material-ui/lab/Rating";
import React from "react";

const RatingColumn = () => {
  return (
    <Rating name="read-only" value={2} readOnly />
  );
};
export default RatingColumn;
