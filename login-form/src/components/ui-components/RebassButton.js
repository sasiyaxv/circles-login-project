import React from "react";
import { Button } from "rebass";

export const RebassButton = ({ value, ...otherProps }) => {
  return <Button>{value}</Button>;
};
