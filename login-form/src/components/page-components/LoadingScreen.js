import React from "react";
import loader from "../../icon.jpg";

export const LoadingScreen = () => {
  return (
    <div>
      <img alt="Loading Image" src={loader} height={50} width={50} />
    </div>
  );
};
