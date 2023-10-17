import React from "react";
import { useRouteError } from "react-router-dom";
export const ErrorScreen = () => {
  type errorProps = {
    statusText: string;
    message: string;
  };
  const error = useRouteError() as errorProps;
  return (
    <>
      <h1>OOPS!</h1>
      <p>This is an error screen</p>
      <p>Error: {error.statusText || error.message}</p>
    </>
  );
};
