import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import SpinnerLoader from "./page-loader";

export const AuthenticationGuard = ({
  component,
  ...otherProps
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <SpinnerLoader></SpinnerLoader>
      </div>
    ),
  });

  return (
    <Component
      {...otherProps}
    />
  );
};

