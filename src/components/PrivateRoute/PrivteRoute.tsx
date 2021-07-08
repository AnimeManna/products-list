import React from "react";
import { Route, Redirect, RouteProps } from "react-router";

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  if (localStorage.getItem("tokenAccess")) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};
