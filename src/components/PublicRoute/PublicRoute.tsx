import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

type PublicRouteProps = {
  restricted: boolean;
} & RouteProps;

export const PublicRoute: React.FC<PublicRouteProps> = ({
  restricted,
  ...routeProps
}) => {
  if (localStorage.getItem("tokenAccess") && restricted) {
    return <Redirect to="/auth" />;
  } else {
    return <Route {...routeProps} />;
  }
};
