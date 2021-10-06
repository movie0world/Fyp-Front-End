import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component, redirect, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log("this", isAuthenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to={redirect} />
      }
    />
  );
}

export default ProtectedRoute;
