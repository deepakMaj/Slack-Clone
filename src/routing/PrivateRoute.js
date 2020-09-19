import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = props => {
  const { component: Component, isLoggedIn, ...rest } = props;
  return (
    <Route {...rest} render={props => {
      return isLoggedIn ? (
        <Component {...rest} />
      ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
    }} />
  )
}

export default PrivateRoute
