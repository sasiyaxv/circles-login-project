import React from "react";
import { Heading } from "rebass";

export const RebassHeading = ({
  name,
  fontSize,
  textAlign,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  return (
    <Heading
      fontSize={fontSize}
      textAlign={textAlign}
      mt={marginTop}
      mb={marginBottom}
      ml={marginLeft}
      mr={marginRight}
    >
      {name}
    </Heading>
  );
};
