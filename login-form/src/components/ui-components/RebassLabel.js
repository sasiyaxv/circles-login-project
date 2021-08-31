import React from "react";
import { Text } from "rebass";

export const RebassLabel = ({
  name,
  fontSize,
  fontWeight,
  fontFamily,
  marginBottom,
  htmlFor,
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      mb={marginBottom}
      htmlFor={htmlFor}
    >
      {name}
    </Text>
  );
};
