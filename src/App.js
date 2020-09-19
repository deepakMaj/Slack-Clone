import React, { Fragment, useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import Slack from './components/Slack';
import PrivateRoute from './routing/PrivateRoute';
import UserContext from './context/user/userContext';

function App() {
  const userContext = useContext(UserContext);
  const isLoggedIn = userContext.user && userContext.user.uid ? true : false;

  if (userContext.loading) {
    return (
      <img src={require('./components/static/loading.gif')} alt="" />
    )
  }

  return (
    <Fragment>
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignIn} />
        <PrivateRoute exact path="/" component={Slack} isLoggedIn={isLoggedIn} />
      </Switch>
    </Fragment>
  );
}

export default App;
