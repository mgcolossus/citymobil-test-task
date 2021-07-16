import React from "react";

interface Props {
  errorMessage: string;
}

export const ErrorBlock = ({errorMessage}: Props) => {
  return (
    <div className="error-block">
      <div>{errorMessage}</div>
    </div>
  );
};
